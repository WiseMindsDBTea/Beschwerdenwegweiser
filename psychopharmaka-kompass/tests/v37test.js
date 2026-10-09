/* v3.7: Direktantworten in der Suche, Kontrollplan mit Arztbrief-Text. */
const APP=require('path').resolve(process.argv[2]||require('path').join(__dirname,'../dist/psychopharmaka-kompass.html'));
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||undefined});const ctx=await b.newContext({viewport:{width:390,height:844}});const p=await ctx.newPage();
const errs=[];p.on('pageerror',e=>errs.push(e.message));await p.goto('file://'+APP);await p.waitForTimeout(300);
const out={};
const Q=[['Quetiapin max','Höchstdosis'],['lithium spiegel','Kontrollen'],['Clozapin Kontrollen','Kontrollen'],['Mirtazapin Schwangerschaft','Schwangerschaft'],['Haloperidol QT','QT/Torsade'],['Pipamperon Alter','Ältere'],['Seroquel','Kern'],['citalopram acb','Anticholinerge']];
for(const [q,want] of Q){await p.fill('#q',q);await p.waitForTimeout(250);out[q]=await p.evaluate(w=>{const c=document.querySelector('#main .qa');return c?[...c.querySelectorAll('.qa-l')].map(x=>x.textContent).join('|'):'—';},want);}
await p.fill('#q','');
const okQ=Q.every(([q,w])=>out[q].toLowerCase().includes(w.toLowerCase()));
await p.evaluate(()=>localStorage.setItem('pk_meds',JSON.stringify(['lithium','quetiapin'])));await p.reload();await p.waitForTimeout(300);
await p.click('[data-tab="ia"]');await p.waitForTimeout(150);await p.evaluate(()=>{document.querySelector('.kp-ia').open=true;});
const plan=await p.evaluate(()=>{const box=document.querySelector('.kp-ia .kp');return {groups:box.querySelectorAll('.kp-d').length,items:box.querySelectorAll('.kp-i').length,unchecked:box.querySelectorAll('.kp-i input:not(:checked)').length};});
await p.evaluate(()=>{const c=document.querySelector('.kp-ia [data-kpcopy]');c.click();});await p.waitForTimeout(200);
const st=await p.evaluate(()=>document.querySelector('.kp-ia .kp-st').textContent);
const ta=await p.evaluate(()=>{const t=document.querySelector('.kp-ia .kp-out');return t?t.value:null;});
out.plan=plan;out.copy=st;out.textStart=(ta||'').slice(0,80);
console.log(JSON.stringify(out),errs);
const ok=okQ&&plan.groups===2&&plan.items>4&&/Kopiert|Markiert/.test(st)&&!errs.length;
console.log(ok?'V37 OK':'V37 FEHLER');await b.close();process.exit(ok?0:1)})();
