/* Wirkstoffkarten Teil 2: Antipsychotika, EPMS-Mittel, Entzugsmittel. */
var D = window.D = window.D || {};

D.quetiapin = {
  n:"Quetiapin", b:["Seroquel","Seroquel Prolong"], k:"Atypisches Antipsychotikum (SGA)", g:"Antipsychotika",
  kern:["Schizophrenie, bipolare Störung (alle Phasen), MDD-Augmentation (Prolong)","Psychose 300–750 mg; bipolare Depression 300 mg","Bei Parkinson/Lewy-Körper das Antipsychotikum der Wahl neben Clozapin","Niedrig dosiert als Schlafmittel: Evidenz schwach, Metabolik und Missbrauch","CYP3A4: Carbamazepin senkt Spiegel massiv"],
  ind:"Schizophrenie; bipolare Störung (mäßige bis schwere manische Episoden, depressive Episoden, Rückfallprävention); Seroquel Prolong zusätzlich Augmentation bei Major Depression.",
  off:"Insomnie (25–100 mg; von der S3 Insomnie nicht empfohlen [?]), Anspannung bei BPS, Delir, Psychose bei Parkinson oder Lewy-Körper-Demenz, GAD.",
  ki:"Gleichzeitige Gabe starker CYP3A4-Inhibitoren (Ketoconazol, Clarithromycin, Ritonavir).",
  dos:{e:"Schizophrenie: Titration 50→100→200→300 mg, Ziel 300–750 mg. Manie bis 800 mg. Bipolare Depression 300 mg z. N. MDD-Augmentation 150–300 mg (Prolong).",a:"Start 25 mg, langsam 25–50 mg Schritte; Demenz: erhöhte Mortalität (Warnhinweis).",j:"In der EU nicht zugelassen (FDA: ab 13 J.)."},
  nw:"Sedierung, Orthostase, Schwindel, Gewichtszunahme, Dyslipidämie, Hyperglykämie, Obstipation, Tachykardie, QT gering bis mittel, kaum EPMS und Prolaktin. Missbrauch v. a. bei Sucht und in Haft.",
  ia:"Empfindliches CYP3A4-Substrat: Carbamazepin, Phenytoin, Rifampicin senken Spiegel um bis zu 80 %; starke Inhibitoren kontraindiziert. Additive Sedierung und Hypotonie.",
  ktr:"Gewicht, Taille, Nüchternglukose oder HbA1c und Lipide zu Beginn, nach 3 Monaten, dann jährlich, weil die metabolischen Effekte früh einsetzen. EKG bei QT-Risiko. TDM 100–500 ng/ml (AGNP).",
  ss:"Schwangerschaft: vertretbar, wenn nötig; Gestationsdiabetes beachten. Stillzeit: geringer Übergang, vertretbar.",
  mech:"Niedrige, schnell dissoziierende D2-Bindung (daher kaum EPMS), 5-HT2A-Antagonismus, starker H1- und α1-Antagonismus. Der Metabolit Norquetiapin hemmt den Noradrenalintransporter (antidepressiver Anteil).",
  auf:"Ein Medikament gegen Psychosen und Stimmungsschwankungen, das in niedriger Dosis auch beruhigt. Es kann den Appetit steigern, deshalb kontrollieren wir Gewicht und Blutwerte.",
  cx:{schw:["y","Vertretbar, GDM-Risiko"],still:["y","Geringer Übergang"],alt:["y","Orthostase, Sturz; Demenz-Warnhinweis"],jug:["y","EU nicht zugelassen"],niere:["g","Keine Anpassung"],leber:["y","Niedriger beginnen"],qtc:["y","Geringes bis mittleres QT-Risiko"],epi:["y","Krampfschwelle leicht ↓"],delir:["y","Off-label, niedrig dosiert"],pd:["g","Mittel der Wahl neben Clozapin"],sucht:["y","Missbrauchspotenzial"],atem:["g","Unkritisch"],fahr:["y","Sedierend"]},
  tg:{s:["3A4"],sens:["3A4"],sd:3,qt:1,ac:1,hy:2,kr:1},
  src:"FI · AGNP · S3 Schizophrenie"
};

D.olanzapin = {
  n:"Olanzapin", b:["Zyprexa","Zyprexa Velotab","Zypadhera"], k:"Atypisches Antipsychotikum (MARTA)", g:"Antipsychotika",
  kern:["Schizophrenie, Manie, Phasenprophylaxe; i. m. bei Agitation","Agitation: 10 mg p. o./i. m., Wdh. nach 2 h, max. 20 mg/d","i. m. nicht gleichzeitig mit parenteralem BZD (≥ 1 h Abstand) [?]","Stark metabolisch, sedierend","Rauchen senkt Spiegel (CYP1A2); Rauchstopp → Spiegel ↑"],
  ind:"Schizophrenie; mäßige bis schwere manische Episoden; Phasenprophylaxe bei bipolarer Störung. i. m.: rasche Kontrolle von Agitiertheit bei Schizophrenie oder Manie.",
  off:"Hyperaktives Delir (2,5–5 mg), Anorexia nervosa, therapieresistente Übelkeit.",
  ki:"Engwinkelglaukom.",
  dos:{e:"Psychose 10–20 mg; Agitation 10 mg (i. m. 5–10 mg), max. 3 Injektionen bzw. 20 mg/d gesamt.",a:"Start 2,5–5 mg; Demenz: Mortalität und Schlaganfall ↑.",j:"EU nicht zugelassen."},
  nw:"Gewichtszunahme (stärkstes Risiko neben Clozapin), Dyslipidämie, Diabetes, Sedierung, anticholinerge Effekte, Orthostase, Transaminasen. Zypadhera: Post-Injektions-Delir-Sedierungs-Syndrom (3 h Nachbeobachtung).",
  ia:"CYP1A2-Substrat: Fluvoxamin und Ciprofloxacin erhöhen, Rauchen und Carbamazepin senken. Parenterale BZD: Hypotonie, Bradykardie, Atemdepression.",
  ktr:"Metabolisches Monitoring wie Quetiapin, eher engmaschiger, weil die Gewichtszunahme in den ersten Wochen am stärksten ist; Leberwerte; TDM 20–80 ng/ml (AGNP), besonders bei Rauchstatusänderung.",
  ss:"Schwangerschaft: vertretbar, Gestationsdiabetes-Risiko. Stillzeit: vertretbar.",
  mech:"Antagonist an D2, 5-HT2A, 5-HT2C, H1, M1–M5, α1.",
  auf:"Ein wirksames Medikament gegen Psychosen und starke Unruhe. Es macht hungrig, deshalb früh auf Ernährung und Bewegung achten. Wenn Sie mit dem Rauchen aufhören, bitte Bescheid geben, weil sich die nötige Dosis ändert.",
  cx:{schw:["y","Vertretbar, GDM"],still:["g","Vertretbar"],alt:["y","Niedrig; Demenz-Warnhinweis"],jug:["y","EU nicht zugelassen"],niere:["g","Keine Anpassung"],leber:["y","Transaminasen"],qtc:["g","Geringes QT-Risiko"],epi:["y","Krampfschwelle ↓"],delir:["y","Anticholinerg; nur niedrig off-label"],pd:["r","Verschlechtert Motorik"],sucht:["g","Kein Abhängigkeitspotenzial"],atem:["y","i. m. + BZD: Atemdepression"],fahr:["y","Sedierend"]},
  tg:{s:["1A2"],sens:["1A2"],sd:3,ac:2,qt:1,hy:1,kr:1,da:2},
  src:"FI · AGNP · S3 Schizophrenie"
};

