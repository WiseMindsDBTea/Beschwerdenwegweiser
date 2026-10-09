/* Situationskarten. Felder:
   id, a Bereich, t Titel, syn Suchbegriffe, kern Kurzkern, pre Erst prüfen,
   opts Optionen {d Wirkstoff-ID | t Titel, r Rolle (1, a, adj, r, int, nm), dos, why, ev 0–3, off},
   avoid Vermeiden {d|t, why}, lern Hintergrund, src Quellen.
   ev: 3 hoch (Leitlinie, mehrere RCTs) · 2 mittel · 1 niedrig (kleine Studien/Fallserien) · 0 Expertenkonsens.
   Evidenzstufen sind eigene Einschätzung bis zum Abgleich mit den Leitlinien-PDFs. */
var SIT = window.SIT = [];
function sit(o){ SIT.push(o); }

/* ============ SCHLAF ============ */
sit({id:"ins-primaer",a:"schlaf",t:"Insomnie ohne psychiatrische Grunderkrankung",
 syn:["einschlafstörung","durchschlafstörung","schlaflos","insomnie","schlafmittel","hypnotikum","schlafstörung primär"],
 kern:["KVT-I ist Therapie der ersten Wahl, auch vor jedem Hypnotikum","Hypnotika nur kurz: Z-Substanzen oder BZD ≤ 4 Wochen","Chronisch (≥ 3 Mo.): Daridorexant als Option","Sedierende Antidepressiva niedrig, wenn Sucht oder Hypnotika-KI","Antipsychotika (auch Quetiapin) nicht als Schlafmittel"],
 pre:["Schlafapnoe, RLS, Schmerz, Nykturie, Schichtarbeit","Koffein, Alkohol, Stimulanzien, aktivierende Medikation (SSRI morgens? Bupropion abends?)","Depression, Manie-Beginn, Angst, Sucht"],
 opts:[
  {t:"KVT-I (Schlafrestriktion, Stimuluskontrolle, kognitive Techniken)",r:"nm",why:"Langfristig wirksamer als Hypnotika, auch digital verfügbar (DiGA).",ev:3},
  {d:"zolpidem",r:"1",dos:"10 mg, ≥ 65 J. 5 mg",why:"Einschlafstörung, kurz wirksam, kaum Überhang.",ev:3},
  {d:"zopiclon",r:"1",dos:"7,5 mg, ≥ 65 J. 3,75 mg",why:"Wenn auch Durchschlafen betroffen.",ev:3},
  {d:"daridorexant",r:"a",dos:"50 mg",why:"Chronische Insomnie, kaum Toleranz; Durchschlafen besser belegt.",ev:2},
  {d:"trazodon",r:"a",dos:"25–100 mg",why:"Ohne Abhängigkeit; Evidenz für primäre Insomnie mäßig.",ev:1,off:true},
  {d:"doxepin",r:"a",dos:"3–25 mg",why:"Niedrigstdosis gut für Durchschlafen; anticholinerg ab höherer Dosis.",ev:2,off:true},
  {d:"mirtazapin",r:"a",dos:"7,5–15 mg",why:"Wenn Appetit- oder Gewichtsmangel; Gewichtszunahme beachten.",ev:1,off:true},
  {d:"melatonin",r:"a",dos:"2 mg retard",why:"Ab 55 J., mild, sehr gut verträglich.",ev:2}
 ],
 avoid:[{d:"quetiapin",why:"Keine ausreichende Evidenz, metabolische Risiken (S3 Insomnie rät ab [?])."},{d:"doxylamin",why:"Rasche Toleranz, anticholinerg."},{t:"BZD-Dauertherapie",why:"Toleranz, Abhängigkeit, Stürze."}],
 lern:"Hyperarousal-Modell: Insomnie wird durch konditionierte Erregung im Bett aufrechterhalten. KVT-I löst die Konditionierung, Hypnotika überdecken sie. Deshalb rezidiviert die Insomnie nach Hypnotika-Absetzen oft, nach KVT-I seltener.",
 src:"S3 Insomnie (DGSM) · FI"});

sit({id:"ins-depression",a:"schlaf",t:"Schlafstörung bei Depression",
 syn:["depression schlaf","frühes erwachen","durchschlafstörung depression","schlaf antidepressivum"],
 kern:["Grunderkrankung behandeln, Schlaf bessert sich oft mit","Sedierendes AD abends wählen oder zum SSRI ergänzen","Trazodon 25–100 mg oder Mirtazapin 7,5–15 mg als Zusatz üblich","Bei Suizidalität BZD kurzzeitig vertretbar (≤ 4 Wochen)","Aktivierende AD morgens geben"],
 pre:["Suizidalität: Mengen begrenzen, Doxepin und TZA meiden","Bipolare Depression? AD-Wahl und Schlafentzug anders"],
 opts:[
  {d:"mirtazapin",r:"1",dos:"15–45 mg z. N.",why:"Antidepressiv und schlafanstoßend in einem.",ev:3},
  {d:"trazodon",r:"1",dos:"25–100 mg Zusatz, 150–300 mg als AD",why:"Zusatz zu SSRI/SNRI, keine Gewichtszunahme.",ev:2,off:true},
  {t:"Agomelatin 25–50 mg",r:"a",dos:"z. N.",why:"Rhythmisierend; Leberwerte nach Schema.",ev:2},
  {d:"doxepin",r:"a",dos:"25–50 mg",why:"Wirksam, aber anticholinerg und toxisch in Überdosis.",ev:2},
  {d:"lorazepam",r:"r",dos:"0,5–1 mg z. N.",why:"Kurzzeitig bei starker Unruhe oder Suizidalität.",ev:2},
  {d:"zopiclon",r:"r",dos:"7,5 mg",why:"Kurzzeitig zur Überbrückung bis AD-Wirkung.",ev:2}
 ],
 avoid:[{t:"Bupropion oder Fluoxetin abends",why:"Aktivierend."},{d:"quetiapin",why:"Nur wenn ohnehin augmentiert wird (Prolong zugelassen), nicht als reines Schlafmittel."}],
 lern:"Antidepressiva unterdrücken meist den REM-Schlaf; sedierende Substanzen wirken über H1- und 5-HT2A-Blockade. Eine Kombination SSRI + Trazodon nutzt beides: Serotonin-Wiederaufnahmehemmung tagsüber, 5-HT2A-Blockade nachts.",
 src:"NVL Depression · S3 Insomnie · FI"});

sit({id:"ins-psychose",a:"schlaf",t:"Schlafstörung bei Psychose oder Manie",
 syn:["manie schlaf","psychose schlaf","schlaflos manisch","schizophrenie schlaf"],
 kern:["Manie: Schlaf ist Therapieziel, nicht Nebensache","Sedierendes AP abends bündeln (Olanzapin, Quetiapin)","Lorazepam kurzzeitig zusätzlich","Niedrigpotente AP als Zusatz (Pipamperon, Promethazin)","Schlafmangel kann Rezidiv ankündigen"],
 pre:["Substanzkonsum (Stimulanzien, Cannabis)","Akathisie als Ursache nächtlicher Unruhe"],
 opts:[
  {d:"olanzapin",r:"1",dos:"Abendgabe, 10–20 mg",why:"Antipsychotisch und stark sedierend.",ev:3},
  {d:"quetiapin",r:"1",dos:"Abendgabe in antipsychotischer Dosis",why:"Bipolar in allen Phasen zugelassen.",ev:3},
  {d:"lorazepam",r:"a",dos:"1–2,5 mg z. N.",why:"Kurzzeitig, besonders in der Manie.",ev:2},
  {d:"pipamperon",r:"a",dos:"40–80 mg z. N.",why:"Ohne Abhängigkeit, kaum anticholinerg.",ev:0},
  {d:"promethazin",r:"a",dos:"25–50 mg",why:"Ohne Abhängigkeit; anticholinerg.",ev:0},
  {d:"zopiclon",r:"r",dos:"7,5 mg",why:"Kurzzeitig.",ev:1}
 ],
 avoid:[{t:"Antidepressiva in der Manie",why:"Switch- und Destabilisierungsrisiko."}],
 lern:"In der Manie verstärkt Schlafmangel die Manie selbst (positiver Rückkopplungskreis). Schlaf herzustellen ist daher kausal wirksam, nicht nur symptomatisch.",
 src:"S3 Bipolar · S3 Schizophrenie · FI"});

