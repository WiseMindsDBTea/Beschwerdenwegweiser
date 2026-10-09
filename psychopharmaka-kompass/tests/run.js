/* Führt alle Prüfungen aus. Aufruf: node tests/run.js [pfad/zur/app.html]
   Browser: Playwright; eigenes Chromium über CHROMIUM_PATH. */
const {spawnSync}=require('child_process'),path=require('path'),fs=require('fs');
const APP=path.resolve(process.argv[2]||path.join(__dirname,'../dist/psychopharmaka-kompass.html'));
const OUT=path.join(__dirname,'out');fs.mkdirSync(OUT,{recursive:true});['v2','v31','v32'].forEach(d=>fs.mkdirSync(path.join(OUT,d),{recursive:true}));
const T=[
 ['syntax','Syntax aller Quelldateien',o=>/Syntax OK/.test(o)],
 ['data.js','Datenintegrität',o=>/Daten OK/.test(o)],
 ['ia-test.js','Interaktions-Paare (bekannte Abweichungen ≤ 4)',o=>{const m=/fail (\d+) \/ (\d+)/.exec(o);return m&&+m[1]<=4}],
 ['calc.js','Rechner und Suche',o=>/errs \[\]/.test(o)],
 ['v2test.js','Navigation, Zurück-Geste, 4 Bildschirmgrößen',o=>(o.match(/closed: true/g)||[]).length===4&&(o.match(/errs: \[\]/g)||[]).length===4],
 ['scen.js','Klinische Szenarien der Entscheidungshilfen',o=>!/^XX/m.test(o)&&(o.match(/^ok/gm)||[]).length>=35],
 ['alg-ui.js','Alle Entscheidungshilfen bedienbar',o=>/bad \[\] errors \[\]/.test(o)],
 ['qall.js','Info-Punkte und Profiltabelle bei 360 px',o=>/"n":0\} sw360 360 \[\]/.test(o)],
 ['v31test.js','Vergleich, Hover, Sortierung, Suche',o=>/\} \[\]\s*$/.test(o)],
 ['v32test.js','Klassen, Herkunft, Rezeptoren',o=>/\} \[\]\s*$/.test(o)],
 ['v34test.js','Stufen, Schätzung, Fehler melden, Bewertung',o=>/V34 OK/.test(o)]
];
function syntax(){ const src=path.join(__dirname,'../src');const files=fs.readdirSync(path.join(src,'data')).map(f=>path.join(src,'data',f)).concat([path.join(src,'app.js')]);
  let o='';for(const f of files){const r=spawnSync(process.execPath,['--check',f],{encoding:'utf8'});if(r.status!==0)o+=f+'\n'+r.stderr;}
  return {status:o?1:0,stdout:o||'Syntax OK',stderr:''}; }
let bad=0;
for(const [f,name,ok] of T){
  const r=f==='syntax'?syntax():spawnSync(process.execPath,[path.join(__dirname,f),APP],{cwd:OUT,encoding:'utf8',timeout:600000,env:process.env});
  const o=(r.stdout||'')+(r.stderr||'');const pass=r.status===0&&ok(o);
  console.log((pass?'✓ ':'✗ ')+name+' ('+f+')');if(!pass){bad++;console.log(o.split('\n').slice(-25).join('\n'));}
}
console.log(bad?bad+' Prüfung(en) fehlgeschlagen':'Alle Prüfungen bestanden');process.exit(bad?1:0);