D.haloperidol = {
  n:"Haloperidol", b:["Haldol"], k:"Butyrophenon, hochpotent (FGA)", g:"Antipsychotika",
  kern:["Akute Erregung, Psychose, Manie, Delir, Tic-Störungen","Agitation 5 mg p. o./i. m., Wdh. nach 30–60 min, max. 20 mg/d [?]","Delir: 0,5–1 mg, Ältere max. ca. 5 mg/d [?]","i. v. nur mit EKG-Monitoring (QT, Torsade)","KI: Parkinson, Lewy-Körper-Demenz, QT-Verlängerung"],
  ind:"Schizophrenie und schizoaffektive Störung; akute Episoden der Manie; akute psychomotorische Erregung bei Psychose oder Manie; Delir, wenn nicht-medikamentöse Maßnahmen versagt haben; Tic-Störungen und Tourette; Chorea Huntington; postoperative Übelkeit.",
  off:"Alkoholentzugsdelir mit Halluzinationen (zusätzlich zu BZD, nie allein), Cannabinoid-Hyperemesis.",
  ki:"Koma, ZNS-Depression, Morbus Parkinson, Lewy-Körper-Demenz, progressive supranukleäre Blickparese, angeborene oder bekannte QT-Verlängerung, unkorrigierte Hypokaliämie, klinisch relevante Bradykardie, gleichzeitige QT-verlängernde Medikamente (laut FI).",
  dos:{e:"Psychose 2–10 mg/d (max. 20 mg). Agitation 5 mg, Wdh. nach Wirkung.",a:"Delir 0,5–1 mg, Wdh. nach 1–2 h; Tageshöchstdosis niedrig halten [?].",j:"Schizophrenie ab 13 J., wenn andere versagt haben; Tourette ab 10 J. [?]."},
  nw:"Frühdyskinesie (v. a. junge Männer), Akathisie, Parkinsonoid, Spätdyskinesie, malignes neuroleptisches Syndrom, QT-Verlängerung, Prolaktinanstieg; kaum Sedierung und Gewicht.",
  ia:"CYP3A4/2D6-Substrat, hemmt 2D6 mäßig. Carbamazepin und Rifampicin senken Spiegel; Fluoxetin und Paroxetin erhöhen. Additive QT-Verlängerung. Antagonismus mit Levodopa und Dopaminagonisten.",
  ktr:"EKG vor Beginn bzw. bei i. v.-Gabe kontinuierlich, weil das Torsade-Risiko bei i. v. und hohen Dosen am größten ist; Kalium und Magnesium; EPMS klinisch täglich in der Aufdosierung; TDM 1–10 ng/ml.",
  ss:"Schwangerschaft: gut untersucht, vertretbar. Stillzeit: vertretbar, Säugling beobachten.",
  mech:"Starker, fest bindender D2-Antagonist; kaum Wirkung an H1, M1, α1, daher wenig Sedierung, aber hohe EPMS-Neigung.",
  auf:"Ein schnell wirksames Medikament gegen Psychose und starke Unruhe. Es kann Muskelverkrampfungen oder innere Unruhe auslösen; das ist gut behandelbar, bitte sofort melden.",
  cx:{schw:["g","Gut untersucht"],still:["y","Vertretbar"],alt:["y","Niedrigst dosiert"],jug:["y","Eng zugelassen [?]"],niere:["g","Unkritisch"],leber:["y","Vorsicht"],qtc:["r","KI bei QT-Verlängerung"],epi:["y","Krampfschwelle leicht ↓"],delir:["y","Zugelassen, Nutzen begrenzt; Ursache behandeln"],pd:["r","KI"],sucht:["g","Kein Abhängigkeitspotenzial"],atem:["g","Unkritisch"],fahr:["y","Anfangs eingeschränkt"]},
  tg:{s:["3A4","2D6"],i:{"2D6":"mittel"},qt:2,da:3,sd:1},
  src:"FI · AGNP · S3 Schizophrenie · CredibleMeds"
};

D.risperidon = {
  n:"Risperidon", b:["Risperdal","Risperdal Consta"], k:"Atypisches Antipsychotikum (SGA)", g:"Antipsychotika",
  kern:["Schizophrenie, Manie, Aggression bei Alzheimer-Demenz (≤ 6 Wo.)","Psychose 4–6 mg; Demenz 2×0,25 mg, bis 2×1 mg","Prolaktin ↑ stark, EPMS dosisabhängig","Niere: Dosis halbieren (Paliperidon wird renal eliminiert)","Delir off-label 0,5–1 mg"],
  ind:"Schizophrenie; mäßige bis schwere manische Episoden; Kurzzeitbehandlung (bis 6 Wochen) anhaltender Aggression bei mittelschwerer bis schwerer Alzheimer-Demenz; Aggression bei Verhaltensstörungen bei Kindern ab 5 J. mit unterdurchschnittlicher Intelligenz.",
  off:"Delir, Tic-Störungen, Aggression bei Autismus.",
  ki:"Überempfindlichkeit.",
  dos:{e:"Start 2 mg, Ziel 4–6 mg/d.",a:"Demenz: 0,25 mg 2×/d, max. 1 mg 2×/d.",j:"Verhaltensstörung ab 5 J. gewichtsadaptiert; Schizophrenie ab 13 J. off-label in EU [?]."},
  nw:"Hyperprolaktinämie (Amenorrhoe, Galaktorrhoe, sexuelle Funktionsstörung, Osteoporose), EPMS über 6 mg, Orthostase in der Titration, Gewichtszunahme; bei Demenz Schlaganfall und Mortalität ↑.",
  ia:"CYP2D6-Substrat zu 9-OH-Risperidon (aktiv). Carbamazepin senkt die aktive Fraktion; Fluoxetin, Paroxetin und Melperon verschieben das Verhältnis, Gesamtwirkung steigt moderat.",
  ktr:"Prolaktin bei Symptomen, weil die Erhöhung oft stumm bleibt; Gewicht und Metabolik; TDM Summe Risperidon + 9-OH 20–60 ng/ml (AGNP).",
  ss:"Schwangerschaft: vertretbar. Stillzeit: vertretbar.",
  mech:"Antagonist an 5-HT2A und D2 (hohe Affinität), α1, kaum muskarinerg.",
  auf:"Ein Medikament gegen Psychose, Unruhe und Aggression. Es kann den Hormonspiegel Prolaktin erhöhen; sagen Sie bitte, wenn sich Zyklus oder Sexualität verändern.",
  cx:{schw:["y","Vertretbar"],still:["y","Vertretbar"],alt:["y","Zugelassen bei Alzheimer-Aggression; Schlaganfallrisiko"],jug:["g","Eng zugelassen"],niere:["r","Dosis halbieren"],leber:["y","Dosis ↓"],qtc:["y","Geringes QT-Risiko"],epi:["y","Krampfschwelle"],delir:["y","Off-label"],pd:["r","EPMS"],sucht:["g","Kein Abhängigkeitspotenzial"],atem:["g","Unkritisch"],fahr:["y","Anfangs"]},
  tg:{s:["2D6"],da:2,qt:1,hy:1,sd:1},
  src:"FI · AGNP · S3 Demenzen"
};

