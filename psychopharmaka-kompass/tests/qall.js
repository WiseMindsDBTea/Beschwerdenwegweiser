const APP=require('path').resolve(process.argv[2]||require('path').join(__dirname,'../dist/psychopharmaka-kompass.html'));
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||undefined});const p=await b.newPage({viewport:{width:360,height:780}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));await p.goto('file://'+APP);await p.waitForTimeout(300);
const r=await p.evaluate(()=>{let qs=0,withInfo=0,unres=[];ALGS.forEach(a=>a.q.forEach(q=>{qs++;q.a.forEach(o=>{const e=o.e||{};['pp','p','m','x'].forEach(k=>{if(!e[k])return;Object.keys(e[k]).forEach(key=>{if(key==='*')return;const opts=(a.opts||((SIT.find(s=>s.id===a.sit)||{}).opts)||[]);const hit=opts.some(o2=>{const ok=(o2.d||o2.t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ß/g,'ss').replace(/[^a-z0-9]+/g,'-')).indexOf(key)===0;return ok||o2.d===key||(o2.t||'').toLowerCase().startsWith(key);});if(!hit&&!D[key])unres.push(a.id+':'+key);});});});}));return {qs,unres:unres.slice(0,20),n:unres.length};});
await p.click('[data-tab="drug"]');await p.click('[data-dview="prof"]');await p.waitForTimeout(200);
const sw=await p.evaluate(()=>document.documentElement.scrollWidth);
console.log(JSON.stringify(r),'sw360',sw,errs);await b.close()})();
