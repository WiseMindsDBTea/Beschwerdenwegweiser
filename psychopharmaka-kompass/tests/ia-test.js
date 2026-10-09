const APP=require('path').resolve(process.argv[2]||require('path').join(__dirname,'../dist/psychopharmaka-kompass.html'));
const {chromium}=require('playwright');
const T=[["paroxetin","tamoxifen","r"],["fluoxetin","codein","r"],["bupropion","tamoxifen","r"],["fluoxetin","clopidogrel","r"],
["atomoxetin","tranylcypromin","r"],["atomoxetin","moclobemid","r"],["methylphenidat","tranylcypromin","r"],["lisdexamfetamin","moclobemid","r"],
["tranylcypromin","sertralin","r"],["moclobemid","sertralin","r"],["linezolid","citalopram","r"],["tramadol","sertralin","r"],["tranylcypromin","tramadol","r"],
["fluvoxamin","clozapin","r"],["fluvoxamin","tizanidin","r"],["fluvoxamin","agomelatin","r"],["ciprofloxacin","duloxetin","r"],["ciprofloxacin","agomelatin","r"],
["ritonavir","quetiapin","r"],["clarithromycin","quetiapin","r"],["carbamazepin","quetiapin","r"],["carbamazepin","methadon","r"],["rifampicin","buprenorphin","r"],
["valproat","lamotrigin","r"],["lithium","hct","r"],["lithium","nsar","r"],["lithium","acehemmer","r"],["clozapin","carbamazepin","r"],
["methadon","citalopram","r"],["lorazepam","methadon","r"],["naltrexon","methadon","r"],["naltrexon","buprenorphin","r"],["melperon","metoprolol","r"],
["carbamazepin","kontrazeptiva","r"],["johanniskraut","kontrazeptiva","r"],["clarithromycin","cariprazin","r"],["ketoconazol","lurasidon","r"],
["lamotrigin","sertralin","y"],["buprenorphin","morphin","y"],["haloperidol","levodopa","y"],["olanzapin","lorazepam","y"],["donepezil","metoprolol","y"],
["valproat","carbamazepin","y"],["sertralin","ass","y"],["citalopram","omeprazol","y"],["lithium","quetiapin","n"],["sertralin","mirtazapin","n"],
["tranylcypromin","bupropion","r"],["esketamin","tranylcypromin","y"],["methylphenidat","clonidin","n"],["guanfacin","clarithromycin","y"]];
(async()=>{const b=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||undefined});const p=await b.newPage();
await p.goto('file://'+APP);
const r=await p.evaluate(T=>T.map(([a,c,exp])=>{if(!D[a]||!D[c])return [a,c,exp,'MISSING',''];const F=PK.interactions([a,c],[]);
 const s=F.length?F[0].sev:'n';return [a,c,exp,s,F.map(f=>f.sev+':'+f.title).join(' | ')]}),T);
let bad=0;r.forEach(x=>{const ok=x[3]===x[2]||(x[2]==='n'&&x[3]==='i');if(!ok)bad++;console.log(ok?'ok ':'XX ',x.join('  '))});console.log('fail',bad,'/',r.length);await b.close()})();