D.biperiden = {
  n:"Biperiden", b:["Akineton","Akineton retard"], k:"Zentral wirksames Anticholinergikum", g:"EPMS-Mittel",
  kern:["Frühdyskinesie: 2,5–5 mg langsam i. v./i. m., wirkt in Minuten","Parkinsonoid: 1–2 mg 2–3×/d oral, kurzzeitig","Hilft kaum bei Akathisie, verschlechtert Spätdyskinesie","Anticholinerg: Delir, Harnverhalt, Gedächtnis","Euphorisierend: Missbrauch möglich"],
  ind:"Parkinson-Syndrome, besonders Rigor und Tremor; medikamentös bedingte extrapyramidale Symptome (Frühdyskinesien, Akathisie [?], Parkinsonoid); Nikotin- und Organophosphatvergiftung.",
  off:"Keine relevanten.",
  ki:"Engwinkelglaukom, mechanische Stenosen im GI-Trakt, Megakolon, Ileus, Prostatahyperplasie mit Restharn, Tachyarrhythmien [?].",
  dos:{e:"Akut 2,5–5 mg i. v. (langsam) oder i. m., Wdh. nach 30 min möglich, max. 10–20 mg/d. Oral 1–2 mg 2–3×/d, max. 16 mg/d [?].",a:"Meiden; falls unvermeidbar 1 mg, kurz.",j:"Gewichtsadaptiert zugelassen [?]."},
  nw:"Mundtrockenheit, Obstipation, Akkommodationsstörung, Harnverhalt, Tachykardie, Verwirrtheit, Delir, Gedächtnisstörung, Euphorie.",
  ia:"Additiv anticholinerg mit TZA, Promethazin, Clozapin, Olanzapin, Levomepromazin: Delirrisiko. Kann die Resorption anderer Mittel verzögern.",
  ktr:"Nach Akutgabe Wirkung prüfen; Dauergabe regelmäßig hinterfragen, weil eine prophylaktische Dauergabe meist unnötig ist und kognitiv schadet.",
  ss:"Schwangerschaft: kurzzeitig vertretbar. Stillzeit: kann Laktation hemmen, kurzzeitig vertretbar [?].",
  mech:"Antagonist an zentralen muskarinischen M1-Rezeptoren; stellt das durch D2-Blockade gestörte Gleichgewicht zwischen Dopamin und Acetylcholin im Striatum wieder her.",
  auf:"Ein Gegenmittel gegen Muskelverkrampfungen und Steifigkeit durch Neuroleptika. Es wirkt rasch. Mund und Darm können trocken bzw. träge werden, und es kann die Konzentration beeinträchtigen.",
  cx:{schw:["y","Kurzzeitig"],still:["y","Laktationshemmung möglich [?]"],alt:["r","Delir, Kognition"],jug:["y","Gewichtsadaptiert [?]"],niere:["g","Unkritisch"],leber:["g","Unkritisch"],qtc:["y","Tachykardie"],epi:["g","Unkritisch"],delir:["r","Delirogen"],pd:["g","Bei medikamentösem Parkinsonoid indiziert"],sucht:["y","Missbrauchspotenzial"],atem:["g","Unkritisch"],fahr:["y","Akkommodation, Sedierung"]},
  tg:{ac:3,sd:1},
  src:"FI · S3 Schizophrenie"
};

D.propranolol = {
  n:"Propranolol", b:["Dociton","Obsidan"], k:"Nicht-selektiver, lipophiler Betablocker", g:"EPMS-Mittel",
  kern:["Akathisie: 10–20 mg 2–3×/d, bis 80 mg/d (off-label)","Lithium- oder Valproat-Tremor","KI: Asthma, AV-Block II/III, Bradykardie","Puls und Blutdruck vor Steigerung","Maskiert Hypoglykämie"],
  ind:"Hypertonie, KHK, tachykarde Rhythmusstörungen, essentieller Tremor, Migräneprophylaxe u. a.",
  off:"Antipsychotika- oder SSRI-induzierte Akathisie, medikamentöser Tremor, somatische Angstsymptome (Prüfungsangst).",
  ki:"Asthma bronchiale, AV-Block II/III, Sinusknotensyndrom, Bradykardie < 50/min, dekompensierte Herzinsuffizienz, schwere pAVK, Prinzmetal-Angina, kardiogener Schock.",
  dos:{e:"Akathisie 10–20 mg 2–3×/d, bis 80 mg/d (max. 120 mg [?]).",a:"Niedrig beginnen, Orthostase.",j:"Gewichtsadaptiert möglich."},
  nw:"Bradykardie, Hypotonie, Müdigkeit, kalte Akren, Bronchospasmus, Albträume.",
  ia:"CYP2D6/1A2-Substrat: Fluvoxamin, Fluoxetin, Paroxetin, Melperon erhöhen. Additive Bradykardie mit Clonidin; Hypotonie mit Antipsychotika.",
  ktr:"Puls und Blutdruck vor jeder Steigerung, weil Bradykardie und Hypotonie die Dosis begrenzen.",
  ss:"Schwangerschaft: möglich; Wachstumsverzögerung, neonatale Bradykardie und Hypoglykämie beachten. Stillzeit: vertretbar.",
  mech:"Blockade von β1 und β2; zentral wirksam durch Lipophilie. Bei Akathisie vermutlich Dämpfung noradrenerger Überaktivität.",
  auf:"Ein Blutdruckmittel, das auch gegen innere Unruhe durch Neuroleptika hilft. Puls und Blutdruck werden kontrolliert.",
  cx:{schw:["y","Möglich, Neonatus beobachten"],still:["g","Vertretbar"],alt:["y","Bradykardie, Orthostase"],jug:["g","Möglich"],niere:["g","Unkritisch"],leber:["y","First-pass ↓, Dosis ↓"],qtc:["g","Unkritisch, aber Bradykardie"],epi:["g","Unkritisch"],delir:["g","Unkritisch"],pd:["g","Unkritisch"],sucht:["g","Unkritisch"],atem:["r","Asthma: KI; COPD Vorsicht"],fahr:["g","Meist unkritisch"]},
  tg:{s:["2D6","1A2"],hy:2,br:1},
  src:"FI · S3 Schizophrenie"
};