sit({id:"ins-sucht",a:"schlaf",t:"Schlafstörung bei Sucht oder nach Entzug",
 syn:["schlaf sucht","schlaf nach entzug","schlaf alkohol","schlaf abhängig","schlaf ohne benzo"],
 kern:["Keine BZD und Z-Substanzen","Schlafstörung nach Alkoholentzug hält oft Wochen bis Monate an","Trazodon, Mirtazapin, Doxepin niedrig","Gabapentin bei Alkohol (off-label)","Quetiapin: Missbrauch möglich, zurückhaltend"],
 pre:["Restentzug? Score erheben","Craving und Rückfall: Schlafstörung ist Rückfallprädiktor"],
 opts:[
  {d:"trazodon",r:"1",dos:"50–100 mg",why:"Kein Abhängigkeitspotenzial.",ev:1,off:true},
  {d:"mirtazapin",r:"1",dos:"7,5–15 mg",why:"Kein Abhängigkeitspotenzial, Appetit ↑.",ev:1,off:true},
  {d:"gabapentin",r:"a",dos:"300–900 mg z. N.",why:"Bei Alkohol: Schlaf und Rückfall; nicht bei Opioidkonsum.",ev:2,off:true},
  {d:"doxepin",r:"a",dos:"10–50 mg",why:"DE: leichte Entzugssyndrome zugelassen [?].",ev:1},
  {d:"melatonin",r:"a",dos:"2 mg retard",why:"Mild, unbedenklich.",ev:1,off:true},
  {d:"pipamperon",r:"a",dos:"40 mg",why:"Ohne Abhängigkeit.",ev:0,off:true}
 ],
 avoid:[{t:"BZD, Z-Substanzen, Clomethiazol (außer im Entzug selbst)",why:"Suchtverlagerung."},{d:"pregabalin",why:"Missbrauch, besonders bei Opioiden."}],
 lern:"Chronischer Alkoholkonsum verschiebt das GABA-Glutamat-Gleichgewicht; die Normalisierung des Schlafs nach dem Entzug dauert oft Monate (protrahierter Entzug).",
 src:"S3 Alkohol · S3 Insomnie [?]"});

sit({id:"ins-alt",a:"schlaf",t:"Schlafstörung im Alter, bei Demenz oder Delir",
 syn:["schlaf alt","geriatrie schlaf","demenz schlaf","delir schlaf","nachtunruhe","sundowning"],
 kern:["Erst Ursachen: Schmerz, Nykturie, Delir, Medikamente","Tagesstruktur, Licht am Tag, keine Mittagsschlaf-Exzesse","Melperon oder Pipamperon niedrig; Melatonin","Trazodon oder Mirtazapin niedrig","Keine Anticholinergika, BZD nur ausnahmsweise"],
 pre:["Delir ausschließen (CAM)","Anticholinerge Last der Medikation","Parkinson oder Lewy-Körper? Dann keine klassischen AP"],
 opts:[
  {d:"melperon",r:"1",dos:"25–50 mg abends",why:"Für Ältere zugelassen; 2D6-Interaktionen prüfen.",ev:0},
  {d:"pipamperon",r:"1",dos:"20–40 mg abends",why:"Für Ältere zugelassen, kaum anticholinerg.",ev:0},
  {d:"melatonin",r:"1",dos:"2 mg retard",why:"Zugelassen ab 55 J., nebenwirkungsarm.",ev:2},
  {d:"trazodon",r:"a",dos:"25–50 mg",why:"Orthostase beachten.",ev:1,off:true},
  {d:"mirtazapin",r:"a",dos:"7,5–15 mg",why:"Bei Depression oder Appetitmangel.",ev:1,off:true},
  {d:"quetiapin",r:"a",dos:"12,5–25 mg",why:"Nur bei Parkinson oder Lewy-Körper; Demenz-Warnhinweis.",ev:1,off:true},
  {d:"zolpidem",r:"r",dos:"5 mg",why:"Ausnahmsweise, Sturzrisiko.",ev:1}
 ],
 avoid:[{d:"doxylamin",why:"Anticholinerg, Delir."},{d:"promethazin",why:"Anticholinerg."},{d:"doxepin",why:"Anticholinerg in üblicher Dosis."},{d:"diazepam",why:"Kumulation, Stürze."}],
 lern:"Mit dem Alter nehmen Tiefschlaf und Melatoninproduktion ab, zirkadiane Amplitude flacht ab. Anticholinergika verschlechtern Gedächtnis und erhöhen Delir- und Sturzrisiko (PRISCUS 2.0).",
 src:"PRISCUS 2.0 · S3 Demenzen · FI"});

sit({id:"ins-trauma",a:"schlaf",t:"Schlafstörung bei PTBS, BPS oder Albträumen",
 syn:["albträume","alptraum","ptbs schlaf","trauma schlaf","borderline schlaf","bps schlaf","nachtmahr"],
 kern:["Imagery Rehearsal Therapy bei Albträumen zuerst","Keine BZD (Dissoziation, Abhängigkeit, Lernhemmung)","Prazosin bei PTBS-Albträumen: Evidenz uneinheitlich, in DE kaum verfügbar [?]","Trazodon, Mirtazapin, niedrigpotente AP als Bedarf","Schlafhygiene als Skill im DBT-Rahmen"],
 pre:["Substanzkonsum, Selbstverletzung nachts","Dissoziation nachts vs. Albtraum"],
 opts:[
  {t:"Imagery Rehearsal Therapy (IRT)",r:"nm",why:"Wirksamste Einzelmaßnahme bei Albträumen.",ev:3},
  {d:"trazodon",r:"1",dos:"25–100 mg",why:"Ohne Abhängigkeit.",ev:1,off:true},
  {d:"mirtazapin",r:"1",dos:"7,5–15 mg",why:"Ohne Abhängigkeit; Gewicht.",ev:1,off:true},
  {d:"pipamperon",r:"a",dos:"20–40 mg",why:"Ohne Abhängigkeit.",ev:0,off:true},
  {d:"promethazin",r:"a",dos:"25–50 mg",why:"Ohne Abhängigkeit; anticholinerg.",ev:0,off:true},
  {t:"Prazosin 1–10 mg z. N.",r:"int",why:"Albträume bei PTBS; große RCT negativ, kleinere positiv; Orthostase.",ev:1,off:true},
  {d:"quetiapin",r:"r",dos:"25–50 mg",why:"Wenn andere versagen; Gewicht, Missbrauch.",ev:1,off:true}
 ],
 avoid:[{t:"Benzodiazepine",why:"Bei PTBS ohne Nutzen, bei BPS Enthemmung und Abhängigkeit."}],
 lern:"Noradrenerge Überaktivität im REM-Schlaf gilt als Mechanismus traumabezogener Albträume; daher der Ansatz mit α1-Blockern. IRT verändert das Traumskript und wirkt unabhängig davon.",
 src:"S3 PTBS · S3 BPS · VA/DoD [?]"});

