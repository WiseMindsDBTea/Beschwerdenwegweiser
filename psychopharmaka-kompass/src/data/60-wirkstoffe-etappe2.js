/* Etappe 2 (v1.2, 07.10.2026): volle Wirkstoffkarten (ersetzen die Kurzeinträge) und Diagnose-Algorithmen.
   Quellen je Karte im Feld src; nicht belegte Angaben tragen [?]. Ältere Daten oben bleiben unverändert im Quelltext. */
(function(){
var D = window.D, SIT = window.SIT;
var E2 = window.E2 = {drugs:[], sits:[], replaced:[]};
function E2D(id,o){ if(D[id] && D[id].stub) E2.replaced.push(id); o.e2 = true; D[id] = o; E2.drugs.push(id); }
function E2S(o){ o.e2 = true; for(var i=0;i<SIT.length;i++){ if(SIT[i].id===o.id){ SIT[i]=o; E2.sits.push(o.id); return; } } SIT.push(o); E2.sits.push(o.id); }
/* ---- gruppe_a ---- */
// Etappe 2 · Gruppe A · SSRI/SNRI · Stand 07.10.2026
// Quellen: K = Benkert/Hippius Kompendium 2021, P = Benkert Pocket Guide 2021, FI = Fachinformation, Web siehe gruppe_a_belege.md

E2D("sertralin", {
  n: "Sertralin",
  b: ["Zoloft", "Sertralin-Generika"],
  k: "SSRI",
  g: "Antidepressiva",
  kern: [
    "Depression inkl. Rezidivprophylaxe, Panik, Zwang, soziale Angst, PTBS zugelassen",
    "Start 50 mg (Angst/PTBS 25 mg), +50 mg/Woche, max. 200 mg",
    "Herz: nach Infarkt/ACS gut untersucht, unter SSRI bevorzugt (K)",
    "Schwangerschaft und Stillzeit: Mittel der Wahl (Embryotox)",
    "KI Pimozid; keine Kombination mit Lamotrigin (UGT1A4) laut P"
  ],
  ind: "Episoden einer Major Depression; Rezidivprophylaxe der Major Depression; Panikstörung mit/ohne Agoraphobie; Zwangsstörung (Erwachsene und Kinder/Jugendliche 6–17 J.); soziale Angststörung; PTBS.",
  off: "Prämenstruelle dysphorische Störung (in den USA zugelassen), klimakterische Beschwerden, GAS, Binge-Eating-Störung (K; Evidenzgrad dort nicht angegeben). Depression bei Kindern: Wirksamkeit laut FI nicht belegt.",
  ki: "MAO-Hemmer (irreversibel: 14 Tage Abstand; nach Sertralin 7 Tage bis MAOH; Moclobemid 24 h), Linezolid, Pimozid (FI). Schwere Leberfunktionsstörung, instabile Epilepsie (K).",
  dos: {
    e: "Depression/Zwang: 50 mg morgens (niedrigste wirksame Dosis), Erhaltung meist 75–100 mg, Steigerung max. 50 mg/Woche bis max. 200 mg. Panik/PTBS/soziale Angst: 25 mg, nach 1 Woche 50 mg, dann wie oben bis max. 200 mg.",
    a: "Keine eigene Altersdosis in K/P; vorsichtig titrieren, Natrium kontrollieren (Hyponatriämie v. a. im Alter). Osteoporoserisiko unter Langzeitgabe.",
    j: "Nur Zwangsstörung zugelassen: 6–12 J. Start 25 mg, nach 1 Woche 50 mg; 13–17 J. Start 50 mg; Schritte 50 mg frühestens wöchentlich, max. 200 mg (FI 07/2025)."
  },
  nw: "Sehr häufig Übelkeit, Diarrhö (häufiger als bei anderen SSRI), Mundtrockenheit, Schlaflosigkeit oder Somnolenz, Kopfschmerz, Schwindel, Ejakulationsstörung. Häufig Unruhe, Tremor, Schwitzen, Libidoabnahme. Selten Hyponatriämie/SIADH (Ältere), Blutungsneigung, Hepatitis, Akathisie, SJS/TEN, Krampfanfälle; QTc-Verlängerung bei Überdosierung. Absetzsyndrome häufig. Keine Prolaktinerhöhung (K).",
  ia: "Serotonerg (Serotoninsyndrom): MAOH, Linezolid, Triptane, Tramadol, Tryptophan, Ondansetron, TZA, Johanniskraut; Fallbericht mit Bupropion. Pimozid: Spiegel ↑ (KI). Lamotrigin: Hemmung von UGT1A4, mögliches Risiko schwerer Hautreaktionen (P/K: keine Kombination). Abbau v. a. CYP2B6/2C19: bei 2C19-Poor-Metabolizern Spiegel +50 %, starke 2C19-Hemmer meiden; Grapefruitsaft meiden. Thrombozytenaggregationshemmer/Antikoagulanzien: Blutungsrisiko. Thiazide/ACE-Hemmer: Hyponatriämie. Interaktion mit T4 prüfen (P). Clopidogrel: Sertralin hemmt 2C19 nicht und ist unter den SSRI vorzuziehen (K).",
  ktr: "Natrium zu Beginn und bei Älteren, weil SIADH/Hyponatriämie v. a. im Alter auftritt. EKG empfohlen, engmaschig bei kardialer Vorschädigung oder QT-Prädisposition. Blutungsanamnese, weil SSRI die Thrombozytenfunktion stören. Anfallsanamnese. Suizidalität eng bis 24 J. zu Beginn. Leberwerte bei Leberfunktionsstörung (Dosisanpassung). TDM 10–60 ng/ml (K/P).",
  ss: "Schwangerschaft: Benkert RS 4 (Verordnung möglichst vermeiden; wenn nötig, Sertralin neben Citalopram/Escitalopram am wenigsten risikoreich). Embryotox: Antidepressivum der Wahl; Anpassungsstörungen bei 2–3 von 10 bis zur Geburt exponierten Neugeborenen, meist selbstlimitierend. Postpartale Blutung bei Einnahme im Monat vor der Geburt leicht erhöht (EMA/PRAC 2020, FI). Stillzeit: Embryotox Mittel der Wahl (relative Dosis < 1 %, vereinzelt bis 2,4 %); FI: nicht empfohlen.",
  mech: "Selektive Hemmung des Serotonintransporters (SERT). Zusätzlich Affinität zu σ-Bindungsstellen und schwache Hemmung der Dopaminwiederaufnahme; keine anticholinergen oder antihistaminergen Eigenschaften (K).",
  auf: "Ein Medikament gegen Depressionen, Ängste und Zwänge. In den ersten Tagen sind Übelkeit und Durchfall häufig. Das Mittel nicht plötzlich absetzen, sondern schrittweise reduzieren.",
  cx: {
    schw: ["g", "Mittel der Wahl (Embryotox); PPH beachten"],
    still: ["g", "Mittel der Wahl, RD < 1 %"],
    alt: ["y", "Hyponatriämie, Blutung, Osteoporose"],
    jug: ["y", "Nur Zwang ab 6 J. zugelassen"],
    niere: ["g", "Keine Anpassung; Dialyse: Mittel der Wahl"],
    leber: ["y", "Dosisanpassung; schwer: KI"],
    qtc: ["y", "Gering; bei QT-Prädisposition EKG"],
    epi: ["y", "Instabile Epilepsie: KI"]
  },
  tg: {
    s: ["2B6", "2C19"],
    sens: ["2C19"],
    i: { "2D6": "schwach" },
    se: 3,
    bl: 1,
    na: 1,
    qt: 1
  },
  hw: "22–36 h (Desmethylsertralin 60–100 h)",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · FI Sertralin-neuraxpharm 07/2025 · Embryotox · EMA/PRAC 2020"
});

E2D("citalopram", {
  n: "Citalopram",
  b: ["Cipramil", "Citalopram-Generika"],
  k: "SSRI",
  g: "Antidepressiva",
  kern: [
    "Depression und Panikstörung zugelassen; auch i.v. (Infusionskonzentrat laut P)",
    "QT dosisabhängig: max. 40 mg; Ältere, Leber, 2C19-PM oder 2C19-Hemmer: max. 20 mg",
    "KI: Long-QT, bekannte QTc-Verlängerung, andere QT-verlängernde Mittel",
    "Schwangerschaft: Embryotox Mittel der Wahl; Stillen erlaubt",
    "Schwacher 2D6-Hemmer: mit Tamoxifen kombinierbar (P)"
  ],
  ind: "Depressive Erkrankungen; Panikstörung mit/ohne Agoraphobie.",
  off: "Off-label-Einsätze in K/P nicht gesondert aufgeführt [?]. Studien zur Rezidivprophylaxe laut P nicht bekannt.",
  ki: "Angeborenes Long-QT-Syndrom, bekannte QTc-Verlängerung, gleichzeitige Gabe QT-verlängernder Arzneimittel (Rote-Hand-Brief 2011, K). MAOH (Abstand: 14 Tage nach irreversiblem MAOH, 1 Tag nach Moclobemid; MAOH frühestens 7 Tage nach Citalopram), Linezolid; Thioridazin, Pimozid. P zusätzlich: keine Verordnung bei instabiler Epilepsie oder Anfallsanamnese.",
  dos: {
    e: "Depression: 20 mg morgens (auch Erhaltungsdosis), max. 40 mg (seit 2011 von 60 auf 40 mg gesenkt wegen QTc). Panikstörung: 10 mg, im Verlauf max. 40 mg. Eingeschränkte Leberfunktion: max. 20 mg (Rote-Hand-Brief 2011). i.v.-Dosis entspricht der oralen Dosis (P).",
    a: "Max. 20 mg (Rote-Hand-Brief 2011: „ältere Patienten“; P: > 60 J., Start 10 mg).",
    j: "Keine Zulassung < 18 J. [?]"
  },
  nw: "Sehr häufig Übelkeit, Mundtrockenheit, Schwitzen, Kopfschmerz, Schläfrigkeit oder Schlaflosigkeit, Tremor. Häufig Unruhe, sexuelle Störungen, Appetitminderung, Tachykardie, Orthostase. Gelegentlich Krampfanfälle, Bradykardie, Synkopen. Selten Hyponatriämie/SIADH (Ältere), Hepatitis, Thrombozytopenie, Blutungsneigung. Dosisabhängige QTc-Verlängerung mit Torsade-de-pointes-Fällen, auch bei niedriger Dosis möglich. Seltene Müdigkeit (schwach antihistaminerg).",
  ia: "QT: keine Kombination mit Thioridazin, Pimozid; andere QT-verlängernde Mittel formal kontraindiziert; Hypokaliämie/Hypomagnesiämie verursachende Mittel meiden. Serotonerg: MAOH, Linezolid, Triptane, Tryptophan, Ondansetron, Tramadol. CYP2C19-Hemmer (Fluconazol, Omeprazol, Esomeprazol, Ticlopidin) bzw. -Induktoren (Phenytoin): Spiegelkontrolle, mit Hemmern max. 20 mg; Cimetidin Vorsicht. Thiazide/ACE-Hemmer: Hyponatriämie. TAH/Antikoagulanzien: Blutung. Clopidogrel: Citalopram hemmt 2C19 nicht und ist unter SSRI vorzuziehen (K).",
  ktr: "EKG vor Beginn und nach Dosissteigerung, weil die QTc-Verlängerung dosisabhängig ist; Kalium und Magnesium, weil Hypokaliämie das Torsade-Risiko erhöht. Natrium, v. a. bei Älteren (SIADH). Blutungs- und Anfallsanamnese. Suizidalität eng bis 24 J. zu Beginn. TDM 50–130 ng/ml laut P-Textauszug; mit AGNP-Tabelle abgleichen [?].",
  ss: "Schwangerschaft: Benkert RS 4 (möglichst vermeiden; wenn nötig neben Escitalopram und Sertralin am wenigsten risikoreich). Embryotox: Mittel der Wahl, kein nennenswertes Fehlbildungsrisiko; neonatale Anpassungsstörungen möglich. Postpartale Blutung bei Einnahme im Monat vor der Geburt leicht erhöht (EMA/PRAC 2020). Stillzeit: Embryotox erlaubt; relative Dosis meist 3–6 %, einzeln bis 18 %.",
  mech: "Selektive Hemmung des Serotonintransporters; Razemat aus S-Citalopram (aktiv, = Escitalopram) und R-Citalopram. Schwach antihistaminerg (K/P).",
  auf: "Ein Medikament gegen Depressionen und Panikattacken. Es kann den Herzrhythmus beeinflussen, deshalb wird ein EKG geschrieben und die Höchstdosis nicht überschritten. Bei Herzklopfen, Ohnmacht oder Atemnot sofort ärztliche Hilfe holen.",
  cx: {
    schw: ["g", "Mittel der Wahl (Embryotox); PPH beachten"],
    still: ["y", "Erlaubt; RD 3–6 %, einzeln bis 18 %"],
    alt: ["y", "Max. 20 mg wegen QT; Hyponatriämie"],
    niere: ["y", "Leicht–mäßig keine Anpassung; schwer Vorsicht"],
    leber: ["y", "Max. 20 mg"],
    qtc: ["r", "KI bei QT-Verlängerung/QT-Komedikation"],
    epi: ["y", "Instabil/Anfallsanamnese: meiden (P)"]
  },
  tg: {
    s: ["2C19", "3A4"],
    sens: ["2C19"],
    i: { "2D6": "schwach" },
    qt: 2,
    se: 3,
    bl: 1,
    na: 1,
    kr: 1
  },
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · Rote-Hand-Brief Cipramil 31.10.2011 · Embryotox · EMA/PRAC 2020"
});

E2D("escitalopram", {
  n: "Escitalopram",
  b: ["Cipralex", "Escitalopram-Generika"],
  k: "SSRI",
  g: "Antidepressiva",
  kern: [
    "Depression, Panik, GAS, soziale Angst, Zwang zugelassen; selektivster SSRI (P)",
    "10 mg (Panik Start 5 mg), max. 20 mg; ≥ 65 J. max. 10 mg (QT)",
    "KI: Long-QT, bekannte QTc-Verlängerung, QT-verlängernde Komedikation",
    "CYP2C19: Poor Metabolizer max. 10 mg; 2C19-Hemmer → Spiegelkontrolle",
    "10 mg Escitalopram ≈ 40 mg Citalopram (K)"
  ],
  ind: "Episoden einer Major Depression; Panikstörung mit/ohne Agoraphobie; generalisierte Angststörung; soziale Angststörung; Zwangsstörung.",
  off: "PTBS, prämenstruelle dysphorische Störung, klimakterische Beschwerden (K; Evidenzgrad dort nicht angegeben).",
  ki: "Bekannte QT-Verlängerung, angeborenes Long-QT-Syndrom, gleichzeitige QT-verlängernde Arzneimittel (Rote-Hand-Brief 12/2011). MAOH (frühestens 7 Tage nach Escitalopram; nach irreversiblem MAOH 14 Tage, nach Moclobemid 2 Tage), Linezolid; Thioridazin, Pimozid. P: keine Verordnung bei schweren Leber- und Nierenfunktionsstörungen.",
  dos: {
    e: "Depression, GAS, soziale Angst, Zwang: 10 mg morgens (Start und Erhaltung), max. 15–20 mg; soziale Angst ggf. Reduktion auf 5 mg. Panik: 5 mg für 1 Woche, dann 10 mg, max. 20 mg. Leichte bis mittelschwere Leberfunktionsstörung: Start 5 mg. CYP2C19-Poor-Metabolizer: max. 10 mg.",
    a: "≥ 65 J.: Start 5 mg, max. 10 mg (K, P, Rote-Hand-Brief 2011).",
    j: "Keine Zulassung < 18 J. [?]"
  },
  nw: "Sehr häufig Übelkeit, Kopfschmerz. Häufig Müdigkeit oder Schlaflosigkeit, Unruhe, Schwitzen, Diarrhö/Obstipation, Gewichtszunahme, sexuelle Störungen. Gelegentlich Tachykardie, Synkopen, gastrointestinale Blutungen, Menorrhagie. Selten Hyponatriämie/SIADH (Ältere), Bradykardie, Akathisie. Dosisabhängige QTc-Verlängerung mit Torsade-de-pointes-Fällen. Serotoninsyndrom.",
  ia: "QT: Thioridazin, Pimozid kontraindiziert; andere QT-verlängernde Mittel formal kontraindiziert; Hypokaliämie/Hypomagnesiämie verursachende Mittel meiden. Serotonerg: MAOH, Linezolid, Ondansetron, Tryptophan, Tramadol, Johanniskraut. Krampfschwelle senkende Mittel (Mefloquin, Bupropion): Vorsicht. CYP2C19-Hemmer (Cimetidin, Omeprazol, Esomeprazol, Ticlopidin) oder -Induktoren (Rifampicin): Spiegelkontrolle. Thiazide/ACE-Hemmer: Hyponatriämie. TAH/Antikoagulanzien: Blutung.",
  ktr: "EKG vor Beginn und bei Dosissteigerung, weil die QTc-Verlängerung dosisabhängig ist; Kalium/Magnesium. Natrium, v. a. bei Älteren (SIADH). Blutungs- und Anfallsanamnese. Suizidalität eng bis 24 J. zu Beginn. TDM 20–80 ng/ml (K/P); CYP2C19-Status erklärt Spiegelabweichungen (PM brauchen etwa die halbe, UM die doppelte Dosis, K).",
  ss: "Schwangerschaft: Benkert RS 4 (widersprüchliche Daten; möglichst vermeiden; wenn nötig neben Citalopram und Sertralin am wenigsten risikoreich). Embryotox: grau, nicht Mittel der Wahl; Citalopram oder Sertralin bevorzugen. Postpartale Blutung bei Einnahme im Monat vor der Geburt leicht erhöht (EMA/PRAC 2020). Stillzeit: Embryotox erlaubt, relative Dosis 2,6–5,3 % (einzeln bis 9 %); bei Neueinstellung Sertralin vorziehen.",
  mech: "S-Enantiomer des Citaloprams, hoch selektive Hemmung des Serotonintransporters. Abbau bevorzugt über CYP2C19, nachgeordnet 3A4 und 2D6, zu schwach aktiven Metaboliten (K).",
  auf: "Ein Medikament gegen Depressionen und Angststörungen. Übelkeit in den ersten Tagen ist häufig. Wegen möglicher Herzrhythmusstörungen wird ein EKG geschrieben; bei Herzklopfen oder Ohnmacht sofort ärztliche Hilfe holen.",
  cx: {
    schw: ["y", "Grau; Sertralin/Citalopram bevorzugen"],
    still: ["y", "Erlaubt; RD 2,6–5,3 %"],
    alt: ["y", "Max. 10 mg wegen QT; Hyponatriämie"],
    niere: ["y", "Schwere NI: keine Verordnung (P)"],
    leber: ["y", "Start 5 mg; schwer: keine Verordnung"],
    qtc: ["r", "KI bei QT-Verlängerung/QT-Komedikation"],
    epi: ["y", "Instabile Epilepsie: Vorsicht"]
  },
  tg: {
    s: ["2C19", "3A4", "2D6"],
    sens: ["2C19"],
    qt: 1,
    se: 3,
    bl: 1,
    na: 1
  },
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · Rote-Hand-Brief Cipralex 05.12.2011 · Embryotox · EMA/PRAC 2020"
});

E2D("fluoxetin", {
  n: "Fluoxetin",
  b: ["Fluctin", "Fluoxetin-Generika"],
  k: "SSRI",
  g: "Antidepressiva",
  kern: [
    "Depression, Zwang, Bulimie; einziges SSRI für Depression ab 8 J. (nach Psychotherapie)",
    "Starker 2D6- und 2C19-Hemmer: Atomoxetin, TZA, Metoprolol, Tamoxifen, Codein beachten",
    "HWZ Tage bis Wochen (Norfluoxetin): Interaktionen wirken wochenlang nach",
    "Wechsel auf MAO-Hemmer erst 5 Wochen nach Absetzen",
    "Aktivierend, kaum Absetzsymptome; Stillzeit: Kumulation beim Säugling"
  ],
  ind: "Episoden einer Major Depression; Zwangsstörung; Bulimie (ergänzend zu Psychotherapie). Kinder/Jugendliche ab 8 J.: mittelgradige bis schwere Major Depression, wenn nach 4–6 Sitzungen psychologischer Behandlung kein Ansprechen (FI).",
  off: "Panikstörung und prämenstruelle dysphorische Störung (jeweils in den USA zugelassen), PTBS, soziale Angst, klimakterische Beschwerden, Binge-Eating, Colon irritabile (K). Kombination mit Olanzapin bei therapieresistenter und bipolarer Depression (USA zugelassen, K).",
  ki: "Irreversible nichtselektive MAOH; Metoprolol bei Herzinsuffizienz (FI 05/2026). K/P: keine Kombination mit Tamoxifen, Codein, Hydrocodon, Tramadol, Dextromethorphan, Thioridazin, Pimozid.",
  dos: {
    e: "Depression: 20 mg morgens, Erhaltung meist 30 mg, max. 80 mg (K: Steigerung bis 60 mg möglich, Höchstdosis 80 mg). Zwang: 20–60 mg. Bulimie: 60 mg. Leberfunktionsstörung: Dosisanpassung. Steady State erst nach Wochen.",
    a: "Max. 60 mg (K, P).",
    j: "Ab 8 J. (MDD): Start 10 mg, nach 1–2 Wochen 20 mg; Erfahrung über 20 mg begrenzt; Leichtgewichtige ggf. niedriger; nach 9 Wochen ohne Besserung absetzen, nach 6 Monaten Notwendigkeit prüfen (FI)."
  },
  nw: "Sehr häufig Schlaflosigkeit, Kopfschmerz, Übelkeit, Diarrhö, Müdigkeit. Häufig Unruhe, Nervosität, Angst, Appetit- und Gewichtsverlust, Tremor, Schwitzen, sexuelle Störungen; Aktivierung zu Therapiebeginn. Gelegentlich suizidale Gedanken, Hypomanie, gastrointestinale Blutung. Selten allergische Haut- und Systemreaktionen (dann absetzen), Hepatitis, Akathisie, Hyponatriämie/SIADH; Hypoglykämie bei Diabetikern (nach Absetzen Hyperglykämie möglich). QTc-Verlängerung möglich.",
  ia: "Fluoxetin und Norfluoxetin hemmen CYP2D6 und 2C19 stark, 3A4 gering: Spiegel ↑ von Amitriptylin, Clomipramin, Imipramin, Atomoxetin, Sertindol, mehreren Antipsychotika (mehr EPS möglich) → TDM; Metoprolol (Bisoprolol wählen). Prodrugs abgeschwächt: Tamoxifen (keine Kombination), Codein, Hydrocodon, Tramadol, Clopidogrel (2C19). Serotonerg: MAOH, Linezolid, Triptane, TZA, Johanniskraut, Tramadol, Dextromethorphan. QT: Thioridazin, Pimozid. Phenytoin: toxische Effekte berichtet. Thiazide/ACE-Hemmer: Hyponatriämie. TAH/Antikoagulanzien: Blutung. Interaktionsrisiko besteht Wochen nach Absetzen fort.",
  ktr: "Spiegel der Komedikation (TZA, Antipsychotika, Atomoxetin), weil Fluoxetin deren Abbau über 2D6/2C19 hemmt. Natrium (SIADH, Ältere). EKG empfohlen, engmaschig bei kardialer Vorschädigung. Blutzucker bei Diabetes häufiger. Blutungs- und Anfallsanamnese. Suizidalität eng bis 24 J. zu Beginn. TDM Fluoxetin + Norfluoxetin 120–500 ng/ml (K/P).",
  ss: "Schwangerschaft: Benkert RS 5 (abgeraten). Embryotox: grau; überwiegend kein erhöhtes Fehlbildungsrisiko, Herzfehler-Assoziation nicht ausgeschlossen; Anpassungsstörungen bei etwa 3 von 10 bis zur Geburt exponierten Neugeborenen. Postpartale Blutung bei Einnahme im Monat vor der Geburt leicht erhöht (EMA/PRAC 2020). Stillzeit: relative Dosis 3–6,5 % (einzeln bis 20 %), Norfluoxetin bei gestillten Kindern teils im Erwachsenen-Therapiebereich; Sertralin bei Neueinstellung bevorzugen (Embryotox).",
  mech: "Selektive Serotonin-Wiederaufnahmehemmung durch Fluoxetin und den aktiven Metaboliten Norfluoxetin; zusätzlich 5-HT2C-Antagonismus mit Verstärkung noradrenerger und dopaminerger Übertragung (aktivierend). Nichtlineare Kinetik durch Autoinhibition (K).",
  auf: "Ein Medikament gegen Depressionen, Zwänge und Essanfälle, das eher antreibt als müde macht. Es bleibt sehr lange im Körper, deshalb wirken Wechselwirkungen mit anderen Medikamenten noch Wochen nach dem Absetzen nach. Vor jedem neuen Medikament die Einnahme erwähnen.",
  cx: {
    schw: ["y", "Grau; RS 5 (Benkert); PPH beachten"],
    still: ["y", "Norfluoxetin kumuliert beim Säugling"],
    alt: ["y", "Max. 60 mg; Hyponatriämie; Interaktionen"],
    jug: ["y", "MDD ab 8 J. zugelassen; Suizidalität"],
    leber: ["y", "Dosisanpassung"],
    qtc: ["y", "QT möglich; Vorschädigung: EKG"],
    epi: ["y", "Anfallsbereitschaft: Vorsicht"]
  },
  tg: {
    s: ["2D6", "2B6", "2C19", "2C9"],
    i: { "2D6": "stark", "2C19": "stark", "3A4": "schwach" },
    se: 3,
    bl: 1,
    na: 1,
    qt: 1
  },
  hw: "1–6 d (Norfluoxetin 4–16 d)",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · FI Fluoxetin dura 05/2026 · Embryotox · EMA/PRAC 2020"
});

E2D("paroxetin", {
  n: "Paroxetin",
  b: ["Seroxat", "Paroxetin-Generika"],
  k: "SSRI",
  g: "Antidepressiva",
  kern: [
    "Breites Zulassungsspektrum: Depression, Panik, soziale Angst, GAS, Zwang, PTBS",
    "Absetzsyndrom häufiger als bei anderen SSRI: über Wochen bis Monate ausschleichen",
    "Schwangerschaft: Herzfehler-Signal im 1. Trimenon, RS 5 – nicht neu ansetzen",
    "Starker 2D6-Hemmer: Tamoxifen, Codein, Tramadol, Metoprolol; leicht anticholinerg",
    "Gewichtszunahme häufiger als bei anderen SSRI; ungünstigere Nutzen-Risiko-Relation (P)"
  ],
  ind: "Episoden einer Major Depression; Panikstörung mit/ohne Agoraphobie; soziale Angststörung; generalisierte Angststörung; Zwangsstörung; PTBS.",
  off: "Klimakterische Beschwerden 10–25 mg (in den USA mit 7,5 mg zugelassen, P).",
  ki: "MAOH (MAOH frühestens 7 Tage nach Paroxetin; Paroxetin 14 Tage nach irreversiblem MAOH bzw. 24 h nach Moclobemid), Linezolid; Thioridazin, Pimozid (Spiegel ↑, QT); Tamoxifen. P: keine Verordnung bei schweren Leber- und Nierenerkrankungen.",
  dos: {
    e: "Depression: 20 mg morgens (meist 30 mg), max. 50 mg. Panik: 10 mg → 40 mg, max. 60 mg. GAS, soziale Angst, PTBS: 20 mg, max. 50 mg. Zwang: 20 → 40 mg, max. 60 mg. Leber-/Nierenfunktionsstörung: Dosisanpassung. Absetzen sehr langsam über Wochen/Monate.",
    a: "Max. 40 mg (P).",
    j: "Keine Zulassung < 18 J. [?]"
  },
  nw: "Sehr häufig Übelkeit, sexuelle Funktionsstörungen. Häufig Kopfschmerz, Schläfrigkeit oder Schlaflosigkeit, Schwindel, Schwitzen, Tremor, Mundtrockenheit, Obstipation, Gewichtszunahme, Cholesterinanstieg. Gelegentlich Blutungsneigung, Blutzuckerschwankungen bei Diabetes, Harnverhalt, EPS. Selten Hyperprolaktinämie, Krampfanfälle, Akathisie, RLS, Hyponatriämie/SIADH; sehr selten akutes Glaukom, Priapismus. Ausgeprägtes Absetzsyndrom.",
  ia: "Starke 2D6-Hemmung: Tamoxifen (Endoxifen ↓, keine Kombination; Alternative Anastrozol), Codein, Hydrocodon, Tramadol (Wirkverlust, keine Kombination); Spiegel ↑ von Metoprolol, Donepezil, TZA (nur unter TZA-Spiegelkontrolle), weiteren 2D6-Substraten. Thioridazin, Pimozid: Spiegel ↑, QT. Serotonerg: MAOH, Linezolid, Triptane, Tryptophan, Ondansetron, Dextromethorphan. Pravastatin: Blutzucker ↑. Antazida senken Resorption der Suspension. Thiazide/ACE-Hemmer: Hyponatriämie. TAH/Antikoagulanzien: Blutung.",
  ktr: "Natrium (SIADH). Blutungs- und Anfallsanamnese. Leber- und Nierenwerte bei Funktionsstörung (Dosisanpassung, engmaschige Laborkontrollen). EKG bei kardialer Vorschädigung (K). Suizidalität eng bis 24 J. zu Beginn. Beim Absetzen auf Absetzsymptome achten, weil sie unter Paroxetin häufiger sind. TDM 20–65 ng/ml (P).",
  ss: "Schwangerschaft: Benkert RS 5 (sehr hohes Risikoprofil; dringend abgeraten). Embryotox: grau; gering erhöhtes Risiko für Herzfehlbildungen nach Einnahme im 1. Trimenon; bei bestehender guter Einstellung vertretbar, bei Neueinstellung/Planung Sertralin oder Citalopram. Postpartale Blutung bei Einnahme im Monat vor der Geburt leicht erhöht (EMA/PRAC 2020). Stillzeit: relative Dosis 1–2 %, Stillen erlaubt (Embryotox).",
  mech: "Selektive Hemmung des Serotonintransporters mit schwacher anticholinerger Potenz (P). Starke Hemmung von CYP2D6 (K/P).",
  auf: "Ein Medikament gegen Depressionen und Angststörungen. Es darf auf keinen Fall plötzlich abgesetzt werden, weil sonst Schwindel, Unruhe und grippeähnliche Beschwerden auftreten können; die Dosis wird langsam verringert. Vor einer Schwangerschaft die Behandlung ärztlich besprechen.",
  cx: {
    schw: ["r", "RS 5; Herzfehler-Signal 1. Trimenon"],
    still: ["g", "RD 1–2 %, Stillen erlaubt"],
    alt: ["y", "Max. 40 mg; anticholinerg; Hyponatriämie"],
    niere: ["y", "Dosisreduktion; schwer: keine Verordnung"],
    leber: ["y", "Dosisanpassung; schwer: keine Verordnung"],
    qtc: ["y", "Bei QT-Prädisposition meiden (K)"],
    epi: ["y", "Anfallsbereitschaft: Vorsicht"]
  },
  tg: {
    s: ["2D6"],
    i: { "2D6": "stark" },
    se: 3,
    ac: 1,
    bl: 1,
    na: 1,
    qt: 1
  },
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · Embryotox · EMA/PRAC 2020"
});

E2D("fluvoxamin", {
  n: "Fluvoxamin",
  b: ["Fevarin", "Fluvoxamin-neuraxpharm"],
  k: "SSRI",
  g: "Antidepressiva",
  kern: [
    "Depression und Zwang (Zwang ab 8 J.); IRis 5 – höchstes Interaktionsrisiko der SSRI",
    "Starker 1A2- und 2C19-Hemmer: Clozapin (!), Duloxetin, Agomelatin, Tizanidin, TZA ↑",
    "KI: Tizanidin, MAOH, Pimozid; Duloxetin- und Agomelatin-Kombination verboten",
    "Rauchen senkt Spiegel; Kaffee/Tee meiden (P)",
    "50 mg abends, bis 300 mg; ab 150 mg (K) bzw. über 150 mg (P) Dosis teilen"
  ],
  ind: "Depressive Erkrankungen (Episoden einer Major Depression); Zwangsstörung (Erwachsene und Kinder ab 8 J.).",
  off: "Soziale Angststörung (in den USA zugelassen), Panikstörung, GAS, PTBS, Bulimie, Binge-Eating (K; Evidenzgrad dort nicht angegeben). Kombination mit Clomipramin bei Zwang unter Spiegelkontrolle (P).",
  ki: "Gleichzeitige Gabe von Tizanidin, MAOH (MAOH frühestens 7 Tage nach Fluvoxamin; Fluvoxamin 14 Tage nach irreversiblem MAOH bzw. 2 Tage nach Moclobemid) oder Pimozid (FI 04/2022). Keine Kombination mit Agomelatin (P) und Duloxetin (Duloxetin-FI, K). Depression bei < 18 J.: nicht anwenden (FI).",
  dos: {
    e: "Depression: 50 mg abends → 100 mg → 150 mg, max. 300 mg; Steigerung in 4–7-Tage-Schritten. Zwang: 50 → 100–300 mg. Bis 150 mg abendliche Einmalgabe, darüber 2 Gaben, die höhere abends (P); K: ab 150 mg auf 2–3 Gaben verteilen. Leber-/Nierenfunktionsstörung: Dosisanpassung.",
    a: "Langsamer steigern, vorsichtig dosieren (FI); keine feste Höchstdosis angegeben.",
    j: "Zwang ab 8 J.: Start 25 mg, alle 4–7 Tage +25 mg, max. 200 mg; über 50 mg in 2 Gaben (FI 04/2022)."
  },
  nw: "Häufig Übelkeit, Erbrechen, Schwindel, Kopfschmerz, Schläfrigkeit oder Schlafstörung, Unruhe, Tremor, Appetitlosigkeit, Tachykardie, Schwitzen; bei manchen sedierend. Gelegentlich Verwirrtheit, Halluzinationen, Orthostase, EPS, Angioödem; sexuelle Störungen unter den SSRI wahrscheinlich am seltensten. Selten Leberfunktionsstörungen, Krampfanfälle, Hyperprolaktinämie, Hyponatriämie/SIADH, Serotoninsyndrom, Blutungsneigung.",
  ia: "Starke Hemmung von CYP1A2 und 2C19, zusätzlich 2C9 (und 3A4, siehe unten): Spiegel ↑ von Clozapin (!), Amitriptylin, Clomipramin, Imipramin, Methadon, Duloxetin (KI), Agomelatin (KI), Tizanidin (KI); Mittel mit geringer therapeutischer Breite nur mit Spiegelkontrolle. Erhöhte Spiegel von Terfenadin, Astemizol, Cisaprid (QT). Clopidogrel abgeschwächt (2C19). Serotonerg: MAOH, Linezolid, Triptane, TZA, Johanniskraut, Tramadol. Rauchen (1A2-Induktion) senkt Spiegel; Koffein (Tee, Kaffee) meiden. Thiazide/ACE-Hemmer: Hyponatriämie. TAH/Antikoagulanzien: Blutung. Weitere 1A2-Substrate wie Olanzapin, Melatonin [?].",
  ktr: "Spiegel der Komedikation (v. a. Clozapin, TZA, Methadon), weil Fluvoxamin deren Abbau stark hemmt. Natrium (SIADH, Ältere). EKG engmaschig bei kardialer Vorschädigung (P). Blutungs- und Anfallsanamnese. Suizidalität eng bis 24 J. zu Beginn. TDM 60–230 ng/ml (K/P).",
  ss: "Schwangerschaft: Benkert RS 4 (möglichst vermeiden). Embryotox: grau; überwiegend kein erhöhtes Fehlbildungsrisiko, bei Neueinstellung Sertralin oder Citalopram bevorzugen. Postpartale Blutung bei Einnahme im Monat vor der Geburt leicht erhöht (EMA/PRAC 2020). Stillzeit: relative Dosis 0,8–1,58 %, Stillen erlaubt (Embryotox); bei Neueinstellung Sertralin.",
  mech: "Selektive Hemmung des Serotonintransporters; zusätzlich Bindung und agonistische Wirkung an σ1-Rezeptoren. Keine anticholinergen oder antihistaminergen Eigenschaften; Abbau über CYP2D6 und 1A2 ohne aktive Metaboliten (K).",
  auf: "Ein Medikament gegen Depressionen und Zwänge. Es verändert den Abbau vieler anderer Medikamente und auch von Koffein; jedes neue Medikament sollte vorher ärztlich geprüft werden. Rauchen oder Rauchstopp kann die Wirkung verändern.",
  cx: {
    schw: ["y", "Grau; Sertralin/Citalopram bevorzugen"],
    still: ["g", "RD 0,8–1,6 %, Stillen erlaubt"],
    alt: ["y", "Langsam steigern; Interaktionen"],
    jug: ["y", "Nur Zwang ab 8 J.; MDD < 18 J. nicht"],
    niere: ["y", "Dosisanpassung"],
    leber: ["y", "Dosisanpassung"],
    qtc: ["y", "Vorschädigung: EKG engmaschig"],
    epi: ["y", "Anfallsbereitschaft: Vorsicht"]
  },
  tg: {
    s: ["2D6", "1A2"],
    i: { "1A2": "stark", "2C19": "stark", "3A4": "mittel", "2C9": "mittel" },
    se: 3,
    bl: 1,
    na: 1,
    qt: 1,
    sd: 1
  },
  hw: "21–43 h",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · FI Fevarin 04/2022 · Embryotox · EMA/PRAC 2020"
});

E2D("venlafaxin", {
  n: "Venlafaxin",
  b: ["Trevilor retard", "Venlafaxin-Generika"],
  k: "SNRI",
  g: "Antidepressiva",
  kern: [
    "Depression inkl. Rezidivprophylaxe, GAS, Panik, soziale Angst; retard bevorzugen",
    "75 mg, stationär ab 150 mg; max. 375 mg (Angst max. 225 mg)",
    "Dosisabhängig Blutdruck ↑: RR-Kontrollen, schlecht eingestellte Hypertonie meiden",
    "Ausgeprägte Absetzeffekte: über Wochen bis Monate ausschleichen",
    "Letalität bei Überdosis höher als unter SSRI (geringer als TZA)"
  ],
  ind: "Episoden einer Major Depression; Rezidivprophylaxe der Major Depression; generalisierte Angststörung, Panikstörung mit/ohne Agoraphobie, soziale Angststörung (Angstindikationen nur Retardform).",
  off: "PTBS, chronische und neuropathische Schmerzen (75–150 mg), Migräneprophylaxe, klimakterische Beschwerden (37,5–75 mg), PMDS, Zwang, Fibromyalgie, Narkolepsie (K; Evidenzgrad dort nicht angegeben).",
  ki: "MAOH (nach Venlafaxin 1 Woche Abstand; nach Tranylcypromin 2 Wochen; nach Moclobemid am Folgetag möglich), Linezolid; Thioridazin, Pimozid. Relative KI (K): schwere Leber-/Nierenfunktionsstörung, erhöhte Anfallsbereitschaft, unbehandelte oder schlecht eingestellte Hypertonie, kardiale Risikofaktoren (Herzinsuffizienz, schwere Rhythmusstörungen), Engwinkelglaukom-Risiko.",
  dos: {
    e: "Depression: 75 mg (Start- und Erhaltungsdosis), ggf. 150 mg, max. 375 mg; Steigerung im Abstand ≥ 2 Wochen, ggf. schneller (frühestens alle 4 Tage); stationär Start mit 150 mg möglich (P). Panik: 37,5 mg für 4–7 Tage, dann 75 mg, max. 225 mg. GAS/soziale Angst: 75 mg, max. 225 mg. Retard einmal täglich, unretardiert auf 2–3 Gaben. Leberinsuffizienz: bis −50 %. Niereninsuffizienz: −25–50 %, Dialyse −50 % (K).",
    a: "Langsame Dosissteigerung (P); Hyponatriämie v. a. im Alter.",
    j: "Keine Zulassung < 18 J. [?]"
  },
  nw: "Sehr häufig Übelkeit, Kopfschmerz, Schwindel, Mundtrockenheit, Obstipation, Schwitzen (auch nachts), Schlaflosigkeit, Sedierung. Häufig Blutdruckanstieg, Tachykardie, Palpitationen, Unruhe, Akathisie, Tremor, sexuelle Störungen, Miktionsstörungen, Cholesterinanstieg, Mydriasis. Gelegentlich Manie/Hypomanie, Orthostase, gastrointestinale Blutungen. Selten Hyponatriämie/SIADH, Rhabdomyolyse, Pankreatitis, Hepatitis, Krampfanfälle, Delir; Einzelfälle hypertensiver Entgleisung. QTc-Verlängerung v. a. bei Überdosis. Laut einer Studie häufiger Manien als unter Sertralin oder Bupropion (K).",
  ia: "Serotonerg: MAOH, Linezolid, Triptane, Tryptophan, Ondansetron, TZA, Johanniskraut, Tramadol. QT: Thioridazin, Pimozid; andere QT-Verlängerer und Hypokaliämie/Hypomagnesiämie verursachende Mittel mit Vorsicht. CYP2D6-Hemmer (Fluoxetin, Melperon): weniger O-Desmethylvenlafaxin, Summe meist unverändert, keine Dosisanpassung nötig (Spiegel kontrollieren). CYP3A4-Hemmer (Ketoconazol): Summe etwa +30 %. CYP2C19-Hemmer (Fluconazol, Felbamat): Spiegelkontrolle. Noradrenerge Wirkung: Herzfrequenz und Blutdruck ↑ (K). Thiazide/ACE-Hemmer: Hyponatriämie. TAH/Antikoagulanzien: Blutung.",
  ktr: "Blutdruck zu Beginn und nach jeder Dosissteigerung, häufiger bei höherer Dosis und vorbestehender Hypertonie, weil der Anstieg dosisabhängig ist. Natrium (SIADH). EKG empfohlen. Leber- und Nierenwerte (Dosisanpassung). Blutungs- und Anfallsanamnese. Suizidalität eng bis 24 J. zu Beginn. TDM Venlafaxin + O-Desmethylvenlafaxin 100–400 ng/ml (K/P).",
  ss: "Schwangerschaft: Benkert RS 5 (abgeraten). Embryotox: grau; kein erhöhtes Gesamtfehlbildungsrisiko (> 4.000 Expositionen), Herzfehler-Signal in Mehrzahl der Studien nicht bestätigt; Sertralin oder (Es-)Citalopram besser untersucht. Postpartale Blutung bei Einnahme im Monat vor der Geburt leicht erhöht (EMA/PRAC 2020). Stillzeit: relative Dosis 3,2–13,3 % (einzeln 23 %), aktiver Metabolit kumuliert; unter Vorbehalt bei Monotherapie und Beobachtung des Kindes (Embryotox).",
  mech: "Hemmung der Serotonin- und Noradrenalinwiederaufnahme: bis 75–150 mg vorwiegend serotonerg, ab 225–375 mg zusätzlich noradrenerg; schwache Dopamin-Wiederaufnahmehemmung. Aktiver Metabolit O-Desmethylvenlafaxin entsteht über CYP2D6; keine Affinität zu Acetylcholin-, Histamin- oder α1-Rezeptoren (K).",
  auf: "Ein Medikament gegen Depressionen und Angststörungen. Es kann den Blutdruck erhöhen, deshalb wird er regelmäßig gemessen. Nicht plötzlich absetzen, weil sonst starke Absetzbeschwerden auftreten können.",
  cx: {
    schw: ["y", "Grau; RS 5 (Benkert); PPH beachten"],
    still: ["y", "RD bis 13 %; nur unter Vorbehalt"],
    alt: ["y", "Langsam steigern; RR, Hyponatriämie"],
    niere: ["y", "−25–50 %; Dialyse −50 %"],
    leber: ["y", "Bis −50 %; Labor"],
    qtc: ["y", "QT v. a. bei Überdosis"],
    epi: ["y", "Erhöhte Anfallsbereitschaft: rel. KI"]
  },
  tg: {
    s: ["2D6", "2C19", "3A4"],
    se: 3,
    bl: 1,
    na: 1,
    qt: 1,
    stim: 1
  },
  hw: "retard 14–18 h (O-Desmethylvenlafaxin 10–17 h)",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · Embryotox · EMA/PRAC 2020"
});

E2D("duloxetin", {
  n: "Duloxetin",
  b: ["Cymbalta", "Duloxetin-Generika"],
  k: "SNRI",
  g: "Antidepressiva",
  kern: [
    "Depression, GAS, Schmerz bei diabetischer Polyneuropathie, Belastungsinkontinenz",
    "KI: Leberfunktionsstörung, schwere Niereninsuffizienz, unkontrollierte Hypertonie",
    "KI mit 1A2-Hemmern (Fluvoxamin, Ciprofloxacin, Enoxacin); Raucher: Spiegel −50 %",
    "Mittlerer 2D6-Hemmer: keine Kombination mit Metoprolol (P)",
    "Leberwerte und RR regelmäßig; keine QT-Verlängerung bekannt (P)"
  ],
  ind: "Depressive Erkrankungen (auch Langzeitbehandlung); generalisierte Angststörung; Schmerzen bei diabetischer Polyneuropathie; Belastungsinkontinenz (P; eigenes Präparat [?]).",
  off: "Fibromyalgiesyndrom und andere Schmerzsyndrome 60–120 mg (in den USA bei Fibromyalgie und chronischen muskuloskelettalen Schmerzen zugelassen, P).",
  ki: "Lebererkrankung mit Funktionseinschränkung; schwere Nierenfunktionseinschränkung (K) – P: keine Verordnung schon bei mittelschwerer Leber- und Nierenfunktionseinschränkung (Quellen uneinig); Kreatinin-Clearance-Grenze aus FI nicht gelesen [?]. Unkontrollierte Hypertonie. MAOH. Starke CYP1A2-Hemmer (Fluvoxamin, Ciprofloxacin, Enoxacin).",
  dos: {
    e: "Depression: Start 60 mg, Erhaltung 60–120 mg. GAS: Start 30 mg, Erhaltung 60–120 mg. Nutzen von 120 gegenüber 60 mg nicht gesichert; Raucher brauchen ggf. bis 120 mg. Diabetische Polyneuropathie: Dosis nicht in K/P-Auszug gelesen [?]. Absetzen über ca. 1 Woche reduzieren (P).",
    a: "Keine eigene Altersdosis in K/P; Stürze in FI-NW-Liste (P), Hyponatriämie v. a. im Alter.",
    j: "Keine Zulassung < 18 J. [?]"
  },
  nw: "Häufig Übelkeit, Obstipation oder Diarrhö, Mundtrockenheit, Schlaflosigkeit oder Müdigkeit, Angst, Schwitzen, Tremor, Blutdruckanstieg, Palpitationen, Appetit- und Gewichtsabnahme, sexuelle Störungen, Stürze. Gelegentlich Hyperglykämie bei Diabetes, Leberenzym- und CK-Anstieg, Hepatitis, Harnverhalt, Mydriasis, gastrointestinale Blutungen. Selten Leberinsuffizienz, Ikterus, Glaukom, Hyponatriämie/SIADH; hypertensive Krisen v. a. bei vorbestehender Hypertonie. Nicht sedierend, keine Gewichtszunahme.",
  ia: "CYP1A2-Hemmer (Fluvoxamin, Ciprofloxacin, Enoxacin): Spiegel stark ↑ – keine Kombination. Rauchen (1A2-Induktion): Spiegel um fast 50 % ↓. Mittlere 2D6-Hemmung: Spiegel von 2D6-Substraten ↑, keine Kombination mit Metoprolol. Serotonerg: MAOH, Linezolid, SSRI, TZA, Tramadol, Venlafaxin, Johanniskraut, Triptane, Tryptophan. Noradrenerge Wirkung: Herzfrequenz und Blutdruck ↑ (K). Thiazide/ACE-Hemmer: Hyponatriämie. TAH/Antikoagulanzien: Blutung.",
  ktr: "Leberwerte regelmäßig, weil Duloxetin hepatotoxisch sein kann und bei Leberfunktionsstörung kontraindiziert ist. Blutdruck, besonders bei Hypertonie und in den ersten Wochen, weil RR und Puls steigen können. Natrium, Gerinnung (P). Blutzucker bei Diabetes. Anfallsanamnese, Augeninnendruck. Suizidalität eng bis 24 J. zu Beginn. TDM 30–120 ng/ml (P).",
  ss: "Schwangerschaft: Benkert RS 5 (P 2021: neue Daten zu postpartaler Blutung und kardialen Fehlbildungen, abgeraten). Embryotox: grau; kein erhöhtes Gesamtfehlbildungsrisiko (ca. 4.500 Expositionen), US-Herzfehler-Signal in skandinavischen Registern nicht bestätigt; bei stabiler Einstellung fortführen, Neueinstellung eher Sertralin oder Escitalopram. Postpartale Blutung im Monat vor der Geburt leicht erhöht (EMA/PRAC 2020). Stillzeit: relative Dosis < 1 %, unter Vorbehalt bei Monotherapie (Embryotox).",
  mech: "Hemmung der Serotonin- und Noradrenalinwiederaufnahme, geringe Dopamin-Wiederaufnahmehemmung (P). Abbau über CYP1A2 und 2D6; mäßiger 2D6-Hemmer (K/P).",
  auf: "Ein Medikament gegen Depressionen, Angst und bestimmte Nervenschmerzen. Blutdruck und Leberwerte werden regelmäßig kontrolliert. Nicht plötzlich absetzen; bei Gelbfärbung der Haut oder dunklem Urin sofort ärztliche Hilfe holen.",
  cx: {
    schw: ["y", "Grau; RS 5 (Benkert); PPH beachten"],
    still: ["y", "RD < 1 %; nur unter Vorbehalt"],
    alt: ["y", "Stürze, RR, Hyponatriämie"],
    niere: ["r", "Schwere NI: KI (P: schon mittelschwer)"],
    leber: ["r", "Leberfunktionsstörung: KI"],
    qtc: ["g", "Keine QT-Verlängerung bekannt (P)"],
    epi: ["y", "Anfallsanamnese: Vorsicht"]
  },
  tg: {
    s: ["1A2", "2D6"],
    sens: ["1A2"],
    i: { "2D6": "mittel" },
    se: 3,
    bl: 1,
    na: 1,
    stim: 1
  },
  hw: "8–17 h (Embryotox)",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · Embryotox · EMA/PRAC 2020"
});

/* ---- gruppe_b ---- */
// Etappe 2 · Gruppe B · Bupropion, TZA, Opipramol, Agomelatin, Vortioxetin, MAO-Hemmer, Esketamin · Stand 07.10.2026
// Quellen: K = Benkert/Hippius Kompendium 2021, P = Benkert Pocket Guide 2021, FI = Fachinformation, Web siehe gruppe_b_belege.md

E2D("bupropion", {
  n: "Bupropion",
  b: ["Elontril", "Zyban", "Bupropion-Generika"],
  k: "NDRI (Noradrenalin-Dopamin-Wiederaufnahmehemmer)",
  g: "Antidepressiva",
  kern: [
    "MDD zugelassen (Elontril); Zyban: Raucherentwöhnung (Privatrezept)",
    "150 mg morgens, max. 300 mg; Ältere, Leber-/Niereninsuffizienz: 150 mg",
    "KI: Anfälle (auch anamnestisch), Bulimie/Anorexie, abrupter Alkohol-/BZD-Entzug",
    "Starker 2D6-Hemmer: nicht mit Tamoxifen oder Metoprolol (P)",
    "Kein Gewicht, keine QTc-Verlängerung, wenig Sexual-NW; RR kontrollieren"
  ],
  ind: "Episoden einer Major Depression (Elontril). Als Zyban (Retardtablette): Raucherentwöhnung in Verbindung mit motivierenden Maßnahmen, nicht GKV-erstattungsfähig. In Kombination mit Naltrexon (Mysimba): Gewichtsmanagement.",
  off: "Prophylaxe der saisonal abhängigen Depression (USA zugelassen), ADHS, sexuelle Funktionsstörungen unter Antidepressiva, RLS-Beschwerden, Bulimie (K; trotz KI bei Bulimie in P so gelistet). Kombination mit SSRI bei SSRI-Non-Response (K/P; Evidenzgrad dort nicht angegeben).",
  ki: "Krampfanfälle in der Anamnese; schwere Leberfunktionsstörung; abrupter Entzug von Alkohol oder abhängigkeitserzeugenden Arzneimitteln (z. B. BZD); Bulimie und Anorexia nervosa, auch anamnestisch; unzureichend eingestellte Hypertonie; Kombination mit MAOH (P). Zyban: bipolare Störung (P). ZNS-Tumor laut FI [?].",
  dos: {
    e: "Start 150 mg morgens, Steigerung auf max. 300 mg als morgendliche Einmalgabe (USA bis 450 mg). In der Regel keine Absetzsymptome (K). Zyban: 150 mg, ab Tag 7 2 × 150 mg (≥ 8 h Abstand), 7–9 Wochen; Rauchstopp ab Woche 2 (P).",
    a: "150 mg/Tag (P; ebenso bei Leber- oder Niereninsuffizienz).",
    j: "Keine Zulassung < 18 J. [?]"
  },
  nw: "Sehr häufig Schlaflosigkeit, Kopfschmerz, Mundtrockenheit, Übelkeit, Erbrechen. Häufig Blutdruckanstieg (teils schwer, auch ohne vorbestehende Hypertonie), Tremor, Agitiertheit, Angst, Appetitlosigkeit, Schwitzen, Hautausschlag, Urtikaria. Gelegentlich Tachykardie, Verwirrtheit, Gewichtsverlust. Dosisabhängig Krampfanfälle (ca. 1/1000). Sehr selten Hepatitis, Harnverhalt, Halluzinationen, Paranoia. Engwinkelglaukom-Risiko. Missbrauch durch Schnupfen oder Injektion mit Anfällen und Todesfällen (P). Kann ein Brugada-Syndrom demaskieren (EMA-PSUSA 2022, FI-Warnhinweis).",
  ia: "MAOH: KI (Bupropion frühestens 14 Tage nach irreversiblem MAOH bzw. 24 h nach Moclobemid). CYP2D6-Hemmung: keine Kombination mit Tamoxifen (aktiver Metabolit ↓) und Metoprolol (eher Bisoprolol); Vorsicht mit allen 2D6-Substraten (z. B. TZA, Vortioxetin). Krampfschwelle senkende Mittel (Antipsychotika, Antidepressiva, Theophyllin, systemische Steroide, Antimalariamittel, Chinolone, sedierende Antihistaminika): Anfallsrisiko ↑. Dopaminergika, Amantadin, Methylphenidat: mehr NW. Abbau über CYP2B6: 2B6-Hemmer/Induktoren und Ritonavir/Efavirenz verändern Spiegel. Digoxin ↓ möglich. Bei Rauchstopp steigen Spiegel von 1A2-Substraten (Clozapin, Olanzapin). Bei Kombination mit SSRI diesen niedrig beginnen (P).",
  ktr: "Anfallsanamnese vor Beginn sicher erheben, weil Anfälle in der Anamnese eine KI sind. Blutdruck regelmäßig, besonders bei Hypertonie, weil teils schwere RR-Anstiege berichtet sind. Routinelabor, Elektrolyte (P). Familienanamnese plötzlicher Herztod/Synkopen, weil Bupropion ein Brugada-Syndrom demaskieren kann (EMA 2022); EKG-Pflicht nicht in Quelle [?]. Suizidalität eng bis 24 J. zu Beginn. TDM: nur Hydroxybupropion messbar, 850–1500 ng/ml (K/P); Bupropion bei Raumtemperatur instabil.",
  ss: "Schwangerschaft: Benkert RS 5 (abgeraten). Embryotox: kein erhöhtes Gesamtfehlbildungsrisiko (ca. 11.000 Expositionen), Herzfehler-Signale nicht bestätigt; bei Neueinstellung Sertralin oder Citalopram bevorzugen, Bupropion aber verordnungsfähig, wenn diese nicht infrage kommen. Stillzeit: relative Dosis nicht sicher berechnet; 2 Fallberichte fraglicher Krampfanfälle bei teilgestillten Säuglingen (Embryotox).",
  mech: "Hemmt die Wiederaufnahme von Noradrenalin und Dopamin (NET, DAT) und setzt beide frei; kaum serotonerg, keine relevante Rezeptorbindung. Wirksam ist v. a. der Hauptmetabolit Hydroxybupropion (Spiegel 3–14-fach höher; Bildung über CYP2B6).",
  auf: "Ein antriebssteigerndes Medikament gegen Depressionen, das kaum müde macht und das Gewicht nicht erhöht. Es kann den Blutdruck steigern und selten Krampfanfälle auslösen, deshalb vorher Fragen zu Anfällen, Essstörungen und Alkohol. Die Tablette nicht teilen, zerkauen oder zerstoßen [?].",
  cx: {
    schw: ["y", "RS 5; Embryotox: 2. Wahl nach SSRI"],
    still: ["y", "Fragliche Säuglingsanfälle (2 Fälle)"],
    alt: ["y", "Max. 150 mg"],
    jug: ["r", "Nicht zugelassen [?]"],
    niere: ["y", "Unterer Dosisbereich, 150 mg"],
    leber: ["r", "Schwere Störung: KI; sonst 150 mg"],
    qtc: ["g", "Keine QTc-Verlängerung (K/P)"],
    epi: ["r", "Anfallsanamnese: KI"],
    sucht: ["r", "KI bei abruptem Alkohol-/BZD-Entzug"],
    fahr: ["g", "Kaum sedierend [?]"]
  },
  tg: {
    s: ["2B6"],
    i: { "2D6": "stark" },
    kr: 2,
    stim: 1
  },
  hw: "9–25 h (Hydroxybupropion 16–26 h)",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · Embryotox · EMA-PSUSA Bupropion 2022 (Brugada)"
});

E2D("amitriptylin", {
  n: "Amitriptylin",
  b: ["Saroten", "Amineurin", "Syneudon", "Amitriptylin-Generika"],
  k: "Trizyklisches Antidepressivum (TZA)",
  g: "Antidepressiva",
  kern: [
    "Depression (sedierend), Schmerz, Spannungskopfschmerz-/Migräneprophylaxe",
    "Depression 25 mg z. N., Ziel 150 mg ambulant, max. 300 mg stationär; Ältere halbe Dosis",
    "Stark anticholinerg: KI Delir, Harnverhalt, Engwinkelglaukom, Ileus, Prostatahyperplasie",
    "Kardiotoxisch: QTc, AV-Block; KI bei kardialer Vorschädigung; > 100 mg mehr Herz-NW",
    "Geringe therapeutische Breite: Überdosis gefährlich, bei Suizidalität kleine Mengen [?]"
  ],
  ind: "Depressive Erkrankungen (Episoden einer Major Depression); langfristige Schmerzbehandlung im Rahmen eines Gesamtkonzepts; neuropathische Schmerzen; Prophylaxe chronischer Spannungskopfschmerzen; Migräneprophylaxe; Enuresis nocturna bei Kindern ab 6 J. (K/P).",
  off: "Schlafstörungen ohne Depression 25–50 mg z. N. (P: nicht zugelassen). Fibromyalgiesyndrom 25–50 mg (P; Zulassungsstatus dort nicht eindeutig [?]).",
  ki: "Kombination mit MAOH (Ausnahme: Einzelfall bei Therapieresistenz unter Vorsichtsmaßnahmen, P). Keine Verordnung bei schweren Leber- und Nierenerkrankungen, Harnverhalt, Engwinkelglaukom, Prostatahyperplasie, Delir, Pylorusstenose, Ileus, Hypokaliämie, kardialer Vorschädigung (v. a. Erregungsleitungsstörungen, KHK), Bradykardie, angeborenem Long-QT-Syndrom (P).",
  dos: {
    e: "Depression: 25 mg vor dem Schlafen, dann 2–3 × 25 mg, Erhaltung 3 × 50 mg oder 2 × 75 mg; max. ambulant 150 mg, stationär 300 mg. Retard abends als Einmalgabe möglich. Schmerz: 25 mg abends, meist 25–75 mg, einzeln bis 150 mg; Migräneprophylaxe 25–150 mg. Langsam ausschleichen. CYP2C19- oder 2D6-PM: halbe Startdosis (K).",
    a: "In der Regel halbe Dosis (P). Erhöhtes Delirrisiko, v. a. bei rascher Steigerung; Orthostase. PRISCUS-Bewertung nicht geprüft [?].",
    j: "Enuresis nocturna ab 6 J. zugelassen; Depression < 18 J. nicht zugelassen [?]."
  },
  nw: "Sehr häufig Müdigkeit, Benommenheit, Schwindel, Mundtrockenheit, Obstipation, Akkommodationsstörungen, Schwitzen, Tremor, Hypotonie und Orthostase (v. a. Ältere), Tachykardie, Herzrhythmusstörungen, Gewichtszunahme, Transaminasenanstieg. Häufig Verwirrtheit, Delir (Ältere), Miktionsstörungen, Hyponatriämie, sexuelle Störungen, AV-Block, Schenkelblock, QTc-Verlängerung. Gelegentlich Krampfanfälle, Harnverhalt, Ileus, Erhöhung des Augeninnendrucks, Herzinsuffizienz-Verschlechterung, Manie. Sehr selten Agranulozytose, Knochenmarkdepression, Glaukomanfall, Torsade de pointes (P).",
  ia: "MAOH: keine Kombination (Ausnahme s. KI). Anticholinergika (Biperiden, Metixen u. a.): keine Kombination, Delir- und Ileusgefahr. QT: keine Kombination mit Thioridazin, Pimozid, Antiarrhythmika; Vorsicht mit anderen QT-verlängernden oder Hypokaliämie auslösenden Mitteln. Tramadol: Anfalls- und Serotoninsyndromrisiko. ZNS-Dämpfer: additive Sedierung. CYP2D6-/1A2-Hemmer (Bupropion, Fluoxetin, Fluvoxamin, Paroxetin, Propranolol) erhöhen, 3A4-Induktoren (Carbamazepin) senken Spiegel – Spiegelkontrolle; mit Fluoxetin schwere Intoxikationen berichtet. Antikoagulanzien: Gerinnung kontrollieren (P).",
  ktr: "EKG vor Beginn und im Verlauf, weil TZA Erregungsleitung und QTc verlängern (> 100 mg/Tag steigt das kardiale Risiko). Blutdruck (Orthostase). Blutbild, weil Leukopenie und Agranulozytose möglich sind; Elektrolyte (Hypokaliämie erhöht Arrhythmierisiko, Hyponatriämie). Gewicht. Anfallsanamnese. Bei Älteren auf Delir, Harnverhalt und Obstipation achten. Suizidalität eng bis 24 J. zu Beginn. TDM Amitriptylin + Nortriptylin 80–200 ng/ml (K/P).",
  ss: "Schwangerschaft: Benkert RS 4 (Verordnung vermeiden). Embryotox: bei entsprechender Indikation anwendbar; > 1.000 Expositionen ohne erhöhtes Fehlbildungsrisiko; bei Einnahme bis zur Geburt bei ca. einem Drittel vorübergehende Anpassungsstörungen (Atmung, Trinkschwäche, Tremor). Stillzeit: Embryotox akzeptabel bei Monotherapie und guter Beobachtung; relative Dosis 1–2,5 %.",
  mech: "Etwa gleich starke Hemmung der Noradrenalin- und Serotoninwiederaufnahme; aktiver Metabolit Nortriptylin bevorzugt noradrenerg. Stark antiadrenerg (α1), anticholinerg und antihistaminerg (H1) – daher Sedierung, Orthostase und anticholinerge NW (K/P).",
  auf: "Ein älteres, beruhigendes Medikament gegen Depressionen und chronische Schmerzen. Häufig sind Mundtrockenheit, Verstopfung, Schwindel beim Aufstehen und Müdigkeit. Wegen möglicher Herzrhythmusstörungen wird ein EKG geschrieben; Tabletten nur in der verordneten Menge einnehmen, weil eine Überdosis lebensgefährlich ist.",
  cx: {
    schw: ["y", "RS 4; Embryotox: anwendbar"],
    still: ["g", "Akzeptabel, RD 1–2,5 %"],
    alt: ["r", "Halbe Dosis; Delir, Orthostase, Sturz"],
    jug: ["y", "Nur Enuresis ab 6 J."],
    niere: ["y", "Schwer: keine Verordnung (P)"],
    leber: ["y", "Schwer: keine Verordnung (P)"],
    qtc: ["r", "QTc, AV-Block; KI bei Herzvorschädigung"],
    epi: ["y", "Krampfschwelle ↓"],
    delir: ["r", "Delir: KI (P)"],
    pd: ["y", "Anticholinerg, Orthostase [?]"],
    sucht: ["y", "Überdosis gefährlich [?]"],
    fahr: ["y", "Stark sedierend"]
  },
  tg: {
    s: ["2C19", "2D6", "3A4"],
    sens: ["2C19", "2D6"],
    ac: 3,
    sd: 3,
    qt: 2,
    se: 2,
    kr: 1,
    hy: 2,
    na: 1,
    ag: 1
  },
  hw: "10–28 h (Nortriptylin 18–44 h)",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · Embryotox"
});

E2D("clomipramin", {
  n: "Clomipramin",
  b: ["Anafranil", "Clomipramin-neuraxpharm", "Clomipramin-Generika"],
  k: "Trizyklisches Antidepressivum (TZA), stark serotonerg",
  g: "Antidepressiva",
  kern: [
    "Zwang, Depression, Panik, Phobien, Schmerz, Kataplexie, Enuresis zugelassen",
    "Zwang: Wirkung wie SSRI, aber mehr NW; Option nach 2 erfolglosen SSRI (K)",
    "Zwang oft 200–250 mg, Effekt erst nach 6–8 Wochen; Panik Start 10 mg",
    "Keine Kombination mit SSRI/SNRI, Tramadol, Triptanen, MAOH (Serotoninsyndrom)",
    "Anticholinerg, QTc, Anfälle ab 300 mg ca. 2 %; EKG, Blutbild, Natrium"
  ],
  ind: "Depressive Erkrankungen; Zwangsstörung; Panikstörung; Phobien; langfristige Schmerzbehandlung im Rahmen eines Gesamtkonzepts; Schlaflähmung, Kataplexie und hypnagoge Halluzinationen bei Narkolepsie; Enuresis nocturna ab 5 J. nach Ausschluss organischer Ursachen (K/P).",
  off: "Prämenstruelle dysphorische Störung, Colon irritabile (K). Therapieresistente Zwangsstörung: i.v.-Clomipramin (14 Infusionen, 25 bis 250 mg) in kleiner RCT besser als Placebo (K). Augmentation mit Aripiprazol bei Zwang (RCT, K).",
  ki: "Keine Verordnung bei Harnverhalt, Engwinkelglaukom, Prostatahypertrophie, Pylorusstenose, paralytischem Ileus, Delir, kardialer Vorschädigung (Erregungsleitungsstörungen, KHK, Myokardinfarkt, angeborenes Long-QT-Syndrom), erhöhter Anfallsbereitschaft (P). Kombination mit MAOH und serotonergen Mitteln.",
  dos: {
    e: "Depression: Start 25–75 mg, Erhaltung 75–150 mg (retard), stationär bis 3 × 75 mg, max. 250 mg. Zwang: oft 200–250 mg, nach Ansprechen langsam auf Erhaltungsdosis reduzieren; Wirkung oft erst nach 6–8 Wochen. Panik: Start 10 mg, Erhaltung 50–100 mg, ggf. 150 mg. Kataplexie 25–75 mg; Schmerz 75–150 mg. Langsam ausschleichen. CYP2C19-/2D6-PM: 50 % der Dosis; 2D6-UM meiden (K/CPIC).",
    a: "30–50 mg/Tag (P). Osteoporoserisiko unter Langzeitgabe, Hyponatriämie, Delir (P).",
    j: "Enuresis ab 5 J.: Start 10 mg, ab 15 J. bis 50 mg (P). Andere Indikationen < 18 J.: Zulassung nicht geprüft [?]."
  },
  nw: "Sehr häufig Benommenheit, Müdigkeit, Unruhe, Schwindel, Kopfschmerz, Tremor, Myoklonien, Schwitzen, Mundtrockenheit, Obstipation, Übelkeit, Appetit- und Gewichtszunahme, Akkommodations- und Miktionsstörungen, sexuelle Störungen. Häufig Delir und Verwirrtheit (Ältere, Parkinson), Manie, Tachykardie, Orthostase, EKG-Veränderungen, Galaktorrhö, Transaminasenanstieg. Gelegentlich Krampfanfälle (≤ 250 mg ca. 0,5 %, ≥ 300 mg ca. 2 %), Arrhythmie, Blutdruckanstieg. Selten Erregungsleitungsstörungen; sehr selten Agranulozytose, Thrombozytopenie, Harnverhalt; SIADH. Dosisabhängige QTc-Verlängerung; Blutungsneigung inkl. GI-Blutungen (P).",
  ia: "MAOH: KI; nach Clomipramin 2 Wochen bis MAOH, nach Tranylcypromin ≥ 14 Tage, nach Moclobemid Beginn am übernächsten Tag. Serotonerg (SSRI, SNRI, Tryptophan, Tramadol, Triptane): keine Kombination (Serotoninsyndrom); Ausnahme laut P (Fluvoxamin-Kapitel): Fluvoxamin + Clomipramin bei Zwang zur Steigerung der serotonergen Aktivität nur unter Plasmaspiegelkontrolle (Fluvoxamin hemmt 1A2/2C19, Clomipramin-Spiegel ↑). Keine Kombination mit Chinidin-Typ-Antiarrhythmika, Sympathomimetika, Thioridazin, Pimozid; Vorsicht mit QT-verlängernden oder Hypokaliämie auslösenden Mitteln und Anticholinergika. CYP1A2-/2C19-Hemmer (Fluvoxamin, Omeprazol, Esomeprazol, Perazin) und 2D6-Hemmer (Bupropion, Fluoxetin, Paroxetin) erhöhen Spiegel – TDM. Rauchen senkt Spiegel; nach Rauchstopp Anstieg. TAH/Antikoagulanzien: Blutung (P).",
  ktr: "EKG und RR regelmäßig, weil QTc und Erregungsleitung dosisabhängig betroffen sind. Blutbild, weil Agranulozytose möglich ist. Elektrolyte, v. a. Natrium bei Älteren (SIADH). Gewicht. Anfallsanamnese, weil das Anfallsrisiko dosisabhängig steigt. Blutungsanamnese. Suizidalität eng bis 24 J. zu Beginn. TDM Clomipramin + Desmethylclomipramin 230–450 ng/ml (Depression; K/P); Zielbereich für Zwang nicht in Quelle [?].",
  ss: "Schwangerschaft: Benkert RS 5 (abgeraten). Embryotox: kein erhöhtes Gesamtfehlbildungsrisiko (ca. 1.500 Expositionen), schwedisches Herzfehler-Signal nicht bestätigt; im 3. Trimenon Anpassungsstörungen (Tachypnoe, Trinkstörung, Tremor, anticholinerge Symptome); besser Sertralin, Citalopram oder Amitriptylin. Stillzeit: akzeptabel bei Monotherapie und Beobachtung; relative Dosis 1,3–4,3 % (Embryotox).",
  mech: "Starke, aber nicht selektive Hemmung der Serotoninwiederaufnahme; der aktive Metabolit Desmethylclomipramin hemmt v. a. die Noradrenalinwiederaufnahme. Leichte bis mäßige 5-HT2- und leichte D2-Blockade, anticholinerg und α1-antagonistisch (K/P).",
  auf: "Ein älteres Medikament gegen Zwänge, Depressionen und Panik. Die Wirkung bei Zwängen braucht oft 6 bis 8 Wochen. Häufig sind Mundtrockenheit, Schwitzen, Zittern, Verstopfung und Müdigkeit; wegen des Herzens wird ein EKG geschrieben.",
  cx: {
    schw: ["y", "RS 5; besser Sertralin/Citalopram"],
    still: ["y", "Akzeptabel, RD 1,3–4,3 %"],
    alt: ["y", "30–50 mg; Delir, Natrium, Sturz"],
    jug: ["y", "Nur Enuresis ab 5 J. sicher belegt"],
    niere: ["y", "Leicht–mittel: Dosisanpassung"],
    leber: ["y", "Leicht–mittel: Dosisanpassung"],
    qtc: ["r", "Dosisabh. QTc; KI bei Herzvorschädigung"],
    epi: ["r", "Erhöhte Anfallsbereitschaft: KI"],
    delir: ["r", "Delir: KI (P)"],
    pd: ["y", "Halluzinationen bei Parkinson häufig"],
    fahr: ["y", "Sedierend"]
  },
  tg: {
    s: ["2C19", "1A2", "3A4", "2D6"],
    sens: ["2C19", "2D6"],
    ac: 3,
    sd: 2,
    qt: 2,
    se: 3,
    kr: 2,
    hy: 2,
    na: 1,
    bl: 1,
    ag: 1
  },
  hw: "20–26 h (Desmethylclomipramin 37–43 h)",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · Embryotox"
});

E2D("opipramol", {
  n: "Opipramol",
  b: ["Insidon", "Opipram", "Opipramol-Generika"],
  k: "Trizyklisches Anxiolytikum (Sigma-Ligand, keine Wiederaufnahmehemmung)",
  g: "Antidepressiva",
  kern: [
    "DE zugelassen: generalisierte Angststörung und somatoforme Störungen",
    "50–200 mg in 1–3 Gaben, Hauptdosis abends, max. 300 mg",
    "Kein Abhängigkeits- oder Absetzproblem; bei GAS sind SSRI/SNRI/Pregabalin vorzuziehen (P)",
    "Trizyklisch: QTc, Orthostase, Blutbild; KI Delir, Harnverhalt, AV-Block, Glaukom",
    "Nur gering anticholinerg, aber nicht mit Anticholinergika kombinieren (Delir)"
  ],
  ind: "Generalisierte Angststörung; somatoforme Störungen (K/P/FI).",
  off: "Postmenopausales Syndrom, klimakterische Beschwerden, präoperative Sedierung (ältere Studien, K; Evidenz schwach).",
  ki: "Überempfindlichkeit gegen Opipramol oder TZA; Kombination mit MAOH; akute Intoxikation mit Alkohol, Schlafmitteln, Analgetika oder Psychopharmaka; akutes Delir; akuter Harnverhalt; Prostatahyperplasie mit Restharn; paralytischer Ileus; höhergradiger AV-Block oder diffuse Reizleitungsstörungen; unbehandeltes Engwinkelglaukom (FI Opipramol-ratiopharm 02/2015). K: keine Anwendung bei kardialen Risikopatienten (QTc).",
  dos: {
    e: "50–200 mg/Tag in 1–3 Einzelgaben, Hauptdosis abends, max. 300 mg (P; K: 50–300 mg). Übliches Schema laut FI 50–50–100 mg; auch 1 × 50–100 mg abends.",
    a: "Keine eigene Altersdosis in K/P/FI; selten Verwirrtheit bei Älteren (K), Anticholinergika-Kombination meiden (Delir, P). Niedrig beginnen [?].",
    j: "FI: Kinder ab 6 J. ca. 3 mg/kg/Tag (50–100 mg), begrenzte Erfahrung; < 6 J. nicht vorgesehen (FI 2015)."
  },
  nw: "Häufig, v. a. zu Beginn: Müdigkeit, Mundtrockenheit, verstopfte Nase, Hypotonie, Orthostase. Gelegentlich Gewichtszunahme, Schwindel, Benommenheit, Obstipation, Hautreaktionen, passagerer Leberenzymanstieg, Miktions- und Ejakulationsstörungen. Selten Verwirrtheit (Ältere), Galaktorrhö, Blutbildveränderungen, QTc-Verlängerung. Sehr selten Glaukomanfall, Haarausfall, schwere Leberfunktionsstörung; Einzelfälle von Manie. Grundsätzlich alle TZA-NW möglich (P).",
  ia: "MAOH: KI. Anticholinergika: keine Kombination (Delirrisiko, besonders bei Älteren). Vorsicht mit Antikonvulsiva, Antiarrhythmika, Antipsychotika, Hypnotika und anderen QT-verlängernden oder Hypokaliämie auslösenden Mitteln. CYP2D6-Hemmer (z. B. Fluoxetin, Paroxetin [?]) erhöhen Spiegel (P). ZNS-Dämpfer und Alkohol: additive Sedierung [?].",
  ktr: "EKG, weil QTc-Verlängerung möglich ist; regelmäßig bei QT-verlängernder Komedikation. Blutbild bei Fieber, Infekt oder Angina, weil Neutropenie/Agranulozytose wie bei TZA möglich ist. Leberwerte bei Langzeitbehandlung. Suizidalität eng bis 24 J. zu Beginn (P). TDM 50–500 ng/ml (K/P).",
  ss: "Schwangerschaft: Benkert-RS nicht gelesen [?]. Embryotox: nur ca. 200 prospektive Verläufe, kein klar erhöhtes Fehlbildungsrisiko; bei Neueinstellung besser untersuchte Mittel wählen, stabile Therapie muss nicht zwingend umgestellt werden; Neugeborenes auf Anpassungsstörungen beobachten. Stillzeit: Quellen uneinig – FI 2015 kontraindiziert (abstillen), Embryotox akzeptabel bei Monotherapie und Beobachtung (Sedierung, Trinkschwäche).",
  mech: "Primär Agonist am σ1-Rezeptor (geringer σ2), dadurch Modulation des NMDA-Systems. Zusätzlich H1-antihistaminerg, α1-antagonistisch, schwächer D2- und 5-HT2A-antagonistisch. Keine Hemmung der Monoaminwiederaufnahme, nur geringe anticholinerge Aktivität (K/P).",
  auf: "Ein beruhigendes Medikament gegen anhaltende Ängste und körperliche Beschwerden ohne ausreichende organische Ursache. Es macht nicht abhängig, kann aber besonders zu Beginn müde machen und den Kreislauf belasten.",
  cx: {
    schw: ["y", "Wenig Daten; besser untersuchte wählen"],
    still: ["y", "FI: KI; Embryotox: akzeptabel"],
    alt: ["y", "Verwirrtheit, Orthostase"],
    jug: ["y", "FI: ab 6 J., wenig Erfahrung"],
    niere: ["y", "Leicht–mittel: ggf. Dosisanpassung"],
    leber: ["y", "Leicht–mittel: ggf. Dosisanpassung"],
    qtc: ["y", "QTc möglich; KI höhergradiger AV-Block"],
    delir: ["r", "Akutes Delir: KI (FI)"],
    sucht: ["g", "Keine Abhängigkeit (K)"],
    fahr: ["y", "Sedierend, v. a. zu Beginn"]
  },
  tg: {
    s: ["2D6"],
    ac: 1,
    sd: 2,
    qt: 1,
    hy: 1,
    ag: 1
  },
  hw: "7–18 h",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · FI Opipramol-ratiopharm 02/2015 · Embryotox"
});

E2D("agomelatin", {
  n: "Agomelatin",
  b: ["Valdoxan", "Agomelatin-Generika"],
  k: "MT1/MT2-Agonist, 5-HT2C-Antagonist",
  g: "Antidepressiva",
  kern: [
    "MDD bei Erwachsenen; 25 mg abends, nach 2 Wochen ggf. 50 mg",
    "Transaminasen vor Beginn, nach 3, 6, 12, 24 Wochen und nach Steigerung auf 50 mg",
    "Absetzen bei Transaminasen > 3 × ONW oder Leberschadenszeichen",
    "KI: Leberzirrhose/aktive Lebererkrankung, starke 1A2-Hemmer (Fluvoxamin, Cipro)",
    "≥ 75 J. nicht anwenden; kaum Sexual-NW, kein Gewicht, kein QTc, kein Ausschleichen"
  ],
  ind: "Episoden einer Major Depression bei Erwachsenen (FI Valdoxan 04/2025).",
  off: "Off-label-Einsätze in K/P nicht gelesen [?].",
  ki: "Eingeschränkte Leberfunktion (Leberzirrhose oder aktive Lebererkrankung); Transaminasen > 3-fach des oberen Normwerts; gleichzeitige starke CYP1A2-Inhibitoren (Fluvoxamin, Ciprofloxacin) (FI 04/2025, K). K zusätzlich: Patienten > 75 J. und ältere Patienten mit Demenz (FI 2025: ≥ 75 J. „nicht anwenden“ als Warnhinweis). Relative KI (K): vorbestehend erhöhte Transaminasen < 3 × ONW, Risikofaktoren für Leberschaden (Fettleber, Adipositas, Diabetes, Alkoholmissbrauch, hepatotoxische Komedikation), mäßige und schwere Niereninsuffizienz.",
  dos: {
    e: "Start 25 mg spätabends vor dem Schlafengehen; bei unzureichender Besserung nach 2 Wochen 50 mg als Einmalgabe (max.). Raucher: ggf. 50 mg (1A2-Induktion). Kein Ausschleichen nötig; Umstellung von SSRI/SNRI überlappend möglich, Absetzsymptome des Vorpräparats beachten (P).",
    a: "< 75 J.: 25–50 mg wirksam und sicher (FI). ≥ 75 J.: nicht anwenden (FI) bzw. KI (K); ältere Patienten mit Demenz: KI (K).",
    j: "Nicht zugelassen; Wirksamkeit und Sicherheit bei 7–17 J. nicht erwiesen (FI 04/2025)."
  },
  nw: "Sehr häufig Kopfschmerz. Häufig Schwindel, Müdigkeit, Schläfrigkeit, Schlaflosigkeit, Angst, Übelkeit, Diarrhö, Obstipation, Bauchschmerz, Gewichtszunahme, Rückenschmerz, Transaminasen > 3 × ONW (1,2 % unter 25 mg, 2,6 % unter 50 mg). Gelegentlich Agitiertheit, Albträume, Parästhesien, RLS, Manie, Suizidgedanken. Selten Hepatitis, Ikterus, Leberversagen (bei Risikofaktoren vereinzelt tödlich oder Transplantation) (P).",
  ia: "Starke CYP1A2-Hemmer (Fluvoxamin, Ciprofloxacin): KI, Spiegel massiv ↑. Mäßige 1A2-Hemmer (Propranolol, Enoxacin): Vorsicht. Ethinylestradiol: kein relevanter Effekt. Rauchen (1A2-Induktion) senkt Spiegel. Hepatotoxische Komedikation und Alkohol: Leberrisiko ↑ (K).",
  ktr: "Transaminasen vor Beginn, nach ca. 3, 6, 12 und 24 Wochen, danach bei klinischer Indikation, und nach Steigerung auf 50 mg erneut im selben Schema, weil das Risiko einer Transaminasenerhöhung dosisabhängig ist (FI 04/2025, K/P). Bei erhöhten Werten Kontrolle innerhalb von 48 h; > 3 × ONW absetzen; sofort absetzen bei dunklem Urin, hellem Stuhl, Ikterus, rechtsseitigem Oberbauchschmerz, unerklärter Müdigkeit. Suizidalität eng bis 24 J. TDM nicht sinnvoll (kurze HWZ, keine messbaren Talspiegel; P).",
  ss: "Schwangerschaft: Benkert RS 5 (keine sichere Einschätzung, abgeraten); FI: aus Vorsicht vermeiden. Stillzeit: FI – Risiko für das Kind nicht auszuschließen. Embryotox-Seite nicht abrufbar [?].",
  mech: "Agonist an Melatoninrezeptoren MT1/MT2 (Resynchronisierung des Schlaf-Wach-Rhythmus) und Antagonist an 5-HT2C, dadurch verstärkte dopaminerge und noradrenerge Transmission im präfrontalen Kortex. Keine anticholinergen oder antihistaminergen Eigenschaften (P).",
  auf: "Ein Medikament gegen Depressionen, das abends eingenommen wird und den Schlaf-Wach-Rhythmus stabilisieren kann. Weil es selten die Leber schädigt, werden in den ersten Monaten mehrfach Leberwerte kontrolliert; bei Gelbfärbung, dunklem Urin oder hellem Stuhl sofort melden.",
  cx: {
    schw: ["y", "RS 5; FI: vermeiden"],
    still: ["y", "FI: Risiko nicht ausgeschlossen"],
    alt: ["r", "≥ 75 J. nicht anwenden; Demenz KI (K)"],
    jug: ["r", "Nicht zugelassen"],
    niere: ["y", "Mäßig/schwer: rel. KI (K), keine Daten"],
    leber: ["r", "Leberzirrhose/aktive Erkrankung: KI"],
    qtc: ["g", "Keine QTc-Verlängerung (K/P)"],
    sucht: ["y", "Alkoholabusus: Leberrisiko (rel. KI)"],
    fahr: ["y", "Schwindel, Schläfrigkeit möglich"]
  },
  tg: {
    s: ["1A2", "2C9", "2C19"],
    sens: ["1A2"],
    sd: 1
  },
  hw: "1–2 h",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · FI Valdoxan 04/2025"
});

E2D("vortioxetin", {
  n: "Vortioxetin",
  b: ["Brintellix"],
  k: "Multimodales Antidepressivum (SERT-Hemmer + 5-HT-Rezeptormodulator)",
  g: "Antidepressiva",
  kern: [
    "In DE zugelassen, aber seit 08/2016 nicht im Handel (Import nötig) [?]",
    "10 mg/Tag, 5–20 mg; ≥ 65 J. Start 5 mg",
    "Übelkeit sehr häufig; wenig Sexual-NW, kein Gewicht, keine relevante QTc (P)",
    "CYP2D6-Substrat: Dosis anpassen mit Bupropion, Fluoxetin, Paroxetin",
    "MAOH: 2 Wochen Abstand; Linezolid nicht kombinieren"
  ],
  ind: "Episoden einer Major Depression bei Erwachsenen (EMA-EPAR).",
  off: "Off-label-Einsätze in K/P nicht gelesen [?].",
  ki: "Kombination mit MAOH und Linezolid (P). Überempfindlichkeit. Weitere FI-Gegenanzeigen nicht gelesen [?].",
  dos: {
    e: "Start und Erhaltung 10 mg/Tag, Steigerung bis max. 20 mg; niedrigste wirksame Dosis 5 mg (P). Mit starken 2D6-Hemmern ggf. Dosisreduktion, mit 3A4-Induktoren ggf. Erhöhung (P; genaue FI-Regel nicht gelesen [?]).",
    a: "> 65 J.: Start 5 mg, Erhaltung 10 mg (P, EMA).",
    j: "Nicht zugelassen (EU: nur Erwachsene, EMA)."
  },
  nw: "Sehr häufig Übelkeit. Häufig Appetitminderung, abnorme Träume, Schwindel, Diarrhö, Obstipation, Erbrechen, generalisierter Pruritus. Gelegentlich Zähneknirschen, Hitzegefühl, nächtliches Schwitzen. SIADH v. a. bei Älteren; Blutungsneigung wie bei SSRI (P). Keine Gewichtszunahme, keine Absetzsymptome laut P.",
  ia: "MAOH: KI (nach Vortioxetin ≥ 2 Wochen bis MAOH; nach Tranylcypromin 2 Wochen; nach Moclobemid ab übernächstem Tag); Linezolid: keine Kombination. Serotonerg (Triptane, Tryptophan, Ondansetron, TZA, Johanniskraut, Tramadol): Vorsicht. Thiazide/ACE-Hemmer: Hyponatriämie. TAH/Antikoagulanzien: Blutung. CYP2D6-Hemmer (Bupropion, Fluoxetin, Paroxetin) ↑, CYP3A4-Induktoren (Carbamazepin, Rifampicin) ↓ Spiegel (P).",
  ktr: "Natrium bei Älteren und mit Diuretika, weil SIADH möglich ist. Blutungsanamnese bei Antikoagulation. Suizidalität eng bis 24 J. zu Beginn. TDM 15–60 ng/ml (P).",
  ss: "Benkert-RS und Embryotox-Bewertung nicht gelesen [?]. Wenig Daten; bei Neueinstellung besser untersuchte SSRI (Sertralin, Citalopram) bevorzugen [?].",
  mech: "Hemmung des Serotonintransporters plus Agonismus an 5-HT1A, partieller Agonismus an 5-HT1B und Antagonismus an 5-HT3, 5-HT7 und 5-HT1D. Keine Affinität zu muskarinischen, Histamin- oder α1-Rezeptoren (K).",
  auf: "Ein Medikament gegen Depressionen. In den ersten Tagen ist Übelkeit häufig, sie lässt meist nach. In Deutschland ist es seit 2016 nicht im Handel und muss importiert werden [?].",
  cx: {
    schw: ["y", "Wenig Daten [?]"],
    alt: ["y", "Start 5 mg; SIADH"],
    jug: ["r", "EU nur Erwachsene"],
    niere: ["g", "Keine Dosisanpassung (P)"],
    qtc: ["g", "Keine relevante QTc-Verlängerung (P)"]
  },
  tg: {
    s: ["2D6", "3A4"],
    sens: ["2D6"],
    se: 2,
    bl: 1,
    na: 1
  },
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · EMA-EPAR Brintellix · apotheke adhoc 03/2017"
});

E2D("tranylcypromin", {
  n: "Tranylcypromin",
  b: ["Jatrosom", "Tranylcypromin Aristo", "Tranylcypromin-neuraxpharm"],
  k: "Irreversibler, nichtselektiver MAO-Hemmer (MAO-A/B)",
  g: "Antidepressiva",
  kern: [
    "Reserve-AD: nach 2 erfolglosen Standard-AD oder bei deren KI/Unverträglichkeit",
    "10 mg morgens, +10 mg/Woche auf 20–40 mg; stationär max. 60 mg; nicht nach 15 Uhr",
    "Tyraminarme Diät ab 1 Tag vor bis 14 Tage nach Gabe: hypertensive Krisen",
    "KI-Kombis: SSRI/SNRI, Clomipramin, Bupropion, MPH, Amfetamine, Triptane, Tramadol",
    "Nach TCP 2 Wochen Pause; davor ≥ 5 × t½ des Vor-AD (Fluoxetin 5 Wochen)"
  ],
  ind: "Depressive Episoden als Reserveantidepressivum, wenn eine adäquate Therapie mit 2 antidepressiven Standardwirkstoffen keinen ausreichenden Erfolg brachte oder diese kontraindiziert sind oder nicht vertragen werden (K/P).",
  off: "Panikstörung, soziale Angststörung (K; Evidenzgrad dort nicht angegeben).",
  ki: "Phäochromozytom, Karzinoid, zerebrovaskuläre Erkrankungen, Gefäßfehlbildungen wie Aneurysmen, schwere Hypertonie oder Herz-Kreislauf-Erkrankung, Leberfunktionsstörung/Lebererkrankung, schwere Nierenerkrankung, Porphyrie, Diabetes insipidus, maligne Hyperthermie (auch anamnestisch), Delir (K). Relative KI: kardiale Vorschädigung, Hypo- oder Hypertonie, Drogen- oder Alkoholmissbrauch in der Vorgeschichte, erhöhte Anfallsbereitschaft, Diabetes, eingeschränkte Nierenfunktion (K). Kombinationsverbote siehe Interaktionen.",
  dos: {
    e: "Start 10 mg morgens, Steigerung um 10 mg pro Woche auf 20–40 mg in 1–3 Gaben; stationär bei unzureichendem Ansprechen max. 60 mg. Letzte Gabe möglichst nicht nach 15 Uhr (Schlafstörung). Vorsichtig absetzen (K/P).",
    a: "Langsamere Dosissteigerung und Dosisanpassung (K/P); Orthostase und Sturz beachten.",
    j: "Keine Zulassung < 18 J. [?]"
  },
  nw: "Sehr häufig dosisabhängige orthostatische Hypotonie, Schlafstörungen. Häufig Schwäche, Müdigkeit, Schwindel, Angst, Agitiertheit, Unruhe, Mundtrockenheit, Palpitationen, Hypertonie, Gewichtsänderung. Gelegentlich hypertensive Krisen (Kopfschmerz im Hinterkopf, Nackensteifigkeit, Tachykardie, Gesichtsrötung, Übelkeit, Lichtscheu). Selten psychische Abhängigkeit, Blutbildveränderungen bis Agranulozytose, Krampfanfälle, Leberfunktionsstörungen, Ödeme, sexuelle Störungen. Sehr selten Halluzinationen, Verwirrtheit, Hyperthermie, SIADH (K/P). Intoxikation: Delir, Serotoninsyndrom, Koma, Hyperthermie, schwere Blutdruckdysregulation (K).",
  ia: "Keine Kombination mit: serotonergen Mitteln (SSRI, SNRI, Duloxetin, Venlafaxin, Milnacipran, Vortioxetin, Clomipramin, Imipramin, Buspiron, Tryptophan, Triptane, Tramadol, Pethidin, Dextromethorphan) – Serotoninsyndrom; Bupropion, Methylphenidat, Amfetaminen, indirekten Sympathomimetika – hypertensive Krise; Brompheniramin, Chlorphenamin, Pheniramin; Levodopa ohne Decarboxylasehemmer; Disulfiram (P). Warnung vor jeder Selbstmedikation (Erkältungs- und Schmerzmittel). Insulin/orale Antidiabetika: Hypoglykämie. Antihypertensiva (Guanethidin, Methyldopa): verstärkte Senkung oder paradox Anstieg. Esketamin: RR-Kontrolle (P). Wechsel: nach TCP mind. 2 Wochen bis anderes AD; vor TCP ≥ 5 × t½ des Vorpräparats, Fluoxetin 5 Wochen. Ausnahme: niedrig dosiert Amitriptylin, Doxepin, Mianserin, Trazodon mit akzeptabler Verträglichkeit gezeigt (gleichzeitiger Beginn oder TCP zugeben, nie umgekehrt, kein i.v.). Narkose: früher 2 Wochen absetzen; heute Fortführung nach Nutzen-Risiko-Abwägung mit Anästhesie möglich (K/P).",
  ktr: "Blutdruck regelmäßig (liegend/stehend), weil Orthostase sehr häufig ist und hypertensive Krisen drohen. Leberwerte regelmäßig, weil TCP potenziell hepatotoxisch ist. Elektrolyte, Blutbild [?], Blutzucker bei Diabetes. Anfallsanamnese. Diätschulung dokumentieren. Suizidalität eng bis 24 J. TDM < 50 ng/ml (K/P), wegen irreversibler Hemmung nur bei Intoxikationsverdacht sinnvoll. Hypertensive Krise nach Tyramin: u. a. Nifedipin (K).",
  ss: "Schwangerschaft: Benkert-RS nicht gelesen [?]. Embryotox: sehr wenig Erfahrung (wenige Fälle, ein Bericht mit Totgeburt und Fehlbildungen); wenn möglich vor oder bei Schwangerschaft auf besser untersuchtes AD (Sertralin, Citalopram/Escitalopram) umstellen. Stillzeit: Embryotox rät ab (Übergang unbekannt, ein Säugling mit Bauchsymptomen).",
  mech: "Irreversible, nichtselektive Hemmung von MAO-A und MAO-B; dadurch mehr Noradrenalin, Serotonin und Dopamin. Strukturverwandt mit Amfetamin, (–)-Enantiomer beeinflusst zusätzlich Wiederaufnahme und Freisetzung. Trotz t½ von 1,5–3 h hält die Hemmung an, bis neues Enzym gebildet ist (7–10 Tage) (K/P).",
  auf: "Ein sehr wirksames Reservemedikament gegen schwere Depressionen, wenn andere Mittel nicht geholfen haben. Bestimmte Lebensmittel (z. B. gereifter Käse, Salami, Sojasoße, Hefeextrakt, Sauerkraut, Bier und Wein) können gefährliche Blutdruckkrisen auslösen und müssen gemieden werden. Keine Medikamente, auch keine Erkältungs- oder Schmerzmittel, ohne Rücksprache einnehmen.",
  cx: {
    schw: ["r", "Kaum Daten; umstellen (Embryotox)"],
    still: ["r", "Nicht empfohlen (Embryotox)"],
    alt: ["y", "Langsam steigern; Orthostase, Sturz"],
    jug: ["r", "Keine Zulassung [?]"],
    niere: ["y", "Dosisanpassung; schwere NI: KI"],
    leber: ["r", "Lebererkrankung: KI"],
    qtc: ["g", "MAOH nicht kardiotoxisch (K)"],
    epi: ["y", "Anfallsbereitschaft: rel. KI"],
    delir: ["r", "Delir: KI (K)"],
    pd: ["y", "L-Dopa nur mit Decarboxylasehemmer"],
    sucht: ["y", "Missbrauchsanamnese: rel. KI"],
    fahr: ["y", "Schwindel, Orthostase"]
  },
  tg: {
    se: 3,
    mao: 1,
    hy: 2
  },
  hw: "1,5–3 h (MAO-Hemmung 7–10 Tage)",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · Embryotox"
});

E2D("moclobemid", {
  n: "Moclobemid",
  b: ["Aurorix", "Moclobemid-Generika"],
  k: "Reversibler MAO-A-Hemmer (RIMA)",
  g: "Antidepressiva",
  kern: [
    "MDD und soziale Angststörung zugelassen; nicht sedierend, keine Sexual-NW",
    "Depression 300 mg in 2 Gaben nach dem Essen, ab Woche 2 bis 600 mg",
    "Keine strenge Diät, aber sehr tyraminreiche Speisen meiden (z. B. gereifter Käse)",
    "KI mit SSRI/SNRI, Clomipramin, Bupropion, MPH, Triptanen, Tramadol, Selegilin, Linezolid",
    "Hemmt CYP2C19 und 2D6 (Metoprolol, Clopidogrel); Wechsel auf anderes AD nach 24 h"
  ],
  ind: "Episoden einer Major Depression; soziale Angststörung/soziale Phobie (K/P).",
  off: "Fibromyalgiesyndrom – Leitlinie empfiehlt Moclobemid bei uneinheitlicher Studienlage nicht (K).",
  ki: "Kombinationsverbote siehe Interaktionen. K verweist für absolute KI auf das Allgemeinkapitel; FI-Gegenanzeigen nicht gelesen [?]. Relative KI (K): Phäochromozytom, Thyreotoxikose, instabile Herz-Kreislauf-Erkrankung, arterielle Hypertonie, erhöhtes QTc-Risiko (angeborenes Long-QT, Bradykardie, Hypokaliämie).",
  dos: {
    e: "Depression: 300 mg/Tag in 2 Gaben nach den Mahlzeiten, ab Woche 2 ggf. 600 mg in 2–3 Gaben (K; P: initial 300–450 mg, schnelle Steigerung möglich). Soziale Angststörung: 300 mg, ab Tag 4 600 mg in 2 Gaben. Leberzirrhose: halbe bis Drittel-Dosis. Mit Cimetidin halbe bis Drittel-Dosis.",
    a: "Keine Dosisanpassung im Alter (K/P).",
    j: "Keine Zulassung < 18 J. [?]"
  },
  nw: "Sehr häufig Schlafstörungen, Schwindel, Kopfschmerz, Mundtrockenheit, Übelkeit. Häufig Agitiertheit, Angst, Unruhe, Parästhesien, Hypotonie, Erbrechen, Diarrhö, Obstipation, Hautausschlag, Reizbarkeit. Gelegentlich Verwirrtheit, Suizidgedanken, Sehstörungen, Flush, Ödeme. QTc-Verlängerung v. a. bei Überdosis. Selten Leberenzymanstieg. Blutdruckanstieg möglich, dosisabhängig. Intoxikation: Serotoninsyndrom, Verwirrtheit, Agitiertheit (K).",
  ia: "Keine Kombination mit Bupropion, Dextromethorphan, Linezolid, Methylphenidat, Pethidin, Selegilin, serotonergen Mitteln (SSRI, Clomipramin, Duloxetin, Venlafaxin, Milnacipran, Tramadol, Tryptophan) oder Triptanen (K/P). Karenz: anderes AD 24 h nach Moclobemid möglich; vor Moclobemid nach Clomipramin, Fluvoxamin, Paroxetin, Sertralin 1–2 Wochen, nach Venlafaxin 1 Woche, nach Fluoxetin 5 Wochen. Hemmt CYP2C19 und CYP2D6: Spiegel von Metoprolol, Trimipramin u. a. ↑; Clopidogrel (Prodrug) ggf. schwächer. Cimetidin: Moclobemid-Spiegel ↑. QT-verlängernde und Hypokaliämie auslösende Mittel: Vorsicht. Operation: bis 2 Tage vorher gebbar (K/P).",
  ktr: "Blutdruck, besonders bei Hypertonie und höherer Dosis, weil RR-Anstiege möglich sind. EKG bei QTc-Risiko [?]. Leberwerte bei Lebererkrankung (Spiegel bis 3-fach ↑). Suizidalität eng bis 24 J. TDM 300–1000 ng/ml (K/P).",
  ss: "Schwangerschaft: Benkert-RS nicht gelesen [?]. Embryotox: > 60 Verläufe im 1. Trimenon ohne Hinweis auf Teratogenität, aber keine differenzierte Bewertung; Sertralin oder Citalopram bevorzugen. Stillzeit: unter Vorbehalt bei Monotherapie und Beobachtung akzeptabel; relative Dosis 2–6,2 % (Embryotox).",
  mech: "Selektive, reversible (kompetitive) Hemmung der MAO-A; Hemmung klingt innerhalb von 24 h ab. Tyramin kann Moclobemid aus der Bindung verdrängen und wird zusätzlich über MAO-B abgebaut, daher keine strenge Diät nötig. Keine Wiederaufnahmehemmung, keine Rezeptorbindung (K).",
  auf: "Ein Medikament gegen Depressionen und soziale Ängste, das nicht müde macht. Sehr große Mengen gereiften Käses und ähnlich tyraminreicher Speisen besser meiden. Vor Einnahme anderer Medikamente, auch Husten- oder Migränemittel, nachfragen.",
  cx: {
    schw: ["y", "Wenig Daten; Sertralin/Citalopram vorziehen"],
    still: ["y", "Unter Vorbehalt, RD 2–6,2 %"],
    alt: ["g", "Keine Dosisanpassung"],
    jug: ["r", "Keine Zulassung [?]"],
    niere: ["g", "Keine Dosisanpassung"],
    leber: ["y", "Zirrhose: ½–⅓ der Dosis"],
    qtc: ["y", "QTc v. a. bei Überdosis; Long-QT rel. KI"],
    fahr: ["g", "Nicht sedierend (K)"]
  },
  tg: {
    s: ["2C19"],
    i: { "2C19": "mittel", "2D6": "mittel" },
    se: 2,
    mao: 1,
    qt: 1,
    hy: 1
  },
  hw: "2–7 h",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · Embryotox"
});

E2D("esketamin", {
  n: "Esketamin",
  b: ["Spravato"],
  k: "NMDA-Rezeptorantagonist (S-Ketamin), Nasenspray",
  g: "Antidepressiva",
  kern: [
    "TRD (≥ 2 AD erfolglos) + SSRI/SNRI; psychiatrischer Notfall bei MDD + orales AD",
    "Nur durch Psychiater, Gabe unter Aufsicht, Nachbeobachtung bis klinisch stabil",
    "RR vor Gabe und nach ca. 40 min; > 140/90 (≥ 65 J. > 150/90) erst einstellen",
    "KI: Aneurysma, intrazerebrale Blutung, kardiovaskuläres Ereignis < 6 Wochen",
    "Dissoziation, Sedierung, Missbrauch; bis zum Folgetag nach Schlaf nicht fahren"
  ],
  ind: "Spravato in Kombination mit SSRI oder SNRI bei Erwachsenen mit therapieresistenter Major Depression (mittelschwere bis schwere Episode, Nichtansprechen auf mindestens zwei unterschiedliche antidepressive Therapien; K/P). Spravato in Kombination mit oraler antidepressiver Therapie bei Erwachsenen mit mittelgradiger bis schwerer Episode einer Major Depression als akute Kurzzeitbehandlung zur schnellen Reduktion depressiver Symptome, die nach ärztlichem Ermessen einem psychiatrischen Notfall entsprechen (FI Spravato 12/2024). Erstattung: G-BA 19.08.2021 geringer Zusatznutzen (Notfall), 21.09.2023 beträchtlicher Zusatznutzen (TRD); Praxisbesonderheit ab 21.09.2023 (GKV-SV).",
  off: "Ketamin/Esketamin in anderen Applikationsformen bei neuropathischem Schmerz und akuter Suizidalität (K; Spravato-Effekt auf Suizidalität laut G-BA 2021 nicht belegt). Razemisches Ketamin i.v. als Einzelgabe: Wirkung meist 3–7 Tage in RCT (P).",
  ki: "Überempfindlichkeit gegen Esketamin oder Ketamin. Patienten, für die ein Blutdruck- oder Hirndruckanstieg ein schwerwiegendes Risiko darstellt: Gefäßaneurysma, intrazerebrale Blutung in der Anamnese, kardiovaskuläres Ereignis einschließlich Myokardinfarkt in den letzten 6 Wochen (FI 12/2024, K/P). Keine Anwendung bei schwerer Leberfunktionsstörung (K/P).",
  dos: {
    e: "TRD < 65 J.: Tag 1 56 mg, dann Woche 1–4 56 oder 84 mg 2 × wöchentlich; bei Ansprechen Woche 5–8 1 × wöchentlich; ab Woche 9 alle 1–2 Wochen. Psychiatrischer Notfall < 65 J.: 84 mg 2 × wöchentlich für 4 Wochen, ggf. 56 mg nach Verträglichkeit (FI). Anwendung: 1 Applikator = 28 mg (je 1 Sprühstoß pro Nasenloch), weitere Applikatoren nach je 5 min. 2 h vorher nichts essen, 30 min vorher nichts trinken; abschwellende oder kortisonhaltige Nasensprays nicht innerhalb 1 h vorher (K/P).",
    a: "≥ 65 J. (TRD): Start 28 mg, dann 28, 56 oder 84 mg nach obigem Schema, Änderung in 28-mg-Schritten (K/P/FI); Sturzrisiko. Notfall-Indikation ≥ 65 J.: Dosierung nicht gelesen [?].",
    j: "Nicht zugelassen (FI: nur Erwachsene)."
  },
  nw: "Sehr häufig Dissoziation, Schwindel, Kopfschmerz, Geschmacksstörung, Somnolenz, Hypästhesie, Vertigo, Übelkeit, Erbrechen. Häufig Euphorie, Angst, Panik, Derealisation, Halluzinationen, veränderte Zeitwahrnehmung, Sedierung, Tachykardie, Blutdruckanstieg (Maximum ca. 40 min, Dauer 1–2 h), Nasenbeschwerden, Pollakisurie, Dysurie, Trunkenheitsgefühl. Selten tiefe Sedierung. Unter Langzeit-Ketamin: interstitielle Zystitis, Hepatotoxizität, Abhängigkeit und Toleranz (K/P).",
  ia: "ZNS-Dämpfer (BZD, Opioide, Alkohol): Sedierung ↑. Psychostimulanzien (Amfetamine, Methylphenidat), Xanthine, Schilddrüsenhormone, Tranylcypromin, Selegilin: Blutdruck ↑, engmaschige RR-Kontrolle. CYP2B6- (Ticlopidin) und 3A4-Hemmer (Clarithromycin): Spiegel nur bis ca. 11 % ↑. 3A4-/2B6-Induktoren (Rifampicin): Spiegel ↓, Wirkung ggf. schwächer (P).",
  ktr: "Blutdruck vor jeder Gabe sowie nach ca. 40 min und danach nach Ermessen, weil der RR-Anstieg nach etwa 40 min sein Maximum erreicht; bei > 140/90 mmHg (< 65 J.) bzw. > 150/90 mmHg (≥ 65 J.) erst Therapie optimieren (FI). Überwachung auf Sedierung, Dissoziation und RR durch Fachpersonal bis zur stabilen Entlassfähigkeit; Ausstattung zur Wiederbelebung bereithalten bei instabiler kardiovaskulärer oder respiratorischer Erkrankung (P). Suchtanamnese und Missbrauchsrisiko vorher erheben. Harnwegssymptome erfragen (Zystitis). Kein TDM.",
  ss: "Schwangerschaft: Benkert RS 5 (noch nicht beurteilbar). FI: nicht empfohlen (tierexperimentell Neurotoxizität); bei Eintritt einer Schwangerschaft absetzen. Stillzeit: Übergang nicht ausgeschlossen, Abwägung Stillen vs. Therapie (FI). Embryotox nicht geprüft [?].",
  mech: "S-Enantiomer von Ketamin, nichtselektiver, nichtkompetitiver NMDA-Rezeptorantagonist. Antidepressiver Mechanismus diskutiert: vorübergehend mehr Glutamatfreisetzung, AMPA-Rezeptor-Stimulation und neurotrophe Signalwege (BDNF); mögliche Beteiligung des Opioidsystems (K).",
  auf: "Ein Nasenspray gegen schwere Depressionen, das in der Praxis oder Klinik unter Aufsicht angewendet wird und schnell wirken kann. Danach können vorübergehend Benommenheit, ein Gefühl von Unwirklichkeit, Übelkeit und ein Blutdruckanstieg auftreten, deshalb bleibt man zur Beobachtung. Bis zum nächsten Tag nach erholsamem Schlaf nicht Auto fahren.",
  cx: {
    schw: ["r", "FI: nicht empfohlen; RS 5"],
    still: ["y", "Abwägung (FI)"],
    alt: ["y", "Start 28 mg; Sturz, RR"],
    jug: ["r", "Nur Erwachsene"],
    niere: ["g", "Leicht–mittel: keine Anpassung (K)"],
    leber: ["r", "Schwere Störung: keine Anwendung"],
    sucht: ["y", "Missbrauchspotenzial; Suchtanamnese"],
    atem: ["y", "COPD/Atemwegserkrankung: Vorsicht"],
    fahr: ["r", "Bis Folgetag nach Schlaf nicht fahren"]
  },
  tg: {
    s: ["2B6", "3A4"],
    sd: 2,
    at: 1
  },
  hw: "7–12 h",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · FI Spravato 12/2024 · G-BA 2021/2023 · GKV-SV Praxisbesonderheit 2023"
});

/* ---- gruppe_c ---- */
// Etappe 2 · Gruppe C · Stimmungsstabilisierer, Benzodiazepine, Alkohol-Rückfallprophylaxe · Stand 07.10.2026
// Quellen: K = Benkert/Hippius Kompendium 2021, P = Benkert Pocket Guide 2021, Dr = Dreher 2021, FI = Fachinformation, Web siehe gruppe_c_belege.md

E2D("lithium", {
  n: "Lithium",
  b: ["Quilonum retard", "Hypnorex retard", "Lithium Apogepha", "Lithiofor"],
  k: "Stimmungsstabilisierer (Lithiumsalz)",
  g: "Stimmungsstabilisierer",
  kern: [
    "Spiegel 12 h nach letzter Dosis: Prophylaxe 0,5–0,8, Manie 0,9–1,2 mmol/l",
    "Nie > 1,5 mmol/l; Intoxikation auch bei therapeutischem Spiegel möglich",
    "NSAR, ACE-Hemmer, Sartane, Diuretika ↑ Spiegel: dann Spiegel messen",
    "Vorab: eGFR, TSH, Kalzium, EKG, EEG; GFR < 30 ml/min strikt KI",
    "Suizidpräventiv; über Monate ausschleichen (Manie-Rebound)"
  ],
  ind: "Akutbehandlung manischer Syndrome; bestimmte akute Depressionen (z. B. bei Therapieresistenz oder Unverträglichkeit von Antidepressiva, Verdacht auf Umschlag in Manie), ggf. mit Antidepressivum; Rezidivprophylaxe bipolarer Störungen (schizoaffektiv nur Quilonum retard) und rezidivierender Major Depression; Lithium-Augmentation bei therapieresistenter Depression (K). Zulassungsumfang je Präparat unterschiedlich.",
  off: "Akutbehandlung schizomanischer Syndrome bei schizoaffektiver Störung (K, Zulassung nicht markiert [?]). Cluster-Kopfschmerz (in K unter Indikationen genannt, Zulassungsstatus [?]). Suizidprävention auch außerhalb bipolarer Störungen (P: suizidpräventiver Effekt, keine eigene Zulassung).",
  ki: "Schwere Nierenfunktionsstörung (GFR < 30 ml/min strikt KI; < 60 ml/min Nephrologe, Alternativen erwägen), schwere Herz-Kreislauf-Erkrankung, Störungen des Natriumhaushalts/schwere Elektrolytstörung, M. Addison (K, P). 1. Trimenon: dringend abraten (P). Brugada-Syndrom: Lithium kann es demaskieren (K; als FI-KI [?]). Vorsicht: Hypertonie, Gicht, Arteriosklerose, Kachexie, Krampfbereitschaft, Parkinson, Myasthenie, Hypothyreose, Psoriasis (P).",
  dos: {
    e: "Dosis nach Spiegel; Steady State nach etwa 1 Woche, Spiegel verhält sich proportional zur Dosis (P, Dr). Phasenprophylaxe: Quilonum retard (450 mg = 12,2 mmol) Start ½–0–1 Tbl. (P); langsam alle paar Tage um etwa 250 mg steigern bis 0,5–0,7 mmol/l, meist bei 675–1125 mg/d (Dr). Akute Manie: Tag 1 0–0–450 mg, Tag 2 225–0–450 bis 450–0–450 mg, dann Spiegel; Ziel 0,9–1,2 mmol/l (Dr: 1,0–1,2), oft bei 900–1350 mg/d (Dr); nach Abklingen binnen 1–2 Wochen auf 0,5–0,8 senken (P). Augmentation 0,4–0,8 mmol/l, mindestens 3 Wochen beurteilen (P). Bei rascher Aufdosierung Spiegel alle 2–3 Tage (P).",
    a: "Start Hypnorex/Quilonum retard 2 × ½ Tbl. (P). Niedrigere Spiegel oft ausreichend: Prophylaxe 0,4–0,6 mmol/l (Dr), Augmentation evtl. 0,4 mmol/l (K, P); antimanisch auch im Alter 0,9–1,2 (K, P). HWZ im Alter 30–36 h (K), häufiger Spiegel kontrollieren (Dr).",
    j: "Zulassung und Dosierung für 12–17 J. in K/P/Dr nicht gelesen [?]. HWZ bei Jugendlichen etwa 18 h (K)."
  },
  nw: "Häufig (oft initial): feinschlägiger Tremor (Propranolol), Polyurie/Polydipsie, Übelkeit, Diarrhö, Gewichtszunahme, kognitive Verlangsamung, Struma/TSH-Anstieg, Leukozytose (reversibel) (K). Selten: Hypothyreose, Hyperparathyreoidismus mit Hyperkalzämie, renaler Diabetes insipidus und Nierenfunktionsverschlechterung bis Nierenversagen nach langjähriger Gabe, Ödeme, Psoriasis-Exazerbation, Akne/Alopezie, QTc- und Repolarisationsveränderungen, Bradykardie, Demaskierung eines Brugada-Syndroms (K). Schilddrüsen- und Nebenschilddrüsenstörungen in einer Metaanalyse bei etwa 25 % (Dr). Intoxikation: Übelkeit, Erbrechen, Durchfall, grobschlägiger Tremor, Dysarthrie, Ataxie, Vigilanzminderung; später Rigor, Hyperreflexie, Faszikulationen, Krampfanfälle, Koma, Herzstillstand (K, P).",
  ia: "Rein renale Elimination, keine CYP-Interaktionen (K). Spiegel ↑ durch verminderte renale Clearance: NSAR (insbesondere COX-2-Hemmer), ACE-Hemmer, Sartane, Diuretika (Thiazide), außerdem Natrium-/Kaliummangel, Schwitzen, Diarrhö (K, P). Spiegelmessung dringend bei: ACE-Hemmern, Sartanen, NSAR, Acetazolamid, Ampicillin, Tetrazyklinen, Aminoglykosiden, Metronidazol, Clonidin, Kalziumantagonisten, Methylxanthinen (Theophyllin, Koffein), Natriumbicarbonat, Thyreostatika (P). Neurotoxizität (Delir, Krampfanfall), MNS oder Serotoninsyndrom in Kombination mit Antipsychotika, Antidepressiva oder Carbamazepin beschrieben (P). SRI können die Polyurie verstärken (P). QT-verlängernde Komedikation beachten (K).",
  ktr: "Spiegel 12 ± 0,5 h nach letzter Dosis, morgens vor Einnahme, erstmals nach etwa 1 Woche (K, P), weil Wirkung und Toxizität eng beieinanderliegen. Vor Beginn: eGFR bzw. Kreatinin-Clearance (bei < 70 ml/min Kontrolle, < 60 Nephrologe, < 30 KI), TSH/T3/T4, Kalzium, Halsumfang, Elektrolyte, Gewicht, EKG und EEG (K, P), weil Lithium nephro- und thyreotoxisch ist und Hyperparathyreoidismus macht. EKG nach stabiler Einstellung (meist 2–4 Wochen) (K). Danach regelmäßig Spiegel, Niere (eGFR), Schilddrüse, Kalzium (bei Auffälligkeit Parathormon), Elektrolyte, Gewicht, Halsumfang (K, P); konkrete Intervalle laut Tab. 2.4 K nicht gelesen [?]. Bei Fieber, Diarrhö, Erbrechen, neuen Diuretika/NSAR/ACE-Hemmern Spiegel kurzfristig. Vor Narkose/OP 2–3 Tage pausieren (P). Intoxikation: Spiegel etwa alle 6 h, NaCl-Infusion, Hämodialyse bei 2–3 mmol/l je nach Zustand, regelhaft > 3 mmol/l (K, P).",
  ss: "Benkert RS 5: 1. Trimenon dringend abraten; bei hoher Rezidivgefahr muss Lithium nicht in jedem Fall beendet werden; bei Kinderwunsch 2 Wochen zwischen Absetzen und Konzeption (P). Kardiale Fehlbildungen (Ebstein-Anomalie) dosisabhängig leicht erhöht, deutlich geringer als früher angenommen (K, Dr). Embryotox: schwaches Teratogen (etwa 1 von 100–1000), Spiegel im 1. Trimenon so niedrig wie möglich, in der Schwangerschaft häufig messen, peripartal Flüssigkeit beachten; Neugeborene auf Anpassungsstörung, Arrhythmie, Schilddrüse beobachten. Stillzeit (Embryotox): unter engmaschiger Überwachung möglich, relative Dosis 3,5–30 %, kindliche Spiegel bis fast 60 % der mütterlichen.",
  mech: "Einwertiges Kation, das in intrazelluläre Signaltransduktionssysteme eingreift (u. a. Inositol-Phosphat-Stoffwechsel, GSK-3β) und Neurotransmitterrezeptoren moduliert (K Kap. 2.2; Einzelheiten [?]). Keine Metabolisierung, ausschließlich renale Ausscheidung parallel zu Natrium (K).",
  auf: "Ein Salz, das Stimmungsschwankungen vorbeugt und das Suizidrisiko senkt. Die Menge im Blut muss regelmäßig gemessen werden, weil schon kleine Überdosierungen giftig sind. Bei Durchfall, Erbrechen, Fieber, starkem Schwitzen oder neuen Schmerzmitteln sofort die Behandelnden informieren.",
  cx: {
    schw: ["y", "RS 5; Ebstein-Risiko, enges Spiegelmonitoring"],
    still: ["y", "Nur unter enger Überwachung (Embryotox)"],
    alt: ["y", "HWZ ↑, niedrigere Spiegel, Neurotoxizität"],
    jug: ["y", "Zulassung nicht geprüft"],
    niere: ["r", "GFR < 30 KI, < 60 Nephrologe"],
    leber: ["g", "Keine Metabolisierung"],
    qtc: ["y", "QTc konzentrationsabhängig"],
    epi: ["y", "Vorsicht bei Krampfbereitschaft"],
    delir: ["y", "Neurotoxizität, v. a. in Kombination"],
    pd: ["y", "Vorsicht bei Parkinson (P)"],
    fahr: ["y", "Eindosierung, Tremor, Kognition"]
  },
  tg: {
    lit: 1,
    se: 1,
    qt: 1,
    br: 1
  },
  hw: "14–30 h (Alter 30–36 h)",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · Dreher 2021 · Embryotox"
});

E2D("valproat", {
  n: "Valproat",
  b: ["Ergenyl chrono", "Ergenyl chronosphere", "Orfiril long", "Valproat-Generika"],
  k: "Antikonvulsivum, Stimmungsstabilisierer",
  g: "Stimmungsstabilisierer",
  kern: [
    "Hochteratogen: bei Frauen im gebärfähigen Alter nur mit Verhütungsprogramm",
    "Männer: Verhütung bis 3 Monate nach Absetzen, Facharztüberwachung (RHB 2024)",
    "Manie: Loading 20 mg/kg; Spiegel 50–100 mg/l (akut bis 120 vertragen)",
    "Hemmt UGT: Lamotrigin halbieren; Carbapeneme senken Valproatspiegel",
    "Leber, Pankreas, Blutbild, Gerinnung; Ammoniak bei Vigilanzminderung"
  ],
  ind: "Manische Episoden bei bipolarer Störung, wenn Lithium kontraindiziert ist oder nicht vertragen wird; weiterführende Behandlung nach einer manischen Episode bei Ansprechen auf Valproat (nur Ergenyl chrono, Ergenyl chronosphere, Orfiril long) (K, P). Epilepsien (neurologische Indikation; Details FI [?]). Nur retardierte Präparate für die bipolare Indikation zugelassen (P).",
  off: "Unretardiertes Valproat und i.v.-Gabe (Loading) bei Manie (P: off-label). Rezidivprophylaxe allgemein: frühere Überlegenheit gegenüber Lithium nach neueren Studien nicht mehr anzunehmen (K); bei Suizidrisiko Lithium bevorzugen (K).",
  ki: "Mittel- bis schwergradige Leberinsuffizienz (auch familienanamnestisch), hepatische Porphyrie, Blutgerinnungsstörungen; Schwangerschaft; Frauen und Mädchen im gebärfähigen Alter, außer die Bedingungen des Schwangerschaftsverhütungsprogramms sind erfüllt (K, EMA/PRAC). Pankreatitis (K). Relativ: Knochenmarkschädigung, metabolische Erkrankungen/Enzymopathien, Niereninsuffizienz, Hypoproteinämie, Lupus erythematodes (K). Mitochondriale Erkrankungen (POLG), Harnstoffzyklusdefekte als FI-KI [?].",
  dos: {
    e: "Initial 750 mg/d in 1–2 Dosen, Erhaltung 1200–2000 mg nach Spiegel; max. Orfiril long 2500 mg, Ergenyl chrono/chronosphere 2000 mg/d (P). Rascher antimanischer Effekt in 2–3 Tagen: von Beginn an 20 mg/kg KG (Loading) (P). Spiegel 50–100 mg/l, in der Akutmanie bis 120 mg/l gut vertragen (P).",
    a: "Keine eigene Altersdosis in K/P gelesen [?]; freie Fraktion steigt bei Hypoproteinämie (K), daher niedrig beginnen und nach Klinik dosieren (eigene Ableitung).",
    j: "Bipolare Störung bei 12–17 J.: Zulassung in K/P nicht gelesen [?]. Mädchen: Verhütungsprogramm gilt ab Menarche-Fähigkeit (EMA/PRAC)."
  },
  nw: "Sehr häufig Hyperammonämie; häufig Schläfrigkeit, Tremor/EPS, Parästhesien, Gewichtszunahme oder -abnahme, Übelkeit, Diarrhö, Thrombozytopenie, Leukopenie, vorübergehender Haarausfall (P). Gelegentlich schwere, auch tödliche Leberfunktionsstörung, Blutungen, Ödeme, Verwirrtheit bis Stupor/Koma (P). Selten Pankreatitis (teils tödlich), Enzephalopathie, Fanconi-Syndrom, Knochenmarkschädigung, Agranulozytose, Makrozytose, SJS/Lyell, Hypothermie, Dysmenorrhö, polyzystische Ovarien, verminderte Knochendichte (P).",
  ia: "Hemmt Glukuronidierung: Lamotrigin-Spiegel ↑ (HWZ etwa 70 h), SJS-Risiko ↑, Lamotrigin-Dosis halbieren; Lamotrigin senkt umgekehrt Valproat um etwa 25 % (K, P). TZA (Amitriptylin, Nortriptylin) ↑ über 2C9/2C19 (K). Olanzapin ↑ oder ↓, Quetiapin ↑ (K). Antikoagulanzien, Thrombozytenhemmer, ASS: Blutungsrisiko (K). Valproat ↓ durch Carbamazepin, Phenytoin, Primidon, Rifampicin, Mefloquin und Carbapeneme (Imipenem, Meropenem) (K). Clozapin + Rauchen: Valproat verstärkt den Spiegelabfall (P). Andere Antikonvulsiva: Sedierung (K).",
  ktr: "Vor Beginn Schwangerschaftstest und Verhütungsberatung mit Bestätigungsformular, mindestens jährlich fachärztliche Überprüfung (K, EMA/PRAC), weil Valproat hochgradig teratogen ist. Blutbild, Gerinnung, Leberenzyme, Lipase/Amylase zu Beginn und im Verlauf (K), weil Hepatotoxizität, Pankreatitis und Thrombozytopenie früh auftreten. Abbruch erwägen bei Transaminasen > 2–3-fach, Gerinnungsstörung, klinischen Zeichen einer Leber- oder Pankreasaffektion (K). Ammoniak bei Vigilanzminderung oder Verwirrtheit, weil Hyperammonämie sehr häufig ist (P; Indikationsstellung eigene Ableitung). Spiegel 12 ± 0,5 h nach letzter Dosis, v. a. zu Beginn: 50–100 mg/l (K, P). Gewicht (K).",
  ss: "Kontraindiziert. Embryotox: rot; Fehlbildungsrisiko etwa 10 % (2–3-fach), Spina bifida 12–20-fach, fetales Valproat-Syndrom; neurokognitive Entwicklungsstörungen, IQ-Minderung, Autismus- und ADHS-Risiko ↑ (K, Embryotox); Entwicklungsstörungen bei bis zu 30–40 % der exponierten Kinder (RHB 2024). Väter: retrospektive Daten zeigen erhöhtes NDD-Risiko bei Exposition in den 3 Monaten vor Zeugung (HR 1,5); Verhütung während und 3 Monate nach Therapie, keine Samenspende (RHB 19.02.2024); Embryotox hält die Datenlage für eine sichere Bewertung für unzureichend. Stillzeit (Embryotox): unter Monotherapie und Beobachtung des Kindes akzeptabel.",
  mech: "Antikonvulsivum; der antimanische und rezidivprophylaktische Wirkmechanismus ist nicht sicher definiert (K). Diskutiert werden GABA-Verstärkung, Natriumkanalblockade und Histondeacetylase-Hemmung [?].",
  auf: "Ein Mittel gegen Manie und Krampfanfälle. Es schädigt ein ungeborenes Kind schwer, deshalb sind eine sichere Verhütung und regelmäßige Beratung nötig; auch Männer sollen während und bis 3 Monate nach der Behandlung verhüten. Gelbsucht, starke Bauchschmerzen, Erbrechen, Blutergüsse oder starke Müdigkeit sofort melden.",
  cx: {
    schw: ["r", "Kontraindiziert, hochteratogen"],
    still: ["y", "Monotherapie akzeptabel (Embryotox)"],
    alt: ["y", "Hypoproteinämie: freie Fraktion ↑"],
    jug: ["r", "Mädchen: Verhütungsprogramm"],
    niere: ["y", "Ggf. Anpassung nach Spiegel"],
    leber: ["r", "Mittel-/schwergradig KI"],
    epi: ["g", "Antikonvulsiv"],
    delir: ["y", "Hyperammonämische Enzephalopathie"],
    fahr: ["y", "Schläfrigkeit, Tremor"]
  },
  tg: {
    s: ["UGT", "2C9", "2C19"],
    i: { "UGT": "stark", "2C9": "mittel" },
    sd: 1,
    ag: 1,
    bl: 1
  },
  hw: "11–17 h (Retard)",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · Rote-Hand-Brief Valproat 19.02.2024 · EMA/PRAC · Embryotox"
});

E2D("lamotrigin", {
  n: "Lamotrigin",
  b: ["Lamictal", "Lamotrigin-Generika"],
  k: "Antikonvulsivum, Stimmungsstabilisierer",
  g: "Stimmungsstabilisierer",
  kern: [
    "Prävention bipolarer Depression (Bipolar I); nicht antimanisch",
    "Titration: 25 mg × 2 Wo, 50 mg × 2 Wo, dann +50 mg alle 1–2 Wo",
    "Mit Valproat: 12,5 mg Start, Zieldosis etwa halbiert (SJS-Risiko)",
    "Carbamazepin, Ethinylestradiol senken Spiegel; keine Kombination mit Sertralin",
    "Ausschlag in den ersten 8 Wochen: sofort absetzen und beurteilen"
  ],
  ind: "Prävention depressiver Episoden bei Bipolar-I-Störung mit überwiegend depressiven Episoden (K, P); nicht für die Akuttherapie manischer oder depressiver Episoden (P). Epilepsie (neurologische Indikation; Details FI [?]).",
  off: "Schwere bipolare Depression (gut wirksam, off-label; bei leichter bis mittelschwerer nur begrenzt) (K, P). Borderline-Störung: widersprüchliche Ergebnisse (K). Keine Hinweise auf Wirksamkeit als Augmentation bei therapieresistenter unipolarer Depression (P).",
  ki: "Überempfindlichkeit (FI [?]). Relativ: schwere Leber- und Nierenfunktionsstörung (K). Vorsicht bei Hautreaktionen in der Anamnese (K). Strukturelle Herzerkrankung oder Arrhythmie: Nutzen-Risiko prüfen (FDA 2021).",
  dos: {
    e: "Monotherapie: 25 mg/d Wochen 1–2, 50 mg/d Wochen 3–4, dann in Schritten von 50 mg alle 1–2 Wochen; Ziel 100–200 mg/d (P: Woche 6 200 mg), max. 400 mg/d (K, P). Mit Valproat: 12,5 mg/d Wochen 1–2, 25 mg/d Wochen 3–4, Erhaltung 100–200 mg/d (K), ggf. Dosis um 50 % senken (K, P). Mit Induktoren (Carbamazepin, Phenytoin, Rifampicin): 50 mg/d für 14 Tage, dann 100 mg/d (K). Mit ethinylestradiolhaltiger Pille ggf. bis doppelte Erhaltungsdosis (K). Nach Unterbrechung > 5 HWZ erneut aufdosieren (FI [?]).",
    a: "Keine eigene Altersdosis in K/P gelesen [?]. Leichte bis mittelschwere Leber- und Niereninsuffizienz: Dosisanpassung und häufigere Laborkontrollen (P).",
    j: "Bipolare Indikation für 12–17 J.: in K/P nicht gelesen [?]."
  },
  nw: "Sehr häufig Kopfschmerz, Somnolenz, Aggressivität, Übelkeit, Erbrechen, Hautausschlag (etwa 10 %, v. a. in den ersten 8 Wochen, meist leicht), Doppelbilder, verschwommenes Sehen (K, P). Häufig Müdigkeit, Schlaflosigkeit, Schwindel, Nystagmus, Reizbarkeit, Tremor, Ataxie, Arthralgie (K, P). Selten SJS; sehr selten TEN, Verwirrtheit, Halluzinationen, Neutropenie bis Agranulozytose; Lichtempfindlichkeit (P). Hämophagozytische Lymphohistiozytose (HLH) Tage bis Wochen nach Beginn: bei unklarem Fieber oder Ausschlag sofort untersuchen (K). Arrhythmien bei struktureller Herzerkrankung (FDA 2021; Natriumkanalblockade).",
  ia: "Abbau über Glukuronidierung (UGT1A4) (K). Valproat hemmt den Abbau: HWZ etwa 70 h, SJS-Risiko ↑, Dosis halbieren, beide Spiegel kontrollieren, auch beim Reduzieren von Valproat (K, P). Induktoren beschleunigen den Abbau: Carbamazepin, Phenytoin, Phenobarbital, Primidon, Rifampicin, Ethinylestradiol (HWZ etwa 14 h; in der pillenfreien Woche Spiegel bis 2-fach ↑; gestagene Monopräparate bevorzugen) (K, P). Sertralin hemmt UGT1A4 → toxisches Arylepoxid, Kombination vermeiden (K, P). Lamotrigin induziert UGT: Quetiapin im Mittel −58 %, Valproat etwa −25 % (K, P).",
  ktr: "Haut in den ersten 8 Wochen, weil das SJS-Risiko bei zu schneller Titration steigt; Aufklärung über Ausschlag, Fieber, Schleimhautbeteiligung (P). Schwangerschaftstest vor Beginn (K). Spiegel bei Interaktionen oder unzureichendem Ansprechen, sonst jährlich: Referenzbereich 1–6 mg/l (AGNP), therapieresistente Depression ≥ 3,25 mg/l, erster Zielwert bei Neueinstellung 3 mg/l (K, P). Leber- und Nierenwerte bei Funktionsstörung (P). EKG optional (K); bei Herzerkrankung vorab sinnvoll (FDA 2021).",
  ss: "Embryotox: Antikonvulsivum der Wahl in der Schwangerschaft, wenn ausreichend wirksam, möglichst Monotherapie; > 7000 Monotherapie-Schwangerschaften ohne klares Fehlbildungssignal. Clearance steigt bis 3-fach: Spiegel engmaschig, Dosis anpassen (Embryotox, K). Fehlbildungsraten unter < 300 mg/d am niedrigsten (K). Neubeginn in der Schwangerschaft aus psychiatrischer Indikation meist nicht sinnvoll (K). Stillzeit: unter Monotherapie mit Beobachtung des Kindes akzeptabel; kindliche Spiegel können therapeutisch sein (Embryotox).",
  mech: "Blockade spannungsabhängiger Natriumkanäle mit Hemmung der Glutamatfreisetzung (NbN: Glutamate voltage-gated sodium channel blocker); Wirkmechanismus bei bipolarer Störung nicht sicher geklärt (K).",
  auf: "Ein Mittel, das depressiven Phasen bei bipolarer Störung vorbeugt. Die Dosis muss sehr langsam gesteigert werden, weil sonst gefährliche Hautausschläge auftreten können. Jeder neue Ausschlag, Fieber oder Bläschen an Mund und Augen sofort melden.",
  cx: {
    schw: ["y", "Antikonvulsivum der Wahl; Spiegel fällt"],
    still: ["y", "Monotherapie akzeptabel"],
    alt: ["y", "Keine Altersdosis gelesen"],
    jug: ["y", "Bipolar: Zulassung nicht geprüft"],
    niere: ["y", "Schwer: relative KI"],
    leber: ["y", "Schwer: relative KI"],
    qtc: ["y", "Arrhythmie bei Herzerkrankung (FDA)"],
    epi: ["g", "Antikonvulsiv"],
    fahr: ["y", "Schwindel, Doppelbilder"]
  },
  tg: {
    s: ["UGT"],
    sens: ["UGT"],
    n: ["UGT"],
    sd: 1
  },
  hw: "33 h (14–103 h); mit Valproat 70 h",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · Embryotox · FDA Drug Safety 31.03.2021"
});

E2D("clonazepam", {
  n: "Clonazepam",
  b: ["Rivotril"],
  k: "Benzodiazepin, lang wirksam",
  g: "Benzodiazepine",
  kern: [
    "DE nur Epilepsie zugelassen; psychiatrisch durchweg off-label",
    "REM-Schlaf-Verhaltensstörung: Mittel der Wahl 0,5–2 mg z. N. (K)",
    "0,5 mg Clonazepam ≈ 10 mg Diazepam (Dr); HWZ 30–40 h (FI)",
    "In DE häufig im stationären Alkoholentzug (Dr), max. 4–6 Wochen",
    "KI: bekannte Abhängigkeit, schwere Ateminsuffizienz, schwere Leberinsuffizienz"
  ],
  ind: "Epilepsie: vor allem als Zusatztherapie oder bei Nichtansprechen auf andere Arzneimittel bei den meisten Epilepsieformen, insbesondere Absencen (FI Rivotril oral 06/2022). Keine psychiatrische Zulassung in DE.",
  off: "REM-Schlaf-Verhaltensstörung: Mittel der Wahl, 0,5–2 mg 30 min vor dem Schlafen (K). Somnambulismus und Pavor nocturnus 0,5–2 mg (K). Alkoholentzug, symptomgesteuert nach Skala (Dr; in DE häufig stationär). Katatonie: nach Ansprechen auf Lorazepam als BZD in Kombination mit Antipsychotikum möglich (K, Box Katatonie). Restless-Legs-Syndrom (Dr). Panikstörung: in den USA zugelassen, in K/P/Dr nicht gelesen [?].",
  ki: "Überempfindlichkeit; bekannte Medikamenten-, Drogen- oder Alkoholabhängigkeit; Koma; schwere Ateminsuffizienz; schwere Leberinsuffizienz (FI Rivotril oral 06/2022). Myasthenia gravis, Schlafapnoe als KI [?].",
  dos: {
    e: "Epilepsie: Start 2 × 0,5 mg/d, über 2–4 Wochen schrittweise steigern, Erhaltung 4–8 mg/d in 3–4 Einzelgaben (FI); Tageshöchstdosis Erwachsene 8 mg (Dr). Off-label Parasomnien 0,5–2 mg z. N. (K). Alkoholentzug: nach Entzugsskala, meist deutlich unter 8 mg (Dr). Nicht länger als 4–6 Wochen (Dr), ausschleichen.",
    a: "Niedrigst mögliche Dosis, besondere Vorsicht bei der Aufdosierung (FI); Sturzgefahr, Kumulation bei langer HWZ (eigene Ableitung).",
    j: "Nur Epilepsie: Kinder im Schulalter Start 2 × 0,25 mg, Erhaltung 3–6 mg/d (FI). Psychiatrische Anwendung bei 12–17 J. nicht zugelassen."
  },
  nw: "Sedierung, Müdigkeit, Schwindel, Ataxie, Muskelschwäche, verminderte Reaktionsfähigkeit, anterograde Amnesie, Sturzgefahr; Hypersalivation und Bronchialsekretion (v. a. Kinder) [?]. Atemdepression, besonders mit Opioiden oder Alkohol. Paradoxe Reaktionen (Agitiertheit, Aggressivität), v. a. bei Älteren. Toleranz, Abhängigkeit, Absetz- und Rebound-Symptome bis zu Krampfanfällen bei abruptem Absetzen [?] (Klassenwissen; Einzelangaben in K/P/Dr für Clonazepam nicht gelesen).",
  ia: "Abbau über Nitroreduktion unter Beteiligung von CYP3A4 (FI): starke 3A4-Hemmer können Spiegel erhöhen, Induktoren (Carbamazepin, Phenytoin) senken [?]. Additive ZNS- und Atemdepression mit Opioiden, Alkohol, anderen Sedativa, Clozapin und parenteralem Olanzapin (für BZD allgemein: P).",
  ktr: "Indikation und Dauer regelmäßig prüfen, weil nach 4–6 Wochen Abhängigkeit droht (Dr). Atemfunktion bei COPD/Schlafapnoe und Opioid-Komedikation, weil Atemdepression additiv ist. Leberwerte bei Leberkrankheit (schwere Leberinsuffizienz KI, FI). Im Entzug Dosierung nach standardisierter Skala (AESB) (Dr). Kein etablierter TDM-Wert für Psychiatrie gelesen [?].",
  ss: "Schwangerschaft: nur wenn eindeutig erforderlich (FI); Anpassungsstörungen/Floppy-Infant beim Neugeborenen nach Gabe bis zur Geburt [?]. Benkert-RS nicht gelesen [?]. Stillzeit: laut FI nicht anwenden, bei zwingender Indikation abstillen.",
  mech: "Positiver allosterischer Modulator am GABA-A-Rezeptor (Benzodiazepin-Bindungsstelle): verstärkt die GABAerge Hemmung (Dr). Lange HWZ sorgt für gleichmäßige Spiegel, deshalb im Entzug ohne stundenweises Wiederaufflackern der Symptome (Dr).",
  auf: "Ein beruhigendes und krampflösendes Mittel aus der Gruppe der Benzodiazepine. Es macht müde und kann bei längerer Einnahme abhängig machen; deshalb nur kurz und nie zusammen mit Alkohol. Nicht plötzlich absetzen.",
  cx: {
    schw: ["y", "Nur wenn eindeutig erforderlich (FI)"],
    still: ["r", "FI: abstillen"],
    alt: ["y", "Sturz, Kumulation; niedrigst dosieren"],
    jug: ["y", "Nur Epilepsie zugelassen"],
    leber: ["r", "Schwere Leberinsuffizienz KI"],
    epi: ["g", "Antiepileptikum; abrupt absetzen meiden"],
    delir: ["y", "Paradoxe Reaktion, Verwirrtheit"],
    sucht: ["r", "KI bei bekannter Abhängigkeit"],
    atem: ["r", "Schwere Ateminsuffizienz KI"],
    fahr: ["r", "Lange HWZ, Hang-over"]
  },
  tg: {
    s: ["3A4"],
    sd: 3,
    at: 2
  },
  hw: "30–40 h (FI); Dr 18–50 h",
  src: "FI Rivotril oral 06/2022 · Benkert Kompendium 2021 · Dreher 2021"
});

E2D("alprazolam", {
  n: "Alprazolam",
  b: ["Tafil", "Cassadan", "Alprazolam-Generika"],
  k: "Benzodiazepin (Triazolo-BZD), kurz bis mittellang",
  g: "Benzodiazepine",
  kern: [
    "Zugelassen: akute und chronische Spannungs-, Erregungs- und Angstzustände",
    "3 × 0,25–0,5 mg, max. 4 mg/d; Gesamtdauer inkl. Ausschleichen ≤ 8–12 Wo",
    "Abhängigkeitsrisiko möglicherweise höher als bei anderen BZD (P)",
    "CYP3A4: Fluvoxamin verdoppelt Spiegel; Carbamazepin, Johanniskraut senken",
    "Mit Opioiden: Euphorie, rascher Abhängigkeit, Atemdepression"
  ],
  ind: "Symptomatische Behandlung von akuten und chronischen Spannungs-, Erregungs- und Angstzuständen (K, P).",
  off: "Panikstörung mit/ohne Agoraphobie: gut untersucht, in den USA (Xanax XR) und der Schweiz (Xanax ret.) zugelassen, in DE nicht (K, P). Pavor nocturnus als Alternative zu Clonazepam (K).",
  ki: "Myasthenia gravis, akutes Engwinkelglaukom, Ataxie, bekannte Abhängigkeitsanamnese (ambulant) (P). Vorsicht bei schweren Leber- und Nierenerkrankungen, Atemwegserkrankungen, Schlafapnoe-Syndrom (P). Kombination mit Clozapin oder parenteralem Olanzapin vermeiden (P).",
  dos: {
    e: "3 × 0,25–0,5 mg/d, max. 4 mg/d; wegen kurzer bis mittellanger HWZ 2–4 Gaben pro Tag (K, P). Retardform (Xanax ret., nicht DE) 0,5–1 mg/d, max. 6 mg/d (K, P). Behandlung inkl. schrittweisem Absetzen nicht länger als 8–12 Wochen (K).",
    a: "Langfristige Gaben bei Älteren vermeiden; paradoxe Reaktionen und Sturzgefahr häufiger (P). Eigene Altersstartdosis in K/P nicht gelesen [?].",
    j: "Für < 18 J. nicht empfohlen bzw. nicht zugelassen [?]."
  },
  nw: "Tagesmüdigkeit, verminderte Aufmerksamkeit und Reaktionsfähigkeit, Fatigue, Depression, Ataxie, Vergesslichkeit, Nervosität, Einschränkung der Fahrtüchtigkeit; Sturzgefahr (P). Selten Hypotonie, Mundtrockenheit, Halluzinationen, Manie, Atemdepression, Leberfunktionsstörung; sehr selten anterograde Amnesie (P). Paradoxe Disinhibition (Agitiertheit, Aggressivität) bei höherer Dosis und Älteren (P). Rebound beim Absetzen; Toleranz (P).",
  ia: "Empfindliches CYP3A4-Substrat (K): Fluvoxamin etwa +100 %, 3A4-Hemmer (z. B. Erythromycin) ↑ und verstärkte Sedierung; Carbamazepin, Phenytoin, Johanniskraut ↓ (K, P). Digoxin-Spiegel ↑, besonders bei Älteren (K, P). Opioide: verstärkte Euphorisierung, beschleunigte Abhängigkeit (K, P) und additive Atemdepression. Clozapin, parenterales Olanzapin: Atemdepression (P). Insgesamt relativ hohes Interaktionsrisiko (K).",
  ktr: "Aufklärung über Abhängigkeit, Entzug und eingeschränktes Reaktionsvermögen dokumentieren (P), weil Alprazolam ein besonders hohes Abhängigkeitsrisiko hat. Dauer und Dosis regelmäßig überprüfen, Absetzplan von Beginn an. Atmung bei Lungenerkrankung, Schlafapnoe oder Opioiden. Komedikation auf 3A4-Hemmer prüfen. Plasmakonzentration 20–40 ng/ml (K, P), routinemäßig nicht nötig.",
  ss: "Benkert RS 5: im 1. Trimenon dringend abraten, auch danach möglichst vermeiden (P). Stillzeit: in K/P nicht gelesen [?].",
  mech: "Positiver allosterischer Modulator am GABA-A-Rezeptor (Benzodiazepin-Bindungsstelle), verstärkt die GABAerge Hemmung (K). Aktiver Metabolit α-Hydroxyalprazolam mit ähnlicher HWZ; renale Ausscheidung (K).",
  auf: "Ein rasch wirksames Beruhigungsmittel gegen starke Angst und Anspannung. Es kann schnell abhängig machen, deshalb nur kurz, in fester Dosis und nie mit Alkohol oder Schmerzmitteln vom Opioid-Typ. Nach längerer Einnahme nur langsam absetzen.",
  cx: {
    schw: ["r", "RS 5; 1. Trimenon dringend meiden"],
    alt: ["y", "Sturz, paradoxe Reaktion"],
    jug: ["r", "Nicht empfohlen [?]"],
    niere: ["y", "Schwer: Vorsicht"],
    leber: ["y", "Schwer: Vorsicht; 3A4-Abbau"],
    delir: ["y", "Paradoxe Reaktion, Amnesie"],
    sucht: ["r", "Hohes Abhängigkeitsrisiko"],
    atem: ["y", "Schlafapnoe, Atemwegserkrankung"],
    fahr: ["r", "Reaktionsvermögen ↓"]
  },
  tg: {
    s: ["3A4"],
    sens: ["3A4"],
    sd: 3,
    at: 2
  },
  hw: "10–14 h",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021"
});

E2D("lormetazepam", {
  n: "Lormetazepam",
  b: ["Noctamid", "Ergocalm", "Loretam", "Sedalam (i.v.)"],
  k: "Benzodiazepin-Hypnotikum, mittellang",
  g: "Benzodiazepine",
  kern: [
    "Kurzzeitbehandlung schwerer Schlafstörungen; geeignet für Durchschlafstörungen",
    "0,5 → 1 mg, max. 2 mg; Ältere 0,5 mg (P)",
    "Keine klinisch relevanten aktiven Metaboliten, kaum Kumulation",
    "Auch i.v. (Sedalam, Noctamid Inj.): Sedierung bei Eingriffen, max. 5 mg/d",
    "KI Myasthenie, Schlafapnoe, schwere Ateminsuffizienz"
  ],
  ind: "Oral: Kurzzeitbehandlung von Schlafstörungen, nur bei schwerwiegenden, stark beeinträchtigenden Schlafstörungen (K, P). Injektionslösung (Sedalam 2 mg/10 ml, Noctamid Injektionslösung): symptomatische Behandlung akuter Spannungs-, Erregungs- und Angstzustände im Rahmen operativer und diagnostischer Eingriffe, Intensivmedizin, Narkoseeinleitung (Gebrauchsinformation Sedalam).",
  off: "Bei Einschlafstörungen nicht Mittel der Wahl (Non-BZD vorziehen) (K, P). i.v.-Gabe bei psychiatrischer Erregung außerhalb von Eingriffen: Zulassung nicht abgedeckt [?].",
  ki: "Myasthenia gravis, Schlafapnoe-Syndrom, schwere Ateminsuffizienz (P). Abhängigkeitserkrankung (Gebrauchsinformation Sedalam). Vorsicht bei schweren Leber- und Nierenfunktionsstörungen, Ataxie (P).",
  dos: {
    e: "Oral: 0,5 mg → 1 mg z. N., max. 2 mg (P); ambulant 0,5–1 mg, stationär 1–2 mg (K). i.v. (Sedalam): Prämedikation 0,4–1,0 mg, Sedierung bei Eingriffen 0,4–2,0 mg, max. 5 mg/d (Gebrauchsinformation).",
    a: "0,5 mg (P). Hang-over und Sturzgefahr bei höheren Dosen besonders bei Älteren (P).",
    j: "Zulassung für 12–17 J. in K/P nicht gelesen [?]."
  },
  nw: "Sedierung, Schläfrigkeit, Benommenheit, Schwindel, Kopfschmerzen, Amnesie, Sprachstörungen, Sehstörungen, Bradyphrenie, Angst, Libidominderung, Tachykardie, GI-Beschwerden, Quincke-Ödem (P). Hang-over mit eingeschränkter Verkehrstüchtigkeit bei höherer Dosis, Sturzgefahr (P). Paradoxe Disinhibition v. a. bei Älteren (P). Abhängigkeit, Toleranz, Rebound-Insomnie (P).",
  ia: "Kaum pharmakokinetische Interaktionen; Metabolit Lorazepam wird nur langsam gebildet und rasch glukuronidiert (K). Vorsicht mit Opioiden (Narkoanalgetika), Muskelrelaxanzien und allen Mitteln, die die Atmung dämpfen (K, P); Alkohol meiden (Gebrauchsinformation Sedalam).",
  ktr: "Indikation nach 2–4 Wochen überprüfen [?], weil Abhängigkeit und Toleranz drohen; Aufklärung über BZD-Risiken (P). Atmung bei Lungenerkrankung, Schlafapnoe-Verdacht und Opioid-Komedikation. Nach i.v.-Gabe Überwachung von Atmung und Kreislauf [?]. Sturzrisiko bei Älteren.",
  ss: "Benkert RS 4: Fehlbildungen in neueren Studien meist nicht bestätigt, Verordnung in der Schwangerschaft dennoch vermeiden (P). Stillzeit: in K/P nicht gelesen [?].",
  mech: "Positiver allosterischer Modulator am GABA-A-Rezeptor mit sehr hoher Affinität zur Benzodiazepin-Bindungsstelle, vergleichbar mit Lorazepam oder Flunitrazepam (K).",
  auf: "Ein Schlafmittel für kurze Zeit bei schweren Schlafstörungen. Es kann am nächsten Morgen noch müde machen und bei längerer Einnahme abhängig machen. Keinen Alkohol dazu trinken.",
  cx: {
    schw: ["y", "RS 4; vermeiden"],
    alt: ["y", "0,5 mg; Sturz, Hang-over"],
    jug: ["y", "Nicht geprüft"],
    niere: ["y", "Schwer: Vorsicht"],
    leber: ["y", "Schwer: Vorsicht (P)"],
    delir: ["y", "Paradoxe Reaktion bei Älteren"],
    sucht: ["r", "Abhängigkeitsrisiko"],
    atem: ["r", "Schlafapnoe, schwere Ateminsuffizienz KI"],
    fahr: ["y", "Hang-over bei höherer Dosis"]
  },
  tg: {
    sd: 3,
    at: 2
  },
  hw: "8–14 h",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · Gebrauchsinformation Sedalam 2 mg/10 ml (Köhler)"
});

E2D("naltrexon", {
  n: "Naltrexon",
  b: ["Adepend", "Naltrexon-neuraxpharm", "Nemexin"],
  k: "Opioidantagonist (μ, κ)",
  g: "Sucht",
  kern: [
    "Alkohol: Rückfallprophylaxe in Abstinenz und Trinkmengenreduktion (nur Adepend)",
    "50 mg/d; Start ½ Tbl., nach 1 h ohne Entzugszeichen zweite Hälfte",
    "KI Opioide: 7–10 Tage opioidfrei sichern (Urinscreening), sonst Entzug",
    "Analgesie: 1 Woche vor geplanter Opioidgabe absetzen",
    "Nach Absetzen hohe Opioid-Empfindlichkeit: Überdosis- und Todesrisiko"
  ],
  ind: "Alkoholabhängigkeit zur Reduktion des Rückfallrisikos, als unterstützende Behandlung in der Abstinenz und zur Minderung des Verlangens nach Alkohol (Adepend); Entwöhnungsbehandlung bei Opiatabhängigkeit nach erfolgter Entgiftung (Nemexin, Naltrexon-neuraxpharm) (K, P). Trinkmengenreduktion bei nicht abstinenzmotivierten Patienten: trinkmengenreduzierende Eigenschaften, Indikation nur Adepend (K, P).",
  off: "Dissoziative Symptome und selbstverletzendes Verhalten bei Borderline-Persönlichkeitsstörung (K, Kap. 11.4.1; Evidenzgrad dort [?]). Amfetaminabhängigkeit (K). Kombination mit Acamprosat: Nutzen bei uneinheitlichen Studien unklar (K); P sieht verbesserte Wirkung. S3 Alkohol (Version 2016 laut PZ): Acamprosat und Naltrexon sollten in der Postakutphase eingesetzt werden; Empfehlungsgrad der Version 2021 nicht gelesen [?].",
  ki: "Akute Opioid-, Alkohol-, Schlafmittel-, Analgetika- oder Psychopharmakaintoxikation; akute Hepatitis, schwere Leberfunktionsstörung; noch nicht erfolgte Opioidentgiftung; gleichzeitige Behandlung mit Opioidanalgetika (K).",
  dos: {
    e: "Initial ½ Tbl. (25 mg); falls nach 1 h keine Entzugssymptome, restliche ½ Tbl.; übliche Dosis 50 mg/d, selbst oder supervidiert (K, P). Wegen langer Rezeptorblockade auch z. B. Mo 100 mg, Mi 100 mg, Fr 150 mg (K, P). Behandlungsdauer: in K/P nicht gelesen [?].",
    a: "Keine eigene Altersdosis gelesen [?]. Leichte bis mittelgradige Niereninsuffizienz: niedrigere Einstiegs- und Erhaltungsdosis (K).",
    j: "Für 12–17 J. in K/P nicht gelesen [?]."
  },
  nw: "Sehr häufig Kopfschmerzen, Schlafstörungen, Angst, Antriebsschwäche, Übelkeit, Erbrechen, Bauchschmerzen, Gelenk- und Muskelschmerzen (K). Häufig Reizbarkeit, Niedergeschlagenheit, Benommenheit, Schwitzen, Appetitlosigkeit, Diarrhö, Obstipation, Ejakulations- und Potenzstörungen (K). Gelegentlich Halluzinationen, Depression, Tremor, Blutdruckveränderung, Hepatitis, reversibler Transaminasenanstieg; sonstige: reversible ITP (K). Bei Opioidkonsum ausgelöstes Entzugssyndrom (K).",
  ia: "Hebt die Wirkung opioidhaltiger Arzneimittel auf (Analgetika, Antitussiva, Loperamid): gleichzeitige Gabe meiden; im Notfall höhere Opioiddosen unter engmaschiger Überwachung nötig (K). Keine relevanten pharmakokinetischen Interaktionen mit Alkohol (K). Kombination mit Antipsychotika und Antidepressiva sinnvoll möglich (K). Kein CYP-Substrat: Abbau über Aldoketoreduktase AKR1C4 zu 6β-Naltrexol (K).",
  ktr: "Vor Beginn: Opioidanamnese und Urin-Drogenscreening, im Zweifel Naloxon-Test, weil Naltrexon bei Opioidkonsum einen Entzug auslöst (K, P). Leberwerte vor und unter Therapie, weil Hepatitis und Transaminasenanstieg vorkommen und schwere Leberstörung KI ist (K; Intervall [?]). EKG und Kreislaufparameter regelmäßig bei Herzkranken (K). Aufklärung über erhöhte Opioid-Empfindlichkeit nach Absetzen oder unregelmäßiger Einnahme und bei Entlassung (K). Plasmakonzentration (Naltrexon + 6β-Naltrexol) 17–50 ng/ml 8 h nach 50 mg (K), routinemäßig nicht nötig.",
  ss: "Schwangerschaft und Stillzeit: Benkert-RS und Embryotox-Bewertung nicht gelesen [?].",
  mech: "Kompetitiver μ-Opioidrezeptor-Antagonist (etwa doppelt so stark wie Naloxon) ohne intrinsische Wirkung; unter Dauertherapie trägt der Metabolit 6β-Naltrexol die Wirkung (K). Dämpft die durch Alkohol vermittelte Endorphin-Belohnung und damit das Verlangen (Mechanismus der Trinkmengenreduktion [?]).",
  auf: "Ein Medikament, das das Verlangen nach Alkohol dämpft und Rückfälle seltener macht. Es blockiert die Wirkung von Opioid-Schmerzmitteln; vor Operationen oder bei starken Schmerzen deshalb immer darauf hinweisen. Nach dem Absetzen wirken Opioide viel stärker als vorher.",
  cx: {
    schw: ["y", "Keine Bewertung gelesen"],
    alt: ["y", "Keine Altersdosis gelesen"],
    jug: ["y", "Nicht geprüft"],
    niere: ["y", "Leicht–mittel: niedriger dosieren"],
    leber: ["r", "Akute Hepatitis, schwere Störung KI"],
    sucht: ["y", "KI bei Opioidkonsum; kein Missbrauch"],
    fahr: ["y", "Benommenheit möglich"]
  },
  tg: {
    op: "ant"
  },
  hw: "4 h (6β-Naltrexol 9–13 h; Rezeptorblockade 3–4 Tage)",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · S3 Alkohol AWMF 076-001 (Empfehlungsgrad nicht gelesen) · PZ zur S3 2016"
});

E2D("acamprosat", {
  n: "Acamprosat",
  b: ["Campral"],
  k: "Anti-Craving-Mittel (NMDA-/Glutamatmodulator)",
  g: "Sucht",
  kern: [
    "Abstinenzerhaltung bei Alkoholabhängigkeit, Start direkt nach Entgiftung",
    "≤ 60 kg 4 × 333 mg, > 60 kg 6 × 333 mg täglich, in 3 Gaben",
    "Kein Effekt auf Trinkmenge; nicht zur Entzugsbehandlung",
    "KI Niereninsuffizienz (renal eliminiert), schwere Leberinsuffizienz",
    "Dauer 1 Jahr, bei Rückfall weiter; kaum Interaktionen, keine Abhängigkeit"
  ],
  ind: "Unterstützung der Aufrechterhaltung der Abstinenz bei alkoholabhängigen Patienten; Beginn unmittelbar nach der Entgiftung, nur bei eindeutiger Abstinenzabsicht (K, P).",
  off: "Keine relevanten Off-label-Einsätze in K/P gelesen. S3 Alkohol (Version 2016 laut PZ): Acamprosat und Naltrexon sollten in der Postakutphase eingesetzt werden; Empfehlungsgrad der Version 2021 nicht gelesen [?]. Kombination mit Naltrexon: P verbesserte Wirkung, K Nutzen unklar.",
  ki: "Niereninsuffizienz (lineare Beziehung zwischen Kreatinin- und Gesamt-Clearance) und schwere Leberinsuffizienz (K, P). Konkreter Kreatinin-Grenzwert laut FI [?]. Stillzeit als FI-KI [?].",
  dos: {
    e: "Körpergewicht bis 60 kg: 4 Tbl./d (1332 mg), > 60 kg: 6 Tbl./d (1998 mg), verteilt auf 3 Einnahmen; Beginn direkt nach Entgiftung, empfohlene Dauer 1 Jahr, bei Rückfall nicht unterbrechen (K, P). Mit Nahrung sinkt die Bioverfügbarkeit (K, P).",
    a: "Altersgrenze laut FI [?]; Nierenfunktion vorab prüfen, weil die Elimination renal ist (K).",
    j: "Für 12–17 J. in K/P nicht gelesen [?]."
  },
  nw: "Sehr häufig Durchfall. Häufig Bauchschmerzen, Übelkeit, Erbrechen, Blähungen, Juckreiz, makulopapulöses Exanthem, Libidominderung, Frigidität oder Impotenz. Gelegentlich Libidosteigerung (K, P). Keine bedrohlichen Intoxikationen bekannt (K).",
  ia: "Praktisch keine: keine Wirkungsverstärkung von Alkohol, keine Wechselwirkungen mit Diazepam oder Disulfiram; Kombination mit Naltrexon ohne Dosisanpassung (K, P). Nahrung vermindert die Bioverfügbarkeit (K, P).",
  ktr: "Kreatinin/eGFR vor Beginn und im Verlauf, weil Acamprosat renal eliminiert wird und Niereninsuffizienz KI ist (K). Routinelabor mit Serum-Kalzium und Nierensteinanamnese (P). Leberwerte bei Lebererkrankung (schwer: KI). Plasmakonzentration 250–620 ng/ml 12 h nach letzter Gabe (P), routinemäßig nicht nötig. Einnahmetreue (3 × täglich) ansprechen (P).",
  ss: "Benkert RS 5: ausreichende Studien fehlen, von einer Verordnung in der Schwangerschaft wird abgeraten (P). Stillzeit: nicht gelesen [?].",
  mech: "Indirekter antagonistischer Effekt am NMDA-Rezeptorkomplex; dämpft die glutamaterge Übererregbarkeit nach chronischem Alkoholkonsum und wirkt dadurch abstinenzerhaltend (P; Glutamat-Hypothese eigene Zusammenfassung). Keine subjektiv spürbaren psychotropen Effekte, kein Abhängigkeitspotenzial (K).",
  auf: "Ein Medikament, das nach dem Entzug hilft, ohne Alkohol zu bleiben. Es wirkt nur bei regelmäßiger Einnahme dreimal täglich und macht nicht abhängig. Häufigste Nebenwirkung ist Durchfall.",
  cx: {
    schw: ["r", "RS 5; abraten"],
    alt: ["y", "Nierenfunktion prüfen"],
    jug: ["y", "Nicht geprüft"],
    niere: ["r", "Niereninsuffizienz KI"],
    leber: ["y", "Schwere Leberinsuffizienz KI"],
    sucht: ["g", "Kein Abhängigkeitspotenzial"],
    fahr: ["g", "Keine psychotropen Effekte"]
  },
  tg: {},
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · S3 Alkohol AWMF 076-001 (Empfehlungsgrad nicht gelesen) · PZ zur S3 2016"
});

/* ---- gruppe_d ---- */
// Psychopharmaka-Kompass · Etappe 2 · gruppe_d (Antipsychotika II)
// Quellen: Benkert/Hippius Kompendium 2021 (K), Pocket Guide 2021 (P), Dreher 2021 (Dr), Web (siehe gruppe_d_belege.md)

E2D("clozapin", {
  n: "Clozapin",
  b: ["Leponex", "Clozapin-Generika"],
  k: "Atypisches Antipsychotikum (trizyklisch, Dibenzodiazepin)",
  g: "Antipsychotika",
  kern: [
    "Mittel der Wahl bei therapieresistenter Schizophrenie; antisuizidal (off-label)",
    "Start 12,5 mg, max. +25 mg/d; Pause > 2 Tage: neu mit 12,5 mg",
    "Seit 09/2025 nur ANC: Wo 1–18 wöchentl., bis Jahr 1 monatl., dann 12-wöchentl.",
    "Myokarditis v. a. Wo 2–4 (CRP, Troponin, Ruhetachykardie); Obstipation bis Ileus",
    "CYP1A2: Rauchstopp, Infekt, Fluvoxamin, Ciprofloxacin → Spiegel ↑↑; TDM 350–600"
  ],
  ind: "Therapieresistente Schizophrenie; akute und chronische schizophrene Psychosen bei Nichtansprechen auf oder Unverträglichkeit von mindestens 2 verschiedenen Antipsychotika (davon mind. 1 AAP), insbesondere bei Spätdyskinesien oder therapierefraktären EPS; Psychosen im Verlauf eines M. Parkinson nach Versagen der Standardtherapie (niedrige Dosis).",
  off: "Reduktion von Suizidalität bei Schizophrenie (antisuizidale, evtl. antiaggressive Wirkung; K); schizoaffektive Störung, v. a. bipolarer Subtyp (K); Psychose bei Lewy-Körper-Demenz in sehr niedriger Dosis (K). Non-Response erst nach 6 Monaten annehmen; Mindestdauer eines Versuchs 6–8 Wochen (K).",
  ki: "Frühere Clozapin-bedingte Neutropenie/Agranulozytose (keine Reexposition) oder Clozapin-Myokarditis/Kardiomyopathie; Knochenmarkserkrankung bzw. hämatologische Erkrankung; paralytischer Ileus (auch anamnestisch) und Darmatonie; ungenügend kontrollierte Epilepsie; schwere Herzerkrankung; aktive/progrediente Lebererkrankung; schwere Nieren- und Gallenwegserkrankung. Keine Kombination mit Depot-Antipsychotika (nicht absetzbar bei Agranulozytose) und mit Benzodiazepinen i.v.",
  dos: {
    e: "Testdosis 12,5 mg (abends), dann Steigerung um höchstens 25 mg/d. Erhaltung 100–450 mg/d in mehreren Einzeldosen, bis 200 mg 1× abends möglich; max. 600 mg, Einzelfälle 900 mg/d. Hauptdosis abends. Nach > 2 Tagen Pause erneut mit 12,5 mg beginnen. Parkinson-Psychose: Start 6,25 mg, Ziel 25–50 mg, Ausnahme 100 mg. Dosis nach Plasmaspiegel einstellen; Umsetzen von Clozapin sehr langsam (2–6 Monate).",
    a: "Start 6,25 mg, bis 25 mg, max. 50 mg (P/K, für Ältere und Lewy-Körper-Demenz). Langsamste Titration wegen Delir, Orthostase, Ileus (≥ 60 J. erhöhtes Ileusrisiko). Demenz-Warnhinweis Antipsychotika.",
    j: "Unter 16 J. laut FI nicht zugelassen [?]; Einsatz bei früh beginnender therapieresistenter Schizophrenie nur off-label in spezialisierten Zentren [?]."
  },
  nw: "Sehr häufig: Sedierung, Tachykardie, Schwindel, Hypersalivation (v. a. nachts), Obstipation/gastrointestinale Hypomotilität. Häufig: Gewichtszunahme, Glukose- und Lipidstörungen, Orthostase, Synkopen, benigne Hyperthermie (um Tag 10), Enuresis, Leberenzyme ↑, Krampfanfälle/Myoklonien (dosisabhängig; erhöht > 600 mg/d oder > 600 ng/ml), Eosinophilie, Leukozytose. Gefährlich-selten: Agranulozytose (ca. 1 %, Gipfel Woche 6–14, dosisunabhängig), Myokarditis/Kardiomyopathie (v. a. erste 2 Monate, meist Tag 10–30), paralytischer Ileus/Ogilvie-Syndrom (Mortalität hoch), diabetische Ketoazidose, Pneumonie (Aspiration), anticholinerges Delir, MNS, Thromboembolie, Pankreatitis. Zwangssymptome können neu auftreten. Kaum EPS, kaum Prolaktin.",
  ia: "Hauptabbau über CYP1A2 (daneben 2C19, 3A4, gering 2D6). Fluvoxamin bis 10-facher Spiegelanstieg; Ciprofloxacin, Omeprazol (2C19), Fluoxetin (ca. +42 %), hochdosiert Paroxetin ↑. Rauchen (Benzpyrene) induziert 1A2: Rauchstopp oder Umstieg auf E-Zigarette lässt Spiegel steigen bis zur Intoxikation; Valproat verstärkt den Rauch-Effekt (Abfall ca. 46 %). Infekte/Entzündung (CRP ↑) hemmen 1A2 → toxische Spiegel möglich. Pharmakodynamisch: Benzodiazepine (Atem-/Kreislaufdepression, v. a. i.v.), Anticholinergika (Biperiden; Ileus, Delir), myelotoxische Mittel (Carbamazepin, evtl. Mirtazapin, Valproat), Lithium (Neurotoxizität, MNS), QT-Verlängerer. Valproat in der Aufdosierung: höheres Myokarditisrisiko.",
  ktr: "Blutbild (nur ANC, Leukozyten-Pflicht entfallen; RHB 08.09.2025): vor Beginn ANC ≥ 1500/mm³ (bei benigner ethnischer Neutropenie ≥ 1000/mm³), Woche 1–18 wöchentlich, Woche 19–52 monatlich, ab Jahr 2 alle 12 Wochen, nach 2 Jahren ohne Neutropenie jährlich, weil die Neutropenie überwiegend im 1. Jahr auftritt. Absetzen bei ANC < 1000/mm³ (BEN < 500/mm³). Bei Fieber oder Halsschmerzen sofort Blutbild. Myokarditis: CRP und Troponin vor Beginn und in den ersten 4 Wochen wöchentlich [?], weil typischer Verlauf Tag 10–19 CRP-Anstieg, dann Troponin > 2-fach, Herzfrequenz +20–30/min (K); EKG vor Beginn. Stuhlgang aktiv erfragen, jede Obstipation behandeln, weil Ileus letal sein kann. Gewicht, Taille, Nüchternglukose/HbA1c, Lipide, RR engmaschig in den ersten 3 Monaten, weil Ketoazidose früh auftritt. TDM 350–600 ng/ml (nur Clozapin, Talspiegel; AGNP/K), zusätzlich bei Rauchänderung, Infekt, Interaktion. Anfallsanamnese, ggf. EEG.",
  ss: "Schwangerschaft: Benkert-Risikostufe RS 5 (P: von Verordnung abgeraten, keine sichere Einschätzung möglich); Perinatalsyndrome (Floppy infant, neonataler Krampfanfall) bei 5 von 61 Exponierten (K). Bei gut eingestellter Therapieresistenz Umstellung kritisch abwägen [?]. Stillzeit: kontraindiziert, weil Agranulozytose beim Säugling möglich (K; RID nur 1,3–1,4 %).",
  mech: "Schwache D2-Blockade mit hoher Affinität zu D4, 5-HT2A, 5-HT2C, H1, α1 und muskarinischen M1/M4-Rezeptoren. Die geringe striatale D2-Besetzung erklärt fehlende EPS, die breite Rezeptorbindung Sedierung, Orthostase, Hypersalivation und Obstipation. Die besondere Wirksamkeit bei Therapieresistenz ist mechanistisch nicht geklärt.",
  auf: "Ein sehr wirksames Medikament gegen Psychosen, wenn andere Mittel nicht geholfen haben. Weil es selten die Abwehrzellen im Blut stark senken oder den Herzmuskel entzünden kann, sind regelmäßige Blutkontrollen nötig; Fieber, Halsschmerzen, Herzrasen oder Verstopfung sofort melden. Rauchen beeinflusst den Wirkspiegel, deshalb jede Änderung der Rauchgewohnheit mitteilen.",
  cx: {
    schw: ["y", "RS 5, abgeraten; nicht abrupt umstellen [?]"],
    still: ["r", "KI: Agranulozytose beim Säugling"],
    alt: ["y", "Start 6,25 mg; Delir, Ileus, Orthostase"],
    jug: ["r", "< 16 J. nicht zugelassen [?]"],
    niere: ["y", "Vorsicht; schwere Niereninsuffizienz KI"],
    leber: ["r", "Aktive Lebererkrankung KI"],
    qtc: ["y", "QT gering; EKG vor Beginn"],
    epi: ["r", "Dosisabh. Anfälle; unkontrolliert KI"],
    delir: ["r", "Stark anticholinerg"],
    pd: ["g", "Zugelassen bei Parkinson-Psychose"],
    atem: ["y", "Mit BZD (v. a. i.v.) Atemdepression"],
    fahr: ["r", "Stark sedierend, v. a. initial"]
  },
  tg: { s: ["1A2", "2C19", "3A4"], sens: ["1A2"], ag: 3, ac: 3, sd: 3, kr: 2, hy: 2, qt: 1, at: 1 },
  hw: "8–16 h",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · FI · Rote-Hand-Brief Clozapin 08.09.2025 (AkdÄ)"
});

E2D("aripiprazol", {
  n: "Aripiprazol",
  b: ["Abilify", "Abilify Maintena (Depot)"],
  k: "Partieller D2/D3-Agonist (AAP)",
  g: "Antipsychotika",
  kern: [
    "Metabolisch und prolaktinneutral, kaum Sedierung, keine relevante QT-Verlängerung",
    "Akathisie häufig: niedrig starten (5–10 mg), langsam umsetzen (Plateau-Titration)",
    "Impulskontrollstörungen (Spielen, Kaufen, Hypersexualität) aktiv erfragen",
    "Depot: Maintena 400 mg monatlich (+14 d oral) oder 960 mg alle 2 Monate",
    "CYP2D6/3A4: starke Hemmer → Dosis halbieren; Induktoren → bis verdoppeln"
  ],
  ind: "Oral: Schizophrenie (ab 15 J.); mäßige bis schwere manische Episoden der Bipolar-I-Störung (ab 13 J.) und Prävention manischer Episoden bei überwiegend manischem Verlauf und Ansprechen auf Aripiprazol. I.m. akut: rasche Kontrolle von Agitiertheit bei Schizophrenie oder Manie, wenn orale Gabe nicht möglich. Depot (Abilify Maintena 300/400 mg monatlich; 720/960 mg alle 2 Monate seit 04/2024): Erhaltungstherapie der Schizophrenie bei Erwachsenen, die auf orales Aripiprazol stabil eingestellt sind.",
  off: "Augmentation bei unipolarer Depression 2,5–10 mg (in USA/CH zugelassen, gute Evidenz; K/P); Zusatz bei Gewichtszunahme unter Clozapin/Olanzapin und bei Prolaktinerhöhung unter Risperidon/Haloperidol (K); Reizbarkeit bei Autismus; Tic-Störungen [?]; Trichotillomanie (K, schwache Evidenz).",
  ki: "Überempfindlichkeit gegen den Wirkstoff; darüber hinaus keine absoluten KI laut FI [?]. Vorsicht bei kardiovaskulären Erkrankungen, schwerer Leberinsuffizienz, erhöhter Anfallsbereitschaft, Suizidrisiko, Spielsucht in der Vorgeschichte.",
  dos: {
    e: "Schizophrenie: Start 10–15 mg (bei Unruhe-Neigung 5 mg), Erhaltung meist 15 mg, Bereich 10–30 mg 1× tgl. unabhängig von Mahlzeiten; > 15–20 mg meist ohne Zusatznutzen. Manie: 15 mg, max. 30 mg. I.m.: 9,75 mg, Wiederholung frühestens nach 2 h, max. 3 Injektionen/24 h (gesamt 30 mg). Depot Maintena: 400 mg i.m. monatlich (frühestens nach 26 Tagen), nach 1. Injektion 14 Tage orale Überlappung 10–20 mg; bei NW 300 mg. Maintena 960 mg gluteal alle 2 Monate für auf oral oder 400 mg monatlich Stabilisierte (EU 04/2024). Umstellung: Vormedikation 2 Wochen nach Erreichen der Zieldosis überlappend beibehalten, dann langsam ausschleichen.",
    a: "Clearance im Alter etwas reduziert (K); niedrig beginnen (5 mg) [?]. Demenz-Warnhinweis (zerebrovaskuläre Ereignisse, Mortalität).",
    j: "Schizophrenie ab 15 J.: 2 mg für 2 Tage, 5 mg für 2 Tage, dann 10 mg (max. 30 mg). Manie ab 13 J.: Zieldosis 10 mg; Anwendungsdauer laut FI max. 12 Wochen [?]. Depot bei < 18 J. nicht zugelassen."
  },
  nw: "Sehr häufig: Akathisie, Übelkeit. Häufig: Unruhe, Schlaflosigkeit, Angst, Kopfschmerz, Schwindel, Tremor/EPS, Sedierung (gering), Erbrechen, Obstipation, verschwommenes Sehen. Gelegentlich: Orthostase, Tachykardie, Hypersexualität. Selten: Impulskontrollstörungen (pathologisches Spielen, Kaufen, Essen, Hypersexualität; FDA-Warnung), Verschlechterung der Psychose, Suizidalität, Krampfanfälle, MNS, Spätdyskinesien, Hyponatriämie, Pankreatitis. Kaum Gewichtszunahme, Prolaktin meist ↓.",
  ia: "Abbau über CYP3A4 und CYP2D6 (Hauptmetabolit Dehydroaripiprazol aktiv). Starke 2D6-Hemmer (Fluoxetin, Paroxetin, Bupropion [?], Chinidin) und 3A4-Hemmer (Ketoconazol, Clarithromycin): Dosis bis 50 % reduzieren. 3A4-Induktoren (Carbamazepin, Phenytoin, Rifampicin, Johanniskraut): Dosis bis verdoppeln, Spiegel kontrollieren, auch nach Absetzen des Induktors. Keine Spiegeländerung mit Lithium, Valproat, Lamotrigin. Aripiprazol i.m. plus Benzodiazepin parenteral: Sedierung, Hypotonie, Atemdepression. Senkt prolaktinerhöhende Effekte anderer AP (außer Amisulprid).",
  ktr: "Gewicht, BZ/HbA1c, Lipide, RR zu Beginn und im Verlauf, weil metabolische Effekte gering, aber möglich sind. Akathisie in den ersten Wochen aktiv erfragen (BARS), weil sie zu Abbruch und Suizidalität beitragen kann. Impulskontrolle (Spielen, Kaufen, Sexualität) bei jeder Visite erfragen, weil Betroffene es selten spontan berichten. Anfallsanamnese. TDM 100–350 ng/ml Aripiprazol (AGNP/K; Summe mit Dehydroaripiprazol 150–500 ng/ml [?]).",
  ss: "Schwangerschaft: Benkert-Risikostufe RS 4, Verordnung möglichst vermeiden (P); Nabelschnurspiegel etwa halb so hoch wie mütterlich (K). Stillzeit: M/P-Ratio ca. 0,2 (K); Datenlage begrenzt, kann Milchbildung über Prolaktinsenkung vermindern [?].",
  mech: "Partieller Agonist an D2- und D3-Rezeptoren: bei dopaminerger Überaktivität antagonistisch, bei Unteraktivität agonistisch („Dopamin-Stabilisierer“). Zusätzlich partieller 5-HT1A-Agonismus und 5-HT2A-Antagonismus. Der Agonistenanteil erklärt fehlende Prolaktinerhöhung, aber auch Akathisie und Impulskontrollstörungen.",
  auf: "Ein Medikament gegen Psychosen und Manie, das meist kaum müde macht und wenig auf Gewicht und Stoffwechsel wirkt. Häufig ist anfangs eine innere Unruhe mit Bewegungsdrang, die gemeldet werden sollte. Selten entsteht ein ungewohnter Drang zu Glücksspiel, Kaufen oder Sex; das bitte ebenfalls sofort mitteilen.",
  cx: {
    schw: ["y", "RS 4, möglichst vermeiden"],
    still: ["y", "M/P 0,2; Daten begrenzt"],
    alt: ["y", "Demenz-Warnhinweis; niedrig starten"],
    jug: ["g", "Ab 15 J. Schizophrenie, ab 13 J. Manie"],
    niere: ["g", "Keine Anpassung [?]"],
    leber: ["y", "Vorsicht bei schwerer Insuffizienz"],
    qtc: ["g", "Keine relevante QTc-Verlängerung"],
    epi: ["y", "Selten Anfälle; Vorsicht"],
    sucht: ["y", "Impulskontrollstörung, Spielsucht"],
    fahr: ["g", "Kaum sedierend"]
  },
  tg: { s: ["2D6", "3A4"], sd: 1 },
  hw: "60–80 h (Depot 30–47 d)",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · Dreher 2021 · FI · EMA/Lundbeck 2024 (Maintena 960 mg)"
});

E2D("amisulprid", {
  n: "Amisulprid",
  b: ["Solian", "Amisulprid-Generika"],
  k: "Benzamid (selektiver D2/D3-Antagonist)",
  g: "Antipsychotika",
  kern: [
    "Dosis zweigeteilt: Negativsymptomatik 50–300 mg, Positivsymptomatik 400–800 mg",
    "Renal eliminiert: CrCl 30–60 → ½ Dosis, 10–30 → ⅓, < 10 KI",
    "Stärkster Prolaktinanstieg aller AAP: bei jungen Frauen eher meiden",
    "Dosisabhängige QT-Verlängerung, TdP v. a. bei Überdosierung; EKG",
    "Keine CYP-Interaktionen; gute Kombination zu Clozapin"
  ],
  ind: "Akute und chronische schizophrene Störungen; primäre Negativsymptomatik mit Affektverflachung, emotionalem und sozialem Rückzug.",
  off: "Augmentation von Clozapin bei Teilresponse (Kombination laut P/K möglich und evtl. vorteilhaft); Clozapin-induzierte Hypersalivation (P); Dysthymie in niedriger Dosis 50 mg (K, in einigen Ländern zugelassen [?]).",
  ki: "Kreatinin-Clearance < 10 ml/min; prolaktinabhängige Tumoren (Prolaktinom, Mammakarzinom [?]); Phäochromozytom [?]; Kombination mit L-Dopa und mit stark arrhythmogenen Mitteln (Amiodaron, Sotalol, Chinidin, Methadon, Pimozid). Keine Verordnung bei Parkinson-Krankheit, Epilepsie, schwerer Niereninsuffizienz (P). Kinder bis zur Pubertät KI [?].",
  dos: {
    e: "Positiv-/Akutsymptomatik: 400–800 mg/d auf 2 Gaben (max. 400 mg als Einzelgabe, gleich zu Beginn möglich), max. 1200 mg/d nur im Einzelfall. Primäre Negativsymptomatik: 50–300 mg/d. Rezidivprophylaxe: mindestens 400 mg/d. Niere: CrCl 30–60 ml/min Dosis halbieren, 10–30 ml/min auf ⅓.",
    a: "Keine Empfehlung > 65 J. (K, relative KI); Elimination im Alter kaum vermindert, aber Nierenfunktion bestimmen und Dosis anpassen. Demenz-Warnhinweis.",
    j: "Unter 15 J. nicht empfohlen, vor der Pubertät KI [?]; 15–17 J. nicht zugelassen [?]."
  },
  nw: "Sehr häufig (dosisabhängig, meist gering): EPS, Akathisie, Hypersalivation. Häufig: Prolaktinanstieg mit Galaktorrhö, Amenorrhö, Gynäkomastie, sexuellen Funktionsstörungen; Schlaflosigkeit, Angst, Agitiertheit, Schläfrigkeit, akute Dystonie, Hypotension, Obstipation, Übelkeit, Gewichtszunahme (gering). Gelegentlich: Krampfanfälle, Bradykardie, Hyperglykämie, Spätdyskinesien. Selten: dosisabhängige QT-Verlängerung mit TdP (v. a. Überdosierung), MNS, venöse Thromboembolie, Neutropenie/Agranulozytose. Absetzsymptome (Übelkeit, Erbrechen, Schlaflosigkeit). Kaum Sedierung, keine anticholinergen Effekte.",
  ia: "Keine relevanten pharmakokinetischen Interaktionen (kaum hepatischer Metabolismus). Pharmakodynamisch: keine Kombination mit L-Dopa (Antagonismus) und Antiarrhythmika Klasse Ia/III, Methadon, Pimozid; Vorsicht mit anderen QT-Verlängerern, Hypokaliämie-induzierenden Mitteln (Diuretika, Laxanzien, Glukokortikoide) und Bradykardie-induzierenden Mitteln (Betablocker, Verapamil, Diltiazem, Clonidin, Guanfacin, Digitalis). Kohlenhydratreiche Mahlzeit senkt Bioverfügbarkeit.",
  ktr: "Kreatinin/eGFR vor Beginn und im Verlauf, weil Dosis direkt von der Nierenfunktion abhängt. Prolaktin (und Zyklus, Galaktorrhö, Libido erfragen), weil der Anstieg stark ist und mit Amenorrhö korreliert. EKG und Kalium/Magnesium vor Beginn und nach Aufdosierung, weil die QT-Verlängerung dosisabhängig ist. Gewicht, BZ, Lipide, RR. TDM 100–320 ng/ml (AGNP/K; Talspiegel wegen kurzer HWZ).",
  ss: "Schwangerschaft: Benkert-Risikostufe RS 5, Daten erlauben keine Einschätzung, Verordnung abgeraten (P). Stillzeit: sehr hohe M/P-Ratio (bis 19,5; K), daher nicht stillen bzw. anderes Antipsychotikum wählen.",
  mech: "Selektiver Antagonist an D2- und D3-Rezeptoren mit Anreicherung im mesolimbischen und tuberoinfundibulären System (daher Prolaktin ↑↑, wenig EPS). In niedriger Dosis bevorzugte Blockade präsynaptischer Autorezeptoren mit gesteigerter Dopaminfreisetzung (Wirkung auf Negativsymptomatik). Diskutiert wird ein 5-HT7-Antagonismus als antidepressive Komponente.",
  auf: "Ein Medikament gegen Psychosen, das in niedriger Dosis auch bei Antriebsmangel und sozialem Rückzug helfen kann. Es macht kaum müde, kann aber das Hormon Prolaktin deutlich erhöhen (Brustspannen, Milchfluss, Zyklusstörungen, Lustlosigkeit). Weil es über die Nieren ausgeschieden wird, werden Nierenwerte und das EKG kontrolliert.",
  cx: {
    schw: ["y", "RS 5, abgeraten"],
    still: ["r", "M/P bis 19,5: nicht stillen"],
    alt: ["y", "> 65 J. nicht empfohlen; Niere prüfen"],
    jug: ["r", "Nicht zugelassen, präpubertär KI [?]"],
    niere: ["r", "Dosis ½ bzw. ⅓; CrCl < 10 KI"],
    leber: ["g", "Keine Anpassung nötig"],
    qtc: ["y", "Dosisabhängig QT ↑, TdP bei Überdosis"],
    epi: ["y", "Keine Verordnung bei Epilepsie (P)"],
    pd: ["r", "L-Dopa-Antagonismus, KI"],
    fahr: ["g", "Kaum sedierend"]
  },
  tg: { qt: 2, da: 2 },
  hw: "12–20 h",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · FI · CredibleMeds"
});

E2D("ziprasidon", {
  n: "Ziprasidon",
  b: ["Zeldox", "Ziprasidon-Generika"],
  k: "Atypisches Antipsychotikum (Benzisothiazylpiperazin)",
  g: "Antipsychotika",
  kern: [
    "Metabolisch günstig, wenig Gewicht und Prolaktin; Wirkung evtl. etwas schwächer",
    "Deutlichste QT-Verlängerung unter den AAP: EKG vor Beginn, KI bei QT-Risiko",
    "Nur mit Mahlzeit ≥ 500 kcal: sonst Bioverfügbarkeit stark ↓",
    "2 × 40 mg Start, bis 2 × 80 mg innerhalb von 3 Tagen möglich",
    "I.m. 10 mg bei Erregung (max. 40 mg/d, max. 3 Tage)"
  ],
  ind: "Oral: Schizophrenie; manische oder gemischte Episoden bis mäßigen Schweregrads bei bipolarer Störung (auch Kinder und Jugendliche 10–17 J.). I.m.: rasche Beherrschung von Erregungszuständen bei Schizophrenie für bis zu 3 aufeinanderfolgende Tage, wenn orale Behandlung nicht angezeigt ist.",
  off: "Schizoaffektive Störung, Tic-Störungen, autistische Störungen, Verhaltensstörungen bei Demenz und Intelligenzminderung, Psychose bei Parkinson, psychotische Depression (alle K, Evidenz überwiegend schwach) [?].",
  ki: "Bekannte QTc-Verlängerung bzw. angeborenes Long-QT-Syndrom; Herzrhythmusstörungen, die mit Antiarrhythmika Klasse IA oder III behandelt werden; Kombination mit anderen QT-verlängernden Arzneimitteln (FI [?]; K nur „Vorsicht“); akuter Myokardinfarkt, dekompensierte Herzinsuffizienz [?]. Relativ: ausgeprägte Bradykardie, Krampfanfälle, schwere Leberinsuffizienz, unkorrigierte Elektrolytstörungen.",
  dos: {
    e: "Oral: Start 2 × 40 mg mit einer Mahlzeit (≥ 500 kcal), je nach Ansprechen bis 2 × 80 mg; Steigerung auf Maximaldosis innerhalb von 3 Tagen möglich, nicht über 160 mg/d. Erhaltung so niedrig wie möglich, oft reichen 2 × 20 mg. I.m.: 10 mg, alle 2 h bis max. 40 mg/d, Umstellung auf oral innerhalb von 3 Tagen.",
    a: "Keine altersabhängige Pharmakokinetik, aber niedrigere Dosen bei Älteren und Parkinson erwägen (K); Demenz-Warnhinweis; QT-Risiko im Alter beachten.",
    j: "Manie/gemischte Episode 10–17 J. zugelassen; Dosierung gewichtsabhängig laut FI [?]. Schizophrenie < 18 J. nicht zugelassen [?]."
  },
  nw: "Häufig: Kopfschmerz, Schwindel, Unruhe, Akathisie, Somnolenz/Sedierung, Asthenie, Übelkeit, Erbrechen, Obstipation, Dyspepsie, Mundtrockenheit, Speichelfluss, EPS (Dystonie, Parkinsonismus, Tremor), verschwommenes Sehen; Schmerzen an der Injektionsstelle. Gefährlich: dosisabhängige QTc-Verlängerung (Studien: +30–60 ms bei 12,3 %, > 60 ms bei 1,6 %, > 500 ms bei 0,1 %), TdP, Synkopen; MNS; DRESS (Arzneimittelexanthem mit Eosinophilie) [?]. Gelegentlich Prolaktinanstieg (selten klinisch relevant). Kaum Gewichtszunahme, geringe metabolische Effekte.",
  ia: "Abbau zu 2/3 über Aldehydoxidase, zu 1/3 über CYP3A4, daher wenig CYP-Interaktionen; Carbamazepin senkt Spiegel um ca. 30 %. Pharmakodynamisch entscheidend: keine Kombination mit QT-Verlängerern (Klasse IA/III-Antiarrhythmika, Methadon [?], Moxifloxacin, Mefloquin, Pimozid, Thioridazin, Sertindol), Vorsicht mit Hypokaliämie-induzierenden Mitteln. Lithium und serotonerge Mittel (SSRI): Einzelfälle Serotoninsyndrom. I.m. plus parenterale Benzodiazepine: Sedierung, kardiorespiratorische Depression.",
  ktr: "EKG vor Beginn, nach Aufdosierung und bei Dosiserhöhung oder QT-Komedikation, weil die QT-Verlängerung dosisabhängig und unter den AAP am ausgeprägtesten ist (QTc > 500 ms: absetzen [?]). Kalium und Magnesium vor Beginn korrigieren, weil Hypokaliämie TdP begünstigt. Einnahme mit Mahlzeit nachfragen, weil nüchterne Einnahme Spiegel und Wirkung halbiert. Gewicht, BZ, Lipide nach Standard. TDM 50–200 ng/ml (AGNP/K; Talspiegel wegen kurzer HWZ).",
  ss: "Schwangerschaft: Daten begrenzt, Benkert-Risikostufe nicht gelesen [?]; nur nach strenger Nutzen-Risiko-Abwägung. Stillzeit: M/P-Ratio 0,06 (Einzelfall; K), Daten unzureichend [?].",
  mech: "Starke Blockade von 5-HT2A- und 5-HT2C-Rezeptoren, mittelstarke Blockade von D2, D3 und H1; 5-HT1A-Agonismus. Zusätzlich Hemmung der Serotonin- und Noradrenalin-Wiederaufnahme. Keine anticholinerge Wirkung.",
  auf: "Ein Medikament gegen Psychosen und Manie, das kaum zu Gewichtszunahme führt. Es muss immer zu einer richtigen Mahlzeit eingenommen werden, sonst wirkt es kaum. Weil es den Herzrhythmus beeinflussen kann, wird vorher und im Verlauf ein EKG geschrieben; Herzstolpern oder Ohnmacht sofort melden.",
  cx: {
    schw: ["y", "Daten begrenzt [?]"],
    still: ["y", "M/P 0,06, Daten unzureichend"],
    alt: ["y", "QT-Risiko, Demenz-Warnhinweis"],
    jug: ["y", "Nur Manie 10–17 J. zugelassen"],
    niere: ["g", "Keine Anpassung (schwer: nicht empf.)"],
    leber: ["y", "Leicht–mittel: Dosis anpassen"],
    qtc: ["r", "Ausgeprägteste QT-Verlängerung der AAP"],
    epi: ["y", "Relative KI: Anfälle in Anamnese"],
    fahr: ["y", "Somnolenz möglich"]
  },
  tg: { s: ["3A4"], qt: 2, da: 1, se: 1 },
  hw: "4–8 h",
  src: "Benkert Kompendium 2021 · FI"
});

E2D("lurasidon", {
  n: "Lurasidon",
  b: ["Latuda (in DE nicht im Handel)"],
  k: "Atypisches Antipsychotikum (Benzisothiazol)",
  g: "Antipsychotika",
  kern: [
    "In DE nicht im Handel (Takeda-Rückzug 2015; Stand 2024), nur per Einzelimport",
    "EU-zugelassen: Schizophrenie Erwachsene und Jugendliche ab 13 J.",
    "Mit Mahlzeit ≥ 350 kcal, 1 × tgl., keine Titration nötig",
    "Metabolisch günstig, kaum Sedierung; Akathisie relativ häufig",
    "KI mit starken CYP3A4-Hemmern und -Induktoren; Grapefruit meiden"
  ],
  ind: "EU (Latuda): Schizophrenie bei Erwachsenen und Jugendlichen ab 13 J. (Erweiterung Jugendliche 2020). Seit Marktrücknahme 2015 in Deutschland nicht vertrieben (DocCheck Stand 2024); Bezug nur über Einzelimport (§ 73 AMG) [?].",
  off: "Bipolare Depression (in den USA zugelassen, gute Evidenz; in EU nicht zugelassen; K).",
  ki: "Gleichzeitige Gabe starker CYP3A4-Inhibitoren (Ketoconazol, Clarithromycin, Ritonavir) und starker CYP3A4-Induktoren (Rifampicin, Carbamazepin, Phenytoin, Johanniskraut) (K/FI). K nennt zusätzlich schwere Leber- und Nierenerkrankungen, kardiale Vorschädigung, schwere organische Hirnerkrankungen, prolaktinabhängige Tumoren; relativ Hyperglykämie.",
  dos: {
    e: "Start 37 mg 1 × tgl. mit Mahlzeit (≥ 350 kcal), keine Titration nötig; Erhöhung auf 74 mg, max. 148 mg/d (in CH/USA 40/80/160 mg). Mäßige bis schwere Nieren- oder Leberinsuffizienz: max. 40 mg (≈ 37 mg). Mit Diltiazem (mittelstarker 3A4-Hemmer) max. 80 mg (≈ 74 mg).",
    a: "Keine Dosisanpassung allein wegen Alters [?]; Nierenfunktion beachten; Demenz-Warnhinweis.",
    j: "Ab 13 J. zugelassen: Start 37 mg, Bereich 37–74 mg/d [?] (Studie: 40 oder 80 mg)."
  },
  nw: "Sehr häufig: Akathisie, Somnolenz. Häufig: Insomnie, Agitiertheit, Angst, Parkinsonoid, Dystonie, Dyskinesie, Übelkeit, Erbrechen, Dyspepsie, Hypersalivation, CK- und Kreatininanstieg, Gewichtszunahme (gegenüber Placebo nicht signifikant). Gelegentlich: Prolaktinanstieg (gering), Glukoseanstieg, Orthostase. Selten: Neutropenie, MNS, Krampfanfälle, Rhabdomyolyse, Angioödem, Suizidalität. QTc-Effekt gering [?].",
  ia: "Empfindliches CYP3A4-Substrat: starke Hemmer und Induktoren kontraindiziert; mittelstarke Hemmer (Diltiazem, Erythromycin [?], Verapamil [?]) Dosis begrenzen; Grapefruitsaft meiden. Additive Sedierung mit ZNS-Dämpfern.",
  ktr: "Gewicht, BZ/HbA1c, Lipide nach Standard, weil geringe, aber vorhandene metabolische Effekte möglich sind. Akathisie früh erfragen. Kreatinin/Leberwerte vor Beginn, weil bei Organinsuffizienz Dosisobergrenze gilt. EKG bei kardialer Vorerkrankung (K). TDM 15–40 ng/ml (AGNP/K).",
  ss: "Schwangerschaft: keine ausreichenden Daten, Benkert-Risikostufe nicht gelesen [?]. Stillzeit: Daten unzureichend [?].",
  mech: "Hochaffiner Antagonist an D2-, 5-HT2A- und 5-HT7-Rezeptoren, partieller 5-HT1A-Agonist, mittlere Affinität zu α2C. Kaum H1- und muskarinische Affinität, daher wenig Sedierung und Gewichtszunahme. Der 5-HT7-Antagonismus wird für die antidepressive Wirkung diskutiert.",
  auf: "Ein Medikament gegen Psychosen, das kaum müde macht und wenig auf das Gewicht wirkt. Es muss jeden Tag mit einer richtigen Mahlzeit eingenommen werden. In Deutschland ist es derzeit nicht regulär erhältlich und muss gegebenenfalls aus dem Ausland bestellt werden.",
  cx: {
    schw: ["y", "Daten unzureichend [?]"],
    still: ["y", "Daten unzureichend [?]"],
    alt: ["y", "Demenz-Warnhinweis"],
    jug: ["g", "EU ab 13 J. (Schizophrenie)"],
    niere: ["y", "Mäßig–schwer: max. 37–40 mg"],
    leber: ["y", "Mäßig–schwer: max. 37–40 mg"],
    qtc: ["g", "Geringes QT-Risiko [?]"],
    fahr: ["y", "Somnolenz sehr häufig"]
  },
  tg: { s: ["3A4"], sens: ["3A4"], da: 1 },
  hw: "12–37 h",
  src: "Benkert Kompendium 2021 · FI/EMA · apotheke adhoc 2020 · DocCheck Flexikon 2024"
});

E2D("paliperidon", {
  n: "Paliperidon",
  b: ["Invega", "Xeplion (1-Monats-Depot)", "Trevicta (3-Monats-Depot)", "Byannli (6-Monats-Depot)"],
  k: "Atypisches Antipsychotikum (9-OH-Risperidon)",
  g: "Antipsychotika",
  kern: [
    "Aktiver Risperidon-Metabolit, renal eliminiert, kaum CYP-Interaktionen",
    "Xeplion: 150 mg Tag 1 + 100 mg Tag 8 deltoidal, dann 75 mg/4 Wo (25–150)",
    "Trevicta ×3,5 der Xeplion-Dosis alle 12 Wo; Byannli alle 6 Monate (700/1000 mg)",
    "Niere: CrCl 50–80 Dosis ↓; < 50 Depots nicht empfohlen",
    "Prolaktin ↑↑ (stärker als Risperidon); orthostatische Hypotonie"
  ],
  ind: "Oral (Invega): Schizophrenie (Erwachsene; Jugendliche ab 15 J. [?]); psychotische oder manische Symptome bei schizoaffektiver Störung (Erwachsene). Xeplion: Erhaltungstherapie der Schizophrenie bei Erwachsenen, die auf Paliperidon oder Risperidon eingestellt sind; bei früherem Ansprechen auf orales Paliperidon/Risperidon und leichter bis mittelschwerer Symptomatik auch ohne orale Voreinstellung. Trevicta: Erhaltungstherapie bei Erwachsenen, die auf Xeplion klinisch stabil sind. Byannli: Erhaltungstherapie bei Erwachsenen, die auf 1- oder 3-Monats-Paliperidonpalmitat klinisch stabil sind.",
  off: "Bipolare Störung, andere psychotische Störungen und Verhaltensstörungen analog Risperidon [?] (keine eigene Evidenzprüfung).",
  ki: "Überempfindlichkeit gegen Paliperidon oder Risperidon (FI, Byannli). Relativ (K): schwere Leber- und schwerste Niereninsuffizienz, Parkinson-Krankheit, Lewy-Körper-Demenz, Epilepsie, kardiale Vorschädigung, Blutbildveränderungen; zerebrovaskuläre Erkrankungen sorgfältig abwägen.",
  dos: {
    e: "Oral: 3–6 mg morgens (nüchtern oder mit Frühstück), ohne Titration, max. 12 mg; Tablette ganz schlucken (Hülle wird ausgeschieden). Xeplion: Tag 1 150 mg, Tag 8 100 mg (beide deltoidal), dann alle 4 Wochen 75 mg deltoidal oder gluteal, Bereich 25–150 mg; Start am Tag nach letzter oraler Dosis bzw. statt der nächsten Depotinjektion. Äquivalenz: oral 3 mg ≈ 50–75 mg, 6 mg ≈ 100–150 mg; Risperdal Consta 25/37,5/50 mg/2 Wo ≈ Xeplion 50/75/100 mg. Trevicta: 3,5-fache Xeplion-Dosis alle 12 Wochen (175 [K: 150]/263/350/525 mg ≙ 50/75/100/150 mg) nach Stabilisierung auf Xeplion (meist ≥ 4 Injektionen [?]). Byannli: gluteal alle 6 Monate (Fenster −2 bis +3 Wochen); Xeplion 100/150 mg oder Trevicta 350/525 mg → Byannli 700/1000 mg.",
    a: "Dosis nach Nierenfunktion (im Alter oft eingeschränkt), oral max. 12 mg auch bei Älteren laut P; Orthostase und Sturzrisiko; Demenz-Warnhinweis.",
    j: "Oral ab 15 J. für Schizophrenie zugelassen [?] (Start 3 mg [?]). Alle Depots < 18 J. nicht zugelassen (Byannli FI)."
  },
  nw: "Sehr häufig: Parkinsonoid, Akathisie, Sedierung/Somnolenz, Schlaflosigkeit, Kopfschmerz. Häufig: Prolaktinanstieg mit Amenorrhö, Galaktorrhö, sexuellen Funktionsstörungen (ausgeprägter als Risperidon), Gewichtszunahme, Dystonie, Tremor, orthostatische Hypotonie, Tachykardie, QTc-Verlängerung, Erregungsleitungsstörungen, Infekte der oberen Atemwege, Transaminasen ↑; Schmerzen an der Injektionsstelle. Gelegentlich: Hyperglykämie/Diabetes, Krampfanfälle, Synkopen, Harnretention. Selten: MNS, Spätdyskinesien, Priapismus, Thromboembolie, intraoperatives Floppy-Iris-Syndrom [?].",
  ia: "Kaum hepatischer Metabolismus, keine relevanten CYP-Interaktionen. Carbamazepin senkt Spiegel (Induktion von P-Glykoprotein). Mittel mit Einfluss auf renale Clearance oder Darmpassage (z. B. Metoclopramid) verändern Spiegel. Pharmakodynamisch: QT-Verlängerer und Hypokaliämie-induzierende Mittel, Krampfschwellen-Senker (TZA, Tramadol), Dopaminagonisten (Antagonismus), Antihypertensiva (Orthostase). Hypotonie nicht mit Adrenalin behandeln (Adrenalinumkehr), sondern mit Noradrenalin.",
  ktr: "Kreatinin/eGFR vor Beginn und vor Depotumstellung, weil Dosis und Depot-Eignung von der Nierenfunktion abhängen. Prolaktin und klinische Zeichen (Zyklus, Galaktorrhö, Libido), weil der Anstieg stärker als unter Risperidon sein kann. Gewicht, BZ/HbA1c, Lipide, RR (Orthostase) zu Beginn, nach 3 Monaten, dann jährlich. EKG bei kardialen Risiken. TDM 20–60 ng/ml (P/AGNP), vor Depotumstellung nützlich [?].",
  ss: "Schwangerschaft: Benkert-Risikostufe nicht gelesen [?]; Nabelschnurspiegel etwa halb so hoch wie mütterlich (K); bei Depots lange Exposition nach Absetzen bedenken. Stillzeit: M/P-Ratio 0,88 (K), zurückhaltend, Kind beobachten.",
  mech: "Antagonist an D2- und 5-HT2A-Rezeptoren sowie an α1-, α2- und H1-Rezeptoren, ohne anticholinerge Wirkung. Als 9-Hydroxy-Risperidon entspricht das Profil weitgehend Risperidon, jedoch mit gleichmäßigeren Spiegeln durch OROS-Retardierung bzw. Palmitat-Depot. Die schlechte Hirngängigkeit (P-Glykoprotein-Substrat) erklärt die starke periphere Prolaktinwirkung [?].",
  auf: "Ein Medikament gegen Psychosen, das als Tablette oder als Spritze alle 1, 3 oder 6 Monate gegeben werden kann. Häufig steigt das Hormon Prolaktin an (Brustspannen, Milchfluss, Zyklusstörungen, Lustlosigkeit); das sollte angesprochen werden. Weil es über die Nieren ausgeschieden wird, werden vor Beginn die Nierenwerte geprüft.",
  cx: {
    schw: ["y", "Daten begrenzt; Depot lange wirksam"],
    still: ["y", "M/P 0,88; zurückhaltend"],
    alt: ["y", "Niere prüfen; Orthostase; Demenz"],
    jug: ["y", "Oral ab 15 J. [?]; Depot nicht"],
    niere: ["r", "Dosis ↓; CrCl < 50: Depot nicht"],
    leber: ["g", "Leicht–mittel keine Anpassung (P)"],
    qtc: ["y", "QTc-Verlängerung häufig gelistet"],
    epi: ["y", "Relative KI Epilepsie (K)"],
    pd: ["r", "Relative KI Parkinson/DLK (K)"],
    fahr: ["y", "Somnolenz sehr häufig"]
  },
  tg: { qt: 1, da: 2, hy: 1 },
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · FI Byannli (EMC) · FI"
});

E2D("cariprazin", {
  n: "Cariprazin",
  b: ["Reagila"],
  k: "Partieller D3/D2-Agonist (AAP)",
  g: "Antipsychotika",
  kern: [
    "Option bei prädominanter Negativsymptomatik (G-BA: geringer Zusatznutzen)",
    "Start 1,5 mg, Bereich 1,5–6 mg; Wirkung und NW verzögert (Steady State ~4 Wo)",
    "Aktive Metaboliten bis 3 Wochen HWZ: NW klingen nach Absetzen langsam ab",
    "KI mit mittelstarken/starken 3A4-Hemmern und 3A4-Induktoren",
    "Akathisie und Parkinsonoid sehr häufig; metabolisch günstig"
  ],
  ind: "Schizophrenie bei Erwachsenen.",
  off: "Bipolar-I-Störung, manische oder gemischte Episoden (in den USA zugelassen; K); bipolare Depression und Augmentation bei Major Depression (USA zugelassen [?]).",
  ki: "Kombination mit mittelstarken bis starken CYP3A4-Inhibitoren (z. B. Clarithromycin, Erythromycin, Ketoconazol, Itraconazol, Posaconazol, Voriconazol, Fluconazol, Ritonavir, Cobicistat, Diltiazem, Verapamil) und mit CYP3A4-Induktoren (Carbamazepin, Phenytoin, Rifampicin, Johanniskraut) (K/P). Schwere Leber- oder Niereninsuffizienz: Anwendung nicht empfohlen (K). Frauen im gebärfähigen Alter: zuverlässige Verhütung (FI) [?].",
  dos: {
    e: "Start 1,5 mg 1 × tgl., Steigerung langsam in 1,5-mg-Schritten [?], empfohlener Bereich 1,5–6 mg/d. Wegen langer Metaboliten-HWZ Dosisänderungen erst nach 1–2 Wochen beurteilen [?]; Steady State der aktiven Fraktion nach ca. 4 Wochen.",
    a: "Begrenzte Daten bei ≥ 65 J. [?]; Demenz-Warnhinweis. Leichte bis mäßige Leber-/Nierenfunktionsstörung: keine Anpassung (K).",
    j: "Unter 18 J. nicht zugelassen [?]."
  },
  nw: "Sehr häufig: Akathisie, Parkinsonoid. Häufig: Gewichtszunahme, Appetitänderung, Dyslipidämie, Schlafstörungen, Angst, Sedierung/Ermüdung, Schwindel, Dystonie und andere EPS, verschwommenes Sehen, Tachyarrhythmie, Hypertonie, Übelkeit, Obstipation, Erbrechen, Leberenzyme ↑, CK ↑. Gelegentlich: Glukose ↑/Diabetes, Natriumveränderungen, TSH ↓, Eosinophilie, Anämie, QTc-Verlängerung, Bradyarrhythmie, Hypotonie, suizidales Verhalten, Delir, tardive Dyskinesie, Augeninnendruck ↑, Katarakt [?]. Kaum Prolaktinerhöhung [?]. Wegen langer HWZ können NW verzögert auftreten.",
  ia: "Abbau über CYP3A4 (geringer 2D6) zu den aktiven Metaboliten Desmethyl- und Didesmethylcariprazin. Mittelstarke/starke 3A4-Hemmer kontraindiziert (Akkumulation der langlebigen Metaboliten), 3A4-Induktoren kontraindiziert (Wirkverlust). Additive Sedierung und eingeschränkte Fahrtauglichkeit mit sedierenden Mitteln (K).",
  ktr: "Akathisie und EPS in den ersten Wochen und auch noch Wochen nach Dosisänderung erfragen, weil die aktive Fraktion erst nach ca. 4 Wochen im Steady State ist. Gewicht, BZ/HbA1c, Lipide, RR, EKG (P: Routinelabor, BZ, Blutfette, Gewicht, EKG, RR). Komedikation bei jedem neuen Rezept auf 3A4-Hemmer/-Induktoren prüfen (Antimykotika, Makrolide). TDM 5–15 ng/ml Muttersubstanz; aktive Fraktion bei 6 mg 30–45 ng/ml (K).",
  ss: "Schwangerschaft: Benkert-Risikostufe RS 5, wegen fehlender Erfahrung abgeraten (P). Wegen langer Metaboliten-HWZ Verhütung bis ca. 10 Wochen nach Absetzen [?]. Stillzeit: keine Daten, nicht empfohlen [?].",
  mech: "Partieller Agonist an D3- und D2-Rezeptoren mit besonders hoher D3-Affinität, zusätzlich partieller 5-HT1A-Agonismus und Antagonismus an 5-HT2A/2B- und H1-Rezeptoren. Die D3-Präferenz wird für die Wirkung auf Negativsymptomatik und Antrieb diskutiert. Die beiden Hauptmetaboliten haben ein ähnliches Wirkprofil und sehr lange Halbwertszeiten.",
  auf: "Ein Medikament gegen Psychosen, das besonders bei Antriebsmangel und sozialem Rückzug helfen kann und wenig auf Gewicht und Stoffwechsel wirkt. Häufig tritt eine innere Unruhe mit Bewegungsdrang auf, auch erst nach einigen Wochen. Es bleibt lange im Körper, deshalb wirken Dosisänderungen verzögert.",
  cx: {
    schw: ["y", "RS 5, abgeraten; Verhütung [?]"],
    still: ["y", "Keine Daten [?]"],
    alt: ["y", "Wenig Daten; Demenz-Warnhinweis"],
    jug: ["r", "Nicht zugelassen [?]"],
    niere: ["y", "Schwer: nicht empfohlen"],
    leber: ["y", "Schwer: nicht empfohlen"],
    qtc: ["g", "QT-Risiko wahrscheinlich gering"],
    fahr: ["y", "Ermüdung häufig"]
  },
  tg: { s: ["3A4"], sens: ["3A4"] },
  hw: "24–48 h; aktive Fraktion effektiv 8 d, Metaboliten bis 3 Wo",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · Dreher 2021 · FI"
});

/* ---- gruppe_e ---- */
// Gruppe E · Etappe 2 · ADHS und Antidementiva · Stand 07.10.2026

E2D("methylphenidat", {
  n: "Methylphenidat",
  b: ["Medikinet adult", "Ritalin adult", "Concerta", "Medikinet retard", "Ritalin", "Kinecteen", "Equasym retard"],
  k: "Psychostimulans (DAT-/NET-Hemmer)",
  g: "ADHS",
  kern: [
    "Erwachsene: Medikinet adult, Ritalin adult, Concerta (FI 2026), einige Retard-Generika",
    "Start 10 mg, wöchentlich +10 mg; max. 80 mg (Medikinet/Ritalin adult), Concerta 72 mg",
    "BtM; vorher RR, Puls, kardiale Eigen- und Familienanamnese (plötzlicher Tod), Gewicht",
    "KI: MAO-Hemmer (14 Tage), Herz-Kreislauf-Erkrankung, Glaukom, Psychose, Hyperthyreose",
    "Medikinet adult mit/nach Mahlzeit; Wirkdauer 8–10 h (Medikinet/Ritalin), 12 h (Concerta)"
  ],
  ind: "ADHS bei Erwachsenen (ab 18 J.) im Rahmen einer therapeutischen Gesamtstrategie, wenn andere Maßnahmen allein unzureichend sind: Medikinet adult und Ritalin adult (FI: „seit dem Kindesalter fortbestehende“ ADHS; Diagnose mit strukturiertem Interview, retrospektive Erfassung der Kindheits-ADHS mit validierten Instrumenten), Concerta (FI Stand 02/2026: auch Erwachsene; laut FI-Abfrage Neueinstellung und Fortführung [?]) sowie einige Methylphenidat-retard-Generika. ADHS bei Kindern und Jugendlichen ab 6 J. (alle MPH-Präparate). Narkolepsie (nur Ritalin).",
  off: "Fortführung nur kinderzugelassener Präparate im Erwachsenenalter (P 2021: für Concerta und Kinecteen „Weiterverordnung möglich“). Weitere Off-label-Einsätze (z. B. Antriebsstörung, Depressions-Augmentation) in den gelesenen Quellen nicht belegt [?].",
  ki: "FI Medikinet adult (09/2025): Glaukom; Phäochromozytom; nicht-selektive irreversible MAO-Hemmer (Tranylcypromin) und 14 Tage danach; Hyperthyreose/Thyreotoxikose; schwere Depression, Anorexia nervosa, Suizidneigung, psychotische Symptome, Manie, Schizophrenie, schwere affektive Störungen, Borderline-Persönlichkeitsstörung (formal KI – bei ADHS mit BPS Abwägung dokumentieren); nicht gut kontrollierte Bipolar-I-Störung; vorbestehende Herz-Kreislauf-Erkrankungen (u. a. Hypertonie, Herzinsuffizienz, KHK, Kardiomyopathie, Arrhythmien, Kanalopathien); zerebrovaskuläre Erkrankungen; Magen-pH > 5,5 unter H2-Blocker/Antazida/PPI (Medikinet adult). K zusätzlich: Tourette-Syndrom, Angsterkrankungen, bekannte Sucht (Einsatz erwägbar, wenn die ADHS die Sucht unterhält). Relativ: Krampfanfälle, Tics.",
  dos: {
    e: "Medikinet adult/Ritalin adult: Start 10 mg (P: 5–10 mg), wöchentlich um 10 mg/Tag steigern; max. 80 mg/Tag bzw. 1 mg/kg KG; Einnahme morgens, ggf. mittags; Medikinet adult mit oder nach der Mahlzeit, sonst verkürzte Wirkung. Concerta: Tageshöchstdosis Erwachsene 72 mg, morgens mit oder ohne Nahrung; Startdosis Erwachsene [?]. Kurz und lang wirksame Präparate kombinierbar; späte Einnahme meiden. BtM-Höchstmenge 2400 mg/30 Tage. Mind. jährlich kontrollierter Auslassversuch.",
    a: "Kaum Daten, Sicherheit im höheren Alter nicht belegt [?]. K Tab. 13.1: Risiko im Alter „erhöht“ (vorläufige Einstufung). Kardiovaskulären Status besonders sorgfältig klären.",
    j: "Zugelassen ab 6 J.: Start 5–10 mg, eher mit unretardiertem Präparat eindosieren; max. 60 mg/Tag (kinderzugelassene Präparate). Längenwachstum und Gewicht kontrollieren."
  },
  nw: "Sehr häufig: Kopfschmerzen, Schwindel, Schlafstörungen, Reizbarkeit, Nervosität, Appetitlosigkeit, Magenbeschwerden. Häufig: Angst/Agitation, Tachykardie, Arrhythmien, Blutdruckanstieg, Gewichtsabnahme, Mundtrockenheit, Dyskinesien, Arthralgien, Haarausfall. Rebound beim Spiegelabfall bzw. abruptem Absetzen (Müdigkeit, Heißhunger, Kreislaufstörung, Depression, selten psychotische Reaktion). Selten: Psychosen, Suizidalität, Tics, Angina pectoris, Leberenzymanstieg, vereinzelt akutes Leberversagen. Missbrauchs- und Abhängigkeitspotenzial.",
  ia: "Abbau v. a. über Carboxylesterase 1, CYP2D6 nur gering beteiligt – daher wenig CYP-Interaktionen. KI mit irreversiblen MAO-Hemmern (14 Tage; hypertensive Krise). Wirkungsverstärkung von TZA (v. a. Imipramin), Amantadin, Antiepileptika und Cumarinen (P) – Spiegel bzw. INR kontrollieren. Vasopressoren und halogenierte Anästhetika: Blutdruckanstieg, am OP-Tag nicht geben. Vorsicht mit dopaminergen Stoffen (Antipsychotika, Dopaminagonisten, L-Dopa); mehr NW mit Bupropion. Alkohol verstärkt ZNS-NW. Antazida/H2-Blocker/PPI können die Freisetzung von Medikinet adult verändern. Serotonerge Antidepressiva: Serotoninsyndrom-Warnhinweis in der FI [?].",
  ktr: "Vor Beginn: RR, Puls, Begleitmedikation, psychiatrische und somatische Komorbidität, Familienanamnese plötzlicher Herztod/unerwarteter Tod, Gewicht (FI), weil Herz-Kreislauf-Erkrankungen KI sind. EKG: K 2021 fordert es vor Beginn bei jedem Patienten (Box 3); die FI verlangt die kardiovaskuläre Beurteilung, ein Routine-EKG für alle nicht ausdrücklich [?] – bei auffälliger Anamnese oder Befund immer EKG und kardiologische Abklärung. RR und Puls bei jeder Dosisänderung und mind. alle 3 Monate, weil Stimulanzien beide erhöhen (K Box 3). Gewicht, Appetit, Schlaf, Stimmung, Suizidalität, Tics. Routinelabor mit Blutbild und Leberwerten (K/P). Bei Sucht-Komorbidität engmaschige Kontrollen inkl. Drogenscreening (K Box 4). Plasmakonzentration nur orientierend: 13–22 ng/ml 2 h nach 20 mg unretardiert; kein AGNP-Zielbereich in den gelesenen Quellen [?].",
  ss: "Embryotox: Verordnung v. a. im 1. Trimenon kritisch prüfen; diskret erhöhtes Risiko für kardiale Fehlbildungen nicht ausgeschlossen, kein erhöhtes Gesamtfehlbildungsrisiko; bei relevanter Verschlechterung ohne Medikation Fortführung akzeptabel. Stillzeit (Embryotox): als Monotherapie unter Vorbehalt akzeptabel, Gewichtszunahme des Kindes beobachten. Benkert-Risikostufe [?].",
  mech: "Hemmt vorwiegend den Dopamin-, weniger den Noradrenalintransporter und erhöht so DA und NA im synaptischen Spalt. Hydrophiler als Amfetamin, keine aktive Transmitterfreisetzung. Kurze HWZ, daher Retardformen mit zweigipfliger (50:50, Medikinet/Ritalin adult) oder osmotischer Freisetzung (OROS 22:78, Concerta).",
  auf: "Ein Medikament, das bei ADHS Aufmerksamkeit, Impulskontrolle und innere Unruhe verbessert; es wirkt nur, solange es eingenommen wird. Es kann Appetit und Schlaf mindern sowie Puls und Blutdruck erhöhen, deshalb werden diese Werte regelmäßig gemessen. Es fällt unter das Betäubungsmittelrecht und darf nicht weitergegeben werden.",
  cx: {
    schw: ["y", "Kritisch prüfen, v. a. 1. Trimenon"],
    still: ["y", "Unter Vorbehalt akzeptabel"],
    alt: ["y", "Kaum Daten; Risiko im Alter erhöht"],
    jug: ["g", "Zugelassen ab 6 J."],
    niere: ["y", "Keine Daten, Vorsicht"],
    leber: ["y", "Keine Daten, Vorsicht"],
    qtc: ["y", "Long-QT-Syndrom: nicht verordnen"],
    epi: ["y", "Vorsicht bei Anfallsanamnese"],
    sucht: ["y", "Missbrauch möglich; Retard bevorzugen"],
    fahr: ["y", "Warnhinweis; Unfallrisiko eher ↓"]
  },
  tg: { stim: 1, hy: 0, kr: 1 },
  hw: "2–4 h (unretardiert)",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · FI Medikinet adult 09/2025 · FI Concerta 02/2026 · Embryotox"
});

E2D("lisdexamfetamin", {
  n: "Lisdexamfetamin",
  b: ["Elvanse Adult", "Elvanse"],
  k: "Psychostimulans (Prodrug von D-Amfetamin)",
  g: "ADHS",
  kern: [
    "Elvanse Adult: Erwachsene; Kindheits-ADHS muss rückblickend bestätigt sein (FI 2023)",
    "Start 30 mg morgens, etwa wöchentlich +20 mg, max. 70 mg; mit oder ohne Essen",
    "Wirkung bei Erwachsenen bis ca. 14 h (FI); Nachmittagseinnahme meiden (Schlaf)",
    "BtM; KI: MAO-Hemmer (14 Tage), symptomatische HKE, mittel-/schwere Hypertonie, Glaukom",
    "Prodrug: geringeres Missbrauchspotenzial als freies Amfetamin, aber nicht null"
  ],
  ind: "ADHS bei Erwachsenen im Rahmen einer therapeutischen Gesamtstrategie (Elvanse Adult; FI 07/2023): Symptome einer seit der Kindheit bestehenden ADHS müssen vorliegen und rückblickend bestätigt werden – eine Erstdiagnose im Erwachsenenalter schließt das nicht aus, sofern der Kindheitsbeginn retrospektiv belegt ist (Lesart der FI). Kinder und Jugendliche ab 6 J. (Elvanse), wenn das Ansprechen auf Methylphenidat klinisch unzureichend war. Zum Vergleich Dexamfetamin (Attentin): zugelassen für Kinder/Jugendliche ab 6 J. mit therapierefraktärer ADHS (P 2021), bei Erwachsenen off-label (K 2021) [aktueller FI-Stand ?].",
  off: "Narkolepsie und primäre Hypersomnie (off-label, K/P). Binge-Eating-Störung: in den USA für Erwachsene zugelassen, in DE nicht (K 2021) [EU-Stand ?].",
  ki: "FI Elvanse Adult: Überempfindlichkeit; MAO-Hemmer gleichzeitig oder innerhalb von 14 Tagen; Hyperthyreose/Thyreotoxikose; symptomatische Herz-Kreislauf-Erkrankung; mittelschwere bis schwere Hypertonie; Glaukom. K zusätzlich: Phäochromozytom, Psychosen, relevante zerebrovaskuläre Erkrankungen, Porphyrie, Schwangerschaft, Stillzeit. Relativ: Krampfanfälle, Tics, bekannte Sucht (Einsatz erwägbar, wenn die ADHS die Sucht unterhält).",
  dos: {
    e: "Elvanse Adult (FI): Start 30 mg 1× morgens, in etwa wöchentlichen Schritten um 20 mg steigern, max. 70 mg/Tag; mit oder ohne Nahrung (fettreiche Mahlzeit verzögert Tmax um ca. 1 h, K). Nachmittagseinnahme wegen Schlafstörungen meiden. K: Start 20–30 mg, P: 10–30 mg. BtM-Höchstmenge 2100 mg/30 Tage.",
    a: "Keine spezifischen Dosisangaben gefunden [?]. K Tab. 13.1: Risiko im Alter „erhöht“. Kardiovaskulären Status besonders sorgfältig prüfen.",
    j: "Elvanse ab 6 J., wenn Ansprechen auf Methylphenidat unzureichend: Start 20–30 mg, max. 70 mg/Tag (K: Dosierung wie bei Erwachsenen). Längenwachstum und Gewicht kontrollieren."
  },
  nw: "Sehr häufig: verminderter Appetit, Kopfschmerzen, Schlafstörungen, Mundtrockenheit. Häufig: Agitiertheit, Angst, Unruhe, Reizbarkeit, Tremor, Zähneknirschen, Tachykardie, Palpitationen, Blutdruckanstieg, Dyspnoe, Übelkeit, Diarrhö/Obstipation, Hyperhidrose, verminderte Libido, erektile Dysfunktion, Gewichtsabnahme. Gelegentlich: Depression, Dysphorie, Euphorie, Manie, Tics, Dermatillomanie. Selten: Krampfanfälle, Leberwerterhöhung, QTc-Verlängerung.",
  ia: "MAO-Hemmer: KI (bis 14 Tage), hypertensive Krise. Serotonerge Mittel: selten Serotoninsyndrom (FI); Vorsicht mit SSRI, TZA, Sympathomimetika, Lithium (K). β-Blocker: hypertone Krise möglich (K). Schwächt Antihypertensiva ab. Antipsychotika (D2-Blockade) mindern die Wirkung; Dopaminagonisten, Bupropion, L-Dopa wirken additiv. D-Amfetamin wird unter Beteiligung von CYP2D6 abgebaut und ist möglicherweise ein schwacher 2D6-Hemmer (FI). Alkohol: Puls ↑, Missbrauchsrisiko ↑. Vorsicht mit QT-verlängernden Arzneimitteln (P).",
  ktr: "Vor Beginn: kardiovaskulärer Status mit RR und Herzfrequenz (FI), kardiale Eigen- und Familienanamnese, Gewicht, weil symptomatische HKE und mittelschwere Hypertonie KI sind. EKG vor und während der Behandlung (P/K; Vorsicht bei QTc-Verlängerung und Elektrolytstörung); bei Strukturauffälligkeiten kardiologische Abklärung. RR/Puls bei jeder Dosisänderung und mind. alle 3 Monate (K Box 3). Gewicht, Schlaf, Stimmung, Tics. Missbrauchspotenzial vor Verordnung bedenken (FI); bei Sucht-Komorbidität Drogenscreening (K Box 4). Plasmakonzentration D-Amfetamin 4 h nach 20 mg LDX 12–17 ng/ml (K, orientierend); kein AGNP-Zielbereich in den Quellen [?].",
  ss: "P: RS 5, K und FI: Schwangerschaft und Stillzeit kontraindiziert bzw. abgeraten. Embryotox: Bewertung „grau“; > 6200 Expositionen ohne Hinweis auf erhöhtes Fehlbildungsrisiko; bei relevanter Symptomverschlechterung ohne Medikation in allen Phasen akzeptabel, Neugeborenes auf Anpassungsstörungen beobachten. Stillzeit: niedrige Dosis unter Vorbehalt, höhere Dosis kritisch (M/P 1,9–5,3). Quellen uneinig.",
  mech: "Inaktives Prodrug: Aufnahme über intestinale Peptidtransporter, Hydrolyse v. a. in Erythrozyten zu D-Amfetamin und Lysin – daher gleichmäßiger Spiegelanstieg und geringeres Missbrauchspotenzial. D-Amfetamin hemmt NET und DAT und setzt zusätzlich DA und NA aus Vesikeln frei (Releaser).",
  auf: "Ein Medikament gegen ADHS, das im Körper erst langsam in den eigentlichen Wirkstoff umgewandelt wird und deshalb gleichmäßig über den Tag wirkt. Es kann Appetit und Schlaf mindern sowie Puls und Blutdruck erhöhen, deshalb werden diese Werte regelmäßig kontrolliert. Es fällt unter das Betäubungsmittelrecht.",
  cx: {
    schw: ["y", "Embryotox akzeptabel; FI/K: KI"],
    still: ["y", "Niedrig dosiert unter Vorbehalt"],
    alt: ["y", "Risiko im Alter erhöht (K)"],
    jug: ["y", "Ab 6 J. nach MPH-Versagen"],
    niere: ["y", "Keine Daten; ggf. niedriger dosieren"],
    leber: ["y", "Keine Daten; ggf. niedriger dosieren"],
    qtc: ["y", "Selten QTc-Verlängerung"],
    epi: ["y", "Selten Krampfanfälle"],
    sucht: ["y", "Prodrug, aber BtM; Kontrollen"]
  },
  tg: { stim: 1, se: 1, s: ["2D6"], qt: 1, kr: 1 },
  hw: "D-Amfetamin ca. 11 h",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · FI Elvanse Adult 07/2023 · Embryotox"
});

E2D("atomoxetin", {
  n: "Atomoxetin",
  b: ["Strattera", "Atomoxetin-Generika (z. B. Atomoxetin-neuraxpharm)"],
  k: "Selektiver Noradrenalin-Wiederaufnahmehemmer (Nicht-Stimulans)",
  g: "ADHS",
  kern: [
    "Kein BtM, kein Abhängigkeitspotenzial – 1. Wahl bei Sucht, Tics, Angst (K/P)",
    "Start 40 mg ≥ 7 Tage, dann 80 mg; max. 100 mg; Wirkung nach 8–10 Wochen beurteilen",
    "Empfindliches CYP2D6-Substrat: Paroxetin, Melperon, PM-Genotyp → Spiegel mehrfach ↑",
    "Suizidales Verhalten (v. a. < 30 J.) und Leberschäden: aufklären, bei Ikterus absetzen",
    "KI: MAO-Hemmer (2 Wochen), Engwinkelglaukom, Phäochromozytom, schwere HKE"
  ],
  ind: "ADHS bei Kindern ab 6 J., Jugendlichen und Erwachsenen im Rahmen eines umfassenden Behandlungsprogramms (K/P; FI Atomoxetin-neuraxpharm 11/2024). Bei Erwachsenen muss bestätigt sein, dass ADHS-Symptome bereits in der Kindheit vorlagen (FI).",
  off: "Keine relevanten Off-label-Einsätze in den gelesenen Quellen [?]. Kombination mit Psychostimulanzien bei ausgeprägtem ADHS möglich (K); Umstellung von/auf Methylphenidat überlappend möglich.",
  ki: "FI: Überempfindlichkeit; MAO-Hemmer gleichzeitig oder innerhalb von 2 Wochen nach Absetzen; Engwinkelglaukom; schwerwiegende kardiovaskuläre oder zerebrovaskuläre Erkrankungen; Phäochromozytom (auch anamnestisch). K zusätzlich: Schwangerschaft, Stillzeit. Relativ: Krampfanfälle in der Anamnese (P: keine Verordnung bei Anfallsleiden), Suizidalität, Leberinsuffizienz (Dosis reduzieren).",
  dos: {
    e: "Start 40 mg/Tag für mind. 7 Tage, dann nach Wirkung 80 mg; Erhaltung 80–100 mg, max. 100 mg/Tag (höhere Dosen ohne Zusatznutzen, K). Einnahme unabhängig von Mahlzeiten, morgens als Einmalgabe; bei Unverträglichkeit auf morgens und späten Nachmittag verteilen. Leberinsuffizienz: mäßig 50 %, schwer 25 % der Dosis (FI). CYP2D6-PM oder starke 2D6-Hemmer: langsam auftitrieren, Dosis anpassen. Kein ausgeprägtes Absetzsyndrom (K).",
    a: "Keine spezifischen Angaben gefunden [?]. K Tab. 13.1: Risiko im Alter „erhöht“ (vorläufige Einstufung). Blutdruck, Puls und Interaktionen (2D6) besonders beachten.",
    j: "Ab 6 J. zugelassen. Bis 70 kg: Start ca. 0,5 mg/kg/Tag für mind. 7 Tage, Erhaltung ca. 1,2 mg/kg/Tag. > 70 kg: wie Erwachsene. Längenwachstum, Gewicht, Suizidalität kontrollieren."
  },
  nw: "Sehr häufig: verminderter Appetit, Kopfschmerzen, Schläfrigkeit, Schlaflosigkeit, Bauchschmerzen, Mundtrockenheit, Übelkeit, Erbrechen, Blutdruck- und Herzfrequenzanstieg. Häufig: Reizbarkeit, Stimmungsschwankungen, Angst, Tachykardie, Palpitationen, Schwitzen, Harnverhalt/Dysurie, erektile Dysfunktion, Ejakulationsstörungen, verminderte Libido, Gewichtsverlust. Gelegentlich: suizidales Verhalten (v. a. < 30 J.), Aggression, Psychose, Synkope, Krampfanfall, QTc-Verlängerung. Selten: Hepatitis bis akutes Leberversagen, Raynaud-Syndrom, Priapismus.",
  ia: "Abbau v. a. über CYP2D6, nachgeordnet CYP2C19. CYP2D6-Hemmer (z. B. Paroxetin, Melperon) und PM-Genotyp: mehrfach höhere Spiegel, mehr NW, Dosis anpassen. MAO-Hemmer: KI (2 Wochen). Salbutamol und andere β2-Agonisten: Blutdruck- und Herzfrequenzanstieg verstärkt. Antihypertensiva: Wirkung abgeschwächt. QT-verlängernde Arzneimittel: Vorsicht, v. a. bei hohen Atomoxetin-Spiegeln. Kombination mit Stimulanzien möglich.",
  ktr: "Vor Beginn: RR, Puls, kardiale Anamnese, EKG (K: Routineuntersuchungen EKG, RR, Puls, Leberwerte; Box 3: EKG vor Beginn bei jedem Patienten), Anfallsanamnese, weil schwere HKE KI sind und Atomoxetin RR und Puls erhöht (FI: 8–12 % mit deutlichen Veränderungen). RR und Puls bei jeder Dosisänderung und mind. alle 3 Monate (K Box 3). Leberenzyme zu Beginn (P); bei Ikterus oder Leberwerterhöhung absetzen (FI). Suizidalität, Aggression und Stimmung engmaschig, v. a. bei jungen Patienten. Plasmakonzentration orientierend 200–1000 ng/ml 60–90 min nach 1,2 mg/kg (K/P); als AGNP-Zielbereich nicht belegt [?].",
  ss: "P: RS 5, von Einnahme in der Schwangerschaft wird abgeraten; K: Schwangerschaft und Stillzeit KI. Embryotox: Bewertung „grau“; ca. 1000 Expositionen im 1. Trimenon ohne Hinweis auf erhöhtes Gesamtfehlbildungsrisiko; bei klarer Indikation in allen Phasen akzeptabel, Entbindung mit Neonatologie (Anpassungsstörungen). Stillzeit: kritisch, keine Daten zum Übergang. Quellen uneinig.",
  mech: "Selektive Hemmung des Noradrenalintransporters; weil dieser im präfrontalen Kortex auch Dopamin aufnimmt, steigen dort NA und DA. Im Nucleus accumbens kaum Anstieg – daher kein Abhängigkeitspotenzial. Volle Wirkung oft erst nach 8–10 Wochen.",
  auf: "Ein Medikament gegen ADHS, das kein Betäubungsmittel ist und nicht abhängig macht; die volle Wirkung zeigt sich erst nach einigen Wochen. Puls und Blutdruck können steigen und werden deshalb kontrolliert. Bei gelber Haut, dunklem Urin oder neuen Gedanken an Selbstverletzung oder Suizid muss sofort ärztlicher Kontakt erfolgen.",
  cx: {
    schw: ["y", "Embryotox akzeptabel; K/P: abraten"],
    still: ["y", "Kritisch, keine Daten"],
    alt: ["y", "Risiko im Alter erhöht (K, vorläufig)"],
    jug: ["g", "Zugelassen ab 6 J."],
    leber: ["y", "Mäßig 50 %, schwer 25 % der Dosis"],
    qtc: ["y", "QT bei hohen Spiegeln/2D6-Hemmung"],
    epi: ["y", "Anfallsanamnese: meiden"],
    sucht: ["g", "Kein Abhängigkeitspotenzial"]
  },
  tg: { s: ["2D6", "2C19"], sens: ["2D6"], qt: 1, stim: 1, kr: 1 },
  hw: "3,6 h (CYP2D6-PM 21 h)",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · FI Atomoxetin-neuraxpharm 11/2024 · Embryotox · PZ 08/2024 (Lieferengpass)"
});

E2D("guanfacin", {
  n: "Guanfacin",
  b: ["Intuniv", "Guanfacin-Generika (z. B. Guanfacin Neuraxpharm)"],
  k: "Selektiver α2A-Agonist (Nicht-Stimulans, retardiert)",
  g: "ADHS",
  kern: [
    "Nur 6–17 J. zugelassen; Erwachsene off-label (FI: Sicherheit nicht erwiesen)",
    "Start 1 mg, max. +1 mg/Woche; Ziel 0,05–0,12 mg/kg; nicht mit fettreichem Essen",
    "Ausschleichen max. 1 mg alle 3–7 Tage – sonst Blutdruck- und Puls-Rebound",
    "Hypotonie, Bradykardie, Synkope, Sedierung (v. a. erste 2–3 Wochen), BMI ↑",
    "CYP3A4: Hemmer → Dosis halbieren; Induktoren (Carbamazepin) → Wirkverlust"
  ],
  ind: "ADHS bei Kindern und Jugendlichen von 6–17 J. im Rahmen eines umfassenden Behandlungsprogramms, wenn Stimulanzien nicht infrage kommen, unverträglich oder unwirksam sind. Keine Zulassung für Erwachsene (P 2021; FI Guanfacin Neuraxpharm 09/2025).",
  off: "ADHS bei Erwachsenen (off-label; FI: Sicherheit und Wirksamkeit nicht erwiesen; Evidenzlage bei Erwachsenen in den gelesenen Quellen nicht bewertet [?]). Kombination mit Psychostimulanzien bei ausgeprägtem ADHS möglich (K). Bei komorbider Sucht empfiehlt K Atomoxetin oder Guanfacin plus KVT.",
  ki: "FI: Überempfindlichkeit. K: Schwangerschaft, Stillzeit, Fertilität; relativ: QT-verlängernde Arzneimittel, Leber- und Nierenerkrankungen. Grapefruitsaft meiden (FI). Vorsicht bei Hypotonie, Bradykardie, AV-Block, Herzinsuffizienz, Synkopen in der Anamnese (K/FI).",
  dos: {
    e: "Off-label, keine zugelassene Erwachsenendosis. Bei Einsatz analog FI: Start 1 mg 1× täglich (morgens oder abends), wöchentlich um max. 1 mg steigern, Zielbereich 0,05–0,12 mg/kg/Tag; Tageshöchstdosis für Erwachsene nicht festgelegt [?]. Tablette unzerkaut, nicht mit fettreicher Mahlzeit. CYP3A4-Hemmer: Dosis um 50 % senken; starke Induktoren: Erhöhung bis 7 mg/Tag erwägen (FI). Absetzen: in Schritten von max. 1 mg alle 3–7 Tage.",
    a: "Keine Daten; K Tab. 13.1: Risiko im Alter „erhöht“ (vorläufig). Hypotonie, Bradykardie und Sturzgefahr.",
    j: "Zugelassen 6–17 J.: Start 1 mg, +1 mg/Woche. 6–12 J. (≥ 25 kg): max. 4 mg. 13–17 J.: 34–41,4 kg max. 4 mg; 41,5–49,4 kg 5 mg; 49,5–58,4 kg 6 mg; ≥ 58,5 kg 7 mg. Wirksamkeit innerhalb von 3 Wochen beurteilbar (K/P)."
  },
  nw: "Somnolenz/Sedierung (v. a. in den ersten 2–3 Wochen), Hypotonie, Bradykardie, Gewichts- und BMI-Zunahme (FI/K); weitere häufige NW wie Kopfschmerz, Müdigkeit, Bauchschmerz [?]. Gelegentlich (K): Synkopen, Schwindel, AV-Block I°, Sinusarrhythmie, Tachykardie, Halluzinationen, Krampfanfälle, Agitiertheit, Asthma, Blutdruckanstieg, ALT-Anstieg. Nach abruptem Absetzen Blutdruck- und Herzfrequenzanstieg. Suizidale Gedanken und Aggression beachten (FI).",
  ia: "Substrat von CYP3A4: starke/moderate Hemmer (Ketoconazol, Clarithromycin, Ritonavir) erhöhen Spiegel – Dosis um 50 % senken; Induktoren (Carbamazepin, Rifampicin, Efavirenz) senken Spiegel, Wirkverlust. Valproat-Spiegel um ca. 40 % ↑ (K) – Valproatspiegel kontrollieren. Antihypertensiva und andere bradykardisierende Mittel: Hypotonie, Synkopen. Sedierende Mittel und Alkohol: additive Sedierung. QT-verlängernde Arzneimittel nicht kombinieren (K). Lisdexamfetamin: geringer Guanfacin-Anstieg, klinisch wohl irrelevant.",
  ktr: "Vor Beginn: RR, Herzfrequenz, kardiale Anamnese (Synkopen, Bradykardie, Herzinsuffizienz), EKG, Gewicht/BMI, weil Guanfacin RR und Puls senkt und Synkopen auslösen kann. Während Titration RR und Puls wöchentlich, im 1. Jahr alle 3 Monate, danach alle 6 Monate, nach Dosisänderung häufiger (P). EKG regelmäßig (K/P). BMI alle 3 Monate im 1. Jahr (FI). Sedierung in der Titrationsphase wöchentlich erfragen (FI).",
  ss: "K: Schwangerschaft und Stillzeit kontraindiziert. Embryotox-Bewertung nicht gefunden [?]. Benkert-Risikostufe [?].",
  mech: "Selektiver postsynaptischer α2A-Agonist im präfrontalen Kortex: senkt intrazellulär cAMP und schließt HCN-Kanäle, dadurch verbesserte noradrenerge Signalübertragung. Kein Psychostimulans, kein Suchtpotenzial. Wirkung innerhalb der ersten 3 Wochen.",
  auf: "Ein Medikament gegen ADHS, das kein Stimulans ist und nicht abhängig macht. Es kann anfangs müde machen und Blutdruck und Puls senken; es darf nicht plötzlich abgesetzt, sondern nur langsam reduziert werden.",
  cx: {
    schw: ["r", "K: kontraindiziert; kaum Daten"],
    still: ["r", "K: kontraindiziert"],
    alt: ["y", "Hypotonie, Sturz; keine Daten"],
    jug: ["g", "Zugelassen 6–17 J."],
    niere: ["y", "Ggf. Dosisanpassung (K)"],
    leber: ["y", "Ggf. Dosisanpassung (K)"],
    qtc: ["y", "Daten widersprüchlich; Kombi meiden"],
    epi: ["y", "Gelegentlich Krampfanfälle"],
    sucht: ["g", "Kein Suchtpotenzial"],
    fahr: ["y", "Sedierung, v. a. zu Beginn"]
  },
  tg: { s: ["3A4"], sens: ["3A4"], sd: 2, hy: 2, br: 1, qt: 1 },
  hw: "ca. 18 h (K: 13–34 h)",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · FI Guanfacin Neuraxpharm 09/2025"
});

E2D("donepezil", {
  n: "Donepezil",
  b: ["Aricept", "Aricept Evess", "Yasnal", "Generika"],
  k: "Acetylcholinesterasehemmer (AChE-I)",
  g: "Antidementiva",
  kern: [
    "Leichte bis mittelschwere Alzheimer-Demenz; wirksam auch bei schwerer AD (off-label)",
    "5 mg z. N., nach 4–6 Wochen 10 mg; möglichst hohe verträgliche Erhaltungsdosis",
    "Rote-Hand-Brief 12/2021: QTc-Verlängerung und Torsade de Pointes – EKG bei Risiko",
    "Bradykardie, AV-Block, Synkopen; nicht bei bradykarden HRS, Sick-Sinus, Asthma/COPD",
    "HWZ 70–80 h (vor OP bedenken); Schlafstörungen häufiger als bei anderen AChE-I"
  ],
  ind: "Leichte bis mittelschwere Demenz bei Alzheimer-Krankheit (K/P). S3-Leitlinie Demenzen 2023: AChE-I bei leichter bis mittelschwerer AD langfristig empfohlen (PZ 11/2023).",
  off: "Schwere Alzheimer-Demenz (in den USA zugelassen, K/P). Vaskuläre Demenz (moderate Wirksamkeit, K; S3 2023: hoch dosiertes Donepezil off-label, PZ 11/2023). Demenz mit Lewy-Körpern, Parkinson-Demenz, kognitive Störungen nach SHT, bei MS oder Down-Syndrom, Apathie bei Demenz (Augmentation), anticholinerges Delir (nur Fallbericht) – K.",
  ki: "P: keine Verordnung bei bradykarden Herzrhythmusstörungen, supraventrikulären Erregungsleitungsstörungen, Asthma bronchiale und anderen obstruktiven Lungenerkrankungen, Risiko für peptische Ulzera. FI-Gegenanzeige im engeren Sinn: Überempfindlichkeit gegen Donepezil/Piperidinderivate [?]. Vorsicht: Leberfunktionsstörung (Dosisanpassung), Herzinsuffizienz, QTc-Risiko (eigene oder familiäre QTc-Verlängerung, Elektrolytstörung, frischer Infarkt – RHB 2021).",
  dos: {
    e: "Start 5 mg/Tag als Einmalgabe zur Nacht, nach 4–6 Wochen (P: nach einem Monat) 10 mg/Tag. Einnahme unabhängig von Mahlzeiten (K). Bei Niereninsuffizienz in der Regel keine Anpassung (P). Wirkung nach 3 Monaten und danach regelmäßig prüfen.",
    a: "Zielgruppe; Dosierung wie Erwachsene. K Tab. 13.1: Risiko im Alter „gering“. Puls und EKG wegen Bradykardie/QTc, Sturzgefahr bei Synkopen.",
    j: "Keine Indikation."
  },
  nw: "Häufig: Übelkeit, Erbrechen, Diarrhö, Appetitlosigkeit (dosisabhängig v. a. in der Titration), Kopfschmerzen, Schlaflosigkeit, Müdigkeit, Schwindel, Halluzinationen, Erregung, Aggression, Synkopen, Muskelkrämpfe, Harninkontinenz. Gelegentlich: Bradykardie, Krampfanfälle, Magen-/Duodenalulzera, GI-Blutungen, CK-Anstieg. Selten: SA- und AV-Block, EPS, Hepatitis. QTc-Verlängerung und Torsade de Pointes (RHB 2021). GI-NW seltener als bei Galantamin und oralem Rivastigmin.",
  ia: "Abbau über CYP2D6, nachgeordnet CYP3A4 und UGT. CYP2D6-Hemmer (Bupropion, Fluoxetin, Paroxetin, Chinidin): Spiegel ca. 30 % ↑, mehr cholinerge NW. Keine Kombination mit Anticholinergika (Wirkungsaufhebung) oder Cholinomimetika; Succinylcholin-Wirkung verlängert. Bradykardisierende Mittel (β-Blocker): Bradykardie, Synkope. QT-verlängernde Arzneimittel: Vorsicht, EKG (RHB 2021). Antipsychotika: EPS-Verstärkung möglich. Vorsicht mit PPI (K/P).",
  ktr: "EKG vor Beginn, nach 4, 8 und 12 Wochen, dann vierteljährlich (K 6.9), weil AChE-I Bradykardie, AV-Block und QTc-Verlängerung verursachen können; bei QT-Risikofaktoren laut RHB 2021 EKG-Überwachung erwägen. Puls regelmäßig. Leberwerte und Retentionswerte nur bei Organfunktionsstörung (K). Nutzen und Verträglichkeit nach 3 Monaten und danach regelmäßig; Mindestdauer 12–24 Wochen (K). Plasmakonzentration 50–75 ng/ml (K/P); bei fehlender Wirkung prüfen, ob > 50 ng/ml (K).",
  ss: "Nicht relevant (P).",
  mech: "Reversible, selektive Hemmung der Acetylcholinesterase; erhöht Acetylcholin im synaptischen Spalt und kompensiert so teilweise den cholinergen Verlust bei Alzheimer. Periphere cholinerge Effekte (Vagotonus, GI) erklären Bradykardie und Übelkeit.",
  auf: "Ein Medikament, das bei Alzheimer-Demenz Gedächtnis und Alltagsfähigkeiten für eine Zeit stabilisieren kann; es heilt die Erkrankung nicht. Anfangs sind Übelkeit, Durchfall oder lebhafte Träume möglich. Bei Schwindel, Ohnmacht oder sehr langsamem Puls muss ärztlich kontrolliert werden.",
  cx: {
    alt: ["g", "Zielgruppe; Risiko im Alter gering (K)"],
    niere: ["g", "Meist keine Anpassung (P)"],
    leber: ["y", "Dosisanpassung nötig (P)"],
    qtc: ["y", "RHB 2021: QTc/TdP; EKG bei Risiko"],
    epi: ["y", "Gelegentlich Krampfanfälle"],
    delir: ["y", "Selten Halluzinationen/Erregung"],
    pd: ["y", "Off-label PDD/DLK; selten EPS"],
    atem: ["y", "Asthma/COPD: nicht verordnen (P)"]
  },
  tg: { s: ["2D6", "3A4"], br: 2, qt: 1, kr: 1 },
  hw: "70–80 h",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · Rote-Hand-Brief Donepezil 13.12.2021 (AkdÄ) · S3 Demenzen 2023 (PZ-Bericht)"
});

E2D("rivastigmin", {
  n: "Rivastigmin",
  b: ["Exelon Kapseln/Lösung", "Exelon transdermales Pflaster", "Generika"],
  k: "Acetyl- und Butyrylcholinesterasehemmer",
  g: "Antidementiva",
  kern: [
    "Leichte–mittelschwere Alzheimer-Demenz; Parkinson-Demenz (nur oral zugelassen, K)",
    "Pflaster 4,6 → nach 4 Wochen 9,5 mg/24 h; 13,3 mg nur bei Verschlechterung nach 6 Mon.",
    "Oral 2×1,5 mg zu den Mahlzeiten, alle 2 Wochen +3 mg/Tag bis 6–12 mg",
    "Pause > einige Tage: Neubeginn mit Startdosis (sonst massives Erbrechen)",
    "Kein CYP-Abbau, kaum Interaktionen; Bradykardie und Synkopen wie alle AChE-I"
  ],
  ind: "Leichte bis mittelschwere Alzheimer-Demenz (oral und transdermal). Leichte bis mittelschwere Demenz bei idiopathischer Parkinson-Krankheit – laut K nur die orale Form zugelassen (P ohne diese Einschränkung; Quellen uneinig). Dreher: wegen dieser Zulassung Mittel der 1. Wahl bei Parkinson-Demenz. S3 Demenzen 2023: AChE-I bei leichter bis mittelschwerer AD langfristig (PZ 11/2023).",
  off: "Schwere AD, vaskuläre Demenz (moderate Effekte), Demenz mit Lewy-Körpern, Verhaltensstörungen bei bvFTD; Hinweise bei kognitiven Störungen bei Schizophrenie, paranoider Psychose bei Parkinson, SHT, MS (K).",
  ki: "Relative KI (K): schwere Leber- und Niereninsuffizienz. Besondere Vorsicht bei bradykarden Herzrhythmusstörungen, Sick-Sinus-Syndrom und supraventrikulären Erregungsleitungsstörungen, Asthma bronchiale/COPD, Ulkusrisiko, höhergradiger Herzinsuffizienz, QTc-Risiko. FI-Gegenanzeigen (Überempfindlichkeit, Carbamat-Derivate, frühere schwere Pflasterreaktion) [?].",
  dos: {
    e: "Oral: 2×1,5 mg zu den Mahlzeiten, alle 2 Wochen um 3 mg/Tag steigern bis 6–12 mg/Tag (2 Gaben). Pflaster: 4,6 mg/24 h, nach 4 Wochen 9,5 mg/24 h (Exposition ≈ 12 mg oral); 13,3 mg/24 h bei symptomatischer Verschlechterung unter 9,5 mg über 6 Monate (K) – Dreher: 13,3 mg schon ab 2. Monat (Quellen uneinig; FI-konform ist K). Umstellung oral → Pflaster: 3–6 mg → 4,6; 9 mg → 4,6 oder 9,5; 12 mg → 9,5 mg/24 h. Pflaster 1× täglich auf oberen/unteren Rücken, Oberarm oder Brust, Stelle wechseln, altes Pflaster vorher entfernen. Unterbrechung > einige Tage (Dreher: > 3 Tage): mit Startdosis neu titrieren.",
    a: "Zielgruppe; Dosierung wie Erwachsene. K Tab. 13.1: Risiko im Alter „gering“. Bei mäßiger Niereninsuffizienz Clearance ca. 50 % ↓, ggf. Dosisanpassung (K).",
    j: "Keine Indikation."
  },
  nw: "Sehr häufig: Übelkeit, Erbrechen, Diarrhö, Appetitlosigkeit, Schwindel, Harnwegsinfekte, Harninkontinenz (oral deutlich häufiger als Pflaster). Häufig: Müdigkeit, Kopfschmerzen, Agitiertheit, Bauchschmerzen, Gewichtsverlust, Schwitzen, Tremor; Pflaster: Hautreaktionen. Gelegentlich: Schlaflosigkeit, Depression, Angst, delirante Syndrome, Stürze, Synkopen, Bradykardien. Selten: Krampfanfälle, Angina pectoris, Ulzera; sehr selten Herzrhythmusstörungen, EPS, GI-Blutungen. Kein Augenkontakt nach Pflasterhandhabung.",
  ia: "Nichthepatischer Abbau über Esterasen ohne CYP-Beteiligung, keine pharmakokinetischen Interaktionen bekannt (K/P). Pharmakodynamisch: keine Kombination mit Anticholinergika oder Cholinomimetika; Succinylcholin verlängert (Anästhesie informieren); bradykardisierende Mittel (β-Blocker, Digitoxin): Bradykardie. QT-verlängernde Arzneimittel: Puls/EKG. Vorsicht mit PPI (K/P).",
  ktr: "EKG vor Beginn, nach 4, 8 und 12 Wochen, dann vierteljährlich (K 6.9), weil Bradykardie, Synkopen und selten Rhythmusstörungen auftreten. Gewicht (Gewichtsverlust häufig). Pflasterstelle auf Hautreaktion prüfen. Retentionswerte bei Nierenfunktionsstörung. Nutzen nach 3 Monaten und regelmäßig; Mindestdauer 12–24 Wochen. Plasmakonzentration 5–13 ng/ml (Pflaster, Talspiegel) bzw. 8–20 ng/ml 1–2 h nach oraler Gabe (K/P).",
  ss: "Nicht relevant (Indikationsalter); keine Angaben in den gelesenen Quellen [?].",
  mech: "Pseudoirreversible Hemmung der Acetylcholinesterase und zusätzlich der Butyrylcholinesterase (klinische Bedeutung ungesichert). Trotz kurzer Plasma-HWZ hält die Enzymhemmung ca. 10 h an. Transdermale Gabe glättet Spitzenspiegel und senkt GI-NW.",
  auf: "Ein Medikament gegen Alzheimer- und Parkinson-Demenz, das Gedächtnis und Alltagsfähigkeiten für eine Zeit stabilisieren kann; als Tablette oder als Hautpflaster, das täglich gewechselt wird. Es darf immer nur ein Pflaster auf der Haut sein. Bei Erbrechen, Ohnmacht oder sehr langsamem Puls muss ärztlich kontrolliert werden.",
  cx: {
    alt: ["g", "Zielgruppe; Risiko im Alter gering (K)"],
    niere: ["y", "Mäßig: Clearance ↓ 50 %; schwer meiden"],
    leber: ["g", "Kaum hepatischer Abbau; schwer: Vorsicht"],
    qtc: ["y", "Fallberichte QTc; EKG-Kontrollen"],
    epi: ["y", "Selten Krampfanfälle"],
    delir: ["y", "Gelegentlich delirante Syndrome"],
    pd: ["g", "Zugelassen bei Parkinson-Demenz (oral)"],
    atem: ["y", "Asthma/COPD: Vorsicht"]
  },
  tg: { br: 2, qt: 1, kr: 1 },
  hw: "1 bzw. 3 h (K); Enzymhemmung ca. 10 h",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · Dreher 2021 · S3 Demenzen 2023 (PZ-Bericht)"
});

E2D("galantamin", {
  n: "Galantamin",
  b: ["Reminyl retard", "Reminyl Lösung", "Generika"],
  k: "AChE-I mit nikotinerger Modulation",
  g: "Antidementiva",
  kern: [
    "Leichte bis mittelschwere Alzheimer-Demenz",
    "8 mg retard morgens zum Essen, alle 4 Wochen +8 mg auf 16–24 mg",
    "Mittelschwere Leber-/Niereninsuffizienz max. 16 mg; schwere: nicht verordnen",
    "QTc-Verlängerung häufiger beschrieben: QT-verlängernde Kombinationen meiden",
    "Hautreaktion → sofort absetzen (SJS, AGEP-Risiko)"
  ],
  ind: "Leichte bis mittelschwere Alzheimer-Krankheit (K/P). Diagnose durch in der Demenzbehandlung erfahrenen Arzt absichern. S3 Demenzen 2023: AChE-I bei leichter bis mittelschwerer AD langfristig (PZ 11/2023).",
  off: "Schwere AD (wahrscheinlich wirksam), vaskuläre Demenz (moderate Effekte; S3 2023 off-label genannt), Verhaltensstörungen bei Demenz (K/P/PZ).",
  ki: "P: keine Verordnung bei schwerer Leber- und Niereninsuffizienz. Vorsicht bei Ulkusrisiko, bradykarden Rhythmusstörungen, Sick-Sinus-Syndrom, supraventrikulären Erregungsleitungsstörungen, Asthma/COPD, QTc-Risiko. Bei ersten Hautreaktionen absetzen.",
  dos: {
    e: "Retardkapsel: Start 8 mg/Tag morgens zum Essen, alle 4 Wochen um 8 mg steigern auf Erhaltungsdosis 16 oder 24 mg/Tag. Lösung: Tagesdosis auf morgens und abends verteilen. Mittelschwere Leber- oder Niereninsuffizienz: max. 16 mg/Tag. Nach Unterbrechung > einige Tage neu titrieren (K).",
    a: "Zielgruppe; Dosierung wie Erwachsene. K Tab. 13.1: Risiko im Alter „mäßig“, erhöhte Häufigkeit von QTc-Verlängerung.",
    j: "Keine Indikation."
  },
  nw: "Sehr häufig: Übelkeit, Erbrechen, Appetitminderung. Häufig: Kopfschmerzen, Schwindel, Schlaflosigkeit, Somnolenz, Verwirrtheit, Depression, Stürze, Synkopen, Tremor, Muskelkrämpfe, Gewichtsabnahme, Diarrhö. Gelegentlich: Bradykardie, Vorhofarrhythmien, Palpitationen, QTc-Verlängerung. Selten: Krampfanfälle, Halluzinationen, AV-Block, Hypotonie, GI-Blutung; schwere Hautreaktionen (SJS, AGEP). GI-NW häufiger als unter Donepezil.",
  ia: "Abbau über CYP2D6 und CYP3A4. CYP2D6-Hemmer (Fluoxetin, Paroxetin, Chinidin): Spiegel ca. 40 % ↑. Keine Kombination mit Anticholinergika/Cholinomimetika; Succinylcholin verlängert. Herzfrequenzsenkende Mittel (β-Blocker, Digoxin, bestimmte Calciumantagonisten, Amiodaron): Vorsicht. QT-verlängernde Arzneimittel meiden (P). Antipsychotika: EPS-Verstärkung möglich. Vorsicht mit PPI.",
  ktr: "EKG vor Beginn, nach 4, 8 und 12 Wochen, dann vierteljährlich (K 6.9), weil QTc-Verlängerung, Bradykardie und AV-Block beschrieben sind. Puls regelmäßig. Haut beobachten. Leber- und Retentionswerte bei Organfunktionsstörung (Dosisgrenze 16 mg). Nutzen nach 3 Monaten und regelmäßig. Plasmakonzentration 30–60 ng/ml (P).",
  ss: "Nicht relevant (P).",
  mech: "Reversible, selektive AChE-Hemmung; zusätzlich allosterische Modulation präsynaptischer nikotinischer Acetylcholinrezeptoren (klinischer Vorteil nicht belegt).",
  auf: "Ein Medikament, das bei Alzheimer-Demenz Gedächtnis und Alltagsfähigkeiten für eine Zeit stabilisieren kann; es wird morgens zum Frühstück eingenommen. Übelkeit ist zu Beginn häufig. Bei Hautausschlag, Ohnmacht oder sehr langsamem Puls muss ärztlich kontrolliert werden.",
  cx: {
    alt: ["y", "Risiko im Alter mäßig (K)"],
    niere: ["y", "Mittelschwer max. 16 mg; schwer meiden"],
    leber: ["y", "Mittelschwer max. 16 mg; schwer meiden"],
    qtc: ["r", "QTc-Verlängerung; QT-Kombi meiden"],
    epi: ["y", "Selten Krampfanfälle"],
    delir: ["y", "Verwirrtheit häufig"],
    atem: ["y", "Asthma/COPD: Vorsicht"]
  },
  tg: { s: ["2D6", "3A4"], br: 2, qt: 2, kr: 1 },
  hw: "7–8 h",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · S3 Demenzen 2023 (PZ-Bericht)"
});

E2D("memantin", {
  n: "Memantin",
  b: ["Axura", "Ebixa", "Generika"],
  k: "NMDA-Rezeptorantagonist",
  g: "Antidementiva",
  kern: [
    "Mittelschwere bis schwere Alzheimer-Demenz; nicht zugelassen bei leichter AD",
    "5 mg/Woche steigern bis 20 mg 1× täglich (Starterpackung)",
    "Fast nur renal eliminiert: mittelschwere Niereninsuffizienz 10 mg/Tag",
    "Alkalischer Urin (Antazida, Bikarbonat, Ernährungsumstellung) → Spiegel ↑↑",
    "Nicht mit Amantadin, Ketamin, Dextromethorphan (NMDA-additiv)"
  ],
  ind: "Moderate bis schwere Demenz bei Alzheimer-Krankheit (K/P/Dr). Therapieversuch über 24 Wochen, Weiterverordnung nach dokumentiertem Erfolg (K/P). S3 Demenzen 2023: bei mittelschwerer bis schwerer, nicht bei leichter AD (PZ 11/2023).",
  off: "Vaskuläre Demenz (moderate Wirksamkeit, K; S3 2023 off-label genannt). Add-on zu AChE-I: K/P 2021 „sinnvoll“ (additive Effekte angenommen) – S3 2023 laut PZ-Bericht Kombination nicht empfohlen [Originalwortlaut ?]; Quellen uneinig. Verhaltensstörungen bei Demenz (P).",
  ki: "Überempfindlichkeit [?]. Schwere Niereninsuffizienz: K keine Anwendung, P Dosisreduktion auf 10 mg (Quellen uneinig; FI-Stand prüfen [?]). Vorsicht bei Epilepsie/Anfallsanamnese, Zuständen mit alkalischem Urin, schwerer Herzinsuffizienz oder frischem Infarkt (keine Daten).",
  dos: {
    e: "Start 5 mg morgens für 7 Tage, wöchentlich um 5 mg steigern bis 20 mg/Tag als Einmalgabe; bei schlechter Verträglichkeit langsamer (Dr). Lösung: 1 Pumphub = 5 mg, max. 4 Hübe; auf Löffel oder in Wasser. Mittelschwere Niereninsuffizienz: 10 mg/Tag (K). Leberinsuffizienz: keine Anpassung (K).",
    a: "Zielgruppe; Dosierung wie Erwachsene, Nierenfunktion beachten. K Tab. 13.1: Risiko im Alter „mäßig“.",
    j: "Keine Indikation."
  },
  nw: "Häufig: Kopfschmerzen, Schläfrigkeit, Schwindel, Gleichgewichtsstörungen, Blutdruckanstieg, Obstipation, Dyspnoe, Leberwerterhöhung. Gelegentlich: Müdigkeit, Verwirrtheit, Halluzinationen, Erbrechen, Venenthrombose/Thromboembolie, Pilzinfektionen. Sehr selten: Krampfanfälle, Pankreatitis, psychotische Reaktionen. Insgesamt besser verträglich als AChE-I.",
  ia: "Kein CYP-Abbau. NMDA-additiv mit Amantadin, Dextromethorphan, Ketamin – meiden (P; für Esketamin gilt der Mechanismus analog [?]). Dopaminerge Mittel und Anticholinergika: Wirkung möglicherweise verstärkt; Antipsychotika: abgeschwächt; Baclofen, Dantrolen: Vorsicht. Gleicher renaler Kationentransport wie Cimetidin, Ranitidin, Procainamid, HCT: Spiegel ↑ möglich. Urinalkalisierung (Antazida, Natriumbikarbonat, Carboanhydrasehemmer): Elimination 7–9-fach ↓. Orale Antikoagulanzien: INR ↑ möglich. In vitro CYP2B6-Hemmung: Bupropion, Methadon, Sertralin ggf. ↑ (P).",
  ktr: "Kreatinin/eGFR vor Beginn und regelmäßig bei Nierenfunktionsstörung, weil Memantin fast ausschließlich renal eliminiert wird (K). Routine-EKG oder -Labor nicht erforderlich (K 6.9). INR bei oralen Antikoagulanzien. Anfallsanamnese. Nutzen nach 24 Wochen dokumentieren. Plasmakonzentration 90–150 ng/ml (K/P).",
  ss: "Nicht relevant (Indikationsalter); keine Angaben in den gelesenen Quellen [?].",
  mech: "Nichtkompetitiver, spannungsabhängiger NMDA-Rezeptorantagonist mittlerer Affinität: dämpft pathologisch tonische Glutamat-Aktivierung (Exzitotoxizität), lässt physiologische Signale weitgehend durch [?].",
  auf: "Ein Medikament gegen mittelschwere bis schwere Alzheimer-Demenz, das Gedächtnis, Alltagsfähigkeiten und Unruhe für eine Zeit günstig beeinflussen kann. Anfangs sind Schwindel, Müdigkeit oder Kopfschmerzen möglich. Weil es über die Niere ausgeschieden wird, werden die Nierenwerte kontrolliert.",
  cx: {
    alt: ["y", "Zielgruppe; Niere beachten"],
    niere: ["r", "Mittelschwer 10 mg; schwer meiden (K)"],
    leber: ["g", "Keine Anpassung (K)"],
    qtc: ["g", "Kein Routine-EKG nötig (K)"],
    epi: ["y", "Sehr selten Krampfanfälle"],
    delir: ["y", "Verwirrtheit, Halluzinationen gel."],
    fahr: ["y", "Schwindel, Schläfrigkeit"]
  },
  tg: { i: { "2B6": "schwach" }, sd: 1, kr: 1 },
  hw: "60–100 h",
  src: "Benkert Kompendium 2021 · Pocket Guide 2021 · Dreher 2021 · S3 Demenzen 2023 (PZ-Bericht)"
});

E2D("prazosin", {
  n: "Prazosin",
  b: ["In DE nicht im Handel (früher Minipress, Adversuten)"],
  k: "α1-Adrenozeptor-Antagonist",
  g: "Sonstige",
  kern: [
    "In DE nicht mehr im Handel (K 2021); Bezug nur per Einzelimport [?]",
    "PTBS-Albträume off-label; große RCT 2018 negativ – K: nicht mehr empfohlen",
    "International weiter Option für Albträume (NHS Highland 2024, VA/DoD 2023)",
    "Start 1 mg z. N., langsam steigern, Ziel 6–10 mg; First-dose-Synkope beachten",
    "In DE erhältliche Alternative: Doxazosin 2–8 mg (K: Einzelfallversuch)"
  ],
  ind: "Früher in DE zugelassen: arterielle Hypertonie (Gebrauchsinformation Adversuten); weitere frühere Indikationen [?]. Aktuell kein Präparat in DE im Handel (K 2021; neuere Bestätigung nicht gefunden [?]).",
  off: "Trauma-assoziierte Albträume und Schlafstörungen bei PTBS: frühere Studien positiv, große RCT 2018 negativ, daher von K 2021 nicht mehr empfohlen. NHS Highland (Review 06/2024) führt Prazosin unter Verweis auf NICE NG116 und VA/DoD 2023 weiter als Option für Albträume; keine Wirksamkeit auf globale PTBS-Symptome. Evidenz insgesamt widersprüchlich.",
  ki: "Überempfindlichkeit gegen Prazosin oder Chinazoline; Herzinsuffizienz infolge mechanischer Funktionsbehinderung, Rechtsherzinsuffizienz, Linksherzinsuffizienz mit niedrigem Füllungsdruck (Gebrauchsinformation Adversuten; NHS Highland).",
  dos: {
    e: "Albträume (off-label, NHS Highland 2024): Start 1 mg zur Nacht, nach 2–3 Tagen 2 mg, dann um 1 mg alle 2–7 Tage; Ziel 6–10 mg/Tag, Berichte bis ≥ 16 mg; niedrigste wirksame Dosis. Hypertonie (Gebrauchsinformation Adversuten): Start 0,5 mg im Liegen, Erhaltung 2–5 mg in 2–3 Einzeldosen, max. 20 mg/Tag.",
    a: "Keine spezifischen Angaben gefunden [?]; Orthostase und Sturzgefahr beachten.",
    j: "Keine Angaben in den gelesenen Quellen [?]."
  },
  nw: "Schwindel (ca. 10 %), Kopfschmerzen (8 %), Benommenheit (8 %), Müdigkeit und Schwäche (je 7 %), Palpitationen, Übelkeit (je 5 %) (NHS Highland). Orthostatische Hypotonie, First-dose-Synkope. Toleranzentwicklung bei Hypertonie beschrieben (DocCheck).",
  ia: "Additive Blutdrucksenkung mit PDE-5-Hemmern, β-Blockern, Calciumantagonisten und anderen Antihypertensiva (NHS Highland). Mit α1-blockierenden Psychopharmaka (z. B. Quetiapin, TZA, Clozapin) ist additive Orthostase pharmakologisch zu erwarten [?].",
  ktr: "RR im Liegen und Stehen vor Beginn und während der Titration, weil orthostatische Hypotonie und Synkope die Hauptrisiken sind (NHS Highland). Albtraumhäufigkeit dokumentieren; nach Stabilisierung und wirksamer Psychotherapie Absetzversuch erwägen. Fahreignung bei Orthostase besprechen.",
  ss: "Keine Angaben in den gelesenen Quellen [?].",
  mech: "Selektive Blockade postsynaptischer α1-Adrenozeptoren; peripher Vasodilatation und Blutdrucksenkung. Rationale bei PTBS: Dämpfung der zentralen noradrenergen Übererregung, die mit Albträumen in Verbindung gebracht wird [?].",
  auf: "Ein ursprünglich blutdrucksenkendes Medikament, das bei manchen Menschen mit Traumafolgestörung nächtliche Albträume vermindert; die Wirkung ist in Studien nicht einheitlich belegt. Besonders nach der ersten Einnahme kann beim Aufstehen Schwindel oder Ohnmacht auftreten, deshalb wird abends im Liegen begonnen.",
  cx: {
    alt: ["y", "Orthostase, Sturz"],
    fahr: ["y", "Orthostase, v. a. zu Beginn"]
  },
  tg: { hy: 3, sd: 1 },
  src: "Benkert Kompendium 2021 · NHS Highland Prazosin-Guideline 2024 · Gebrauchsinformation Adversuten · DocCheck Flexikon"
});

/* ---- algo_1 ---- */
// Etappe 2 · Gruppe algo_1 · Diagnose-Algorithmen (Format B)
// Quellen: NVL Unipolare Depression 3.2 (2023), S3 Angst 2021, S3 Zwang 2022, S3 PTBS 2019, S3 Demenzen 2023;
// Benkert Kompendium 2021 (K), Pocket Guide 2021 (P), Dreher 2021 (Dr). Belege: algo_1_belege.md
// ev-Skala: LL-Grad ⇑⇑/A = 3, ⇑/B = 2, ⇔/0 = 1, KKP/Konsens/kein LL-Grad = 0.

E2S({
  id: "dep-unipolar",
  a: "dep",
  t: "Unipolare Depression – Ersttherapie und Stufenplan",
  syn: ["depression", "depressive episode", "major depression", "mdd", "f32", "f33", "rezidivierende depression", "antidepressivum", "antidepressiva", "ad", "niedergeschlagen", "traurig", "antriebslos", "erhaltungstherapie", "rezidivprophylaxe", "ssri", "stufenplan depression", "unipolar"],
  kern: [
    "Leicht: niedrigintensive Angebote/aktives Monitoring; AD nicht als Ersttherapie",
    "Mittelgradig: Psychotherapie oder AD gleichwertig; schwer: Kombination [?]",
    "AD nach Profil wählen (NW, Interaktionen, Präferenz); niedrig starten, zügig auf Standarddosis",
    "Ab Standarddosis 3–4 Wochen abwarten, dann standardisiert bewerten; keine Besserung → dep-tr",
    "Erhaltung 6–12 Monate nach Remission in Akutdosis; ≥ 2–3 Episoden: ≥ 2 Jahre Prophylaxe"
  ],
  pre: [
    "Suizidalität explizit erfragen, auch in Aufdosierung/Latenz engmaschig (NVL 4-9), weil Risiko früh am höchsten ist",
    "Bipolarität ausschließen (frühere Hypomanie/Manie, Familienanamnese), weil AD Manien auslösen können; 10–20 % Diagnosewechsel zu bipolar (K)",
    "Psychotische Merkmale (Schuld-, Verarmungs-, hypochondrischer Wahn)? → dep-psychot",
    "Somatik und depressiogene Medikamente prüfen (NVL 7-2); Eingangsuntersuchungen nach NVL Tab. 28–30 (Inhalt nicht gelesen [?]), z. B. TSH [?]",
    "EKG vor TZA, Citalopram/Escitalopram oder bei kardialer Vorschädigung, weil QTc dosisabhängig steigt (K)",
    "Natrium bei Älteren unter SSRI/SNRI, weil SIADH v. a. im Alter auftritt (K)",
    "Sucht, Angst, ADHS, PTBS als Komorbidität; Schwangerschaft/Stillzeit"
  ],
  steps: [
    { t: "Stufe 1 · Schweregrad", x: "Leicht: niedrigintensive Interventionen, begleitete Online-Programme (NVL 5-1, 5-2 ⇑⇑); AD nicht zuerst (5-4 ⇑), nur nach Nutzen-Risiko-Abwägung (5-5). Mittelgradig: Psychotherapie oder AD gleichwertig (5-8 ⇑⇑). Schwer: Kombination Psychotherapie + AD (NVL 5.3 nicht gelesen [?])." },
    { t: "Stufe 2 · Start", x: "AD nach Sicherheits-/Interaktionsprofil, Präferenz und Erfahrung wählen (4-4). Mit Anfangsdosis beginnen (4-8 ⇑⇑), so schnell wie verträglich auf Standarddosis (4-7 ⇑). Frühe Besserung ≥ 20 % in 2 Wochen sagt späteres Ansprechen voraus; ihr Fehlen hat hohen negativen Vorhersagewert (K)." },
    { t: "Stufe 3 · Bewertung nach 3–4 Wochen", x: "Ab Standarddosis mindestens 3–4 Wochen abwarten, dann mit validiertem Instrument bewerten (4-10 ⇑⇑); Ältere eher 6 Wochen (K nach S3 2015). Besserung: bis zur Remission fortführen (4-11). Kein/geringes Ansprechen: Ursachen klären, TDM (4-12, 7-2 bis 7-4) → Karte dep-tr." },
    { t: "Stufe 4 · Erhaltung (6–12 Monate)", x: "AD 6–12 Monate über die Remission hinaus in unveränderter Dosis (6-1 ⇑⇑), Psychotherapie angemessen weiterführen (6-4). Danach ausschleichen, wenn keine Langzeitindikation (6-2 ⇑⇑)." },
    { t: "Stufe 5 · Rezidivprophylaxe (≥ 2 Jahre)", x: "Bei 2–3 oder mehr Episoden mit bedeutsamen Funktionseinschränkungen in den letzten 5 Jahren mindestens 2 Jahre in Akutdosis (6-3 ⇑). Längerfristige Psychotherapie bei erhöhtem Rezidivrisiko (6-5 ⇑⇑). Lithium als Alternative (Spiegel 0,5–0,8 mmol/l), senkt Suizidrisiko, Routine 2. Wahl wegen Aufwand (K). Erfolg alle 2–3 Monate prüfen (K)." }
  ],
  opts: [
    { t: "Niedrigintensive Interventionen, begleitete Internet-/App-Programme (DiGA), aktives Monitoring", r: "nm", why: "Leichte Episode: Ersttherapie (NVL 5-1, 5-2 ⇑⇑).", ev: 3 },
    { t: "Psychotherapie (KVT, IPT, psychodynamisch u. a.)", r: "nm", why: "Mittelgradig gleichwertig zu AD (5-8 ⇑⇑); bei Rezidivrisiko längerfristig (6-5 ⇑⇑).", ev: 3 },
    { d: "sertralin", r: "1", dos: "50 mg, +50 mg/Woche, max. 200 mg", why: "SSRI; Rezidivprophylaxe zugelassen, kardial gut untersucht, Schwangerschaft Mittel der Wahl (K, Embryotox). Keine LL-Rangfolge der AD (4-4).", ev: 3 },
    { d: "escitalopram", r: "1", dos: "10 mg, max. 20 mg; ≥ 65 J. max. 10 mg", why: "SSRI, interaktionsarm; QTc dosisabhängig (K).", ev: 3 },
    { d: "citalopram", r: "a", dos: "20 mg, max. 40 mg; ≥ 65 J. max. 20 mg", why: "SSRI; QTc-Grenzen beachten (Rote-Hand-Brief 2011).", ev: 3 },
    { d: "venlafaxin", r: "a", dos: "75 mg, max. 375 mg (stationär ab 150 mg)", why: "SNRI; nach SSRI-Versagen bei schwerer Episode günstiger als zweiter SSRI (K); RR, Absetzeffekte.", ev: 3 },
    { d: "duloxetin", r: "a", dos: "60 mg, max. 120 mg", why: "SNRI; bei komorbiden Schmerzen; KI Leberfunktionsstörung (K/P).", ev: 3 },
    { d: "mirtazapin", r: "a", dos: "15 mg z. N., max. 45 mg", why: "Bei Schlafstörung, Appetitmangel; Gewichtszunahme, Sedierung.", ev: 3 },
    { d: "bupropion", r: "a", dos: "150 mg morgens, max. 300 mg", why: "Kein Gewicht, wenig Sexual-NW; KI Anfälle, Essstörung (K/P).", ev: 3 },
    { d: "agomelatin", r: "a", dos: "25 mg abends, ggf. 50 mg nach 2 Wochen", why: "Kaum Sexual-NW, kein Gewicht; Transaminasen-Kontrollen Pflicht (FI).", ev: 3 },
    { d: "johanniskraut", r: "a", dos: "zugelassenes Präparat [?]", why: "Leicht/mittelgradig nur als zugelassenes Arzneimittel (NVL 5-6, 5-9 ⇔); starke CYP3A4-Induktion, Interaktionen aufklären.", ev: 1 },
    { d: "lithium", r: "a", dos: "Spiegel 0,5–0,8 mmol/l", why: "Rezidivprophylaxe zugelassen, AD ebenbürtig, suizidpräventiv; Routine 2. Wahl (K).", ev: 0 }
  ],
  avoid: [
    { t: "AD als Ersttherapie bei leichter Episode", why: "Geringer Nutzen; erst niedrigintensive Angebote (NVL 5-4 ⇑)." },
    { t: "Benzodiazepine/Z-Substanzen", why: "Leicht: nicht (5-7 ⇑⇑); mittelgradig nur ausnahmsweise 2–4 Wochen bei schwerer Schlafstörung (5-10 ⇑)." },
    { t: "Zu frühes Wechseln oder Absetzen", why: "Vor 3–4 Wochen Standarddosis nicht bewertbar (4-10); abruptes Absetzen → Absetzsyndrom, Rückfall." },
    { d: "paroxetin", why: "Schwangerschaft (Herzfehler-Signal) und starkes Absetzsyndrom; ungünstigere Nutzen-Risiko-Relation (P)." }
  ],
  lern: "Die NVL 2022 stuft nach Schweregrad: Je leichter die Episode, desto kleiner der Abstand zwischen AD und Placebo [?], deshalb zuerst niedrigintensive Angebote. Eine feste Rangfolge der AD gibt es nicht; die Wahl folgt dem Nebenwirkungs- und Interaktionsprofil. Wirkung setzt graduell ein: Fehlende Besserung in den ersten 2 Wochen sagt Nonresponse gut voraus, ein Wechsel ist aber erst nach 3–4 Wochen Standarddosis sinnvoll bewertbar. Rückfälle sind nach frühem Absetzen häufig [?], daher Erhaltungstherapie in voller Dosis. Schlafstörung bei Depression: Karte ins-depression.",
  src: "NVL Unipolare Depression 3. Aufl. (2022), Version 3.2 (2023) Kap. 4–7 · Benkert Kompendium 2021 · Pocket Guide 2021 · FI",
  lg: "NVL Unipolare Depression, 3. Aufl., Version 3.2, 2023 (Kap. 5.3 nicht gelesen)"
});

E2S({
  id: "dep-tr",
  a: "dep",
  t: "Therapieresistente Depression",
  syn: ["therapieresistenz", "therapieresistente depression", "trd", "nonresponse", "non-response", "keine besserung", "augmentation", "lithiumaugmentation", "lithium augmentation", "quetiapin augmentation", "esketamin", "spravato", "ekt", "elektrokonvulsion", "elektrokrampftherapie", "pseudoresistenz", "kombination antidepressiva"],
  kern: [
    "Pseudoresistenz zuerst: Diagnose, Adhärenz, Spiegel (TDM), Komorbidität, Medikamente",
    "SSRI im Zielspiegel nicht weiter erhöhen; Psychotherapie ergänzen (NVL 7-5, 7-14)",
    "Augmentation: Lithium 0,4–0,8 mmol/l oder Quetiapin retard 150–300 mg; Aripiprazol off-label",
    "Alternativ SSRI/SNRI + Mirtazapin; Wechsel auf anderen Mechanismus einmal sinnvoll",
    "Nach ≥ 2 erfolglosen AD: Esketamin, EKT, ggf. Tranylcypromin; rTMS als Option"
  ],
  pre: [
    "Diagnose überprüfen: bipolar, psychotische Merkmale, Persönlichkeitsstörung, Sucht, Demenz (NVL 7-2)",
    "Adhärenz offen erfragen, Packungszählung; Spiegel (TDM) bei AD mit etabliertem Bereich (NVL 7-3, 7-4), weil Unterdosierung und Schnellmetabolisierer häufige Ursache sind",
    "Interaktionen/Induktoren (Rauchen, Carbamazepin, Johanniskraut) prüfen, weil sie den Spiegel senken",
    "Somatik: TSH, Anämie, Schlafapnoe, depressiogene Medikation (Kortikoide, Betablocker u. a.) [?]",
    "Suizidalität neu bewerten; bei hoher Gefahr EKT früh erwägen",
    "Vor Lithium: eGFR, TSH, Kalzium, EKG (K/P); vor Esketamin: RR, Aneurysma, kardiovaskuläre Ereignisse (FI)"
  ],
  steps: [
    { t: "Stufe 1 · Woche 4: Ursachen", x: "4 Wochen nach Standarddosis ohne ausreichende Besserung: Fehldiagnose, Adhärenz, Dosis/Serumspiegel, Komorbidität, depressiogene Medikation prüfen (NVL 7-2 ⇑⇑, 7-3 ⇑). Spiegel außerhalb Bereich: Adhärenz, Interaktionen, Dosis anpassen (7-4 ⇑⇑). Psychotherapie zusätzlich anbieten (7-5 ⇑⇑)." },
    { t: "Stufe 2 · Dosis", x: "Dosiserhöhung nur bei subtherapeutischem Spiegel. SSRI im therapeutischen Spiegel nicht erhöhen (7-14 ⇑⇑); SNRI/TZA im Spiegel und MAOH in Standarddosis ebenfalls nicht (7-15 ⇑). K: Erhöhung bei SSRI im unteren Dosisbereich kann sinnvoll sein (Quellen teils uneinig)." },
    { t: "Stufe 3 · Augmentation", x: "Lithium (7-7 ⇑): 0,4–0,8 mmol/l, Ältere oft 0,4 (K/P); Wirkung nach 2–4 Wochen wirksamem Spiegel beurteilen, sonst absetzen (7-8 ⇑); bei Ansprechen mindestens 6 Monate (7-9 ⇑), K: ≥ 1 Jahr. Oder Antipsychotikum niedrig (7-6 ⇑): Quetiapin retard 150–300 mg (zugelassen), Aripiprazol 2,5–10 mg (max. 15 mg), Olanzapin, Risperidon off-label." },
    { t: "Stufe 4 · Kombination oder Wechsel", x: "SSRI/SNRI/TZA + Mirtazapin, Mianserin oder Trazodon (7-11 ⇑). Alternativ einmaliger Wechsel auf AD mit anderem Mechanismus (7-12 ⇔), überlappend: neues aufdosieren, altes ausschleichen (7-13 ⇑). Nach SSRI-Versagen bei schwerer Episode Venlafaxin günstiger als zweiter SSRI (K)." },
    { t: "Stufe 5 · Nach ≥ 2 erfolglosen AD", x: "Esketamin-Nasenspray + SSRI/SNRI (Zulassung: ≥ 2 erfolglose AD in aktueller Episode), unter Aufsicht. EKT bei schwerer, psychotischer oder suizidaler TRD; laut AkdÄ empfiehlt die NVL EKT erst bei höherem Resistenzgrad (Empfehlungstext nicht gelesen [?]). Tranylcypromin als Reserve-AD (K/P). rTMS möglich (7-16 ⇔)." },
    { t: "Stufe 6 · Nach Ansprechen", x: "Wirksame Kombination/Augmentation in der Erhaltung beibehalten (Lithium ≥ 6 Monate, 7-9). Nach EKT Erhaltungstherapie medikamentös oder Erhaltungs-EKT bei Rückfall/Unverträglichkeit anderer Prophylaxe (NVL-Patientenblatt EKT 2022)." }
  ],
  opts: [
    { t: "Psychotherapie ergänzen (KVT, CBASP bei chronischem Verlauf [?])", r: "nm", why: "Bei Nichtansprechen auf Medikation soll Psychotherapie zusätzlich angeboten werden (NVL 7-5 ⇑⇑).", ev: 3 },
    { t: "TDM (Serumspiegel) und Adhärenzprüfung", r: "nm", why: "NVL 7-3 ⇑, 7-4 ⇑⇑: deckt Unterdosierung und Nichteinnahme auf; Spiegel im Bereich → Dosiserhöhung wenig aussichtsreich (K).", ev: 2 },
    { d: "lithium", r: "adj", dos: "Spiegel 0,4–0,8 mmol/l (Ältere 0,4)", why: "In DE zur Augmentation zugelassen; 2–4 Wochen nach wirksamem Spiegel bewerten (NVL 7-7/7-8 ⇑); suizidpräventiv.", ev: 2 },
    { d: "quetiapin", r: "adj", dos: "retard 150–300 mg z. N.", why: "Als Zusatztherapie bei unipolarer Depression zugelassen (K); NVL 7-6 ⇑; Netzwerk-MA mit Aripiprazol am besten (K). Gewicht, Sedierung.", ev: 2 },
    { d: "aripiprazol", r: "adj", dos: "2,5–10 mg, max. 15 mg", why: "NVL 7-6 ⇑; in EU off-label (K). Akathisie beachten; auch bei > 65 J. wirksam (K).", ev: 2, off: true },
    { t: "Olanzapin oder Risperidon niedrig dosiert", r: "adj", why: "NVL 7-6 ⇑ (off-label); Olanzapin 6–18 mg + Fluoxetin in USA zugelassen (K). Metabolik.", ev: 2, off: true },
    { d: "mirtazapin", r: "adj", dos: "15–45 mg z. N. zum SSRI/SNRI", why: "Kombination mit SSRI/SNRI/TZA (NVL 7-11 ⇑); auch Mianserin oder Trazodon.", ev: 2 },
    { d: "venlafaxin", r: "a", dos: "75–375 mg", why: "Wechsel auf anderen Mechanismus nach SSRI-Versagen (NVL 7-12 ⇔; K).", ev: 1 },
    { d: "esketamin", r: "r", dos: "56 bzw. 84 mg 2 × /Woche (≥ 65 J. Start 28 mg)", why: "Zugelassen bei ≥ 2 erfolglosen AD + SSRI/SNRI; rascher Effekt; AkdÄ 2023: nur geringer Vorteil vs. Quetiapin-Augmentation. Aufsicht, RR, Dissoziation.", ev: 0 },
    { t: "EKT (Elektrokonvulsionstherapie)", r: "r", why: "Wirksamste Option bei schwerer, wahnhafter oder therapierefraktärer Depression, rascher Wirkeintritt (K); NVL-Grad nicht gelesen [?]. Vorübergehende Gedächtnisstörungen.", ev: 0 },
    { d: "tranylcypromin", r: "r", dos: "10 mg, +10 mg/Woche auf 20–40 mg, max. 60 mg", why: "Reserve nach 2 erfolglosen Standard-AD (K/P); tyraminarme Diät, viele KI-Kombinationen. NVL-Grad nicht gelesen [?].", ev: 0 },
    { t: "rTMS", r: "nm", why: "Kann bei Nichtansprechen auf AD-Monotherapie angeboten werden (NVL 7-16 ⇔).", ev: 1 }
  ],
  avoid: [
    { t: "Augmentation mit Valproat, Lamotrigin, Carbamazepin, Dopaminagonisten oder Stimulanzien", why: "Soll nicht erfolgen (NVL 7-10 ⇑⇑, negativ)." },
    { t: "Weitere Dosiserhöhung bei SSRI im therapeutischen Spiegel", why: "Kein Zusatznutzen (NVL 7-14 ⇑⇑, negativ)." },
    { t: "Wiederholtes Wechseln ohne Spiegel und Adhärenzprüfung", why: "Pseudoresistenz bleibt unerkannt; nur einmaliger Wechsel ist empfohlen (7-12)." },
    { t: "Lithium ohne Wirkung > 4 Wochen weiterführen", why: "2–4 Wochen nach wirksamem Spiegel ohne Effekt absetzen (NVL 7-8 ⇑)." }
  ],
  lern: "Ein relevanter Teil spricht auf das erste AD nicht ausreichend an (Anteil [?]); vor der Diagnose Therapieresistenz steht die Suche nach Pseudoresistenz (zu niedriger Spiegel, Nichteinnahme, falsche Diagnose). Augmentation nutzt einen zweiten Mechanismus: Lithium verstärkt vermutlich die serotonerge Transmission, Quetiapin über den Metaboliten Norquetiapin die Noradrenalin-Wiederaufnahmehemmung [?]. Eine gesicherte Reihenfolge der Strategien gibt es nicht; am besten belegt sind Antipsychotika-Augmentation, Lithium und EKT (K). Esketamin wirkt als NMDA-Antagonist innerhalb von Stunden bis Tagen, ist aber aufwendig in der Anwendung.",
  src: "NVL Unipolare Depression 3.2 (2023) Kap. 7 · NVL-Patientenblatt EKT 2022 · AkdÄ Esketamin 07/2023 · Benkert Kompendium 2021 · Pocket Guide 2021 · FI Spravato 12/2024",
  lg: "NVL Unipolare Depression, 3. Aufl., Version 3.2, 2023 (Kap. 7 bis 7-21 gelesen)"
});

E2S({
  id: "dep-psychot",
  a: "dep",
  t: "Psychotische (wahnhafte) Depression",
  syn: ["psychotische depression", "wahnhafte depression", "depression mit psychotischen symptomen", "f32.3", "f33.3", "schuldwahn", "verarmungswahn", "nihilistischer wahn", "hypochondrischer wahn", "versuendigungswahn", "versündigungswahn", "depression wahn", "ekt"],
  kern: [
    "AD + Antipsychotikum (bevorzugt atypisch) ist jeder Monotherapie überlegen (K)",
    "EKT wirkt schneller und stärker; Dreher: eigentlich 1. Wahl",
    "Praxis: wirkstarkes AD + Olanzapin 5–7,5 mg oder Risperidon 0,5–1,5 mg (Dr)",
    "Hohe Suizidgefahr: engmaschig, ggf. sedierendes AD + AAP (K)",
    "Kombination 3–6 Monate nach Abklingen der Psychose fortführen (K)"
  ],
  pre: [
    "Suizidalität und Nahrungs-/Flüssigkeitsverweigerung, weil beides EKT dringlich macht",
    "DD: bipolare Depression mit psychotischen Merkmalen, schizoaffektive Störung, Schizophrenie mit postpsychotischer Depression, Demenz/Delir",
    "Organische Abklärung bei Erstmanifestation (v. a. im Alter): Labor, Bildgebung [?]",
    "EKG vor AAP/AD-Kombination (QTc), Gewicht/BZ/Lipide vor AAP",
    "Bei EKT-Option: Narkosefähigkeit, Medikation mit Einfluss auf Krampfschwelle (BZD, Antikonvulsiva) [?]"
  ],
  steps: [
    { t: "Stufe 1 · Akut", x: "Kombination AD + atypisches Antipsychotikum beginnen; Suizidgefahr eng überwachen, ggf. geschützter Rahmen. EKT früh mitdenken bei Suizidalität, Nahrungsverweigerung, Stupor/Katatonie oder hohem Alter (K, Dr). NVL-Empfehlung Kap. 5.4 nicht gelesen [?]." },
    { t: "Stufe 2 · Titration (Woche 1–4)", x: "AD zügig auf wirksame Dosis, AP niedrig (z. B. Olanzapin 5–7,5 mg, Risperidon 0,5–1,5 mg; Dr). Abklingen unter Kombination langsamer als unter EKT (Dr)." },
    { t: "Stufe 3 · Kein Ansprechen", x: "Nach 3–4 Wochen wirksamer Dosis ohne Besserung: EKT, weil sie bei wahnhafter und therapierefraktärer Depression der Pharmakotherapie überlegen scheint (K). Sonst Vorgehen wie dep-tr (Spiegel, Wechsel, Lithium)." },
    { t: "Stufe 4 · Erhaltung", x: "AD + AP etwa 3–6 Monate nach Sistieren der psychotischen Symptome fortführen, dann AP vorsichtig reduzieren; AD als Erhaltungstherapie 6–12 Monate (K; NVL 6-1). Hohe Rezidivrate v. a. im Alter beachten (K); ggf. Erhaltungs-EKT." }
  ],
  opts: [
    { t: "EKT", r: "1", why: "Schneller und effizienter als Pharmakotherapie (Dr: eigentlich 1. Wahl; K: überlegen v. a. bei frühem Wirkeintritt). NVL-Grad nicht gelesen [?].", ev: 0 },
    { t: "Kombination AD + atypisches Antipsychotikum", r: "1", why: "Metaanalyse: Kombination jeder Monotherapie überlegen, entspricht den meisten Leitlinien (K).", ev: 0 },
    { d: "olanzapin", r: "1", dos: "5–7,5 mg (Dr)", why: "Gut verträgliches AAP in niedriger Dosis zum AD (Dr); Gewicht, Metabolik.", ev: 0, off: true },
    { d: "risperidon", r: "a", dos: "0,5–1,5 mg (Dr)", why: "Alternative zu Olanzapin (Dr); Prolaktin, EPS.", ev: 0, off: true },
    { d: "quetiapin", r: "a", dos: "[?]", why: "AAP, sedierend; spezifische Daten bei wahnhafter Depression nicht gelesen [?].", ev: 0, off: true },
    { d: "escitalopram", r: "1", dos: "10–20 mg; ≥ 65 J. max. 10 mg", why: "Dreher: bei Ablehnung der EKT Escitalopram + Risperidon oder Olanzapin.", ev: 0 },
    { d: "venlafaxin", r: "a", dos: "75–375 mg", why: "Wirkstarkes AD als Kombinationspartner (Dr: „hoch dosiert, wirkstark“).", ev: 0 },
    { d: "sertralin", r: "a", dos: "50–200 mg", why: "SSRI als Kombinationspartner; SSRI-Monotherapie nicht ausreichend (K).", ev: 0 },
    { d: "mirtazapin", r: "a", dos: "15–45 mg", why: "Sedierendes AD bei Suizidalität/Schlaflosigkeit in Kombination mit AAP (K: „sedierendes AD“; Substanz nicht genannt).", ev: 0 },
    { d: "lithium", r: "adj", dos: "0,4–0,8 mmol/l", why: "Bei Nichtansprechen wie dep-tr; suizidpräventiv.", ev: 0 }
  ],
  avoid: [
    { t: "AD-Monotherapie (v. a. SSRI)", why: "Nicht empfohlen; nur bei KI gegen Antipsychotika erwägen (K)." },
    { t: "AP-Monotherapie", why: "Kombination überlegen (K)." },
    { t: "Hochpotente Typika hoch dosiert", why: "EPS; AAP bevorzugt (K) [?]." },
    { t: "Langes Zuwarten bei Suizidalität oder Nahrungsverweigerung", why: "EKT wirkt schneller (K, Dr)." }
  ],
  lern: "Die wahnhafte Depression gilt als eigener Subtyp mit stärkerer HPA-Achsen-Aktivierung (Hyperkortisolismus) [?]; deshalb wurde der Glukokortikoidrezeptor-Antagonist Mifepriston untersucht (K). Wahninhalte sind meist stimmungskongruent: Schuld, Verarmung, Krankheit, Nichtigkeit [?]. AD allein erreicht die psychotische Komponente schlecht, das Antipsychotikum allein nicht die Depression. EKT wirkt bei dieser Form besonders gut und schnell; in Deutschland wird sie trotzdem selten zuerst eingesetzt (Dr).",
  src: "Benkert Kompendium 2021 (Kap. 3.4.6) · Dreher 2021 · NVL Unipolare Depression 3.2 (2023) Kap. 6 · NVL-Patientenblatt EKT 2022",
  lg: "NVL Unipolare Depression, 3. Aufl., Version 3.2, 2023 (Kap. 5.4 nicht gelesen)"
});

E2S({
  id: "angst-panik",
  a: "angst",
  t: "Panikstörung, Agoraphobie, soziale Angststörung",
  syn: ["panik", "panikstoerung", "panikstörung", "panikattacke", "agoraphobie", "platzangst", "soziale phobie", "soziale angst", "soziale angststoerung", "soziale angststörung", "f40.0", "f40.1", "f41.0", "herzrasen angst", "angstanfall", "vermeidung", "exposition"],
  kern: [
    "KVT mit Exposition (A) oder SSRI/Venlafaxin (A); Präferenz entscheidet mit",
    "Panik: mit halber Dosis starten (Escitalopram 5, Sertralin 25, Venlafaxin 37,5 mg)",
    "Besserung meist nach 2–6 Wochen; ohne Ansprechen Dosis, dann Wechsel SSRI/SNRI",
    "Reserve: Clomipramin (Panik), Moclobemid (soziale Angst); Kombination mit KVT",
    "BZD nicht (KKP); Erhaltung 6–12 Monate nach Remission, langsam ausschleichen"
  ],
  pre: [
    "Somatische DD: Hyperthyreose (TSH), Herzrhythmusstörung/KHK (EKG), Asthma/COPD, Hypoglykämie [?], weil Panik körperlich imitiert werden kann",
    "Substanzen: Koffein, Cannabis, Stimulanzien (auch ADHS-Medikation), Alkohol- oder BZD-Entzug",
    "Komorbide Depression und Suizidalität, Sucht (v. a. Alkohol als Selbstmedikation)",
    "EKG vor Citalopram/Escitalopram/Clomipramin, weil QTc dosisabhängig steigt (K)",
    "Schwangerschaftswunsch: Paroxetin meiden, Sertralin bevorzugt (Embryotox)"
  ],
  steps: [
    { t: "Stufe 1 · Psychoedukation und Wahl", x: "Angstmodell erklären (Teufelskreis, Vermeidung). KVT mit Exposition soll angeboten werden (S3 2021, A); Pharmakotherapie mit SSRI oder Venlafaxin ebenso (A). Wahl nach Präferenz, Wirkeintritt, Nachhaltigkeit, NW und Verfügbarkeit (S3)." },
    { t: "Stufe 2 · Start", x: "Panik: Escitalopram 5 mg für 1 Woche, dann 10 mg; Sertralin 25 mg, nach 1 Woche 50 mg; Venlafaxin 37,5 mg für 4–7 Tage, dann 75 mg (FI/K). Soziale Angst: Escitalopram 10 mg, Sertralin 25 → 50 mg, Venlafaxin 75 mg. LL-Dosisbereiche: Escitalopram 10–20, Sertralin 50–150, Paroxetin 20–50, Citalopram 20–40 (nur Panik), Venlafaxin 75–225 mg." },
    { t: "Stufe 3 · Bewertung nach 4–6 Wochen", x: "Wirklatenz laut S3 etwa 2 Wochen (1–6); Dreher: Angst bessert sich oft nach 4–6 Wochen. Ohne ≥ 20 % Besserung in 4 Wochen ist spätere Response selten (K, für GAS/SAD). Dann Dosis anpassen, danach Wechsel auf anderes SSRI/SNRI (S3)." },
    { t: "Stufe 4 · Nichtansprechen", x: "Panik: Clomipramin 75–250 mg (S3, B), Start 10 mg (K). Soziale Angst: Moclobemid 300–600 mg (KKP); off-label Mirtazapin, Gabapentin, Olanzapin (S3 Tab. 7). Bei Monotherapie-Versagen Kombination Pharmako + KVT (KKP); bei KVT-Versagen psychodynamische PT (B)." },
    { t: "Stufe 5 · Erhaltung", x: "Mindestens 6–12 Monate nach Remission weiterführen (S3); Dreher bei Panik mit Venlafaxin ≥ 2 Jahre (Quellen uneinig). SSRI/SNRI/TZA langsam ausschleichen (S3)." }
  ],
  opts: [
    { t: "KVT mit Exposition (Einzeltherapie bei sozialer Angst bevorzugt)", r: "nm", why: "S3 2021: soll angeboten werden (Ia/A); nachhaltiger nach Therapieende.", ev: 3 },
    { t: "Psychodynamische Psychotherapie", r: "nm", why: "Bei Nichtansprechen/Nichtverfügbarkeit der KVT (S3, B).", ev: 2 },
    { d: "escitalopram", r: "1", dos: "Panik 5 → 10 mg, max. 20 mg; ≥ 65 J. max. 10 mg", why: "Panik und soziale Angst zugelassen; S3 A.", ev: 3 },
    { d: "sertralin", r: "1", dos: "25 → 50 mg, LL 50–150 mg (FI max. 200)", why: "Panik und soziale Angst zugelassen; S3 A; Schwangerschaft Mittel der Wahl.", ev: 3 },
    { d: "venlafaxin", r: "1", dos: "Panik 37,5 → 75 mg, max. 225 mg (retard)", why: "Panik und soziale Angst zugelassen (nur Retardform); S3 A; Dreher bei Panik/Agoraphobie 150–225 mg als 1. Wahl.", ev: 3 },
    { d: "paroxetin", r: "a", dos: "Panik 10 → 40 mg; soziale Angst 20–50 mg", why: "S3 A; starkes Absetzsyndrom, Schwangerschaft ungünstig (P).", ev: 3 },
    { d: "citalopram", r: "a", dos: "Panik 10 mg Start, 20–40 mg; ≥ 65 J. max. 20 mg", why: "Nur Panik zugelassen; S3 A; QTc.", ev: 3 },
    { d: "clomipramin", r: "r", dos: "Start 10 mg; LL 75–250 mg", why: "Panik: bei Versagen/Unverträglichkeit von SSRI/SNRI (S3, B); mehr NW (anticholinerg, QTc).", ev: 2 },
    { d: "moclobemid", r: "r", dos: "300 mg, ab Tag 4 600 mg", why: "Soziale Angst zugelassen; S3 KKP bei Versagen der A-Mittel.", ev: 0 },
    { t: "Mirtazapin, Gabapentin oder Olanzapin (soziale Angst)", r: "r", why: "Off-label-Optionen bei Therapieresistenz (S3 Tab. 7).", ev: 0, off: true },
    { t: "Sport, Selbsthilfegruppen", r: "nm", why: "Ergänzend (S3, KKP).", ev: 0 }
  ],
  avoid: [
    { t: "Benzodiazepine", why: "Sollen nicht angeboten werden (S3, KKP); bei Angststörungen extrem hohes Abhängigkeitspotenzial (Dr). Allenfalls kurz überbrückend, nie bei Suchtanamnese." },
    { t: "Pregabalin bei Panik/sozialer Angst", why: "Nur für GAS zugelassen; keine S3-Empfehlung für Panik gelesen [?]." },
    { t: "Zu schnelles Aufdosieren bei Panik", why: "Initiale Unruhe/NW in Woche 1 (Dr Tab. 3.2) führen zu Abbruch." }
  ],
  lern: "Panikattacken entstehen im Teufelskreis aus Körperwahrnehmung, katastrophisierender Bewertung und weiterer Erregung; Vermeidung hält die Angst aufrecht, weil korrigierende Erfahrung ausbleibt. Exposition durchbricht das. SSRI/SNRI dämpfen die Erregung über Wochen, BZD sofort, verhindern aber das Lernen in der Exposition und machen abhängig [?]. Die S3 2021 stellt KVT und SSRI/Venlafaxin gleichrangig auf A; KVT wirkt nach Therapieende nachhaltiger (Bandelow 2018 laut K-Literatur [?]). Akute Angst ohne Diagnose: Karte sp-angst.",
  src: "S3 Behandlung von Angststörungen 2021 (AWMF 051-028, Kurzfassung) · Benkert Kompendium 2021 · Pocket Guide 2021 · Dreher 2021 · FI",
  lg: "S3-Leitlinie Behandlung von Angststörungen, Version 2, 04/2021 (Kurzfassung)"
});

E2S({
  id: "angst-gas",
  a: "angst",
  t: "Generalisierte Angststörung",
  syn: ["gas", "gad", "generalisierte angst", "generalisierte angststoerung", "generalisierte angststörung", "f41.1", "sorgen", "grübeln", "gruebeln", "dauerangst", "pregabalin", "opipramol", "lyrica", "insidon"],
  kern: [
    "KVT (A) oder SSRI/SNRI (A): Escitalopram, Paroxetin, Duloxetin, Venlafaxin",
    "Pregabalin 150–600 mg (B): rascher Wirkeintritt; Missbrauch bei Suchtanamnese",
    "Opipramol und Buspiron nur 0-Empfehlung: erst nach Versagen der A/B-Mittel",
    "BZD nicht (KKP); allenfalls kurz überbrückend, nie bei Suchtanamnese",
    "Erhaltung mindestens 6–12 Monate nach Remission; langsam ausschleichen"
  ],
  pre: [
    "Komorbide Depression (häufig), Suizidalität; dann AD bevorzugen, weil es beides behandelt",
    "Sucht- und Drogenanamnese vor Pregabalin, weil Missbrauchspotenzial besteht (K/P)",
    "Somatische DD: Hyperthyreose (TSH), Koffein, Stimulanzien, Entzug [?]",
    "Nierenfunktion vor Pregabalin, weil es renal eliminiert wird (K)",
    "EKG vor Escitalopram (QTc) und Opipramol (trizyklisch, QTc)"
  ],
  steps: [
    { t: "Stufe 1 · Wahl", x: "KVT soll angeboten werden (S3 2021, A). Pharmako 1. Linie: Escitalopram 10–20 mg, Paroxetin 20–50 mg, Duloxetin 60–120 mg, Venlafaxin 75–225 mg (alle A). Dreher: milde Fälle Escitalopram, schwerere direkt SNRI (Duloxetin)." },
    { t: "Stufe 2 · Start", x: "Duloxetin bei GAS Start 30 mg, Erhaltung 60–120 mg; Escitalopram 10 mg; Venlafaxin retard 75 mg (FI/K). Pregabalin initial 150 mg in 2–3 Gaben, wöchentlich +150 mg, Erhaltung 200–450 mg, max. 600 mg (P)." },
    { t: "Stufe 3 · Bewertung nach 4 Wochen", x: "Ohne ≥ 20 % Besserung in 4 Wochen ist spätere Response selten (K). Dann Dosis anpassen, dann Wechsel zwischen SSRI/SNRI (S3)." },
    { t: "Stufe 4 · Zweite Linie", x: "Pregabalin (B), wenn noch nicht eingesetzt. Danach Opipramol 50–300 mg oder Buspiron 15–60 mg (beide 0, nach Versagen der A/B-Mittel). Off-label: Imipramin, Quetiapin (KKP), Agomelatin (S3 Tab. 7). Bei Nichtansprechen Kombination mit PT (KKP), psychodynamische PT (B)." },
    { t: "Stufe 5 · Erhaltung", x: "Mindestens 6–12 Monate nach Remission (S3). SSRI/SNRI und Pregabalin ausschleichen, weil Absetzsymptome auftreten (S3, P)." }
  ],
  opts: [
    { t: "KVT", r: "nm", why: "S3 2021: soll angeboten werden (Ia/A).", ev: 3 },
    { t: "Psychodynamische Psychotherapie", r: "nm", why: "Bei Nichtansprechen/Nichtverfügbarkeit der KVT (S3, B).", ev: 2 },
    { d: "escitalopram", r: "1", dos: "10 mg, max. 20 mg; ≥ 65 J. max. 10 mg", why: "GAS zugelassen; S3 A; gut verträglich.", ev: 3 },
    { d: "duloxetin", r: "1", dos: "30 mg Start, 60–120 mg", why: "GAS zugelassen; S3 A; Dreher bei schwereren Fällen bevorzugt. Leber, RR.", ev: 3 },
    { d: "venlafaxin", r: "1", dos: "75 mg, max. 225 mg (retard)", why: "GAS zugelassen; S3 A; RR, Absetzeffekte.", ev: 3 },
    { d: "paroxetin", r: "a", dos: "20 mg, max. 50 mg", why: "GAS zugelassen; S3 A; Absetzsyndrom, anticholinerg, Gewicht.", ev: 3 },
    { d: "pregabalin", r: "a", dos: "150 mg in 2–3 Gaben, +150 mg/Woche, 200–450 mg, max. 600 mg", why: "GAS zugelassen; S3 B; rascher Wirkeintritt, keine PK-Interaktionen. Gewicht, Schwindel, Missbrauch; Suizidsignal 15–24 J. (K).", ev: 2 },
    { d: "opipramol", r: "r", dos: "50–300 mg, Hauptdosis abends", why: "GAS zugelassen; S3 nur 0, nach Versagen der A/B-Mittel; ohne Abhängigkeit (P).", ev: 1 },
    { t: "Buspiron 15–60 mg", r: "r", why: "S3 0, nach Versagen der A/B-Mittel; nicht im Datenbestand.", ev: 1 },
    { d: "quetiapin", r: "r", dos: "[?]", why: "S3: off-label, KKP, nach A/B-Versagen; Metabolik, Sedierung.", ev: 0, off: true },
    { d: "agomelatin", r: "r", dos: "25–50 mg abends", why: "S3 Tab. 7: off-label bei Therapieresistenz; Transaminasen.", ev: 0, off: true },
    { t: "Imipramin", r: "r", why: "S3: off-label nach A-Versagen (B); nicht im Datenbestand.", ev: 2, off: true }
  ],
  avoid: [
    { t: "Benzodiazepine", why: "Sollen nicht angeboten werden (S3, KKP); Toleranz und Abhängigkeit bei chronischem Verlauf." },
    { t: "Pregabalin bei Polytoxikomanie oder Drogenanamnese", why: "Missbrauchspotenzial; Gabe vermeiden (K)." },
    { t: "Opipramol als Ersttherapie", why: "Nur 0-Empfehlung; SSRI/SNRI/Pregabalin vorzuziehen (P, S3)." }
  ],
  lern: "Kern der GAS ist nicht die Angst vor einem Objekt, sondern unkontrollierbares Sorgen als kognitive Vermeidung: Sorgen dämpft kurzfristig die körperliche Erregung und wird dadurch verstärkt [?]. KVT setzt hier an (Sorgenexposition, Umgang mit Unsicherheit). Pregabalin bindet an die α2δ-Untereinheit spannungsabhängiger Kalziumkanäle [?] und reduziert die glutamaterge Freisetzung übererregter Neurone (P) – daher der schnellere Wirkeintritt als bei SSRI. Akute Angst ohne Diagnose: Karte sp-angst.",
  src: "S3 Behandlung von Angststörungen 2021 (AWMF 051-028, Kurzfassung) · Benkert Kompendium 2021 · Pocket Guide 2021 · Dreher 2021 · FI",
  lg: "S3-Leitlinie Behandlung von Angststörungen, Version 2, 04/2021 (Kurzfassung)"
});

E2S({
  id: "zwang",
  a: "angst",
  t: "Zwangsstörung",
  syn: ["zwang", "zwangsstoerung", "zwangsstörung", "ocd", "f42", "zwangsgedanken", "zwangshandlungen", "kontrollzwang", "waschzwang", "grübelzwang", "exposition reaktionsmanagement", "erp", "clomipramin", "anafranil"],
  kern: [
    "KVT mit Exposition und Reaktionsmanagement ist Therapie der 1. Wahl",
    "SSRI bis zur Höchstdosis; Bewertung frühestens nach 12 Wochen",
    "Nach 2 erfolglosen SSRI: Clomipramin oder AP-Augmentation (K)",
    "Augmentation off-label: Risperidon 0,5–3 mg, Aripiprazol 5–15 mg; nach 6 Wochen bewerten",
    "Erhaltung mindestens 12–24 Monate; Absetzen über Monate, möglichst unter KVT (K)"
  ],
  pre: [
    "Abgrenzung: Zwangsgedanken (ich-dyston) vs. Wahn, Grübeln bei Depression, GAS-Sorgen, zwanghafte Persönlichkeit",
    "Komorbidität: Depression und Suizidalität, Tic-Störung/Tourette (dann AP-Augmentation besonders sinnvoll, K), ADHS, Essstörung",
    "Plötzlicher Beginn im Kindesalter: PANS/PANDAS erwägen [?]",
    "EKG und Anfallsanamnese vor Clomipramin und hohen SSRI-Dosen (Citalopram/Escitalopram QTc), weil die Risiken dosisabhängig sind (K)",
    "Interaktionen: Fluvoxamin hemmt CYP1A2/2C19 stark (Clozapin!); Clomipramin nicht mit SSRI/SNRI ohne Spiegel kombinieren"
  ],
  steps: [
    { t: "Stufe 1 · KVT mit Exposition", x: "Störungsspezifische KVT mit Exposition und Reaktionsmanagement anbieten: therapeutenbegleitet, auch im häuslichen Umfeld, hochfrequent, Angehörige einbeziehen, bis zur Remission (S3 2022 laut Voderholzer 2022/Endres 2025). Auch Intensiv-, Gruppen- und Internetformate." },
    { t: "Stufe 2 · SSRI", x: "Wenn KVT nicht verfügbar, erfolglos, abgelehnt oder zur Erleichterung der Exposition: SSRI langsam bis zur Höchstdosis (Sertralin bis 200, Escitalopram bis 20, Fluoxetin bis 60, Fluvoxamin bis 300, Paroxetin bis 60 mg). Höhere Dosen als bei Depression nötig (K). Kombination mit KVT anstreben." },
    { t: "Stufe 3 · Bewertung nach 12 Wochen", x: "Mindestens 12 Wochen in ausreichender Dosis (Endres 2025); Erfolg oft erst nach 2–3 Monaten, meist nur 40–50 % Besserung (K). Dreher: Besserung nach 6–12 Wochen. Ohne Ansprechen: Dosiserhöhung, dann anderes SSRI (K)." },
    { t: "Stufe 4 · Therapieresistenz", x: "Nach 2 erfolglosen SSRI: Clomipramin (bis 225 mg laut Endres 2025; K: oft 200–250 mg) oder Augmentation mit Risperidon 0,5–3 mg (beste Evidenz, K) bzw. Aripiprazol 5–15 mg (off-label); nach 6 Wochen ohne Ansprechen AP absetzen (Endres 2025). K: AP erst nach weiterem AD-Versuch und Verhaltenstherapie." },
    { t: "Stufe 5 · Schwerste Verläufe", x: "Tiefe Hirnstimulation als Zusatztherapie (in EU zugelassen, K) nach Versagen mehrerer leitliniengerechter Therapien, in Zentren; ca. 47 % Symptomreduktion (Endres 2025). rTMS: Hinweise (K)." },
    { t: "Stufe 6 · Erhaltung", x: "Medikamentöse Erhaltung mindestens 12–24 Monate (K); Dreher: mindestens 2 Jahre, oft länger. Absetzen langsam über mehrere Monate, möglichst unter laufender KVT (K)." }
  ],
  opts: [
    { t: "KVT mit Exposition und Reaktionsmanagement", r: "nm", why: "Wirksamste Therapie, 1. Wahl (S3 2022, Voderholzer 2022); Grad nicht gelesen [?].", ev: 3 },
    { d: "sertralin", r: "1", dos: "50 mg, +50 mg/Woche, bis 200 mg", why: "Zwang zugelassen (auch 6–17 J.); SSRI 1. Wahl der Medikamente (S3 2022).", ev: 3 },
    { d: "escitalopram", r: "1", dos: "10 mg, bis 20 mg; ≥ 65 J. max. 10 mg", why: "Zwang zugelassen; QTc bei Höchstdosis.", ev: 3 },
    { d: "fluoxetin", r: "1", dos: "20–60 mg", why: "Zwang zugelassen; lange HWZ, CYP2D6-Hemmung.", ev: 3 },
    { d: "fluvoxamin", r: "a", dos: "50 mg abends, bis 300 mg (geteilt)", why: "Zwang zugelassen (ab 8 J.); starke CYP1A2/2C19-Hemmung.", ev: 3 },
    { d: "paroxetin", r: "a", dos: "20 → 40 mg, max. 60 mg", why: "Zwang zugelassen; Absetzsyndrom, Schwangerschaft ungünstig.", ev: 3 },
    { d: "clomipramin", r: "a", dos: "bis 225 mg (Endres 2025); K oft 200–250 mg", why: "Gleich wirksam wie SSRI, mehr NW (anticholinerg, QTc, Anfälle); nach 2 erfolglosen SSRI (K).", ev: 2 },
    { d: "risperidon", r: "adj", dos: "0,5–3 mg", why: "Augmentation mit bester Evidenz (K: 1. Wahl der AP); besonders bei Tics; ca. ⅓ spricht an (K).", ev: 2, off: true },
    { d: "aripiprazol", r: "adj", dos: "5–15 mg", why: "Augmentation (Endres 2025; K: 10–15 mg in 2 RCT positiv).", ev: 2, off: true },
    { t: "Tiefe Hirnstimulation", r: "r", why: "Schwerste, chronische Verläufe nach mehreren erfolglosen Therapien; in EU zugelassen (K).", ev: 1 },
    { t: "Memantin, N-Acetylcystein, Lamotrigin, Topiramat als Add-on", r: "int", why: "Einzelne positive RCT (K); experimentell.", ev: 1, off: true }
  ],
  avoid: [
    { t: "Benzodiazepine", why: "Keine Wirkung auf Zwang belegt, Abhängigkeit [?]; S3-Aussage nicht gelesen [?]." },
    { t: "Zu frühe Bewertung oder Unterdosierung", why: "Wirkung erst nach 2–3 Monaten in hoher Dosis (K)." },
    { t: "Quetiapin oder Olanzapin zur Augmentation", why: "Daten widersprüchlich bzw. Metaanalyse ohne signifikanten Effekt (K)." },
    { t: "Clomipramin + SSRI/SNRI ohne Spiegel und EKG", why: "Serotoninsyndrom, TZA-Spiegel ↑ v. a. mit Fluvoxamin/Fluoxetin/Paroxetin (Karte clomipramin: nicht kombinieren). Dreher gibt bei schwerem Zwang 75 mg Clomipramin z. N. zum SNRI – Quellen uneinig." }
  ],
  lern: "Modell: Zwangsgedanken lösen Angst oder Unbehagen aus, Zwangshandlungen und Neutralisieren senken sie kurzfristig und werden dadurch negativ verstärkt. Exposition mit Reaktionsmanagement unterbricht diese Verstärkung und erlaubt die Erfahrung, dass die Anspannung von selbst abklingt. Neurobiologisch wird eine Überaktivität kortiko-striato-thalamo-kortikaler Schleifen angenommen [?]; serotonerge Substanzen wirken, noradrenerge allein kaum, daher SSRI und Clomipramin. Antipsychotika können selbst Zwangssymptome auslösen (antiserotonerg, K) – deshalb nur gezielt als Augmentation.",
  src: "S3 Zwangsstörungen 2022 (AWMF 038-017; über Voderholzer 2022 und Endres 2025) · Benkert Kompendium 2021 · Dreher 2021 · FI",
  lg: "S3-Leitlinie Zwangsstörungen, Stand 30.06.2022 (Empfehlungstexte und Grade nicht direkt gelesen)"
});

E2S({
  id: "ptbs",
  a: "ptbs",
  t: "Posttraumatische Belastungsstörung (PTBS)",
  syn: ["ptbs", "ptsd", "posttraumatische belastungsstoerung", "posttraumatische belastungsstörung", "trauma", "traumafolgestörung", "traumafolgestoerung", "kptbs", "komplexe ptbs", "f43.1", "flashback", "intrusionen", "albtraum", "albträume", "albtraeume", "emdr", "hyperarousal"],
  kern: [
    "Traumafokussierte Psychotherapie zuerst (S3 2026 A): PE, CPT, KT, EMDR, NET",
    "Medikation nur zweite Wahl, nie allein: Sertralin, Paroxetin oder Venlafaxin (S3 2019)",
    "Niedrig starten, dann ≥ 8 Wochen in eher hoher Dosis; bei Ansprechen 1–2 Jahre (K)",
    "Keine Benzodiazepine (S3 2019, A)",
    "Albträume: Risperidon/Quetiapin-Hinweise (K); Prazosin in DE nicht im Handel"
  ],
  pre: [
    "Traumaanamnese strukturiert erfassen (S3 2026 Diagnostik-Empfehlungen), weil PTBS sonst häufig übersehen wird",
    "Komplexe PTBS (ICD-11): Affektregulation, negatives Selbstbild, Beziehungsprobleme → angepasste Behandlung (S3 2026, B)",
    "Komorbidität: Depression, Suizidalität, Sucht, Dissoziation, BPS (DBT-PTBS)",
    "Aktuelle Gefährdung (fortbestehender Täterkontakt) klären, weil traumafokussierte Arbeit Sicherheit voraussetzt [?]",
    "Psychotische Symptome? Dann AAP (Risperidon) erwägen (K)"
  ],
  steps: [
    { t: "Stufe 1 · Traumafokussierte PT", x: "Jedem Betroffenen traumafokussierte Psychotherapie im Einzelsetting anbieten (S3 2026 Empf. 2.1, A; 2019 E5 A): PE, CPT, KT, EMDR, NET. Komplexe PTBS: Kombination mit Emotionsregulation, Selbstwert, Beziehungsarbeit (S3 2026 Empf. 5.1, B). Ergänzend Problembereiche adressieren, Sport/Bewegung adjuvant." },
    { t: "Stufe 2 · Medikation (zweite Wahl)", x: "Bei Präferenz, unzureichendem Ansprechen oder fehlender PT-Verfügbarkeit (S3 2026 Empf. 3.1). Nie als alleinige oder primäre Therapie (S3 2019 E8, A). Nur Sertralin, Paroxetin oder Venlafaxin (S3 2019 E9, A; Venlafaxin off-label). Sertralin 25 mg, nach 1 Woche 50 mg, bis 200 mg (P)." },
    { t: "Stufe 3 · Bewertung nach ≥ 8 Wochen", x: "Mit niedriger Dosis beginnen, dann mindestens 8 Wochen eher hohe Dosis (K). Effekte insgesamt kleiner als bei Depression (K). Kein Ansprechen: Wechsel innerhalb der drei empfohlenen Substanzen [?]; PT intensivieren." },
    { t: "Stufe 4 · Zusatzprobleme", x: "Psychoseähnliche Symptome: Risperidon zusätzlich (K). Albträume/Schlaf: Risperidon, Quetiapin oder Olanzapin mit Hinweisen (K); Prazosin international, in DE nicht im Handel, große RCT 2018 negativ (Karte prazosin). Schlafstörung im Traumakontext: Karte ins-trauma." },
    { t: "Stufe 5 · Erhaltung", x: "Bei Ansprechen 1–2 Jahre weiterführen; nach Absetzen höheres Rückfallrisiko (K). Langsam ausschleichen." }
  ],
  opts: [
    { t: "Traumafokussierte PT: PE, CPT, Kognitive Therapie, EMDR, NET", r: "nm", why: "Behandlung erster Wahl (S3 2026 Empf. 2.1, A; S3 2019 E5, A).", ev: 3 },
    { t: "Kombination traumafokussiert + Emotionsregulation (z. B. DBT-PTBS, STAIR [?])", r: "nm", why: "Komplexe PTBS (S3 2026 Empf. 5.1, B).", ev: 2 },
    { d: "sertralin", r: "1", dos: "25 mg, nach 1 Woche 50 mg, bis 200 mg", why: "PTBS zugelassen; S3 2019 E9 (A); K: 1. Wahl mit Paroxetin.", ev: 3 },
    { d: "paroxetin", r: "1", dos: "20 mg, max. 50 mg", why: "PTBS zugelassen; S3 2019 E9 (A). Absetzsyndrom, Schwangerschaft ungünstig.", ev: 3 },
    { d: "venlafaxin", r: "a", dos: "[?] (Depression 75–375 mg)", why: "S3 2019 E9 (A); in DE off-label; 6-Monats-RCT mäßig wirksam (K).", ev: 3, off: true },
    { d: "mirtazapin", r: "r", dos: "15–45 mg", why: "Gute Wirkung in Studien (K); nicht in der S3-Auswahl.", ev: 1, off: true },
    { d: "risperidon", r: "adj", dos: "[?]", why: "Bei psychoseähnlichen Zuständen; positive Wirkung auf Albträume (K). AAP-Add-on sonst nicht bestätigt (K).", ev: 1, off: true },
    { d: "quetiapin", r: "r", dos: "[?]", why: "Hinweise auf Wirksamkeit, auch auf Schlaf/Albträume (K); Metabolik.", ev: 1, off: true },
    { d: "prazosin", r: "int", dos: "1 mg z. N., Ziel 6–10 mg", why: "Albträume; in DE nicht im Handel, RCT 2018 negativ, K nicht mehr empfohlen; NICE/VA weiter Option (Karte prazosin).", ev: 1, off: true },
    { d: "clonidin", r: "r", dos: "0,075–0,15 mg", why: "Hyperarousal, Schlaf, Albträume: nur Fallserien (K).", ev: 0, off: true },
    { t: "Imagery Rehearsal Therapy bei Albträumen [?]", r: "nm", why: "Albtraumspezifische Psychotherapie; in gelesenen Quellen nicht belegt [?].", ev: 0 }
  ],
  avoid: [
    { t: "Benzodiazepine", why: "Sollen nicht eingesetzt werden (S3 2019 E10, A): keine Wirkung auf PTBS, Abhängigkeit, Hemmung der Exposition [?]." },
    { t: "Pharmakotherapie als alleinige oder primäre Behandlung", why: "S3 2019 E8 (A); S3 2026 Empf. 3.1 (A)." },
    { t: "Routinemäßiges Debriefing direkt nach Trauma", why: "International nicht mehr empfohlen (Hintergrund S3 2019)." }
  ],
  lern: "Die PTBS wird als Störung des Furchtgedächtnisses verstanden: Das Trauma ist fragmentiert und kontextlos gespeichert, sodass Auslöser es als gegenwärtige Bedrohung reaktivieren; Vermeidung verhindert die Verarbeitung [?]. Traumafokussierte Verfahren integrieren die Erinnerung und korrigieren Bewertungen (Schuld, Gefahr). Medikamente reduzieren Symptome, ohne diesen Lernprozess zu ersetzen; die Effektstärken der SSRI sind nur schwach (K). BZD dämpfen Arousal, behindern aber vermutlich die Extinktion [?]. Schlaf im Traumakontext: Karte ins-trauma.",
  src: "S3 PTBS 2019 (AWMF 155-001, E5–E12) · S3 PTBS 2026 (Empf. 2.1, 3.1, 5.1, 7.4) · Benkert Kompendium 2021 · Pocket Guide 2021",
  lg: "S3-Leitlinie PTBS, Stand 27.02.2026 (publ. 05/2026; Pharmakotherapie-Kap. 3.3 nicht gelesen) · Substanzen aus Fassung 19.12.2019"
});

E2S({
  id: "dem-alz",
  a: "demenz",
  t: "Alzheimer-Demenz – Antidementiva",
  syn: ["alzheimer", "alzheimer-demenz", "alzheimer demenz", "demenz", "f00", "g30", "antidementiva", "antidementivum", "ache-hemmer", "cholinesterasehemmer", "donepezil", "rivastigmin", "galantamin", "memantin", "aricept", "exelon", "ebixa", "axura", "gedächtnisstörung", "gedaechtnisstoerung", "lecanemab", "donanemab"],
  kern: [
    "Leicht–mittelschwer: AChE-Hemmer (S3 ⇑⇑), höchste verträgliche Dosis",
    "Mittelschwer–schwer: Memantin (S3 ⇑⇑); nicht bei leichter AD",
    "Kombination AChE-I + Memantin: S3 2023 ⇓⇓ (K 2021 sah Add-on positiv)",
    "AChE-I langfristig, auch bei Verschlechterung (S3 ⇑); Nutzen halbjährlich prüfen",
    "Vor Start und in Woche 4, 8, 12: Puls/EKG wegen Bradykardie, AV-Block, QTc"
  ],
  pre: [
    "Demenz-Diagnose und Schweregrad sichern (durch erfahrenen Arzt, FI), Delir ausschließen (→ sp-delir)",
    "Reversible Ursachen: Endokrinopathien, Hypovitaminosen, Elektrolyte, Infekte, Intoxikation, Normaldruckhydrozephalus (K)",
    "Depression als DD/Komorbidität, weil sie Kognition verschlechtert und behandelbar ist",
    "Anticholinerge und sedierende Medikation reduzieren, weil sie Kognition und Sturzrisiko verschlechtern (K)",
    "EKG/Puls vor AChE-I (Bradykardie, Sick-Sinus, AV-Block, QTc); Kreatinin/eGFR vor Memantin (renale Elimination)"
  ],
  steps: [
    { t: "Stufe 1 · Diagnose und Schweregrad", x: "Ätiologie und Schweregrad (leicht, mittelschwer, schwer) festlegen; reversible Ursachen ausschließen (K). Nichtmedikamentöse Angebote und Angehörigenberatung parallel [?]. Frühe AD mit Amyloid-Nachweis: Anti-Amyloid-Antikörper prüfen (S3 2026 Empf. 75 ⇑, Details nicht gelesen [?])." },
    { t: "Stufe 2 · Leicht bis mittelschwer: AChE-Hemmer", x: "S3 Empf. 58 (⇑⇑). Wahl nach NW/Interaktionen, kein Wirksamkeitsunterschied; Wirkung dosisabhängig → höchste verträgliche Dosis (K). Donepezil 5 mg z. N., nach 4–6 Wochen 10 mg. Rivastigmin oral 2 × 1,5 mg, alle 2 Wochen +3 mg/Tag bis 6–12 mg, oder Pflaster 4,6 → nach 4 Wochen 9,5 mg/24 h. Galantamin retard 8 mg, alle 4 Wochen +8 mg auf 16–24 mg." },
    { t: "Stufe 3 · Kontrolle (3 Monate, dann halbjährlich)", x: "Nutzen nach 3 Monaten, dann etwa halbjährlich klinisch und ggf. testpsychologisch (K). EKG vor Beginn, nach 4, 8, 12 Wochen, dann vierteljährlich (K 6.9). GI-NW oder Unverträglichkeit: auf anderen AChE-I oder Rivastigmin-Pflaster umstellen (K: Evidenz für Umstellung)." },
    { t: "Stufe 4 · Mittelschwer bis schwer: Memantin", x: "S3 Empf. 60 (⇑⇑). 5 mg morgens, wöchentlich +5 mg bis 20 mg; mittelschwere Niereninsuffizienz 10 mg (K). Therapieversuch 24 Wochen, Weiterverordnung nach dokumentiertem Erfolg (K/P). AChE-I bei schwerer AD weiterführen (S3 Empf. 63 ⇑; Donepezil bei schwerer AD wirksam, in DE off-label, K)." },
    { t: "Stufe 5 · Kombination und Absetzen", x: "Kombination AChE-I + Memantin: S3 2023 Empf. 62 ⇓⇓ (nicht einsetzen) – K/P 2021 sahen Add-on als sinnvoll (Quellen uneinig; S3 neuer). Absetzen bei Unverträglichkeit, Kontraindikation oder fehlendem Nutzen; K: Absetzversuch bei Zweifel möglich, sonst langfristig fortführen. Nach Absetzen auf Verschlechterung achten [?]." }
  ],
  opts: [
    { d: "donepezil", r: "1", dos: "5 mg z. N., nach 4–6 Wochen 10 mg", why: "S3 ⇑⇑; GI-NW seltener als Galantamin/Rivastigmin oral, Schlafstörung häufiger (P); 1 × täglich.", ev: 3 },
    { d: "rivastigmin", r: "1", dos: "Pflaster 4,6 → 9,5 mg/24 h (13,3 bei Verschlechterung); oral 2 × 1,5 → 6–12 mg", why: "S3 ⇑⇑; Pflaster bei Schluckproblemen oder GI-NW; auch PDD zugelassen.", ev: 3 },
    { d: "galantamin", r: "1", dos: "retard 8 mg, alle 4 Wochen +8 mg auf 16–24 mg", why: "S3 ⇑⇑; mittelschwere Leber-/Niereninsuffizienz max. 16 mg; QTc (K).", ev: 3 },
    { d: "memantin", r: "1", dos: "5 mg, wöchentlich +5 mg bis 20 mg", why: "Mittelschwer–schwer (S3 ⇑⇑); renal dosieren; nicht bei leichter AD.", ev: 3 },
    { t: "Anti-Amyloid-Antikörper (Lecanemab, Donanemab)", r: "r", why: "S3 2026 Empf. 75 ⇑ (neu); Indikation, Zulassungsstatus, ARIA-Monitoring nicht gelesen [?]; nur spezialisierte Zentren [?].", ev: 2 },
    { t: "Ginkgo biloba", r: "r", why: "In K erwähnt (Kostenvergleich); S3-Empfehlung 2023 nicht gelesen [?].", ev: 0 },
    { t: "Nichtmedikamentöse Interventionen (kognitive Stimulation, Bewegung, Angehörigenschulung)", r: "nm", why: "Zentral in der Demenzbehandlung (PZ); S3-Grade nicht gelesen [?].", ev: 0 }
  ],
  avoid: [
    { t: "AChE-I + Memantin als Routinekombination", why: "S3 2023 Empf. 62 ⇓⇓ (K 2021 abweichend)." },
    { t: "Memantin bei leichter AD", why: "Keine Empfehlung (S3 nur mittelschwer–schwer)." },
    { t: "Anticholinergika (z. B. Biperiden, Amitriptylin, Oxybutynin [?])", why: "Antagonisieren AChE-I, verschlechtern Kognition, Delirgefahr (K/P)." },
    { t: "AChE-I mit Betablockern/bradykardisierenden Mitteln ohne EKG", why: "Bradykardie, AV-Block, Synkopen (P)." },
    { d: "haloperidol", why: "Antipsychotika bei Demenz nur zeitweise bei Verhaltensstörungen; Mortalitäts-/Schlaganfall-Warnhinweis (K) → Karte sp-demenz." }
  ],
  lern: "Bei der AD gehen früh cholinerge Neurone des basalen Vorderhirns (Nucleus basalis Meynert) zugrunde [?]; AChE-Hemmer erhöhen das verbliebene Acetylcholin und bessern Kognition und Alltagsfunktion mit kleiner Effektstärke, ohne den Verlauf aufzuhalten (K). Memantin dämpft als NMDA-Antagonist eine tonische glutamaterge Überaktivierung (K/P). Etwa ein Drittel profitiert, ein Drittel stabilisiert sich, ein Drittel verträgt die Therapie nicht (PZ). Anti-Amyloid-Antikörper sind der erste krankheitsmodifizierende Ansatz und seit 2026 in der S3 schwach empfohlen. Verhaltensstörungen bei Demenz: Karte sp-demenz.",
  src: "S3 Demenzen 2023 (Empf. 58, 60, 62, 63 über UKM-Folien 2023) · S3 Demenzen Version 6.0 (2026, Änderungsliste) · Benkert Kompendium 2021 · Pocket Guide 2021 · PZ · FI",
  lg: "S3-Leitlinie Demenzen, Version 6.0, Stand 24.02.2026 (Therapiekapitel nicht direkt gelesen; Empfehlungen 2023 über Sekundärquelle)"
});

E2S({
  id: "dem-lewy",
  a: "demenz",
  t: "Lewy-Körper-Demenz und Parkinson-Demenz: Psychose und Antidementiva",
  syn: ["lewy", "lewy-körper", "lewy-koerper", "lewy body", "dlb", "dlk", "parkinson-demenz", "parkinson demenz", "pdd", "parkinsonpsychose", "parkinson psychose", "neuroleptika-sensitivität", "neuroleptikasensitivitaet", "antipsychotika-überempfindlichkeit", "halluzinationen parkinson", "f02.3", "g31.82"],
  kern: [
    "Antipsychotika-Überempfindlichkeit: Typika meiden, Risperidon/Olanzapin ungünstig (K)",
    "Zuerst psychotogene Parkinson-Mittel reduzieren (Anticholinergika, Amantadin zuerst)",
    "Dann AChE-I (Rivastigmin), wirkt auch auf Halluzinationen – vor jedem Antipsychotikum",
    "Psychose: Quetiapin 25–150 mg oder Clozapin 6,25–50 mg, sehr langsam (K)",
    "Clozapin einzig zugelassenes AP für Parkinson-Psychose; ANC-Kontrollen Pflicht"
  ],
  pre: [
    "Delir ausschließen (Infekt, Exsikkose, neue Medikation) → sp-delir, weil Halluzinationen sonst fehlgedeutet werden",
    "Medikamentenanamnese dopaminerg/anticholinerg, weil Psychosen bei PDD meist NW der Antiparkinson-Therapie sind (K)",
    "DLB-Hinweise: fluktuierende Kognition, visuelle Halluzinationen, Parkinsonismus, REM-Schlaf-Verhaltensstörung [?]",
    "Sturzrisiko, Orthostase; EKG (AChE-I Bradykardie, Quetiapin QTc)",
    "Vor Clozapin: ANC ≥ 1500/mm³, Aufklärung über Blutbildkontrollen (RHB 2025)"
  ],
  steps: [
    { t: "Stufe 1 · Auslöser reduzieren", x: "Psychotogene Präparate schrittweise reduzieren: zuerst Anticholinergika und Amantadin, dann COMT- und MAO-B-Hemmer, schließlich Dopaminagonisten und L-Dopa (K). Oft schon ausreichend (K). Bei DLB Antiparkinsonmittel nur niedrig beginnen und langsam steigern (K)." },
    { t: "Stufe 2 · AChE-Hemmer", x: "Vor jedem Antipsychotikum Therapieversuch mit AChE-I (K): bei DLB positive Effekte auf Kognition und psychotische Symptome, Rivastigmin am besten untersucht (off-label, Mittel der Wahl). PDD: Rivastigmin oral zugelassen (leicht–mittelschwer). Monitoring: selten Verschlechterung von Parkinson-Motorik, Kognition oder REM-Schlaf-Verhaltensstörung (K)." },
    { t: "Stufe 3 · Antipsychotikum, wenn nötig", x: "Quetiapin 25–150 mg/d off-label (günstiges NW-Profil, K). Bei ungenügender Wirkung oder Akinese Umstellung auf Clozapin: Start 6,25 mg, Ziel 25–50 mg (PDD bis 100 mg), langsam steigern (K, Karte clozapin). Evidenz bei DLB nicht gesichert (K). Patienten sprechen oft auf sehr niedrige Dosen an (K)." },
    { t: "Stufe 4 · Verlauf", x: "Abwägung Motorik gegen Psychose gemeinsam mit Patient und Angehörigen (K). Sedierende Mittel, BZD und Anticholinergika zurückhaltend wegen Sturzgefahr (K). Depression: SSRI, z. B. Citalopram (DAlzG). S3-Empfehlungen zu DLB/PDD nicht gelesen [?]." }
  ],
  opts: [
    { t: "Reduktion psychotogener Antiparkinson-Medikation", r: "nm", why: "Psychose bei PDD meist medikamentös bedingt; Reihenfolge Anticholinergika/Amantadin → COMT/MAO-B → DA-Agonisten → L-Dopa (K).", ev: 0 },
    { d: "rivastigmin", r: "1", dos: "oral 2 × 1,5 mg, alle 2 Wochen +3 mg bis 6–12 mg", why: "PDD oral zugelassen; DLB off-label Mittel der Wahl (K); wirkt auch auf Halluzinationen.", ev: 0 },
    { d: "donepezil", r: "a", dos: "5 mg, nach 4–6 Wochen 10 mg", why: "DLB/PDD off-label; mit Rivastigmin beste Ergebnisse (DAlzG; K).", ev: 0, off: true },
    { d: "galantamin", r: "r", dos: "8 → 16–24 mg", why: "Hinweise bei PDD (K); bei DLB ohne Wirksamkeitsbeleg (DAlzG).", ev: 0, off: true },
    { d: "quetiapin", r: "1", dos: "25–150 mg/d, langsam", why: "Erstes AP bei DLB/PDD-Psychose, meist vertragen (K, DAlzG); nicht evidenzgesichert.", ev: 0, off: true },
    { d: "clozapin", r: "a", dos: "Start 6,25 mg, 25–50 mg (PDD bis 100 mg)", why: "Für Psychose bei Parkinson zugelassen, am besten belegt (K); DLB off-label. ANC-Monitoring, Orthostase, Sedierung, Hypersalivation.", ev: 0 },
    { d: "memantin", r: "r", dos: "5 → 20 mg", why: "Bei DLB uneinheitlich: Verschlechterung der Psychose berichtet, eine RCT positiv (K).", ev: 0, off: true },
    { t: "Pimavanserin", r: "int", why: "In USA für Parkinson-Psychose zugelassen; in DE nicht verfügbar [?].", ev: 0 }
  ],
  avoid: [
    { d: "haloperidol", why: "Konventionelle Antipsychotika müssen vermieden werden: schwere EPS, Sedierung, Neuroleptika-Sensitivität (K, DAlzG)." },
    { d: "risperidon", why: "Ungünstige Nutzen-Risiko-Relation, verstärkt Motorik (K)." },
    { d: "olanzapin", why: "Ungünstige Nutzen-Risiko-Relation, verstärkt Motorik (K)." },
    { t: "Benzodiazepine, Anticholinergika (Biperiden)", why: "Sturzgefahr, Kognition und Psychose verschlechtern sich (K)." },
    { t: "Melperon/Pipamperon als „harmlose“ Sedativa", why: "Ebenfalls D2-Antagonisten; Verträglichkeit bei DLB nicht belegt [?]." }
  ],
  lern: "Bei DLB und PDD ist das cholinerge Defizit ausgeprägter als bei der Alzheimer-Demenz (K) – deshalb wirken AChE-I hier oft deutlicher, auch auf Halluzinationen. Gleichzeitig ist das nigrostriatale Dopaminsystem geschädigt: Schon geringe D2-Blockade kann schwere Parkinson-Syndrome, Sedierung über Tage oder Stürze auslösen (Neuroleptika-Sensitivität, DAlzG). Quetiapin und Clozapin binden nur locker und kurz an D2 [?] und werden daher meist vertragen. Die Psychose entsteht im Spannungsfeld zwischen dopaminerger Therapie (Motorik) und dopaminerger Überstimulation (Halluzinationen). Akute Verhaltensstörung bei Demenz: Karte sp-demenz.",
  src: "Benkert Kompendium 2021 (6.4.4, 6.4.5) · Deutsche Alzheimer Gesellschaft Infoblatt 14 · S3 Demenzen 2026 (DLB/PDD-Empfehlungen nicht gelesen) · FI · RHB Clozapin 2025",
  lg: "S3-Leitlinie Demenzen, Version 6.0, Stand 24.02.2026 (Kapitel DLB/PDD nicht gelesen)"
});

/* ---- algo_2 ---- */
// Psychopharmaka-Kompass · Etappe 2 · Gruppe algo_2 · Diagnose-Algorithmen (Format B)
// Stand 07.10.2026 · Belege: algo_2_belege.md · Leitlinienauszüge: /home/claude/kompass/quellen/2x_*.md

E2S({
  id: "bip-manie",
  a: "bip",
  t: "Akute Manie",
  syn: ["manie", "manisch", "hypomanie", "bipolar", "bipolare störung", "bipolare stoerung", "f31", "f30", "gehoben", "enthemmt", "gereizt", "größenwahn", "groessenwahn", "mischzustand", "phasenwechsel"],
  kern: [
    "Antidepressiva und Stimulanzien beenden; Auslöser (Substanzen, Schlafentzug) prüfen",
    "Euphorisch: Lithium, Valproat retard oder AAP; gereizt/psychotisch: AAP bevorzugen",
    "S3 2019: Li, VPA, CBZ, AAP (Ari, Ola, Que, Ris, Zip) und Haloperidol je Grad B",
    "Schwer/psychotisch: Kombination Li oder VPA + AAP (wirksamer als Monotherapie)",
    "BZD nur kurz als Interventionsmittel; EKT bei Therapieresistenz"
  ],
  pre: [
    "Medikamenten- und Drogenanamnese (AD, Stimulanzien, Steroide, Kokain, Cannabis), weil substanzinduzierte Manie anders behandelt wird",
    "Organik: TSH, Na, Glukose, Drogenscreening, ggf. cCT/MRT und Neurostatus bei Erstmanifestation ≥ 40 J. [?], weil sekundäre Manien (Hyperthyreose, Tumor, Steroid) möglich sind",
    "Vor Lithium: eGFR, TSH, Kalzium, Elektrolyte, EKG, weil Lithium nephro- und thyreotoxisch ist",
    "Vor Valproat: Schwangerschaftstest und Verhütung, Leberwerte, Blutbild, Gerinnung, weil hochteratogen und hepatotoxisch",
    "EKG (QTc) vor AP, besonders Ziprasidon und Haloperidol, weil dosisabhängige QT-Verlängerung",
    "Mischzustand und Suizidalität aktiv erfragen; Eigen-/Fremdgefährdung und Rechtsgrundlage klären"
  ],
  steps: [
    { t: "Stufe 0 · Sofort", x: "Antidepressiva absetzen (K Box 1: „soll“), Stimulanzien pausieren, reizarmes Setting, Schlaf sichern. Bei Erregung BZD (Lorazepam) kurzfristig zusätzlich." },
    { t: "Stufe 1 · Monotherapie", x: "Euphorisch, ohne Psychose: Lithium (Ziel 0,9–1,2 mmol/l) oder Valproat retard (Loading 20 mg/kg) oder ein AAP. Gereizt oder psychotisch: AAP bevorzugen. Bei Prophylaxe-Plan früh Lithium mitdenken." },
    { t: "Stufe 2 · Nach 1–2 Wochen ohne ausreichende Besserung [?]", x: "Dosis und Spiegel prüfen (Lithium, Valproat), Adhärenz klären. Dann Kombination: Lithium oder Valproat + AAP (beste Evidenz). Bei schwerer/psychotischer Manie Kombination auch von Beginn an." },
    { t: "Stufe 3 · Therapieresistenz", x: "Wechsel des AAP bzw. Stabilisierers; Carbamazepin im Einzelfall; EKT erwägen (K). Clozapin nur off-label im Ausnahmefall [?]." },
    { t: "Stufe 4 · Nach Remission", x: "Übergang in Phasenprophylaxe (siehe bip-proph). Lithium nach Abklingen innerhalb von 1–2 Wochen auf 0,5–0,8 mmol/l senken (P). Ein zusätzliches konventionelles AP nach Abklingen ausschleichen; AAP mit Prophylaxe-Zulassung können weiterlaufen (K)." }
  ],
  opts: [
    { d: "lithium", r: "1", dos: "Spiegel 0,9–1,2 mmol/l (12 h)", why: "S3 Grad B; euphorische Manie, gleichzeitig Prophylaxe und suizidpräventiv; Wirkeintritt langsamer als AAP.", ev: 2 },
    { d: "valproat", r: "1", dos: "Loading 20 mg/kg; Spiegel 50–100 mg/l", why: "S3 Grad B; zugelassen nur retard, wenn Lithium KI/unverträglich; auch gereizt/gemischt. Nicht bei Frauen im gebärfähigen Alter ohne Verhütungsprogramm.", ev: 2 },
    { d: "aripiprazol", r: "1", dos: "15 mg/d, max. 30 mg", why: "S3 Grad B; metabolisch günstig, kaum sedierend; Akathisie.", ev: 2 },
    { d: "olanzapin", r: "1", dos: "Start 10 mg, 5–20 mg/d", why: "S3 Grad B; rasch wirksam und sedierend; Gewicht und Metabolik.", ev: 2 },
    { d: "quetiapin", r: "1", dos: "bis 800 mg (Titration nach FI)", why: "S3 Grad B; sedierend; deckt später auch Depression und Prophylaxe ab.", ev: 2 },
    { d: "risperidon", r: "1", dos: "Start 2 mg, Anpassung 1–6 mg/d", why: "S3 Grad B; in Metaanalyse mit Olanzapin und Haloperidol am günstigsten (K); Prolaktin.", ev: 2 },
    { d: "ziprasidon", r: "a", dos: "2 × 40 bis 2 × 80 mg mit Mahlzeit", why: "S3 Grad B; zugelassen bis mäßigen Schweregrad; QTc.", ev: 2 },
    { d: "haloperidol", r: "a", dos: "2–10 mg/d, max. 15 mg", why: "S3 Grad B (einziges KAP); EPS-Risiko, nach Abklingen ausschleichen.", ev: 2 },
    { t: "Kombination Lithium oder Valproat + AAP", r: "adj", why: "Bei schwerer oder psychotischer Manie; am besten evaluiert, wirksamer als Monotherapie (K; CANMAT first-line).", ev: 2 },
    { d: "carbamazepin", r: "a", dos: "[?]", why: "S3 Grad B, aber Enzyminduktion; im Einzelfall Alternative zu Lithium/Valproat (K).", ev: 2 },
    { d: "lorazepam", r: "adj", dos: "bedarfsweise, kurz [?]", why: "Keine Monotherapie; vorübergehend als Interventionsmittel bei Erregung und Schlaflosigkeit (K).", ev: 1 },
    { t: "EKT", r: "r", why: "Bei therapieresistenter Manie erwägen (K).", ev: 1 },
    { t: "Paliperidon", r: "int", why: "S3 Grad 0, in DE für Manie nicht zugelassen (nur schizoaffektiv).", ev: 1, off: true },
    { t: "Asenapin, Cariprazin", r: "int", why: "Asenapin zugelassen und S3 Grad B, aber nicht im Datenbestand; Cariprazin bei Manie nur USA-Zulassung (K).", ev: 2 }
  ],
  avoid: [
    { t: "Antidepressiva (jede Klasse)", why: "Unterhalten die Manie; beenden (K Box 1)." },
    { d: "amisulprid", why: "Kein Wirksamkeitsnachweis bei Manie (K)." },
    { d: "gabapentin", why: "Unwirksam bei akuter Manie (Metaanalyse, K); ebenso Topiramat." },
    { t: "Valproat bei Frauen im gebärfähigen Alter ohne Verhütungsprogramm", why: "Hochteratogen; nur mit Schwangerschaftsverhütungsprogramm (EMA/PRAC)." },
    { t: "BZD als Monotherapie oder Dauer", why: "Nicht antimanisch; STEP-BD: höhere Rezidivrate unter BZD (K)." }
  ],
  lern: "Manie ist ein Zustand dopaminerger Überaktivität mit Schlafverlust als Treiber und Folge: Jede Nacht ohne Schlaf verstärkt die nächste Eskalation. Deshalb wirken D2-Blocker schnell, während Lithium und Valproat über Signaltransduktion (Inositol-Weg, Proteinkinase C) eher stabilisieren und langsamer einsetzen. Antidepressiva und Stimulanzien heben die monoaminerge Last und müssen pausieren. Die Wahl des Akutmittels ist zugleich eine Vorentscheidung über die Prophylaxe: Was die Manie beendet und vertragen wird, ist oft auch der Rezidivschutz.",
  src: "S3 Bipolare Störungen 2019 (Grade via Benkert Kompendium 2021) · Benkert Kompendium 2021 · Pocket Guide 2021 · CANMAT/ISBD 2018 (via K) · Wirkstoffkarten",
  lg: "S3 Bipolare Störungen, AWMF 038-019, Langversion 2.1 (Update 2019, Stand 05/2020, verlängert); Empfehlungsteil nicht direkt gelesen, Grade sekundär aus Kompendium 2021"
});

E2S({
  id: "bip-dep",
  a: "bip",
  t: "Bipolare Depression",
  syn: ["bipolare depression", "bipolar", "depression bipolar", "bipolar depressiv", "depressive episode bipolar", "f31.3", "f31.4", "f31.5", "switch", "umkippen", "rapid cycling", "bipolar ii", "bipolar 2"],
  kern: [
    "Quetiapin-Monotherapie 300 mg: S3 „soll“ (Grad A), einziges zugelassenes Mittel",
    "Antidepressiva nur unter Stimmungsstabilisierer, kurz; nie TZA, Venlafaxin meiden",
    "Lamotrigin: akut nur bei schwerer Depression belegt; Stärke ist die Prophylaxe",
    "Lithium allein akut nicht empfohlen, aber suizidpräventiv mitdenken",
    "≥ 2 manische Begleitsymptome (Mischzustand): keine AD-Monotherapie"
  ],
  pre: [
    "Bipolarität sichern: frühere (Hypo-)Manie, Familienanamnese, Ansprechen auf AD mit Unruhe/Switch, weil die Therapie sich von der unipolaren Depression unterscheidet",
    "Mischsymptome (Antrieb, Reizbarkeit, Gedankenrasen) erfragen, weil sie AD-Monotherapie verbieten (K Box 7)",
    "Suizidalität: bei bipolaren Störungen 10–15-fach erhöhte Suizidrate (K)",
    "TSH, Blutbild, Elektrolyte, Leber, Niere; Schwangerschaft prüfen vor Valproat/Lamotrigin",
    "Komorbidität: Sucht, Angst, ADHS, BPS (Abgrenzung schwierig, K)",
    "EKG und metabolischer Ausgangsstatus vor Quetiapin, weil QT und Gewicht relevant"
  ],
  steps: [
    { t: "Stufe 1 · Start", x: "Quetiapin 300 mg abends (Titration nach FI [?]) als Monotherapie; bestehenden Stabilisierer (Lithium) weiterführen und optimieren. Psychoedukation, Psychotherapie, Schlaf-Wach-Rhythmus." },
    { t: "Stufe 2 · Nach 4 Wochen ohne Ansprechen [?]", x: "Spiegel/Adhärenz prüfen. Lamotrigin langsam zusätzlich (CEQUEL: add-on zu Quetiapin positiv; Titration 25 mg × 2 Wo, 50 mg × 2 Wo, dann 100–200 mg). Oder Lithium ergänzen (Suizidprophylaxe)." },
    { t: "Stufe 3 · Mittelschwer bis schwer, weiter depressiv", x: "Antidepressivum (SSRI oder Bupropion) nur zusätzlich zu Lithium, Valproat oder AAP; kurz halten und nach Remission ausschleichen, wenn kein depressiver Rückfall vorbekannt (K Box 7)." },
    { t: "Stufe 4 · Therapieresistenz", x: "EKT (auch bei psychotischer Depression oder hoher Suizidalität); Tranylcypromin im Einzelfall (wirksam, aber Switch-Risiko ↑, K). Clozapin nur Ausnahmefall (K)." },
    { t: "Stufe 5 · Erhaltung", x: "Prophylaxe nach Episodenpolarität wählen: überwiegend depressiv → Lamotrigin oder Quetiapin (wenn darunter Remission), Lithium immer prüfen (siehe bip-proph)." }
  ],
  opts: [
    { d: "quetiapin", r: "1", dos: "300 mg z. N. (600 mg nicht besser)", why: "S3 „soll“, Grad A; einzige Zulassung für bipolare Depression; BOLDER/EMBOLDEN. Sedierung, Gewicht.", ev: 3 },
    { d: "lamotrigin", r: "adj", dos: "Titration bis 100–200 mg (mit VPA halbieren)", why: "Akut nur bei schwerer Depression Plazebo überlegen; add-on zu Quetiapin positiv (CEQUEL). Langsame Titration (SJS) → kein Akutmittel.", ev: 1, off: true },
    { d: "lithium", r: "adj", dos: "Spiegel 0,5–0,8 mmol/l", why: "Als Monotherapie akut nicht empfohlen (S3 via K); zusätzlich suizidpräventiv und als Basis für AD.", ev: 1 },
    { d: "sertralin", r: "adj", dos: "50 mg, meist 75–100 mg", why: "SSRI mit geringerem Switch-Risiko; nur zusätzlich zu Stabilisierer; STEP-BD: kein Zusatznutzen, aber kein Mehr-Switch (dort Paroxetin/Bupropion).", ev: 1 },
    { d: "bupropion", r: "adj", dos: "150–300 mg", why: "Switch-Risiko niedriger als Venlafaxin (K); nur mit Stabilisierer. Für bipolare Depression nicht zugelassen.", ev: 1, off: true },
    { d: "olanzapin", r: "a", dos: "5–20 mg", why: "S3 Grad 0; Olanzapin + Fluoxetin wirksamer als Olanzapin allein (USA-Kombi). Metabolik.", ev: 1, off: true },
    { d: "lurasidon", r: "int", dos: "—", why: "RCT positiv (20–120 mg), in DE nicht im Handel (Stand 2024), EU-Zulassung nur Schizophrenie.", ev: 2, off: true },
    { d: "tranylcypromin", r: "r", dos: "[?]", why: "Bei Nichtansprechen auf andere AD wirksam, Manie-Risiko erhöht (K).", ev: 1, off: true },
    { t: "EKT", r: "r", why: "Therapieresistenz, psychotische Depression, akute Suizidalität [?].", ev: 1 },
    { t: "Psychoedukation, KVT, IPSRT, Familienintervention", r: "nm", why: "Leichte Episoden zunächst mit Psychotherapie plus Stabilisierer behandeln (K).", ev: 2 }
  ],
  avoid: [
    { d: "amitriptylin", why: "TZA: höchstes Switch-Risiko; bei bipolarer Depression nicht anwenden (K)." },
    { d: "venlafaxin", why: "Switch-Risiko höher als SSRI/Bupropion (K)." },
    { t: "Antidepressiva-Monotherapie", why: "Wichtigster Risikofaktor für AD-induzierte Manie und Rapid Cycling; S3: keine klare Empfehlung (K)." },
    { d: "aripiprazol", why: "S3 rät von Akutbehandlung der bipolaren Depression ab (K)." },
    { d: "ziprasidon", why: "S3 rät ab (negative Studien, K)." },
    { d: "paroxetin", why: "Plazebokontrolliert negativ bei bipolarer Depression (K); ebenso Agomelatin." }
  ],
  lern: "Die bipolare Depression ist kein Spiegelbild der unipolaren: Klassische Antidepressiva helfen deutlich schlechter und können die Phasenfrequenz erhöhen. Quetiapin wirkt vermutlich über seinen Metaboliten Norquetiapin (Noradrenalin-Wiederaufnahmehemmung) plus 5-HT2A/H1-Blockade, ohne den Switch-Mechanismus der monoaminergen Vollaktivierung. Das Switch-Risiko steigt mit noradrenerger Last (TZA > Venlafaxin > SSRI/Bupropion) und ohne Stabilisierer. Lamotrigin stabilisiert eher die Talsohle als dass es akut hebt – deshalb gehört es in die Prophylaxe, nicht in die Notfallapotheke.",
  src: "S3 Bipolare Störungen 2019 (Grade via Benkert Kompendium 2021) · Benkert Kompendium 2021 · Thieme-Übersicht 2022 · Wirkstoffkarten",
  lg: "S3 Bipolare Störungen, AWMF 038-019, Langversion 2.1 (Update 2019, Stand 05/2020, verlängert); Empfehlungsteil nicht direkt gelesen, Grade sekundär aus Kompendium 2021"
});

E2S({
  id: "bip-proph",
  a: "bip",
  t: "Bipolare Störung – Phasenprophylaxe",
  syn: ["phasenprophylaxe", "rezidivprophylaxe bipolar", "erhaltungstherapie bipolar", "stimmungsstabilisierer", "mood stabilizer", "lithium", "lithiumspiegel", "bipolar langzeit", "rückfall bipolar", "rueckfall bipolar"],
  kern: [
    "Lithium 1. Wahl (S3), suizidpräventiv; Ziel 0,5–0,8 mmol/l, im Alter 0,4–0,6",
    "Was akut wirkte und vertragen wurde, oft weiterführen (Zulassung an Ansprechen gebunden)",
    "Überwiegend depressiv: Lamotrigin oder Quetiapin; manisch: Aripiprazol, Olanzapin, VPA",
    "Monotherapie vor Kombination; nach 2. Episode Prophylaxe meist unumgänglich",
    "Lithium nie abrupt absetzen: über Monate ausschleichen (Rebound-Manie)"
  ],
  pre: [
    "Episodenzahl und Polarität (überwiegend manisch oder depressiv), Rapid Cycling, weil die Wahl davon abhängt (K)",
    "Nierenfunktion (eGFR), TSH, Kalzium, EKG vor Lithium, weil GFR < 30 KI ist und Lithium Schilddrüse und Nebenschilddrüse schädigt",
    "Kinderwunsch/Verhütung: Valproat hochteratogen; Lithium 1. Trimenon dringend abraten (P)",
    "Komedikation: NSAR, ACE-Hemmer, Sartane, Diuretika heben Lithiumspiegel",
    "Adhärenz und Krankheitseinsicht, weil die meisten nach 1. Episode innerhalb weniger Monate abrupt absetzen (K)"
  ],
  steps: [
    { t: "Stufe 1 · Indikation", x: "Nach 2. Episode meist Langzeitprophylaxe; nach 1. schwerer Manie individuell (mittlere Remission nach 1. Episode ~4 Jahre, K). Psychoedukation und Frühwarnzeichenplan immer." },
    { t: "Stufe 2 · Substanzwahl", x: "Lithium 1. Wahl (wenn keine KI, v. a. Niere). Alternativ das in der Akutphase wirksame und vertragene Mittel: Quetiapin (wenn Remission darunter), Aripiprazol/Olanzapin (manische Prävention), Lamotrigin (überwiegend depressiv, Bipolar I), Valproat (nach Manie; Männer, Frauen nur mit Verhütungsprogramm)." },
    { t: "Stufe 3 · Einstellung", x: "Lithium: Spiegel nach ~1 Woche, Ziel 0,5–0,8 mmol/l (≥ 65 J. 0,4–0,6). Wirkung erst über Monate beurteilbar [?]." },
    { t: "Stufe 4 · Bei Durchbruchsepisoden", x: "Adhärenz und Spiegel prüfen. Dann Kombination Stabilisierer + AAP (Quetiapin oder Aripiprazol + Li/VPA additiv, K) oder Lithium + Lamotrigin." },
    { t: "Stufe 5 · Kontrollen", x: "Lithium: Spiegel, eGFR, TSH, Kalzium, Gewicht, Halsumfang regelmäßig (Intervalle laut K Tab. 2.4 nicht gelesen [?]); Spiegel sofort bei Fieber, Diarrhö, neuen NSAR/Diuretika/ACE-Hemmern. Valproat: Leber, Blutbild, Gerinnung, jährliche Verhütungsüberprüfung. AAP: Gewicht, HbA1c, Lipide." }
  ],
  opts: [
    { d: "lithium", r: "1", dos: "Spiegel 0,5–0,8 mmol/l (≥ 65 J. 0,4–0,6)", why: "S3 1. Wahl (Grad [?]); suizidprotektiv; bei wenigen Vorphasen und euphorischer Manie besonders gut. Schwächer bei Rapid Cycling und gemischten Phasen (P).", ev: 3 },
    { d: "lamotrigin", r: "a", dos: "100–200 mg nach Titration", why: "Zugelassen zur Prävention depressiver Episoden bei Bipolar I; einfache Handhabung bei leichterer Erkrankung ohne schwere Manien (K). Nicht antimanisch.", ev: 2 },
    { d: "quetiapin", r: "a", dos: "Dosis der Akutphase [?]", why: "S3: Monotherapie nur, wenn Remission unter Quetiapin und gut vertragen (K). Metabolik begrenzt Dauer.", ev: 2 },
    { d: "aripiprazol", r: "a", dos: "15 mg [?]; Depot Maintena [?]", why: "Prävention manischer Episoden, wenn akut angesprochen; 2-Jahres-Daten (K). Depot für bipolar nicht zugelassen.", ev: 2 },
    { d: "olanzapin", r: "a", dos: "5–20 mg", why: "Prävention manischer Episoden nach Ansprechen; vs. Lithium Vorteil bei wenigen Vorepisoden (K). Gewicht.", ev: 2 },
    { d: "valproat", r: "a", dos: "Spiegel 50–100 mg/l", why: "Nur Weiterbehandlung nach Manie zugelassen; Lithium unterlegen, aber besser verträglich (K). Verhütungsprogramm.", ev: 2 },
    { t: "Kombination Stabilisierer + AAP", r: "adj", why: "Bei Durchbruchsepisoden; Quetiapin oder Aripiprazol + Li/VPA additiv (K), insgesamt nicht gut belegt.", ev: 1 },
    { d: "carbamazepin", r: "r", dos: "[?]", why: "Zulassung nur bei Lithium-Versagen, Rapid Cycling unter Lithium oder Lithium-KI (K Tab. 2.1); Enzyminduktion.", ev: 1 },
    { t: "Psychoedukation, Frühwarnzeichen, Rhythmusstabilisierung (IPSRT), Familienintervention", r: "nm", why: "Senkt Rückfälle zusätzlich zur Pharmakotherapie [?].", ev: 2 }
  ],
  avoid: [
    { t: "Abruptes Absetzen von Lithium", why: "Rebound-Manien häufiger als im Spontanverlauf; über Monate ausschleichen (P)." },
    { t: "Valproat ohne Verhütungsprogramm", why: "Frauen im gebärfähigen Alter nur mit Programm; Männer: Verhütung bis 3 Monate nach Absetzen (RHB 2024)." },
    { t: "Antidepressiva-Dauertherapie ohne Stabilisierer", why: "Switch und Zyklusbeschleunigung; AD-Erhaltung nur bei depressivem Rückfall nach AD-Ende erwägen (K Box 7)." },
    { d: "nsar", why: "Heben Lithiumspiegel; wenn nötig Spiegelkontrolle." }
  ],
  lern: "Bipolare Störungen verlaufen episodisch mit Tendenz zur Beschleunigung: Jede Episode erleichtert die nächste (Kindling-Hypothese). Lithium ist der einzige Stabilisierer mit robustem antisuizidalem Effekt, wirkt aber besser gegen manische als gegen depressive Rückfälle. Lamotrigin schützt umgekehrt eher vor Depression. Die Zulassungen der AAP sind an früheres Ansprechen gebunden – die Akutwahl ist deshalb bereits eine Prophylaxe-Entscheidung.",
  src: "S3 Bipolare Störungen 2019 (via Benkert Kompendium 2021) · Benkert Kompendium 2021 · Pocket Guide 2021 · Thieme-Übersicht 2022 · Wirkstoffkarten",
  lg: "S3 Bipolare Störungen, AWMF 038-019, Langversion 2.1 (Update 2019, Stand 05/2020, verlängert); Empfehlungsteil nicht direkt gelesen, Grade sekundär aus Kompendium 2021"
});

E2S({
  id: "schiz-akut",
  a: "schiz",
  t: "Schizophrenie – Akuttherapie und Ersterkrankung",
  syn: ["schizophrenie", "psychose", "psychotisch", "erstmanifestation", "ersterkrankung", "erste episode", "fep", "wahn", "halluzinationen", "stimmen hören", "stimmen hoeren", "f20", "f23", "antipsychotikum wahl", "antipsychotika wechsel", "umstellung antipsychotikum"],
  kern: [
    "Wahl nach NW-Profil und Präferenz, nicht nach Wirkstärke (S3 2026, E33 stark)",
    "Ersterkrankung: niedrig starten, niedrige Zieldosis, Monotherapie",
    "Ansprechen nach 2–4 Wochen mit Skala prüfen (PANSS/BPRS/CGI; E28a stark)",
    "Kein Ansprechen trotz ausreichender Dosis: Spiegel, Adhärenz, Drogen prüfen, dann Wechsel",
    "Früher wirksames und vertragenes AP bei Rezidiv zuerst (K)"
  ],
  pre: [
    "Ersterkrankung: Labor (BB, Glukose, Leber, Niere, Elektrolyte, TSH), Drogenscreening, cMRT (S3 E8), weil organische und substanzinduzierte Psychosen auszuschließen sind",
    "EKG vor Beginn (S3 E16), weil viele AP die QTc verlängern",
    "Schwangerschaft ausschließen (S3 E16)",
    "Gewicht, Taille, RR, HbA1c/Glukose, Lipide als Ausgangswert, weil metabolische NW früh einsetzen",
    "Suizidalität, Fremdgefährdung, Katatonie (dann Lorazepam statt AP-Eskalation), Cannabis- und Stimulanzienkonsum"
  ],
  steps: [
    { t: "Stufe 1 · Start", x: "Monotherapie mit AAP nach NW-Profil und Präferenz (S3 E33, stark). Ohne weitere Kriterien Amisulprid, Olanzapin oder Risperidon (beste Evidenz, K). Ersterkrankte: niedrige Start- und Zieldosis (S3 E21). Aufschub von Tagen bis Wochen im psychosozialen Rahmen möglich (E34)." },
    { t: "Stufe 2 · Woche 2–4", x: "Ansprechen mit PANSS/BPRS oder CGI prüfen (E28a, stark). Bei Teilbesserung Dosis im zugelassenen Bereich optimieren; NW (Akathisie, EPS, Sedierung) aktiv erfragen." },
    { t: "Stufe 3 · Kein Ansprechen", x: "Bei CGI-I > 3 trotz ausreichender Dosis: Diagnose, Adhärenz, Substanzen, Komorbidität prüfen, TDM (E19/E27), dann Wechsel auf ein anderes AP (E28b). Umstellung überlappend (Kreuztitration); Zieldosis des neuen AP halten, Vor-AP langsam ausschleichen." },
    { t: "Stufe 4 · Zweites AP ohne Ansprechen", x: "Nach je 6 Wochen ausreichender Dosis mit 2 AP (davon mind. 1 AAP) < 20 % Besserung → Therapieresistenz (K) → Clozapin (siehe schiz-tr)." },
    { t: "Stufe 5 · Begleitend", x: "Psychoedukation mit Angehörigen (E57), KVTp ab Ersterkrankung (E58), Krisenplan. Erregung: oral vor parenteral, niedrigste wirksame Dosis (E87). Katatonie: Lorazepam (E88), bei perniziöser Katatonie EKT (E94)." }
  ],
  opts: [
    { d: "amisulprid", r: "1", dos: "400–800 mg/d (2 Gaben)", why: "Hohe Wirksamkeitsevidenz (K), keine CYP-Interaktionen; Prolaktin ↑↑, QTc, renal dosieren.", ev: 3 },
    { d: "risperidon", r: "1", dos: "Start 1–2 mg, Regel 4–6 mg, max. 16 mg", why: "Hohe Evidenz (K); Prolaktin, EPS dosisabhängig; Depot verfügbar.", ev: 3 },
    { d: "olanzapin", r: "1", dos: "Start 10 mg, 5–20 mg", why: "Hohe Evidenz (K); sedierend; stärkste Gewichtszunahme → bei jungen Ersterkrankten zurückhaltend.", ev: 3 },
    { d: "aripiprazol", r: "1", dos: "10–15 mg (Unruhe-Neigung 5 mg), max. 30 mg", why: "Metabolisch und prolaktinneutral, kaum sedierend; Akathisie. Gut bei Ersterkrankung mit Gewichtssorge.", ev: 2 },
    { d: "quetiapin", r: "a", dos: "300–750 mg nach Titration", why: "Kaum EPS/Prolaktin; sedierend, Metabolik, Orthostase.", ev: 2 },
    { d: "ziprasidon", r: "a", dos: "2 × 40 bis 2 × 80 mg mit Mahlzeit", why: "Metabolisch günstig; deutlichste QTc-Verlängerung, Einnahme mit ≥ 500 kcal.", ev: 2 },
    { d: "paliperidon", r: "a", dos: "3–6 mg morgens, max. 12 mg", why: "Renal eliminiert, kaum Interaktionen; Prolaktin; Brücke zum Depot.", ev: 2 },
    { d: "cariprazin", r: "a", dos: "1,5–6 mg", why: "Metabolisch günstig, bei prädominanter Negativsymptomatik (S3 E39a); verzögerte Wirkung und NW (Steady State ~4 Wo).", ev: 2 },
    { d: "haloperidol", r: "a", dos: "Ersterkrankte 2–4 mg, Mehrfach bis 10 mg, max. 20 mg", why: "Wirksam, metabolisch günstig; hohes EPS- und Spätdyskinesie-Risiko.", ev: 2 },
    { d: "lorazepam", r: "adj", dos: "kurz, bedarfsweise [?]", why: "Nur wenige Tage bei Agitation/Angst (K, Metaanalyse); bei Katatonie Mittel der Wahl (S3 E88).", ev: 1 },
    { d: "lurasidon", r: "int", dos: "—", why: "EU-zugelassen, in DE nicht im Handel (Stand 2024); nur Einzelimport.", ev: 2 },
    { t: "Psychoedukation (mit Angehörigen), KVTp, Metakognitives Training", r: "nm", why: "S3 2026 starke Empfehlungen (E57, E58/59, E64).", ev: 3 }
  ],
  avoid: [
    { t: "Antipsychotika-Kombination in der Akutphase", why: "Erst nach erfolglosen Monotherapien inkl. Clozapin (S3 E44b); > 2 AP sollte nicht angeboten werden (E44c)." },
    { t: "Hohe Startdosis bei Ersterkrankung", why: "Erhöhte NW-Empfindlichkeit, kein Wirkvorteil (S3 E21; K)." },
    { t: "Wechsel vor 2 Wochen ohne Dosis-/Spiegelprüfung", why: "Pseudoresistenz durch Unterdosierung, Nicht-Einnahme oder Induktoren (Rauchen, Carbamazepin) übersehen." },
    { t: "BZD länger als wenige Tage", why: "Metaanalyse ohne Nutzen für mittel-/langfristige Kombination (K)." }
  ],
  lern: "Antipsychotika wirken über D2-Blockade im mesolimbischen System; die Wirkung beginnt früh [?], deshalb verlangt die S3 die Prüfung nach 2–4 Wochen statt monatelangen Abwartens. Weil die Unterschiede in der Wirksamkeit zwischen den AP klein, die NW-Profile aber sehr verschieden sind (Gewicht, Prolaktin, QTc, EPS, Sedierung), entscheidet das NW-Profil. Ersterkrankte sprechen besser an und reagieren empfindlicher auf NW – deshalb niedrig dosieren. Die erste Erfahrung mit einem Antipsychotikum prägt vermutlich die spätere Adhärenz [?].",
  src: "S3 Schizophrenie 2026 (v5.0) · Benkert Kompendium 2021 · Pocket Guide 2021 · Wirkstoffkarten",
  lg: "S3 Schizophrenie, AWMF 038-009, Version 5.0 (Stand 13.06.2026, Kurzfassung 07/2026, Living Guideline)"
});

E2S({
  id: "schiz-tr",
  a: "schiz",
  t: "Therapieresistente Schizophrenie",
  syn: ["therapieresistenz", "behandlungsresistenz", "trs", "therapieresistente schizophrenie", "non-response", "nonresponse", "clozapin", "leponex", "pseudoresistenz", "ultraresistenz", "clozapin augmentation", "ekt schizophrenie"],
  kern: [
    "Resistenz = 2 AP je 6 Wo ausreichend dosiert, < 20 % Besserung, Adhärenz ≥ 80 % (K)",
    "Erst Pseudoresistenz ausschließen: Spiegel (TDM), Adhärenz, Drogen, Diagnose (S3 E27)",
    "Dann Clozapin-Monotherapie (S3 E41/E44a stark); Spiegel ≥ 350 ng/ml (E20)",
    "Clozapin ohne Erfolg nach ≥ 3 Monaten im Zielspiegel: 2. AP oder EKT dazu",
    "Nicht augmentieren mit Valproat, Lamotrigin, Carbamazepin (S3 E45 stark gegen)"
  ],
  pre: [
    "TDM des aktuellen AP, weil Unterdosierung, Nicht-Einnahme, Rauchen oder Induktoren die häufigsten Gründe der Scheinresistenz sind (K Box 12)",
    "Diagnose überprüfen: organische Ursache, affektive/schizoaffektive Störung, Autismus, Substanzpsychose (S3 E27)",
    "Komorbidität: Cannabis, Stimulanzien, Alkohol; Depression (CDSS); NW, die Symptome imitieren (Akathisie, Parkinsonoid als Negativsymptomatik)",
    "Vor Clozapin: ANC ≥ 1500/mm³, EKG, CRP, Troponin, Gewicht, HbA1c, Lipide, Anfallsanamnese, Stuhlgang",
    "Raucherstatus dokumentieren, weil Rauchstopp den Clozapinspiegel stark erhöht (CYP1A2)"
  ],
  steps: [
    { t: "Stufe 1 · Pseudoresistenz ausschließen", x: "Spiegel, Adhärenz (ggf. Depot-Versuch zur Sicherung), Drogenscreening, Diagnose- und Komorbiditätsprüfung (S3 E19/E27). Dosis im oberen zugelassenen Bereich für 6 Wochen sichern." },
    { t: "Stufe 2 · Clozapin", x: "Bei gesicherter Resistenz Clozapin-Monotherapie (S3 E41/E44a, stark). Start 12,5 mg, max. +25 mg/d, Ziel meist 100–450 mg, Spiegel ≥ 350 ng/ml (E20). Neues Blutbildschema seit 09/2025: nur ANC, Wo 1–18 wöchentlich, bis Jahr 1 monatlich, dann 12-wöchentlich. Myokarditis-Monitoring Wo 1–4." },
    { t: "Stufe 3 · Clozapin ausreichend lange beurteilen", x: "Ultra-Resistenz erst nach ≥ 3 Monaten Clozapin im Referenzbereich (K/S3). Vorher Spiegel bei Rauchänderung, Infekt, Interaktion kontrollieren." },
    { t: "Stufe 4 · Clozapin-Resistenz", x: "Kombination mit einem 2. AP (E44b): Aripiprazol (verträglich, bessert Metabolik) oder Amisulprid (RCT ohne signifikanten Vorteil). Oder EKT zur Augmentation (S3 E46, bedingt; 6–20 Sitzungen, K). Höchstens 2 AP (E44c)." },
    { t: "Stufe 5 · Clozapin nicht möglich", x: "Bei KI, Unverträglichkeit oder Ablehnung: Olanzapin oder Risperidon hochdosiert im Zulassungsbereich, ggf. Kombination zweier AP; EKT (K Tab. 3.8)." }
  ],
  opts: [
    { d: "clozapin", r: "1", dos: "12,5 mg Start; 100–450 mg; Spiegel ≥ 350 ng/ml", why: "S3 2026 stark (E41, E44a); einzige belegte Substanz bei Resistenz, zusätzlich antisuizidal (E96, off-label).", ev: 3 },
    { d: "aripiprazol", r: "adj", dos: "5–15 mg [?] zu Clozapin", why: "Bessert Negativsymptome und Metabolik unter Clozapin (K); wirksamkeitsgleich, aber verträglicher als Haloperidol-Augmentation.", ev: 1, off: true },
    { d: "amisulprid", r: "adj", dos: "400–800 mg [?] zu Clozapin", why: "Gängige Kombination ohne CYP-Interaktion; RCT (Barnes 2017) ohne signifikanten Vorteil (K).", ev: 1, off: true },
    { t: "EKT (Augmentation zu AP/Clozapin)", r: "adj", why: "S3 E46 bedingt („sollte“) bei eindeutiger Resistenz; Clozapin + EKT positiv in Metaanalyse (K); Erhaltungs-EKT erwägen.", ev: 2 },
    { d: "olanzapin", r: "a", dos: "bis 20 mg (akut kurzzeitig höher, K)", why: "Nach Clozapin nächste Wahl bei Resistenz (K Tab. 3.8), wenn Clozapin nicht möglich.", ev: 1 },
    { d: "risperidon", r: "a", dos: "4–6 mg, max. 16 mg", why: "Alternative bei Clozapin-KI (K Tab. 3.8).", ev: 1 },
    { t: "Metformin bei Clozapin-Gewichtszunahme", r: "adj", why: "S3 E54 stark (off-label) nach erfolgloser Lebensstilintervention; Topiramat 2. Wahl (K).", ev: 2, off: true },
    { t: "KVTp, kognitive Remediation, soziale Fertigkeiten", r: "nm", why: "S3 starke Empfehlungen (E59, E71a, E72/73), auch bei Persistenz.", ev: 3 }
  ],
  avoid: [
    { d: "valproat", why: "Augmentation zur Antipsychose: S3 E45 starke Empfehlung dagegen." },
    { d: "lamotrigin", why: "S3 E45 dagegen; zudem kann es Clozapinspiegel erhöhen (K)." },
    { d: "carbamazepin", why: "S3 E45 dagegen; induziert Clozapin-Abbau und ist agranulozytotisch." },
    { d: "lithium", why: "Augmentation bei Resistenz ohne Evidenz (K)." },
    { t: "Drei oder mehr Antipsychotika", why: "S3 E44c: sollte nicht angeboten werden." },
    { t: "Clozapin + Depot-AP", why: "Bei Agranulozytose nicht absetzbar." }
  ],
  lern: "Etwa 20–30 % sprechen auf das erste AP nicht an, bei Ersterkrankten 5–20 % (K). Ein Teil der Resistenz ist pharmakologisch: Hypothese: Bei manchen Patienten ist die Psychose weniger dopaminerg getrieben, sodass weitere D2-Blockade nichts bringt [?]. Clozapin wirkt mit schwacher D2-Bindung und breitem Rezeptorprofil (5-HT2A, D4, muskarinisch, glutamaterg) trotzdem ; ein früher Einsatz nach gesicherter Resistenz gilt als günstig [?]. Der häufigste Fehler ist die zu späte oder zu niedrig dosierte Clozapin-Gabe.",
  src: "S3 Schizophrenie 2026 (v5.0) · Benkert Kompendium 2021 · Karte clozapin (RHB 09/2025)",
  lg: "S3 Schizophrenie, AWMF 038-009, Version 5.0 (Stand 13.06.2026, Kurzfassung 07/2026, Living Guideline)"
});

E2S({
  id: "schiz-erhalt",
  a: "schiz",
  t: "Schizophrenie – Rezidivprophylaxe, Depot und Negativsymptomatik",
  syn: ["rezidivprophylaxe", "erhaltungstherapie", "depot", "lai", "long-acting", "depotspritze", "xeplion", "trevicta", "byannli", "abilify maintena", "risperdal consta", "absetzen antipsychotikum", "negativsymptomatik", "minussymptomatik", "antrieb schizophrenie", "cariprazin", "reagila"],
  kern: [
    "Erhaltungstherapie nach Erst- und Mehrfacherkrankung (S3 E35, stark); kontinuierlich (E22)",
    "Absetzen verdoppelt das Rückfallrisiko im 1. Jahr (27 % vs. 65 %, S3 Statement 2)",
    "Reduktion in 6–12-Wochen-Schritten; Absetzen nur mit Monitoring ≥ 2 Jahre (E24/E25)",
    "Depot als gleichwertige Alternative anbieten (E37), v. a. bei Adhärenzproblem/Sucht",
    "Negativsymptomatik: Amisulprid niedrig oder Cariprazin (E39a); starke D2-Blockade meiden"
  ],
  pre: [
    "Sekundäre Negativsymptomatik abgrenzen: Parkinsonoid, Sedierung, Depression (CDSS), Positivsymptome, Hospitalismus – weil diese anders behandelt werden",
    "Für Depot: orale Verträglichkeit und Wirksamkeit desselben Wirkstoffs belegt (S3 E38), Nierenfunktion vor Paliperidon",
    "Monitoring nach S3-Tabelle 22 (E55): Gewicht, Glukose/HbA1c, Lipide, RR, EKG, Prolaktin bei Symptomen",
    "Frühwarnzeichen und Krisenplan mit Patient und Angehörigen festlegen (E84a)",
    "CYP3A4-Komedikation vor Cariprazin prüfen (KI mit mittelstarken/starken Hemmern und Induktoren)"
  ],
  steps: [
    { t: "Stufe 1 · Nach Remission", x: "Wirksames AP kontinuierlich fortführen (E22/E35). Nach Ersterkrankung zumindest 1–2 Jahre kontinuierlich vorteilhaft (K); feste Mindestdauer in S3-Kurzfassung nicht gelesen [?]. Engmaschige Betreuung 2–3 Jahre (K)." },
    { t: "Stufe 2 · Dosis", x: "Niedrigste wirksame Dosis (E21); Reduktion schrittweise in 6- bis 12-Wochen-Intervallen nach Präferenz (E24). Amisulprid in Prophylaxe ≥ 400 mg." },
    { t: "Stufe 3 · Depot erwägen", x: "Bei Präferenz, unsicherer Adhärenz, Substanzgebrauch, hohem Rückfallrisiko (K; E37). Wahl nach NW-Profil und Intervall (E38): Aripiprazol monatlich/2-monatlich, Paliperidon monatlich → 3-monatlich → 6-monatlich, Risperidon 2-wöchentlich, Haloperidol-Decanoat 4-wöchentlich." },
    { t: "Stufe 4 · Absetzwunsch", x: "Bei stabiler Remission möglich, aber mit regelmäßigem Symptom-Monitoring über ≥ 2 Jahre (E25) und Krisenplan; Rückfallrisiko offen besprechen (Statement 2)." },
    { t: "Stufe 5 · Prädominante Negativsymptomatik", x: "Umstellen auf Amisulprid 50–300 mg oder Cariprazin 1,5–6 mg (E39a, bedingt); Beurteilung Cariprazin erst nach ~4 Wochen Steady State. Ggf. AD-Augmentation (E40, off-label). Training sozialer Fertigkeiten (E71a), kognitive Remediation." }
  ],
  opts: [
    { d: "aripiprazol", r: "1", dos: "Depot 400 mg/Monat (+14 d oral) oder 960 mg/2 Mon.", why: "Metabolisch günstig; Depot nach oraler Stabilisierung (S3 E38).", ev: 2 },
    { d: "paliperidon", r: "1", dos: "Xeplion 150 mg Tag 1, 100 mg Tag 8, dann 75 mg/4 Wo (25–150)", why: "Später 3- (Trevicta) oder 6-monatlich (Byannli); renal dosieren; Prolaktin.", ev: 2 },
    { d: "risperidon", r: "a", dos: "Consta 25–50 mg/2 Wo; ≥ 3 Wo oral überlappen", why: "Depot mit oraler Überlappung; Prolaktin.", ev: 2 },
    { d: "haloperidol", r: "a", dos: "Decanoat 50–200 mg/4 Wo", why: "Wenn oral auf Haloperidol stabil; EPS/Spätdyskinesien.", ev: 2 },
    { d: "olanzapin", r: "r", dos: "Pamoat 150–405 mg nach oraler Dosis (K)", why: "Nur tief gluteal durch geschultes Personal; Post-Injektions-Syndrom erfordert Nachbeobachtung [?]; Gewicht.", ev: 2 },
    { d: "amisulprid", r: "1", dos: "Negativsymptomatik 50–300 mg; Prophylaxe ≥ 400 mg", why: "S3 E39a (bedingt) für prädominante Negativsymptomatik in niedriger Dosis; zugelassen für primäre Negativsymptomatik.", ev: 2 },
    { d: "cariprazin", r: "1", dos: "Start 1,5 mg, 1,5–6 mg", why: "S3 E39a (bedingt); RCT vs. Risperidon bei prädominanter Negativsymptomatik überlegen [?]; G-BA geringer Zusatznutzen.", ev: 2 },
    { t: "Antidepressivum-Augmentation bei Negativsymptomatik", r: "adj", why: "S3 E40 (bedingt, off-label); Interaktionen beachten (z. B. Fluvoxamin hebt Clozapinspiegel).", ev: 1, off: true },
    { t: "Training sozialer Fertigkeiten, kognitive Remediation, Psychoedukation, Krisenplan", r: "nm", why: "S3 starke Empfehlungen (E71a, E72/73, E57, E84a).", ev: 3 }
  ],
  avoid: [
    { t: "Intermittierende Bedarfsstrategie statt Erhaltung", why: "S3 E22: kontinuierliche Strategie (stark)." },
    { t: "Abruptes Absetzen", why: "Rückfall (Statement 2) und Absetzphänomene; Reduktion in 6–12-Wochen-Schritten (E24)." },
    { t: "Hochpotente KAP / starke D2-Blockade bei Negativsymptomatik", why: "S3 E39b: sekundäre Negativsymptomatik durch Parkinsonoid (K Tab. 3.8)." },
    { t: "Depot ohne orale Vortestung", why: "S3 E38; NW über Wochen nicht rückholbar." },
    { t: "Clozapin + Depot", why: "Bei Agranulozytose Depot nicht entfernbar." }
  ],
  lern: "Die Rezidivprophylaxe ist der wirksamste Einzelfaktor für den Langzeitverlauf: Jeder Rückfall kostet Funktionsniveau und erhöht das Risiko späterer Therapieresistenz. Depots lösen das Adhärenzproblem pharmakokinetisch und machen einen Rückfall bei Absetzen sichtbar statt unbemerkt. Negativsymptome sind teils primär (präfrontale Dopamin-Unterfunktion) und teils sekundär (Parkinsonoid, Depression, Positivsymptome). D2-Partialagonisten mit D3-Präferenz (Cariprazin) und niedrig dosiertes Amisulprid (präsynaptische D2/D3-Blockade steigert die Dopaminfreisetzung) zielen auf den primären Anteil.",
  src: "S3 Schizophrenie 2026 (v5.0) · Benkert Kompendium 2021 · Pocket Guide 2021 · Wirkstoffkarten",
  lg: "S3 Schizophrenie, AWMF 038-009, Version 5.0 (Stand 13.06.2026, Kurzfassung 07/2026, Living Guideline)"
});

E2S({
  id: "bps",
  a: "bps",
  t: "Borderline-Persönlichkeitsstörung – Pharmakotherapie",
  syn: ["borderline", "bps", "eips", "emotional instabile persönlichkeitsstörung", "emotional instabile persoenlichkeitsstoerung", "f60.3", "f60.31", "dbt", "selbstverletzung", "svv", "ritzen", "affektive instabilität", "affektive instabilitaet", "impulsivität", "impulsivitaet", "persönlichkeitsstörung medikamente", "persoenlichkeitsstoerung medikamente"],
  kern: [
    "Psychotherapie (DBT, MBT u. a.) ist die Behandlung; Medikation nie primär (S3 E18, A)",
    "Keine Substanz für BPS zugelassen; alles off-label, symptombezogen und befristet (E22, 0)",
    "Polypharmazie vermeiden/abbauen (E20, A); Krisenmedikation nach der Krise absetzen (E25, A)",
    "Kein BZD/Z-Substanz (E26, B); potenziell letale Mengen begrenzen (E27, A)",
    "Komorbidität (Depression, PTBS, ADHS, Sucht) nach eigener Leitlinie behandeln (E21, A)"
  ],
  pre: [
    "Medikamentenliste durchgehen: Was wurde wann und wofür angesetzt, mit welchem Effekt? Weil Polypharmazie bei BPS häufig ist und ohne Nutzenbeleg bleibt (E20)",
    "Komorbide Störung mit eigenständiger Indikation sichern (Major Depression, PTBS, ADHS, Bipolar, Essstörung, Sucht), weil nur sie eine leitliniengerechte Medikation begründet (E21)",
    "Abgrenzung bipolare Störung (anhaltende Episoden über Tage vs. Stunden-Wechsel) und ADHS, weil sich die Pharmakotherapie grundlegend unterscheidet (K)",
    "Suizidalität, Intoxikationsrisiko, Mengen bei Entlassung (E27)",
    "Substanzkonsum: > 50 % entwickeln im Verlauf BZD- oder Alkoholmissbrauch (K)",
    "Für Akutanspannung auf der Station: Karte sp-bps (Skills zuerst, Bedarf ohne BZD)"
  ],
  steps: [
    { t: "Stufe 1 · Grundsatz", x: "Störungsspezifische Psychotherapie (auf der DBT-Station: DBT mit Skills-Training). Medikamente sollen sie nicht ersetzen (E19) und Psychotherapie nicht routinemäßig ergänzen (E28). Wirkung auf Selbstwirksamkeit und Beziehung mitdenken." },
    { t: "Stufe 2 · Entrümpeln", x: "Bestehende Medikation ohne klare Indikation und Effekt schrittweise reduzieren (E20); BZD langsam ausschleichen. Pharmakotherapie fachärztlich führen und mit allen Behandlern abstimmen (E23)." },
    { t: "Stufe 3 · Zielsymptom definieren", x: "Wenn Psychotherapie allein nicht reicht: ein klar umschriebenes Zielsymptom benennen (z. B. Impulsivität/Ärger, kognitiv-perzeptuelle Symptome, affektive Instabilität), eine Substanz, Dauer festlegen (z. B. 6–12 Wochen [?]), Effekt mit Skala oder Tagebuchkarte messen (E22)." },
    { t: "Stufe 4 · Krise", x: "Krisenmedikation kann gegeben werden (E24, 0) – sedierende AP oder Antihistaminika statt BZD (siehe sp-bps); nach Abklingen der Krise absetzen (E25, A)." },
    { t: "Stufe 5 · Überprüfung", x: "Ohne messbaren Nutzen absetzen statt eskalieren oder kombinieren. Bei Entlassung Mengen begrenzen (E27)." }
  ],
  opts: [
    { t: "DBT (Skills-Training, Einzeltherapie, Telefoncoaching), MBT; alternativ Schematherapie, TFP, STEPPS", r: "nm", why: "S3 2022: DBT/MBT bei Fokus Selbstverletzung und Suizidalität; Behandlung i. d. R. ambulant, stationär für Krisen oder strukturierte Programme.", ev: 3 },
    { d: "aripiprazol", r: "a", dos: "10–15 mg", why: "Beste Datenlage unter den AP (Cochrane, 18-Monats-Studie): Impulsivität/Ärger, kognitiv-perzeptuell, affektiv (K Tab. 11.2); günstiges NW-Profil, Akathisie.", ev: 1, off: true },
    { d: "quetiapin", r: "a", dos: "150 mg (300 mg nicht besser)", why: "Eine RCT (Black 2014): 150 mg wirksam, 300 mg nicht; Sedierung, Gewicht, Missbrauch (K).", ev: 1, off: true },
    { d: "olanzapin", r: "r", dos: "5–10 mg", why: "Wirksam bei Ärger/Aggression, aber Gewicht, metabolisches Syndrom, u. U. mehr Suizidalität/Selbstverletzung (K).", ev: 1, off: true },
    { d: "valproat", r: "r", dos: "500–2000 mg nach Spiegel", why: "Affektive Instabilität/Impulsivität, kleine Studien; mit Omega-3 besser als allein (K). Bei Frauen im gebärfähigen Alter praktisch nicht vertretbar (Verhütungsprogramm).", ev: 1, off: true },
    { t: "Topiramat 150–300 mg", r: "r", why: "Affektive Instabilität, Impulsivität, Ärger; Gewichtsabnahme (K Tab. 11.2); kognitive NW [?].", ev: 1, off: true },
    { t: "Omega-3-Fettsäuren 1000–1200 mg", r: "adj", why: "Impulsivität, Ärger; günstiges NW-Profil (K Tab. 11.2).", ev: 1, off: true },
    { d: "sertralin", r: "adj", dos: "50–200 mg", why: "SSRI nur bei eigenständiger Indikation (Major Depression, Angst, Zwang), nicht für BPS-Kernsymptome (K; S3 E21).", ev: 1 },
    { d: "clozapin", r: "r", dos: "niedrig [?]", why: "Nur schwerste Verläufe mit anhaltender Selbstgefährdung; Fallserien (sp-bps); Blutbildschema 09/2025.", ev: 0, off: true }
  ],
  avoid: [
    { t: "Benzodiazepine und Z-Substanzen", why: "Abhängigkeitspotenzial (S3 E26, B), Enthemmung, Hemmung des Skill-Lernens; > 50 % BZD-/Alkoholmissbrauch im Verlauf (K)." },
    { d: "lamotrigin", why: "Große RCT (Crawford 2018, n = 276) ohne Wirkung auf Gesamt- oder Einzelsymptomatik (K)." },
    { d: "lithium", why: "Keine sichere Wirksamkeit; Toxizität bei Überdosis (K; S3 E27)." },
    { d: "amitriptylin", why: "TZA: in Überdosis letal (S3 E27; K: „Cave Toxizität“)." },
    { t: "Polypharmazie, Dauer-Bedarf ohne Zielsymptom", why: "S3 E20 (A): vermeiden/reduzieren; Kombinationen kaum untersucht und eher ungünstig (K)." },
    { t: "Stimulanzien ohne gesicherte ADHS", why: "Medikinet adult nennt BPS formal als KI; nur bei gesicherter komorbider ADHS mit dokumentierter Abwägung (siehe adhs-komorb)." }
  ],
  lern: "Die Kernprobleme der BPS – Emotionsdysregulation, Identitätsstörung, Beziehungsmuster – sind gelernte und lernbare Regulationsdefizite auf dem Boden einer biologischen Vulnerabilität. Medikamente dämpfen einzelne Dimensionen (Impulsivität, Ärger, quasi-psychotisches Erleben) mit geringen bis mittleren Effekten, erreichen aber innere Leere, Identität und Dissoziation kaum und können sie verschlechtern (K). In der DBT-Logik ist jede Tablette auch eine Botschaft: Wer Anspannung medikamentös löst, lernt nicht, dass sie auch ohne Substanz abklingt. Deshalb gilt: befristet, ein Zielsymptom, messen, wieder absetzen.",
  src: "S3 Borderline-Persönlichkeitsstörung 2022 · Benkert Kompendium 2021 (Kap. 11.4.1, Tab. 11.2) · Karten sp-bps",
  lg: "S3 Borderline-Persönlichkeitsstörungen, AWMF 038-015, Version 1.0, Stand 14.11.2022 (Gültigkeitsstatus 2026 unklar [?])"
});

E2S({
  id: "adhs-erw",
  a: "adhs",
  t: "ADHS im Erwachsenenalter – Stufenplan",
  syn: ["adhs", "ads", "adhd", "aufmerksamkeitsdefizit", "hyperaktivität", "hyperaktivitaet", "f90", "f90.0", "konzentration", "methylphenidat", "ritalin", "medikinet", "elvanse", "lisdexamfetamin", "atomoxetin", "stimulanzien", "btm", "auslassversuch", "titration adhs"],
  kern: [
    "Diagnose sichern: Kindheitsbeginn, strukturiertes Interview, Fremdanamnese (S3 1.1.3/1.1.4 A)",
    "Psychoedukation immer; mittel/schwer Pharmakotherapie, meist mit KVT kombiniert",
    "1. Wahl Stimulans: MPH retard (Start 10 mg, +10 mg/Wo) oder Lisdexamfetamin (30 → +20 mg/Wo)",
    "Vorher RR, Puls, kardiale Eigen-/Familienanamnese, Gewicht, EKG (K); dann alle 3 Monate",
    "Atomoxetin bei Sucht, Angst, Tics oder Stimulanzien-Versagen; jährlicher Auslassversuch"
  ],
  pre: [
    "Kindheitsbeginn (vor 12 J.) und situationsübergreifende Beeinträchtigung belegen; FI Medikinet/Ritalin adult, Elvanse Adult und Atomoxetin verlangen rückblickend bestätigte Kindheits-ADHS",
    "Differenzialdiagnosen: Depression, Bipolar, Angst, BPS, Sucht, Schlafstörung/Schlafapnoe, Schilddrüse, Medikamente (S3 1.1.9 A)",
    "Kardiovaskulär: RR, Puls, Synkopen, Herzerkrankung, plötzlicher Herztod in der Familie; EKG vor Beginn (K Box 3), weil HKE und Hypertonie KI sind",
    "Substanzkonsum und Weitergabe-Risiko erfragen, Drogenscreening bei Verdacht (K Box 4)",
    "Glaukom, Hyperthyreose, Phäochromozytom, MAO-Hemmer in den letzten 14 Tagen (KI aller Stimulanzien)",
    "Schwangerschaft/Verhütung klären"
  ],
  steps: [
    { t: "Stufe 1 · Diagnostik und Psychoedukation", x: "Strukturiertes Interview (z. B. DIVA [?]), Skalen, Fremdanamnese, körperlicher und neurologischer Befund (S3 1.1.3 A). Psychoedukation für alle (1.3.4.3 A). Partizipative Entscheidung (1.2.1 A)." },
    { t: "Stufe 2 · Indikation", x: "Leicht: psychosozial. Mittelgradig: psychosozial, medikamentös oder kombiniert. Schwer: primär Pharmakotherapie, in der Regel kombiniert (S3 KF 2025, 1.2.2 A). K/S3 2018: bei Erwachsenen unabhängig vom Schweregrad initial medikamentös." },
    { t: "Stufe 3 · Stimulans titrieren", x: "MPH retard (Medikinet adult mit Mahlzeit, Ritalin adult, Concerta): Start 10 mg, wöchentlich +10 mg, max. 80 mg (Concerta 72 mg). Alternativ Lisdexamfetamin: 30 mg morgens, wöchentlich +20 mg, max. 70 mg. Ziel: niedrigste Dosis mit klarer Funktionsbesserung; Effekt jeder Stufe nach wenigen Tagen beurteilbar (MPH wirkt nach ~30 min, K)." },
    { t: "Stufe 4 · Nach 4–6 Wochen ohne ausreichenden Effekt bei Maximaldosis [?]", x: "Auf das andere Stimulans wechseln (MPH ↔ LDX). Bei Unverträglichkeit oder Komorbidität Atomoxetin 40 mg ≥ 7 Tage, dann 80 mg (max. 100 mg); Wirkung erst nach 8–10 Wochen beurteilen. Danach off-label: Guanfacin, Bupropion (3. Wahl). Kombination Stimulans + Nichtstimulans möglich (K)." },
    { t: "Stufe 5 · Erhaltung und Kontrollen", x: "RR, Puls bei jeder Dosisänderung und mind. alle 3 Monate; Gewicht, Schlaf, Stimmung, Tics (K Box 3). Mindestens jährlich kontrollierter Auslassversuch (K). BtM-Rezept: Höchstmenge MPH 2400 mg, LDX 2100 mg/30 Tage. KVT bei Restsymptomen unter Medikation (S3 1.3.4.2 B, stark)." }
  ],
  opts: [
    { d: "methylphenidat", r: "1", dos: "Start 10 mg, +10 mg/Wo, max. 80 mg (Concerta 72 mg)", why: "1. Wahl, meiste Erfahrung, NW-ärmer als Amfetamin (K Box 2); Retardpräparate für Erwachsene zugelassen; BtM.", ev: 3 },
    { d: "lisdexamfetamin", r: "1", dos: "30 mg, +20 mg/Wo, max. 70 mg", why: "1. Wahl (K Box 2); höchste Effektstärke (Amfetamin, Cortese 2018), Wirkdauer bis 14 h, Prodrug mit geringerem Missbrauchspotenzial; stärkere Appetitminderung.", ev: 3 },
    { d: "atomoxetin", r: "a", dos: "40 mg ≥ 7 Tage, dann 80 mg, max. 100 mg", why: "Zugelassen; kein BtM; bevorzugt bei Sucht, Angst, Tics, 24-h-Wirkung (K). Wirklatenz 8–10 Wochen; CYP2D6.", ev: 3 },
    { d: "guanfacin", r: "r", dos: "Start 1 mg, +1 mg/Wo, 0,05–0,12 mg/kg", why: "Für Erwachsene nicht zugelassen; FI: Sicherheit nicht erwiesen. Kein Missbrauchspotenzial; Hypotonie, Bradykardie, Rebound.", ev: 1, off: true },
    { d: "bupropion", r: "r", dos: "150–300 mg", why: "Noradrenerge AD 3. Wahl, Bupropion am wirksamsten (K); sinnvoll bei komorbider Depression oder Rauchen. Krampfschwelle.", ev: 1, off: true },
    { t: "Psychoedukation; KVT (Gruppe oder Einzel); Achtsamkeit; Coaching", r: "nm", why: "S3 KF 2025: Psychoedukation 1.3.4.3 A; Psychotherapie bei Restsymptomen 1.3.4.2 B (stark, Evidenz moderat); Achtsamkeit große Effekte (K).", ev: 2 }
  ],
  avoid: [
    { t: "Unretardiertes MPH als Dauertherapie bei Missbrauchsrisiko", why: "Mehrfachgabe erhöht Missbrauch; Retard senkt das Risiko (K Box 4)." },
    { t: "Stimulanzien + MAO-Hemmer (Tranylcypromin) oder < 14 Tage danach", why: "KI wegen hypertensiver Krise (FI)." },
    { t: "Stimulanzien ohne kardiovaskuläre Abklärung", why: "Symptomatische HKE, mittel-/schwere Hypertonie sind KI (FI)." },
    { t: "Diagnose nur nach Selbstfragebogen", why: "Screening ersetzt kein strukturiertes Interview (S3 1.1.4 A)." },
    { t: "Abendliche/Nachmittagseinnahme", why: "Schlafstörung (FI LDX); Wirkdauer beachten." }
  ],
  lern: "ADHS ist überwiegend genetisch bedingt (Heritabilität 70–80 %) mit veränderter dopaminerger und noradrenerger Signalübertragung im präfrontal-striatalen Netzwerk (K). Stimulanzien blockieren den Dopamintransporter (MPH) bzw. setzen Dopamin frei (Amfetamin) und erhöhen so das Signal-Rausch-Verhältnis präfrontal; die Wirkung korreliert mit der DAT-Besetzung (K). Atomoxetin hemmt den Noradrenalintransporter und hebt präfrontal auch Dopamin – ohne striatale Belohnungsaktivierung, daher kein Missbrauchspotenzial. Medikamente verbessern Symptome; Alltagsfunktion entsteht erst, wenn das Mehr an Steuerbarkeit in Strategien übersetzt wird – deshalb Psychoedukation und KVT.",
  src: "S3 ADHS 2018 (via Benkert Kompendium 2021) · S3 ADHS Fassung KF 05/2025 (Kap. 1.1–1.3) · Benkert Kompendium 2021 Kap. 10 · Wirkstoffkarten (FI 2023–2026)",
  lg: "S3 ADHS, AWMF 028-045: Fassung 2018 (abgelaufen, Pharmakotherapie-Kapitel nicht direkt gelesen) und Fassung „KF“ 05/2025, Version 2.0 (vermutlich Konsultationsfassung [?]; Kap. 1.1–1.3 gelesen)"
});

E2S({
  id: "adhs-komorb",
  a: "adhs",
  t: "ADHS mit Komorbidität (Sucht, BPS, Bipolar, Depression/Angst, Tics)",
  syn: ["adhs sucht", "adhs komorbidität", "adhs komorbiditaet", "adhs borderline", "adhs bipolar", "adhs depression", "adhs angst", "adhs tics", "tourette", "adhs cannabis", "adhs kokain", "adhs alkohol", "stimulanzien missbrauch", "missbrauch methylphenidat", "diversion", "f90 f60.3"],
  kern: [
    "Zuerst Akutes (Psychose, Manie, schwere Depression, Suizidalität, Entzug), dann ADHS",
    "Sucht: Atomoxetin bevorzugt; Stimulans retard/Prodrug, wenn ADHS die Sucht unterhält, mit KVT",
    "Missbrauchsschutz: Retard oder LDX, kleine Mengen, Drogenscreening, BtM-Rezept-Kontrolle",
    "BPS: komorbide ADHS behandeln (S3 BPS E21); Medikinet adult nennt BPS formal als KI",
    "Tics/Angst: Atomoxetin 1. Wahl; Bipolar: erst stabilisieren, Stimulans nur unter Stabilisierer"
  ],
  pre: [
    "Zeitachse: Begann die ADHS-Symptomatik vor dem Substanzkonsum, der BPS-Symptomatik, der ersten affektiven Episode? Weil Überlappung (Impulsivität, Unruhe, Konzentration) Fehldiagnosen erzeugt (S3 1.1.9 A)",
    "Aktueller Konsum: Urin-Drogenscreening, Alkohol; ADHS-Diagnostik möglichst nicht unter Intoxikation oder Entzug [?]",
    "Bipolar: (Hypo-)Manien, Mischzustände, Familienanamnese, weil Stimulanzien bei nicht gut kontrollierter Bipolar-I-Störung KI sind (FI Medikinet adult)",
    "Psychose, Manie, schwere Depression, Suizidneigung: KI für MPH laut FI",
    "Tics und Angst vor Beginn dokumentieren, weil Stimulanzien Tics verstärken oder auslösen können (K)",
    "Kardiovaskulärer Status wie bei adhs-erw; Kokain/Amfetamin-Beikonsum erhöht das kardiale Risiko [?]"
  ],
  steps: [
    { t: "Stufe 1 · Akutes zuerst", x: "Manie, Psychose, schwere Depression mit Suizidalität, Entzug oder Intoxikation zuerst nach eigener Leitlinie behandeln (S3 ADHS 1.1.10 A; KI-Liste FI MPH). ADHS-Behandlung planen, wenn stabil." },
    { t: "Stufe 2 · Sucht", x: "Suchttherapie (KVT, Entzug/Entwöhnung) ist Basis. Pharmakologisch Atomoxetin bevorzugt (kein BtM, K) oder Guanfacin/AD. MPH retard (mit KVT) erwägen, wenn die ADHS die Sucht eindeutig unterhält (K); LDX als Prodrug mit geringerem Missbrauchspotenzial. Engmaschig: Drogenscreening, kleine Verordnungsmengen, Pillen zählen [?]." },
    { t: "Stufe 3 · BPS (DBT-Station)", x: "DBT als Basis; komorbide ADHS nach ADHS-Leitlinie mitbehandeln (S3 BPS E21, S3 ADHS 1.1.10 A). Stimulans nur mit gesicherter ADHS und dokumentierter Abwägung (Medikinet adult: BPS als KI; LDX- und Atomoxetin-FI ohne BPS-KI laut FI). Atomoxetin bei Suizidalität: engmaschig (Warnhinweis Suizidgedanken)." },
    { t: "Stufe 4 · Bipolar", x: "Erst Stimmungsstabilisierung (Lithium, Valproat, AAP; siehe bip-proph). Stimulans dann vorsichtig niedrig, nur unter Stabilisierer und mit Frühwarnzeichenplan [?]; bei Hypomanie-Zeichen absetzen." },
    { t: "Stufe 5 · Depression/Angst, Tics", x: "Schwere Depression zuerst behandeln. Angst und Tics: Atomoxetin 1. Wahl (K). Bupropion bei Depression + ADHS + Rauchen (off-label für ADHS). Wenn Stimulans bei Tics unverzichtbar: Tics spezifisch mitbehandeln (K). Atomoxetin + Paroxetin/Fluoxetin: CYP2D6 → Atomoxetin-Spiegel ↑." }
  ],
  opts: [
    { d: "atomoxetin", r: "1", dos: "40 mg → 80 mg, max. 100 mg", why: "Kein Missbrauchspotenzial, kein BtM; Mittel der Wahl bei Sucht, Angst, Tics (K); Latenz 8–10 Wochen.", ev: 2 },
    { d: "methylphenidat", r: "a", dos: "retard, Titration wie adhs-erw", why: "Bei Sucht erwägen, wenn ADHS die Sucht unterhält, mit KVT und Drogenscreening (K Box 4); behandelte ADHS senkt Suchtprävalenz. Formale KI: BPS, Psychose, Manie, schwere Depression.", ev: 1 },
    { d: "lisdexamfetamin", r: "a", dos: "30–70 mg", why: "Prodrug: sanftes An-/Abfluten, geringeres Missbrauchspotenzial als freies Amfetamin, aber nicht null (K). Bekannte Sucht relative KI (K).", ev: 1 },
    { d: "guanfacin", r: "r", dos: "1 mg, +1 mg/Wo", why: "Kein Suchtpotenzial (K); bei Sucht als Option (K Box 4); Erwachsene off-label.", ev: 1, off: true },
    { d: "bupropion", r: "a", dos: "150–300 mg", why: "Depression + ADHS (+ Rauchen); 3. Wahl bei ADHS (K). KI bei Anfällen, Essstörung, abruptem Alkohol-/BZD-Entzug.", ev: 1, off: true },
    { d: "lithium", r: "1", dos: "nach Spiegel (siehe bip-proph)", why: "Bei ADHS + Bipolar zuerst stabilisieren; Stimulans erst danach [?].", ev: 1 },
    { t: "Integrierte Behandlung: KVT/Suchttherapie bzw. DBT plus ADHS-Psychoedukation", r: "nm", why: "S3 ADHS KF 2025 1.1.10 A: Komorbidität abklären und nach eigener Leitlinie behandeln; K: Sucht mit KVT ± Atomoxetin/Guanfacin/AD.", ev: 2 }
  ],
  avoid: [
    { t: "Unretardiertes MPH oder freies Amfetamin bei aktiver Sucht", why: "Kurze HWZ → Mehrfachgabe, Missbrauch, Weitergabe (K Box 4)." },
    { t: "Stimulanzien bei akuter Manie, Psychose, schwerer Depression mit Suizidalität", why: "KI laut FI MPH." },
    { t: "Benzodiazepine als Dauermedikation", why: "Abhängigkeit, v. a. bei Sucht und BPS (S3 BPS E26)." },
    { t: "Atomoxetin + starke CYP2D6-Hemmer ohne Dosisanpassung", why: "Paroxetin, Fluoxetin, Bupropion hemmen CYP2D6 → Atomoxetin-Spiegel mehrfach ↑." },
    { t: "Stimulans + MAO-Hemmer", why: "KI (14 Tage Abstand)." }
  ],
  lern: "ADHS, Sucht, BPS und bipolare Störung teilen Impulsivität und Emotionsdysregulation – daher hohe Komorbidität und hohe Fehldiagnoserate. Unbehandelte ADHS ist ein Risikofaktor für Sucht; Stimulanzien-behandelte Patienten haben eine geringere Suchtprävalenz (K Box 4), vermutlich weil Selbstmedikation entfällt. Das Missbrauchspotenzial hängt von der Anflutungsgeschwindigkeit am Dopamintransporter ab: schnelles Anfluten (unretardiert, nasal, i. v.) wirkt belohnend, langsames (Retard, Prodrug) kaum. Bei bipolarer Störung kann jede monoaminerge Aktivierung eine Manie anstoßen – Stabilisierung geht vor.",
  src: "S3 ADHS KF 2025 (Kap. 1.1) · S3 ADHS 2018 (via Kompendium) · S3 BPS 2022 · Benkert Kompendium 2021 Kap. 10 · Wirkstoffkarten, bip-proph",
  lg: "S3 ADHS, AWMF 028-045, Fassung „KF“ 05/2025, Version 2.0 (vermutlich Konsultationsfassung [?]; Kap. 1.6 Substanzstörungen nicht gelesen) · S3 BPS 2022"
});

})();