D.amantadin = {
  n:"Amantadin", b:["PK-Merz","Amantadin-ratiopharm"], k:"NMDA-Antagonist mit dopaminerger Wirkung", g:"EPMS-Mittel",
  kern:["Medikamentöses Parkinsonoid, wenn Anticholinergika ungünstig (Ältere)","100 mg 1–2×/d, max. 300 mg; nicht abends","Renal eliminiert: Dosis nach GFR","QT-Verlängerung: EKG vorher und nach 1 und 3 Wochen [?]","Kann Psychose verschlechtern"],
  ind:"Parkinson-Syndrome; medikamentös bedingte extrapyramidale Symptome [?]; Influenza A (historisch).",
  off:"Spätdyskinesie (schwache Evidenz), Apathie nach SHT.",
  ki:"Schwere Herzinsuffizienz, Kardiomyopathie, AV-Block II/III, Bradykardie, QT-Verlängerung, Hypokaliämie, Hypomagnesiämie, schwere Niereninsuffizienz [?].",
  dos:{e:"100 mg morgens, ggf. 100 mg mittags, max. 300 mg/d.",a:"100 mg/d, nach GFR.",j:"Kaum Daten [?]."},
  nw:"Halluzinationen, Verwirrtheit, Schlaflosigkeit, Livedo reticularis, Knöchelödeme, Mundtrockenheit, QT-Verlängerung, Krampfanfälle.",
  ia:"Additive QT-Verlängerung; anticholinerg verstärkend; Antagonismus mit Antipsychotika möglich.",
  ktr:"Kreatinin bzw. GFR vor Beginn, weil Kumulation zu Delir und Krampfanfällen führt; EKG mit QTc.",
  ss:"Schwangerschaft: meiden (Fehlbildungshinweise [?]). Stillzeit: meiden.",
  mech:"NMDA-Antagonismus und gesteigerte Dopaminfreisetzung; schwach anticholinerg.",
  auf:"Ein Mittel gegen Steifigkeit und Zittern durch Neuroleptika. Nicht abends einnehmen, weil es wach machen kann.",
  cx:{schw:["r","Meiden [?]"],still:["r","Meiden"],alt:["y","Delir; GFR beachten"],jug:["y","Kaum Daten"],niere:["r","Dosisanpassung, schwere Insuffizienz meiden"],leber:["g","Unkritisch"],qtc:["r","KI"],epi:["y","Krampfschwelle ↓"],delir:["r","Delirogen"],pd:["g","Indiziert"],sucht:["g","Unkritisch"],atem:["g","Unkritisch"],fahr:["y","Halluzinationen, Schwindel"]},
  tg:{qt:2,kr:1,ac:1,dag:1},
  src:"FI · DGN S2k Parkinson [?]"
};

D.tetrabenazin = {
  n:"Tetrabenazin", b:["Nitoman","Xenazine"], k:"VMAT2-Hemmer", g:"EPMS-Mittel",
  kern:["Spätdyskinesie (mäßig bis schwer) und Chorea Huntington [?]","12,5 mg 1–2×/d, wöchentlich steigern, meist 25–75 mg/d","Depression und Suizidalität: KI bei unbehandelter Depression","Parkinsonoid, Akathisie, Sedierung, QT","Valbenazin, Deutetrabenazin: in der EU nicht verfügbar [?]"],
  ind:"Hyperkinetische Bewegungsstörungen bei Chorea Huntington; mäßige bis schwere Spätdyskinesien, wenn andere Behandlungen versagt haben [?].",
  off:"Tic-Störungen.",
  ki:"Unbehandelte Depression oder Suizidalität, MAO-Hemmer, Reserpin, Leberinsuffizienz, Stillzeit, Parkinson-Syndrom [?].",
  dos:{e:"12,5 mg 1–2×/d, Steigerung um 12,5 mg pro Woche; Erhaltung 25–75 mg/d (max. 200 mg [?]).",a:"Langsamer titrieren.",j:"Nicht zugelassen."},
  nw:"Depression, Suizidalität, Sedierung, Parkinsonoid, Akathisie, Schlafstörungen, QT-Verlängerung, selten MNS.",
  ia:"CYP2D6 bildet aktive Metaboliten: starke 2D6-Hemmer (Paroxetin, Fluoxetin, Bupropion) → Dosis halbieren [?]. Additive QT-Verlängerung.",
  ktr:"Stimmung und Suizidalität bei jeder Visite, weil die Monoamindepletion Depressionen auslösen kann; EKG.",
  ss:"Schwangerschaft: kaum Daten. Stillzeit: kontraindiziert.",
  mech:"Reversible Hemmung des vesikulären Monoamintransporters 2: weniger Dopamin wird in Vesikel geladen und freigesetzt.",
  auf:"Ein Mittel gegen unwillkürliche Bewegungen. Es kann die Stimmung drücken; bitte sofort melden, wenn Sie sich niedergeschlagen fühlen oder Gedanken an Selbsttötung haben.",
  cx:{schw:["y","Kaum Daten"],still:["r","KI"],alt:["y","Langsam titrieren"],jug:["r","Nicht zugelassen"],niere:["g","Unkritisch"],leber:["r","KI"],qtc:["y","QT ↑"],epi:["g","Unkritisch"],delir:["y","Sedierung"],pd:["r","Verstärkt Parkinsonismus"],sucht:["g","Unkritisch"],atem:["g","Unkritisch"],fahr:["y","Sedierend"]},
  tg:{s:["2D6"],qt:1,sd:2},
  src:"FI · S3 Schizophrenie [?]"
};