sit({id:"ins-schwanger",a:"schlaf",t:"Schlafstörung in Schwangerschaft oder Stillzeit",
 syn:["schwanger schlaf","stillen schlaf","schwangerschaft schlafmittel"],
 kern:["Nicht-medikamentös zuerst","Doxylamin oder Diphenhydramin gelten als Mittel der Wahl (Embryotox) [?]","Zolpidem oder Zopiclon ausnahmsweise [?]","Promethazin als Alternative","Embryotox im Einzelfall abfragen"],
 pre:["Restless Legs (Eisenmangel!) in der Schwangerschaft häufig"],
 opts:[
  {d:"doxylamin",r:"1",dos:"25 mg",why:"Gut untersucht [?].",ev:1},
  {d:"promethazin",r:"a",dos:"25 mg",why:"Gut untersucht [?].",ev:1},
  {d:"zolpidem",r:"a",dos:"5–10 mg",why:"Ausnahmsweise; Stillzeit gering übergehend.",ev:1},
  {d:"mirtazapin",r:"a",dos:"7,5–15 mg",why:"Bei begleitender Depression.",ev:1}
 ],
 avoid:[{d:"daridorexant",why:"Keine Daten."},{d:"pregabalin",why:"Fehlbildungsrisiko."}],
 lern:"Aussagen hier sind Kurzfassungen; die aktuelle Bewertung steht bei Embryotox (embryotox.de).",
 src:"Embryotox [?]"});

/* ============ ANSPANNUNG / AGITATION ============ */
sit({id:"sp-bps",a:"spann",t:"Anspannung bei Borderline-Persönlichkeitsstörung (DBT)",
 syn:["borderline","bps","anspannung","hochanspannung","druck","dbt","bedarf borderline","skills","emotionale instabilität","eips"],
 kern:["Skills zuerst (Stresstoleranz nach Skills-Plan); Medikament ergänzt, ersetzt nicht","Keine Benzodiazepine: Enthemmung, Dissoziation, Abhängigkeit, Lernhemmung","Bedarf: Promethazin, Pipamperon, Quetiapin niedrig, Hydroxyzin","Keine zugelassene Dauermedikation; S3: Pharmakotherapie nicht primär","Bedarf zeitlich begrenzen, Wirkung mit der Patientin auswerten"],
 pre:["Komorbidität (Depression, PTBS, ADHS, Sucht) gezielt behandeln","Suizidalität und Mengen bei Entlassung","Dissoziation: Sedierung kann sie verstärken"],
 opts:[
  {t:"Skills nach Hochanspannungs-Plan, dann Bedarf",r:"nm",why:"Bedarf erst nach Skill-Versuch stärkt Selbstwirksamkeit.",ev:2},
  {d:"promethazin",r:"1",dos:"25–50 mg",why:"Schnell, ohne Abhängigkeit; anticholinerg.",ev:0,off:true},
  {d:"pipamperon",r:"1",dos:"20–40 mg",why:"Ohne Abhängigkeit, kaum anticholinerg.",ev:0,off:true},
  {d:"quetiapin",r:"a",dos:"25–50 mg Bedarf; 150–300 mg Dauer",why:"Kleine RCT positiv für Dauergabe; Gewicht, Missbrauch.",ev:1,off:true},
  {d:"hydroxyzin",r:"a",dos:"25–50 mg",why:"Ohne Abhängigkeit; QT beachten.",ev:0,off:true},
  {t:"Aripiprazol 5–15 mg (Dauer)",r:"a",why:"Kleine RCT positiv für Impulsivität und Ärger.",ev:1,off:true},
  {t:"Clozapin",r:"r",why:"Schwerste Verläufe mit anhaltender Selbstgefährdung, Fallserien.",ev:1,off:true}
 ],
 avoid:[{t:"Benzodiazepine",why:"Enthemmung, Abhängigkeit, Hemmung des Skill-Lernens."},{t:"Lamotrigin",why:"Großes RCT (LABILE) ohne Wirkung."},{t:"Polypharmazie",why:"Häufig, ohne Nutzenbeleg."}],
 lern:"In der DBT gilt Anspannung als Zustand, der mit Skills reguliert werden kann. Ein Bedarfsmittel ohne Skill-Versuch verhindert das Lernen, dass Anspannung auch ohne Substanz abklingt. Die S3-Leitlinie BPS sieht Medikamente nur symptomorientiert, zeitlich begrenzt und off-label.",
 src:"S3 BPS 2022 · Cochrane BPS [?]"});

sit({id:"sp-psychose",a:"spann",t:"Akute Agitation bei Psychose",
 syn:["agitation","erregung","psychose akut","aggressiv","fremdgefährdung","zwangsmedikation","schizophrenie erregt","notfall erregung"],
 kern:["Deeskalation zuerst, orale Gabe anbieten","Lorazepam 1–2,5 mg p. o./i. m. ± Antipsychotikum","Olanzapin 10 mg oder Haloperidol 5 mg (± Promethazin 25–50 mg)","Olanzapin i. m. nicht gleichzeitig mit parenteralem BZD","Nach Gabe: Vitalparameter, Atmung, EPMS"],
 pre:["Intoxikation, Entzug, Delir, Hypoglykämie, Hypoxie","Vorbehandlung: EPMS-Anamnese, QT, Lewy/Parkinson"],
 opts:[
  {t:"Verbale Deeskalation, Reizabschirmung",r:"nm",why:"Reduziert Zwangsmaßnahmen.",ev:2},
  {d:"lorazepam",r:"1",dos:"1–2,5 mg p. o./i. m., Wdh. nach 30–60 min",why:"Rasch, gut steuerbar; mit AP kombinierbar.",ev:3},
  {d:"olanzapin",r:"1",dos:"10 mg p. o./i. m.",why:"Wenig EPMS, sedierend.",ev:3},
  {d:"haloperidol",r:"1",dos:"5 mg p. o./i. m.",why:"Gut belegt; EPMS-Prophylaxe erwägen, EKG.",ev:3},
  {d:"promethazin",r:"adj",dos:"25–50 mg i. m. zusammen mit Haloperidol",why:"TREC-Studien: schneller, weniger Dystonien.",ev:2},
  {d:"risperidon",r:"a",dos:"2–4 mg p. o. (Schmelztablette)",why:"Kooperativer Patient.",ev:2},
  {t:"Loxapin inhalativ 9,1 mg",r:"a",why:"Leicht bis mittel agitiert, kooperativ; Bronchospasmus-KI.",ev:2},
  {d:"levomepromazin",r:"r",dos:"25–50 mg",why:"Wenn sonst nicht ausreichend; Hypotonie.",ev:0}
 ],
 avoid:[{t:"Haloperidol i. v. ohne EKG-Monitoring",why:"Torsade-Risiko."},{t:"Mehrfachgaben verschiedener AP ohne Plan",why:"Kumulierte QT- und Atemrisiken."}],
 lern:"Benzodiazepine wirken schnell und ohne EPMS, Antipsychotika behandeln zusätzlich die Psychose. Die Kombination Haloperidol + Promethazin wurde in den TREC-Studien in Brasilien und Indien geprüft und senkt Dystonien gegenüber Haloperidol allein.",
 src:"S3 Schizophrenie · S2k Verhinderung von Zwang [?] · TREC"});

