/* CredibleMeds, Liste „Drugs to be avoided by congenital long QT patients“ (AZCERT; Stand 14.09.2026, erzeugt 09.10.2026).
   KR Known Risk of TdP · PR Possible Risk · CR Conditional Risk · SR Special Risk (angeborenes Long-QT-Syndrom).
   Nicht gelistet heißt laut CredibleMeds nicht „ohne Risiko“. Übertrag in die Punkteskala (KR 3 · PR 2 · CR 1 · SR 1)
   ist eigene Festlegung. */
window.CREDMEDS = {
  q: "CredibleMeds QTdrugs (Stand 14.09.2026)",
  lab: {KR:"Known Risk of TdP – bekanntes Torsade-Risiko", PR:"Possible Risk of TdP – verlängert QT, Torsade-Risiko unklar", CR:"Conditional Risk of TdP – Risiko unter Bedingungen (Überdosis, Hypokaliämie, Interaktion, Bradykardie)", SR:"Special Risk – bei angeborenem Long-QT-Syndrom"},
  pts: {KR:3, PR:2, CR:1, SR:1},
  cat: {
    citalopram:"KR", escitalopram:"KR", haloperidol:"KR", levomepromazin:"KR", chlorprothixen:"KR", donepezil:"KR", methadon:"KR",
    ciprofloxacin:"KR", clarithromycin:"KR", erythromycin:"KR", fluconazol:"KR", amiodaron:"KR", ondansetron:"KR", domperidon:"KR",
    venlafaxin:"PR", mirtazapin:"PR", opipramol:"PR", moclobemid:"PR", clozapin:"PR", paliperidon:"PR", aripiprazol:"PR", lurasidon:"PR", pipamperon:"PR", melperon:"PR",
    promethazin:"PR", lithium:"PR", atomoxetin:"PR", rivastigmin:"PR", buprenorphin:"PR", tetrabenazin:"PR", tramadol:"PR", ritonavir:"PR", tamoxifen:"PR", tizanidin:"PR",
    sertralin:"CR", fluoxetin:"CR", paroxetin:"CR", fluvoxamin:"CR", trazodon:"CR", amitriptylin:"CR", clomipramin:"CR", doxepin:"CR", quetiapin:"CR", olanzapin:"CR",
    risperidon:"CR", amisulprid:"CR", ziprasidon:"CR", hydroxyzin:"CR", galantamin:"CR", amantadin:"CR", metoclopramid:"CR", omeprazol:"CR", hct:"CR", loperamid:"CR",
    methylphenidat:"SR", lisdexamfetamin:"SR"
  }
};
(function(){ var S = window.PSRC = window.PSRC || {}, C = window.CREDMEDS, P = window.PROFM || {};
  Object.keys(C.cat).forEach(function(id){ if(!P[id]) return; var k = C.cat[id]; S[id] = S[id] || {}; S[id].QT = {v:C.pts[k], q:C.q+": "+k+" – "+C.lab[k]}; });
})();