D.clonidin = {
  n:"Clonidin", b:["Catapresan","Paracefan","Clonidin-ratiopharm"], k:"Zentraler α2-Agonist", g:"Entzugsmittel",
  kern:["Vegetative Entzugssymptome (Opioide, Alkohol adjuvant)","Opioidentzug: 0,075–0,15 mg alle 4–6 h, nach RR/Puls [?]","Verhindert weder Krampfanfälle noch Delir: nie allein beim AWS","Ausschleichen über 3–5 Tage (Rebound-Hypertonie)","Gabe aussetzen bei RR < 90 systolisch oder Puls < 55 [?]"],
  ind:"Hypertonie; Paracefan: Alkoholentzug (adjuvant, i. v.) [?].",
  off:"Opioidentzug (vegetativ), BZD-Entzug adjuvant, ADHS (international als Retardform), Tic-Störungen.",
  ki:"Bradykardie, Sinusknotensyndrom, AV-Block II/III, schwere Herzinsuffizienz [?].",
  dos:{e:"Opioidentzug: 0,075–0,15 mg alle 4–6 h, typisch 0,3–0,9 mg/d [?]; AWS adjuvant 0,15 mg 2–3×/d [?].",a:"Niedrig beginnen, Sturzrisiko.",j:"Off-label, gewichtsadaptiert [?]."},
  nw:"Hypotonie, Bradykardie, Sedierung, Mundtrockenheit, Schwindel; Rebound-Hypertonie bei abruptem Absetzen.",
  ia:"Additive Bradykardie mit Betablockern; additive Hypotonie mit Antipsychotika; Sedierung mit BZD. Trizyklika schwächen die Wirkung ab.",
  ktr:"Blutdruck und Puls vor jeder Gabe, weil Hypotonie und Bradykardie die Dosis begrenzen.",
  ss:"Schwangerschaft: möglich. Stillzeit: geht über, Hypotonie beim Säugling möglich.",
  mech:"Agonist an präsynaptischen α2-Rezeptoren im Locus coeruleus: dämpft die noradrenerge Überaktivität, die Schwitzen, Tachykardie, Unruhe und Tremor im Entzug erzeugt.",
  auf:"Ein Mittel gegen Schwitzen, Herzrasen und Unruhe im Entzug. Langsam aufstehen. Nicht plötzlich absetzen.",
  cx:{schw:["y","Möglich"],still:["y","Hypotonie beim Säugling"],alt:["y","Hypotonie, Sturz"],jug:["y","Off-label [?]"],niere:["y","Dosis ↓"],leber:["g","Unkritisch"],qtc:["y","Bradykardie"],epi:["g","Unkritisch"],delir:["y","Sedierung; bei ICU-Delir eher Dexmedetomidin"],pd:["y","Orthostase"],sucht:["g","Kein Abhängigkeitspotenzial"],atem:["g","Keine Atemdepression"],fahr:["y","Sedierung"]},
  tg:{sd:2,hy:3,br:1},
  src:"FI · S3 Alkohol · BÄK-Richtlinie Substitution [?]"
};

D.carbamazepin = {
  n:"Carbamazepin", b:["Tegretal","Timonil"], k:"Antikonvulsivum (Natriumkanalblocker)", g:"Entzugsmittel",
  kern:["Anfallsverhütung beim Alkoholentzug (stationär) – DE-Zulassung","AWS: ca. 600–800 mg/d initial, über 5–7 Tage ausschleichen [?]","Starker Induktor: senkt Quetiapin, Methadon, Buprenorphin, Kontrazeptiva u. v. m.","Hyponatriämie, Blutbild, SJS (HLA-B*15:02)","Teratogen"],
  ind:"Epilepsie; Trigeminusneuralgie; Phasenprophylaxe bipolarer Störungen bei Lithium-Versagen; Anfallsverhütung beim Alkoholentzugssyndrom unter stationären Bedingungen.",
  off:"Leichtes bis mittelschweres AWS als Monotherapie (international untersucht), BZD-Entzug adjuvant.",
  ki:"Knochenmarkdepression, AV-Block, akute intermittierende Porphyrie, MAO-Hemmer, Kombination mit Clozapin (Agranulozytose).",
  dos:{e:"AWS: 200 mg 3–4×/d initial, Ausschleichen nach 5–7 Tagen [?]. Epilepsie/Bipolar nach Spiegel.",a:"Niedriger, Natrium kontrollieren.",j:"Epilepsie zugelassen; andere Indikationen zurückhaltend."},
  nw:"Schwindel, Ataxie, Doppelbilder, Übelkeit, Hyponatriämie, Leukopenie, selten Agranulozytose, Exanthem bis SJS/TEN, Leberwerte.",
  ia:"Starker Induktor von CYP3A4, 1A2, 2C9, 2C19, 2B6 und UGT, induziert sich selbst: senkt Spiegel von Quetiapin, Haloperidol, Olanzapin, Clozapin, Aripiprazol, Methadon (Entzug!), Buprenorphin, Mirtazapin, TZA, Valproat, Lamotrigin, hormonalen Kontrazeptiva, DOAK. Inhibitoren (Clarithromycin, Fluvoxamin) erhöhen Carbamazepin.",
  ktr:"Blutbild, Natrium, Leberwerte vor Beginn und in den ersten Wochen, weil Hyponatriämie und Blutbildschäden früh auftreten; Spiegel 4–10 µg/ml (bei Bipolar bis 12 [?]); HLA-B*15:02 bei asiatischer Herkunft.",
  ss:"Schwangerschaft: teratogen (Neuralrohrdefekte), meiden. Stillzeit: vertretbar unter Beobachtung.",
  mech:"Blockade spannungsabhängiger Natriumkanäle; stabilisiert Membranen, antikonvulsiv.",
  auf:"Ein Mittel, das während des Alkoholentzugs Krampfanfälle verhindert. Es beeinflusst viele andere Medikamente, auch die Pille. Blutwerte werden kontrolliert.",
  cx:{schw:["r","Teratogen"],still:["y","Unter Beobachtung"],alt:["y","Hyponatriämie, Ataxie"],jug:["y","Zurückhaltend"],niere:["g","Kaum Anpassung"],leber:["r","Vorsicht, Hepatotoxizität"],qtc:["y","AV-Überleitung"],epi:["g","Antikonvulsiv"],delir:["y","Schwindel, Ataxie"],pd:["g","Unkritisch"],sucht:["g","Kein Abhängigkeitspotenzial"],atem:["g","Unkritisch"],fahr:["y","Anfangs Schwindel"]},
  tg:{s:["3A4"],n:["3A4","1A2","2C9","2C19","2B6","UGT"],sd:2,na:2,ag:1},
  src:"FI · S3 Alkohol · AGNP"
};

D.thiamin = {
  n:"Thiamin (Vitamin B1)", b:["Vitamin B1-ratiopharm","Betabion"], k:"Vitamin", g:"Entzugsmittel",
  kern:["Bei jedem Alkoholentzug: Wernicke-Prophylaxe","Prophylaxe 100–300 mg/d, bei Mangelernährung parenteral [?]","Verdacht auf Wernicke: 3×200–500 mg i. v. über ≥ 3 Tage [?]","Immer vor Glukose geben","Wernicke-Trias nur selten vollständig: niedrige Schwelle"],
  ind:"Thiaminmangel, Wernicke-Enzephalopathie, Prophylaxe bei Alkoholabhängigkeit.",
  off:"Keine.",
  ki:"Überempfindlichkeit (selten anaphylaktoid bei i. v.).",
  dos:{e:"Prophylaxe 100–300 mg/d oral oder 100–250 mg i. v./i. m. Therapie Wernicke 3×200–500 mg i. v. für 3–5 Tage, dann 250 mg/d [?].",a:"Wie Erwachsene.",j:"Wie Erwachsene bei Mangel."},
  nw:"Selten Überempfindlichkeit bei i. v.-Gabe.",
  ia:"Keine relevanten.",
  ktr:"Neurologischer Befund (Ataxie, Okulomotorik, Verwirrtheit), weil die Trias häufig unvollständig ist.",
  ss:"Unbedenklich.",
  mech:"Kofaktor von Pyruvat-Dehydrogenase und Transketolase; Mangel führt zu Energiemangel in Thalamus und Mamillarkörpern.",
  auf:"Ein Vitamin, das bei Alkoholkonsum oft fehlt und das Gehirn vor bleibenden Schäden schützt.",
  cx:{},
  tg:{},
  src:"S3 Alkohol · EFNS [?]"
};