sit({id:"sp-manie",a:"spann",t:"Agitation bei Manie",
 syn:["manie","manisch","hypomanie","bipolar agitiert"],
 kern:["Antipsychotikum: Olanzapin, Haloperidol, Quetiapin, Risperidon","Lorazepam zusätzlich für Schlaf und Unruhe","Valproat-Aufsättigung möglich (nicht bei Frauen im gebärfähigen Alter)","Antidepressiva absetzen","Lithium für Phasenprophylaxe einplanen"],
 pre:["Substanzinduziert? Steroide, Stimulanzien","Schwangerschaft vor Valproat ausschließen"],
 opts:[
  {d:"olanzapin",r:"1",dos:"10–20 mg",why:"Antimanisch, sedierend.",ev:3},
  {d:"haloperidol",r:"1",dos:"5–10 mg",why:"Rasch antimanisch.",ev:3},
  {d:"quetiapin",r:"1",dos:"400–800 mg",why:"Antimanisch, auch prophylaktisch.",ev:3},
  {d:"risperidon",r:"a",dos:"2–6 mg",why:"Antimanisch.",ev:3},
  {d:"lorazepam",r:"adj",dos:"1–2,5 mg bis 3×/d",why:"Schlaf, Unruhe, kurzzeitig.",ev:2},
  {t:"Valproat 20 mg/kg Aufsättigung",r:"a",why:"Rasch; teratogen.",ev:2}
 ],
 avoid:[{t:"Antidepressiva",why:"Verstärken die Manie."}],
 lern:"Antimanische Wirkung ist ein Klasseneffekt der D2-Blockade; Lithium und Valproat wirken langsamer, sind aber prophylaktisch zentral.",
 src:"S3 Bipolar"});

sit({id:"sp-intox",a:"spann",t:"Agitation bei Intoxikation (Stimulanzien, Cannabis, Halluzinogene, Alkohol)",
 syn:["intoxikation","kokain","amphetamin","speed","crystal","meth","mdma","ecstasy","cannabis psychose","thc","lsd","pilze","badtrip","alkoholintoxikation","betrunken"],
 kern:["Stimulanzien und Halluzinogene: BZD zuerst","Antipsychotika zurückhaltend (Hyperthermie, Krampfschwelle, QT)","Alkoholintoxikation: keine BZD (Atemdepression), ggf. Haloperidol niedrig","Somatisch: Temperatur, CK, EKG, Elektrolyte","Serotoninsyndrom bei MDMA bedenken"],
 pre:["Mischintoxikation, Opioide, GHB","Hyperthermie, Rhabdomyolyse, Hyponatriämie (MDMA)"],
 opts:[
  {d:"lorazepam",r:"1",dos:"1–2,5 mg, wiederholbar",why:"Stimulanzien und Halluzinogene; antikonvulsiv.",ev:2},
  {d:"diazepam",r:"1",dos:"10 mg",why:"Alternative bei Stimulanzien.",ev:2},
  {d:"haloperidol",r:"a",dos:"2,5–5 mg",why:"Psychotische Symptome, Alkoholintoxikation; EKG.",ev:1},
  {d:"olanzapin",r:"a",dos:"5–10 mg",why:"Psychose bei Cannabis oder Stimulanzien.",ev:1}
 ],
 avoid:[{t:"BZD bei Alkoholintoxikation",why:"Additive Atemdepression."},{t:"Niedrigpotente Phenothiazine bei Stimulanzien",why:"Krampfschwelle, Hypotonie, Hyperthermie."}],
 lern:"Stimulanzien erhöhen synaptisches Dopamin und Noradrenalin; BZD dämpfen die sympathische Überaktivität ohne die Krampfschwelle zu senken.",
 src:"S3 Methamphetamin · Toxikologie-Standard [?]"});

sit({id:"sp-delir",a:"spann",t:"Hyperaktives Delir",
 syn:["delir","verwirrt","durchgangssyndrom","postoperativ verwirrt","delirium","nachts verwirrt"],
 kern:["Ursache suchen und behandeln (Infekt, Medikamente, Entzug, Elektrolyte)","Nicht-medikamentös: Orientierung, Brille, Hörgerät, Schlaf","Haloperidol 0,5–1 mg nur bei Gefährdung oder Leidensdruck","Parkinson oder Lewy: Quetiapin 12,5–25 mg","BZD nur bei Alkohol- oder BZD-Entzugsdelir oder Krampfanfall"],
 pre:["Alkohol- oder BZD-Entzug? Dann BZD statt AP","Anticholinerge Medikation absetzen","Hypoglykämie, Hypoxie, Harnverhalt, Schmerz"],
 opts:[
  {t:"Multikomponenten-Maßnahmen (HELP)",r:"nm",why:"Prävention wirksam, Therapie schwächer belegt.",ev:3},
  {d:"haloperidol",r:"1",dos:"0,5–1 mg, Wdh. nach 1–2 h",why:"Zugelassen; Delirdauer und Mortalität nicht sicher verbessert.",ev:1},
  {d:"risperidon",r:"a",dos:"0,5–1 mg",why:"Off-label.",ev:1,off:true},
  {d:"quetiapin",r:"a",dos:"12,5–50 mg",why:"Bei Parkinson oder Lewy-Körper.",ev:1,off:true},
  {d:"melperon",r:"a",dos:"25–50 mg",why:"DE-Praxis; kaum anticholinerg.",ev:0},
  {d:"pipamperon",r:"a",dos:"20–40 mg",why:"DE-Praxis.",ev:0},
  {d:"lorazepam",r:"r",dos:"0,5–1 mg",why:"Nur Entzugsdelir oder Krampf.",ev:1}
 ],
 avoid:[{t:"Anticholinergika (Promethazin, Biperiden, TZA, Doxylamin)",why:"Verstärken Delir."},{t:"BZD ohne Entzug",why:"Delirogen."}],
 lern:"Delir ist ein akutes Hirnversagen mit cholinergem Defizit und dopaminerger Überaktivität; daher verschlechtern Anticholinergika und lindern D2-Antagonisten symptomatisch.",
 src:"S3 DAS-Leitlinie [?] · NICE Delirium"});

sit({id:"sp-demenz",a:"spann",t:"Agitation und Aggression bei Demenz",
 syn:["demenz unruhe","bpsd","aggression demenz","alzheimer unruhe","lewy","pflegeheim unruhe"],
 kern:["Auslöser suchen: Schmerz, Obstipation, Harnverhalt, Infekt","Risperidon zugelassen bei Alzheimer-Aggression (≤ 6 Wochen)","Melperon oder Pipamperon (DE-Praxis)","Citalopram mit begrenzter Evidenz (QT)","Lewy-Körper: keine klassischen AP, Quetiapin oder Clozapin"],
 pre:["Schmerz (z. B. PAINAD-Skala)","Delir überlagert?"],
 opts:[
  {t:"Personzentrierte Pflege, Tagesstruktur, Schmerztherapie",r:"nm",why:"Erste Wahl laut S3.",ev:2},
  {d:"risperidon",r:"1",dos:"0,25 mg 2×/d, max. 1 mg 2×/d",why:"Einzige Zulassung; Schlaganfall und Mortalität ↑.",ev:2},
  {d:"melperon",r:"a",dos:"25–75 mg/d",why:"Zugelassen für Unruhe bei Demenz.",ev:0},
  {d:"pipamperon",r:"a",dos:"20–80 mg/d",why:"Zugelassen für Ältere.",ev:0},
  {t:"Citalopram 10–20 mg",r:"a",why:"CitAD positiv; QT ab 20 mg.",ev:1,off:true},
  {d:"quetiapin",r:"a",dos:"12,5–50 mg",why:"Bei Lewy-Körper oder Parkinson.",ev:1,off:true}
 ],
 avoid:[{d:"haloperidol",why:"Bei Lewy-Körper lebensgefährliche Neuroleptikasensitivität."},{t:"BZD",why:"Stürze, Delir."}],
 lern:"Antipsychotika erhöhen bei Demenz Mortalität etwa um den Faktor 1,6–1,7 (Schlaganfall, Pneumonie). Deshalb kurz, niedrig und mit Absetzplan.",
 src:"S3 Demenzen · FI"});

