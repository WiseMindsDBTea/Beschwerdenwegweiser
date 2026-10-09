const APP=require('path').resolve(process.argv[2]||require('path').join(__dirname,'../dist/psychopharmaka-kompass.html'));
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||undefined});
const errs=[];const out={};
for(const [w,h,sc] of [[400,860,'m'],[1440,900,'d']]){
 for(const scheme of ['light','dark']){
 const p=await b.newPage({viewport:{width:w,height:h},colorScheme:scheme});p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
 await p.goto('file://'+APP);await p.waitForTimeout(300);
 await p.click('[data-tab="drug"]');await p.click('[data-dview="prof"]');await p.waitForTimeout(200);
 out[sc+scheme+'rows']=await p.$$eval('.pt tbody tr',x=>x.length);
 out[sc+scheme+'sw']=await p.evaluate(()=>document.documentElement.scrollWidth);
 await p.screenshot({path:`${sc}-${scheme}-prof.png`});
 // sort by GEW
 await p.evaluate(()=>document.querySelector('[data-psort="GEW"]').click());await p.waitForTimeout(100);
 out[sc+scheme+'sortTop']=await p.$$eval('.pt tbody tr .pn-n',x=>x.slice(0,4).map(e=>e.textContent));
 await p.fill('#pq','ohne Gewicht, nicht anticholinerg');await p.waitForTimeout(300);
 out[sc+scheme+'q']=await p.$$eval('.pt tbody tr .pn-n',x=>x.length);
 await p.fill('#pq','Sertralin, Mirtazapin');await p.waitForTimeout(300);
 out[sc+scheme+'q2']=await p.$$eval('.pt tbody tr .pn-n',x=>x.map(e=>e.textContent));
 await p.screenshot({path:`${sc}-${scheme}-prof2.png`});
 await p.fill('#pq','');await p.evaluate(()=>{document.querySelector('[data-psort=""]').click();});
 // alg with tie
 await p.evaluate(()=>{const b=document.createElement('button');b.dataset.open='alg:ins-trauma';document.body.appendChild(b);b.click();b.remove();});
 await p.waitForTimeout(200);
 const qi=await p.$('.sheet .qi');
 if(sc==='d'){ await qi.hover(); await p.waitForTimeout(200); out[sc+scheme+'hoverVis']=await p.evaluate(()=>getComputedStyle(document.querySelector('.sheet .aq .qpop')).display); await p.screenshot({path:`${sc}-${scheme}-hover.png`}); await p.mouse.move(5,5);}
 await p.evaluate(()=>document.querySelector('.sheet .qi').click());await p.waitForTimeout(100);
 out[sc+scheme+'pinned']=await p.evaluate(()=>getComputedStyle(document.querySelector('.sheet .aq .qpop')).display);
 await p.screenshot({path:`${sc}-${scheme}-qinfo.png`});
 const ss=await p.$$eval('.sheet [data-aq]',x=>[...new Set(x.map(b=>b.dataset.aq))]);
 for(const q of ss){await p.evaluate(q=>document.querySelector(`.sheet [data-aq="${q}"][data-ai="0"]`).click(),q);}
 await p.waitForTimeout(100);
 out[sc+scheme+'cmp']=await p.evaluate(()=>!!document.querySelector('.sheet .cmp-box'));
 await p.evaluate(()=>{const r=document.querySelector('#alg-res');r.scrollIntoView();});
 await p.screenshot({path:`${sc}-${scheme}-tie.png`});
 out[sc+scheme+'sheetW']=await p.evaluate(()=>document.querySelector('.sheet').scrollWidth);
 await p.close();}}
console.log(JSON.stringify(out,null,0),errs);await b.close()})();