D.buprenorphin = {
  n:"Buprenorphin", b:["Subutex","Suboxone (+ Naloxon)","Buvidal (Depot)"], k:"Partieller µ-Opioidagonist, κ-Antagonist", g:"Entzugsmittel",
  kern:["Substitution und qualifizierter Opioidentzug","Einstieg erst bei mäßigem Entzug (COWS ≥ 8–12): sonst ausgelöster Entzug","2–4 mg s. l., nach 1–2 h nachdosieren; Tag 1 meist 8–12 mg [?]","Ziel 8–24 mg/d; Ceiling bei Atemdepression – außer mit BZD/Alkohol","Kaum QT, günstig in Schwangerschaft"],
  ind:"Substitutionstherapie bei Opioidabhängigkeit (BtMVV), im Rahmen medizinischer, sozialer und psychotherapeutischer Behandlung.",
  off:"Low-dose-Induktion (Mikrodosierung) bei Fentanyl oder Umstellung von Methadon.",
  ki:"Schwere respiratorische Insuffizienz, schwere Leberinsuffizienz, akuter Alkoholismus, Delirium tremens, < 15 J. [?].",
  dos:{e:"Start 2–4 mg s. l. bei objektivem Entzug; Wdh. 2–4 mg nach 1–2 h; Tag 1 bis 8 (–12) mg, Tag 2–3 Anpassung auf 8–24 mg/d (max. 24 mg laut FI [?]). Abdosierung im Entzug z. B. 2 mg alle 1–3 Tage [?].",a:"Niedriger beginnen.",j:"Ab 15 J. [?]."},
  nw:"Obstipation, Schwitzen, Kopfschmerz, Übelkeit, Transaminasenanstieg, Schlafstörung.",
  ia:"CYP3A4-Substrat: Carbamazepin und Rifampicin senken, Clarithromycin und Ritonavir erhöhen. BZD, Alkohol, Gabapentinoide: Atemdepression trotz Ceiling. Volle Agonisten: abgeschwächt; Buprenorphin verdrängt sie und kann Entzug auslösen.",
  ktr:"COWS vor jeder Einstiegsdosis, weil zu frühe Gabe den Entzug verschlimmert; Leberwerte; Urinkontrollen nach Substitutionsrichtlinie.",
  ss:"Schwangerschaft: Substitution empfohlen, mildere neonatale Entzugssyndrome als Methadon. Stillzeit: vertretbar.",
  mech:"Sehr hohe Affinität und langsame Dissoziation am µ-Rezeptor bei begrenzter intrinsischer Aktivität: verdrängt volle Agonisten, sättigt die Atemdepression.",
  auf:"Ein Ersatzmittel, das Entzugsbeschwerden und Suchtdruck nimmt. Es wird unter die Zunge gelegt. Die erste Dosis gibt es erst, wenn deutliche Entzugszeichen da sind. Keine Beruhigungsmittel oder Alkohol dazu.",
  cx:{schw:["g","Substitution empfohlen"],still:["g","Vertretbar"],alt:["y","Niedriger"],jug:["y","Ab 15 J. [?]"],niere:["g","Kaum Anpassung"],leber:["y","Transaminasen"],qtc:["g","Kaum QT-Effekt, Vorteil gegenüber Methadon"],epi:["g","Unkritisch"],delir:["y","Sedierung"],pd:["g","Unkritisch"],sucht:["g","Therapie der Sucht"],atem:["y","Mit BZD/Alkohol gefährlich"],fahr:["y","Stabil eingestellt oft möglich"]},
  tg:{s:["3A4"],at:2,sd:1,op:"partial"},
  src:"FI · BÄK-Richtlinie Substitution · S3 Medikamentenbez. [?]"
};

D.methadon = {
  n:"Methadon / Levomethadon", b:["Methaddict","Eptadone","L-Polamidon"], k:"Voller µ-Opioidagonist, NMDA-Antagonist", g:"Entzugsmittel",
  kern:["Substitution; Kumulation bis Tag 3–5 (HWZ 24–36 h, variabel)","Racemat Start 10–30 mg, max. 40 mg Tag 1; +5–10 mg alle 3–5 Tage [?]","Levomethadon = halbe Racemat-Dosis","QT dosisabhängig: EKG","Induktoren (Carbamazepin, Rifampicin) → Entzug"],
  ind:"Substitutionstherapie bei Opioidabhängigkeit (BtMVV); Levomethadon zusätzlich starke Schmerzen.",
  off:"Keine relevanten.",
  ki:"Atemdepression, akutes Asthma, paralytischer Ileus, MAO-Hemmer, QT-Verlängerung (relativ).",
  dos:{e:"Racemat: Start 10–30 mg, max. 40 mg am ersten Tag; Steigerung 5–10 mg alle 3–5 Tage; Erhaltung meist 60–120 mg [?]. Levomethadon: jeweils halbe Dosis.",a:"Niedriger beginnen, langsamer steigern.",j:"Nur Ausnahmefälle."},
  nw:"Atemdepression (besonders in der Einstellungsphase), Sedierung, Obstipation, Schwitzen, QT-Verlängerung, Hypogonadismus.",
  ia:"CYP3A4/2B6/2C19-Substrat: Carbamazepin, Rifampicin, Phenytoin, Efavirenz senken Spiegel und lösen Entzug aus; Fluvoxamin, Clarithromycin, Fluconazol erhöhen. Additive QT-Verlängerung, Atemdepression mit BZD und Alkohol. Schwach serotonerg.",
  ktr:"EKG vor Beginn und bei Dosen über ca. 100–120 mg oder QT-Komedikation, weil das QT-Risiko dosisabhängig ist; Vigilanz in der ersten Woche wegen Kumulation.",
  ss:"Schwangerschaft: Substitution empfohlen, neonatales Entzugssyndrom einplanen. Stillzeit: vertretbar.",
  mech:"Voller µ-Agonist mit langer, variabler Halbwertszeit; NMDA-Antagonismus reduziert Toleranz.",
  auf:"Ein Ersatzmittel gegen Entzug und Suchtdruck. Es wirkt in den ersten Tagen von Tag zu Tag stärker, deshalb wird die Dosis langsam angepasst. Keine anderen Beruhigungsmittel und kein Alkohol.",
  cx:{schw:["g","Substitution empfohlen"],still:["g","Vertretbar"],alt:["y","Kumulation"],jug:["r","Ausnahme"],niere:["y","Vorsicht"],leber:["y","Kumulation"],qtc:["r","QT ↑ dosisabhängig"],epi:["g","Unkritisch"],delir:["y","Sedierung"],pd:["g","Unkritisch"],sucht:["g","Therapie der Sucht"],atem:["r","Atemdepression, besonders in der Einstellung"],fahr:["y","Stabil eingestellt oft möglich"]},
  tg:{s:["3A4","2B6","2C19"],qt:3,at:2,sd:2,se:1,op:"full"},
  src:"FI · BÄK-Richtlinie Substitution · CredibleMeds"
};