sit({id:"sp-angst",a:"spann",t:"Akute Angst oder Panik",
 syn:["panik","panikattacke","angst akut","angstattacke","angststörung"],
 kern:["Psychoedukation, Atemtechnik, Exposition planen","Akut: Lorazepam 1 mg einmalig vertretbar","Dauerbehandlung: SSRI oder SNRI, nicht BZD","Pregabalin bei GAD (Missbrauch beachten)","Opipramol und Hydroxyzin in DE gebräuchlich"],
 pre:["Somatik: Hyperthyreose, Arrhythmie, Hypoglykämie, Asthma","Substanzentzug"],
 opts:[
  {d:"lorazepam",r:"1",dos:"1 mg, einmalig",why:"Rasch wirksam, nicht als Dauer.",ev:2},
  {t:"SSRI/SNRI (Escitalopram, Sertralin, Venlafaxin)",r:"1",why:"Dauerbehandlung erster Wahl.",ev:3},
  {d:"pregabalin",r:"a",dos:"150–600 mg",why:"GAD; Missbrauchspotenzial.",ev:3},
  {d:"hydroxyzin",r:"a",dos:"25–50 mg",why:"Ohne Abhängigkeit; QT.",ev:1},
  {d:"propranolol",r:"a",dos:"10–40 mg",why:"Somatische Angstsymptome, situativ.",ev:1,off:true}
 ],
 avoid:[{t:"BZD-Dauergabe",why:"Abhängigkeit, schwächt Expositionseffekte."}],
 lern:"BZD lindern Angst, verhindern aber die Lernerfahrung, dass Angst von selbst abklingt (Habituation). Deshalb gelten sie langfristig als ungünstig.",
 src:"S3 Angststörungen"});

sit({id:"sp-sucht",a:"spann",t:"Anspannung bei Suchterkrankung (ohne BZD)",
 syn:["unruhe sucht","anspannung abhängig","craving unruhe","suchtdruck"],
 kern:["Keine BZD außerhalb des geplanten Entzugs","Pipamperon, Promethazin, Melperon als Bedarf","Clonidin bei vegetativer Komponente","Quetiapin und Gabapentinoide: Missbrauchspotenzial","Craving gezielt behandeln (Naltrexon, Acamprosat, Substitution)"],
 pre:["Entzug noch aktiv? Score","Mischkonsum, GHB"],
 opts:[
  {d:"pipamperon",r:"1",dos:"40 mg",why:"Ohne Abhängigkeit.",ev:0,off:true},
  {d:"promethazin",r:"1",dos:"25–50 mg",why:"Ohne Abhängigkeit; bei Opioidkonsum zurückhaltend.",ev:0},
  {d:"clonidin",r:"a",dos:"0,075–0,15 mg",why:"Vegetative Unruhe.",ev:1,off:true},
  {d:"mirtazapin",r:"a",dos:"15 mg",why:"Schlaf und Unruhe.",ev:1,off:true}
 ],
 avoid:[{t:"BZD",why:"Suchtverlagerung."},{d:"pregabalin",why:"Missbrauch."},{d:"quetiapin",why:"Missbrauch möglich, nur gezielt."}],
 lern:"Bei Sucht ist jede schnell anflutende, angenehm sedierende Substanz ein potenzieller Verstärker. Substanzen ohne Euphorie (niedrigpotente AP) haben daher Vorrang.",
 src:"S3 Alkohol · S3 Medikamentenbez. [?]"});

/* ============ EPMS ============ */
sit({id:"ep-dystonie",a:"epms",t:"Akute Dystonie (Frühdyskinesie)",
 syn:["frühdyskinesie","dystonie","blickkrampf","zungenschlundkrampf","okulogyre krise","tortikollis","krampf zunge","schlundkrampf"],
 kern:["Biperiden 2,5–5 mg langsam i. v. oder i. m.: wirkt in Minuten","Wdh. nach 30 min möglich; danach oral 1–3 Tage","Auslöser: hochpotente AP, MCP; junge Männer","AP-Dosis senken oder wechseln","Laryngospasmus: Notfall"],
 pre:["MCP oder andere D2-Antagonisten in der Komedikation","DD: Katatonie, Tetanie, Krampfanfall, Konversion"],
 opts:[
  {d:"biperiden",r:"1",dos:"2,5–5 mg i. v./i. m.",why:"Schnell und zuverlässig.",ev:2},
  {d:"lorazepam",r:"a",dos:"1–2 mg",why:"Wenn Anticholinergikum kontraindiziert.",ev:1},
  {t:"Diphenhydramin 25–50 mg i. v.",r:"int",why:"International Standard.",ev:1}
 ],
 avoid:[],
 lern:"D2-Blockade im Striatum führt zu einem relativen cholinergen Überwiegen; das Anticholinergikum stellt die Balance her. Risiko ist am höchsten in den ersten Tagen und bei hoher D2-Affinität.",
 src:"FI · S3 Schizophrenie"});

sit({id:"ep-akathisie",a:"epms",t:"Akathisie",
 syn:["akathisie","sitzunruhe","innere unruhe neuroleptika","kann nicht sitzen","beine unruhig","tasikinesie"],
 kern:["Oft als Agitation fehlgedeutet: dann nicht AP erhöhen!","AP reduzieren oder wechseln (Quetiapin, Olanzapin, Clozapin)","Propranolol 10–20 mg 2–3×/d","Mirtazapin 15 mg z. N.","Anticholinergika kaum wirksam (außer bei begleitendem Parkinsonoid)"],
 pre:["Aripiprazol, Cariprazin, Haloperidol, SSRI als Auslöser","Suizidalität erfragen: Akathisie erhöht das Risiko"],
 opts:[
  {t:"AP-Dosis senken oder wechseln",r:"nm",why:"Kausale Maßnahme.",ev:2},
  {d:"propranolol",r:"1",dos:"10–20 mg 2–3×/d, bis 80 mg",why:"Am besten untersucht.",ev:2,off:true},
  {d:"mirtazapin",r:"1",dos:"15 mg z. N.",why:"RCT vergleichbar Propranolol.",ev:2,off:true},
  {d:"lorazepam",r:"a",dos:"0,5–1 mg 2–3×/d",why:"Kurzzeitig.",ev:1,off:true},
  {t:"Vitamin B6 (Pyridoxin) 600 mg 2×/d [?]",r:"a",why:"Kleine RCTs.",ev:1,off:true},
  {d:"biperiden",r:"r",dos:"1–2 mg",why:"Nur bei begleitendem Parkinsonoid.",ev:0}
 ],
 avoid:[{t:"AP-Erhöhung bei Fehldeutung als Agitation",why:"Verschlimmert Akathisie."}],
 lern:"Akathisie entsteht vermutlich durch dopaminerge Blockade mesokortikaler Bahnen mit noradrenerger Gegenregulation; daher wirken Betablocker und 5-HT2A-Antagonisten (Mirtazapin).",
 src:"S3 Schizophrenie · Poyurovsky RCT [?]"});

