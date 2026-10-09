/* Datenprüfung ohne Browser: lädt alle Datenskripte und prüft Vollständigkeit und Verweise. */
const fs=require('fs'),vm=require('vm'),path=require('path');
const APP=path.resolve(process.argv[2]||path.join(__dirname,'../dist/psychopharmaka-kompass.html'));
const html=fs.readFileSync(APP,'utf8');
const scripts=[...html.matchAll(/<script data-app="1">([\s\S]*?)<\/script>/g)].map(m=>m[1]);
const win={};win.window=win;vm.createContext(win);
const fail=[];const F=(m)=>fail.push(m);
scripts.slice(0,-1).forEach((s,i)=>{try{vm.runInContext(s,win)}catch(e){F('Datenskript '+i+': '+e.message)}});
const {D,SIT,V11,PCOLS,PROFM,PCLS,PCLSOF,PSYM,PMERK,PRX,PRXC,PMECH,PWHY,ALGS,PSRC,ACB,PRISCUS,CREDMEDS}=win;
const CX=['schw','still','alt','jug','niere','leber','qtc','epi','delir','pd','sucht','atem','fahr'];
// Wirkstoffe
Object.entries(D).forEach(([k,d])=>{
  ['n','k','kern'].forEach(f=>{if(!d[f])F(k+': Feld '+f+' fehlt')});
  if(!d.stub){['ind','ki','nw','ia','ktr','ss','auf','src'].forEach(f=>{if(!d[f])F(k+': Feld '+f+' fehlt')});
    if(!d.dos||!d.dos.e||!d.dos.a||!d.dos.j)F(k+': Dosis Erwachsene/Ältere/Jugendliche unvollständig');}
  Object.keys(d.cx||{}).forEach(c=>{if(!CX.includes(c))F(k+': unbekannter Kontext '+c)});
});
// Situationen
const sids=new Set();SIT.forEach(s=>{if(sids.has(s.id))F('Situation doppelt: '+s.id);sids.add(s.id);
  (s.opts||[]).concat(s.avoid||[]).forEach(o=>{if(o.d&&!D[o.d])F(s.id+': Verweis auf fehlenden Wirkstoff '+o.d)});});
// Korrekturebene
(V11.ch||[]).forEach(c=>{if(c.err)F('V11 nicht angewendet: '+c.id+' '+c.p)});
// Profilmatrix und Identität
Object.entries(PROFM).forEach(([k,r])=>{if(!D[k])F('Profil ohne Wirkstoff: '+k);if(r.length!==PCOLS.length)F('Profil '+k+': '+r.length+' statt '+PCOLS.length+' Werte');
  r.forEach(v=>{if(!(v>=0&&v<=3))F('Profil '+k+': Wert außerhalb 0–3')});
  if(!PCLSOF[k])F('ohne Klasse: '+k);if(!PSYM[k])F('ohne Kürzel: '+k);if(!PMERK[k])F('ohne Merkbild: '+k);if(!PRX[k])F('ohne Rezeptorprofil: '+k);});
const sy=Object.values(PSYM);sy.forEach((x,i)=>{if(sy.indexOf(x)!==i)F('Kürzel doppelt: '+x)});
Object.values(PCLSOF).forEach(c=>{if(!PCLS[c])F('unbekannte Klasse '+c)});
const rk=new Set(PRXC.map(x=>x[0]));
Object.entries(PRX).forEach(([k,r])=>Object.keys(r).forEach(x=>{if(!rk.has(x))F('Rezeptor unbekannt: '+k+' '+x)}));
Object.entries(PMECH).forEach(([k,m])=>{if(!PCOLS.some(c=>c.k===k))F('Mechanik für unbekannte Spalte '+k);m.r.forEach(x=>{if(!rk.has(x[0]))F('Mechanik '+k+': Rezeptor '+x[0])})});
Object.entries(PWHY).forEach(([k,o])=>{if(!D[k])F('Herkunft für unbekannten Wirkstoff '+k);Object.keys(o).forEach(c=>{if(!PCOLS.some(p=>p.k===c))F('Herkunft '+k+': Spalte '+c)})});
// Belegte Werte und ACB
Object.entries(PSRC||{}).forEach(([id,o])=>{if(!PROFM[id])F('PSRC ohne Profil: '+id);Object.entries(o).forEach(([k,x])=>{if(!PCOLS.some(c=>c.k===k))F('PSRC Spalte '+k);if(!(x.v>=0&&x.v<=3)||!x.q)F('PSRC '+id+'.'+k+' unvollständig')})});
Object.entries(ACB.score).forEach(([id,v])=>{if(!D[id])F('ACB: unbekannter Wirkstoff '+id);if(![1,2,3].includes(v))F('ACB-Score '+id)});
ACB.notAdded.forEach(id=>{if(!D[id])F('ACB notAdded unbekannt '+id)});
Object.keys(PRISCUS.pim).concat(PRISCUS.non,PRISCUS.amb).forEach(id=>{if(!D[id])F('PRISCUS: unbekannter Wirkstoff '+id)});
PRISCUS.non.concat(PRISCUS.amb).forEach(id=>{if(PRISCUS.pim[id])F('PRISCUS doppelt eingestuft: '+id)});
Object.entries(CREDMEDS.cat).forEach(([id,c])=>{if(!D[id])F('CredibleMeds: unbekannter Wirkstoff '+id);if(!CREDMEDS.lab[c])F('CredibleMeds-Kategorie '+id)});
// Entscheidungshilfen: jeder Schlüssel trifft eine Option oder einen Wirkstoff
const fold=s=>String(s||'').toLowerCase().replace(/ä/g,'a').replace(/ö/g,'o').replace(/ü/g,'u').replace(/ß/g,'ss').replace(/[éèê]/g,'e');
const slug=t=>fold(t).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const aids=new Set(ALGS.map(a=>a.id));
ALGS.forEach(a=>{if(a.sit&&!sids.has(a.sit))F(a.id+': Situation fehlt '+a.sit);
  const opts=a.opts||((SIT.find(s=>s.id===a.sit)||{}).opts)||[];
  a.q.forEach(q=>q.a.forEach(o=>{const e=o.e||{};['pp','p','m','x'].forEach(t=>Object.keys(e[t]||{}).forEach(k=>{if(k==='*')return;
    const hit=opts.some(op=>(op.d||slug(op.t)).indexOf(k)===0||op.d===k||slug(op.t).indexOf(k)===0);if(!hit&&!D[k])F(a.id+'/'+q.id+': Schlüssel ohne Treffer '+k)}));
    (e.go||[]).forEach(g=>{if(!aids.has(g.to)&&!sids.has(g.to))F(a.id+': Verweis ins Leere '+g.to)})}));});
console.log('Wirkstoffe',Object.keys(D).length,'· Situationen',SIT.length,'· Entscheidungshilfen',ALGS.length,'· Profile',Object.keys(PROFM).length);
if(fail.length){console.log('FEHLER '+fail.length);fail.slice(0,60).forEach(f=>console.log(' - '+f));process.exit(1)}
console.log('Daten OK');
