/* ACB-Skala, 2012 Update (Anticholinergic Cognitive Burden Scale). Quelle: Aging Brain Care, Indiana University Center
   for Aging Research; Copyright © 2008, 2012 Regenstrief Institute, Inc. Grundlage: Boustani et al., Aging Health
   2008;4(3):311–320. Nur Wirkstoffe, die auf dem Blatt namentlich stehen; Zuordnung der englischen Namen zu den
   Wirkstoff-IDs dieser App (Methotrimeprazine = Levomepromazin). Nicht gelistet = keine Aussage, nicht „0“.
   Score 1: In-vitro-Antagonismus am Muskarinrezeptor · 2: klinisch anticholinerge Wirkung belegt ·
   3: kann Delir auslösen (Literatur, Expertenmeinung oder Fachinformation). */
window.ACB = {
  q: "ACB-Skala 2012 (Aging Brain Care, Regenstrief Institute)",
  score: {
    amitriptylin:3, clomipramin:3, clozapin:3, doxepin:3, doxylamin:3, hydroxyzin:3, olanzapin:3, paroxetin:3, promethazin:3, quetiapin:3,
    amantadin:2, carbamazepin:2, levomepromazin:2,
    alprazolam:1, aripiprazol:1, bupropion:1, diazepam:1, fluvoxamin:1, haloperidol:1, paliperidon:1, risperidon:1, trazodon:1, venlafaxin:1,
    loperamid:1, codein:1, morphin:1, fentanyl:1, metoprolol:1, theophyllin:1
  },
  notAdded: ["duloxetin","gabapentin","tamoxifen"],
  crit: {1:"In-vitro-Antagonismus am Muskarinrezeptor", 2:"klinisch anticholinerge Wirkung belegt", 3:"kann Delir auslösen"},
  notes: ["Jede definitiv anticholinerge Substanz (Score 2–3) kann das Risiko kognitiver Beeinträchtigung über 6 Jahre um 46 % erhöhen (Campbell et al., Neurology 2010).",
          "Je Punkt ACB-Gesamtsumme: MMSE-Abfall um 0,33 Punkte über 2 Jahre und 26 % höheres Sterberisiko (Fox et al., J Am Geriatr Soc 2011)."]
};
(function(){ var S = window.PSRC = window.PSRC || {}, A = window.ACB, P = window.PROFM || {};
  Object.keys(A.score).forEach(function(id){ if(!P[id]) return; S[id] = S[id] || {}; var v = A.score[id]; S[id].AC = {v:v, q:A.q+": Score "+v+" – "+A.crit[v]}; });
  A.notAdded.forEach(function(id){ if(!P[id]) return; S[id] = S[id] || {}; S[id].AC = {v:0, q:A.q+": geprüft, nicht aufgenommen"}; });
})();
