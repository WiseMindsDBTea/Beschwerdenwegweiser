/* Teil 3: Kurz-Einträge für den Interaktions-Check (volle Karte folgt in Etappe 2/3)
   und häufige somatische Komedikation. stub:true = nur Kern + Tags. */
var D = window.D = window.D || {};
function S(id, o){ o.stub = true; D[id] = o; }

/* Antidepressiva */
S("sertralin",{n:"Sertralin",b:["Zoloft"],k:"SSRI",g:"Antidepressiva",kern:["SSRI der Wahl bei Herz- und Schwangerschaftsfragen","Schwacher bis mittlerer 2D6-Hemmer (dosisabhängig)"],tg:{i:{"2D6":"schwach"},se:3,bl:1,na:1},src:"FI · Embryotox"});
S("citalopram",{n:"Citalopram",b:["Cipramil"],k:"SSRI",g:"Antidepressiva",kern:["Dosisabhängige QT-Verlängerung: max. 40 mg, ≥ 65 J. max. 20 mg","CYP2C19-Substrat"],tg:{s:["2C19","3A4"],qt:2,se:3,bl:1,na:1},src:"FI · BfArM-Rote-Hand 2011"});
S("escitalopram",{n:"Escitalopram",b:["Cipralex"],k:"SSRI",g:"Antidepressiva",kern:["QT dosisabhängig: max. 20 mg, ≥ 65 J. max. 10 mg","CYP2C19-Substrat"],tg:{s:["2C19"],qt:1,se:3,bl:1,na:1},src:"FI"});
S("fluoxetin",{n:"Fluoxetin",b:["Fluctin"],k:"SSRI",g:"Antidepressiva",kern:["Starker 2D6-Hemmer, sehr lange HWZ (Norfluoxetin)","Wechsel auf MAO-Hemmer erst nach 5 Wochen"],tg:{s:["2D6"],i:{"2D6":"stark","2C19":"mittel"},se:3,bl:1,na:1,qt:1},src:"FI"});
S("paroxetin",{n:"Paroxetin",b:["Seroxat"],k:"SSRI",g:"Antidepressiva",kern:["Starker 2D6-Hemmer, anticholinerg","Absetzsyndrom ausgeprägt"],tg:{s:["2D6"],i:{"2D6":"stark"},se:3,ac:1,bl:1,na:1},src:"FI"});
S("fluvoxamin",{n:"Fluvoxamin",b:["Fevarin"],k:"SSRI",g:"Antidepressiva",kern:["Starker 1A2- und 2C19-Hemmer: Clozapin, Olanzapin, Melatonin, Agomelatin, Duloxetin ↑↑","Selten verordnet, Interaktionen häufig übersehen"],tg:{i:{"1A2":"stark","2C19":"stark","3A4":"mittel","2C9":"mittel"},se:3,bl:1,na:1},src:"FI"});
S("venlafaxin",{n:"Venlafaxin",b:["Trevilor"],k:"SNRI",g:"Antidepressiva",kern:["Dosisabhängig Blutdruckanstieg","CYP2D6-Substrat"],tg:{s:["2D6"],se:3,bl:1,na:1,qt:1},src:"FI"});
S("duloxetin",{n:"Duloxetin",b:["Cymbalta"],k:"SNRI",g:"Antidepressiva",kern:["KI mit starken 1A2-Hemmern (Fluvoxamin, Ciprofloxacin)","Mittlerer 2D6-Hemmer"],tg:{s:["1A2","2D6"],sens:["1A2"],i:{"2D6":"mittel"},se:3,bl:1,na:1},src:"FI"});
S("bupropion",{n:"Bupropion",b:["Elontril"],k:"NDRI",g:"Antidepressiva",kern:["Starker 2D6-Hemmer","Senkt Krampfschwelle dosisabhängig; KI bei Bulimie, Anfallsleiden, Alkoholentzug"],tg:{s:["2B6"],i:{"2D6":"stark"},kr:2,stim:1},src:"FI"});
S("amitriptylin",{n:"Amitriptylin",b:["Saroten"],k:"TZA",g:"Antidepressiva",kern:["Stark anticholinerg, QT, Orthostase","Toxisch in Überdosis"],tg:{s:["2C19","2D6"],ac:3,sd:3,qt:2,se:1,kr:1,hy:2},src:"FI · AGNP"});
S("opipramol",{n:"Opipramol",b:["Insidon"],k:"Trizyklisches Anxiolytikum",g:"Antidepressiva",kern:["DE: GAD und somatoforme Störungen","Anticholinerg und sedierend, mäßig"],tg:{s:["2D6"],ac:2,sd:2,qt:1},src:"FI [?]"});
S("agomelatin",{n:"Agomelatin",b:["Valdoxan"],k:"MT1/MT2-Agonist, 5-HT2C-Antagonist",g:"Antidepressiva",kern:["KI mit starken 1A2-Hemmern (Fluvoxamin, Ciprofloxacin)","Leberwerte vor Beginn und nach 3, 6, 12, 24 Wochen"],tg:{s:["1A2"],sens:["1A2"],sd:1},src:"FI"});
S("vortioxetin",{n:"Vortioxetin",b:["Brintellix"],k:"Multimodales Antidepressivum",g:"Antidepressiva",kern:["CYP2D6-Substrat: mit starken Hemmern Dosis halbieren","Übelkeit häufig"],tg:{s:["2D6"],se:2,bl:1},src:"FI"});
S("tranylcypromin",{n:"Tranylcypromin",b:["Jatrosom"],k:"Irreversibler MAO-Hemmer",g:"Antidepressiva",kern:["Mit serotonergen oder sympathomimetischen Mitteln lebensgefährlich","Tyraminarme Diät"],tg:{se:3,mao:1,hy:1},src:"FI"});
S("moclobemid",{n:"Moclobemid",b:["Aurorix"],k:"Reversibler MAO-A-Hemmer",g:"Antidepressiva",kern:["Serotonerge Kombinationen meiden","2C19-Hemmer [?]"],tg:{se:2,mao:1,i:{"2C19":"mittel"}},src:"FI [?]"});