sit({id:"ep-parkinsonoid",a:"epms",t:"Medikamentöses Parkinsonoid",
 syn:["parkinsonoid","rigor","tremor","akinese","bradykinese","hypomimie","steif","zahnradphänomen"],
 kern:["AP-Dosis senken oder auf Quetiapin, Clozapin, Aripiprazol wechseln","Biperiden 1–2 mg 2–3×/d kurzzeitig (nicht bei Älteren)","Amantadin 100 mg 1–2×/d bei Älteren (Niere, QT)","Prophylaktische Dauergabe von Anticholinergika vermeiden","DD: Katatonie, Depression mit psychomotorischer Hemmung"],
 pre:["Neuer idiopathischer Parkinson unmaskiert?","Lithium-Tremor, Valproat-Tremor"],
 opts:[
  {t:"Dosisreduktion oder Wechsel",r:"nm",why:"Kausal.",ev:2},
  {d:"biperiden",r:"1",dos:"1–2 mg 2–3×/d",why:"Wirksam; kognitive NW.",ev:2},
  {d:"amantadin",r:"a",dos:"100 mg 1–2×/d",why:"Bei Älteren, ohne Anticholinergik.",ev:1},
  {d:"propranolol",r:"a",dos:"10–40 mg",why:"Bei vorherrschendem Tremor.",ev:1,off:true}
 ],
 avoid:[{t:"Levodopa",why:"Antagonisiert AP, Psychose."}],
 lern:"Klinische Zeichen treten meist ab etwa 80 % striataler D2-Besetzung auf; daher dosisabhängig und bei hochpotenten AP häufiger.",
 src:"S3 Schizophrenie · FI"});

sit({id:"ep-spaetdys",a:"epms",t:"Spätdyskinesie",
 syn:["spätdyskinesie","tardive dyskinesie","td","schmatzen","zungenbewegung","orofazial","choreatisch"],
 kern:["Anticholinergika absetzen (verschlechtern)","Auf Clozapin (beste Evidenz) oder Quetiapin wechseln","Tetrabenazin (DE zugelassen [?])","Valbenazin, Deutetrabenazin: FDA-zugelassen, EU nicht verfügbar [?]","AP nicht abrupt absetzen (Absetzdyskinesie)"],
 pre:["AIMS-Skala dokumentieren","Risiko: Alter, Frauen, Diabetes, lange FGA-Exposition"],
 opts:[
  {t:"Anticholinergika absetzen",r:"nm",why:"Verschlechtern TD.",ev:2},
  {t:"Wechsel auf Clozapin",r:"1",why:"Beste Evidenz unter den AP.",ev:2},
  {d:"quetiapin",r:"a",dos:"Antipsychotische Dosis",why:"Geringe D2-Affinität.",ev:1},
  {d:"tetrabenazin",r:"a",dos:"12,5 mg, steigern bis 25–75 mg",why:"Wirksam; Depression beachten.",ev:2},
  {t:"Valbenazin / Deutetrabenazin",r:"int",why:"Gute RCT-Evidenz, in der EU nicht zugelassen [?].",ev:3},
  {t:"Ginkgo biloba (EGb 761) 240 mg",r:"a",why:"Kleine RCTs (China).",ev:1,off:true},
  {d:"clonazepam",r:"r",dos:"0,5–2 mg",why:"Kurzzeitig, schwache Evidenz.",ev:1,off:true}
 ],
 avoid:[{d:"biperiden",why:"Verschlechtert TD."}],
 lern:"Hypothese: chronische D2-Blockade führt zu Rezeptorsupersensitivität. VMAT2-Hemmer reduzieren die Dopaminfreisetzung und damit das Signal an die übersensiblen Rezeptoren.",
 src:"S3 Schizophrenie · APA 2020 [?]"});

sit({id:"ep-mns",a:"epms",t:"Malignes neuroleptisches Syndrom (MNS)",
 syn:["mns","malignes neuroleptisches","fieber rigor","ck erhöht","hyperthermie neuroleptika","rigor fieber bewusstsein"],
 kern:["Notfall: AP sofort stoppen, Intensivmedizin","Kühlung, Volumen, Thromboseprophylaxe, Niere schützen","Lorazepam 1–2 mg i. v. (Katatonie-Überlappung)","Dantrolen und/oder Bromocriptin bei schwerem Verlauf","EKT bei Therapieresistenz; Reexposition frühestens nach 2 Wochen"],
 pre:["DD: Serotoninsyndrom (Klonus, Hyperreflexie, rascher Beginn), maligne Katatonie, anticholinerges Syndrom, Sepsis, Hitzschlag","Labor: CK, Leukozyten, Kreatinin, Myoglobin, Elektrolyte, Leber"],
 opts:[
  {t:"AP absetzen, Kühlung, Flüssigkeit, Intensiv",r:"nm",why:"Basis jeder Therapie.",ev:2},
  {d:"lorazepam",r:"1",dos:"1–2 mg i. v., wiederholbar",why:"Besonders bei katatonen Merkmalen.",ev:1},
  {d:"dantrolen",r:"a",dos:"1–2,5 mg/kg i. v.",why:"Ausgeprägter Rigor und Hyperthermie.",ev:1,off:true},
  {d:"bromocriptin",r:"a",dos:"2,5 mg 2–3×/d, steigern",why:"Hebt D2-Blockade auf.",ev:1,off:true},
  {t:"EKT",r:"r",why:"Bei Therapieresistenz oder maligner Katatonie.",ev:1}
 ],
 avoid:[{t:"Erneute AP-Gabe in der Akutphase",why:"Verlängert das MNS."},{t:"Anticholinergika",why:"Verschlechtern Thermoregulation."}],
 lern:"Plötzliche zentrale D2-Blockade stört Thermoregulation im Hypothalamus und erhöht den Muskeltonus über nigrostriatale Bahnen. Risiko steigt bei rascher Aufdosierung, i. m.-Gabe, Dehydratation und Lithium-Kombination.",
 src:"S3 Schizophrenie · Fallserien"});

sit({id:"ep-serotonin",a:"epms",t:"Serotoninsyndrom (DD zum MNS)",
 syn:["serotoninsyndrom","serotonin","klonus","hyperreflexie","myoklonus","tramadol ssri"],
 kern:["Rascher Beginn (Stunden) nach serotonerger Steigerung oder Kombination","Klonus (inducible/okulär), Hyperreflexie, Mydriasis, Diarrhoe, Hyperthermie","Serotonerge Mittel absetzen, BZD, Kühlung","Cyproheptadin als Antidot (in DE schwer erhältlich [?])","Hunter-Kriterien"],
 pre:["MAO-Hemmer, Linezolid, Tramadol, Triptane, MDMA, Johanniskraut","DD: MNS (langsamer, Rigor, Bradyreflexie)"],
 opts:[
  {t:"Absetzen aller serotonergen Mittel, Kühlung",r:"nm",why:"Meist Besserung in 24 h.",ev:1},
  {d:"lorazepam",r:"1",dos:"1–2 mg i. v.",why:"Agitation, Muskelaktivität.",ev:1},
  {t:"Cyproheptadin 12 mg, dann 2 mg alle 2 h",r:"int",why:"5-HT2A-Antagonist; Verfügbarkeit in DE prüfen [?].",ev:1}
 ],
 avoid:[{t:"Antipsychotika mit Anticholinergik",why:"Verschlechtern Thermoregulation."},{t:"Physische Fixierung ohne Sedierung",why:"Erhöht Muskelarbeit und Temperatur."}],
 lern:"Überaktivierung vor allem von 5-HT2A- und 5-HT1A-Rezeptoren. Der Klonus ist das sensitivste klinische Zeichen.",
 src:"Hunter-Kriterien · Toxikologie-Standard"});

