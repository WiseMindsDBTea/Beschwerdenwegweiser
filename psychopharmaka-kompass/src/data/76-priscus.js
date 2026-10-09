/* PRISCUS 2.0 (Mann NK, Mathes T, Sönnichsen A, et al. Dtsch Arztebl Int 2023;120:3–10, doi:10.3238/arztebl.m2022.0377).
   pim: Tabelle 2 (Kurzfassung) mit Bedingung (c) und Alternativen laut Expertenmeinung (alt); g = Zeile der Tabelle.
   non: eTabelle 3 (als Nicht-PIM bewertet). amb: eTabelle 4 (weder PIM noch Nicht-PIM).
   Zuordnung der Benzodiazepine zu den Wirkdauergruppen der Tabelle ist eigene Einordnung; alle drei Gruppen sind PIM.
   Nicht aufgeführte Wirkstoffe: in PRISCUS 2.0 nicht bewertet (keine Aussage). */
window.PRISCUS = (function(){
  var AD = "z. B. Citalopram, Mirtazapin", AP = "z. B. Risperidon < 6 Wochen", HY = "z. B. Melatonin, Mirtazapin", HYB = "z. B. Melatonin, Mirtazapin, Baldrian";
  function e(g, alt, c){ return {g:g, alt:alt||"", c:c||""}; }
  return {
    q: "PRISCUS 2.0 (Mann et al., Dtsch Arztebl Int 2023)",
    pim: {
      amitriptylin:e("Trizyklika (z. B. Amitriptylin)", AD), clomipramin:e("Trizyklika", AD), doxepin:e("Doxepin", AD), opipramol:e("Opipramol", AD),
      fluoxetin:e("Fluoxetin, Paroxetin, Fluvoxamin", AD), paroxetin:e("Fluoxetin, Paroxetin, Fluvoxamin", AD), fluvoxamin:e("Fluoxetin, Paroxetin, Fluvoxamin", AD),
      sertralin:e("Sertralin > 100 mg/d", "z. B. Sertralin < 100 mg/d", "> 100 mg/d"),
      tranylcypromin:e("Tranylcypromin, Moclobemid", AD), moclobemid:e("Tranylcypromin, Moclobemid", AD), bupropion:e("Bupropion", AD), agomelatin:e("Agomelatin", AD), johanniskraut:e("Johanniskraut", AD),
      methylphenidat:e("Psychostimulanzien: Methylphenidat", ""),
      levomepromazin:e("Levomepromazin, Perazin, Thioridazin, Chlorprothixen, Zuclopenthixol, Prothipendyl", AP), chlorprothixen:e("Levomepromazin, Perazin, Thioridazin, Chlorprothixen, Zuclopenthixol, Prothipendyl", AP),
      haloperidol:e("Fluphenazin, Perphenazin, Haloperidol, Benperidol, Bromperidol, Flupentixol, Fluspirilen, Pimozid", AP),
      ziprasidon:e("Ziprasidon, Clozapin, Olanzapin, Sulpirid, Amisulprid, Tiaprid, Aripiprazol, Sertindol, Paliperidon, Cariprazin", AP),
      clozapin:e("Ziprasidon, Clozapin, Olanzapin, Sulpirid, Amisulprid, Tiaprid, Aripiprazol, Sertindol, Paliperidon, Cariprazin", AP),
      olanzapin:e("Ziprasidon, Clozapin, Olanzapin, Sulpirid, Amisulprid, Tiaprid, Aripiprazol, Sertindol, Paliperidon, Cariprazin", AP),
      amisulprid:e("Ziprasidon, Clozapin, Olanzapin, Sulpirid, Amisulprid, Tiaprid, Aripiprazol, Sertindol, Paliperidon, Cariprazin", AP),
      aripiprazol:e("Ziprasidon, Clozapin, Olanzapin, Sulpirid, Amisulprid, Tiaprid, Aripiprazol, Sertindol, Paliperidon, Cariprazin", AP),
      paliperidon:e("Ziprasidon, Clozapin, Olanzapin, Sulpirid, Amisulprid, Tiaprid, Aripiprazol, Sertindol, Paliperidon, Cariprazin", AP),
      cariprazin:e("Ziprasidon, Clozapin, Olanzapin, Sulpirid, Amisulprid, Tiaprid, Aripiprazol, Sertindol, Paliperidon, Cariprazin", AP),
      melperon:e("Melperon > 100 mg/d, > 6 Wochen", "z. B. Melperon < 100 mg/d, < 6 Wochen", "> 100 mg/d, > 6 Wochen"),
      pipamperon:e("Pipamperon > 120 mg/d, > 6 Wochen", "z. B. Pipamperon < 120 mg/d, < 6 Wochen", "> 120 mg/d, > 6 Wochen"),
      quetiapin:e("Quetiapin > 100 mg/d, > 6 Wochen", "z. B. Quetiapin < 100 mg/d, < 6 Wochen", "> 100 mg/d, > 6 Wochen"),
      risperidon:e("Risperidon > 6 Wochen", "z. B. Risperidon < 6 Wochen", "> 6 Wochen"),
      hydroxyzin:e("Hydroxyzin", HY),
      diazepam:e("Lang wirksame Benzodiazepine (z. B. Diazepam)", HY), clonazepam:e("Lang wirksame Benzodiazepine (z. B. Diazepam)", HY),
      lorazepam:e("Lorazepam", HYB),
      oxazepam:e("Mittellang wirksame Benzodiazepine (z. B. Oxazepam)", HYB), lormetazepam:e("Mittellang wirksame Benzodiazepine (z. B. Oxazepam)", HYB), alprazolam:e("Mittellang wirksame Benzodiazepine (z. B. Oxazepam)", HYB),
      zopiclon:e("Zopiclon, Zolpidem", HYB), zolpidem:e("Zopiclon, Zolpidem", HYB),
      clomethiazol:e("Clomethiazol", HY), doxylamin:e("Doxylamin", HYB), promethazin:e("Promethazin", HYB),
      carbamazepin:e("Phenobarbital, Primidon, Phenytoin, Carbamazepin", "z. B. Lamotrigin, Valproat"),
      biperiden:e("Trihexyphenidyl, Biperiden, Procyclidin, Bornaprin", "z. B. Levodopa, Ropinirol"), amantadin:e("Amantadin", "z. B. Levodopa, Ropinirol"),
      methadon:e("Methadon, Levomethadon", "andere Opioide"), tramadol:e("Pethidin, Tapentadol, Tramadol", "z. B. Tilidin, andere Opioide"),
      codein:e("Dihydrocodein, Codein als Analgetikum oder Antitussivum", "als Antitussivum z. B. Phytopharmaka, Dextromethorphan"),
      clonidin:e("Methyldopa, Clonidin, Moxonidin", "z. B. ACE-Hemmer, andere Antihypertensiva"), propranolol:e("Pindolol, Propranolol, Sotalol", "andere (selektive Betablocker)"),
      baclofen:e("Methocarbamol, Orphenadrin, Baclofen, Tizanidin", "z. B. Paracetamol, Tilidin"), tizanidin:e("Methocarbamol, Orphenadrin, Baclofen, Tizanidin", "z. B. Paracetamol, Tilidin"),
      loperamid:e("Loperamid > 3 Tage, > 12 mg/d", "z. B. Loperamid < 3 Tage, < 12 mg/d, Racecadotril", "> 3 Tage, > 12 mg/d"),
      metoclopramid:e("Metoclopramid, Domperidon", "z. B. Setrone, pflanzliche Präparate"), domperidon:e("Metoclopramid, Domperidon", "z. B. Setrone, pflanzliche Präparate"),
      ciprofloxacin:e("Fluorchinolone", "je nach Antibiogramm"), theophyllin:e("Theophyllin, Aminophyllin", "inhalatives Salbutamol, LABA, LAMA, ICS"),
      omeprazol:e("Protonenpumpenhemmer > 8 Wochen", "PPI < 8 Wochen, ggf. Famotidin", "> 8 Wochen")
    },
    non: ["gabapentin","citalopram","escitalopram","mirtazapin","memantin","metamizol","phenprocoumon"],
    amb: ["pregabalin","lithium","trazodon","venlafaxin","duloxetin","amiodaron","triptane"]
  };
})();