D.naloxon = {
  n:"Naloxon", b:["Nyxoid (nasal)","Naloxon-ratiopharm"], k:"Opioidantagonist", g:"Entzugsmittel",
  kern:["Opioid-Intoxikation: titriert 0,04–0,4 mg i. v. [?]","Take-home-Naloxon (nasal 1,8 mg) bei jeder Entlassung nach Entzug","Toleranzverlust nach Entzug: höchstes Überdosisrisiko","Kürzere Wirkung als die meisten Opioide: nachbeobachten","Löst Entzug aus"],
  ind:"Aufhebung opioidinduzierter Atemdepression; Notfallbehandlung bei bekannter oder vermuteter Opioidüberdosierung (nasal, auch durch Laien).",
  off:"Keine.",
  ki:"Überempfindlichkeit.",
  dos:{e:"i. v. titriert in kleinen Schritten bis ausreichende Atmung; nasal 1,8 mg, nach 2–3 min wiederholen [?].",a:"Wie Erwachsene.",j:"Nasal ab 14 J. [?]."},
  nw:"Akutes Entzugssyndrom, Agitation, Erbrechen, selten Lungenödem.",
  ia:"Hebt Opioidwirkung auf; bei Buprenorphin oft höhere Dosen nötig.",
  ktr:"Nachbeobachtung über die Wirkdauer des Opioids hinaus, weil Naloxon nach 30–90 min abklingt.",
  ss:"Im Notfall immer.",
  mech:"Kompetitiver Antagonist an µ-, κ- und δ-Rezeptoren.",
  auf:"Ein Notfallspray gegen Opioid-Überdosis. Nach einem Entzug verträgt der Körper viel weniger als vorher; deshalb sollten Sie und Angehörige das Spray haben und wissen, wie es geht.",
  cx:{},
  tg:{op:"ant"},
  src:"FI · S3 Medikamentenbez. [?]"
};

D.loperamid = {
  n:"Loperamid", b:["Imodium"], k:"Peripherer µ-Agonist", g:"Entzugsmittel",
  kern:["Diarrhoe im Opioidentzug","4 mg initial, dann 2 mg nach jedem ungeformten Stuhl","Max. 12 mg/d (rezeptfrei), ärztlich bis 16 mg [?]","Hohe Dosen: QT und Arrhythmien (Missbrauch)","Nicht bei blutiger Diarrhoe oder Fieber"],
  ind:"Symptomatische Behandlung akuter Diarrhoe.",
  off:"Keine.",
  ki:"Blutige Diarrhoe mit Fieber, pseudomembranöse Kolitis, Ileus, < 2 J.",
  dos:{e:"4 mg, dann 2 mg nach jedem ungeformten Stuhl, max. 12–16 mg/d.",a:"Wie Erwachsene.",j:"Ab 12 J. wie Erwachsene [?]."},
  nw:"Obstipation, Blähungen; in hohen Dosen QT-Verlängerung, Torsade.",
  ia:"P-gp- und CYP3A4-Hemmer erhöhen zentrale Gängigkeit und QT-Risiko.",
  ktr:"EKG bei hohen Dosen oder QT-Komedikation.",
  ss:"Schwangerschaft: vertretbar. Stillzeit: vertretbar.",
  mech:"µ-Agonist im Darm; durch P-Glykoprotein aus dem ZNS ferngehalten.",
  auf:"Ein Mittel gegen Durchfall im Entzug. Nicht mehr als verordnet nehmen, weil hohe Mengen das Herz gefährden.",
  cx:{qtc:["y","Hohe Dosen QT ↑"]},
  tg:{s:["3A4"],qt:1},
  src:"FI"
};

D.pregabalin = {
  n:"Pregabalin", b:["Lyrica"], k:"Gabapentinoid (α2δ-Ligand)", g:"Antikonvulsiva",
  kern:["GAD, neuropathischer Schmerz, Epilepsie (Zusatz)","GAD 150–600 mg/d auf 2–3 Gaben","Missbrauch und Abhängigkeit, v. a. bei Opioidkonsum","Atemdepression mit Opioiden (Warnhinweis)","Niere: Dosis nach Kreatinin-Clearance"],
  ind:"Generalisierte Angststörung; peripherer und zentraler neuropathischer Schmerz; Zusatztherapie fokaler Anfälle.",
  off:"BZD-Entzug adjuvant, Alkoholentzug (begrenzte Evidenz).",
  ki:"Überempfindlichkeit; seltene hereditäre Galaktoseintoleranz.",
  dos:{e:"GAD: 150 mg/d, wöchentlich steigern bis 600 mg/d. CrCl 30–60: max. 300 mg; 15–30: max. 150 mg; < 15: max. 75 mg [?].",a:"Niedrig, nach Nierenfunktion.",j:"Nicht zugelassen."},
  nw:"Schwindel, Benommenheit, Gewichtszunahme, Ödeme, Sehstörungen, Euphorie, Absetzsymptome.",
  ia:"Kein CYP. Additive ZNS- und Atemdepression mit Opioiden, BZD, Alkohol.",
  ktr:"Nierenfunktion vor Beginn, weil die Elimination rein renal ist; Missbrauchszeichen (Dosiswunsch, frühe Rezepte).",
  ss:"Schwangerschaft: leicht erhöhtes Fehlbildungsrisiko (EMA 2022), meiden. Stillzeit: geht über, meiden.",
  mech:"Bindet an die α2δ-Untereinheit spannungsabhängiger Kalziumkanäle und vermindert die Freisetzung erregender Transmitter.",
  auf:"Ein Mittel gegen Angst und Nervenschmerzen. Es kann abhängig machen, wenn man mehr als verordnet nimmt, und ist gefährlich zusammen mit Opioiden.",
  cx:{schw:["r","Fehlbildungsrisiko"],still:["y","Meiden"],alt:["y","Schwindel, Sturz"],jug:["r","Nicht zugelassen"],niere:["r","Dosisanpassung zwingend"],leber:["g","Unkritisch"],qtc:["g","Unkritisch"],epi:["g","Antikonvulsiv"],delir:["y","Sedierung"],pd:["y","Schwindel"],sucht:["r","Missbrauchspotenzial"],atem:["r","Mit Opioiden Atemdepression"],fahr:["y","Schwindel"]},
  tg:{sd:2,at:1},
  src:"FI · EMA 2022"
};

