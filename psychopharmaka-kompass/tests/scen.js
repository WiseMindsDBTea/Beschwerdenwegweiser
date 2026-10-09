const APP=require('path').resolve(process.argv[2]||require('path').join(__dirname,'../dist/psychopharmaka-kompass.html'));
const {chromium}=require('playwright');
const SC=[
 ["ins-primaer",{grund:0,dauer:0,typ:0,alter55:1},[],"top","zolpidem"],
 ["ins-primaer",{abh:0},[],"ex","zolpidem"],
 ["ins-alt",{pd:0},[],"top","quetiapin"],
 ["sp-delir",{ent:1,pd:0},[],"top","quetiapin"],
 ["sp-delir",{ent:1,pd:0},[],"ex","haloperidol"],
 ["sp-intox",{subst:2},[],"top","haloperidol"],
 ["sp-intox",{subst:0},[],"top","lorazepam|diazepam"],
 ["ep-akathisie",{kardio:0,pk:1},[],"top","mirtazapin"],
 ["ep-akathisie",{kardio:0},[],"ex","propranolol"],
 ["ez-alk",{set:0},["leber"],"ex","diazepam"],
 ["ez-alk",{set:0},["leber"],"top","lorazepam|oxazepam|clomethiazol"],
 ["ez-opioid",{tol:1},["qtc"],"ex","methadon"],
 ["dep-unipolar",{sg:1,fokus:2},[],"top","duloxetin"],
 ["dep-unipolar",{sg:1,anf:0,fokus:1},[],"ex","bupropion"],
 ["dep-unipolar",{sg:1,herz:0},["schw"],"top","sertralin"],
 ["dep-tr",{n:0},[],"ex","esketamin"],
 ["angst-gas",{drog:0},[],"ex","pregabalin"],
 ["zwang",{n:2,tics:0},[],"top","risperidon|clomipramin"],
 ["bip-manie",{frau:0,typ:0},[],"top","lithium"],
 ["bip-manie",{frau:0},[],"ex","valproat"],
 ["bip-dep",{stab:1},[],"top","quetiapin"],
 ["bip-proph",{pol:1},[],"top","lamotrigin"],
 ["bip-proph",{suiz:0},["niere"],"ex","lithium"],
 ["schiz-akut",{ers:0,gew:0,prl:0},[],"top","aripiprazol"],
 ["schiz-tr",{clo:0},[],"top","clozapin"],
 ["dem-alz",{sg:0},[],"ex","memantin"],
 ["dem-alz",{sg:2},[],"top","memantin"],
 ["dem-lewy",{ziel:1,que:0},[],"top","clozapin|rivastigmin"],
 ["adhs-erw",{kv:0},[],"ex","methylphenidat"],
 ["adhs-komorb",{kom:0},[],"top","atomoxetin"],
 ["umst-ap",{grund:0},[],"top","aripiprazol|cariprazin|ziprasidon"],
 ["umst-ap",{grund:4},[],"ex","ziprasidon"],
 ["umst-depot",{oral:1,niere:0},[],"ex","paliperidon"],
 ["sp-psychose",{oral:1},[],"ex","risperidon"],
 ["ins-schwanger",{ph:0},["schw"],"top","doxylamin"],
];
(async()=>{const b=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||undefined});const p=await b.newPage();
await p.goto('file://'+APP);await p.waitForTimeout(300);
const r=await p.evaluate(SC=>SC.map(([id,ans,ctx,kind,exp])=>{const a=PK.algById(id);const ev=PK.algEval(a,{ans,ctx});
 const tops=ev.tie.map(x=>x.dr||x.o.t);const exs=ev.ex.map(x=>x.dr||x.o.t);const E=exp.split('|');
 const ok=kind==="top"?tops.some(t=>E.includes(t)):exs.some(t=>E.includes(t));
 return [ok?'ok ':'XX ',id,JSON.stringify(ans),ctx.join(','),kind,exp,'→ top:',tops.join(','),'| alts:',ev.alts.map(x=>x.dr||x.o.t.slice(0,15)).join(',')].join(' ')}),SC);
r.forEach(x=>console.log(x));await b.close()})();
