(function(){
"use strict";
var D = window.D, SIT = window.SIT, RULES = window.RULES || [];
var VERSION = "v3.6 · 09.10.2026";
var STAND = "Stand v1.2 (07.10.2026): Etappe 2 ergänzt 18 Diagnose-Algorithmen und 41 volle Wirkstoffkarten, geschrieben aus Benkert-Kompendium 2021, Pocket Guide 2021, Dreher 2021, Fachinformationen, Rote-Hand-Briefen und den gelesenen Leitlinienteilen (Stand je Karte). Etappe-1-Karten wie in v1.1 abgeglichen. Nicht belegbare Angaben bleiben als „prüfen“ markiert.";
var AREAS = {schlaf:"Schlaf", spann:"Anspannung & Agitation", epms:"EPMS & Notfälle", entzug:"Entzug", dep:"Depression", angst:"Angst & Zwang", bip:"Bipolare Störung", schiz:"Schizophrenie-Spektrum", bps:"Borderline (BPS)", adhs:"ADHS", ptbs:"PTBS", demenz:"Demenz"};
var AREA_SHORT = {spann:"Anspannung", epms:"Notfall", schiz:"Schizophrenie", bip:"Bipolar", bps:"Borderline"};
var AREA_GROUPS = [["Akutsituationen",["schlaf","spann","epms","entzug"]],["Diagnose-Algorithmen",["dep","angst","bip","schiz","bps","adhs","ptbs","demenz"]]];
var CTX = [["schw","Schwanger"],["still","Stillzeit"],["alt","≥ 65 J."],["jug","12–17 J."],["niere","Niere"],["leber","Leber"],["qtc","QTc lang"],["epi","Epilepsie"],["delir","Delir/Demenz"],["pd","Parkinson/Lewy"],["sucht","Sucht"],["atem","Atmung/OSA"],["fahr","Fahren"]];
var CTXL = {}; CTX.forEach(function(c){ CTXL[c[0]] = c[1]; });
var CTX_WORDS = {
  schw:["schwanger","schwangerschaft","ssw","gravide","graviditat"],
  still:["stillen","stillzeit","stillend","laktation","stillt"],
  alt:["alt","alter","alte","alterer","geriatrie","geriatrisch","senior","hochbetagt","65"],
  jug:["jugend","jugendlich","jugendliche","adoleszent","adoleszenz","kind","kinder","teenager","minderjahrig"],
  niere:["niere","nieren","niereninsuffizienz","dialyse","gfr","ckd","niereninsuff"],
  leber:["leber","zirrhose","leberzirrhose","leberinsuffizienz","hepatisch","leberschaden"],
  qtc:["qtc","qt","torsade","torsades","qtverlangerung"],
  epi:["epilepsie","anfallsleiden","epileptisch","epileptiker"],
  delir:["demenz","dement","alzheimer"],
  pd:["parkinson","lewy"],
  sucht:["sucht","abhangig","abhangigkeit","suchtkrank","missbrauch","suchtanamnese"],
  atem:["copd","apnoe","schlafapnoe","osa","atemdepression","asthma"],
  fahr:["autofahren","fahrtauglich","fahrtauglichkeit","fahren"]
};
var Q_SYN = {
  unruhe:["anspannung","agitation","akathisie"], erregung:["agitation"], erregt:["agitation"], aggressiv:["agitation"], aggression:["agitation"],
  schlaf:["insomnie"], schlaflos:["insomnie"], schlafen:["insomnie"], einschlafen:["insomnie"], durchschlafen:["insomnie"],
  benzo:["benzodiazepin","bzd"], benzos:["benzodiazepin","bzd"], opiat:["opioid"], opiate:["opioid"], heroin:["opioid"],
  zappelig:["akathisie"], steif:["parkinsonoid","rigor"], verkrampft:["dystonie"], verwirrt:["delir"], alkohol:["alkoholentzug","aws"],
  druck:["anspannung"], spannung:["anspannung"], angst:["panik"], borderline:["bps"], tavor:["lorazepam"], schlafmittel:["hypnotika","insomnie"],
  depressiv:["depression"], niedergeschlagen:["depression"], antidepressiv:["depression"], manisch:["manie"], bipolar:["bipolare"], schizophren:["schizophrenie"], psychotisch:["psychose"],
  trauma:["ptbs"], traumatisiert:["ptbs"], albtraum:["ptbs","albtraume"], zwanghaft:["zwang"], ads:["adhs"], hyperaktiv:["adhs"], ritalin:["methylphenidat"], dement:["demenz"], alzheimer:["demenz"], lewy:["lewy"]
};
var ROLE = {"1":["1. Wahl","r1"],"a":["Alternative","ra"],"adj":["Zusatz","radj"],"r":["Reserve","rr"],"int":["International","rint"],"nm":["Nicht-medikamentös","rnm"]};
var EVL = ["Konsens","niedrig","mittel","hoch"];
var LVL = {g:0,n:-1,y:1,r:2}, LVL2 = {r:0,y:1,i:2};

/* ---------- Speicher (nur Komfort, darf fehlen) ---------- */
var LS = {
  get:function(k,d){ try{ var v = localStorage.getItem("pk_"+k); return v==null ? d : JSON.parse(v); }catch(e){ return d; } },
  set:function(k,v){ try{ localStorage.setItem("pk_"+k, JSON.stringify(v)); }catch(e){} }
};

/* ---------- Zustand ---------- */
var st = {
  tab: LS.get("tab","suche"), q:"", ctx:LS.get("ctx",[]), det:[], undet:[],
  learn:LS.get("learn",false), stack:[], fav:LS.get("fav",[]), hist:LS.get("hist",[]),
  meds:LS.get("meds",null), medsExample:false, medQ:"", aiTier:LS.get("aiTier","quick"),
  drugGroup:"Alle", drugView:LS.get("dview","az"), menu:false
};
if(!Array.isArray(st.meds)){ st.meds = ["quetiapin","citalopram","clarithromycin"]; st.medsExample = true; }
st.meds = st.meds.filter(function(id){ return D[id]; });

/* ---------- Hilfen ---------- */
function esc(s){ return String(s==null?"":s).replace(/[&<>"]/g,function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
var SIT_REF = null;
function vt(s){
  if(!SIT_REF){ SIT_REF = {}; SIT.forEach(function(x){ if(x.id.indexOf("-")>0) SIT_REF[x.id] = x.t; }); }
  return esc(s).replace(DOSE_RE,'<span class="dz">$1</span>').replace(/\[\?\]/g,'<span class="verify" title="Vor Verlass gegen Fachinfo prüfen">prüfen</span>')
    .replace(/\b[a-z]+(?:-[a-z]+)+\b/g, function(m){ return SIT_REF[m] ? '<button class="lnk" data-open="sit:'+m+'">'+esc(SIT_REF[m])+'</button>' : m; })
    .replace(/\b(Karten?|siehe) ([a-z]+)\b/g, function(m,w,id){ if(D[id] && !D[id].stub) return w+' <button class="lnk" data-open="drug:'+id+'">'+esc(D[id].n)+'</button>'; var x = SIT.filter(function(y){ return y.id===id; })[0]; return x ? w+' <button class="lnk" data-open="sit:'+id+'">'+esc(x.t)+'</button>' : m; });
}
/* Lesbarer Fließtext: Sätze → Stichpunkte, „Label:“ fett, lange Semikolon-Ketten als Unterpunkte. Der Wortlaut bleibt unverändert. */
var ABBR = /(^|[\s(„–-])(z|B|v|a|i|m|p|o|s|l|N|J|d|u|ca|Ca|max|Max|min|Min|Kps|Tbl|Trpf|Wdh|inkl|bzw|ggf|evtl|Aufl|Empf|Wo|Mon|Std|vs|Kap|Tab|Abb|Nr|mind|sog|usw|vgl|Vgl|tägl|wöchentl|monatl|jährl|Pat|Erw|einschl|bes|insb|ret|Inj|Amp|Tr|Dos|Inf|Supp|Dr|Prof|Medikamentenbez|Verl|verl|Lj|Sek|sek|Mio|Mrd|publ|Rel|rel|Ggs|bzgl|gem|lt|ugs|Lsg)\./g;
function splitSent(t){
  var P = "\u0001", x = String(t||"");
  x = x.replace(/\bd\. h\./g, "d"+P+" h"+P);
  x = x.replace(ABBR, function(m,pre,w){ return pre+w+P; }).replace(ABBR, function(m,pre,w){ return pre+w+P; });
  x = x.replace(/(^|[\s(])(\d{1,2})\. (?=[A-Za-zÄÖÜäöü])/g, function(m,pre,n){ return pre+n+P+" "; });
  return x.replace(/([.!?])\s+(?=[A-ZÄÖÜ„(≥≤\d])/g, "$1\u0002").split("\u0002").map(function(z){ return z.trim(); }).filter(Boolean)
    .map(function(z){ return z; }).map(function(z){ return {raw:z, P:P}; });
}
function semiParts(z){
  var out=[], depth=0, cur="";
  for(var i=0;i<z.length;i++){ var c=z[i]; if(c==="(") depth++; if(c===")") depth=Math.max(0,depth-1);
    if(c===";" && depth===0 && z[i+1]===" "){ out.push(cur.trim()); cur=""; i++; continue; } cur+=c; }
  if(cur.trim()) out.push(cur.trim()); return out;
}
function fmtLine(z, P){
  var rest = z, lab = "";
  var m = /^([^:;.]{1,40}?):\s+(?=\S)/.exec(z);
  if(m && m[1].split(/\s+/).length<=6 && !/\d\s?(mg|ml)\b/.test(m[1])){ lab = m[1]; rest = z.slice(m[0].length); }
  var un = function(q){ return q.split(P).join("."); };
  var parts = rest.length>110 ? semiParts(rest) : [rest];
  var head = (lab ? '<b class="fl-l">'+vt(un(lab))+':</b> ' : '') + vt(un(parts[0]));
  if(parts.length>1) head += '<ul class="fl fl-sub">'+parts.slice(1).map(function(q){ return '<li>'+vt(un(q))+'</li>'; }).join("")+'</ul>';
  return head;
}
function fmtText(t){
  if(!t) return '<p class="muted">–</p>';
  var S = splitSent(t);
  if(S.length===1 && S[0].raw.length<=110 && !/^[^:;.]{1,40}:\s/.test(S[0].raw)) return '<p>'+vt(t)+'</p>';
  return '<ul class="fl">'+S.map(function(o){ return '<li>'+fmtLine(o.raw, o.P)+'</li>'; }).join("")+'</ul>';
}
function fmtPara(t){
  var S = splitSent(t); if(S.length<=2) return '<p>'+vt(t)+'</p>';
  var out=[], cur=[]; S.forEach(function(o,i){ cur.push(o.raw.split(o.P).join(".")); if(cur.length===2 || i===S.length-1){ out.push(cur.join(" ")); cur=[]; } });
  return out.map(function(p){ return '<p>'+vt(p)+'</p>'; }).join("");
}
var DOSE_RE = /((?:≥ ?|≤ ?)?\d+(?:,\d+)?(?: ?[–-] ?\d+(?:,\d+)?)?(?: ?× ?\d+(?:,\d+)?(?: ?[–-] ?\d+(?:,\d+)?)?)? ?(?:mg\/kg(?:\/d|\/24 h)?|mg\/d|mg\/24 h|mg|µg|mmol\/l|ng\/ml|mg\/l|ml\/min|ml|Kps\.|Tbl\.|Trpf\.|IE|ms)(?![A-Za-zäöüÄÖÜ]))/g;
function fold(s){ return String(s||"").toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/[éèê]/g,"e"); }
function toks(s){ return fold(s).split(/[^a-z0-9]+/).filter(function(t){ return t.length>1 || /\d/.test(t); }); }
function $(sel,root){ return (root||document).querySelector(sel); }
function $$(sel,root){ return Array.prototype.slice.call((root||document).querySelectorAll(sel)); }
function activeCtx(){
  var out = st.ctx.slice();
  st.det.forEach(function(k){ if(out.indexOf(k)<0 && st.undet.indexOf(k)<0) out.push(k); });
  return out;
}
function toast(msg){
  var t = document.createElement("div"); t.className="toast"; t.textContent = msg; document.body.appendChild(t);
  setTimeout(function(){ t.remove(); }, 2400);
}
function lev(a,b){
  if(Math.abs(a.length-b.length)>2) return 9;
  var m=a.length,n=b.length,prev=[],cur=[],i,j;
  for(j=0;j<=n;j++) prev[j]=j;
  for(i=1;i<=m;i++){ cur=[i]; for(j=1;j<=n;j++){ cur[j]=Math.min(prev[j]+1,cur[j-1]+1,prev[j-1]+(a[i-1]===b[j-1]?0:1)); } prev=cur; }
  return prev[n];
}

/* ---------- Rechner-Verzeichnis ---------- */
var CALCS = [
  {id:"bzd", t:"BZD-Äquivalenz und Ausschleichplan", s:"Umrechnung auf Diazepam, Reduktionsschritte", syn:"benzodiazepin aquivalenz umrechnen taper ausschleichen abdosieren diazepam z-substanz zolpidem zopiclon lorazepam oxazepam"},
  {id:"ciwa", t:"CIWA-Ar (Alkoholentzug)", s:"10 Items, 0–67 Punkte", syn:"ciwa alkoholentzug score aws aesb entzugsskala"},
  {id:"cows", t:"COWS (Opioidentzug)", s:"11 Items, Einstieg Buprenorphin", syn:"cows opioid opiat entzug score buprenorphin einstieg subutex"},
  {id:"ap", t:"Antipsychotika-Äquivalenz", s:"WHO-DDD, Olanzapin-Äquivalente", syn:"antipsychotika aquivalenz ddd olanzapin chlorpromazin umrechnung neuroleptika dosis"},
  {id:"qtc", t:"QTc-Rechner", s:"Bazett und Fridericia", syn:"qtc qt bazett fridericia ekg frequenzkorrektur"}
];

/* ---------- Suchindex ---------- */
var IDX = [];
function addIdx(type,id,title,sub,fields){
  IDX.push({type:type,id:id,title:title,sub:sub,f:fields.map(function(f){ return [toks(f[0]), f[1]]; })});
}
SIT.forEach(function(s){
  addIdx("sit", s.id, s.t, AREAS[s.a], [[s.t,10],[s.syn.join(" "),8],[s.kern.join(" "),2],[(s.opts||[]).map(function(o){ return o.d&&D[o.d] ? D[o.d].n : (o.t||""); }).join(" "),2]]);
});
Object.keys(D).forEach(function(id){
  var d = D[id];
  addIdx("drug", id, d.n, (d.k||"") + (d.b&&d.b.length ? " · "+d.b.slice(0,3).join(", ") : ""), [[d.n,12],[(d.b||[]).join(" "),10],[(d.k||"")+" "+(d.g||""),3],[(d.kern||[]).join(" ")+" "+(d.ind||"")+" "+(d.off||""),1.5]]);
});
CALCS.forEach(function(c){ addIdx("calc", c.id, c.t, c.s, [[c.t,10],[c.syn,8]]); });
(window.ALGS||[]).forEach(function(a){ var st0 = a.sit ? SIT.filter(function(x){ return x.id===a.sit; })[0] : null;
  addIdx("alg", a.id, a.t || (st0?st0.t:a.id), "Entscheidungshilfe", [[(a.t||(st0?st0.t:""))+" entscheidungshilfe algorithmus auswahl welches",7],[st0?st0.syn.join(" "):"umstellen umstellung wechseln wechsel switch "+a.t,5]]); });

function tokScore(q, list){
  var best=0, i, t;
  for(i=0;i<list.length;i++){
    t=list[i];
    if(t===q) return 1;
    if(q.length>=3 && t.indexOf(q)===0){ if(best<0.85) best=0.85; continue; }
    if(q.length>=4 && t.indexOf(q)>0){ if(best<0.6) best=0.6; continue; }
    if(t.length>=5 && q.indexOf(t)>=0){ if(best<0.5) best=0.5; continue; }
    if(q.length>=4 && best<0.55 && Math.abs(t.length-q.length)<=2 && lev(q,t)<=(q.length>=7?2:1)) best=0.55;
  }
  return best;
}
function parseQuery(q){
  var all = toks(q), det = [], terms = [], bonus = [];
  all.forEach(function(t){
    var hit=null;
    Object.keys(CTX_WORDS).forEach(function(k){ if(!hit && CTX_WORDS[k].indexOf(t)>=0) hit=k; });
    if(hit){ if(det.indexOf(hit)<0) det.push(hit); bonus.push(t); } else terms.push(t);
  });
  if(!terms.length){ terms = all; bonus = []; }
  return {det:det, terms:terms, bonus:bonus};
}
function search(q){
  var p = parseQuery(q);
  if(!p.terms.length) return {det:p.det, res:[]};
  var res = [];
  IDX.forEach(function(e){
    var sum=0, hit=0;
    p.terms.forEach(function(qt){
      var b=0;
      e.f.forEach(function(f){ var s=tokScore(qt,f[0])*f[1]; if(s>b) b=s; });
      var alts = null;
      Object.keys(Q_SYN).forEach(function(k){ if(qt.indexOf(k)===0) alts=Q_SYN[k]; });
      if(alts){ alts.forEach(function(a){ e.f.forEach(function(f){ var s=tokScore(a,f[0])*f[1]*0.7; if(s>b) b=s; }); }); }
      if(b>0){ sum+=b; hit++; }
    });
    if(hit){
      p.bonus.forEach(function(bt){ var b=0; e.f.forEach(function(f){ var s=tokScore(bt,f[0])*f[1]*0.6; if(s>b) b=s; }); sum+=b; });
      res.push({e:e, score: sum*(0.4+0.6*hit/p.terms.length)});
    }
  });
  res.sort(function(a,b){ return b.score-a.score; });
  var top = res.length ? res[0].score : 0;
  res = res.filter(function(r){ return r.score >= top*0.25; }).slice(0,14);
  return {det:p.det, res:res};
}

/* ---------- Kontextbewertung ---------- */
function drugCx(d, k){ return d && d.cx && d.cx[k] ? d.cx[k] : null; }
function worst(levels){ var w="n"; levels.forEach(function(l){ if(LVL[l]>LVL[w]) w=l; }); return w; }
function ctxPills(d, keys){
  return keys.map(function(k){
    var c = drugCx(d,k);
    var l = c ? c[0] : "n", why = c ? c[1] : "Keine Angabe";
    return '<span class="pill '+l+'" title="'+esc(why)+'"><span class="dot '+l+'"></span>'+esc(CTXL[k])+': '+vt(why)+'</span>';
  }).join("");
}

/* ---------- Interaktionslogik ---------- */
function interactions(ids, ctx){
  var ds = ids.map(function(id){ return Object.assign({id:id}, D[id]); }).filter(function(d){ return d.n; });
  var F = [];
  function add(sev,cat,title,drugs,text,act){ F.push({sev:sev,cat:cat,title:title,drugs:drugs,text:text,act:act}); }
  function tg(d){ return d.tg || {}; }
  function names(arr){ return arr.map(function(d){ return d.n; }); }
  var SEV_STR = {stark:3, mittel:2, schwach:1};
  // CYP-Hemmung
  ds.forEach(function(a){
    var inh = tg(a).i || {};
    Object.keys(inh).forEach(function(enz){
      var s = SEV_STR[inh[enz]]||1;
      ds.forEach(function(b){
        if(a===b) return;
        var tb = tg(b), sens = (tb.sens||[]).indexOf(enz)>=0;
        if((tb.s||[]).indexOf(enz)>=0){
          var sev = s===3 ? (sens?"r":"y") : s===2 ? (sens?"y":"i") : (sens?"i":null);
          if(sev) add(sev,"CYP","Spiegelanstieg über "+(enz==="UGT"?"UGT":"CYP"+enz),[a.n,b.n],a.n+" hemmt "+(enz==="UGT"?"die Glukuronidierung":"CYP"+enz)+" ("+inh[enz]+"); "+b.n+" ist "+(sens?"empfindliches ":"")+"Substrat.", sens&&s===3 ? "Kombination meiden oder "+b.n+" deutlich reduzieren; Fachinfo prüfen." : "Auf Überdosierungszeichen achten, ggf. Dosis anpassen oder TDM.");
        }
        if(tb.pro===enz && s>=2) add(s===3?"r":"y","CYP","Wirkverlust eines Prodrugs",[a.n,b.n],a.n+" hemmt CYP"+enz+" ("+inh[enz]+"); "+b.n+" wird darüber erst aktiviert und wirkt dann kaum.", s===3 ? "Kombination meiden; Alternative ohne "+enz+"-Hemmung wählen." : "Alternative ohne "+enz+"-Hemmung wählen oder Wirkung engmaschig prüfen.");
      });
    });
  });
  // Induktion
  ds.forEach(function(a){
    (tg(a).n||[]).forEach(function(enz){
      ds.forEach(function(b){
        if(a===b) return;
        var tb=tg(b), sens=(tb.sens||[]).indexOf(enz)>=0;
        if((tb.s||[]).indexOf(enz)>=0) add(sens?"r":"y","CYP","Spiegelabfall durch Induktion",[a.n,b.n],a.n+" induziert "+(enz==="UGT"?"UGT":"CYP"+enz)+"; "+b.n+" wird schneller abgebaut (Wirkung nach 1–2 Wochen voll ausgeprägt; nach Absetzen des Induktors Spiegelanstieg).", sens ? "Kombination meiden oder Dosis deutlich erhöhen mit TDM." : "Wirkverlust beobachten, ggf. TDM.");
      });
    });
  });
  function sumOf(key, min){ var arr = ds.filter(function(d){ return (tg(d)[key]||0) >= (min||1); }); return {arr:arr, sum:arr.reduce(function(s,d){ return s+(tg(d)[key]||0); },0)}; }
  var q = sumOf("qt");
  if(q.arr.length>=2){ var q2 = q.arr.filter(function(d){ return tg(d).qt>=2; }).length;
    var qsev = (q2>=2||q.sum>=5) ? "r" : (q2>=1||q.sum>=3) ? "y" : "i";
    if(ctx.indexOf("qtc")>=0 && qsev!=="r") qsev = qsev==="i" ? "y" : "r";
    add(qsev,"QT","Additive QT-Verlängerung",names(q.arr),"QT-Last summiert sich (Gewichtung: "+q.arr.map(function(d){ return d.n+" "+tg(d).qt; }).join(", ")+").","EKG mit QTc, Kalium und Magnesium; bei QTc ≥ 500 ms oder Anstieg > 60 ms Kombination ändern."); }
  var mao = ds.filter(function(d){ return tg(d).mao; });
  var se = sumOf("se");
  if(mao.length && se.arr.length>=2) add("r","Serotonerg","MAO-Hemmer mit serotonerger Substanz",names(se.arr),"Lebensbedrohliches Serotoninsyndrom möglich.","Kontraindiziert; Auswaschzeiten beachten.");
  else if(se.arr.length>=2) add(se.sum>=5?"r":se.arr.filter(function(d){ return tg(d).se>=2; }).length>=2?"y":"i","Serotonerg","Serotonerge Last",names(se.arr),"Additiv serotonerg ("+se.arr.map(function(d){ return d.n+" "+tg(d).se; }).join(", ")+"). Risiko Serotoninsyndrom.","Auf Klonus, Hyperreflexie, Agitation, Hyperthermie achten; Doppelungen vermeiden.");
  var stim = ds.filter(function(d){ return tg(d).stim; });
  if(mao.length && stim.filter(function(d){ return !tg(d).mao; }).length) add("r","MAO-Hemmer","MAO-Hemmer mit noradrenerg oder dopaminerg wirkender Substanz",names(mao.concat(stim.filter(function(d){ return !tg(d).mao; }))),"Hypertensive Krise möglich (Stimulanzien, Atomoxetin, Bupropion, SNRI).","Kontraindiziert; Abstand nach irreversiblem MAO-Hemmer 14 Tage.");
  var ac = sumOf("ac");
  if(ac.arr.length>=2 && ac.sum>=3){ var sev = ac.sum>=5 ? "r" : "y"; if(sev==="y" && (ctx.indexOf("alt")>=0||ctx.indexOf("delir")>=0)) sev="r";
    add(sev,"Anticholinerg","Anticholinerge Last",names(ac.arr),"Summe "+ac.sum+": Delir, Harnverhalt, Obstipation, kognitive Störung.","Anticholinergika reduzieren; bei Älteren besonders kritisch."); }
  var at = sumOf("at");
  if(at.arr.length>=2){ var at2 = at.arr.filter(function(d){ return tg(d).at>=2; }).length;
    add(at2>=2?"r":"y","Atmung","Additive Atemdepression",names(at.arr),"ZNS- und Atemdepression addieren sich.","Überwachung (SpO₂, Vigilanz); bei Opioid + BZD Naloxon bereithalten."); }
  var sd = sumOf("sd");
  if(sd.arr.length>=2 && sd.sum>=6) add("y","Sedierung","Additive Sedierung",names(sd.arr),"Sedierungssumme "+sd.sum+": Stürze, Aspiration, Fahruntüchtigkeit.","Sedierende Mittel bündeln oder reduzieren.");
  var kr = sumOf("kr");
  if(kr.arr.length>=2 && kr.sum>=3) add("y","Krampfschwelle","Senkung der Krampfschwelle",names(kr.arr),"Additiv krampfschwellensenkend.","Bei Epilepsie, Entzug oder Hirnschädigung Alternative wählen.");
  var na = sumOf("na");
  if(na.arr.length>=2) add("y","Natrium","Hyponatriämie-Risiko",names(na.arr),"Mehrere Substanzen mit SIADH-Risiko.","Natrium nach 2–4 Wochen kontrollieren, besonders bei Älteren und Diuretika.");
  var bl = sumOf("bl");
  if(bl.arr.length>=2) add("y","Blutung","Erhöhtes Blutungsrisiko",names(bl.arr),"Serotonerge Thrombozytenhemmung plus Antikoagulation oder NSAR.","Magenschutz (PPI) bei NSAR; Blutungszeichen; INR bei VKA.");
  var lit = ds.filter(function(d){ return tg(d).lit; }), lu = ds.filter(function(d){ return tg(d).lu; });
  if(lit.length && lu.length) add("r","Lithium","Lithiumspiegel steigt",names(lit.concat(lu)),"Renale Lithium-Clearance sinkt.","Lithiumspiegel nach 5–7 Tagen kontrollieren, Dosis anpassen; NSAR möglichst meiden.");
  var ag = sumOf("ag");
  if(ag.arr.length>=2) add(ag.arr.some(function(d){ return tg(d).ag>=2; })?"r":"y","Blutbild","Additives Agranulozytoserisiko",names(ag.arr),"Mehrere myelotoxische Substanzen.","Blutbild engmaschig; Kombination möglichst vermeiden.");
  var hy = sumOf("hy");
  if(hy.arr.length>=2 && hy.sum>=4) add("y","Kreislauf","Additive Hypotonie",names(hy.arr),"Orthostase und Sturzgefahr.","Blutdruck im Stehen, langsame Titration.");
  var br = sumOf("br");
  if(br.arr.length>=2) add("y","Kreislauf","Additive Bradykardie",names(br.arr),"Mehrere bradykardisierende Substanzen.","Puls und EKG.");
  var da = sumOf("da"), dag = ds.filter(function(d){ return tg(d).dag; });
  if(da.arr.length>=2 && da.sum>=4) add("y","EPMS","Additive D2-Blockade",names(da.arr),"Mehr EPMS, Prolaktin, MNS-Risiko.","Doppelte D2-Antagonisten vermeiden (auch MCP).");
  if(da.arr.length && dag.length) add("y","EPMS","Pharmakodynamischer Antagonismus",names(da.arr.concat(dag)),"D2-Antagonist und dopaminerge Substanz heben sich auf.","Bei Parkinson Quetiapin oder Clozapin bevorzugen.");
  var full = ds.filter(function(d){ return tg(d).op==="full"; }), part = ds.filter(function(d){ return tg(d).op==="partial"; }), ant = ds.filter(function(d){ return tg(d).op==="ant"; });
  if(part.length && full.length) add("y","Opioide","Partialagonist und voller Agonist",names(part.concat(full)),"Buprenorphin verdrängt volle Agonisten: Wirkverlust oder ausgelöster Entzug.","Analgesie gezielt planen; Wechsel nach Schema.");
  if(ant.length && (full.length||part.length)) add("r","Opioide","Opioidantagonist mit Opioid",names(ant.concat(full,part)),"Entzug wird ausgelöst bzw. Analgesie blockiert.","Naltrexon nicht bei Opioidgebrauch; Naloxon nur im Notfall.");
  RULES.forEach(function(r){
    var A = ds.filter(function(d){ return r.a.indexOf(d.id)>=0; }), B = ds.filter(function(d){ return r.b.indexOf(d.id)>=0; });
    if(A.length && B.length) add(r.sev,"Einzelregel","Bekannte Einzelinteraktion",names(A.concat(B)),r.t,"");
  });
  // Kontext
  ctx.forEach(function(k){
    ds.forEach(function(d){ var c = drugCx(d,k); if(c && c[0]==="r") add("r","Kontext",CTXL[k]+": "+d.n,[d.n],c[1],"Im aktiven Patientenkontext ungünstig."); });
  });
  var seen = {}, G = [];
  F.forEach(function(f){ var k=f.title+"|"+f.drugs.join("+"); if(seen[k]){ var g=seen[k]; if(LVL2[f.sev]<LVL2[g.sev]) g.sev=f.sev; var m=f.text.match(/(CYP\w+|UGT)/); if(m && g.text.indexOf(m[1])<0) g.text = g.text.replace(/(induziert|hemmt) (CYP\w+|UGT|die Glukuronidierung)/, "$1 $2/"+m[1]); return; } seen[k]=f; G.push(f); });
  F = G;
  var ord = {r:0,y:1,i:2};
  F.sort(function(a,b){ return ord[a.sev]-ord[b.sev]; });
  return F;
}

/* ---------- Notizen ---------- */
var Notes = {
  mode:"local", map:LS.get("notes",{}), col:null,
  key:function(type,id){ return type+":"+id; },
  docId:function(key){ return "n_"+key.replace(/[^a-zA-Z0-9_-]/g,"_"); },
  get:function(key){ return Notes.map[key]||""; },
  save:function(key,text){
    Notes.map[key]=text;
    if(Notes.mode==="db" && Notes.col){
      var ref = Notes.col.doc(Notes.docId(key));
      return (text.trim() ? ref.set({key:key,text:text,updatedAt:Date.now()}) : ref.delete()).then(function(){ return "Gespeichert"; },function(e){ return "Nicht gespeichert ("+(e&&e.code||"Fehler")+")"; });
    }
    LS.set("notes",Notes.map); return Promise.resolve("Auf diesem Gerät gespeichert");
  },
  init:function(){
    if(!window.claude || !window.claude.use) return;
    Promise.all([window.claude.use("db"), window.claude.use("user")]).then(function(r){
      var db=r[0], user=r[1]; if(!db||!user) return;
      return user.id().then(function(uid){
        if(!uid) return;
        Notes.col = db.collection("data/users/"+uid); Notes.mode="db";
        Notes.col.onSnapshot(function(snap){
          var m = {};
          snap.docs.forEach(function(d){ var v=d.data(); if(v && v.key) m[v.key]=v.text||""; });
          var local = LS.get("notes",{});
          Object.keys(local).forEach(function(k){ if(!(k in m) && local[k]){ m[k]=local[k]; Notes.save(k,local[k]); } });
          Notes.map = m; LS.set("notes",{});
          refreshNoteField();
        }, function(){});
      });
    }).catch(function(){});
  }
};
function refreshNoteField(){
  var ta = $("#note"); if(!ta || document.activeElement===ta) { updateNoteHint(); return; }
  ta.value = Notes.get(ta.dataset.key); updateNoteHint();
}
function updateNoteHint(){ var h=$("#note-mode"); if(h) h.textContent = Notes.mode==="db" ? "Synchronisiert über deine Geräte, nur für dich sichtbar." : "Nur auf diesem Gerät gespeichert (Sync nur in claude.ai)."; }

/* ---------- Rückmeldungen (v3.4): Fehler melden, Profilpunkte bewerten ---------- */
var FB = {col:null, mode:"local", list:[], kinds:[["fehler","Fehler"],["fehlt","Fehlt"],["veraltet","Veraltet"],["anderes","Sonstiges"]],
  init:function(){
    if(!window.claude || !window.claude.use) return;
    window.claude.use("db").then(function(db){ if(!db) return;
      FB.col = db.collection("reports"); FB.mode = "db";
      var pend = LS.get("reports", []); if(pend.length){ LS.set("reports", []); pend.forEach(function(r){ FB.col.add(r).catch(function(){}); }); }
      FB.col.onSnapshot(function(snap){ FB.list = snap.docs.map(function(d){ var v = d.data()||{}; v._id = d.id; return v; }); var c = $("#fb-count"); if(c) c.textContent = fbCountText(); }, function(){});
    }).catch(function(){});
  },
  send:function(r){
    r.at = Date.now(); r.v = VERSION; r.status = "offen";
    if(FB.mode==="db" && FB.col) return FB.col.add(r).then(function(){ return "Gesendet – wird beim nächsten Update geprüft und eingearbeitet."; }, function(e){ var L = LS.get("reports",[]); L.push(r); LS.set("reports",L); return "Nicht gesendet ("+(e&&e.code||"Fehler")+"), auf diesem Gerät vorgemerkt."; });
    var L = LS.get("reports",[]); L.push(r); LS.set("reports",L); return Promise.resolve("Auf diesem Gerät vorgemerkt – wird übertragen, sobald die App in claude.ai geöffnet ist.");
  }
};
function fbCountText(){ var open = FB.list.filter(function(r){ return r.status!=="erledigt"; }).length, done = FB.list.length-open; return FB.list.length ? open+" offen · "+done+" eingearbeitet" : "noch keine"; }
function fbBlock(key, title){
  return '<details class="fb"><summary>Fehler melden oder Korrektur vorschlagen</summary><div class="fb-b" data-fbkey="'+esc(key)+'" data-fbtitle="'+esc(title)+'">'+
    '<div class="seg fb-k" role="group" aria-label="Art">'+FB.kinds.map(function(k,i){ return '<button data-fbkind="'+k[0]+'" aria-pressed="'+(i===0)+'">'+k[1]+'</button>'; }).join("")+'</div>'+
    '<textarea class="fb-t" placeholder="Was stimmt nicht oder fehlt? Abschnitt nennen, z. B. „Dosis ≥ 65 J.: …“"></textarea>'+
    '<input class="fb-q" type="text" placeholder="Quelle (Fachinfo, Leitlinie, Seite) – optional" autocomplete="off">'+
    '<div class="fb-row"><button class="btn" data-fbsend="1">Senden</button><span class="fb-st note-soft"></span></div>'+
    '<p class="hint">Meldungen landen in der Datenbank dieser App. Claude liest sie beim nächsten Update, prüft sie gegen die Quelle und arbeitet sie ein. Keine Patientendaten eintragen.</p></div></details>';
}
function voteBlock(id, k){
  return '<div class="pvote" data-pv="'+id+'|'+k+'"><span>Stimmt die Einstufung?</span><button data-pvote="ok">stimmt</button><button data-pvote="hi">zu hoch</button><button data-pvote="lo">zu niedrig</button></div>';
}

/* ---------- KI ---------- */
var AI = { fn:null, ready:false, ctl:null, state:{} };
function aiInit(){
  if(!window.claude || !window.claude.use){ AI.ready=true; $$(".ai").forEach(function(el){ el.hidden=true; }); return; }
  window.claude.use("sample").then(function(f){ AI.fn=f; AI.ready=true; $$(".ai").forEach(function(el){ el.hidden = !AI.fn; }); }).catch(function(){ AI.ready=true; });
}
function cardText(type,id){
  if(type==="sit"){ var s = SIT.filter(function(x){ return x.id===id; })[0]; if(!s) return "";
    return "SITUATION: "+s.t+"\nKern: "+s.kern.join(" | ")+(s.steps?"\nStufenplan: "+s.steps.map(function(x){ return x.t+": "+x.x; }).join(" | "):"")+"\nOptionen: "+s.opts.map(function(o){ var n=o.d&&D[o.d]?D[o.d].n:o.t; return (ROLE[o.r]?ROLE[o.r][0]:"")+": "+n+(o.dos?" ("+o.dos+")":"")+" – "+(o.why||"")+(o.off?" [off-label]":""); }).join(" | ")+"\nVermeiden: "+(s.avoid||[]).map(function(a){ return (a.d&&D[a.d]?D[a.d].n:a.t)+" – "+a.why; }).join(" | ")+"\nQuellen: "+s.src; }
  if(type==="drug"){ var d=D[id]; if(!d) return "";
    var t="WIRKSTOFF: "+d.n+" ("+(d.k||"")+")\nKern: "+(d.kern||[]).join(" | ");
    if(!d.stub) t += "\nZulassung DE: "+d.ind+"\nOff-label: "+d.off+"\nKI: "+d.ki+"\nDosis Erw.: "+d.dos.e+" | ≥65: "+d.dos.a+" | 12–17: "+d.dos.j+"\nInteraktionen: "+d.ia+"\nKontrollen: "+d.ktr+"\nSchwangerschaft/Stillzeit: "+d.ss;
    return t+"\nQuellen: "+(d.src||""); }
  return "";
}
function aiPrompt(question, cards){
  var ctx = activeCtx().map(function(k){ return CTXL[k]; });
  return [
    "Du bist ein klinisch-pharmakologischer Kurzberater für einen Assistenzarzt der Psychiatrie in Deutschland, der gerade mit Patienten spricht und in 20 Sekunden lesen muss.",
    "Antworte auf Deutsch, höchstens 6 kurze Zeilen oder Spiegelstriche, ohne Einleitung und ohne Wiederholung der Frage.",
    "Regeln:",
    "- Stütze dich zuerst auf die KARTEN. Was darüber hinausgeht, kennzeichne mit „(außerhalb der Karten)“.",
    "- Dosierungen immer mit Einheit. Unsicheres mit „(unsicher)“ markieren. Zugelassen vs. off-label unterscheiden.",
    "- Letzte Zeile beginnt mit „Prüfen:“ und nennt, was vor Anwendung gegen Fachinfo oder Leitlinie zu prüfen ist.",
    "- Frage nicht nach Patientendaten.",
    "Patientenkontext: "+(ctx.length?ctx.join(", "):"keiner angegeben"),
    "Medikationsliste im Interaktions-Check: "+(st.meds.length?st.meds.map(function(id){ return D[id].n; }).join(", "):"leer"),
    "",
    "KARTEN:",
    cards.join("\n\n").slice(0,9000),
    "",
    "FRAGE: "+question
  ].join("\n");
}
function mdLite(s){
  var lines = esc(s).split(/\n/), out=[], inList=false;
  lines.forEach(function(l){
    l = l.replace(/\*\*(.+?)\*\*/g,"<b>$1</b>");
    var m = l.match(/^\s*[-•*]\s+(.*)$/);
    if(m){ if(!inList){ out.push("<ul>"); inList=true; } out.push("<li>"+m[1]+"</li>"); }
    else { if(inList){ out.push("</ul>"); inList=false; } if(l.trim()) out.push("<p>"+l+"</p>"); }
  });
  if(inList) out.push("</ul>");
  return out.join("");
}
var AI_ERR = {not_granted:"Du hast die KI-Nutzung für diese Seite abgelehnt. Erlauben kannst du sie über das Berechtigungsmenü der Seite.",rate_limited:"Gerade zu viele Anfragen. Bitte kurz warten.",cancelled:"Abgebrochen.",session_expired:"Sitzung abgelaufen. Seite neu laden.",prompt_too_large:"Zu viel Kontext. Frage enger stellen.",refused:"Diese Frage wurde nicht beantwortet.",upstream_error:"Verbindungsfehler. Bitte erneut versuchen.",sampling_disabled:"KI ist in dieser Ansicht nicht verfügbar."};
function aiBlock(slot, defaultQ){
  return '<div class="ai" data-slot="'+slot+'"'+(AI.ready&&!AI.fn?' hidden':'')+'>'+
    '<div class="ai-head"><b>Frag Claude</b><div class="seg" role="group" aria-label="Modell">'+
    '<button data-tier="quick" aria-pressed="'+(st.aiTier==="quick")+'">Schnell</button><button data-tier="default" aria-pressed="'+(st.aiTier==="default")+'">Gründlich</button></div></div>'+
    '<div class="field"><input id="aiq-'+slot+'" type="text" value="'+esc(defaultQ||"")+'" placeholder="Konkrete Frage, ohne Patientennamen" autocomplete="off"></div>'+
    '<div style="display:flex;gap:8px"><button class="btn" data-ai-go="'+slot+'">Fragen</button><button class="btn ghost" data-ai-stop="'+slot+'" hidden>Stopp</button></div>'+
    '<div class="ai-out" id="aio-'+slot+'"></div><div class="ai-meta" id="aim-'+slot+'">Nutzt dein Claude-Kontingent. Antwort ist eine Synthese der Karten und ersetzt keine Fachinfo.</div></div>';
}
function aiRun(slot, cardsFn){
  if(!AI.fn) return;
  var inp=$("#aiq-"+slot), out=$("#aio-"+slot), meta=$("#aim-"+slot), stop=$('[data-ai-stop="'+slot+'"]'), go=$('[data-ai-go="'+slot+'"]');
  var q = inp.value.trim(); if(!q){ inp.focus(); return; }
  if(AI.ctl) AI.ctl.abort();
  var ctl = AI.ctl = new AbortController();
  out.innerHTML = "<p>Denkt nach …</p>"; meta.textContent=""; stop.hidden=false; go.disabled=true;
  var t0 = Date.now();
  AI.fn(aiPrompt(q, cardsFn()), {modelTier:st.aiTier, signal:ctl.signal, onText:function(u){ out.innerHTML = mdLite(u.text); }})
    .then(function(r){ out.innerHTML = mdLite(r.text); meta.textContent = "Antwort in "+Math.round((Date.now()-t0)/1000)+" s · "+(r.modelTierApplied||st.aiTier)+(r.truncated?" · gekürzt":"")+" · Synthese, gegen Fachinfo prüfen."; })
    .catch(function(e){ if(e && e.text) out.innerHTML = mdLite(e.text); else out.innerHTML=""; meta.textContent = AI_ERR[e&&e.code] || ("Fehler: "+(e&&e.code||"unbekannt")); if(e&&e.code==="not_granted"){ $$(".ai").forEach(function(el){ el.hidden=true; }); } })
    .then(function(){ stop.hidden=true; go.disabled=false; if(AI.ctl===ctl) AI.ctl=null; });
}

/* ---------- Grundgerüst ---------- */
var ICON = {
  suche:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>',
  sit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h10"/></svg>',
  drug:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3.5" y="8.5" width="17" height="7" rx="3.5" transform="rotate(-35 12 12)"/><path d="M9.2 7.9l4.9 7"/></svg>',
  ia:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="8" cy="12" r="4.5"/><circle cx="16" cy="12" r="4.5"/></svg>',
  calc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="5" y="3" width="14" height="18" rx="2.5"/><path d="M8.5 7.5h7M8.5 12h1M12 12h1M15.5 12h0M8.5 16h1M12 16h1M15.5 16h0"/></svg>'
};
ICON.prof = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="5" cy="7" r="1.6"/><circle cx="12" cy="7" r="2.6"/><circle cx="19" cy="7" r="3.2"/><circle cx="5" cy="17" r="3.2"/><circle cx="12" cy="17" r="1.6"/><circle cx="19" cy="17" r="2.4"/></svg>';
var TABS = [["suche","Suche","suche"],["sit","Situationen","sit"],["drug","Wirkstoffe","drug"],["ia","Interaktion","ia"],["calc","Rechner","calc"]];
if(st.tab==="prof"){ st.tab="drug"; st.drugView="prof"; }
if(!TABS.some(function(t){ return t[0]===st.tab; })) st.tab="suche";

function shell(){
  var app = $("#app");
  app.innerHTML =
    '<header class="top" id="top"><div class="top-in"><div class="brand"><h1><span class="rx">Rx</span><span class="bn">Psychopharmaka-Kompass</span></h1><div class="tools">'+
    '<button class="iconbtn" id="learnbtn" aria-pressed="'+st.learn+'" title="Lernmodus: alle Abschnitte offen, mit Mechanismen">Lernen</button>'+
    '<button class="iconbtn" id="menubtn" aria-label="Menü" aria-expanded="false">⋯</button></div></div>'+
    '<div class="search"><svg class="s-ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg><input id="q" type="search" enterkeyhint="search" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Symptom, Wirkstoff, Handelsname …" aria-label="Suche" aria-keyshortcuts="/"><button class="clr" id="qclr" aria-label="Suche leeren" hidden>×</button></div>'+
    '<div class="ctxbar" id="ctxbar" role="group" aria-label="Patientenkontext"></div><div id="menu"></div></div></header>'+
    '<main id="main"></main>'+
    '<nav class="tabs" id="tabs" aria-label="Bereiche"><div class="side-brand"><span class="rx">Rx</span><span><b>Psychopharmaka</b><span>Kompass</span></span></div>'+TABS.map(function(t){ return '<button data-tab="'+t[0]+'">'+ICON[t[2]]+'<span>'+t[1]+'</span></button>'; }).join("")+'<div class="side-foot">'+esc(VERSION)+'<br>Ersetzt nicht die Fachinformation.</div></nav>'+
    '<div id="sheet"></div><div class="pane-empty" aria-hidden="true"><div><span class="rx big">Rx</span><b>Karte auswählen</b><span>Situation, Wirkstoff, Entscheidungshilfe oder Rechner links antippen. Die Liste bleibt sichtbar.</span><span class="kbd-h"><kbd>/</kbd> Suche · <kbd>↓</kbd> Treffer · <kbd>Esc</kbd> schließen</span></div></div>';
}
function renderCtx(){
  var act = activeCtx();
  var order = CTX.filter(function(c){ return act.indexOf(c[0])>=0; }).concat(CTX.filter(function(c){ return act.indexOf(c[0])<0; }));
  $("#ctxbar").innerHTML = order.map(function(c){
    var on = act.indexOf(c[0])>=0, det = st.det.indexOf(c[0])>=0 && st.ctx.indexOf(c[0])<0;
    return '<button class="chip'+(det?' det':'')+'" data-ctx="'+c[0]+'" aria-pressed="'+on+'"'+(det&&on?' title="Aus der Suche erkannt"':'')+'>'+esc(c[1])+'</button>';
  }).join("") + (act.length ? '<button class="chip clr-chip" data-ctx="__clear">'+act.length+' aktiv · leeren</button>' : '');
}
function renderTabs(){ $$("#tabs button").forEach(function(b){ if(b.dataset.tab===st.tab) b.setAttribute("aria-current","page"); else b.removeAttribute("aria-current"); }); }

function rowHTML(type,id,title,sub,extra,showKind){
  var icon = type==="drug" && D[id] ? ava(id) : (type==="sit"||type==="alg"||type==="calc"||type==="info") ? aico(areaOf(type,id)||"info") : '';
  var kind = (showKind && type==="calc") ? '<span class="kind-i">Rechner</span>' : '';
  return '<button class="row" data-open="'+type+':'+id+'">'+icon+'<span class="main"><span class="t">'+esc(title)+kind+'</span>'+(sub?'<span class="s" style="display:block">'+esc(sub)+'</span>':'')+(extra||'')+'</span></button>';
}
function titleOf(type,id){
  if(type==="sit"){ var s=SIT.filter(function(x){return x.id===id;})[0]; return s?s.t:id; }
  if(type==="drug") return D[id]?D[id].n:id;
  if(type==="calc"){ var c=CALCS.filter(function(x){return x.id===id;})[0]; return c?c.t:id; }
  if(type==="info") return "Hinweise und Quellen";
  if(type==="alg"){ var al = (window.ALGS||[]).filter(function(x){ return x.id===id; })[0]; if(!al) return id; var s0 = al.sit ? SIT.filter(function(x){ return x.id===al.sit; })[0] : null; return "Entscheidung: "+(al.t || (s0?s0.t:id)); }
  return id;
}
function subOf(type,id){
  if(type==="sit"){ var s=SIT.filter(function(x){return x.id===id;})[0]; return s?AREAS[s.a]:""; }
  if(type==="drug") return D[id]?D[id].k:"";
  if(type==="calc"){ var c=CALCS.filter(function(x){return x.id===id;})[0]; return c?c.s:""; }
  if(type==="alg") return "Entscheidungshilfe";
  return "";
}


/* ---------- Entscheidungshilfen ---------- */
var ALGS = window.ALGS || [];
function slug(t){ return fold(t).replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""); }
function sitById(id){ return SIT.filter(function(x){ return x.id===id; })[0]; }
function algById(id){ return ALGS.filter(function(x){ return x.id===id; })[0]; }
function algTitle(a){ return a.t || (sitById(a.sit)||{}).t || a.id; }
function algOpts(a){ return a.opts || ((sitById(a.sit)||{}).opts) || []; }
function optKey(o){ return o.d || slug(o.t); }
function optDrug(o){ if(o.d) return o.d; var m=/^([A-Za-zÄÖÜäöüß]+)(?=$| \d| \()/.exec(o.t||""); if(!m) return null; var id=fold(m[1]); return D[id] ? id : null; }
function keyHit(k,o){ if(k==="*") return o.r!=="nm"; return optKey(o).indexOf(k)===0 || optDrug(o)===k; }
var ALGST = LS.get("alg",{}); if(!ALGST || typeof ALGST!=="object") ALGST = {};
function algState(id){ if(!ALGST[id] || typeof ALGST[id]!=="object") ALGST[id] = {ans:{}, ctx:null}; if(!ALGST[id].ctx) ALGST[id].ctx = activeCtx().slice(); return ALGST[id]; }
function saveAlg(){ LS.set("alg",ALGST); }
var PROF = [["sd",2,"sedierend"],["ac",2,"anticholinerg"],["qt",2,"QT ↑"],["at",2,"Atemdepression"],["ag",1,"Blutbild"],["da",2,"EPS/Prolaktin"],["se",3,"stark serotonerg"],["hy",2,"Hypotonie"],["kr",2,"Krampfschwelle ↓"],["stim",1,"aktivierend"]];
function profFlags(dr){ var t = dr && D[dr] && D[dr].tg || {}; return PROF.filter(function(p){ return (t[p[0]]||0) >= p[1]; }).map(function(p){ return p[2]; }); }
function uniq(a){ var o=[]; a.forEach(function(x){ if(x && o.indexOf(x)<0) o.push(x); }); return o; }
function algEval(a, stt){
  var ans = stt.ans || {}, ctx = stt.ctx || [], W=[], N=[], GO=[], eff=[];
  if(a.base){ (a.base.w||[]).forEach(function(x){ W.push(x); }); (a.base.n||[]).forEach(function(x){ N.push(x); }); }
  a.q.forEach(function(q){ var i=ans[q.id]; if(i==null || !q.a[i]) return; var e=q.a[i].e; if(e) eff.push(e); });
  eff.forEach(function(e){ if(e.w) W.push(e.w); if(e.n) N.push(e.n); (e.go||[]).forEach(function(g){ if(!GO.some(function(x){ return x.to===g.to; })) GO.push(g); }); });
  var answered = a.q.filter(function(q){ return ans[q.id]!=null; }).length;
  if(a.kind==="umst"){ var pl = a.plan(ans); return {umst:true, W:W.concat(pl.w), N:pl.n.concat(N), GO:GO, drugs:pl.drugs||[], answered:answered}; }
  var BASE = {"1":40, a:28, r:12, "int":4, adj:22, nm:30};
  var R = algOpts(a).map(function(o){ return {o:o, dr:optDrug(o), score:(BASE[o.r]||10) + (o.ev||0)*4, pro:[], con:[], x:null, boosted:false}; });
  eff.forEach(function(e){ R.forEach(function(r){
    ["pp","p","m","x"].forEach(function(kind){ var map=e[kind]; if(!map) return;
      Object.keys(map).forEach(function(k){ if(!keyHit(k,r.o)) return; var why=map[k];
        if(kind==="x"){ if(!r.x) r.x=why; }
        else if(kind==="pp"){ r.score+=30; r.pro.push(why); r.boosted=true; }
        else if(kind==="p"){ r.score+=15; r.pro.push(why); r.boosted=true; }
        else { r.score-=18; r.con.push(why); } }); }); }); });
  R.forEach(function(r){ if(!r.dr) return; ctx.forEach(function(k){ var c=drugCx(D[r.dr],k); if(!c){ r.score-=4; r.con.push(CTXL[k]+": keine Angabe in der Karte – Fachinfo prüfen"); return; }
    if(c[0]==="r"){ if(!r.x) r.x = CTXL[k]+": "+c[1]; }
    else if(c[0]==="y"){ r.score-=10; r.con.push(CTXL[k]+": "+c[1]); }
    else if(c[0]==="g"){ r.score+=3; r.pro.push(CTXL[k]+": "+c[1]); } }); });
  if(ctx.indexOf("alt")>=0 && window.PRISCUS) R.forEach(function(r){ var e = r.dr && PRISCUS.pim[r.dr]; if(e) r.con.push("PRISCUS 2.0: potenziell inadäquat ≥ 65 J."+(e.c?" ("+e.c+")":"")+(e.alt?"; Alternativen laut Liste: "+e.alt:"")); });
  R.forEach(function(r){ r.pro=uniq(r.pro); r.con=uniq(r.con); });
  var by = function(x,y){ return y.score-x.score; };
  var ok = R.filter(function(r){ return !r.x; }), ex = R.filter(function(r){ return r.x; });
  var nm = ok.filter(function(r){ return r.o.r==="nm"; }).sort(by);
  var adjMain = a.adjMain || !ok.some(function(r){ return r.o.r!=="nm" && r.o.r!=="adj" && r.score>=30; });
  var main = ok.filter(function(r){ return r.o.r!=="nm" && (adjMain || r.o.r!=="adj"); }).sort(by);
  var adj = adjMain ? [] : ok.filter(function(r){ return r.o.r==="adj"; }).sort(by);
  var best = main[0], tie = best ? main.filter(function(r){ return r.score >= best.score-8; }).slice(0,4) : [];
  var alts = main.slice(tie.length, tie.length+3), rest = main.slice(tie.length+3);
  var nmFirst = nm.some(function(r){ return r.boosted && r.score >= 60; });
  return {W:uniq(W), N:uniq(N), GO:GO, nm:nm, adj:adj, main:main, tie:tie, alts:alts, rest:rest, ex:ex, nmFirst:nmFirst, answered:answered};
}
function optName(r){ var o=r.o; return o.d&&D[o.d] ? '<button class="opt-name" data-open="drug:'+o.d+'">'+esc(D[o.d].n)+'</button>' : (r.dr && !D[r.dr].stub ? '<button class="opt-name" data-open="drug:'+r.dr+'">'+vt(o.t)+'</button>' : '<span class="opt-name plain">'+vt(o.t)+'</span>'); }
function recCard(r, label){
  var o=r.o, role=ROLE[o.r]||["",""], flags=profFlags(r.dr);
  var pro = (o.why?[o.why]:[]).concat(r.pro), con = r.con.slice();
  return '<div class="rc">'+(label?'<div class="rc-l">'+esc(label)+'</div>':'')+
    '<div class="opt-top">'+optName(r)+(o.off?'<span class="pill off">off-label</span>':'')+(typeof o.ev==="number"?'<span class="ev">'+"●●●".slice(0,o.ev)+"○○○".slice(0,3-o.ev)+' '+EVL[o.ev]+'</span>':'')+'</div>'+
    '<div class="rc-role">Karte: '+esc(role[0])+'</div>'+(o.dos?'<div class="dose">'+vt(o.dos)+'</div>':'')+
    '<div class="pc"><div class="pc-p"><b>Dafür</b><ul class="fl">'+pro.map(function(x){ return '<li>'+vt(x)+'</li>'; }).join("")+'</ul></div>'+
    (con.length||flags.length?'<div class="pc-c"><b>Beachten</b><ul class="fl">'+con.map(function(x){ return '<li>'+vt(x)+'</li>'; }).join("")+(flags.length?'<li>Profil: '+esc(flags.join(", "))+'</li>':'')+'</ul></div>':'')+'</div></div>';
}
/* Stufen statt Rangliste: passt (keine Einwände, von Antworten gestützt oder 1. Wahl/Alternative laut Karte),
   mit Vorsicht (mindestens ein Einwand aus Antworten oder Kontext), weitere (Reserve, Kombination, nicht gestützt). */
function algTiers(ev){
  var fit = [], care = [], more = [];
  ev.main.forEach(function(r){ if(r.con.length) care.push(r); else if(r.boosted || r.o.r==="1" || r.o.r==="a") fit.push(r); else more.push(r); });
  return {fit:fit, care:care, more:more};
}
function tierRow(r){
  var o = r.o, pro = (o.why?[o.why]:[]).concat(r.pro);
  return '<div class="arow"><div class="opt-top">'+optName(r)+(o.off?'<span class="pill off">off-label</span>':'')+'<span class="ev">Karte: '+esc((ROLE[o.r]||[""])[0])+'</span></div>'+(o.dos?'<div class="dose">'+vt(o.dos)+'</div>':'')+
    (r.con.length?'<ul class="fl con-l">'+r.con.map(function(c){ return '<li>'+vt(c)+'</li>'; }).join("")+'</ul>':'')+(pro.length?'<div class="why">'+vt(pro.slice(0,2).join("; "))+'</div>':'')+'</div>';
}
function algResult(a, ev){
  var h = '<section class="alg-res" id="alg-res"><div class="sec-h">Ergebnis nach '+ev.answered+' von '+a.q.length+' Antworten</div>';
  ev.W.forEach(function(w){ h += '<div class="find r"><div class="fa">'+vt(w)+'</div></div>'; });
  if(ev.GO.length) h += '<div class="go-box"><b>Passender ist vielleicht:</b><div class="go-l">'+ev.GO.map(function(g){ var t = algById(g.to) ? "alg:"+g.to : "sit:"+g.to; return '<button class="go-btn" data-open="'+t+'">'+esc(g.t)+' ›</button>'; }).join("")+'</div></div>';
  if(ev.umst){
    if(!ev.N.length && !ev.W.length) h += '<p class="empty">Von und Auf auswählen – dann erscheint das Vorgehen.</p>';
    else h += '<div class="rc"><div class="rc-l">Vorgehen</div><ol class="steps2">'+ev.N.map(function(n){ return '<li>'+vt(n)+'</li>'; }).join("")+'</ol></div>';
    var uIds = uniq(ev.drugs).filter(hasP);
    if(uIds.length===2) h += '<div class="cmp-box"><div class="cmp-h">Was sich mit dem Wechsel ändert</div>'+cmpTable(uIds)+'<p class="hint">Stellvertretend für die gewählte Gruppe: '+esc(uIds.map(function(d){ return D[d].n; }).join(" → "))+'. '+PNOTE+'</p></div>';
    if(ev.drugs.length) h += '<div class="sec-h">Karten</div><div class="quick">'+uniq(ev.drugs).filter(function(d){ return D[d]; }).map(function(d){ return '<button data-open="drug:'+d+'">'+esc(D[d].n)+'</button>'; }).join("")+'</div>';
    return h+'<p class="hint">Abstände und Schritte aus den Wirkstoffkarten (Fachinformation, Kompendium, Pocket Guide). „prüfen“ = nicht in den Quellen belegt.</p></section>';
  }
  if(ev.nmFirst) h += '<div class="nm-first"><b>Zuerst:</b> '+ev.nm.filter(function(r){ return r.boosted; }).map(function(r){ return vt(r.o.t); }).join(" · ")+'</div>';
  var TR = algTiers(ev);
  if(!ev.main.length) h += '<p class="empty">Bei diesen Antworten bleibt keine medikamentöse Option übrig. Prüfe die ausgeschlossenen Optionen unten.</p>';
  else {
    h += '<div class="tier-h fit"><span class="tb">Passt zu deinen Angaben</span><span class="tn">'+TR.fit.length+'</span></div>';
    if(!TR.fit.length) h += '<p class="empty">Keine Option ohne Einschränkung – siehe „Mit Vorsicht“.</p>';
    else {
      var fIds = uniq(TR.fit.map(function(r){ return r.dr; })).filter(hasP).slice(0,4);
      if(fIds.length>=2) h += '<div class="cmp-box"><div class="cmp-h">Worin sie sich unterscheiden</div>'+cmpTable(fIds, {fold: fIds.length>2})+'<p class="hint">'+PNOTE+'</p></div>';
      h += '<div class="rc-grid">'+TR.fit.slice(0,4).map(function(r){ return recCard(r); }).join("")+'</div>';
      if(TR.fit.length>4) h += '<div class="list">'+TR.fit.slice(4).map(tierRow).join("")+'</div>';
    }
    if(TR.care.length) h += '<div class="tier-h care"><span class="tb">Mit Vorsicht</span><span class="tn">'+TR.care.length+'</span></div><div class="list">'+TR.care.map(tierRow).join("")+'</div>';
    if(TR.more.length) h += '<div class="tier-h more"><span class="tb">Weitere Optionen der Karte</span><span class="tn">'+TR.more.length+'</span></div><div class="list">'+TR.more.map(tierRow).join("")+'</div>';
  }
  var allIds = uniq(ev.main.concat(ev.adj).map(function(r){ return r.dr; })).filter(hasP).slice(0,8);
  if(allIds.length>=2) h += '<details class="acc"><summary>Profil aller Optionen vergleichen · '+allIds.length+'</summary><div class="acc-b">'+pLegend()+cmpTable(allIds,{all:true})+'<p class="hint">Grün hinterlegt: günstigster Wert der Zeile. '+PNOTE+'</p></div></details>';
  if(ev.adj.length) h += '<div class="sec-h">Zusatz / Kombination</div><div class="list">'+ev.adj.map(function(r){ var o=r.o; return '<div class="arow"><div class="opt-top">'+optName(r)+(o.off?'<span class="pill off">off-label</span>':'')+'</div>'+(o.dos?'<div class="dose">'+vt(o.dos)+'</div>':'')+'<div class="why">'+vt(r.pro.length?r.pro.join("; "):(o.why||""))+'</div></div>'; }).join("")+'</div>';
  if(ev.nm.length) h += '<div class="sec-h">Nicht-medikamentös</div><div class="list">'+ev.nm.map(function(r){ return '<div class="arow"><div class="opt-top"><span class="opt-name plain">'+vt(r.o.t)+'</span></div><div class="why">'+vt(r.pro.length?r.pro.join("; "):(r.o.why||""))+'</div></div>'; }).join("")+'</div>';
  if(ev.N.length) h += '<div class="sec-h">Vorgehen</div><ul class="fl">'+ev.N.map(function(n){ return '<li>'+vt(n)+'</li>'; }).join("")+'</ul>';
  if(ev.ex.length) h += '<details class="acc"><summary>Ausgeschlossen · '+ev.ex.length+'</summary><div class="acc-b"><ul class="fl">'+ev.ex.map(function(r){ return '<li><b>'+esc(r.dr&&D[r.dr]?D[r.dr].n:r.o.t)+':</b> '+vt(r.x)+'</li>'; }).join("")+'</ul></div></details>';
  h += '<p class="hint">Keine Rangliste: Die Stufen ergeben sich aus der Rolle laut Karte (Leitlinie, Lehrbuch), deinen Antworten und den Kontextangaben der Wirkstoffkarten. Innerhalb einer Stufe zuerst die Optionen mit Rolle „1. Wahl“. Die Abwägung bleibt ärztlich; Dosis und KI in der Fachinformation prüfen.</p></section>';
  return h;
}
function sheetAlg(id){
  var a = algById(id); if(!a) return "<p>Nicht gefunden.</p>";
  var stt = algState(id), ev = algEval(a, stt), s = a.sit ? sitById(a.sit) : null;
  var h = '<div class="eyebrow">Entscheidungshilfe · '+esc(a.area || (s?AREAS[s.a]:""))+'</div><h2 class="title">'+esc(algTitle(a))+'</h2>';
  h += '<div class="alg-bar"><span class="prog"><span style="width:'+Math.round(ev.answered/a.q.length*100)+'%"></span></span><span class="note-soft">'+ev.answered+' / '+a.q.length+'</span>'+(s?'<button class="lnk" data-open="sit:'+s.id+'">Zur Karte</button>':'')+'<button class="lnk" data-areset="'+id+'">Neu beginnen</button></div>';
  if(a.ctx && a.ctx.length){
    var keys = uniq(a.ctx.concat(stt.ctx));
    h += '<div class="actx"><div class="actx-h"><b>Patient</b><span class="note-soft">'+(stt.ctx.length ? stt.ctx.length+' gewählt – ungeeignete Mittel fallen weg' : 'optional, Mehrfachauswahl')+'</span></div><div class="actx-c">'+keys.map(function(k){ return '<button class="ans" data-actx="'+k+'" aria-pressed="'+(stt.ctx.indexOf(k)>=0)+'">'+esc(CTXL[k])+'</button>'; }).join("")+'</div></div>';
  }
  var nextQ = a.q.filter(function(q){ return stt.ans[q.id]==null; })[0];
  a.q.forEach(function(q,qi){ var cur = stt.ans[q.id];
    var info = qHasInfo(q), qk = id+":"+q.id, qo = info && QOPEN[qk];
    var qib = info ? '<button class="qi" data-qi="'+qk+'" aria-expanded="'+(!!qo)+'" aria-controls="qp-'+q.id+'" aria-label="Hintergrund zu dieser Frage" title="Hintergrund: welche Mittel jede Antwort bevorzugt und warum">i</button>' : '';
    if(cur!=null && q.a[cur] && !QEDIT[qk]){
      h += '<div class="aq done min'+(qo?' qopen':'')+'"><div class="aq-t"><button class="aq-sum" data-qedit="'+qk+'" title="Antwort ändern"><span class="aq-n">'+(qi+1)+'</span><span class="aq-q">'+esc(q.t)+'</span><span class="aq-pick">'+esc(q.a[cur].t)+'</span></button>'+qib+'</div>'+(info?'<div class="qpop" id="qp-'+q.id+'">'+qInfo(a,q)+'</div>':'')+'</div>';
      return;
    }
    h += '<div class="aq'+(cur!=null?' done':'')+(q===nextQ?' next':'')+(qo?' qopen':'')+'"><div class="aq-t"><span class="aq-n">'+(qi+1)+'</span><span class="aq-q">'+esc(q.t)+'</span>'+(info?'<button class="qi" data-qi="'+qk+'" aria-expanded="'+(!!qo)+'" aria-controls="qp-'+q.id+'" aria-label="Hintergrund zu dieser Frage" title="Hintergrund: welche Mittel jede Antwort bevorzugt und warum">i</button>':'')+'</div><div class="aq-a">'+q.a.map(function(o,i){ return '<button class="ans" data-aq="'+q.id+'" data-ai="'+i+'" aria-pressed="'+(cur===i)+'">'+esc(o.t)+'</button>'; }).join("")+'</div>'+(info?'<div class="qpop" id="qp-'+q.id+'">'+qInfo(a,q)+'</div>':'')+'</div>'; });
  h += algResult(a, ev);
  var top = ev.umst ? (ev.N.length||ev.W.length ? "Vorgehen steht" : "") : (function(){ var TR = algTiers(ev), nm = function(r){ return r.dr&&D[r.dr]?D[r.dr].n:r.o.t.split(" ")[0]; };
    if(TR.fit.length) return "Passt: "+TR.fit.slice(0,3).map(nm).join(" · ")+(TR.fit.length>3?" +"+(TR.fit.length-3):"");
    return TR.care.length ? "Nur mit Vorsicht: "+TR.care.slice(0,2).map(nm).join(" · ") : ""; })();
  if(top) h += '<button class="alg-mini" data-jump="alg-res"><span>'+esc(top)+'</span><span aria-hidden="true">↓</span></button>';
  return h;
}
/* ---------- Profile: Punkte, Vergleich, Tabelle (v3.1) ---------- */
var PC = window.PCOLS || [], PM = window.PROFM || {}, PCI = {};
PC.forEach(function(c,i){ PCI[c.k] = i; });
var PLV = ["keine/kaum","gering","deutlich","stark"];
var PPH = {AD:"antidepressiv",AP:"antipsychotisch",ST:"antimanisch",AX:"anxiolytisch",SL:"schlafanstoßend",AN:"antriebssteigernd",KG:"prokognitiv",SED:"Sedierung",GEW:"Gewichtszunahme",AC:"anticholinerg",QT:"QTc-/Torsade-Risiko",EPS:"EPS/Akathisie",PRL:"Prolaktin",KRL:"Orthostase/Bradykardie",SEX:"sexuelle NW",SER:"serotonerg",ABH:"Abhängigkeit",KR:"Krampfrisiko",ATM:"Atemdepression",BB:"Blutbildrisiko",LEB:"Leberrisiko",HAUT:"Hautreaktionen",BL:"Blutungsrisiko",NA:"Hyponatriämie",GI:"GI-Beschwerden",IA:"Interaktionen"};
var PFOP = {"0":["keine",function(v){ return v===0; }], le1:["höchstens gering",function(v){ return v<=1; }], ge1:["vorhanden",function(v){ return v>=1; }], ge2:["mind. deutlich",function(v){ return v>=2; }], "3":["stark",function(v){ return v===3; }]};
var PPRE = [["AD","ge2","antidepressiv"],["AP","ge2","antipsychotisch"],["SL","ge2","schlafanstoßend"],["GEW","0","gewichtsneutral"],["AC","0","nicht anticholinerg"],["SED","0","nicht sedierend"],["QT","le1","QTc-arm"],["SEX","le1","wenig sexuelle NW"],["ABH","0","ohne Abhängigkeit"]];
function hasP(id){ return !!(id && PM[id] && D[id]); }
function pv(id,k){ if(k && k.charAt(1)===":") return PM[id] ? rxv(id,k.slice(2)) : null; var q = pSrc(id,k); if(q) return q.v; var r = PM[id]; return r ? r[PCI[k]] : null; }
function pSrc(id,k){ var S = window.PSRC||{}; return S[id] && S[id][k] || null; }
function pdot(v,c){ var lab = c.t+": "+PLV[v]; return '<span class="pd v'+v+(c.w?' w':'')+(c.r?' r':'')+'" role="img" title="'+esc(lab)+'" aria-label="'+esc(lab)+'"></span>'; }
function pLegend(withR){
  return '<div class="leg"><span class="leg-g"><b>Wirkung</b>'+[1,2,3].map(function(v){ return '<span class="leg-i">'+pdot(v,{t:"Wirkung",w:1})+PLV[v]+'</span>'; }).join("")+'</span>'+
    '<span class="leg-g"><b>Nebenwirkung</b>'+[0,1,2,3].map(function(v){ return '<span class="leg-i">'+pdot(v,{t:"Nebenwirkung"})+PLV[v]+'</span>'; }).join("")+'</span>'+
    (withR?'<span class="leg-g"><b>Rezeptor</b>'+[1,2,3].map(function(v){ return '<span class="leg-i">'+pdot(v,{t:"Rezeptor",r:1})+PLV[v]+'</span>'; }).join("")+'</span>':'')+'</div>';
}
var PNOTE = 'Relative Einstufung 0–3, eigene Schätzung aus den Karten und Standardprofilen der Lehrbücher, noch nicht gegen veröffentlichte Skalen geprüft. Keine Messgröße: Dosis, Einzelfall und Fachinformation entscheiden.';
function estNote(){ var n = 0; Object.keys(window.PSRC||{}).forEach(function(id){ n += Object.keys(PSRC[id]).length; });
  return '<div class="est-note"><b>≈ Schätzung</b><span>Die Punkte sind meine eigene Einstufung, keine Werte aus veröffentlichten Skalen'+(n?' (außer '+n+' mit ✓ und Quelle)':'')+'. Punkt antippen zeigt die Herkunft; dort kannst du die Einstufung bestätigen oder als zu hoch/zu niedrig melden.</span></div>'; }
/* Vergleichstabelle für 2–8 Wirkstoffe: nur Eigenschaften, in denen sie sich unterscheiden (opt.all: alle außer überall 0). */
function cmpTable(ids, opt){
  opt = opt || {}; ids = uniq(ids).filter(hasP);
  if(ids.length<2) return "";
  var rows = PC.map(function(c){ var vs = ids.map(function(id){ return pv(id,c.k); }), mx = Math.max.apply(null,vs), mn = Math.min.apply(null,vs); return {c:c, vs:vs, sp:mx-mn, mx:mx, mn:mn}; });
  var diff = rows.filter(function(r){ return r.sp>0; }), same = rows.filter(function(r){ return r.sp===0 && r.mx>0; });
  var show = opt.all ? rows.filter(function(r){ return r.mx>0; }) : diff.slice().sort(function(a,b){ return (b.c.w?1:0)-(a.c.w?1:0) || b.sp-a.sp || PCI[a.c.k]-PCI[b.c.k]; });
  if(opt.all) show.sort(function(a,b){ return (b.c.w?1:0)-(a.c.w?1:0) || PCI[a.c.k]-PCI[b.c.k]; });
  var many = ids.length>3, words = ids.length<=3;
  var h = '<div class="cmp'+(many?' many':'')+'"><table class="cmpt"><thead><tr><th class="cl"></th>'+ids.map(function(id){ return '<th class="cd"><button data-open="drug:'+id+'">'+ava(id,'xs')+'<span>'+esc(D[id].n)+'</span></button></th>'; }).join("")+'</tr></thead><tbody>';
  var lastW = null;
  show.forEach(function(r){
    var w = !!r.c.w; if(w!==lastW){ h += '<tr class="cg"><td colspan="'+(ids.length+1)+'">'+(w?"Wirkung":"Nebenwirkungen")+'</td></tr>'; lastW = w; }
    var good = w ? r.mx : r.mn;
    h += '<tr><th class="cl" scope="row">'+esc(r.c.t)+'</th>'+r.vs.map(function(v,i){ return '<td data-pc="'+ids[i]+'|'+r.c.k+'" title="'+esc(D[ids[i]].n+' · '+why(ids[i],r.c.k).t)+'" class="'+(!w && r.sp>0 && v===good?'gd':'')+'">'+pdot(v,r.c)+(words?'<span class="pl">'+PLV[v]+'</span>':'')+'</td>'; }).join("")+'</tr>';
  });
  h += '</tbody></table></div>';
  if(opt.fold && show.length) h = '<details class="cmp-tbl"><summary>Punkt für Punkt als Tabelle</summary>'+h+'</details>';
  if(!show.length) h = '<p class="hint">Im groben Profil gleich. Unterschiede dann in Dosis, Interaktionen und Karte.</p>';
  if(!opt.all){
    var sum = ids.map(function(id,i){
      var plus=[], minus=[];
      diff.forEach(function(r){ var v=r.vs[i], ph=PPH[r.c.k]||r.c.s;
        if(r.c.w){ if(v===r.mx) plus.push([r.sp, "stärker "+ph]); else if(v===r.mn && r.sp>=2) minus.push([r.sp, "schwächer "+ph]); }
        else { if(v===r.mn) plus.push([r.sp, "weniger "+ph]); else if(v===r.mx) minus.push([r.sp, "mehr "+ph]); } });
      function top(L){ L.sort(function(a,b){ return b[0]-a[0]; }); var big = L.filter(function(x){ return x[0]>=2; }); return (big.length>=2 ? big : L).slice(0,3).map(function(x){ return x[1]; }).join(", "); }
      return '<li><b>'+esc(D[id].n)+'</b>'+(plus.length?' <span class="up">▲ '+esc(top(plus))+'</span>':'')+(minus.length?' <span class="dn">▼ '+esc(top(minus))+'</span>':'')+'</li>';
    }).join("");
    if(diff.length) h = '<ul class="cmp-sum">'+sum+'</ul>'+h;
    if(same.length) h += '<p class="hint">Gleich bei: '+esc(same.map(function(r){ return (PPH[r.c.k]||r.c.s)+" ("+PLV[r.mx]+")"; }).join(", "))+'</p>';
    var wr = show.slice(0,8);
    if(wr.length) h += '<details class="cmp-why"'+(ids.length<=3?' open':'')+'><summary>Woher die Unterschiede kommen</summary><ul class="cw-l">'+wr.map(function(r){ return '<li><div class="cw-h">'+esc(r.c.t)+'</div>'+ids.map(function(id,i){ var w = why(id,r.c.k); return '<div class="cw-r">'+ava(id,'xs')+'<span><b>'+esc(D[id].n)+'</b> <span class="cw-v">'+pdot(r.vs[i],r.c)+PLV[r.vs[i]]+'</span> '+esc(w.t)+'</span></div>'; }).join("")+'</li>'; }).join("")+'</ul></details>';
  }
  return h;
}
/* Info-Punkt je Frage: was jede Antwort an der Gewichtung ändert, und warum */
var QOPEN = {};
var EFK = [["pp","▲▲","stark bevorzugt"],["p","▲","bevorzugt"],["m","▼","abgewertet"],["x","✕","ausgeschlossen"]];
function shortOpt(t){ return String(t||"").split(/ \(|: | – |, /)[0]; }
function qEffects(a, e){
  var opts = algOpts(a), out = [];
  EFK.forEach(function(K){ var map = e[K[0]]; if(!map) return;
    Object.keys(map).forEach(function(k){
      var hits = k==="*" ? [] : opts.filter(function(o){ return keyHit(k,o); });
      var items = k==="*" ? [{n:"alle Medikamente"}] : hits.length ? hits.map(function(o){ var dr=optDrug(o); return dr&&D[dr] ? {n:D[dr].n, id:dr} : {n:shortOpt(o.t)}; }) : [D[k] ? {n:D[k].n, id:k} : {n:k}];
      var seen = {}; items = items.filter(function(x){ if(seen[x.n]) return false; seen[x.n]=1; return true; });
      out.push({kind:K[0], sym:K[1], lab:K[2], items:items, why:map[k]}); }); });
  return out;
}
function qHasInfo(q){ return q.a.some(function(o){ var e=o.e||{}; return EFK.some(function(K){ return e[K[0]] && Object.keys(e[K[0]]).length; }) || e.w || e.n || (e.go&&e.go.length); }); }
function qInfo(a, q){
  var h = '<div class="qp-h">Hintergrund: was jede Antwort bewirkt</div>', none = [];
  q.a.forEach(function(o){ var e = o.e||{}, L = qEffects(a,e), extra = [];
    if(e.w) extra.push('<li class="k-w"><span class="qs">!</span><span>'+vt(e.w)+'</span></li>');
    if(e.n) extra.push('<li class="k-n"><span class="qs">→</span><span>'+vt(e.n)+'</span></li>');
    (e.go||[]).forEach(function(g){ extra.push('<li class="k-go"><span class="qs">↗</span><span>Verweis: <button class="lnk" data-open="'+(algById(g.to)?"alg:":"sit:")+g.to+'">'+esc(g.t)+'</button></span></li>'); });
    if(!L.length && !extra.length){ none.push(o.t); return; }
    var fav = uniq([].concat.apply([], L.filter(function(x){ return x.kind==="pp"||x.kind==="p"; }).map(function(x){ return x.items.map(function(i){ return i.id; }); }))).filter(hasP);
    h += '<div class="qp-a"><div class="qp-at">'+esc(o.t)+'</div><ul class="qp-l">'+L.map(function(x){
      return '<li class="k-'+x.kind+'"><span class="qs" title="'+esc(x.lab)+'">'+x.sym+'</span><span><b>'+x.items.map(function(i){ return i.id && !D[i.id].stub ? '<button class="lnk" data-open="drug:'+i.id+'">'+esc(i.n)+'</button>' : esc(i.n); }).join(", ")+'</b> · '+vt(x.why)+'</span></li>'; }).join("")+extra.join("")+'</ul>'+
      (fav.length>=2 ? '<details class="qp-cmp"><summary>Bevorzugte im Profil vergleichen · '+esc(fav.map(function(id){ return D[id].n; }).join(" · "))+'</summary>'+cmpTable(fav)+'</details>' : '')+'</div>';
  });
  if(none.length) h += '<p class="qp-none">'+esc(none.join(", "))+': ändert die Gewichtung nicht.</p>';
  h += '<p class="qp-k">▲▲ stark bevorzugt · ▲ bevorzugt · ▼ abgewertet · ✕ ausgeschlossen. Begründungen aus den Karten.</p>';
  return h;
}
/* Profil kompakt in der Wirkstoffkarte */
function profCard(id){
  if(!hasP(id)) return "";
  function grp(w){ var L = PC.filter(function(c){ return !!c.w===w && pv(id,c.k)>0; }).sort(function(a,b){ return pv(id,b.k)-pv(id,a.k); });
    return L.length ? '<div class="pc-g"><div class="pc-gh">'+(w?"Wirkung":"Nebenwirkungen")+' · woher</div>'+L.map(function(c){ var v=pv(id,c.k), wy=why(id,c.k); return '<div class="pc-r" data-pc="'+id+'|'+c.k+'">'+pdot(v,c)+'<span>'+esc(c.t)+'</span><span class="pl">'+PLV[v]+'</span><div class="pc-why'+(wy.s==="o"?' o':'')+'">'+esc(wy.t)+'</div></div>'; }).join("")+'</div>' : ''; }
  var rx = (window.PRXC||[]).map(function(r){ return [r[0], rxv(id,r[0]), r[1]]; }).filter(function(x){ return x[1]>0; }).sort(function(a,b){ return b[1]-a[1]; });
  var rxh = rx.length ? '<div class="pc-g rxg"><div class="pc-gh">Rezeptorprofil · daraus folgt</div>'+rx.map(function(x){ var L = rxLeads(id,x[0]); return '<div class="pc-r">'+pdot(x[1],{t:x[2],r:1})+'<span>'+esc(x[2])+'</span><span class="pl">'+PLV[x[1]]+'</span>'+(L.length?'<div class="pc-why">→ '+esc(L.join(", "))+'</div>':'')+'</div>'; }).join("")+'</div>' : '';
  var zero = PC.filter(function(c){ return !c.w && pv(id,c.k)===0; }).map(function(c){ return PPH[c.k]||c.s; });
  return estNote()+'<div class="pcard">'+rxh+grp(true)+grp(false)+'</div>'+(zero.length?'<p class="hint">Keine/kaum: '+esc(zero.join(", "))+'</p>':'')+
    '<p class="hint">'+PNOTE+' Rezeptorstufen: klinisch relevante Wirkung bei üblicher Dosis. Kursiv: substanzspezifische Herkunft.</p><button class="btn ghost" data-pcmp="'+id+'">In der Profiltabelle vergleichen</button>';
}
/* Profiltabelle */
var PST = LS.get("prof", null); if(!PST || typeof PST!=="object") PST = {};
PST = {q:"", set:PST.set||"a", sk:PST.sk||"", sd:PST.sd||-1, f:Array.isArray(PST.f)?PST.f.filter(function(x){ return x && (PCI[x[0]]!=null || /^r:/.test(x[0])) && PFOP[x[1]]; }):[], grp:PST.grp||"Alle"};
function savePST(){ LS.set("prof", {set:PST.set, sk:PST.sk, sd:PST.sd, f:PST.f, grp:PST.grp}); }
var NEGW = /^(kein\w*|nicht|ohne|wenig\w*|kaum|niedrig\w*)\s+/, STRW = /^(stark\w*|hoch|hohe\w*|viel\w*|sehr)\s+/;
function pColMatch(t){
  if(!t) return null; var t5 = t.slice(0,5), tn = t.replace(/[^a-z0-9]/g,"");
  var rx = RXCOLS.filter(function(c){ var sn = fold(c.s).replace(/[^a-z0-9]/g,""); return sn && (sn===tn || fold(c.k.slice(2))===t); })[0];
  if(rx) return rx;
  return PC.filter(function(c){ if(fold(c.k)===t) return true; if(t.length<4) return false;
    return fold(c.t+" "+c.s).split(/[^a-z0-9]+/).some(function(w){ return w.length>=4 && (w.indexOf(t)===0 || (t.length>=5 && w.indexOf(t5)===0)); }); })[0] || null;
}
function pDrugMatch(id,t){ var d = D[id]; return fold(d.n).indexOf(t)>=0 || (d.b||[]).some(function(b){ return fold(b).indexOf(t)===0; }) || fold(d.k||"").indexOf(t)>=0 || fold(d.g||"").indexOf(t)>=0; }
function pParse(q){
  var ids = Object.keys(PM).filter(hasP), names = [], conds = [], hl = [], sortK = null;
  fold(q).split(/\s*(?:,|;|\+|\/|\bvs\.?\b|\bund\b|\boder\b)\s*/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(p){
    var neg = NEGW.exec(p), str = STRW.exec(p), rest = p.replace(NEGW,"").replace(STRW,"").trim();
    var isDrug = !neg && !str && ids.some(function(id){ var d=D[id]; return fold(d.n).indexOf(rest)>=0 || (d.b||[]).some(function(b){ return fold(b).indexOf(rest)===0; }); });
    var col = !isDrug ? pColMatch(rest) : null;
    if(col){ hl.push(col.k); if(neg) conds.push([col.k, /^(wenig|kaum|niedrig)/.test(neg[1]) ? "le1" : "0"]); else { if(str) conds.push([col.k,"ge2"]); sortK = sortK || col.k; } }
    else names.push(rest);
  });
  return {names:names, conds:conds, hl:hl, sortK:sortK};
}
function pGroups(){ var g = ["Alle"]; Object.keys(PM).filter(hasP).forEach(function(id){ var x = D[id].g||"Andere"; if(g.indexOf(x)<0) g.push(x); }); return g; }
function pRows(){
  var P = pParse(PST.q), conds = PST.f.concat(P.conds);
  var ids = Object.keys(PM).filter(hasP).filter(function(id){
    if(PST.grp!=="Alle" && (D[id].g||"Andere")!==PST.grp) return false;
    if(P.names.length && !P.names.some(function(t){ return pDrugMatch(id,t); })) return false;
    return conds.every(function(c){ return PFOP[c[1]][1](pv(id,c[0])); }); });
  var sk = PST.sk || P.sortK, sd = PST.sk ? PST.sd : -1;
  ids.sort(function(a,b){ if(sk){ var x = pv(a,sk), y = pv(b,sk); if(x!==y) return sd*(x-y); } return D[a].n.localeCompare(D[b].n,"de"); });
  return {ids:ids, P:P, sk:sk, sd:sd, conds:conds};
}
function colOpts(sel){ return '<optgroup label="Eigenschaften">'+PC.map(function(c){ return '<option value="'+c.k+'"'+(sel===c.k?' selected':'')+'>'+esc(c.t)+'</option>'; }).join("")+'</optgroup><optgroup label="Rezeptoren / Mechanismen">'+RXCOLS.map(function(c){ return '<option value="'+c.k+'"'+(sel===c.k?' selected':'')+'>'+esc(c.t)+'</option>'; }).join("")+'</optgroup>'; }
function colGroup(c){ return c.r ? "r" : c.w ? "w" : "n"; }
var CGN = {w:"Wirkung", n:"Nebenwirkungen", r:"Rezeptoren / Mechanismen"};
function viewProfile(){
  return viewProfile0().replace('<div class="pv-intro">', estNote()+'<div class="pv-intro">');
}
function viewProfile0(){
  var R = pRows(), cols = PST.set==="r" ? RXCOLS.slice() : PC.filter(function(c){ return PST.set==="a" || (PST.set==="w" ? c.w : !c.w); });
  if(R.sk && !cols.some(function(c){ return c.k===R.sk; })){ var sc = colByKey(R.sk); if(sc) cols.push(sc); }
  var hl = R.P.hl, skc = colByKey(R.sk);
  var h = '<div class="pv"><div class="pv-intro"><p class="note-soft">Größere Punkte = stärker. Spaltenkopf sortiert, Punkt antippen erklärt die Herkunft. Suche: „ohne Gewicht“, „H1“, „Sertralin, Mirtazapin“.</p></div>';
  h += '<div class="pv-s search"><svg class="s-ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg><input id="pq" type="search" autocomplete="off" spellcheck="false" placeholder="z. B. Sertralin, Mirtazapin · ohne Gewicht · H1" aria-label="Profile durchsuchen" value="'+esc(PST.q)+'"></div>';
  h += '<div class="ctxbar grpbar">'+pGroups().map(function(g){ return '<button class="chip" data-pgrp="'+esc(g)+'" aria-pressed="'+(PST.grp===g)+'">'+esc(g)+'</button>'; }).join("")+'</div>';
  h += '<div class="ctxbar pv-f" role="group" aria-label="Schnellfilter">'+PPRE.map(function(p){ var on = PST.f.some(function(f){ return f[0]===p[0] && f[1]===p[1]; }); return '<button class="chip" data-pfp="'+p[0]+':'+p[1]+'" aria-pressed="'+on+'">'+esc(p[2])+'</button>'; }).join("")+'</div>';
  h += '<div class="pv-row"><div class="seg" role="group" aria-label="Spalten">'+[["w","Wirkung"],["n","Nebenw."],["a","Alle"],["r","Rezeptoren"]].map(function(s){ return '<button data-pset="'+s[0]+'" aria-pressed="'+(PST.set===s[0])+'">'+s[1]+'</button>'; }).join("")+'</div>'+
    '<label class="pv-sel"><span>Sortieren</span><select id="psort"><option value="">Name A–Z</option>'+colOpts(PST.sk)+'</select></label></div>'+
    '<details class="pv-more"'+(PST.more?' open':'')+'><summary>Eigener Filter</summary><div class="pv-sel"><select id="pfk" aria-label="Eigenschaft"><option value="">Eigenschaft …</option>'+colOpts("")+'</select><select id="pfo" aria-label="Stufe">'+Object.keys(PFOP).map(function(k){ return '<option value="'+k+'"'+(k==="0"?' selected':'')+'>'+esc(PFOP[k][0])+'</option>'; }).join("")+'</select><button class="btn ghost sm" id="pfadd" aria-label="Filter hinzufügen">+</button></div></details>';
  var custom = PST.f.filter(function(f){ return !PPRE.some(function(p){ return p[0]===f[0] && p[1]===f[1]; }); });
  function fl(k){ var c = colByKey(k); return c ? c.s.replace(/\.$/,"") : k; }
  if(custom.length || R.P.conds.length) h += '<div class="pv-act">'+custom.map(function(f){ return '<button class="chip on" data-pfdel="'+f[0]+':'+f[1]+'">'+esc(fl(f[0])+": "+PFOP[f[1]][0])+' ×</button>'; }).join("")+R.P.conds.map(function(f){ return '<span class="chip ghost">aus Suche: '+esc(fl(f[0])+" "+PFOP[f[1]][0])+'</span>'; }).join("")+'</div>';
  h += '<div class="pv-meta"><span><b>'+R.ids.length+'</b> Wirkstoffe'+(skc?' · sortiert nach '+esc(skc.t)+' ('+(R.sd<0?"stark zuerst":"schwach zuerst")+')':' · A–Z')+'</span></div>';
  h += pLegend(PST.set==="r" || cols.some(function(c){ return c.r; }));
  if(R.ids.length>=2 && R.ids.length<=5) h += '<div class="cmp-box"><div class="cmp-h">Direktvergleich: worin sie sich unterscheiden</div>'+cmpTable(R.ids)+'</div>';
  if(!R.ids.length) return h + '<p class="empty">Kein Wirkstoff erfüllt alle Bedingungen. Filter lockern.</p></div>';
  var groups = []; cols.forEach(function(c){ var g = colGroup(c); if(!groups.length || groups[groups.length-1][0]!==g) groups.push([g,0]); groups[groups.length-1][1]++; });
  function sep(i){ return i>0 && colGroup(cols[i])!==colGroup(cols[i-1]); }
  h += '<div class="ptw" tabindex="0" aria-label="Profiltabelle, seitlich scrollbar"><table class="pt"><thead><tr class="pt-g"><th class="pn"></th>'+groups.map(function(g,i){ return '<th colspan="'+g[1]+'" class="g-'+g[0]+(i?' gsep':'')+'">'+CGN[g[0]]+'</th>'; }).join("")+'</tr><tr><th class="pn"><button data-psort="">Wirkstoff'+(!R.sk?' ↑':'')+'</button></th>'+
    cols.map(function(c,i){ var on = R.sk===c.k, cls = colGroup(c)+(on?' srt':'')+(hl.indexOf(c.k)>=0?' hl':'')+(sep(i)?' gsep':''); return '<th class="'+cls+'" aria-sort="'+(on?(R.sd<0?"descending":"ascending"):"none")+'"><button data-psort="'+c.k+'" title="'+esc(c.t)+' – nach Stärke sortieren"><span>'+esc(c.s)+(on?(R.sd<0?" ↓":" ↑"):"")+'</span></button></th>'; }).join("")+'</tr></thead><tbody>';
  h += R.ids.map(function(id){ var d = D[id];
    return '<tr data-open="drug:'+id+'"><th class="pn" scope="row"><button data-open="drug:'+id+'">'+ava(id,'sm')+'<span class="pn-tx"><span class="pn-n">'+esc(d.n)+'</span><span class="pn-k">'+esc((clsOf(id)||{}).n||d.g||"")+'</span></span></button></th>'+
      cols.map(function(c,i){ var cls = (R.sk===c.k?'srt':'')+(hl.indexOf(c.k)>=0?' hl':'')+(sep(i)?' gsep':''); return '<td data-pc="'+id+'|'+c.k+'"'+(cls.trim()?' class="'+cls.trim()+'"':'')+'>'+pdot(pv(id,c.k),c)+(pSrc(id,c.k)?'<i class="srcm" title="mit Quelle">✓</i>':'')+'</td>'; }).join("")+'</tr>'; }).join("");
  h += '</tbody></table></div><p class="foot">'+PNOTE+' Rezeptorstufen: klinisch relevante Wirkung bei üblicher Dosis, keine Ki-Werte. Nicht enthalten: Komedikation und Kurzeinträge ohne psychiatrische Indikation.</p></div>';
  return h;
}
function profRefresh(keepFocus){
  var a = document.activeElement, id = a && a.id, pos = a && a.selectionStart;
  var w = $(".ptw"), sx = w ? w.scrollLeft : 0, sy = w ? w.scrollTop : 0;
  renderMain();
  var w2 = $(".ptw"); if(w2){ w2.scrollLeft = sx; w2.scrollTop = sy; }
  if(keepFocus && id){ var n = document.getElementById(id); if(n){ n.focus(); try{ if(pos!=null) n.setSelectionRange(pos,pos); }catch(e){} } }
}
/* ---------- Identität und Herkunft (v3.2) ---------- */
var PCLS = window.PCLS||{}, PCLSOF = window.PCLSOF||{}, PSYM = window.PSYM||{}, PMERK = window.PMERK||{}, PRX = window.PRX||{}, PMECH = window.PMECH||{}, PWHY = window.PWHY||{};
var RXL = {}; (window.PRXC||[]).forEach(function(r){ RXL[r[0]] = {t:r[1], s:r[2]}; });
var RXCOLS = (window.PRXC||[]).map(function(r){ return {k:"r:"+r[0], t:r[1], s:r[2], r:1}; });
function colByKey(k){ if(!k) return null; if(k.charAt(1)===":") return RXCOLS.filter(function(c){ return c.k===k; })[0] || null; return PCI[k]!=null ? PC[PCI[k]] : null; }
var SW = 'fill="none" stroke="currentColor" stroke-width="';
var GLY = {
 lock:'<rect x="3" y="7" width="10" height="7.5" rx="1.5"/><path d="M5 7.5V5.2a3 3 0 0 1 6 0v2.3" '+SW+'2"/>',
 bars:'<rect x="2.5" y="2" width="4.2" height="12" rx="1"/><rect x="9.3" y="2" width="4.2" height="12" rx="1"/>',
 star:'<path d="M8 1l2.1 4.3 4.7.7-3.4 3.3.8 4.7L8 11.8 3.8 14l.8-4.7L1.2 6l4.7-.7z"/>',
 moon:'<path d="M10.5 1.5A6.5 6.5 0 1 0 14.5 11 5.5 5.5 0 0 1 10.5 1.5z"/>',
 bar:'<rect x="1.5" y="5.5" width="13" height="5" rx="2.5"/>',
 clock:'<circle cx="8" cy="8" r="6" '+SW+'2"/><path d="M8 4.5V8l2.5 2" '+SW+'1.8" stroke-linecap="round"/>',
 spark:'<path d="M8 0l1.8 6.2L16 8l-6.2 1.8L8 16l-1.8-6.2L0 8l6.2-1.8z"/>',
 rings:'<circle cx="4.2" cy="9.5" r="2.8" '+SW+'1.6"/><circle cx="8" cy="5" r="2.8" '+SW+'1.6"/><circle cx="11.8" cy="9.5" r="2.8" '+SW+'1.6"/>',
 warn:'<path d="M8 2l6.5 11.5h-13z" '+SW+'1.8" stroke-linejoin="round"/><rect x="7.2" y="6" width="1.6" height="4"/><rect x="7.2" y="11" width="1.6" height="1.6"/>',
 wave:'<path d="M1.5 8c1.6-4 3.4-4 5 0s3.4 4 5 0 2-2.5 3-2" '+SW+'2.2" stroke-linecap="round"/>',
 dot:'<circle cx="8" cy="8" r="6"/>',
 diamond:'<path d="M8 1l7 7-7 7-7-7z"/>',
 half:'<path d="M8 2.2a5.8 5.8 0 0 0 0 11.6z"/><circle cx="8" cy="8" r="5.6" '+SW+'1.6"/>',
 square:'<rect x="2.5" y="2.5" width="11" height="11" rx="1.5"/>',
 tri:'<path d="M8 1.5l7 12.5H1z"/>',
 ring:'<circle cx="8" cy="8" r="5.2" '+SW+'2.6"/>',
 cloud:'<path d="M4.5 13a3.5 3.5 0 0 1-.4-7A4.5 4.5 0 0 1 12.6 6 3.5 3.5 0 0 1 12 13z"/>',
 zz:'<path d="M2 3h6L2 10h6M9 7h5l-5 6h5" '+SW+'1.8" stroke-linejoin="round"/>',
 power:'<path d="M8 1.5v6" '+SW+'2" stroke-linecap="round"/><path d="M4.5 4a5.5 5.5 0 1 0 7 0" '+SW+'2" stroke-linecap="round"/>',
 shield:'<path d="M8 1l6 2.2V8c0 3.5-2.7 6-6 7-3.3-1-6-3.5-6-7V3.2z"/>',
 drop:'<path d="M8 1.5S3 7.2 3 10.2a5 5 0 0 0 10 0C13 7.2 8 1.5 8 1.5z"/>',
 atom:'<circle cx="8" cy="8" r="1.8"/><ellipse cx="8" cy="8" rx="6.5" ry="2.5" '+SW+'1.3"/><ellipse cx="8" cy="8" rx="6.5" ry="2.5" '+SW+'1.3" transform="rotate(60 8 8)"/><ellipse cx="8" cy="8" rx="6.5" ry="2.5" '+SW+'1.3" transform="rotate(-60 8 8)"/>',
 hex:'<path d="M8 1l6 3.5v7L8 15l-6-3.5v-7z"/>',
 target:'<circle cx="8" cy="8" r="6" '+SW+'1.8"/><circle cx="8" cy="8" r="2.4"/>',
 bolt:'<path d="M9.5 1L3 9h4.5L6.5 15 13 7H8.5z"/>',
 arrow:'<path d="M8 1.5l6 6.5h-3.8v6.5H5.8V8H2z"/>',
 chev:'<path d="M2 4l6 5 6-5v3.5l-6 5-6-5z"/>',
 plus:'<path d="M6 1.5h4v4.5h4.5v4H10v4.5H6V10H1.5V6H6z"/>',
 key:'<circle cx="5" cy="8" r="3.3" '+SW+'2"/><path d="M8.3 8H15M12.5 8v3M15 8v2.5" '+SW+'2"/>',
 swap:'<path d="M2 5.5h10M9 2.5l3 3-3 3M14 10.5H4M7 7.5l-3 3 3 3" '+SW+'1.8" stroke-linecap="round" stroke-linejoin="round"/>',
 gear:'<circle cx="8" cy="8" r="3.2" '+SW+'2.4"/><path d="M7 0h2v3H7zM7 13h2v3H7zM0 7h3v2H0zM13 7h3v2h-3z"/>'
};
function glyph(g){ return '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">'+(GLY[g]||GLY.dot)+'</svg>'; }
function clsOf(id){ var k = PCLSOF[id]; return k ? PCLS[k] : null; }
function hueStyle(c){ return '--h:'+c.h+';--s:'+(c.s!=null?c.s:58)+'%'; }
function ava(id, sz){
  var c = clsOf(id), d = D[id]||{n:id}, sym = PSYM[id] || (d.n.charAt(0).toUpperCase()+d.n.charAt(1));
  return '<span class="ava'+(sz?' '+sz:'')+(c?'':' nc')+'"'+(c?' style="'+hueStyle(c)+'"':'')+' aria-hidden="true"><b>'+esc(sym)+'</b>'+(c?glyph(c.g):'')+'</span>';
}
function clsChip(id){ var k = PCLSOF[id], c = PCLS[k]; return c ? '<button class="cls-chip" data-cls="'+k+'" style="'+hueStyle(c)+'">'+glyph(c.g)+'<span>'+esc(c.n)+'</span></button>' : ''; }
function rxv(id, r){ var x = PRX[id]||{}, v = x[r]||0; if(!v && r==="hE" && !(PWHY[id]&&PWHY[id].QT)) v = pv(id,"QT")||0; if(!v && r==="M1") v = pv(id,"AC")||0; return v; }
function iaWhy(id){
  var t = D[id]&&D[id].tg||{}, p = []; function e(x){ return x==="UGT" ? "UGT" : "CYP"+x; }
  if(t.i) p.push("hemmt "+Object.keys(t.i).map(function(k){ return e(k)+" ("+t.i[k]+")"; }).join(", "));
  if(t.n && t.n.length) p.push("induziert "+t.n.map(e).join(", "));
  if(t.sens && t.sens.length) p.push("empfindliches Substrat von "+t.sens.map(e).join(", "));
  else if(t.s && t.s.length) p.push("Substrat von "+t.s.map(e).join(", "));
  return p.join(" · ");
}
/* Herkunft einer Eigenschaft: substanzspezifisch (o), aus dem Rezeptorprofil (r), allgemein (f) oder warum kaum (z) */
function why(id, k){ var w = why0(id,k), sq = pSrc(id,k); return sq ? {t:sq.q+(w.t?" · Mechanismus: "+w.t:""), s:"q"} : w; }
function why0(id, k){
  var v = pv(id,k), m = PMECH[k]||{r:[]}, o = PWHY[id] && PWHY[id][k];
  var hits = m.r.map(function(x){ return [x[0], rxv(id,x[0]), x[1]]; }).filter(function(x){ return x[1]>0; }).sort(function(a,b){ return b[1]-a[1]; });
  if(k==="IA" && !o){ var ia = iaWhy(id); if(ia) return {t:ia, s:"r"}; }
  if(o) return {t:o, s:"o"};
  if(v>0) return hits.length ? {t:hits.map(function(x){ return x[2]+(/\)$/.test(x[2])?" – ":" (")+PLV[x[1]]+(/\)$/.test(x[2])?"":")"); }).join(" · "), s:"r"} : {t:m.f||"Mechanismus nicht rezeptorspezifisch", s:"f"};
  if(hits.length) return {t:"klinisch kaum relevant, obwohl "+hits.map(function(x){ return RXL[x[0]].t+" ("+PLV[x[1]]+")"; }).join(", "), s:"z"};
  return {t:m.z||"", s:"z"};
}
function rxLeads(id, r){ return PC.filter(function(p){ return pv(id,p.k)>0 && (PMECH[p.k]||{r:[]}).r.some(function(y){ return y[0]===r; }) && !(PWHY[id]&&PWHY[id][p.k]); }).map(function(p){ return PPH[p.k]||p.s; }); }
function rxTypical(r){ return PC.filter(function(p){ return (PMECH[p.k]||{r:[]}).r.some(function(y){ return y[0]===r; }); }).map(function(p){ return PPH[p.k]||p.s; }); }
function merkBox(id){
  var c = clsOf(id), m = PMERK[id]; if(!c && !m) return "";
  var mm = m ? /^([^:]+):\s*(.*)$/.exec(m) : null;
  return '<div class="merk"'+(c?' style="'+hueStyle(c)+'"':'')+'>'+(m?'<p class="merk-m">'+(mm?'<b>'+esc(mm[1])+'</b> – '+esc(mm[2]):esc(m))+'</p>':'')+
    (c?'<div class="merk-c">'+clsChip(id)+'<span>'+esc(c.p.split(":")[0])+'</span></div>':'')+'</div>';
}
function pExplain(id, k){
  var c = colByKey(k), v = pv(id,k), h;
  if(c.r){ var r = k.slice(2), mine = rxLeads(id,r);
    h = '<p class="pexp-l"><b>'+esc(c.t)+':</b> '+PLV[v]+'</p><p>'+(v ? 'Erklärt hier: '+esc(mine.length ? mine.join(", ") : "keine der eingestuften Eigenschaften allein") : 'Keine relevante Wirkung an diesem Ziel.')+'</p><p class="hint">Typische Folgen dieses Mechanismus: '+esc(rxTypical(r).join(", ")||"–")+'</p>';
  } else { var w = why(id,k);
    var sq = pSrc(id,k);
    h = '<p class="pexp-l"><b>'+esc(c.t)+':</b> '+PLV[v]+' <span class="'+(sq?'src-b':'est-b')+'">'+(sq?'✓ '+esc(sq.q):'≈ eigene Schätzung')+'</span></p><p><span class="why-k">'+(w.s==="q"?"Quelle":w.s==="o"?"Substanzspezifisch":w.s==="r"?"Mechanismus":w.s==="z"?"Warum kaum":"Herkunft")+':</span> '+esc(w.t)+'</p>'+voteBlock(id,k); }
  return '<div class="pexp-h">'+ava(id,'sm')+'<b>'+esc(D[id].n)+'</b><button class="pexp-x" data-pexp-x aria-label="Schließen">×</button></div>'+h+'<button class="lnk" data-open="drug:'+id+'">Karte öffnen</button>';
}
function showExplain(id, k){
  var box = $("#pexp"); if(!box){ box = document.createElement("div"); box.id = "pexp"; box.setAttribute("role","status"); document.body.appendChild(box); }
  box.innerHTML = pExplain(id,k); box.hidden = false;
}
function hideExplain(){ var b = $("#pexp"); if(b) b.hidden = true; }
function viewAtlas(){
  var h = '<p class="note-soft" style="margin:4px 0 10px">Jede Klasse hat eine eigene Farbe und ein Symbol, jeder Wirkstoff ein Kürzel wie im Periodensystem. Persona und Merkbild verbinden Mechanismus und Klinik zu einer Geschichte.</p>';
  (window.PCLSA||[]).forEach(function(a){
    h += '<h3 class="grp-h">'+esc(a[0])+'</h3>';
    a[1].forEach(function(k){ var c = PCLS[k]; if(!c) return;
      var ids = Object.keys(PCLSOF).filter(function(id){ return PCLSOF[id]===k && D[id]; }).sort(function(x,y){ return D[x].n.localeCompare(D[y].n,"de"); });
      var pp = /^([^:]+):\s*(.*)$/.exec(c.p);
      h += '<section class="cls-card" id="cls-'+k+'" style="'+hueStyle(c)+'"><div class="cls-h"><span class="cls-g">'+glyph(c.g)+'</span><span><b>'+esc(c.n)+'</b><span class="cls-p1">'+esc(pp?pp[1]:"")+'</span></span><span class="cls-n">'+ids.length+'</span></div><p class="cls-p">'+esc(pp?pp[2]:c.p)+'</p>'+
        '<div class="list">'+ids.map(function(id){ var m = PMERK[id]||"", mm = /^([^:]+):\s*(.*)$/.exec(m); return rowHTML("drug", id, D[id].n, mm ? mm[1]+" – "+mm[2] : m); }).join("")+'</div></section>';
    });
  });
  return h;
}
/* ---------- Übersicht (v3.3): Bereichssymbole, kompakte Listen ---------- */
var AREA_ID = {schlaf:[250,"moon"], spann:[38,"wave"], epms:[4,"warn"], entzug:[170,"drop"], dep:[215,"cloud"], angst:[280,"ring"], bip:[330,"half"], schiz:[130,"diamond"], bps:[18,"bolt"], adhs:[52,"spark"], ptbs:[300,"shield"], demenz:[190,"plus"], umst:[200,"swap"], calc:[160,"square"], info:[200,"dot"]};
function aico(area, sz){ var a = AREA_ID[area] || AREA_ID.info; return '<span class="aico'+(sz?' '+sz:'')+'" style="--h:'+a[0]+'" aria-hidden="true">'+glyph(a[1])+'</span>'; }
function algFor(sid){ return ALGS.filter(function(a){ return a.sit===sid; })[0]; }
function areaOf(type, id){
  if(type==="sit"){ var s = sitById(id); return s ? s.a : null; }
  if(type==="alg"){ var a = algById(id); if(!a) return null; if(a.area==="Umstellung") return "umst"; var s2 = a.sit ? sitById(a.sit) : null; return s2 ? s2.a : null; }
  if(type==="calc") return "calc";
  return null;
}
function sitRow(id, title, sub, extra){
  var a = algFor(id), r = rowHTML("sit", id, title, sub, extra);
  return a ? '<div class="row-w">'+r+'<button class="row-act" data-open="alg:'+a.id+'" aria-label="Entscheidungshilfe: '+esc(title)+'">'+glyph("chev")+'<span>Entscheiden</span></button></div>' : r;
}
function recentKeys(n){ return st.fav.concat(st.hist.filter(function(k){ return st.fav.indexOf(k)<0; })).filter(function(k){ var p = k.split(":"); return p[0]!=="drug" || D[p[1]]; }).slice(0, n||8); }
function shortTitle(type, id){ var t = titleOf(type, id); return t.replace(/^Entscheidung: /, ""); }
function recentChips(){
  var rec = recentKeys(10); if(!rec.length) return "";
  return '<div class="sec-h">Weiter mit</div><div class="recent">'+rec.map(function(k){ var p = k.split(":"), fav = st.fav.indexOf(k)>=0;
    return '<button class="rc-chip" data-open="'+k+'">'+(p[0]==="drug" ? ava(p[1],'xs') : aico(areaOf(p[0],p[1])||"info",'xs'))+'<span>'+esc(shortTitle(p[0],p[1]))+'</span>'+(p[0]==="alg"?'<i class="rc-k">Entscheiden</i>':'')+(fav?'<i class="star" aria-label="angeheftet">★</i>':'')+'</button>'; }).join("")+'</div>';
}
function paneHTML(){
  var rec = recentKeys(8);
  return '<div><span class="rx big">Rx</span><b>Karte auswählen</b><span>Situation, Wirkstoff, Entscheidungshilfe oder Rechner links antippen. Die Liste bleibt sichtbar.</span>'+
    (rec.length ? '<div class="pe-rec"><div class="sec-h">Zuletzt und angeheftet</div><div class="list">'+rec.map(function(k){ var p = k.split(":"); return rowHTML(p[0], p[1], (st.fav.indexOf(k)>=0?"★ ":"")+shortTitle(p[0],p[1]), p[0]==="alg"?"Entscheidungshilfe":subOf(p[0],p[1])); }).join("")+'</div></div>' : '')+
    '<span class="kbd-h"><kbd>/</kbd> Suche · <kbd>↓</kbd> Treffer · <kbd>Esc</kbd> schließen</span></div>';
}
function renderPane(){ var pe = $(".pane-empty"); if(pe){ pe.innerHTML = paneHTML(); pe.removeAttribute("aria-hidden"); } }
var QEDIT = {};
function accPv(inner){
  return String(inner||"").replace(/<(button|svg|span class="pill[^"]*")[\s\S]*?<\/(button|svg|span)>/g," ").replace(/<[^>]+>/g," ")
    .replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&amp;/g,"&").replace(/\s+/g," ").trim().slice(0,180);
}
function profPv(id){ return PC.filter(function(c){ return !c.w && pv(id,c.k)>=2; }).sort(function(a,b){ return pv(id,b.k)-pv(id,a.k); }).slice(0,4).map(function(c){ return (PPH[c.k]||c.s)+" "+PLV[pv(id,c.k)]; }).join(" · ") || "kaum ausgeprägte Nebenwirkungen"; }
function rerenderSheetKeep(){ var sh=$(".sheet"), y = sh ? sh.scrollTop : 0; renderSheet(); var n=$(".sheet"); if(n) n.scrollTop = y; }
/* ---------- Tabs ---------- */
function renderMain(){
  var m = $("#main"), h="";
  if(st.tab==="suche") h = viewSearch();
  else if(st.tab==="sit") h = viewSits();
  else if(st.tab==="drug") h = viewDrugs();
  else if(st.tab==="prof") h = viewProfile();
  else if(st.tab==="ia") h = viewIA();
  else if(st.tab==="calc") h = viewCalcs();
  m.innerHTML = h;
  document.body.classList.toggle("pwide", st.tab==="drug" && st.drugView==="prof");
  if(st.tab==="calc") mountCalcs(m);
}
function viewSearch(){
  if(!st.q.trim()){
    var quick = [["ins-primaer","Insomnie"],["sp-bps","Anspannung BPS"],["sp-psychose","Agitation Psychose"],["sp-delir","Delir"],["ep-akathisie","Akathisie"],["ep-dystonie","Frühdyskinesie"],["ez-alk","Alkoholentzug"],["ez-bzd","BZD-Entzug"],["ez-opioid","Opioidentzug"],["ins-sucht","Schlaf bei Sucht"],["sp-demenz","Unruhe Demenz"],["ep-mns","MNS"]];
    var quick2 = [["dep-unipolar","Depression"],["dep-tr","Therapieresistenz"],["angst-gas","GAS"],["angst-panik","Panik"],["zwang","Zwang"],["bip-manie","Manie"],["bip-proph","Phasenprophylaxe"],["schiz-akut","Schizophrenie"],["schiz-tr","Clozapin"],["bps","BPS"],["adhs-erw","ADHS"],["adhs-komorb","ADHS + Komorbidität"],["ptbs","PTBS"],["dem-alz","Demenz"]];
    function tiles(list){ return '<div class="tiles">'+list.filter(function(q){ return SIT.some(function(x){ return x.id===q[0]; }); }).map(function(q){ var x=SIT.filter(function(y){ return y.id===q[0]; })[0]; return '<button class="tile" data-open="sit:'+q[0]+'">'+aico(x.a)+'<span class="tile-tx">'+(fold(AREAS[x.a])===fold(q[1])?'':'<span class="tile-a">'+esc(AREA_SHORT[x.a]||AREAS[x.a])+'</span>')+'<span class="tile-t">'+esc(q[1])+'</span></span></button>'; }).join("")+'</div>'; }
    var h = "";
    h += recentChips();
    h += '<div class="sec-h">Akut auf Station</div>'+tiles(quick);
    h += '<div class="sec-h">Umstellen</div><div class="tiles u2">'+ALGS.filter(function(a){ return a.area==="Umstellung"; }).map(function(a){ return '<button class="tile" data-open="alg:'+a.id+'">'+aico("umst")+'<span class="tile-tx"><span class="tile-a">Schritt für Schritt</span><span class="tile-t">'+esc(a.t)+'</span></span></button>'; }).join("")+'</div>';
    h += '<div class="sec-h">Diagnosen</div>'+tiles(quick2);
    h += '<p class="note-soft" style="margin-top:16px">Mehrere Begriffe gehen: „schlaf alkohol qtc“ findet die passenden Karten und setzt den QTc-Filter. Handelsnamen, Tippfehler und Abkürzungen werden erkannt.</p>';
    h += '<p class="foot">'+esc(VERSION)+' · Ersetzt nicht Fachinformation und ärztliche Prüfung. <button class="lnk" data-m="info">Hinweise und Quellen</button></p>';
    return h;
  }
  var r = search(st.q), res = r.res;
  var h2 = "";
  if(!res.length) h2 += '<p class="empty">Keine Karte gefunden. Probier ein Symptom („unruhe“), einen Wirkstoff oder Handelsnamen – oder frag Claude unten.</p>';
  else {
    var algs = res.filter(function(x){ return x.e.type==="alg"; });
    var sits = res.filter(function(x){ return x.e.type==="sit"; });
    algs.forEach(function(x){ var a = algById(x.e.id); if(a && a.sit && !sits.some(function(y){ return y.e.id===a.sit; })){ var s0 = sitById(a.sit); if(s0) sits.push({e:{type:"sit", id:s0.id, title:s0.t, sub:AREAS[s0.a]}}); } });
    var umst = algs.filter(function(x){ var a = algById(x.e.id); return a && !a.sit; });
    if(umst.length) h2 += '<div class="sec-h">Umstellen</div><div class="list">'+umst.map(function(x){ return rowHTML("alg",x.e.id,x.e.title,"Schritt für Schritt"); }).join("")+'</div>';
    var drugs = res.filter(function(x){ return x.e.type==="drug"; }), calcs = res.filter(function(x){ return x.e.type==="calc"; });
    var act = activeCtx();
    if(sits.length) h2 += '<div class="sec-h">Situationen</div><div class="list">'+sits.map(function(x){ return sitRow(x.e.id,x.e.title,x.e.sub); }).join("")+'</div>';
    if(drugs.length) h2 += '<div class="sec-h">Wirkstoffe</div><div class="list">'+drugs.map(function(x){
      var extra = "";
      if(act.length){ var w = worst(act.map(function(k){ var c=drugCx(D[x.e.id],k); return c?c[0]:"n"; })); extra = '<span class="s" style="display:flex;gap:6px;align-items:center"><span class="dot '+w+'"></span>'+(w==="r"?"Im Kontext ungünstig":w==="y"?"Im Kontext mit Vorsicht":w==="g"?"Im Kontext unkritisch":"Keine Kontextangabe")+'</span>'; }
      return rowHTML("drug",x.e.id,x.e.title,x.e.sub,extra); }).join("")+'</div>';
    if(calcs.length) h2 += '<div class="sec-h">Rechner</div><div class="list">'+calcs.map(function(x){ return rowHTML("calc",x.e.id,x.e.title,x.e.sub); }).join("")+'</div>';
  }
  h2 += aiBlock("s", st.q);
  return h2;
}
function viewSits(){
  var h='<h3 class="grp-h">Umstellen</h3><div class="list">'+ALGS.filter(function(a){ return a.area==="Umstellung"; }).map(function(a){ return rowHTML("alg",a.id,a.t,"Schritt für Schritt"); }).join("")+'</div><p class="note-soft" style="margin-top:8px">„Entscheiden“ rechts neben jeder Situation öffnet ihre Entscheidungshilfe.</p>';
  AREA_GROUPS.forEach(function(g){
    h += '<h3 class="grp-h">'+esc(g[0])+'</h3>';
    g[1].forEach(function(a){ var L = SIT.filter(function(s){ return s.a===a; }); if(!L.length) return;
      h += '<div class="sec-h">'+esc(AREAS[a])+'</div><div class="list">'+L.map(function(s){ var meta = [s.steps&&s.steps.length?"Stufenplan":"", s.opts.length+" Optionen", s.avoid&&s.avoid.length?s.avoid.length+" × vermeiden":""].filter(Boolean).join(" · "); return sitRow(s.id,s.t,s.kern[0],'<span class="meta">'+esc(meta)+'</span>'); }).join("")+'</div>'; });
  });
  h += '<p class="foot">Diagnose-Algorithmen: Stufenplan je Störungsbild, Leitlinienstand auf jeder Karte. Etappe 3 ergänzt Komedikation und Hausschemata.</p>';
  return h;
}
function viewDrugs(){
  var dv = '<div class="pv-row dvbar"><div class="seg" role="group" aria-label="Ansicht">'+[["az","Liste"],["cls","Klassen"],["prof","Vergleich"]].map(function(x){ return '<button data-dview="'+x[0]+'" aria-pressed="'+(st.drugView===x[0])+'">'+x[1]+'</button>'; }).join("")+'</div></div>';
  if(st.drugView==="cls") return dv + viewAtlas();
  if(st.drugView==="prof") return dv + viewProfile();
  var groups = ["Alle"]; Object.keys(D).forEach(function(id){ var g=D[id].komed?"Komedikation":(D[id].g||"Andere"); if(groups.indexOf(g)<0 && g!=="Komedikation") groups.push(g); });
  groups.push("Komedikation");
  var act = activeCtx();
  function sel(id){ var d=D[id]; return st.drugGroup==="Alle" || (st.drugGroup==="Komedikation" ? d.komed : (!d.komed && d.g===st.drugGroup)); }
  var ids = Object.keys(D).filter(sel).sort(function(a,b){ return D[a].n.localeCompare(D[b].n,"de"); });
  function row(id){
    var d=D[id], extra="";
    if(act.length){ var w = worst(act.map(function(k){ var c=drugCx(d,k); return c?c[0]:"n"; })); extra='<span class="s" style="display:flex;gap:6px;align-items:center"><span class="dot '+w+'"></span>'+esc(w==="r"?"Im Kontext ungünstig":w==="y"?"Im Kontext mit Vorsicht":w==="g"?"Im Kontext unkritisch":"Keine Kontextangabe")+'</span>'; }
    return rowHTML("drug",id,d.n,d.k+(d.b&&d.b.length?" · "+d.b[0]:""),extra);
  }
  function lettered(list){ var out="", last=""; list.forEach(function(id){ var L1=fold(D[id].n).charAt(0).toUpperCase(); if(L1!==last){ out+='<div class="lh" aria-hidden="true">'+esc(L1)+'</div>'; last=L1; } out+=row(id); }); return out; }
  var psy = ids.filter(function(id){ return !D[id].komed; }), kom = ids.filter(function(id){ return D[id].komed; });
  var h = dv+'<div class="ctxbar grpbar">'+groups.map(function(g){ return '<button class="chip" data-group="'+esc(g)+'" aria-pressed="'+(st.drugGroup===g)+'">'+esc(g)+'</button>'; }).join("")+'</div>';
  if(psy.length) h += (st.drugGroup==="Alle"?'<div class="sec-h">Psychopharmaka · '+psy.length+'</div>':'<div class="sec-h">'+esc(st.drugGroup)+' · '+psy.length+'</div>')+'<div class="list">'+lettered(psy)+'</div>';
  if(kom.length) h += '<div class="sec-h">Somatische Komedikation · '+kom.length+'</div><div class="list">'+lettered(kom)+'</div><p class="foot">Komedikation ist als Kurzeintrag für den Interaktions-Check angelegt.</p>';
  return h;
}
/* Belegte Listen im Kopf der Wirkstoffkarte: ACB, CredibleMeds, PRISCUS 2.0 */
function srcTags(id){
  var t = [], A = window.ACB, C = window.CREDMEDS, P = window.PRISCUS;
  if(A && A.score[id]!=null) t.push('<span class="stag acb" title="'+esc(A.q)+'">ACB '+A.score[id]+' · '+esc(A.crit[A.score[id]])+'</span>');
  if(C && C.cat[id]) t.push('<span class="stag qt q'+C.cat[id]+'" title="'+esc(C.q+": "+C.lab[C.cat[id]])+'">QT: '+C.cat[id]+' · '+({KR:"bekanntes Torsade-Risiko",PR:"Risiko möglich",CR:"Risiko unter Bedingungen",SR:"bei angeborenem Long-QT"}[C.cat[id]])+'</span>');
  if(P){ var e = P.pim[id];
    if(e) t.push('<span class="stag pim" title="'+esc(P.q+": "+e.g)+'">PRISCUS: PIM ≥ 65'+(e.c?' ('+esc(e.c)+')':'')+'</span>');
    else if(P.non.indexOf(id)>=0) t.push('<span class="stag ok" title="'+esc(P.q)+'">PRISCUS: kein PIM</span>');
    else if(P.amb.indexOf(id)>=0) t.push('<span class="stag amb" title="'+esc(P.q)+'">PRISCUS: uneindeutig</span>'); }
  return t.length ? '<div class="stags">'+t.join("")+'</div>' : '';
}
function priscusBox(id, act){
  var P = window.PRISCUS, e = P && P.pim[id]; if(!e || act.indexOf("alt")<0) return "";
  return '<div class="find y pbox"><div class="ft">PRISCUS 2.0: potenziell inadäquat ab 65 Jahren'+(e.c?' ('+esc(e.c)+')':'')+'</div><div class="fa">Listeneintrag: '+esc(e.g)+'.'+(e.alt?' Alternativen laut Liste (Expertenmeinung, je nach Indikation): '+esc(e.alt)+'.':'')+'</div><div class="fd">'+esc(P.q)+'</div></div>';
}
function qtBox(meds){
  var C = window.CREDMEDS; if(!C) return "";
  var ord = {KR:0,PR:1,CR:2,SR:3}, on = meds.filter(function(id){ return C.cat[id]; }).sort(function(a,b){ return ord[C.cat[a]]-ord[C.cat[b]]; }), off = meds.filter(function(id){ return !C.cat[id]; });
  var kr = on.filter(function(id){ return C.cat[id]==="KR"; }).length;
  return '<div class="card qt-box"><div class="acb-h"><span class="acb-n qtn">'+kr+'</span><span><b>QT/Torsade-Risiko (CredibleMeds)</b><span class="note-soft">'+kr+' mit bekanntem Risiko (KR) · '+on.length+' gelistet</span></span></div>'+
    (on.length?'<div class="acb-l">'+on.map(function(id){ return '<span class="acb-i q'+C.cat[id]+'" title="'+esc(C.lab[C.cat[id]])+'">'+esc(D[id].n)+' <b>'+C.cat[id]+'</b></span>'; }).join("")+'</div>':'')+
    (off.length?'<p class="hint">Nicht gelistet (laut CredibleMeds nicht gleichbedeutend mit „ohne Risiko“): '+esc(off.map(function(id){ return D[id].n; }).join(", "))+'</p>':'')+
    '<p class="hint">KR bekanntes Torsade-Risiko · PR möglich · CR unter Bedingungen (Überdosis, Hypokaliämie, Interaktion) · SR bei angeborenem Long-QT. '+esc(C.q)+'.</p></div>';
}
function priscusIA(meds, act){
  var P = window.PRISCUS; if(!P) return "";
  if(act.indexOf("alt")<0) return '<p class="hint pr-hint">PRISCUS-2.0-Prüfung: Kontext „≥ 65 J.“ aktivieren.</p>';
  var on = meds.filter(function(id){ return P.pim[id]; });
  return '<div class="card pr-box"><div class="acb-h"><span class="acb-n prn">'+on.length+'</span><span><b>PRISCUS 2.0 · potenziell inadäquat ab 65</b><span class="note-soft">'+(on.length?'Alternativen je Wirkstoff unten':'keine der eingegebenen Substanzen gelistet')+'</span></span></div>'+
    (on.length?'<ul class="fl">'+on.map(function(id){ var e = P.pim[id]; return '<li><b>'+esc(D[id].n)+'</b>'+(e.c?' ('+esc(e.c)+')':'')+(e.alt?': '+esc(e.alt):'')+'</li>'; }).join("")+'</ul>':'')+
    '<p class="hint">'+esc(P.q)+'. Nicht gelistete Substanzen sind nicht bewertet; „kein PIM“ laut Liste: '+esc(P.non.filter(function(id){ return meds.indexOf(id)>=0; }).map(function(id){ return D[id].n; }).join(", ")||"–")+'.</p></div>';
}
function acbBox(meds){
  var A = window.ACB; if(!A) return "";
  var on = meds.filter(function(id){ return A.score[id]!=null; }), off = meds.filter(function(id){ return A.score[id]==null && A.notAdded.indexOf(id)<0; });
  var sum = on.reduce(function(t,id){ return t + A.score[id]; }, 0), def = on.filter(function(id){ return A.score[id]>=2; }).length, pos = on.filter(function(id){ return A.score[id]===1; }).length;
  return '<div class="card acb-box"><div class="acb-h"><span class="acb-n">'+sum+'</span><span><b>Anticholinerge Last (ACB-Summe)</b><span class="note-soft">'+def+' definitiv · '+pos+' möglich anticholinerg</span></span></div>'+
    (on.length?'<div class="acb-l">'+on.sort(function(a,b){ return A.score[b]-A.score[a]; }).map(function(id){ return '<span class="acb-i s'+A.score[id]+'">'+esc(D[id].n)+' <b>'+A.score[id]+'</b></span>'; }).join("")+'</div>':'')+
    (off.length?'<p class="hint">Nicht in der ACB-Liste (keine Aussage, nicht automatisch 0): '+esc(off.map(function(id){ return D[id].n; }).join(", "))+'</p>':'')+
    '<details class="acc acb-more"><summary><span class="acc-st"><span class="acc-t">Was die Summe bedeutet</span></span></summary><div class="acc-b"><ul class="fl">'+A.notes.map(function(n){ return '<li>'+esc(n)+'</li>'; }).join("")+'<li>Score 1: '+esc(A.crit[1])+' · 2: '+esc(A.crit[2])+' · 3: '+esc(A.crit[3])+'.</li></ul><p class="hint">Quelle: '+esc(A.q)+'. Die Liste ist US-amerikanisch; in Deutschland übliche Mittel wie Biperiden fehlen.</p></div></details></div>';
}
function viewIA(){
  var act = activeCtx();
  var F = st.meds.length>=1 ? interactions(st.meds, act) : [];
  var cnt = {r:0,y:0,i:0}; F.forEach(function(f){ cnt[f.sev]++; });
  var h = '<div class="card"><div class="field"><label for="medq">Medikament hinzufügen</label><input id="medq" type="text" autocomplete="off" placeholder="Wirkstoff oder Handelsname" value="'+esc(st.medQ)+'"></div><div id="medsugg"></div>'+
    '<div class="medchips">'+st.meds.map(function(id){ return '<button class="medchip" data-med-open="'+id+'">'+esc(D[id].n)+'<span data-med-del="'+id+'" aria-label="Entfernen">×</span></button>'; }).join("")+'</div>'+
    (st.medsExample?'<p class="hint">Beispiel-Liste. Tippe „Leeren“, um mit deinem Fall zu beginnen.</p>':'')+
    '<div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn ghost" id="medclear">Leeren</button></div></div>';
  if(st.meds.length<2) h += '<p class="empty">Mindestens zwei Medikamente eingeben.</p>';
  else {
    h += '<div class="summary">'+(cnt.r?'<span class="pill r"><span class="dot r"></span>'+cnt.r+' kritisch</span>':'')+(cnt.y?'<span class="pill y"><span class="dot y"></span>'+cnt.y+' Vorsicht</span>':'')+(cnt.i?'<span class="pill i">'+cnt.i+' Hinweis</span>':'')+(!F.length?'<span class="pill g"><span class="dot g"></span>Keine Mechanismus-Warnung</span>':'')+'</div>';
    h += F.map(function(f){ return '<div class="find '+f.sev+'"><div class="ft">'+esc(f.title)+' <span class="pill n">'+esc(f.cat)+'</span></div><div class="fd">'+esc(f.drugs.join(" + "))+'</div><div class="fa">'+vt(f.text)+'</div>'+(f.act?'<div class="fa"><b>Tun:</b> '+vt(f.act)+'</div>':'')+'</div>'; }).join("");
  }
  if(st.meds.length>=1) h += '<div class="sec-h">Geprüft gegen veröffentlichte Listen</div>'+acbBox(st.meds)+qtBox(st.meds)+priscusIA(st.meds, act);
  h += '<p class="note-soft" style="margin-top:12px">Geprüft werden Mechanismen (CYP-Hemmung und -Induktion, QT, serotonerg, anticholinerg, Atemdepression, Sedierung, Krampfschwelle, Natrium, Blutung, Lithium, Blutbild, Kreislauf, D2, Opioide) plus bekannte Einzelregeln. Seltene Einzelinteraktionen fehlen: im Zweifel Klinik-Interaktionsprogramm.</p>';
  if(st.meds.length>=2) h += aiBlock("i","Wie gefährlich ist diese Kombination und was ist die beste Alternative?");
  return h;
}
function viewCalcs(){
  return CALCS.map(function(c){ return '<details class="acc" data-calc="'+c.id+'"'+(st.openCalc===c.id?' open':'')+'><summary><span class="acc-st"><span class="acc-t">'+esc(c.t)+'</span><span class="acc-pv">'+esc(c.s||"")+'</span></span></summary><div class="acc-b" id="calc-'+c.id+'"></div></details>'; }).join("") +
    '<p class="foot">Rechner liefern Startwerte, keine Verordnung. Äquivalenzen schwanken je Quelle erheblich.</p>';
}

/* ---------- Blätter ---------- */
var WIDE = window.matchMedia ? window.matchMedia("(min-width:1100px)") : {matches:false};
var NAV = {pushed:0, ignore:0};
function navPush(){ try{ history.pushState({pk:st.stack.length}, ""); NAV.pushed++; }catch(e){} }
function navBack(){ if(NAV.pushed>0){ try{ history.back(); return; }catch(e){} } closeCard(); }
function navReset(){ if(NAV.pushed>0){ var n=NAV.pushed; NAV.pushed=0; NAV.ignore++; try{ history.go(-n); }catch(e){ NAV.ignore--; } } }
window.addEventListener("popstate", function(){
  if(NAV.ignore){ NAV.ignore--; return; }
  if(NAV.pushed>0){ NAV.pushed--; if(st.stack.length) closeCard(); }
});
function openCard(type,id){
  st.stack.push({type:type,id:id}); navPush();
  var k = type+":"+id;
  if(type!=="info"){ st.hist = [k].concat(st.hist.filter(function(x){ return x!==k; })).slice(0,12); LS.set("hist",st.hist); }
  renderSheet();
}
function closeCard(){ st.stack.pop(); renderSheet(); if(!st.stack.length) renderMain(); }
function renderSheet(){
  var host = $("#sheet");
  if(!st.stack.length){ $$("#main .sel").forEach(function(el){ el.classList.remove("sel"); }); host.innerHTML=""; document.body.style.overflow=""; renderPane(); return; }
  var top = st.stack[st.stack.length-1], k = top.type+":"+top.id, fav = st.fav.indexOf(k)>=0;
  var body = top.type==="alg" ? sheetAlg(top.id) : top.type==="sit" ? sheetSit(top.id) : top.type==="drug" ? sheetDrug(top.id) : top.type==="calc" ? '<div id="calc-'+top.id+'"></div>' : sheetInfo();
  host.innerHTML = '<div class="sheet" role="dialog" aria-label="'+esc(titleOf(top.type,top.id))+'"><div class="sheet-bar"><div class="bar-in"><button class="iconbtn" id="back">‹ Zurück</button><span class="bar-t" aria-hidden="true">'+esc(titleOf(top.type,top.id))+'</span>'+
    (top.type!=="info"?'<button class="iconbtn" id="favbtn" aria-pressed="'+fav+'" aria-label="'+(fav?"Angeheftet":"Anheften")+'">'+(fav?"★":"☆")+'<span class="fav-l">'+(fav?" Angeheftet":" Anheften")+'</span></button>':'<span></span>')+'</div></div><div class="sheet-body">'+
    (top.type==="calc"?'<div class="eyebrow">Rechner</div><h2 class="title">'+esc(titleOf("calc",top.id))+'</h2>':'')+body+(top.type!=="info"?fbBlock(k, titleOf(top.type,top.id)):'')+'</div></div>';
  document.body.style.overflow = WIDE.matches ? "" : "hidden";
  if(top.type==="calc") CALC_MOUNT[top.id]($("#calc-"+top.id, host));
  var ta = $("#note"); if(ta){ ta.value = Notes.get(ta.dataset.key); updateNoteHint(); }
  var sh = $(".sheet"); sh.scrollTop = 0;
  $$("#main .sel").forEach(function(el){ el.classList.remove("sel"); });
  $$('#main [data-open="'+k+'"]').forEach(function(el){ el.classList.add("sel"); });
  var bar = $(".sheet-bar", host); sh.style.setProperty("--barh", (bar?bar.offsetHeight:52)+"px");
  var ttl = $(".title", host), jb = $(".jump", host), ticking=false;
  sh.addEventListener("scroll", function(){ if(ticking) return; ticking=true; requestAnimationFrame(function(){ ticking=false;
    if(ttl) bar.classList.toggle("show-t", ttl.getBoundingClientRect().bottom < bar.getBoundingClientRect().bottom);
    if(jb){ var lim = jb.getBoundingClientRect().bottom + 12, cur=null;
      $$("[data-jump]", jb).forEach(function(b){ var a=document.getElementById(b.dataset.jump); if(a && a.getBoundingClientRect().top <= lim) cur=b; });
      $$("[data-jump]", jb).forEach(function(b){ if(b===cur) b.setAttribute("aria-current","true"); else b.removeAttribute("aria-current"); });
      if(cur && cur!==jb._cur){ jb._cur=cur; var r=cur.getBoundingClientRect(), jr=jb.getBoundingClientRect(); if(r.left<jr.left||r.right>jr.right) jb.scrollLeft += r.left - jr.left - 16; } }
  }); }, {passive:true});
}
function notesBlock(key){
  return '<div class="notes"><div class="sec-h">Eigene Notiz</div><textarea id="note" data-key="'+esc(key)+'" placeholder="z. B. Oberarzt-Tipp, Hausstandard, eigene Erfahrung"></textarea><div class="st"><span id="note-st"></span> <span id="note-mode"></span></div></div>';
}
function acc(title, inner, open, pv){ var p = pv===false ? "" : (pv!=null ? pv : accPv(inner)); return '<details class="acc"'+(open||st.learn?' open':'')+'><summary><span class="acc-st"><span class="acc-t">'+esc(title)+'</span>'+(p?'<span class="acc-pv">'+esc(p)+'</span>':'')+'</span></summary><div class="acc-b">'+inner+'</div></details>'; }
var BARS = [["sd","Sedierung"],["ac","Anticholinerg"],["qt","QT-Verlängerung"],["se","Serotonerg"],["da","D2-Blockade (EPMS)"],["kr","Krampfschwelle ↓"],["hy","Hypotonie"],["at","Atemdepression"],["na","Hyponatriämie"],["ag","Blutbild"]];
var PR_ART = {k:["korrigiert","y"],b:["bestätigt","g"],w:["Quellen uneinig","r"],e:["ergänzt","i"],n:["neu","i"]};
var PR_SRC = {K:"Kompendium 2021",P:"Pocket Guide 2021",Dr:"Dreher 2021",I:"S3 Insomnie 2025",A:"S3 Alkohol (Kurzfassung)"};
var PR_FLD = {ind:"Indikation",off:"Off-label",ki:"Kontraindikationen",ia:"Interaktionen",nw:"Nebenwirkungen",ktr:"Kontrollen",ss:"Schwangerschaft und Stillzeit",src:"Quellenzeile",k:"Klasse und HWZ","dos.e":"Dosis Erwachsene","dos.a":"Dosis ≥ 65 J.","dos.j":"Dosis 12–17 J.",t:"Regeltext"};
function prField(c){
  var p = c.p, m;
  if(PR_FLD[p]) return PR_FLD[p];
  if((m = /^kern\.(\d+)$/.exec(p))) return "Kern, Zeile "+(+m[1]+1);
  if((m = /^cx\.(\w+)$/.exec(p))) return "Kontext: "+(CTXL[m[1]]||m[1]);
  if((m = /^opts\.(\d+)\.(\w+)$/.exec(p))){ var s = SIT.filter(function(x){ return x.id===c.id; })[0], o = s && s.opts[+m[1]]; var nm = o ? (o.d && D[o.d] ? D[o.d].n : (o.t||"")) : "Option "+(+m[1]+1); return nm+({dos:" · Dosis",why:" · Begründung",t:""}[m[2]]||""); }
  if(p==="opts.+") return "Neue Option";
  if((m = /^avoid\.(\d+)\.why$/.exec(p))) return "Vermeiden, Eintrag "+(+m[1]+1);
  if(p==="avoid.+") return "Neuer Eintrag unter Vermeiden";
  return p;
}
function prSrc(q){ return String(q||"").split(" · ").map(function(t){ var w = t.split(" "); return (PR_SRC[w[0]]||w[0])+(w.length>1?" "+w.slice(1).join(" "):""); }).join(" · "); }
function prVal(v){ if(v==null) return "–"; if(typeof v==="string") return v; if(Object.prototype.toString.call(v)==="[object Array]") return v.join(" – "); var parts=[]; ["t","d","dos","why"].forEach(function(k){ if(v[k]) parts.push(k==="d"&&D[v[k]]?D[v[k]].n:v[k]); }); return parts.join(" · "); }
function prTarget(key){ var p = key.split(":"); if(p[0]==="drug") return D[p[1]] ? D[p[1]].n : p[1]; if(p[0]==="sit"){ var s = SIT.filter(function(x){ return x.id===p[1]; })[0]; return s ? s.t : p[1]; } return "Interaktionsregel "+(+p[1]+1); }
function prList(L){
  return L.map(function(c){
    var a = PR_ART[c.a]||[c.a,"n"], changed = JSON.stringify(c.old)!==JSON.stringify(c.v);
    return '<div class="pr"><div class="pr-h"><span class="pill '+a[1]+'">'+esc(a[0])+'</span><b>'+esc(prField(c))+'</b></div>'+
      '<div class="pr-v">'+fmtText(prVal(c.v))+'</div>'+
      (c.old!=null && changed ? '<div class="pr-old">vorher: '+esc(prVal(c.old).replace(/\[\?\]/g,"(prüfen)"))+'</div>' : '')+
      '<div class="pr-q">Quelle: '+esc(prSrc(c.q))+'</div>'+
      (c.err ? '<div class="pr-n">Nicht angewendet: '+esc(c.err)+' – Originalwert unverändert.</div>' : '')+
      (c.t==="d" && D[c.id] && D[c.id].e2 ? '<div class="pr-n">Überholt: Die Karte wurde in Etappe 2 neu aus den Quellen geschrieben. Gültig ist der aktuelle Karteninhalt.</div>' : '')+'</div>';
  }).join("");
}
function pruefAcc(key){
  var L = window.V11 && V11.by[key]; if(!L || !L.length) return "";
  return acc("Quellenabgleich v1.1 · "+L.length+(L.length===1?" Angabe":" Angaben"), prList(L));
}
function pruefInfo(){
  if(!window.V11) return "";
  var cnt = {k:0,b:0,w:0,e:0,n:0}, err = 0; V11.ch.forEach(function(c){ cnt[c.a] = (cnt[c.a]||0)+1; if(c.err) err++; });
  var h = '<div class="card"><p><b>Version 1.1 vom 06.10.2026 · Quellenabgleich</b></p>'+
    '<p>Die Etappe-1-Karten wurden gegen die Projekt-PDFs geprüft: Benkert/Hippius, Kompendium der Psychiatrischen Pharmakotherapie (13. Aufl. 2021), Benkert, Pocket Guide (6. Aufl. 2021), Dreher, Psychopharmakotherapie griffbereit (5. Aufl. 2021), außerdem die S3-Leitlinie Insomnie (04/2025, vollständig) und die Kurzfassung der S3-Leitlinie Alkohol (2021, verlängert 2025).</p>'+
    '<div class="summary"><span class="pill y">'+cnt.k+' korrigiert</span><span class="pill g">'+cnt.b+' bestätigt</span><span class="pill r">'+cnt.w+' Quellen uneinig</span><span class="pill i">'+(cnt.e+cnt.n)+' ergänzt oder neu</span>'+(err?'<span class="pill n">'+err+' nicht angewendet</span>':'')+'</div>'+
    '<p class="hint">Bei „Quellen uneinig“ stehen beide Positionen auf der Karte; die Entscheidung bleibt ärztlich. Die Bücher sind von 2021: Neuere Zulassungen und Warnhinweise sind darin nicht enthalten. Noch offen: Fachinformationen, AGNP-TDM-Konsensus, BÄK-Richtlinie Substitution, S3 Schizophrenie, S3 Medikamentenbezogene Störungen, PRISCUS 2.0 und Embryotox.</p></div>';
  h += '<div class="sec-h">Prüfprotokoll je Karte</div>';
  h += V11.order.map(function(key){ var L = V11.by[key]; return '<details class="acc"><summary>'+esc(prTarget(key))+' · '+L.length+'</summary><div class="acc-b">'+prList(L)+'</div></details>'; }).join("");
  return h;
}
function barsHTML(t){
  var rows = BARS.filter(function(b){ return t[b[0]]; });
  if(!rows.length) return "";
  return '<div class="bars">'+rows.map(function(b){ var v=Math.min(3,t[b[0]]); return '<span>'+b[1]+'</span><span class="bar" role="img" aria-label="'+b[1]+' '+v+' von 3"><i class="'+(v>=2?"hi":"")+'" style="width:'+(v/3*100)+'%"></i></span>'; }).join("")+'</div><p class="hint">Relative Einstufung 0–3 für den Interaktions-Check, keine Messgröße.</p>';
}
function cypHTML(t){
  var p=[];
  if(t.s&&t.s.length) p.push("Substrat: "+t.s.map(function(e){ return e==="UGT"?"UGT":"CYP"+e; }).join(", ")+(t.sens&&t.sens.length?" (empfindlich: "+t.sens.join(", ")+")":""));
  if(t.i) p.push("Hemmt: "+Object.keys(t.i).map(function(e){ return (e==="UGT"?"UGT":"CYP"+e)+" ("+t.i[e]+")"; }).join(", "));
  if(t.n&&t.n.length) p.push("Induziert: "+t.n.map(function(e){ return e==="UGT"?"UGT":"CYP"+e; }).join(", "));
  if(t.pro) p.push("Prodrug, aktiviert über CYP"+t.pro);
  return p.length ? '<p class="mono" style="font-size:13px">'+esc(p.join(" · "))+'</p>' : "";
}
function sheetDrug(id){
  var d = D[id]; if(!d) return "<p>Nicht gefunden.</p>";
  var act = activeCtx(), key = "drug:"+id;
  var h = '<div class="dh">'+ava(id,'lg')+'<div class="dh-t"><div class="eyebrow">'+esc(d.g||"")+(d.stub?" · Kurzeintrag":"")+'</div><h2 class="title">'+esc(d.n)+'</h2><div class="brands">'+esc(d.k||"")+(d.b&&d.b.length?' · '+esc(d.b.join(", ")):'')+(d.hw?' · HWZ '+esc(d.hw):'')+'</div>'+srcTags(id)+'</div></div>'+priscusBox(id, act)+merkBox(id);
  if(!d.stub){ var dj=[["j-dos","Dosis"],["j-ind","Indikation"],["j-ki","KI"],["j-ia","Interaktionen"],["j-nw","NW"],["j-ktr","Kontrollen"],["j-ss","SS/Stillzeit"],["j-auf","Aufklärung"]];
    h += '<nav class="jump" aria-label="Abschnitte">'+dj.map(function(j){ return '<button data-jump="'+j[0]+'">'+esc(j[1])+'</button>'; }).join("")+'</nav>'; }
  if(act.length) h += '<div class="ctxgrid">'+ctxPills(d, act)+'</div>';
  h += '<div class="label"><div class="label-h"><span>Kern</span><span>'+vt(d.src||"")+'</span></div><ol>'+(d.kern||[]).map(function(l){ return '<li>'+vt(l)+'</li>'; }).join("")+'</ol></div>';
  if(hasP(id)) h += acc("Profil und Herkunft", pLegend(true)+profCard(id), false, profPv(id));
  if(d.stub){
    h += acc("Interaktionsprofil", cypHTML(d.tg||{})+barsHTML(d.tg||{}), true);
    h += '<p class="note-soft">Volle Karte mit Indikation, Dosierung und Kontrollen folgt in Etappe '+(d.komed?"3":"2")+'.</p>';
  } else {
    var ja = act.indexOf("jug")>=0, aa = act.indexOf("alt")>=0;
    h += '<span class="anc" id="j-dos"></span>'+acc("Dosierung", '<div class="kv kv1"><div'+(!ja&&!aa?' class="hl"':'')+'><b>Erwachsene</b>'+fmtText(d.dos.e)+'</div><div'+(aa?' class="hl"':'')+'><b>≥ 65 Jahre</b>'+fmtText(d.dos.a)+'</div><div'+(ja?' class="hl"':'')+'><b>12–17 Jahre</b>'+fmtText(d.dos.j)+'</div></div>', true);
    h += '<span class="anc" id="j-ind"></span>'+acc("Indikation", '<div class="kv kv1"><div><b>Zugelassen (DE)</b>'+fmtText(d.ind)+'</div><div><b>Off-label</b>'+fmtText(d.off)+'</div></div>');
    h += '<span class="anc" id="j-ki"></span>'+acc("Kontraindikationen", fmtText(d.ki));
    h += '<span class="anc" id="j-ia"></span>'+acc("Interaktionen", fmtText(d.ia)+cypHTML(d.tg||{})+'<button class="btn ghost" data-add-med="'+id+'">In Interaktions-Check übernehmen</button>');
    h += '<span class="anc" id="j-nw"></span>'+acc("Nebenwirkungen und Profil", fmtText(d.nw)+barsHTML(d.tg||{}));
    h += '<span class="anc" id="j-ktr"></span>'+acc("Kontrollen", fmtText(d.ktr));
    h += '<span class="anc" id="j-ss"></span>'+acc("Schwangerschaft und Stillzeit", fmtText(d.ss)+'<p class="hint">Einzelfall: embryotox.de</p>', act.indexOf("schw")>=0||act.indexOf("still")>=0);
    h += '<span class="anc" id="j-auf"></span>'+acc("Aufklärung in Laiensprache", '<div id="auf" class="auf">'+fmtPara(d.auf)+'</div><button class="btn ghost" data-copy="auf">Text kopieren</button>');
    if(d.cx && Object.keys(d.cx).length){
      var others = CTX.map(function(c){ return c[0]; }).filter(function(k){ return act.indexOf(k)<0 && d.cx[k]; });
      if(others.length) h += acc("Alle Kontexthinweise", '<div class="ctxgrid">'+ctxPills(d, others)+'</div>');
    }
    if(st.learn) h += acc("Wirkmechanismus", fmtPara(d.mech), true);
  }
  h += pruefAcc("drug:"+id);
  var inSits = SIT.filter(function(s){ return s.opts.some(function(o){ return o.d===id; }); });
  if(inSits.length) h += '<div class="sec-h">Kommt vor in</div><div class="list">'+inSits.map(function(s){ var o = s.opts.filter(function(o){ return o.d===id; })[0]; return rowHTML("sit",s.id,s.t,(ROLE[o.r]?ROLE[o.r][0]:"")+(o.dos?" · "+o.dos:"")); }).join("")+'</div>';
  h += aiBlock("c", "");
  h += notesBlock(key);
  h += '<p class="foot">Quellen: '+esc(d.src||"–")+'. '+(d.e2?'Karte aus Etappe 2 (07.10.2026), direkt aus den Quellen geschrieben. ':'')+esc(STAND)+'</p>';
  return h;
}
function sheetSit(id){
  var s = SIT.filter(function(x){ return x.id===id; })[0]; if(!s) return "<p>Nicht gefunden.</p>";
  var act = activeCtx();
  var h = '<div class="eyebrow">'+esc(AREAS[s.a])+'</div><h2 class="title">'+esc(s.t)+'</h2>';
  if(algById(id)) h += '<button class="alg-cta" data-open="alg:'+id+'"><span><b>Entscheidungshilfe</b><span>Schritt für Schritt zum passenden Mittel</span></span><span aria-hidden="true">›</span></button>';
  var jumps = [];
  if(s.pre && s.pre.length) jumps.push(["j-pre","Erst prüfen"]);
  if(s.steps && s.steps.length) jumps.push(["j-steps","Stufenplan"]);
  jumps.push(["j-opt","Optionen · "+s.opts.length]);
  if(s.avoid && s.avoid.length) jumps.push(["j-avoid","Vermeiden · "+s.avoid.length]);
  jumps.push(["j-bg","Hintergrund"]);
  h += '<nav class="jump" aria-label="Abschnitte">'+jumps.map(function(j){ return '<button data-jump="'+j[0]+'">'+esc(j[1])+'</button>'; }).join("")+'</nav>';
  if(act.length){ var nr = s.opts.filter(function(o){ var d=o.d&&D[o.d]; return d && worst(act.map(function(k){ var c=drugCx(d,k); return c?c[0]:"n"; }))==="r"; }).length;
    h += '<p class="ctxnote">Kontext: '+esc(act.map(function(k){ return CTXL[k]; }).join(", "))+(nr?' · '+nr+' Option'+(nr>1?'en':'')+' ungünstig (abgeblendet)':' · keine Option rot markiert')+'</p>'; }
  h += '<div class="label"><div class="label-h"><span>Kern</span><span>'+vt(s.src)+'</span></div><ol>'+s.kern.map(function(l){ return '<li>'+vt(l)+'</li>'; }).join("")+'</ol></div>';
  if(s.lg) h += '<p class="hint">Leitlinie: '+vt(s.lg)+'</p>';
  if(s.pre && s.pre.length) h += '<span class="anc" id="j-pre"></span>'+acc("Erst prüfen", '<ul class="pre">'+s.pre.map(function(p){ return '<li>'+vt(p)+'</li>'; }).join("")+'</ul>', st.learn || !!s.steps);
  if(s.steps && s.steps.length) h += '<div class="sec-h" id="j-steps">Stufenplan</div><ol class="steps">'+s.steps.map(function(x){ return '<li><b>'+vt(x.t)+'</b>'+fmtText(x.x)+'</li>'; }).join("")+'</ol>';
  h += '<div class="sec-h" id="j-opt">Optionen</div>';
  h += s.opts.map(function(o){
    var d = o.d ? D[o.d] : null, role = ROLE[o.r]||["",""];
    var w = "n", ctxH = "";
    if(d && act.length){ w = worst(act.map(function(k){ var c=drugCx(d,k); return c?c[0]:"n"; })); ctxH = '<div class="ctxline">'+ctxPills(d, act)+'</div>'; }
    var name = d ? '<button class="opt-name" data-open="drug:'+o.d+'">'+esc(d.n)+'</button>' : '<span class="opt-name plain">'+vt(o.t)+'</span>';
    return '<div class="opt'+(w==="r"?" dim":"")+'"><div class="opt-top"><span class="role '+role[1]+'">'+esc(role[0])+'</span>'+name+(o.off?'<span class="pill off">off-label</span>':'')+(typeof o.ev==="number"?'<span class="ev" title="Evidenz (eigene Einschätzung)">'+"●●●".slice(0,o.ev)+"○○○".slice(0,3-o.ev)+' '+EVL[o.ev]+'</span>':'')+'</div>'+
      (o.dos?'<div class="dose">'+vt(o.dos)+'</div>':'')+(o.why?'<div class="why">'+vt(o.why)+'</div>':'')+ctxH+'</div>';
  }).join("");
  if(s.avoid && s.avoid.length) h += '<div class="sec-h" id="j-avoid">Vermeiden</div>'+s.avoid.map(function(a){ var n = a.d&&D[a.d] ? '<button class="opt-name" data-open="drug:'+a.d+'">'+esc(D[a.d].n)+'</button>' : '<b>'+vt(a.t)+'</b>'; return '<div class="avoid">'+n+' – '+vt(a.why)+'</div>'; }).join("");
  h += pruefAcc("sit:"+id);
  h += '<span class="anc" id="j-bg"></span>'+acc("Hintergrund", fmtPara(s.lern), st.learn);
  var calcLink = {"ez-alk":"ciwa","ez-alk-schwer":"ciwa","ez-bzd":"bzd","ez-opioid":"cows"}[s.id];
  if(calcLink) h += '<div class="list" style="margin-top:10px">'+rowHTML("calc",calcLink,titleOf("calc",calcLink),subOf("calc",calcLink))+'</div>';
  h += '<p class="hint" style="margin-top:10px">'+(s.e2 ? 'Evidenzpunkte: nach Leitlinien-Empfehlungsgrad, soweit die Leitlinie gelesen wurde (Grad steht in der Begründung); sonst Einschätzung nach Kompendium.' : 'Evidenzpunkte: eigene Einschätzung, Leitlinien-Empfehlungsgrade folgen nach Abgleich mit den PDFs.')+'</p>';
  h += aiBlock("c", "");
  h += notesBlock("sit:"+id);
  h += '<p class="foot">Quellen: '+esc(s.src)+'. '+esc(STAND)+'</p>';
  return h;
}
function sheetInfo(){
  return '<div class="eyebrow">'+esc(VERSION)+'</div><h2 class="title">Hinweise und Quellen</h2>'+
  '<div class="card"><p><b>Was das ist.</b> Eine persönliche Taschenreferenz für Entscheidungen im Stationsalltag. Sie ersetzt weder Fachinformation noch Leitlinie noch ärztliche Prüfung im Einzelfall.</p><p>'+esc(STAND)+'</p></div>'+
  '<div class="card"><p><b>Markierungen</b></p><p><span class="verify">prüfen</span> Angabe, die ich nicht sicher belegen kann: vor Verlass gegen Fachinfo prüfen.</p><p><span class="pill off">off-label</span> nicht von der deutschen Zulassung gedeckt.</p><p><span class="role rint">International</span> in Deutschland nicht verfügbar oder nicht etabliert.</p><p class="mono">●●● hoch · ●●○ mittel · ●○○ niedrig · ○○○ Konsens</p><p class="hint">Evidenzpunkte sind bis zum Leitlinienabgleich eine eigene Einschätzung.</p></div>'+
  '<div class="card"><p><b>Quellenkürzel</b></p><p>K Benkert/Hippius Kompendium 2021 · P Benkert Pocket Guide 2021 · Dr Dreher 2021 · RHB Rote-Hand-Brief · FI Fachinformation · S3 AWMF-S3-Leitlinie (Alkohol 2021, Medikamentenbezogene Störungen, Schizophrenie, Insomnie, BPS 2022, Demenzen, Methamphetamin 2016) · NVL Nationale VersorgungsLeitlinie Depression · AGNP TDM-Konsensus (Hiemke et al.) · PRISCUS 2.0 · Embryotox · CredibleMeds (QT) · Ashton-Manual (BZD-Äquivalenzen) · BÄK-Richtlinie Substitution · WHO ATC/DDD · Benkert/Hippius, Kompendium 13. Aufl. 2021 · Benkert, Pocket Guide 6. Aufl. 2021 · Dreher, Psychopharmakotherapie griffbereit 5. Aufl. 2021.</p></div>'+
  '<div class="card"><p><b>Deine Rückmeldungen</b> · <span id="fb-count">'+esc(fbCountText())+'</span></p><p class="hint">Jede Karte hat unten „Fehler melden“. Profilpunkte bewertest du direkt beim Antippen eines Punkts. Claude liest die Meldungen beim nächsten Update und setzt sie auf „eingearbeitet“.</p></div>'+
  pruefInfo()+
  '<div class="card"><p><b>Version 3.6 vom 09.10.2026 · PRISCUS 2.0 und CredibleMeds</b></p><ul class="fl"><li>PRISCUS 2.0 (Dtsch Arztebl Int 2023): 56 Wirkstoffe der App (inkl. Komedikation) als potenziell inadäquat ab 65 – mit den Bedingungen der Liste (z. B. Quetiapin > 100 mg/d, > 6 Wochen) und den genannten Alternativen; dazu „kein PIM“ und „uneindeutig“ aus den Zusatztabellen.</li><li>Mit Kontext „≥ 65 J.“: PRISCUS-Hinweis in der Wirkstoffkarte, PIM-Mittel rutschen in den Entscheidungshilfen in „Mit Vorsicht“, der Interaktions-Check listet sie mit Alternativen.</li><li>CredibleMeds (Stand 14.09.2026): QT-Kategorie KR/PR/CR/SR für 56 Wirkstoffe, im Kopf der Karte und als eigene Karte im Interaktions-Check; die Profilspalte heißt jetzt „QTc-/Torsade-Risiko“ und ist für gelistete Mittel belegt.</li></ul></div>'+
  '<div class="card"><p><b>Version 3.5 vom 09.10.2026 · ACB-Skala</b></p><ul class="fl"><li>Anticholinerge Last aus der ACB-Skala (2012 Update, Aging Brain Care/Regenstrief) statt eigener Schätzung: 26 Wirkstoffe der App mit Score 1–3, Duloxetin und Gabapentin als „geprüft, nicht aufgenommen“. In der Profiltabelle mit ✓, in der Herkunft mit Quelle.</li><li>Interaktion: neue Karte „Anticholinerge Last“ mit ACB-Summe der eingegebenen Medikamente, Zahl definitiver und möglicher Anticholinergika und den Risikoangaben des ACB-Blatts. Nicht gelistete Mittel werden ausgewiesen, nicht als 0 gezählt.</li><li>Wirkstoffkarten zeigen den ACB-Score im Kopf.</li></ul></div>'+
  '<div class="card"><p><b>Version 3.4 vom 09.10.2026 · Sicherer</b></p><ul class="fl"><li>Entscheidungshilfen ohne Rangliste: statt „Beste Wahl“ drei Stufen – „Passt zu deinen Angaben“, „Mit Vorsicht“ (mit allen Einwänden), „Weitere Optionen der Karte“. Die Punktgewichtung bestimmt nur noch die Reihenfolge innerhalb einer Stufe.</li><li>Profilpunkte sind sichtbar als eigene Schätzung gekennzeichnet (≈). Belegte Werte aus veröffentlichten Skalen bekommen ✓ und Quelle, sobald die Quellen vorliegen.</li><li>Jede Karte hat unten „Fehler melden oder Korrektur vorschlagen“; jeder Profilpunkt lässt sich als „stimmt / zu hoch / zu niedrig“ bewerten. Die Meldungen landen in der Datenbank der App und werden beim nächsten Update eingearbeitet.</li><li>Quelltext, Build und alle Prüfungen liegen jetzt im Repository (Branch psychopharmaka-kompass) und laufen bei jeder Änderung automatisch.</li></ul></div>'+
  '<div class="card"><p><b>Version 3.3 vom 09.10.2026 · Übersichtlicher</b></p><ul class="fl"><li>Fünf statt sechs Bereiche: Der Profilvergleich ist jetzt Teil von „Wirkstoffe“ (Liste · Klassen · Vergleich).</li><li>Jeder Bereich hat ein Symbol und eine Farbe (Schlaf, Anspannung, EPMS/Notfall, Entzug, Diagnosen) – auf der Startseite, in allen Listen und in der Suche.</li><li>Situationen und Suche: Die Entscheidungshilfe steht als Knopf „Entscheiden“ direkt neben der Situation, statt doppelt in der Liste.</li><li>Entscheidungshilfen: Beantwortete Fragen schrumpfen auf eine Zeile mit der gewählten Antwort (antippen zum Ändern), die nächste offene Frage ist hervorgehoben, Patientenangaben kompakt.</li><li>Wirkstoffkarten und Rechner: Zugeklappte Abschnitte zeigen eine Vorschau ihres Inhalts.</li><li>Startseite: „Weiter mit“ als waagrechte Leiste; am Computer zeigt die rechte Fläche die zuletzt geöffneten Karten.</li><li>Fehler behoben: Eingetippter Suchtext war kaum lesbar.</li></ul></div>'+
  '<div class="card"><p><b>Version 3.2 vom 08.10.2026 · Gesichter und Herkunft</b></p><ul class="fl"><li>Jede Wirkstoffklasse hat eine eigene Farbe, ein Symbol und eine Persona (z. B. SSRI „Die Pumpen-Schließer“, Aripiprazol-Klasse „Die Thermostate“). Jeder Wirkstoff trägt ein Kürzel wie im Periodensystem (Mi, Qu, Li) und ein Merkbild, das Mechanismus und Klinik verbindet.</li><li>Wirkstoffe: neue Ansicht „Klassen-Atlas“ mit allen 31 Klassen und Merkbildern.</li><li>Herkunft jeder Eigenschaft: Rezeptorprofil je Wirkstoff (33 Ziele) und Regeln, welcher Mechanismus welche Eigenschaft erzeugt (z. B. Gewicht ← H1- und 5-HT2C-Blockade), dazu substanzspezifische Ursachen (z. B. Lamotrigin-SJS: HLA, schnelle Aufdosierung, Valproat). Sichtbar in der Wirkstoffkarte, in jedem Vergleich („Woher die Unterschiede kommen“) und per Antippen eines Punkts in der Profiltabelle.</li><li>Profiltabelle: Spaltensatz „Rezeptoren“, sortierbar (z. B. nach H1); die Suche versteht Rezeptoren („H1“, „D2“, „SERT“).</li><li>Korrektur der Einstufung: QTc bei Donepezil höher als bei Galantamin.</li></ul></div>'+
  '<div class="card"><p><b>Version 3.1 vom 08.10.2026 · Hintergrund und Profile</b></p><ul class="fl"><li>Entscheidungshilfen: Jede Frage hat einen Info-Punkt (i). Am Computer beim Darüberfahren, auf dem Handy per Antippen: welche Mittel jede Antwort stark bevorzugt, bevorzugt, abwertet oder ausschließt, jeweils mit Begründung aus der Karte. Mehrere bevorzugte Mittel lassen sich dort direkt im Profil vergleichen.</li><li>Gleichstand: Liegen Optionen gleichauf, zeigt eine Tabelle nebeneinander, worin sie sich unterscheiden (z. B. anticholinerg, Gewicht, Sedierung), mit Kurzfazit je Mittel. Darunter lässt sich das Profil aller Optionen vergleichen. Umstellungen zeigen, was sich mit dem Wechsel ändert.</li><li>Neuer Bereich „Profile“: 74 Wirkstoffe mit 7 Wirkungs- und 19 Nebenwirkungsmerkmalen als farbige Punkte. Durchsuchbar nach Name, Klasse und Eigenschaft („ohne Gewicht“, „nicht anticholinerg“), Schnellfilter, eigene Filter, Sortierung nach Stärke per Spaltenkopf.</li><li>Wirkstoffkarten: Abschnitt „Profil auf einen Blick“ mit Sprung in den Vergleich.</li><li>Die Punkte sind eine relative Einstufung (eigene Synthese aus Karten und Lehrbuchprofilen), keine Messgröße.</li></ul></div>'+
  '<div class="card"><p><b>Version 3.0 vom 08.10.2026 · Neues Design</b></p><ul class="fl"><li>Smartphone: dunkles Markenband oben mit Suche und Patientenfiltern, ruhige Inhaltsflächen, Tableiste mit Markierung des aktiven Bereichs.</li><li>Computer ab 1100 px: drei Spalten – Seitenleiste mit Navigation und Patientenfiltern, Liste, Karte. Die Liste bleibt beim Lesen sichtbar, die geöffnete Karte ist in der Liste markiert.</li><li>Einheitliche Gestaltung von Etiketten, Karten und Entscheidungshilfen in hell und dunkel.</li></ul></div>'+
  '<div class="card"><p><b>Version 2.1 vom 08.10.2026 · Entscheidungshilfen</b></p><ul class="fl"><li>Zu jeder der 46 Situationen und Leitlinien eine Entscheidungshilfe: Fragen Schritt für Schritt beantworten, das Ergebnis zeigt die beste Wahl oder – bei Gleichstand – die Abwägung mit „Dafür“ und „Beachten“.</li><li>Vier Umstellungshilfen: Antidepressivum, Antipsychotikum, oral → Depot, Methadon → Buprenorphin (mit Abständen und Schritten aus den Wirkstoffkarten).</li><li>Gewichtung: Rolle und Evidenz aus der Karte, die Antworten (Begründungen aus den Kartentexten) und die Kontextangaben der Wirkstoffkarten. Rot markierter Kontext schließt aus, gelber wertet ab, fehlende Angaben werden als „Fachinfo prüfen“ gekennzeichnet.</li><li>35 klinische Testszenarien prüfen die Engine bei jeder Änderung.</li></ul></div>'+
  '<div class="card"><p><b>Version 2.0 vom 08.10.2026 · Umgestaltung</b></p><ul class="fl"><li>Die Zurück-Geste des Handys schließt die geöffnete Karte, statt die App zu verlassen.</li><li>Der Kopf blendet beim Scrollen die Titelzeile aus; Suche und Kontextfilter bleiben.</li><li>Wirkstoff- und Situationskarten haben eine mitlaufende Sprungleiste, die den aktuellen Abschnitt markiert. Der Kartentitel erscheint oben, sobald die Überschrift weggescrollt ist.</li><li>Wirkstoffliste mit Buchstaben-Gliederung; somatische Komedikation als eigener Abschnitt und Filter.</li><li>Situationsliste zeigt Stufenplan und Zahl der Optionen.</li><li>Größere Tippflächen, deutlichere Rahmen von Bedienelementen, Rechner-Skalen in einer Reihe.</li><li>Breitbild: gemeinsames Raster, schwebende Tableiste.</li><li>Tastatur: „/“ springt in die Suche, Pfeil runter in die Treffer, Esc schließt.</li></ul></div>'+
  '<div class="card"><p><b>Version 1.4 vom 08.10.2026 · Lesbarkeit</b></p><p>Längere Texte in Wirkstoff- und Situationskarten werden als Stichpunkte angezeigt: ein Satz pro Punkt, Einleitungen wie „Schwangerschaft:“ fett, lange Aufzählungen mit Semikolon als Unterpunkte. Dosierungen sind in Festbreitenschrift hervorgehoben. Hintergrundtexte sind in kurze Absätze geteilt. Der Wortlaut ist unverändert, nur die Darstellung ist neu.</p></div>'+
  '<div class="card"><p><b>Version 1.3 vom 08.10.2026 · Überarbeitung</b></p><p>Interaktions-Check: Ein starker Hemmer plus Prodrug (z. B. Paroxetin + Tamoxifen, Fluoxetin + Codein, Fluoxetin + Clopidogrel) ist jetzt rot. Neu: MAO-Hemmer plus noradrenerg oder dopaminerg wirkende Substanz (z. B. Atomoxetin) ist rot. Neu als Einzelregel: Sertralin + Lamotrigin, Esketamin + MAO-Hemmer oder Stimulans. Weniger Fehlalarme: Zwei Substanzen mit geringem QT-Risiko oder nur einer stärker serotonergen Substanz ergeben einen Hinweis statt „Vorsicht“. Ist der QTc-Kontext gesetzt, steigt die QT-Stufe.</p><p>Bedienung: neue Startseite mit „Weiter mit“, Sprungleiste in Situationskarten, aktive Kontextfilter stehen vorn, größere Tippflächen. Verweise wie „Karte clozapin“ öffnen jetzt die Karte. Abgleichsangaben aus v1.1 zu Karten, die in Etappe 2 neu geschrieben wurden, sind als überholt markiert.</p><p class="hint">Die medizinischen Karteninhalte sind in v1.3 unverändert.</p></div>'+
  '<div class="card"><p><b>Version 1.2 vom 07.10.2026 · Etappe 2</b></p><p>'+(window.E2?E2.sits.length:0)+' Diagnose-Algorithmen mit Stufenplan und '+(window.E2?E2.drugs.length:0)+' volle Wirkstoffkarten (Antidepressiva, Stimmungsstabilisierer, Antipsychotika, ADHS-Mittel, Antidementiva, Suchtmittel, weitere Benzodiazepine).</p>'+
  '<p>Gelesene Leitlinien, soweit der Web-Leser kam: NVL Unipolare Depression 3.2 (2023), S3 Angststörungen (2021, Kurzfassung), S3 Zwangsstörungen (2022, über Übersichtsarbeiten), S3 PTBS (2019; Neufassung 05/2026 nicht lesbar), S3 Bipolare Störungen (2019, nur Anfang), S3 Schizophrenie 5.0 (06/2026, Kurzfassung), S3 BPS (2022), S3 ADHS (2018 abgelaufen; Fassung 05/2025 Diagnostik), S3 Demenzen (2023; Version 6.0 02/2026 teilweise). Neu nach 2021 berücksichtigt u. a.: Clozapin-Blutbildschema (Rote-Hand-Brief 09/2025), Valproat bei Männern (Rote-Hand-Brief 02/2024), Concerta für Erwachsene (FI 02/2026).</p>'+
  '<p class="hint">Lurasidon, Vortioxetin und Prazosin sind laut den gefundenen Quellen in Deutschland nicht im Handel; die Karten bleiben für Import und Wissen.</p></div>'+
  '<div class="card"><p><b>KI-Frage.</b> Läuft über dein Claude-Konto, nur in claude.ai. Die passenden Karten werden als Kontext mitgeschickt. Keine Namen oder Geburtsdaten eingeben.</p><p><b>Notizen.</b> In claude.ai synchronisiert und nur für dich sichtbar; in der Offline-Kopie nur lokal.</p></div>';
}

/* ---------- Rechner ---------- */
var BZD = [["Alprazolam",0.5,0.5],["Bromazepam",5,6],["Chlordiazepoxid",25,25],["Clobazam",20,20],["Clonazepam",0.5,0.5],["Diazepam",10,10],["Flunitrazepam",1,1],["Flurazepam",15,30],["Lorazepam",1,1],["Lormetazepam",1,2],["Nitrazepam",10,10],["Oxazepam",20,20],["Temazepam",20,20],["Zolpidem",20,20],["Zopiclon",15,15]];
var APDDD = [["Olanzapin",10],["Risperidon",5],["Paliperidon",6],["Quetiapin",400],["Aripiprazol",15],["Amisulprid",400],["Ziprasidon",80],["Clozapin",300],["Haloperidol",8],["Lurasidon",60],["Asenapin",20],["Flupentixol",6],["Zuclopenthixol",30],["Perphenazin",30],["Fluphenazin",10],["Chlorpromazin",300],["Sertindol",16]];
var CIWA = [
  ["Übelkeit / Erbrechen",7,"0 keine · 1 leichte Übelkeit · 4 Übelkeit mit Würgen · 7 ständig, Erbrechen"],
  ["Tremor (Arme gestreckt, Finger gespreizt)",7,"0 kein · 1 fühlbar, nicht sichtbar · 4 mäßig · 7 schwer, auch ohne Armhalte"],
  ["Paroxysmales Schwitzen",7,"0 keins · 1 feuchte Hände · 4 Schweißperlen Stirn · 7 durchnässt"],
  ["Angst",7,"0 keine · 1 leicht · 4 mäßig, wachsam · 7 panikartig"],
  ["Agitation",7,"0 normal · 1 etwas unruhig · 4 deutlich unruhig · 7 läuft ständig umher"],
  ["Taktile Störungen",7,"0 keine · 1 leichtes Kribbeln · 4 mäßige Halluzinationen · 7 kontinuierlich"],
  ["Akustische Störungen",7,"0 keine · 1 Geräusche leicht störend · 4 mäßige Halluzinationen · 7 kontinuierlich"],
  ["Visuelle Störungen",7,"0 keine · 1 Licht leicht zu grell · 4 mäßige Halluzinationen · 7 kontinuierlich"],
  ["Kopfschmerz / Druckgefühl",7,"0 keiner · 1 sehr leicht · 4 mäßig bis stark · 7 extrem"],
  ["Orientierung",4,"0 orientiert · 1 unsicher beim Rechnen · 2 Datum ≤ 2 Tage falsch · 3 Datum > 2 Tage falsch · 4 Ort/Person"]
];
var COWS = [
  ["Ruhepuls",[[0,"≤ 80"],[1,"81–100"],[2,"101–120"],[4,"> 120"]]],
  ["Schwitzen (letzte 30 min)",[[0,"keins"],[1,"feuchte Hände"],[2,"Stirn feucht"],[3,"Schweißperlen"],[4,"läuft herab"]]],
  ["Unruhe",[[0,"sitzt ruhig"],[1,"Mühe still zu sitzen"],[3,"häufige Positionswechsel"],[5,"kann nicht sitzen"]]],
  ["Pupillen",[[0,"eng/normal"],[1,"evtl. weiter"],[2,"mäßig weit"],[5,"nur Irissaum"]]],
  ["Knochen-/Gelenkschmerz",[[0,"keine"],[1,"leicht diffus"],[2,"stark diffus"],[4,"reibt Gelenke"]]],
  ["Rhinorrhoe / Tränenfluss",[[0,"keine"],[1,"verstopft/feucht"],[2,"läuft/tränt"],[4,"ständig"]]],
  ["GI-Beschwerden (30 min)",[[0,"keine"],[1,"Krämpfe"],[2,"Übelkeit/weicher Stuhl"],[3,"Erbrechen/Durchfall"],[5,"mehrfach"]]],
  ["Tremor",[[0,"keiner"],[1,"fühlbar"],[2,"leicht sichtbar"],[4,"grob/Zuckungen"]]],
  ["Gähnen",[[0,"keines"],[1,"1–2×"],[2,"≥ 3×"],[4,"mehrmals/min"]]],
  ["Angst / Reizbarkeit",[[0,"keine"],[1,"berichtet"],[2,"sichtbar"],[4,"Gespräch erschwert"]]],
  ["Gänsehaut",[[0,"glatte Haut"],[3,"fühlbar/Haare aufgestellt"],[5,"deutlich sichtbar"]]]
];
function fmt(n,dig){ if(!isFinite(n)) return "–"; var f = Math.pow(10,dig==null?1:dig); return String(Math.round(n*f)/f).replace(".",","); }
function num(v){ return parseFloat(String(v).replace(",",".")); }
var CALC_MOUNT = {
  bzd:function(el){
    el.innerHTML = '<div class="grid2"><div class="field"><label for="bz-s">Substanz</label><select id="bz-s">'+BZD.map(function(b,i){ return '<option value="'+i+'"'+(b[0]==="Lorazepam"?" selected":"")+'>'+b[0]+'</option>'; }).join("")+'</select></div><div class="field"><label for="bz-d">Tagesdosis (mg)</label><input id="bz-d" inputmode="decimal" value="4"></div></div>'+
      '<div class="card" style="background:var(--surface-2)"><div class="eyebrow">Diazepam-Äquivalent</div><div class="score" id="bz-r">–</div><div class="hint" id="bz-rr"></div></div>'+
      '<div class="sec-h">Ausschleichplan (Diazepam)</div><div class="grid2"><div class="field"><label for="bz-st">Start (mg/d)</label><input id="bz-st" inputmode="decimal"></div><div class="field"><label for="bz-p">Reduktion pro Schritt (%)</label><input id="bz-p" inputmode="decimal" value="10"></div><div class="field"><label for="bz-i">Schrittabstand (Tage)</label><input id="bz-i" inputmode="numeric" value="7"></div><div class="field"><label for="bz-m">Kleinster Schritt (mg)</label><input id="bz-m" inputmode="decimal" value="1"></div></div>'+
      '<div class="tbl" id="bz-t"></div><p class="hint">Äquivalenzen nach Ashton-Manual; deutsche Quellen weichen teils um Faktor 1,5–2 ab. Ambulant oft 5–10 % alle 2–4 Wochen, stationär schneller. Die letzten Schritte langsamer. Nach Symptomen anpassen.</p>';
    var touched=false;
    function calc(){
      var b = BZD[+$("#bz-s",el).value], dose = num($("#bz-d",el).value);
      var lo = dose/b[2]*10, hi = dose/b[1]*10;
      $("#bz-r",el).textContent = isFinite(lo) ? (Math.abs(hi-lo)<0.05 ? fmt(lo)+" mg" : fmt(lo)+"–"+fmt(hi)+" mg") : "–";
      $("#bz-rr",el).textContent = b[0]+" "+(b[1]===b[2]?fmt(b[1],2):fmt(b[1],2)+"–"+fmt(b[2],2))+" mg ≈ Diazepam 10 mg";
      if(!touched && isFinite(lo)) $("#bz-st",el).value = fmt(Math.round((lo+hi)/2),0);
      plan();
    }
    function plan(){
      var s = num($("#bz-st",el).value), p = num($("#bz-p",el).value)/100, iv = parseInt($("#bz-i",el).value,10), mn = num($("#bz-m",el).value)||1;
      if(!(s>0) || !(p>0) || !(iv>0)){ $("#bz-t",el).innerHTML=""; return; }
      var rows=[], cur=s, i=0;
      while(cur>0 && i<60){ rows.push([i*iv+1, cur]); var next = Math.round(cur*(1-p)); if(cur-next<mn) next = cur-mn; if(next<mn) next = next<=0?0:next; if(next<0.5) next=0; cur = Math.round(next*10)/10; i++; }
      rows.push([i*iv+1,0]);
      $("#bz-t",el).innerHTML = '<table><thead><tr><th>Schritt</th><th class="num">ab Tag</th><th class="num">mg/d</th></tr></thead><tbody>'+rows.map(function(r,j){ return '<tr><td>'+(j+1)+'</td><td class="num">'+r[0]+'</td><td class="num">'+fmt(r[1])+'</td></tr>'; }).join("")+'</tbody></table><p class="hint">Dauer: ca. '+Math.round((rows.length-1)*iv/7)+' Wochen.</p>';
    }
    $("#bz-s",el).onchange=calc; $("#bz-d",el).oninput=calc;
    ["#bz-st","#bz-p","#bz-i","#bz-m"].forEach(function(s){ $(s,el).oninput=function(){ if(s==="#bz-st") touched=true; plan(); }; });
    calc();
  },
  ciwa:function(el){
    var v = CIWA.map(function(){ return 0; });
    el.innerHTML = '<div class="card" style="background:var(--surface-2);position:sticky;top:56px;z-index:1"><div class="band"><div class="score" id="cw-s">0</div><div><div id="cw-b" class="pill g">leicht</div><div class="hint">von 67 Punkten</div></div></div></div>'+
      CIWA.map(function(it,i){ var b=""; for(var k=0;k<=it[1];k++) b+='<button data-i="'+i+'" data-v="'+k+'" aria-pressed="'+(k===0)+'">'+k+'</button>'; return '<div class="item"><div class="q">'+(i+1)+'. '+esc(it[0])+'</div><div class="scale num" style="--n:'+(it[1]+1)+'">'+b+'</div><div class="hint">'+esc(it[2])+'</div></div>'; }).join("")+
      '<p class="hint">Typisch: unter 8–10 meist keine Medikation; 8/10–15 symptomgetriggert behandeln; über 15 schwer, Anfall- und Delirrisiko. Schwelle nach Hausprotokoll. Setzt kommunikationsfähige Patienten voraus; bei Delir nicht anwendbar. In DE auch AESB gebräuchlich.</p>';
    el.onclick = function(e){ var b=e.target.closest("button[data-i]"); if(!b) return; var i=+b.dataset.i; v[i]=+b.dataset.v; $$('button[data-i="'+i+'"]',el).forEach(function(x){ x.setAttribute("aria-pressed", x===b); }); upd(); };
    function upd(){ var s=v.reduce(function(a,b){return a+b;},0); $("#cw-s",el).textContent=s; var bd=$("#cw-b",el); if(s<8){ bd.className="pill g"; bd.textContent="leicht"; } else if(s<=15){ bd.className="pill y"; bd.textContent="mittel – behandeln"; } else { bd.className="pill r"; bd.textContent=(s>=20?"schwer – hohes Risiko":"schwer"); } }
  },
  cows:function(el){
    var v = COWS.map(function(){ return 0; });
    el.innerHTML = '<div class="card" style="background:var(--surface-2);position:sticky;top:56px;z-index:1"><div class="band"><div class="score" id="co-s">0</div><div><div id="co-b" class="pill n">kein Entzug</div><div class="hint" id="co-h">Buprenorphin-Einstieg meist ab 8–12</div></div></div></div>'+
      COWS.map(function(it,i){ return '<div class="item"><div class="q">'+(i+1)+'. '+esc(it[0])+'</div><div class="scale">'+it[1].map(function(o,j){ return '<button data-i="'+i+'" data-v="'+o[0]+'" aria-pressed="'+(j===0)+'" style="min-width:auto;padding:0 10px">'+o[0]+' · '+esc(o[1])+'</button>'; }).join("")+'</div></div>'; }).join("")+
      '<p class="hint">5–12 leicht · 13–24 mäßig · 25–36 mittelschwer · über 36 schwer (Wesson & Ling 2003). Fentanyl: Entzug kann verzögert und atypisch sein.</p>';
    el.onclick = function(e){ var b=e.target.closest("button[data-i]"); if(!b) return; var i=+b.dataset.i; v[i]=+b.dataset.v; $$('button[data-i="'+i+'"]',el).forEach(function(x){ x.setAttribute("aria-pressed", x===b); }); upd(); };
    function upd(){ var s=v.reduce(function(a,b){return a+b;},0); $("#co-s",el).textContent=s; var bd=$("#co-b",el), h=$("#co-h",el);
      if(s<5){ bd.className="pill n"; bd.textContent="kein Entzug"; } else if(s<=12){ bd.className="pill y"; bd.textContent="leicht"; } else if(s<=24){ bd.className="pill y"; bd.textContent="mäßig"; } else if(s<=36){ bd.className="pill r"; bd.textContent="mittelschwer"; } else { bd.className="pill r"; bd.textContent="schwer"; }
      h.textContent = s>=8 ? "Buprenorphin-Einstieg möglich (2–4 mg s. l.), wenn Score ≥ Hausschwelle" : "Für Buprenorphin noch zu früh: ausgelöster Entzug möglich"; }
  },
  ap:function(el){
    var rows = [[0,10]];
    function draw(){
      el.innerHTML = rows.map(function(r,i){ return '<div class="grid2" style="align-items:end"><div class="field"><label for="ap-s'+i+'">Antipsychotikum</label><select id="ap-s'+i+'" data-r="'+i+'">'+APDDD.map(function(a,j){ return '<option value="'+j+'"'+(j===r[0]?" selected":"")+'>'+a[0]+' (DDD '+fmt(a[1],1)+' mg)</option>'; }).join("")+'</select></div><div class="field"><label for="ap-d'+i+'">mg/d</label><input id="ap-d'+i+'" data-d="'+i+'" inputmode="decimal" value="'+r[1]+'"></div></div>'; }).join("")+
        '<div style="display:flex;gap:8px;margin:6px 0"><button class="btn ghost" id="ap-add">+ Weiteres AP</button>'+(rows.length>1?'<button class="btn ghost" id="ap-rm">Letztes entfernen</button>':'')+'</div>'+
        '<div class="card" style="background:var(--surface-2)"><div class="eyebrow">Summe</div><div class="score" id="ap-r">–</div><div class="hint" id="ap-h"></div></div>'+
        '<p class="hint">Berechnung über WHO Defined Daily Dose: Vielfaches der DDD, umgerechnet in Olanzapin-mg (DDD 10). DDD sind Verbrauchsmaße, keine Äquipotenzdosen; bei niederpotenten Substanzen (z. B. Quetiapin) ungenau. Für Studien besser Leucht et al. 2016 (Olanzapin-Äquivalente).</p>';
      el.onchange = el.oninput = function(e){
        var t=e.target; if(t.dataset.r!=null) rows[+t.dataset.r][0]=+t.value; if(t.dataset.d!=null) rows[+t.dataset.d][1]=num(t.value); upd();
      };
      $("#ap-add",el).onclick=function(){ rows.push([3,100]); draw(); };
      var rm=$("#ap-rm",el); if(rm) rm.onclick=function(){ rows.pop(); draw(); };
      upd();
    }
    function upd(){ var ddd = rows.reduce(function(s,r){ var x=r[1]/APDDD[r[0]][1]; return s+(isFinite(x)?x:0); },0);
      $("#ap-r",el).textContent = fmt(ddd*10)+" mg Olanzapin-Äq."; $("#ap-h",el).textContent = fmt(ddd,2)+" × DDD"+(ddd>1.5?" · über 1,5 DDD: Hochdosisbereich, Nutzen und Nebenwirkungen prüfen":""); }
    draw();
  },
  qtc:function(el){
    el.innerHTML = '<div class="grid2"><div class="field"><label for="qt-q">QT (ms)</label><input id="qt-q" inputmode="numeric" value="420"></div><div class="field"><label for="qt-h">Herzfrequenz (/min)</label><input id="qt-h" inputmode="numeric" value="85"></div></div>'+
      '<div class="grid2"><div class="card" style="background:var(--surface-2)"><div class="eyebrow">Fridericia</div><div class="score" id="qt-f" style="font-size:32px">–</div></div><div class="card" style="background:var(--surface-2)"><div class="eyebrow">Bazett</div><div class="score" id="qt-b" style="font-size:32px">–</div></div></div><div id="qt-i"></div>'+
      '<p class="hint">Fridericia ist bei Frequenzen über 90 oder unter 60/min genauer; Bazett überschätzt bei Tachykardie. Verlängert: Männer über 450, Frauen über 460–470 ms. Ab 500 ms oder Anstieg über 60 ms deutlich erhöhtes Torsade-Risiko.</p>';
    function upd(){ var q=num($("#qt-q",el).value), hr=num($("#qt-h",el).value), rr=60/hr;
      var f=q/Math.cbrt(rr), b=q/Math.sqrt(rr);
      $("#qt-f",el).textContent = isFinite(f)?Math.round(f)+" ms":"–"; $("#qt-b",el).textContent = isFinite(b)?Math.round(b)+" ms":"–";
      var x=$("#qt-i",el); if(!isFinite(f)){ x.innerHTML=""; return; }
      x.innerHTML = f>=500 ? '<span class="pill r"><span class="dot r"></span>≥ 500 ms: QT-verlängernde Mittel absetzen oder vermeiden, Elektrolyte, Monitoring</span>' : f>=460 ? '<span class="pill y"><span class="dot y"></span>Grenzwertig bis verlängert: QT-Last minimieren, Kalium und Magnesium</span>' : '<span class="pill g"><span class="dot g"></span>Im Normbereich</span>'; }
    $("#qt-q",el).oninput=upd; $("#qt-h",el).oninput=upd; upd();
  }
};
function mountCalcs(root){
  $$("details[data-calc]",root).forEach(function(d){
    var id = d.dataset.calc, box = $("#calc-"+id, d);
    if(d.open){ CALC_MOUNT[id](box); box.dataset.m="1"; }
    d.addEventListener("toggle", function(){ if(d.open){ st.openCalc=id; if(!box.dataset.m){ CALC_MOUNT[id](box); box.dataset.m="1"; } } });
  });
}

/* ---------- Offline-Kopie ---------- */
function buildOffline(){
  var style = $("#pk-style") ? $("#pk-style").outerHTML : "";
  var scripts = $$("script[data-app]").map(function(s){ return '<script data-app="1">'+s.textContent+'<\/script>'; }).join("\n");
  return '<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>Psychopharmaka-Kompass v3.3</title>'+style+'</head><body><div id="app"></div>'+scripts+'</body></html>';
}
function saveOffline(){
  if(!window.claude || !window.claude.use){ toast("Du nutzt bereits die Offline-Kopie."); return; }
  window.claude.use("downloads").then(function(dl){
    if(!dl){ toast("Speichern ist in dieser Ansicht nicht verfügbar."); return; }
    return dl.save({filename:"Psychopharmaka-Kompass_v3.6_2026-10-09_offline.html", data:buildOffline()}).then(function(r){ if(r.status==="saved") toast("Offline-Kopie gespeichert"); }, function(e){ if(e.code!=="declined") toast("Nicht gespeichert: "+e.code); });
  });
}

/* ---------- Ereignisse ---------- */
function bind(){
  var q = $("#q"), qclr = $("#qclr"), timer=null;
  q.addEventListener("input", function(){
    st.q = q.value; qclr.hidden = !st.q;
    var p = parseQuery(st.q); st.det = p.det; st.undet = st.undet.filter(function(k){ return p.det.indexOf(k)>=0; });
    if(st.tab!=="suche"){ st.tab="suche"; renderTabs(); }
    clearTimeout(timer); timer = setTimeout(function(){ renderCtx(); renderMain(); }, 90);
  });
  q.addEventListener("keydown", function(e){ if(e.key==="Enter"){ var r=search(st.q).res; if(r.length===1){ openCard(r[0].e.type, r[0].e.id); } q.blur(); } });
  qclr.onclick = function(){ q.value=""; st.q=""; st.det=[]; st.undet=[]; qclr.hidden=true; renderCtx(); renderMain(); q.focus(); };
  $("#learnbtn").onclick = function(){ st.learn=!st.learn; LS.set("learn",st.learn); this.setAttribute("aria-pressed",st.learn); renderSheet(); };
  $("#menubtn").onclick = function(e){ e.stopPropagation(); st.menu=!st.menu; this.setAttribute("aria-expanded",st.menu);
    $("#menu").innerHTML = st.menu ? '<div class="menu"><button data-m="off">Offline-Kopie speichern</button><button data-m="info">Hinweise und Quellen</button><button data-m="ctx">Kontextfilter zurücksetzen</button><button data-m="hist">Verlauf löschen</button></div>' : ""; };
  document.addEventListener("click", function(e){
    var t = e.target;
    var m = t.closest("[data-m]");
    if(m){ var a=m.dataset.m; st.menu=false; $("#menu").innerHTML=""; if(a==="off") saveOffline(); if(a==="info") openCard("info","info"); if(a==="ctx"){ st.ctx=[]; st.undet=st.det.slice(); LS.set("ctx",st.ctx); renderCtx(); renderMain(); } if(a==="hist"){ st.hist=[]; LS.set("hist",[]); renderMain(); } return; }
    if(st.menu && !t.closest(".menu")){ st.menu=false; $("#menu").innerHTML=""; }
    var ac = t.closest("[data-actx]");
    if(ac){ var top0=st.stack[st.stack.length-1], sa=algState(top0.id), k0=ac.dataset.actx; if(sa.ctx.indexOf(k0)>=0) sa.ctx=sa.ctx.filter(function(x){ return x!==k0; }); else sa.ctx.push(k0); saveAlg(); rerenderSheetKeep(); return; }
    var aq = t.closest("[data-aq]");
    if(aq){ var top1=st.stack[st.stack.length-1], sb=algState(top1.id), qi=aq.dataset.aq, ai=+aq.dataset.ai; if(sb.ans[qi]===ai) delete sb.ans[qi]; else sb.ans[qi]=ai; delete QEDIT[top1.id+":"+qi]; saveAlg(); rerenderSheetKeep(); return; }
    var qed = t.closest("[data-qedit]"); if(qed){ QEDIT[qed.dataset.qedit] = true; rerenderSheetKeep(); return; }
    var pex = $("#pexp"); if(pex && !pex.hidden && (!t.closest("#pexp") || t.closest("[data-open]")) && !t.closest("[data-pc]")) pex.hidden = true;
    if(t.closest("[data-pexp-x]")){ hideExplain(); return; }
    var fbk = t.closest("[data-fbkind]"); if(fbk){ $$("[data-fbkind]", fbk.parentNode).forEach(function(b){ b.setAttribute("aria-pressed", b===fbk); }); return; }
    if(t.closest("[data-fbsend]")){ var fbx = t.closest(".fb-b"), txt = $(".fb-t", fbx).value.trim(), stl = $(".fb-st", fbx);
      if(!txt){ stl.textContent = "Bitte kurz beschreiben, was nicht stimmt."; $(".fb-t", fbx).focus(); return; }
      var kd = $('[data-fbkind][aria-pressed="true"]', fbx); stl.textContent = "…";
      FB.send({key:fbx.dataset.fbkey, title:fbx.dataset.fbtitle, kind:kd?kd.dataset.fbkind:"fehler", text:txt.slice(0,2000), src:$(".fb-q", fbx).value.trim().slice(0,300)}).then(function(m){ stl.textContent = m; $(".fb-t", fbx).value = ""; $(".fb-q", fbx).value = ""; });
      return; }
    var pvb = t.closest("[data-pvote]");
    if(pvb){ var pvw = pvb.closest("[data-pv]"), pp = pvw.dataset.pv.split("|"), cc = colByKey(pp[1]);
      FB.send({key:"prof:"+pp[0]+":"+pp[1], title:D[pp[0]].n+" · "+(cc?cc.t:pp[1]), kind:"profil", vote:pvb.dataset.pvote, value:pv(pp[0],pp[1])}).then(function(m){ pvw.innerHTML = '<span class="pvote-done">'+(pvb.dataset.pvote==="ok"?"Als stimmig vermerkt.":"Gemeldet.")+' '+esc(m.split(" – ")[0])+'</span>'; });
      return; }
    var pcc = t.closest("[data-pc]");
    if(pcc){ var pcp = pcc.dataset.pc.split("|"); showExplain(pcp[0], pcp[1]); return; }
    var dvb = t.closest("[data-dview]"); if(dvb){ st.drugView = dvb.dataset.dview; LS.set("dview", st.drugView); renderMain(); return; }
    var clb = t.closest("[data-cls]");
    if(clb){ st.tab="drug"; st.drugView="cls"; LS.set("tab",st.tab); LS.set("dview","cls"); if(st.stack.length) navReset(); st.stack=[]; renderSheet(); renderTabs(); renderMain(); var cid = "cls-"+clb.dataset.cls; function cgo(){ var ce = document.getElementById(cid); if(ce){ try{ window.scrollTo(0, ce.getBoundingClientRect().top + window.scrollY - (($("#top")||{}).offsetHeight||0) - 8); }catch(_){} } } cgo(); setTimeout(cgo, 120); setTimeout(cgo, 400); return; }
    var qib = t.closest("[data-qi]");
    if(qib){ var qk=qib.dataset.qi, box=qib.closest(".aq"); QOPEN[qk]=!QOPEN[qk]; if(box) box.classList.toggle("qopen", QOPEN[qk]); qib.setAttribute("aria-expanded", !!QOPEN[qk]); return; }
    var pg = t.closest("[data-pgrp]"); if(pg){ PST.grp=pg.dataset.pgrp; savePST(); profRefresh(); return; }
    var pps = t.closest("[data-pset]"); if(pps){ PST.set=pps.dataset.pset; savePST(); profRefresh(); return; }
    var pfp = t.closest("[data-pfp]");
    if(pfp){ var f=pfp.dataset.pfp.split(":"), had=PST.f.some(function(x){ return x[0]===f[0]&&x[1]===f[1]; }); PST.f=PST.f.filter(function(x){ return x[0]!==f[0]; }); if(!had) PST.f.push(f); savePST(); profRefresh(); return; }
    var pfd = t.closest("[data-pfdel]"); if(pfd){ var f2=pfd.dataset.pfdel.split(":"); PST.f=PST.f.filter(function(x){ return !(x[0]===f2[0]&&x[1]===f2[1]); }); savePST(); profRefresh(); return; }
    if(t.closest("#pfadd")){ var fk=$("#pfk").value, fo=$("#pfo").value; PST.more=true; if(fk){ PST.f=PST.f.filter(function(x){ return x[0]!==fk; }); PST.f.push([fk,fo]); savePST(); profRefresh(); } return; }
    var psb = t.closest("[data-psort]");
    if(psb){ var sk=psb.dataset.psort; if(!sk){ PST.sk=""; } else if(PST.sk===sk){ if(PST.sd<0) PST.sd=1; else { PST.sk=""; PST.sd=-1; } } else { PST.sk=sk; PST.sd=-1; } savePST(); profRefresh(); return; }
    var pcm = t.closest("[data-pcmp]");
    if(pcm){ PST.q = D[pcm.dataset.pcmp].n+", "; PST.f=[]; PST.grp="Alle"; st.tab="drug"; st.drugView="prof"; LS.set("dview","prof"); LS.set("tab",st.tab); if(st.stack.length) navReset(); st.stack=[]; renderSheet(); renderTabs(); renderMain(); try{ window.scrollTo(0,0); }catch(_){} var pq=$("#pq"); if(pq){ pq.focus(); var L=pq.value.length; try{ pq.setSelectionRange(L,L); }catch(_){} } return; }
    var ar = t.closest("[data-areset]");
    if(ar){ ALGST[ar.dataset.areset] = null; algState(ar.dataset.areset); saveAlg(); rerenderSheetKeep(); return; }
    var c = t.closest("[data-ctx]");
    if(c){ var k=c.dataset.ctx;
      if(k==="__clear"){ st.ctx=[]; st.undet=st.det.slice(); }
      else { var on = activeCtx().indexOf(k)>=0;
        if(on){ st.ctx=st.ctx.filter(function(x){ return x!==k; }); if(st.det.indexOf(k)>=0 && st.undet.indexOf(k)<0) st.undet.push(k); }
        else { st.ctx.push(k); st.undet=st.undet.filter(function(x){ return x!==k; }); } }
      LS.set("ctx",st.ctx); renderCtx(); renderMain(); if(st.stack.length) renderSheet(); return; }
    var tb = t.closest("[data-tab]");
    if(tb){ hideExplain(); st.tab=tb.dataset.tab; LS.set("tab",st.tab); if(st.stack.length) navReset(); st.stack=[]; renderSheet(); renderTabs(); renderMain(); try{ window.scrollTo(0,0); }catch(_){} return; }
    var del = t.closest("[data-med-del]");
    if(del){ e.stopPropagation(); var id=del.dataset.medDel; st.meds=st.meds.filter(function(x){ return x!==id; }); st.medsExample=false; LS.set("meds",st.meds); renderMain(); return; }
    var mo = t.closest("[data-med-open]"); if(mo){ openCard("drug", mo.dataset.medOpen); return; }
    var jp = t.closest("[data-jump]");
    if(jp){ var tgt = document.getElementById(jp.dataset.jump); if(tgt){ var dt = tgt.nextElementSibling; if(dt && dt.tagName==="DETAILS") dt.open = true; var sh=$(".sheet"), bar=$(".sheet-bar"); var jbar=$(".jump"); sh.scrollTo({top: tgt.getBoundingClientRect().top - sh.getBoundingClientRect().top + sh.scrollTop - (bar?bar.offsetHeight:0) - (jbar?jbar.offsetHeight:0) - 6, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"}); } return; }
    var op = t.closest("[data-open]");
    if(op){ var p=op.dataset.open.split(":"); openCard(p[0],p[1]); return; }
    if(t.closest("#back")){ navBack(); return; }
    if(t.closest("#favbtn")){ var top=st.stack[st.stack.length-1], key=top.type+":"+top.id; if(st.fav.indexOf(key)>=0) st.fav=st.fav.filter(function(x){ return x!==key; }); else st.fav.unshift(key); LS.set("fav",st.fav); renderSheet(); return; }
    var am = t.closest("[data-add-med]");
    if(am){ var mid=am.dataset.addMed; if(st.medsExample){ st.meds=[]; st.medsExample=false; } if(st.meds.indexOf(mid)<0) st.meds.push(mid); LS.set("meds",st.meds); toast(D[mid].n+" im Interaktions-Check ("+st.meds.length+")"); return; }
    if(t.closest("#medclear")){ st.meds=[]; st.medsExample=false; LS.set("meds",[]); renderMain(); return; }
    var sg = t.closest("[data-sugg]");
    if(sg){ var sid=sg.dataset.sugg; if(st.medsExample){ st.meds=[]; st.medsExample=false; } if(st.meds.indexOf(sid)<0) st.meds.push(sid); st.medQ=""; LS.set("meds",st.meds); renderMain(); var mq=$("#medq"); if(mq) mq.focus(); return; }
    var gr = t.closest("[data-group]"); if(gr){ st.drugGroup=gr.dataset.group; renderMain(); return; }
    var tier = t.closest("[data-tier]"); if(tier){ st.aiTier=tier.dataset.tier; LS.set("aiTier",st.aiTier); $$("[data-tier]").forEach(function(b){ b.setAttribute("aria-pressed", b.dataset.tier===st.aiTier); }); return; }
    var go = t.closest("[data-ai-go]");
    if(go){ var slot=go.dataset.aiGo;
      aiRun(slot, function(){
        if(slot==="s"){ return search(st.q).res.filter(function(x){ return x.e.type!=="calc"; }).slice(0,4).map(function(x){ return cardText(x.e.type,x.e.id); }); }
        if(slot==="i"){ return st.meds.map(function(id){ return cardText("drug",id); }).concat(["BEFUNDE DES INTERAKTIONS-CHECKS: "+interactions(st.meds,activeCtx()).map(function(f){ return f.sev+": "+f.title+" ("+f.drugs.join("+")+") "+f.text; }).join(" | ")]); }
        var top=st.stack[st.stack.length-1]; return [cardText(top.type,top.id)];
      }); return; }
    if(t.closest("[data-ai-stop]")){ if(AI.ctl) AI.ctl.abort(); return; }
    var cp = t.closest("[data-copy]");
    if(cp){ var src=$("#"+cp.dataset.copy); var txt=src?(src.innerText||src.textContent):""; if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(txt).then(function(){ toast("Kopiert"); },function(){ selectText(src); }); } else selectText(src); return; }
  });
  document.addEventListener("input", function(e){
    if(e.target.id==="medq"){ st.medQ=e.target.value; var box=$("#medsugg"); var qq=fold(st.medQ.trim());
      if(!qq){ box.innerHTML=""; return; }
      var hits = Object.keys(D).filter(function(id){ var d=D[id]; if(st.meds.indexOf(id)>=0) return false; return fold(d.n).indexOf(qq)>=0 || (d.b||[]).some(function(b){ return fold(b).indexOf(qq)===0; }) || (qq.length>=4 && lev(qq,fold(d.n).slice(0,qq.length))<=1); }).slice(0,7);
      box.innerHTML = hits.length ? '<div class="sugg">'+hits.map(function(id){ return '<button data-sugg="'+id+'">'+esc(D[id].n)+' <span class="note-soft">'+esc((D[id].b||[])[0]||"")+'</span></button>'; }).join("")+'</div>' : '<p class="hint">Nicht im Datenbestand. Etappe 3 ergänzt weitere Komedikation.</p>';
    }
    if(e.target.id==="pq"){ PST.q=e.target.value; clearTimeout(e.target._t); e.target._t=setTimeout(function(){ profRefresh(true); }, 120); }
    if(e.target.id==="note"){ var ta=e.target; clearTimeout(ta._t); $("#note-st").textContent="…"; ta._t=setTimeout(function(){ Notes.save(ta.dataset.key, ta.value).then(function(m){ var s=$("#note-st"); if(s) s.textContent=m; }); }, 900); }
  });
  document.addEventListener("change", function(e){
    if(e.target.id==="psort"){ PST.sk=e.target.value; PST.sd=-1; savePST(); profRefresh(); }
  });
  document.addEventListener("keydown", function(e){
    if(e.key==="Escape" && st.stack.length) navBack();
    var tag = (e.target.tagName||"").toLowerCase();
    if(e.key==="/" && tag!=="input" && tag!=="textarea" && !st.stack.length){ e.preventDefault(); var qi=$("#q"); qi.focus(); qi.select(); }
    if(e.key==="ArrowDown" && e.target.id==="q"){ var f=$("#main .row, #main .tile"); if(f){ e.preventDefault(); f.focus(); } }
    if(e.key==="Enter" && e.target.id && e.target.id.indexOf("aiq-")===0){ var b=$('[data-ai-go="'+e.target.id.slice(4)+'"]'); if(b) b.click(); }
    if(e.key==="Enter" && e.target.id==="medq"){ var f=$("[data-sugg]"); if(f) f.click(); }
  });
}
function selectText(el){ if(!el) return; var r=document.createRange(); r.selectNodeContents(el); var s=window.getSelection(); s.removeAllRanges(); s.addRange(r); toast("Markiert – jetzt kopieren"); }

/* ---------- Start ---------- */
window.PK = {search:search, interactions:interactions, parseQuery:parseQuery, splitSent:splitSent, fmt:fmtText, algEval:algEval, algById:algById};
shell(); renderCtx(); renderTabs(); renderMain(); renderPane(); bind();
(function(){ var top=$("#top"), last=0, tk=false;
  function brandH(){ var b=$(".brand",top); return b ? b.offsetHeight + parseFloat(getComputedStyle(b).marginBottom||0) : 0; }
  window.addEventListener("scroll", function(){ if(tk) return; tk=true; requestAnimationFrame(function(){ tk=false;
    var y = window.scrollY||0;
    if(y > last + 6 && y > 90){ top.style.setProperty("--hide", brandH()+"px"); top.classList.add("compact"); }
    else if(y < last - 6 || y < 40){ top.classList.remove("compact"); }
    last = y; }); }, {passive:true});
})();
Notes.init(); FB.init(); aiInit();
})();