/* Stimmungsstabilisierer */
S("lithium",{n:"Lithium",b:["Hypnorex","Quilonum"],k:"Stimmungsstabilisierer",g:"Stimmungsstabilisierer",kern:["Enge therapeutische Breite: 0,6–0,8 (Akut bis 1,0) mmol/l [?]","NSAR, ACE-Hemmer, Sartane, Thiazide erhöhen Spiegel"],tg:{lit:1,se:1,qt:1},src:"FI · AGNP"});
S("valproat",{n:"Valproat",b:["Ergenyl","Orfiril"],k:"Antikonvulsivum",g:"Stimmungsstabilisierer",kern:["Hemmt UGT und 2C9: Lamotrigin- und Lorazepam-Spiegel ↑","Hochgradig teratogen: Schwangerschaftsverhütungsprogramm"],tg:{i:{"UGT":"stark","2C9":"mittel"},sd:1},src:"FI · EMA"});
S("lamotrigin",{n:"Lamotrigin",b:["Lamictal"],k:"Antikonvulsivum",g:"Stimmungsstabilisierer",kern:["Mit Valproat Dosis halbieren (SJS-Risiko)","Carbamazepin und Östrogene senken Spiegel"],tg:{s:["UGT"],sens:["UGT"]},src:"FI"});

/* Antipsychotika */
S("clozapin",{n:"Clozapin",b:["Leponex"],k:"Atypisches Antipsychotikum",g:"Antipsychotika",kern:["Agranulozytose: Blutbildkontrollen nach Schema","CYP1A2: Rauchen senkt, Rauchstopp und Fluvoxamin erhöhen massiv"],tg:{s:["1A2"],sens:["1A2"],ag:2,ac:3,sd:3,kr:2,hy:2,qt:1,at:1},src:"FI · AGNP"});
S("aripiprazol",{n:"Aripiprazol",b:["Abilify"],k:"Partieller D2-Agonist",g:"Antipsychotika",kern:["Akathisie häufig","CYP2D6 und 3A4: mit starken Hemmern halbe Dosis"],tg:{s:["2D6","3A4"],sd:1},src:"FI"});
S("amisulprid",{n:"Amisulprid",b:["Solian"],k:"Benzamid",g:"Antipsychotika",kern:["Renal eliminiert, kein CYP","QT und Prolaktin ↑"],tg:{qt:2,da:2},src:"FI · CredibleMeds"});
S("ziprasidon",{n:"Ziprasidon",b:["Zeldox"],k:"Atypisches Antipsychotikum",g:"Antipsychotika",kern:["QT-Verlängerung: KI bei QT-Risiko","Mit Mahlzeit einnehmen"],tg:{s:["3A4"],qt:2,da:1},src:"FI"});
S("paliperidon",{n:"Paliperidon",b:["Invega","Xeplion"],k:"Atypisches Antipsychotikum",g:"Antipsychotika",kern:["Renal eliminiert: Niere beachten","Prolaktin ↑"],tg:{qt:1,da:2,hy:1},src:"FI"});
S("cariprazin",{n:"Cariprazin",b:["Reagila"],k:"Partieller D3/D2-Agonist",g:"Antipsychotika",kern:["KI mit starken 3A4-Hemmern und -Induktoren","Sehr lange HWZ der Metaboliten"],tg:{s:["3A4"],sens:["3A4"]},src:"FI"});
S("lurasidon",{n:"Lurasidon",b:["Latuda"],k:"Atypisches Antipsychotikum",g:"Antipsychotika",kern:["KI mit starken 3A4-Hemmern und -Induktoren","Mit Mahlzeit ≥ 350 kcal"],tg:{s:["3A4"],sens:["3A4"],da:1},src:"FI"});