D.gabapentin = {
  n:"Gabapentin", b:["Neurontin"], k:"Gabapentinoid (α2δ-Ligand)", g:"Antikonvulsiva",
  kern:["Off-label: leichter Alkoholentzug, Rückfallprophylaxe Alkohol, Cannabisentzug","900–1800 mg/d auf 3 Gaben [?]","Kein Leberabbau: gut bei Leberschaden","Niere: Dosis nach GFR","Missbrauch bei Opioidkonsum"],
  ind:"Epilepsie (fokal); peripherer neuropathischer Schmerz.",
  off:"Alkoholentzug leicht bis mittel und Rückfallprophylaxe (moderate Evidenz), Cannabisentzug (ein RCT), Insomnie bei Sucht.",
  ki:"Überempfindlichkeit.",
  dos:{e:"Start 300 mg, steigern auf 900–1800 mg/d, max. 3600 mg [?]. Nach GFR anpassen.",a:"Niedrig, nach Nierenfunktion.",j:"Epilepsie ab 6 J."},
  nw:"Schwindel, Müdigkeit, Ataxie, Ödeme, Gewicht.",
  ia:"Kein CYP. Additive Atemdepression mit Opioiden.",
  ktr:"Nierenfunktion; Missbrauchszeichen.",
  ss:"Schwangerschaft: Daten begrenzt. Stillzeit: vertretbar [?].",
  mech:"α2δ-Ligand wie Pregabalin, mit sättigbarer Resorption.",
  auf:"Ein Mittel, das Unruhe und Schlafstörungen nach dem Alkoholentzug lindern kann. Zusammen mit Opioiden gefährlich.",
  cx:{schw:["y","Daten begrenzt"],still:["g","Vertretbar [?]"],alt:["y","Sturz"],jug:["y","Nur Epilepsie"],niere:["r","Dosisanpassung"],leber:["g","Kein Leberabbau"],qtc:["g","Unkritisch"],epi:["g","Antikonvulsiv"],delir:["y","Sedierung"],pd:["y","Schwindel"],sucht:["y","Missbrauch v. a. bei Opioidkonsum"],atem:["r","Mit Opioiden Atemdepression"],fahr:["y","Schwindel"]},
  tg:{sd:2,at:1},
  src:"FI · S3 Alkohol [?]"
};

D.baclofen = {
  n:"Baclofen", b:["Lioresal"], k:"GABA-B-Agonist", g:"Entzugsmittel",
  kern:["Off-label: GHB/GBL-Entzug adjuvant, Alkohol-Rückfallprophylaxe","5–10 mg 3×/d, langsam steigern","Renal eliminiert: Niere beachten","Abruptes Absetzen: Delir, Krampfanfälle","Evidenz bei GHB: Fallserien"],
  ind:"Spastik.",
  off:"GHB/GBL-Entzug (adjuvant zu BZD), Alkoholabhängigkeit (Frankreich zugelassen; Evidenz gemischt).",
  ki:"Terminale Niereninsuffizienz [?], Epilepsie (relativ).",
  dos:{e:"5 mg 3×/d, alle 3 Tage um 5 mg steigern; GHB-Entzug 3×10–25 mg [?].",a:"Niedriger.",j:"Spastik ab 1 J."},
  nw:"Sedierung, Schwindel, Muskelschwäche, Verwirrtheit; Überdosis: Atemdepression, Koma.",
  ia:"Additive Sedierung.",
  ktr:"Nierenfunktion, weil Kumulation zu Enzephalopathie führt.",
  ss:"Schwangerschaft: begrenzte Daten. Stillzeit: vertretbar.",
  mech:"Agonist am GABA-B-Rezeptor, an dem auch GHB wirkt.",
  auf:"Ein Muskelentspanner, der im GHB-Entzug zusätzlich hilft. Nicht plötzlich absetzen.",
  cx:{schw:["y","Begrenzte Daten"],still:["g","Vertretbar"],alt:["y","Verwirrtheit"],jug:["y","Nur Spastik"],niere:["r","Kumulation"],leber:["g","Unkritisch"],qtc:["g","Unkritisch"],epi:["y","Krampfschwelle"],delir:["y","Verwirrtheit"],pd:["g","Unkritisch"],sucht:["y","Missbrauch selten"],atem:["y","In Überdosis"],fahr:["y","Sedierend"]},
  tg:{sd:2,at:1,kr:1},
  src:"FI · Fallserien [?]"
};

D.dantrolen = {
  n:"Dantrolen", b:["Dantrolen i. v.","Dantamacrin"], k:"Peripheres Muskelrelaxans (Ryanodin-Rezeptor)", g:"EPMS-Mittel",
  kern:["Malignes neuroleptisches Syndrom mit ausgeprägtem Rigor und Hyperthermie (off-label)","1–2,5 mg/kg i. v., bis 10 mg/kg/d [?]","Intensivmedizinisch, mit Kühlung und Volumen","Hepatotoxisch bei längerer Gabe","Nicht mit Kalziumantagonisten i. v. (Hyperkaliämie)"],
  ind:"Maligne Hyperthermie; Spastik (oral).",
  off:"Malignes neuroleptisches Syndrom.",
  ki:"Lebererkrankung (oral).",
  dos:{e:"1–2,5 mg/kg i. v., bei Bedarf wiederholen bis 10 mg/kg/d [?].",a:"Wie Erwachsene.",j:"Gewichtsadaptiert."},
  nw:"Muskelschwäche, Phlebitis, Leberschaden.",
  ia:"i. v.-Kalziumantagonisten (Verapamil): Hyperkaliämie, Kreislaufversagen.",
  ktr:"Leberwerte, CK, Kalium.",
  ss:"Im Notfall nach Nutzen-Risiko.",
  mech:"Hemmt die Kalziumfreisetzung aus dem sarkoplasmatischen Retikulum und senkt so die Wärmeproduktion im Muskel.",
  auf:"Ein Notfallmedikament gegen gefährliche Muskelsteifigkeit und Fieber.",
  cx:{},
  tg:{},
  src:"FI · Fallserien"
};

D.bromocriptin = {
  n:"Bromocriptin", b:["Pravidel","Kirim"], k:"Dopaminagonist", g:"EPMS-Mittel",
  kern:["Malignes neuroleptisches Syndrom (off-label)","2,5 mg 2–3×/d, bis 30–45 mg/d [?]","Kann Psychose verschlechtern","Hypotonie, Übelkeit","Langsam ausschleichen"],
  ind:"Abstillen (eingeschränkt), Hyperprolaktinämie, Akromegalie, Parkinson.",
  off:"Malignes neuroleptisches Syndrom.",
  ki:"Unkontrollierte Hypertonie, Schwangerschaftshypertonie, schwere Psychose (relativ).",
  dos:{e:"2,5 mg 2–3×/d oral/Sonde, steigern bis 30–45 mg/d [?].",a:"Wie Erwachsene.",j:"Kaum Daten."},
  nw:"Übelkeit, Hypotonie, Halluzinationen, Psychoseverschlechterung.",
  ia:"Antagonismus mit Antipsychotika.",
  ktr:"Psychopathologie, Blutdruck.",
  ss:"Hemmt Laktation.",
  mech:"D2-Agonist: hebt die zentrale Dopaminblockade auf, die dem MNS zugrunde liegt.",
  auf:"Ein Medikament, das die durch Neuroleptika blockierte Dopaminwirkung wiederherstellt.",
  cx:{},
  tg:{dag:2},
  src:"Fallserien · Lehrbuchstandard [?]"
};
