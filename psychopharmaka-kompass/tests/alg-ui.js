const APP=require('path').resolve(process.argv[2]||require('path').join(__dirname,'../dist/psychopharmaka-kompass.html'));
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||undefined});const p=await b.newPage({viewport:{width:400,height:860}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file://'+APP);await p.waitForTimeout(300);
const ids=await p.evaluate(()=>ALGS.map(a=>a.id));let bad=[];
for(const id of ids){
 await p.evaluate(id=>{const b=document.createElement('button');b.dataset.open='alg:'+id;document.body.appendChild(b);b.click();b.remove();},id);
 const qs=await p.$$eval('.sheet .aq [data-aq]',x=>[...new Set(x.map(b=>b.dataset.aq))]);
 for(const q of qs){await p.evaluate(q=>document.querySelector(`.sheet [data-aq="${q}"][data-ai="0"]`).click(),q);}
 const has=await p.$('.sheet #alg-res');const w=await p.evaluate(()=>document.querySelector('.sheet').scrollWidth);
 if(!has||w>400)bad.push(id+' w'+w);
 await p.evaluate(()=>document.getElementById('back').click());await p.waitForTimeout(20);}
console.log('algs',ids.length,'bad',bad,'errors',errs);await b.close()})();