/* ADHS */
S("methylphenidat",{n:"Methylphenidat",b:["Ritalin","Medikinet","Concerta"],k:"Stimulans",g:"ADHS",kern:["KI mit MAO-Hemmern","Blutdruck, Puls, Appetit"],tg:{stim:1,hy:0},src:"FI"});
S("lisdexamfetamin",{n:"Lisdexamfetamin",b:["Elvanse"],k:"Stimulans (Prodrug)",g:"ADHS",kern:["KI mit MAO-Hemmern","Schwach serotonerg"],tg:{stim:1,se:1},src:"FI"});
S("atomoxetin",{n:"Atomoxetin",b:["Strattera"],k:"Noradrenalin-Wiederaufnahmehemmer",g:"ADHS",kern:["Empfindliches 2D6-Substrat: Fluoxetin, Paroxetin ↑↑","Selten Lebertoxizität, QT"],tg:{s:["2D6"],sens:["2D6"],qt:1},src:"FI"});
S("guanfacin",{n:"Guanfacin",b:["Intuniv"],k:"α2A-Agonist",g:"ADHS",kern:["CYP3A4: Dosisanpassung bei Hemmern und Induktoren","Bradykardie, Hypotonie, Rebound bei Absetzen"],tg:{s:["3A4"],sens:["3A4"],sd:2,hy:2,br:1},src:"FI"});

/* Sucht */
S("naltrexon",{n:"Naltrexon",b:["Adepend"],k:"Opioidantagonist",g:"Sucht",kern:["Alkohol-Rückfallprophylaxe","KI bei Opioidgebrauch: löst Entzug aus, blockiert Analgesie"],tg:{op:"ant"},src:"FI · S3 Alkohol"});
S("acamprosat",{n:"Acamprosat",b:["Campral"],k:"Glutamatmodulator",g:"Sucht",kern:["Alkohol-Rückfallprophylaxe","Renal eliminiert, kaum Interaktionen"],tg:{},src:"FI · S3 Alkohol"});

/* Weitere Benzodiazepine */
S("clonazepam",{n:"Clonazepam",b:["Rivotril"],k:"Benzodiazepin, lang",g:"Benzodiazepine",kern:["DE nur Epilepsie zugelassen","CYP3A4"],tg:{s:["3A4"],sd:3,at:2},src:"FI"});
S("alprazolam",{n:"Alprazolam",b:["Tafil"],k:"Benzodiazepin, kurz",g:"Benzodiazepine",kern:["Hohes Abhängigkeitspotenzial, schwieriger Entzug","Empfindliches 3A4-Substrat"],tg:{s:["3A4"],sens:["3A4"],sd:3,at:2},src:"FI"});
S("lormetazepam",{n:"Lormetazepam",b:["Noctamid"],k:"Benzodiazepin-Hypnotikum",g:"Benzodiazepine",kern:["Glukuronidierung","Häufiges Klinik-Hypnotikum"],tg:{sd:3,at:2},src:"FI"});

