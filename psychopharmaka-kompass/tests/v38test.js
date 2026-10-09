/* v3.8: Lernbereich – alle Arten spielbar, Wiederholungsdaten, Lernansicht der Karten. */
const APP=require('path').resolve(process.argv[2]||require('path').join(__dirname,'../dist/psychopharmaka-kompass.html'));
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||undefined});const p=await b.newPage({viewport:{width:390,height:844}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));await p.goto('file://'+APP);await p.waitForTimeout(300);
const out={};
const open=k=>p.evaluate(k=>{const x=document.createElement('button');x.dataset.open=k;document.body.appendChild(x);x.click();x.remove();},k);
await open('drug:mirtazapin');await p.waitForTimeout(100);out.merkOff=await p.evaluate(()=>!!document.querySelector('.sheet .merk-m'));out.chip=await p.evaluate(()=>!!document.querySelector('.sheet .cls-chip'));
await p.evaluate(()=>document.getElementById('back').click());await p.waitForTimeout(100);
await p.click('#learnbtn');await p.waitForTimeout(150);
for(const mode of ['case','who','cmp','list','mix']){
  await p.evaluate(m=>document.querySelector(`[data-lstart="${m}"]`).click(),mode);await p.waitForTimeout(80);
  let n=0;
  for(let i=0;i<12;i++){
    const st=await p.evaluate(()=>({q:!!document.querySelector('.lq'),multi:!!document.querySelector('[data-lcheck]'),sum:!!document.querySelector('.lr-sum')}));
    if(st.sum||!st.q)break; n++;
    await p.evaluate(()=>document.querySelector('[data-lans]').click());await p.waitForTimeout(30);
    if(st.multi){await p.evaluate(()=>document.querySelector('[data-lcheck]').click());await p.waitForTimeout(30);}
    await p.evaluate(()=>document.querySelector('[data-lnext]').click());await p.waitForTimeout(30);
  }
  out[mode]=n;
}
out.sum=await p.evaluate(()=>!!document.querySelector('.lr-sum'));
out.stored=await p.evaluate(()=>Object.keys(JSON.parse(localStorage.getItem('pk_learn2')||'{}')).length);
await p.evaluate(()=>document.getElementById('learnview').click());await p.waitForTimeout(50);
await p.evaluate(()=>document.getElementById('back').click());await p.waitForTimeout(100);
await open('drug:mirtazapin');await p.waitForTimeout(100);out.merkOn=await p.evaluate(()=>!!document.querySelector('.sheet .merk-m'));
out.sw=await p.evaluate(()=>document.querySelector('.sheet').scrollWidth);
console.log(JSON.stringify(out),errs);
const ok=!out.merkOff&&out.chip&&out.merkOn&&['case','who','cmp','list','mix'].every(m=>out[m]>=5)&&out.sum&&out.stored>=20&&out.sw<=390&&!errs.length;
console.log(ok?'V38 OK':'V38 FEHLER');await b.close();process.exit(ok?0:1)})();
