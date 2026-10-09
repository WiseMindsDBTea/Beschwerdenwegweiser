const APP=require('path').resolve(process.argv[2]||require('path').join(__dirname,'../dist/psychopharmaka-kompass.html'));
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||undefined});const file='file://'+APP;
for(const [w,h,sc,tag] of [[400,860,'light','p'],[400,860,'dark','pd'],[360,740,'light','s'],[1280,860,'light','d']]){
 const p=await b.newPage({viewport:{width:w,height:h},colorScheme:sc});const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
 await p.goto(file);await p.waitForTimeout(600);
 await p.screenshot({path:`${tag}-home.png`});
 await p.mouse.wheel(0,500);await p.waitForTimeout(400);await p.screenshot({path:`${tag}-home-scrolled.png`});
 const topH=await p.evaluate(()=>{const t=document.getElementById('top').getBoundingClientRect();return Math.round(t.bottom)});
 await p.click('[data-tab="drug"]');await p.waitForTimeout(200);await p.screenshot({path:`${tag}-drugs.png`});
 await p.click('[data-open="drug:clozapin"]');await p.waitForTimeout(300);
 await p.evaluate(()=>document.querySelector('.sheet').scrollTop=900);await p.waitForTimeout(300);await p.screenshot({path:`${tag}-drug-scrolled.png`});
 // history back
 await p.goBack();await p.waitForTimeout(300);const open1=await p.$('.sheet');
 await p.click('[data-tab="sit"]');await p.waitForTimeout(200);await p.screenshot({path:`${tag}-sits.png`});
 await p.click('[data-open="sit:ez-alk"]');await p.waitForTimeout(200);
 const lnk=await p.$('.sheet .row');if(lnk){await lnk.click();await p.waitForTimeout(200);}
 const depth=await p.evaluate(()=>document.querySelectorAll('.sheet').length);
 await p.goBack();await p.waitForTimeout(250);const t1=await p.textContent('.sheet .title').catch(()=>'none');
 await p.goBack();await p.waitForTimeout(250);const closed=!(await p.$('.sheet'));
 await p.click('[data-tab="calc"]');await p.click('details[data-calc="ciwa"] summary');await p.waitForTimeout(200);await p.screenshot({path:`${tag}-calc.png`});
 const sw=await p.evaluate(()=>document.documentElement.scrollWidth);
 console.log(tag,{topH,backClosedFirst:!open1,afterBack:t1,closed,sw,errs});await p.close();}
await b.close();})();