/* ---- Somatische Komedikation ---- */
function K(id,o){ o.stub = true; o.komed = true; o.g = o.g || "Komedikation"; D[id] = o; }
K("ciprofloxacin",{n:"Ciprofloxacin",b:["Ciprobay"],k:"Fluorchinolon",kern:["Starker 1A2-Hemmer: Clozapin, Olanzapin, Duloxetin, Agomelatin, Tizanidin ↑","QT, Krampfschwelle"],tg:{i:{"1A2":"stark"},qt:1,kr:1},src:"FI"});
K("clarithromycin",{n:"Clarithromycin",b:["Klacid"],k:"Makrolid",kern:["Starker 3A4-Hemmer","QT-Verlängerung"],tg:{i:{"3A4":"stark"},qt:2},src:"FI · CredibleMeds"});
K("erythromycin",{n:"Erythromycin",b:["Erythrocin"],k:"Makrolid",kern:["Mittlerer 3A4-Hemmer","QT-Verlängerung"],tg:{i:{"3A4":"mittel"},qt:2},src:"FI"});
K("fluconazol",{n:"Fluconazol",b:["Diflucan"],k:"Azol-Antimykotikum",kern:["Starker 2C19-, mittlerer 3A4- und 2C9-Hemmer","QT-Verlängerung"],tg:{i:{"2C19":"stark","3A4":"mittel","2C9":"mittel"},qt:2},src:"FI"});
K("rifampicin",{n:"Rifampicin",b:["Eremfat"],k:"Rifamycin",kern:["Sehr starker Induktor fast aller CYP und UGT","Methadon-Entzug, Quetiapin unwirksam"],tg:{n:["3A4","2C9","2C19","1A2","2B6","UGT"]},src:"FI"});
K("ritonavir",{n:"Ritonavir / Paxlovid",b:["Norvir","Paxlovid"],k:"Proteasehemmer, Booster",kern:["Sehr starker 3A4-Hemmer, auch bei 5 Tagen Paxlovid","Quetiapin, Lurasidon, Cariprazin, Alprazolam, Fentanyl ↑↑"],tg:{i:{"3A4":"stark","2D6":"mittel"}},src:"FI"});
K("omeprazol",{n:"Omeprazol / Esomeprazol",b:["Antra","Nexium"],k:"Protonenpumpenhemmer",kern:["Mittlerer 2C19-Hemmer: Citalopram, Escitalopram, Diazepam ↑","Hyponatriämie, Hypomagnesiämie bei Dauergabe"],tg:{s:["2C19"],i:{"2C19":"mittel"}},src:"FI"});
K("tramadol",{n:"Tramadol",b:["Tramal"],k:"Opioid mit SNRI-Wirkung",kern:["Serotonerg, senkt Krampfschwelle","Prodrug über 2D6: Hemmer schwächen Analgesie"],tg:{se:2,kr:2,at:1,sd:1,pro:"2D6",op:"full"},src:"FI"});
K("codein",{n:"Codein",b:["Codeinsaft"],k:"Opioid (Prodrug)",kern:["Wirkung über 2D6-Umwandlung zu Morphin","2D6-Hemmer: Wirkverlust"],tg:{at:1,sd:1,pro:"2D6",op:"full"},src:"FI"});
K("morphin",{n:"Morphin",b:["MST","Sevredol"],k:"Opioid",kern:["Atemdepression mit Sedativa","Renal: Metaboliten kumulieren"],tg:{at:2,sd:2,op:"full"},src:"FI"});
K("oxycodon",{n:"Oxycodon",b:["Oxygesic","Targin"],k:"Opioid",kern:["CYP3A4-Substrat","Atemdepression mit Sedativa"],tg:{s:["3A4"],at:2,sd:2,op:"full"},src:"FI"});
K("fentanyl",{n:"Fentanyl",b:["Durogesic"],k:"Opioid",kern:["Empfindliches 3A4-Substrat: Hemmer → Atemdepression","Schwach serotonerg"],tg:{s:["3A4"],sens:["3A4"],at:2,sd:2,se:1,op:"full"},src:"FI"});
K("ondansetron",{n:"Ondansetron",b:["Zofran"],k:"5-HT3-Antagonist",kern:["QT-Verlängerung","Serotoninsyndrom-Berichte in Kombination"],tg:{qt:2,se:1},src:"FI · CredibleMeds"});
K("metoclopramid",{n:"Metoclopramid",b:["Paspertin","MCP"],k:"D2-Antagonist (Prokinetikum)",kern:["Frühdyskinesie und Akathisie häufig, v. a. bei Jüngeren","Mit Antipsychotika additiv EPMS und MNS-Risiko"],tg:{da:2,se:1},src:"FI"});
K("domperidon",{n:"Domperidon",b:["Motilium"],k:"Peripherer D2-Antagonist",kern:["QT-Verlängerung: KI mit starken 3A4-Hemmern","Kaum EPMS"],tg:{s:["3A4"],sens:["3A4"],qt:2},src:"FI"});
K("amiodaron",{n:"Amiodaron",b:["Cordarex"],k:"Klasse-III-Antiarrhythmikum",kern:["Hohes QT-Risiko","Hemmt 2D6, 3A4, P-gp; sehr lange HWZ"],tg:{qt:3,i:{"2D6":"mittel","3A4":"schwach"},br:1},src:"FI · CredibleMeds"});
K("metoprolol",{n:"Metoprolol",b:["Beloc-Zok"],k:"β1-Blocker",kern:["CYP2D6-Substrat: Melperon, Fluoxetin, Paroxetin, Bupropion ↑ (Bradykardie)"],tg:{s:["2D6"],sens:["2D6"],br:1,hy:1},src:"FI"});
K("nsar",{n:"NSAR (Ibuprofen, Diclofenac, Naproxen)",b:["Ibuprofen","Voltaren"],k:"Nichtsteroidales Antirheumatikum",kern:["Lithiumspiegel ↑","Blutungsrisiko mit SSRI/SNRI ↑ (GI)"],tg:{bl:1,lu:1},src:"FI"});
K("ass",{n:"ASS",b:["Aspirin"],k:"Thrombozytenaggregationshemmer",kern:["Blutungsrisiko mit SSRI/SNRI ↑"],tg:{bl:1},src:"FI"});
K("clopidogrel",{n:"Clopidogrel",b:["Plavix"],k:"P2Y12-Hemmer (Prodrug)",kern:["Aktivierung über 2C19: Fluvoxamin, Fluoxetin, Omeprazol schwächen","Blutung mit SSRI"],tg:{bl:1,pro:"2C19"},src:"FI"});
K("doak",{n:"DOAK (Apixaban, Rivaroxaban)",b:["Eliquis","Xarelto"],k:"Direktes orales Antikoagulans",kern:["3A4/P-gp-Substrat: Carbamazepin senkt (Thromboserisiko)","Blutungsrisiko mit SSRI/SNRI"],tg:{s:["3A4"],sens:["3A4"],bl:1},src:"FI"});
K("phenprocoumon",{n:"Phenprocoumon",b:["Marcumar"],k:"Vitamin-K-Antagonist",kern:["Blutung mit SSRI/SNRI; INR bei Induktoren und Hemmern kontrollieren"],tg:{s:["2C9"],bl:1},src:"FI"});
K("hct",{n:"Hydrochlorothiazid",b:["Esidrix"],k:"Thiaziddiuretikum",kern:["Lithiumspiegel ↑ (bis 25–40 %)","Hyponatriämie"],tg:{lu:1,na:1},src:"FI"});
K("acehemmer",{n:"ACE-Hemmer / Sartane",b:["Ramipril","Candesartan"],k:"RAAS-Hemmer",kern:["Lithiumspiegel ↑"],tg:{lu:1,hy:1},src:"FI"});
K("johanniskraut",{n:"Johanniskraut",b:["Laif 900","Jarsin"],k:"Pflanzliches Antidepressivum",kern:["Induktor von 3A4 und P-gp: Kontrazeptiva, DOAK, Methadon, Quetiapin ↓","Serotonerg"],tg:{n:["3A4","2C19"],se:2},src:"FI"});
K("rauchen",{n:"Rauchen (Tabak)",b:["Zigaretten"],k:"Induktor durch Verbrennungsprodukte",kern:["Induziert CYP1A2: Clozapin, Olanzapin, Duloxetin ↓","Rauchstopp (auch Station, E-Zigarette): Spiegel steigen in 1–2 Wochen um 30–50 %"],tg:{n:["1A2"]},src:"AGNP"});
K("alkohol",{n:"Alkohol",b:["Ethanol"],k:"ZNS-Dämpfer",kern:["Additive Atemdepression mit BZD, Opioiden, Clomethiazol, Gabapentinoiden"],tg:{at:2,sd:3},src:"Pharmakologie"});
K("kontrazeptiva",{n:"Hormonale Kontrazeptiva",b:["Pille"],k:"Östrogen/Gestagen",kern:["Induktoren (Carbamazepin, Johanniskraut, Rifampicin) machen sie unwirksam","Östrogene senken Lamotrigin"],tg:{s:["3A4"],sens:["3A4"]},src:"FI"});
K("theophyllin",{n:"Theophyllin",b:["Bronchoretard"],k:"Methylxanthin",kern:["Empfindliches 1A2-Substrat: Fluvoxamin, Ciprofloxacin → Intoxikation","Senkt Krampfschwelle"],tg:{s:["1A2"],sens:["1A2"],kr:1},src:"FI"});
K("tizanidin",{n:"Tizanidin",b:["Sirdalud"],k:"α2-Agonist (Muskelrelaxans)",kern:["KI mit Fluvoxamin und Ciprofloxacin (1A2)","Hypotonie, Sedierung"],tg:{s:["1A2"],sens:["1A2"],hy:2,sd:2,br:1},src:"FI"});
K("levodopa",{n:"Levodopa",b:["Madopar","Nacom"],k:"Dopaminvorstufe",kern:["Antagonismus mit Antipsychotika","Kann Psychose auslösen"],tg:{dag:2},src:"FI"});
K("linezolid",{n:"Linezolid",b:["Zyvoxid"],k:"Oxazolidinon (MAO-Hemmung)",kern:["Reversibler MAO-Hemmer: Serotoninsyndrom mit SSRI/SNRI"],tg:{mao:1,se:2},src:"FI"});
K("triptane",{n:"Triptane",b:["Sumatriptan"],k:"5-HT1B/1D-Agonist",kern:["Serotoninsyndrom mit SSRI/SNRI selten, meist unproblematisch"],tg:{se:1},src:"FI"});
K("tamoxifen",{n:"Tamoxifen",b:["Nolvadex"],k:"SERM (Prodrug)",kern:["Aktivierung über 2D6: Paroxetin, Fluoxetin, Bupropion, Melperon meiden"],tg:{pro:"2D6"},src:"FI"});
K("metamizol",{n:"Metamizol",b:["Novalgin"],k:"Nichtopioid-Analgetikum",kern:["Agranulozytose: additiv mit Clozapin, Carbamazepin, Mirtazapin","Schwacher Induktor 2B6/3A4 [?]"],tg:{ag:1,hy:1},src:"FI · EMA 2024 [?]"});