/* ============ ENTZUG ============ */
sit({id:"ez-alk",a:"entzug",t:"Alkoholentzug leicht bis mittelschwer",
 syn:["alkoholentzug","aws","alkohol entzug","entgiftung","tremor alkohol","schwitzen alkohol","ciwa","aesb","alkohol vegetativ"],
 kern:["Score erheben (CIWA-Ar oder AESB), symptomgetriggert behandeln","BZD (Diazepam, Lorazepam, Oxazepam) oder Clomethiazol stationär","Leberschaden oder Alter: Lorazepam oder Oxazepam","Carbamazepin als Anfallsprophylaxe bzw. bei leichtem AWS","Thiamin bei jedem Entzug, vor Glukose"],
 pre:["Letzter Konsum, frühere Entzugsanfälle oder Delirien (stärkster Prädiktor)","Mischkonsum (BZD, GHB)","Elektrolyte (Na, K, Mg), Glukose, Leber"],
 opts:[
  {d:"diazepam",r:"1",dos:"10–20 mg bei Score über Schwelle, stündlich prüfen",why:"Lange HWZ, glatter Verlauf.",ev:3},
  {d:"clomethiazol",r:"1",dos:"2 Kps. nach Score, stationär",why:"DE-Standard stationär; Atmung beachten.",ev:2},
  {d:"lorazepam",r:"a",dos:"1–2 mg nach Score",why:"Leberschaden, Alter.",ev:2},
  {d:"oxazepam",r:"a",dos:"30 mg nach Score [?]",why:"Leberschaden, Alter.",ev:2},
  {d:"carbamazepin",r:"a",dos:"200 mg 3–4×/d [?]",why:"Anfallsprophylaxe; leichtes AWS, kein Missbrauch.",ev:2},
  {d:"clonidin",r:"adj",dos:"0,075–0,15 mg",why:"Nur vegetative Symptome, nie allein.",ev:1},
  {d:"thiamin",r:"adj",dos:"100–300 mg/d",why:"Wernicke-Prophylaxe.",ev:2},
  {d:"gabapentin",r:"a",dos:"300–600 mg 3×/d",why:"Leichtes AWS ambulant; international.",ev:1,off:true}
 ],
 avoid:[{t:"Neuroleptika als Monotherapie",why:"Senken Krampfschwelle, verhindern keine Anfälle."},{t:"Clomethiazol ambulant",why:"Abhängigkeit, Atemdepression mit Alkohol."}],
 lern:"Chronischer Alkohol verstärkt GABA-A und hemmt NMDA; der Körper reguliert gegen. Beim Absetzen bleibt eine glutamaterge Übererregung: Tremor, Schwitzen, Anfälle, Delir. BZD ersetzen vorübergehend die GABA-Wirkung (Kreuztoleranz).",
 src:"S3 Alkohol 2021 · FI"});

sit({id:"ez-alk-schwer",a:"entzug",t:"Schweres Alkoholentzugssyndrom, Delir, Entzugsanfall",
 syn:["delirium tremens","alkoholentzugsdelir","entzugsanfall","krampfanfall entzug","prädelir","wernicke"],
 kern:["Hochdosiert BZD symptomgetriggert, Intensivüberwachung","Halluzinationen: Haloperidol zusätzlich, nie allein","Entzugsanfall: Lorazepam i. v.; kein Phenytoin","Thiamin hochdosiert i. v. bei jedem Verdacht auf Wernicke","Natrium langsam korrigieren (ODS)"],
 pre:["Wernicke: Verwirrtheit, Ataxie, Okulomotorik (selten vollständig)","Kopfverletzung, Infekt, hepatische Enzephalopathie, Hypoglykämie"],
 opts:[
  {d:"diazepam",r:"1",dos:"Hohe Einzeldosen nach Score, Intensiv",why:"Grundlage der Delirbehandlung.",ev:3},
  {d:"lorazepam",r:"1",dos:"2–4 mg i. v.",why:"Entzugsanfall, Leberschaden.",ev:3},
  {d:"clomethiazol",r:"a",dos:"Nach Score",why:"Stationär zugelassen fürs Delir.",ev:2},
  {d:"haloperidol",r:"adj",dos:"2,5–5 mg",why:"Psychotische Symptome, zusätzlich zu BZD.",ev:2},
  {d:"thiamin",r:"adj",dos:"3×200–500 mg i. v. [?]",why:"Wernicke-Therapie.",ev:2},
  {t:"Dexmedetomidin oder Phenobarbital",r:"int",why:"Intensivmedizin bei BZD-Refraktärität.",ev:1}
 ],
 avoid:[{t:"Glukose vor Thiamin",why:"Kann Wernicke auslösen."},{t:"Rasche Natriumkorrektur",why:"Osmotisches Demyelinisierungssyndrom."}],
 lern:"Das Entzugsdelir tritt typischerweise 48–72 h nach letztem Konsum auf; unbehandelt hohe Mortalität. Haloperidol behandelt Halluzinationen, aber nicht die zugrundeliegende Übererregung.",
 src:"S3 Alkohol 2021 · EFNS Wernicke [?]"});

sit({id:"ez-bzd",a:"entzug",t:"Benzodiazepin- und Z-Substanz-Entzug",
 syn:["benzodiazepinentzug","benzo entzug","bzd entzug","z-substanz entzug","zolpidem entzug","ausschleichen benzo","taper","abdosieren"],
 kern:["Nie abrupt: Anfälle, Delir, Psychose","Auf Äquivalenzdosis Diazepam (oder Oxazepam) umstellen, dann schrittweise reduzieren","Ambulant langsam (Wochen bis Monate), stationär schneller","Letzte 25–50 % am langsamsten","Adjuvant: sedierende AD für Schlaf; Carbamazepin oder Pregabalin begrenzt belegt"],
 pre:["Tatsächliche Dosis (oft höher als angegeben)","Mischkonsum (Alkohol, Opioide, GHB)","Grunderkrankung (Angst, Insomnie) mitbehandeln"],
 opts:[
  {d:"diazepam",r:"1",dos:"Äquivalenzdosis, dann Reduktion (Rechner)",why:"Lange HWZ, glatter Spiegel.",ev:2},
  {d:"oxazepam",r:"a",dos:"Äquivalenzdosis",why:"Leberschaden, Alter.",ev:1},
  {d:"carbamazepin",r:"adj",dos:"200–600 mg [?]",why:"Anfallsschutz bei Hochdosis.",ev:1,off:true},
  {d:"pregabalin",r:"adj",dos:"150–300 mg",why:"Kleine Studien; Missbrauch beachten.",ev:1,off:true},
  {d:"trazodon",r:"adj",dos:"50–100 mg",why:"Schlaf.",ev:1,off:true},
  {d:"mirtazapin",r:"adj",dos:"15 mg",why:"Schlaf.",ev:1,off:true}
 ],
 avoid:[{t:"Abruptes Absetzen",why:"Entzugsanfälle."},{t:"Clomethiazol",why:"Suchtverlagerung."}],
 lern:"Kurz wirksame BZD erzeugen zwischen den Dosen Mini-Entzüge; die Umstellung auf ein lang wirksames Mittel glättet den Spiegel. Äquivalenzangaben schwanken je Quelle bis Faktor 2.",
 src:"S3 Medikamentenbez. Störungen · Ashton-Manual"});

