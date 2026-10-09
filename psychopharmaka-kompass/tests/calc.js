const APP=require('path').resolve(process.argv[2]||require('path').join(__dirname,'../dist/psychopharmaka-kompass.html'));
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||undefined});const p=await b.newPage({viewport:{width:400,height:900}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file://'+APP);await p.click('[data-tab="calc"]');
for(const id of ['bzd','qtc','ap']){await p.click(`details[data-calc="${id}"] summary`);await p.waitForTimeout(150);}
console.log(await p.textContent('#bz-r'),'|',await p.textContent('#qt-f'),'|',await p.textContent('#ap-r'));
await p.click('[data-tab="suche"]');await p.fill('#q','tavor qtc');await p.waitForTimeout(300);console.log((await p.$$('.row')).length,'results');
await p.click('[data-m]').catch(()=>{});
console.log('errs',errs);await b.close()})();