/* Explizite Paarregeln (zusätzlich zur Mechanismus-Logik) */
window.RULES = [
  {a:["carbamazepin","rifampicin","johanniskraut"],b:["methadon","buprenorphin"],sev:"r",t:"Induktion senkt Methadon- bzw. Buprenorphin-Spiegel deutlich: Entzugssymptome und Rückfallgefahr nach 3–14 Tagen; umgekehrt Überdosis nach Absetzen des Induktors."},
  {a:["clozapin"],b:["carbamazepin"],sev:"r",t:"Additives Agranulozytoserisiko und Clozapin-Spiegel ↓: Kombination vermeiden (FI)."},
  {a:["valproat"],b:["lamotrigin"],sev:"r",t:"Valproat verdoppelt Lamotrigin-Spiegel: Lamotrigin halbieren, langsamer titrieren (SJS-Risiko)."},
  {a:["valproat"],b:["lorazepam"],sev:"y",t:"Valproat hemmt Glukuronidierung: Lorazepam-Spiegel ↑, Dosis reduzieren."},
  {a:["valproat"],b:["carbamazepin"],sev:"y",t:"Gegenseitige Spiegeländerung, toxischer Carbamazepin-Epoxid-Metabolit ↑."},
  {a:["olanzapin"],b:["lorazepam","diazepam","oxazepam","clonazepam"],sev:"y",t:"Olanzapin i. m. nicht gleichzeitig mit parenteralem BZD: Hypotonie, Bradykardie, Atemdepression; mind. 1 h Abstand [?]. Oral in Kombination üblich."},
  {a:["clozapin"],b:["lorazepam","diazepam","oxazepam","clonazepam","alprazolam","lormetazepam"],sev:"y",t:"Clozapin + BZD: seltene Kreislauf- und Atemstillstände, v. a. bei Clozapin-Beginn und parenteralem BZD."},
  {a:["tranylcypromin","moclobemid","linezolid"],b:["bupropion","methylphenidat","lisdexamfetamin"],sev:"r",t:"MAO-Hemmer + Sympathomimetikum: hypertensive Krise. Kontraindiziert."},
  {a:["sertralin"],b:["lamotrigin"],sev:"y",t:"Sertralin hemmt UGT1A4: Lamotrigin-Spiegel ↑, mögliches Risiko schwerer Hautreaktionen. Benkert: keine Kombination (K, P)."},
  {a:["esketamin"],b:["tranylcypromin","methylphenidat","lisdexamfetamin"],sev:"y",t:"Blutdruckanstieg verstärkt: RR vor und nach der Esketamin-Gabe engmaschig kontrollieren (P)."}
];