sit({id:"ez-opioid",a:"entzug",t:"Opioidentzug",
 syn:["opioidentzug","opiatentzug","heroin","entzug opiat","methadon entzug","fentanyl","cows","substitution","buprenorphin start","subutex"],
 kern:["Erst klären: Substitution (Mortalität ↓) oder Entzug?","Buprenorphin-Einstieg erst bei mäßigem Entzug (COWS ≥ 8–12)","Symptomatisch: Clonidin, Doxepin (DE), Loperamid, NSAR, Antiemetikum","Nach Entzug: Toleranz weg → Überdosisrisiko, Take-home-Naloxon","Fentanyl: verzögerter Entzug, Low-dose-Induktion erwägen"],
 pre:["Welche Opioide, wann zuletzt, Methadon-Dosis","Schwangerschaft: Substitution statt Entzug","BZD- oder Alkohol-Beikonsum"],
 opts:[
  {d:"buprenorphin",r:"1",dos:"2–4 mg s. l. bei COWS ≥ 8–12, Tag 1 bis 8–12 mg",why:"Sicher, kaum QT; Abdosierung oder Erhalt.",ev:3},
  {d:"methadon",r:"1",dos:"Start 10–30 mg, max. 40 mg Tag 1",why:"Bei hoher Toleranz oder Bupe-Unverträglichkeit.",ev:3},
  {d:"clonidin",r:"adj",dos:"0,075–0,15 mg alle 4–6 h",why:"Vegetative Symptome.",ev:2,off:true},
  {d:"doxepin",r:"adj",dos:"25–50 mg bis 3×/d [?]",why:"DE-Tradition; Schlaf, Unruhe.",ev:1},
  {d:"loperamid",r:"adj",dos:"4 mg, dann 2 mg",why:"Diarrhoe.",ev:1},
  {t:"Ibuprofen 400–600 mg",r:"adj",why:"Gliederschmerzen.",ev:1},
  {d:"naloxon",r:"adj",dos:"Nasal 1,8 mg mitgeben",why:"Überdosisprophylaxe nach Toleranzverlust.",ev:2}
 ],
 avoid:[{t:"Buprenorphin zu früh",why:"Ausgelöster Entzug."},{t:"BZD-Kombination unkontrolliert",why:"Atemdepression."},{t:"Metamizol hochdosiert in Kombination mit Clozapin/Carbamazepin",why:"Agranulozytose."}],
 lern:"Opioidentzug ist selten lebensgefährlich, aber sehr unangenehm (noradrenerge Überaktivität im Locus coeruleus). Die Gefahr liegt danach: Rückfall mit alter Dosis bei verlorener Toleranz.",
 src:"BÄK-Richtlinie Substitution · S3 Medikamentenbez. [?] · ASAM"});

sit({id:"ez-ghb",a:"entzug",t:"GHB/GBL-Entzug",
 syn:["ghb","gbl","liquid ecstasy","k.o.","butyrolacton","1,4-butandiol","ghb entzug"],
 kern:["Gefährlichster Entzug: Beginn 1–6 h nach letzter Dosis, Delir in Tagen","Stationär mit Überwachung, oft Intensiv-nah","Hochdosiert BZD symptomgetriggert (Diazepam, Lorazepam)","Baclofen adjuvant (Fallserien)","Antipsychotika meiden (Krampf, Hyperthermie)"],
 pre:["Dosisintervall (alle 1–3 h rund um die Uhr = schwere Abhängigkeit)","Mischkonsum Alkohol und BZD"],
 opts:[
  {d:"diazepam",r:"1",dos:"Hohe Dosen nach Score",why:"Oft deutlich höher als beim AWS.",ev:1},
  {d:"lorazepam",r:"1",dos:"Nach Score",why:"Alternative.",ev:1},
  {d:"baclofen",r:"adj",dos:"3×10–25 mg [?]",why:"GABA-B, Fallserien.",ev:1,off:true},
  {t:"Pharmazeutisches GHB (Natriumoxybat)-Taper",r:"int",why:"Niederländisches Modell.",ev:1}
 ],
 avoid:[{t:"Antipsychotika",why:"Krampfschwelle, Hyperthermie, MNS-ähnliche Bilder."}],
 lern:"GHB wirkt an GABA-B und eigenen GHB-Rezeptoren. Die sehr kurze HWZ erzwingt Dosen alle 1–3 h und erklärt den schnellen, schweren Entzug.",
 src:"Fallserien · NL-Leitlinie [?]"});

sit({id:"ez-cannabis",a:"entzug",t:"Cannabisentzug",
 syn:["cannabis","thc","kiffen","gras","haschisch","cannabis entzug","hyperemesis"],
 kern:["Meist mild: Reizbarkeit, Schlafstörung, Appetitverlust, Craving","Psychoedukation, Schlafhygiene","Gabapentin (ein RCT), sedierende AD für Schlaf","Cannabinoid-Hyperemesis: heiße Dusche lindert, Haloperidol, Capsaicin","Keine BZD-Dauergabe"],
 pre:["Psychose oder Manie im Konsumkontext","Mischkonsum"],
 opts:[
  {d:"gabapentin",r:"a",dos:"300–1200 mg/d",why:"Ein positives RCT.",ev:1,off:true},
  {d:"mirtazapin",r:"a",dos:"15 mg",why:"Schlaf, Appetit.",ev:1,off:true},
  {d:"trazodon",r:"a",dos:"50–100 mg",why:"Schlaf.",ev:1,off:true},
  {d:"haloperidol",r:"a",dos:"2,5–5 mg",why:"Cannabinoid-Hyperemesis.",ev:1,off:true},
  {t:"Nabiximols oder Dronabinol (Agonist-Substitution)",r:"int",why:"Studien positiv, nicht etabliert.",ev:1,off:true}
 ],
 avoid:[{t:"BZD-Dauer",why:"Suchtverlagerung."}],
 lern:"THC desensibilisiert CB1-Rezeptoren; nach Absetzen erholt sich die Rezeptordichte über etwa 4 Wochen, parallel klingen die Symptome ab.",
 src:"S3 Cannabis [?] · Mason 2012"});

sit({id:"ez-stim",a:"entzug",t:"Stimulanzienentzug (Kokain, Amphetamin, Methamphetamin)",
 syn:["kokain entzug","amphetamin entzug","crystal entzug","meth entzug","crash","speed entzug"],
 kern:["Crash: Hypersomnie, Dysphorie, Craving, Suizidalität","Keine spezifische zugelassene Pharmakotherapie","Schlaf: Trazodon, Mirtazapin","Psychose: kurz AP (Olanzapin, Quetiapin)","Suizidalität aktiv erfragen"],
 pre:["Persistierende Psychose","Kardiale Folgeschäden"],
 opts:[
  {d:"mirtazapin",r:"a",dos:"15–30 mg",why:"Schlaf, Appetit; kleine Studien bei Meth.",ev:1,off:true},
  {d:"trazodon",r:"a",dos:"50–100 mg",why:"Schlaf.",ev:1,off:true},
  {d:"quetiapin",r:"a",dos:"50–300 mg",why:"Psychose, Unruhe; Missbrauch beachten.",ev:1,off:true},
  {d:"olanzapin",r:"a",dos:"5–10 mg",why:"Psychose.",ev:1,off:true}
 ],
 avoid:[{t:"BZD-Dauer",why:"Suchtverlagerung."},{t:"Bupropion bei Anfallsanamnese",why:"Krampfschwelle."}],
 lern:"Nach chronischem Stimulanzienkonsum ist das dopaminerge Belohnungssystem herunterreguliert; die Anhedonie hält oft Wochen.",
 src:"S3 Methamphetamin 2016"});
