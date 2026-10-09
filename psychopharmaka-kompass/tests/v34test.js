/* v3.4: Stufen statt Rangliste, Schätzungs-Kennzeichnung, Fehler melden, Profil-Bewertung (ohne claude.ai: lokale Ablage). */
const APP=require('path').resolve(process.argv[2]||require('path').join(__dirname,'../dist/psychopharmaka-kompass.html'));
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||undefined});const p=await b.newPage({viewport:{width:390,height:844}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));await p.goto('file://'+APP);await p.waitForTimeout(300);
const open=k=>p.evaluate(k=>{const x=document.createElement('button');x.dataset.open=k;document.body.appendChild(x);x.click();x.remove();},k);
const out={};
const ids=await p.evaluate(()=>ALGS.filter(a=>a.kind!=='umst').map(a=>a.id));let best=0,noTier=[];
for(const id of ids){await open('alg:'+id);await p.waitForTimeout(30);
  const r=await p.evaluate(()=>({best:/Beste Wahl/.test(document.querySelector('.sheet').innerText),tier:!!document.querySelector('.sheet .tier-h')}));
  if(r.best)best++;if(!r.tier)noTier.push(id);await p.evaluate(()=>document.getElementById('back').click());await p.waitForTimeout(20);}
out.besteWahl=best;out.ohneStufen=noTier;
await open('drug:quetiapin');await p.waitForTimeout(150);
out.fb=await p.evaluate(()=>!!document.querySelector('.sheet details.fb'));
await p.evaluate(()=>{document.querySelector('.sheet details.fb').open=true;document.querySelector('.sheet .fb-t').value='Test: Dosis prüfen';document.querySelector('.sheet [data-fbsend]').click();});await p.waitForTimeout(150);
out.fbStatus=await p.evaluate(()=>document.querySelector('.sheet .fb-st').textContent);
out.est=await p.evaluate(()=>!!document.querySelector('.sheet .est-note'));
await p.evaluate(()=>document.getElementById('back').click());await p.waitForTimeout(100);
await p.click('[data-tab="drug"]');await p.click('[data-dview="prof"]');await p.waitForTimeout(150);
out.estProf=await p.evaluate(()=>!!document.querySelector('.est-note'));
await p.evaluate(()=>document.querySelector('td[data-pc="olanzapin|GEW"]').click());await p.waitForTimeout(100);
out.estBadge=await p.evaluate(()=>!!document.querySelector('#pexp .est-b'));
await p.evaluate(()=>document.querySelector('#pexp [data-pvote="hi"]').click());await p.waitForTimeout(150);
out.voted=await p.evaluate(()=>document.querySelector('#pexp .pvote-done')?.textContent||'');
out.stored=await p.evaluate(()=>JSON.parse(localStorage.getItem('pk_reports')||'[]').map(r=>r.kind+':'+r.key));
console.log(JSON.stringify(out),errs);
const ok=best===0&&!noTier.length&&out.fb&&out.est&&out.estProf&&out.estBadge&&out.voted&&out.stored.length===2&&!errs.length;
console.log(ok?'V34 OK':'V34 FEHLER');await b.close();process.exit(ok?0:1)})();
