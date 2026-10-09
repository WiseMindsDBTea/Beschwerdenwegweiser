/* Wirkstoffkarten Teil 1: Hypnotika, Benzodiazepine, sedierende Mittel.
   Felder: n Name, b Handelsnamen, k Klasse, g Gruppe, kern Kurzkern,
   ind zugelassen (DE), off off-label, ki Kontraindikationen, dos {e,a,j},
   nw, ia Interaktionen (Text), ktr Kontrollen mit Begründung, ss Schwangerschaft/Stillzeit,
   mech Mechanismus (Lernmodus), auf Aufklärung (Laiensprache), cx Kontextfilter,
   tg Interaktions-Tags, src Quellen. "[?]" = vor Verlass gegen Fachinfo prüfen. */
var D = window.D = window.D || {};

D.zolpidem = {
  n:"Zolpidem", b:["Stilnox","Bikalm","Zolpidem-ratiopharm"], k:"Z-Substanz (Benzodiazepin-Rezeptoragonist)", g:"Hypnotika",
  kern:["Einschlafstörung, kurz wirksam (HWZ 2–3 h)","10 mg z. N.; ≥ 65 J. und Leber: 5 mg","Max. 4 Wochen inkl. Ausschleichen","Abhängigkeit, komplexes Schlafverhalten, Stürze","KI: Schlafapnoe, Myasthenie, schwere Leberinsuffizienz"],
  ind:"Kurzzeitbehandlung von Schlafstörungen bei Erwachsenen, wenn die Schlafstörung schwerwiegend ist und den Patienten stark beeinträchtigt.",
  off:"Keine relevanten.",
  ki:"Schwere Leberinsuffizienz, Schlafapnoe-Syndrom, Myasthenia gravis, schwere respiratorische Insuffizienz, komplexes Schlafverhalten (Schlafwandeln, Schlaffahren) nach Z-Substanz in der Vorgeschichte, < 18 J.",
  dos:{e:"10 mg unmittelbar vor dem Zubettgehen, nur bei mindestens 7–8 h Schlafgelegenheit.",a:"5 mg (PRISCUS 2.0: > 5 mg potenziell inadäquat).",j:"Nicht zugelassen."},
  nw:"Amnesie für die Nacht, komplexes Schlafverhalten, Verwirrtheit und Stürze (v. a. Ältere), Toleranz, Rebound-Insomnie, Abhängigkeit bei Dauergebrauch.",
  ia:"CYP3A4-Substrat: starke Inhibitoren (Clarithromycin, Ritonavir) erhöhen Spiegel; Induktoren (Carbamazepin, Rifampicin) senken. Additive ZNS-Dämpfung mit Alkohol, Opioiden, anderen Sedativa.",
  ktr:"Keine Laborkontrollen nötig. Sturzrisiko und Abhängigkeitsentwicklung bei jeder Folgeverordnung erfragen.",
  ss:"Schwangerschaft: gelegentliche Einnahme akzeptabel, bei Gabe kurz vor Geburt Anpassungsstörungen beim Neugeborenen möglich [?]. Stillzeit: Einzeldosen akzeptabel, geringer Übergang in Muttermilch.",
  mech:"Positiver allosterischer Modulator am GABA-A-Rezeptor mit Präferenz für α1-Untereinheiten (sedierend-hypnotisch), geringere anxiolytische und muskelrelaxierende Wirkung als klassische Benzodiazepine.",
  auf:"Ein Schlafmittel, das schnell wirkt und kurz anhält. Nur kurzzeitig nehmen, weil sich der Körper sonst daran gewöhnt. Direkt vor dem Zubettgehen einnehmen, nachts nicht aufstehen ohne Licht, kein Alkohol dazu, am nächsten Morgen nicht sofort Auto fahren.",
  cx:{schw:["y","Gelegentlich akzeptabel, Daten begrenzt [?]"],still:["y","Einzeldosen akzeptabel"],alt:["y","Nur 5 mg, Sturz- und Verwirrtheitsrisiko"],jug:["r","Nicht zugelassen"],niere:["g","Keine Anpassung"],leber:["r","Schwer: KI; leicht bis mittel: 5 mg"],qtc:["g","Kein relevantes QT-Risiko"],epi:["g","Unkritisch"],delir:["r","Kann Delir auslösen oder verstärken"],pd:["y","Sturzrisiko"],sucht:["r","Abhängigkeitspotenzial"],atem:["r","Schlafapnoe und schwere Ateminsuffizienz: KI"],fahr:["y","Am Folgemorgen eingeschränkt möglich"]},
  tg:{s:["3A4"],sd:2,at:1},
  src:"FI · PRISCUS 2.0 · Embryotox"
};

D.zopiclon = {
  n:"Zopiclon", b:["Ximovan","Zopiclon-ratiopharm"], k:"Z-Substanz (Benzodiazepin-Rezeptoragonist)", g:"Hypnotika",
  kern:["Ein- und Durchschlafstörung (HWZ ca. 5 h)","7,5 mg z. N.; ≥ 65 J. und Leber: 3,75 mg","Max. 4 Wochen inkl. Ausschleichen","Bitterer Geschmack, Überhang am Morgen","KI wie Zolpidem"],
  ind:"Kurzzeitbehandlung von Schlafstörungen bei Erwachsenen mit erheblicher Beeinträchtigung.",
  off:"Keine relevanten.",
  ki:"Schwere Leberinsuffizienz, Schlafapnoe-Syndrom, Myasthenia gravis, schwere respiratorische Insuffizienz, komplexes Schlafverhalten in der Vorgeschichte, < 18 J.",
  dos:{e:"7,5 mg vor dem Zubettgehen.",a:"3,75 mg, bei Bedarf 7,5 mg.",j:"Nicht zugelassen."},
  nw:"Bitterer Metallgeschmack, Überhang am Morgen (stärker als Zolpidem), Amnesie, Stürze, Toleranz, Abhängigkeit.",
  ia:"CYP3A4- und CYP2C8-Substrat: starke 3A4-Inhibitoren erhöhen Spiegel deutlich. Additive Sedierung mit Alkohol, Opioiden, Antihistaminika.",
  ktr:"Keine Laborkontrollen. Fahrtauglichkeit und Sturzrisiko ansprechen.",
  ss:"Schwangerschaft: ausnahmsweise kurzzeitig vertretbar [?]. Stillzeit: Einzeldosen vertretbar, Übergang höher als bei Zolpidem [?].",
  mech:"GABA-A-Modulator an der Benzodiazepin-Bindungsstelle, Cyclopyrrolon-Struktur.",
  auf:"Ein Schlafmittel, das etwa 5 Stunden wirkt und auch beim Durchschlafen hilft. Oft bitterer Geschmack. Nur wenige Wochen nehmen. Am nächsten Morgen kann die Reaktionsfähigkeit noch eingeschränkt sein.",
  cx:{schw:["y","Ausnahmsweise kurzzeitig [?]"],still:["y","Einzeldosen"],alt:["y","3,75 mg, Sturzrisiko"],jug:["r","Nicht zugelassen"],niere:["g","Keine Anpassung"],leber:["r","Schwer: KI; sonst 3,75 mg"],qtc:["g","Unkritisch"],epi:["g","Unkritisch"],delir:["r","Delirogen"],pd:["y","Sturzrisiko"],sucht:["r","Abhängigkeitspotenzial"],atem:["r","Schlafapnoe: KI"],fahr:["r","Morgendlicher Überhang häufig"]},
  tg:{s:["3A4"],sd:2,at:1},
  src:"FI · PRISCUS 2.0"
};

D.daridorexant = {
  n:"Daridorexant", b:["Quviviq"], k:"Dualer Orexin-Rezeptorantagonist (DORA)", g:"Hypnotika",
  kern:["Chronische Insomnie (≥ 3 Monate) mit Tagesbeeinträchtigung","50 mg z. N.; 25 mg bei mäßiger Leberinsuffizienz oder mäßigen 3A4-Hemmern","Kaum Toleranz, kein relevantes Rebound in Studien bis 12 Monate","KI: Narkolepsie, starke CYP3A4-Inhibitoren","Teuer; Wirkung auf Durchschlafen besser belegt als auf Einschlafen [?]"],
  ind:"Erwachsene mit Insomnie, deren Symptome seit mindestens 3 Monaten bestehen und die Tagesfunktion erheblich beeinträchtigen.",
  off:"Keine.",
  ki:"Narkolepsie, gleichzeitige Gabe starker CYP3A4-Inhibitoren, schwere Leberinsuffizienz (nicht empfohlen).",
  dos:{e:"50 mg abends 30 min vor dem Zubettgehen.",a:"50 mg, keine Anpassung nötig.",j:"Nicht zugelassen."},
  nw:"Kopfschmerz, Müdigkeit, Schwindel; selten Schlafparalyse, hypnagoge Halluzinationen.",
  ia:"CYP3A4-Substrat: starke Inhibitoren kontraindiziert, starke Induktoren (Carbamazepin, Rifampicin) machen es unwirksam.",
  ktr:"Keine Laborkontrollen. Nach 3 Monaten Nutzen neu bewerten.",
  ss:"Schwangerschaft und Stillzeit: keine Daten, meiden.",
  mech:"Blockiert Orexin-1- und Orexin-2-Rezeptoren und dämpft damit das Wachheitssystem, statt das GABA-System zu verstärken.",
  auf:"Ein neueres Schlafmittel, das das Wachsystem im Gehirn bremst. Es macht nach bisherigem Wissen kaum abhängig. Wirkung baut sich manchmal über einige Tage auf.",
  cx:{schw:["y","Keine Daten"],still:["y","Keine Daten"],alt:["g","Keine Anpassung, in Studien geprüft"],jug:["r","Nicht zugelassen"],niere:["g","Keine Anpassung"],leber:["r","Schwer: nicht empfohlen; mäßig: 25 mg"],qtc:["g","Unkritisch"],epi:["g","Unkritisch"],delir:["y","Kaum Daten"],pd:["g","Kein Dopaminantagonismus"],sucht:["y","Missbrauchspotenzial in Studien ähnlich Zolpidem, klinisch gering [?]"],atem:["y","Leichte bis mittlere OSA geprüft, schwere: Vorsicht"],fahr:["y","Morgens meist unbeeinträchtigt"]},
  tg:{s:["3A4"],sens:["3A4"],sd:2},
  src:"FI · S3 Insomnie [?]"
};

D.melatonin = {
  n:"Melatonin (retardiert)", b:["Circadin","Slenyto"], k:"Melatonin-Rezeptoragonist", g:"Hypnotika",
  kern:["Primäre Insomnie ab 55 J. (Circadin 2 mg)","2 mg retard 1–2 h vor dem Schlafen, bis 13 Wochen","Kaum Nebenwirkungen, keine Abhängigkeit","Fluvoxamin erhöht Spiegel massiv (CYP1A2)","Effekt klein, eher Schlafqualität als Schlafdauer"],
  ind:"Circadin: primäre Insomnie bei Patienten ab 55 Jahren. Slenyto: Insomnie bei Kindern und Jugendlichen 2–18 J. mit Autismus-Spektrum-Störung oder Smith-Magenis-Syndrom.",
  off:"Zirkadiane Rhythmusstörungen, Jetlag, Delirprävention (Evidenz uneinheitlich).",
  ki:"Überempfindlichkeit. Vorsicht bei Autoimmunerkrankungen (Herstellerhinweis).",
  dos:{e:"2 mg retard 1–2 h vor dem Zubettgehen.",a:"2 mg retard.",j:"Slenyto bei ASS: 2 mg, bis 10 mg."},
  nw:"Selten Kopfschmerz, Benommenheit, Albträume.",
  ia:"CYP1A2-Substrat: Fluvoxamin vermeiden, Ciprofloxacin erhöht. Rauchen senkt Spiegel.",
  ktr:"Keine.",
  ss:"Schwangerschaft und Stillzeit: Daten begrenzt, nicht empfohlen.",
  mech:"Agonist an MT1- und MT2-Rezeptoren im Nucleus suprachiasmaticus, verstärkt das Schlafsignal der inneren Uhr.",
  auf:"Ein Mittel mit dem körpereigenen Schlafhormon in langsam freisetzender Form. Es macht nicht abhängig, wirkt aber mild. Ein bis zwei Stunden vor dem Schlafen nehmen.",
  cx:{schw:["y","Daten begrenzt"],still:["y","Daten begrenzt"],alt:["g","Zugelassen ab 55 J."],jug:["g","Slenyto bei ASS zugelassen"],niere:["g","Unkritisch"],leber:["y","Clearance vermindert"],qtc:["g","Unkritisch"],epi:["g","Unkritisch"],delir:["g","Gut verträglich"],pd:["g","Unkritisch"],sucht:["g","Kein Abhängigkeitspotenzial"],atem:["g","Keine Atemdepression"],fahr:["g","Kaum Überhang"]},
  tg:{s:["1A2"],sens:["1A2"],sd:1},
  src:"FI"
};

D.lorazepam = {
  n:"Lorazepam", b:["Tavor","Tavor Expidet","Tavor pro injectione"], k:"Benzodiazepin, mittellang (HWZ 12–16 h)", g:"Benzodiazepine",
  kern:["Akute Angst, Agitation, Katatonie, Status epilepticus","0,5–2,5 mg/d verteilt, stationär bis 7,5 mg [?]","Glukuronidierung, kein CYP: günstig bei Leberschaden und Älteren","Max. 4 Wochen, dann ausschleichen","KI: Myasthenie, Schlafapnoe, schwere Ateminsuffizienz"],
  ind:"Symptomatische Behandlung akuter und chronischer Angst-, Spannungs- und Erregungszustände; Schlafstörungen, die durch Angst bedingt sind; Prämedikation; Status epilepticus (i. v.).",
  off:"Katatonie (Lorazepam-Test 1–2,5 mg, Therapie bis 8–24 mg/d), Agitation bei Psychose oder Manie, Alkoholentzug bei Leberschaden.",
  ki:"Myasthenia gravis, Schlafapnoe-Syndrom, schwere respiratorische Insuffizienz, schwere Leberinsuffizienz mit Enzephalopathie, akute Intoxikation mit Alkohol oder ZNS-Dämpfern. Relativ: Abhängigkeitsanamnese.",
  dos:{e:"0,5–2,5 mg/d auf 2–3 Gaben; akut 1–2,5 mg p. o. oder i. m./i. v.; Katatonie siehe off-label.",a:"Halbe Dosis, z. B. 0,5 mg; Sturzrisiko.",j:"Ab 12 J. bei strenger Indikation, Dosis wie Erwachsene niedrig beginnen [?]."},
  nw:"Sedierung, Ataxie, Stürze, anterograde Amnesie, paradoxe Erregung (Ältere, Hirnorganik), Atemdepression in Kombination, Toleranz und Abhängigkeit, Entzugsanfälle bei abruptem Absetzen.",
  ia:"Kein CYP: wenig pharmakokinetische Interaktionen. Valproat erhöht Spiegel (UGT-Hemmung). Additive Atemdepression mit Opioiden, Alkohol, Clozapin, Gabapentinoiden; Olanzapin i. m. nicht gleichzeitig mit parenteralem BZD.",
  ktr:"Atmung und Vigilanz nach parenteraler Gabe. Behandlungsdauer und Dosis bei jeder Visite dokumentieren, weil die Abhängigkeit oft schleichend entsteht.",
  ss:"Schwangerschaft: kurzzeitig vertretbar; vor Geburt Floppy-Infant- und Entzugssyndrom möglich. Stillzeit: Einzeldosen vertretbar, Kind auf Sedierung beobachten.",
  mech:"Positiver allosterischer Modulator am GABA-A-Rezeptor (Benzodiazepin-Bindungsstelle), erhöht die Öffnungsfrequenz des Chloridkanals.",
  auf:"Ein schnell wirksames Beruhigungsmittel gegen starke Angst und Unruhe. Es wirkt zuverlässig, macht bei längerer Einnahme aber abhängig, deshalb nur kurz und nach Plan. Kein Alkohol, kein Autofahren.",
  cx:{schw:["y","Kurzzeitig vertretbar, Peripartal Vorsicht"],still:["y","Einzeldosen"],alt:["y","Halbe Dosis, Sturz, Delir (PRISCUS)"],jug:["y","Strenge Indikation [?]"],niere:["g","Kaum Anpassung"],leber:["g","Glukuronidierung, BZD der Wahl bei Leberschaden (nicht bei Enzephalopathie)"],qtc:["g","Unkritisch"],epi:["g","Antikonvulsiv; abruptes Absetzen provoziert Anfälle"],delir:["r","Delirogen; Ausnahme: Alkohol-/BZD-Entzugsdelir, Katatonie"],pd:["y","Sturzrisiko"],sucht:["r","Hohes Abhängigkeitspotenzial"],atem:["r","Atemdepression"],fahr:["r","Nicht fahrtauglich unter Akutgabe"]},
  tg:{sd:3,at:2},
  src:"FI · S3 Medikamentenbez. Störungen · S3 Schizophrenie"
};

D.diazepam = {
  n:"Diazepam", b:["Valium","Diazepam-ratiopharm","Stesolid (rektal)"], k:"Benzodiazepin, lang (HWZ 20–50 h, Nordazepam bis 100 h)", g:"Benzodiazepine",
  kern:["Alkoholentzug, BZD-Ausschleichen (Bezugssubstanz), Angst, Spasmen","AWS: symptomgetriggert 10–20 mg, Wdh. nach Score [?]","Lange HWZ: glatter Entzug, aber Kumulation bei Älteren und Leberschaden","CYP3A4 und 2C19","KI: Myasthenie, Schlafapnoe, schwere Ateminsuffizienz"],
  ind:"Angst-, Spannungs- und Erregungszustände; Alkoholentzugssyndrom; Muskelspasmen; Status epilepticus und Fieberkrampf (rektal, i. v.); Prämedikation.",
  off:"Umstellung beim BZD-Entzug (Äquivalenzdosis), GHB-Entzug (hohe Dosen, stationär).",
  ki:"Myasthenia gravis, Schlafapnoe, schwere respiratorische Insuffizienz, schwere Leberinsuffizienz, akute Intoxikation mit Alkohol oder ZNS-Dämpfern.",
  dos:{e:"Angst: 2–20 mg/d. AWS: Einzeldosis 10–20 mg nach Score, frühestens stündlich wiederholen; Tageshöchstdosis nach Hausprotokoll [?].",a:"Wegen Kumulation meiden; falls nötig 2–5 mg.",j:"Ab 12 J. bei strenger Indikation, niedrig beginnen [?]."},
  nw:"Wie andere BZD; zusätzlich Kumulation mit Tagesmüdigkeit und Stürzen über Tage.",
  ia:"CYP3A4/2C19-Substrat: Fluvoxamin, Fluconazol, Omeprazol erhöhen; Carbamazepin, Rifampicin senken. Additive Atemdepression mit Opioiden und Alkohol.",
  ktr:"Vigilanz und Atmung bei hohen Entzugsdosen; Leberwerte, weil die Kumulation bei Leberschaden schwer vorhersehbar ist.",
  ss:"Schwangerschaft: kurzzeitig möglich, Lorazepam meist vorzuziehen. Stillzeit: wegen Kumulation beim Säugling ungünstig.",
  mech:"GABA-A-Modulator; aktive Metaboliten Nordazepam, Oxazepam, Temazepam verlängern die Wirkung.",
  auf:"Ein lang wirkendes Beruhigungsmittel. Beim Entzug von Alkohol oder anderen Beruhigungsmitteln verhindert es Krampfanfälle und starke Unruhe. Dosis wird schrittweise verringert.",
  cx:{schw:["y","Kurzzeitig, Lorazepam vorziehen"],still:["r","Kumulation beim Säugling"],alt:["r","Kumulation, Stürze (PRISCUS)"],jug:["y","Strenge Indikation [?]"],niere:["g","Kaum Anpassung"],leber:["r","Kumulation; Lorazepam oder Oxazepam bevorzugen"],qtc:["g","Unkritisch"],epi:["g","Antikonvulsiv"],delir:["r","Delirogen außer Entzugsdelir"],pd:["y","Sturzrisiko"],sucht:["r","Abhängigkeit"],atem:["r","Atemdepression"],fahr:["r","Nicht fahrtauglich"]},
  tg:{s:["3A4","2C19"],sd:3,at:2},
  src:"FI · S3 Alkohol · S3 Medikamentenbez. Störungen"
};

D.oxazepam = {
  n:"Oxazepam", b:["Adumbran","Praxiten","Oxazepam-ratiopharm"], k:"Benzodiazepin, kurz bis mittellang (HWZ 6–10 h)", g:"Benzodiazepine",
  kern:["Angst, Spannung, Alkoholentzug bei Leberschaden","10–60 mg/d, stationär höher [?]","Glukuronidierung, keine aktiven Metaboliten","Langsame Anflutung, etwas weniger Kick als Diazepam","Häufige Wahl beim stationären BZD-Ausschleichen in DE"],
  ind:"Angst-, Spannungs- und Erregungszustände; Schlafstörungen bei Angst.",
  off:"Alkoholentzug bei Leberschaden oder im Alter.",
  ki:"Myasthenia gravis, Schlafapnoe, schwere Ateminsuffizienz, akute Intoxikation mit ZNS-Dämpfern.",
  dos:{e:"10–60 mg/d auf 2–4 Gaben; AWS symptomgetriggert z. B. 30 mg pro Gabe [?].",a:"10–30 mg/d.",j:"Ab 12 J. strenge Indikation [?]."},
  nw:"Wie BZD.",
  ia:"Kein CYP. Additive ZNS-Dämpfung.",
  ktr:"Wie Lorazepam.",
  ss:"Schwangerschaft: kurzzeitig vertretbar. Stillzeit: Einzeldosen vertretbar.",
  mech:"GABA-A-Modulator; selbst aktiver Endmetabolit von Diazepam.",
  auf:"Ein Beruhigungsmittel, das langsamer anflutet als andere. Auch hier gilt: nur kurz und nach Plan, weil es abhängig machen kann.",
  cx:{schw:["y","Kurzzeitig vertretbar"],still:["y","Einzeldosen"],alt:["y","Niedrig dosieren, Sturz"],jug:["y","Strenge Indikation [?]"],niere:["g","Kaum Anpassung"],leber:["g","Glukuronidierung, gut geeignet"],qtc:["g","Unkritisch"],epi:["g","Antikonvulsiv"],delir:["r","Delirogen außer Entzugsdelir"],pd:["y","Sturz"],sucht:["r","Abhängigkeit"],atem:["r","Atemdepression"],fahr:["r","Nicht fahrtauglich"]},
  tg:{sd:3,at:2},
  src:"FI · S3 Alkohol"
};

D.clomethiazol = {
  n:"Clomethiazol", b:["Distraneurin"], k:"GABA-A-modulierendes Sedativum (Thiazolderivat)", g:"Entzugsmittel",
  kern:["Alkoholentzug, Prädelir, Delir – nur stationär","1 Kps. = 192 mg; initial 2–4 Kps., dann symptomgetriggert [?]","Tagesmax. 24 Kps., in den ersten 2 h max. 6–8 Kps. [?]","Bronchiale Hypersekretion, Atemdepression, besonders mit Alkohol","Nicht bei Restalkohol bzw. Intoxikation geben"],
  ind:"Alkoholentzugssyndrom, Prädelir und Delirium tremens unter stationären Bedingungen; Schlafstörungen sowie Unruhe und Verwirrtheit bei hirnorganischem Psychosyndrom im höheren Lebensalter (stationär).",
  off:"Keine.",
  ki:"Schlafapnoe, zentrale Atemstörungen, akute Alkohol- oder Medikamentenintoxikation, schwere Lungenerkrankung mit Hypersekretion, ambulante Anwendung bei Abhängigen.",
  dos:{e:"AWS: initial 2–4 Kps., danach nach Symptomen bzw. Score bis zu 2 Kps. alle 1–2 h; Ausschleichen über ca. 7–10 Tage [?].",a:"Niedriger beginnen; Schlaf im Alter: 1–2 Kps. abends (stationär).",j:"Nicht zugelassen."},
  nw:"Bronchiale und Speichel-Hypersekretion, Atemdepression, Hypotonie, Niesreiz, Brennen in Nase und Augen, hohes Abhängigkeitspotenzial.",
  ia:"Massive Atemdepression mit Alkohol, BZD, Opioiden. Cimetidin erhöht Spiegel [?].",
  ktr:"Atmung, Sättigung und Vigilanz engmaschig, weil die therapeutische Breite mit Alkohol klein ist. Bei Leberzirrhose höhere Bioverfügbarkeit, also Dosis senken.",
  ss:"Schwangerschaft: meiden, BZD bevorzugen. Stillzeit: meiden.",
  mech:"Verstärkt die GABA-A-Wirkung an einer von BZD verschiedenen Bindungsstelle; sedierend, antikonvulsiv.",
  auf:"Ein starkes Medikament gegen Alkoholentzug, das nur im Krankenhaus gegeben wird. Es kann vermehrt Schleim in den Atemwegen bilden. Auf keinen Fall zusammen mit Alkohol.",
  cx:{schw:["r","Meiden, BZD bevorzugen"],still:["r","Meiden"],alt:["y","Niedrig, Atmung überwachen"],jug:["r","Nicht zugelassen"],niere:["g","Kaum Anpassung"],leber:["y","Zirrhose: Bioverfügbarkeit ↑, Dosis ↓"],qtc:["g","Unkritisch"],epi:["g","Antikonvulsiv"],delir:["g","Zugelassen beim Alkoholentzugsdelir"],pd:["y","Sturz, Hypotonie"],sucht:["r","Nur stationär, hohes Abhängigkeitspotenzial"],atem:["r","KI bei Schlafapnoe und zentraler Atemstörung"],fahr:["r","Nicht fahrtauglich"]},
  tg:{sd:3,at:2,hy:1},
  src:"FI · S3 Alkohol"
};

D.mirtazapin = {
  n:"Mirtazapin", b:["Remergil","Mirtazapin-ratiopharm"], k:"Noradrenerg und spezifisch serotonerg wirksames Antidepressivum (NaSSA)", g:"Antidepressiva",
  kern:["Depression mit Schlafstörung, Appetitmangel","15–45 mg z. N.; niedrige Dosis sedierender","Off-label: Insomnie 7,5–15 mg, Akathisie 15 mg","Gewichtszunahme, Ödeme, RLS-Verstärkung","Selten Agranulozytose: Fieber/Halsschmerz → Blutbild"],
  ind:"Episoden einer Major Depression bei Erwachsenen.",
  off:"Insomnie (7,5–15 mg), antipsychotikainduzierte Akathisie (15 mg, kleine RCTs), Übelkeit, Appetitsteigerung; Kombination mit SNRI bei Therapieresistenz.",
  ki:"Gleichzeitige MAO-Hemmer-Therapie (und 14 Tage danach).",
  dos:{e:"15 mg z. N., Steigerung bis 45 mg.",a:"7,5–15 mg Start, langsam steigern.",j:"Nicht empfohlen (< 18 J., fehlende Wirksamkeit in Studien)."},
  nw:"Sedierung, Appetit- und Gewichtszunahme, Ödeme, Mundtrockenheit, Restless Legs, Transaminasenanstieg, Hyponatriämie, selten Agranulozytose.",
  ia:"Mehrere CYP-Wege (3A4, 2D6, 1A2): wenig anfällig für einzelne Inhibitoren, aber Carbamazepin senkt Spiegel um etwa 60 %. Serotonerge Kombinationen: Serotoninsyndrom möglich. Additive Sedierung.",
  ktr:"Blutbild bei Fieber oder Halsschmerz, weil die seltene Agranulozytose meist in den ersten Wochen auftritt; Natrium bei Älteren; Gewicht.",
  ss:"Schwangerschaft: vertretbar, wenn gut eingestellt; Sertralin oder Citalopram sind besser untersucht. Stillzeit: vertretbar.",
  mech:"α2-Antagonismus steigert Noradrenalin- und Serotoninfreisetzung; Blockade von 5-HT2A, 5-HT2C, 5-HT3 und starker H1-Antagonismus. In niedriger Dosis überwiegt die H1-Wirkung, daher sedierender.",
  auf:"Ein Antidepressivum, das abends genommen wird und beim Schlafen hilft. Häufig mehr Appetit, deshalb auf das Gewicht achten. Bei Fieber oder Halsschmerzen bitte melden.",
  cx:{schw:["y","Vertretbar, SSRI besser untersucht"],still:["g","Vertretbar"],alt:["g","Gut geeignet, Natrium und Sturz beachten"],jug:["r","Nicht empfohlen"],niere:["y","Clearance ↓, vorsichtig titrieren"],leber:["y","Vorsichtig titrieren"],qtc:["y","Geringes QT-Risiko"],epi:["g","Geringes Anfallsrisiko"],delir:["g","Kaum anticholinerg"],pd:["g","Kein Dopaminantagonismus"],sucht:["g","Kein Abhängigkeitspotenzial"],atem:["g","Keine Atemdepression"],fahr:["y","Anfangs sedierend"]},
  tg:{s:["3A4"],se:1,sd:2,na:1,ag:1,qt:1},
  src:"FI · NVL Depression · S3 Insomnie"
};

D.trazodon = {
  n:"Trazodon", b:["Trittico retard"], k:"Serotonin-Antagonist und Wiederaufnahmehemmer (SARI)", g:"Antidepressiva",
  kern:["Depression; off-label Insomnie 25–100 mg","Kein Gewichtsanstieg, kaum anticholinerg","Orthostase, selten Priapismus (Notfall)","CYP3A4: Carbamazepin senkt, Ritonavir erhöht","Gut bei Insomnie mit Suchtanamnese"],
  ind:"Depressive Erkrankungen.",
  off:"Insomnie (25–100 mg), Schlafstörung bei Demenz, Unruhe.",
  ki:"Akuter Myokardinfarkt, Intoxikation mit ZNS-Dämpfern.",
  dos:{e:"Depression 150–300 mg (stationär bis 600 mg [?]); Insomnie 25–100 mg z. N.",a:"Insomnie 25–50 mg, Orthostase beachten.",j:"Nicht zugelassen."},
  nw:"Sedierung, Orthostase, Schwindel, Übelkeit, QT-Verlängerung dosisabhängig, selten Priapismus.",
  ia:"CYP3A4-Substrat. Serotonerge Kombinationen beachten (in niedriger Dosis meist unproblematisch). Additive Hypotonie mit Antihypertensiva und Antipsychotika.",
  ktr:"EKG bei QT-Risiko oder höherer Dosis, weil die QT-Verlängerung dosisabhängig ist. Blutdruck im Stehen bei Älteren.",
  ss:"Schwangerschaft: begrenzte Daten. Stillzeit: geringer Übergang, vertretbar [?].",
  mech:"5-HT2A-Antagonismus (schlaffördernd, anxiolytisch) bei schwacher Serotonin-Wiederaufnahmehemmung; dazu α1- und H1-Antagonismus.",
  auf:"Ein Antidepressivum, das in kleiner Dosis beim Schlafen hilft und nicht abhängig macht. Langsam aufstehen, weil der Kreislauf anfangs schwächer sein kann. Eine schmerzhafte Dauererektion ist sehr selten, aber ein Notfall.",
  cx:{schw:["y","Begrenzte Daten"],still:["y","Vertretbar [?]"],alt:["y","Orthostase, Sturz"],jug:["r","Nicht zugelassen"],niere:["g","Kaum Anpassung"],leber:["y","Vorsichtig"],qtc:["y","Dosisabhängig QT ↑"],epi:["g","Unkritisch"],delir:["g","Kaum anticholinerg"],pd:["g","Kein Dopaminantagonismus"],sucht:["g","Kein Abhängigkeitspotenzial"],atem:["g","Unkritisch"],fahr:["y","Anfangs sedierend"]},
  tg:{s:["3A4"],se:1,sd:2,qt:1,hy:2},
  src:"FI · S3 Insomnie"
};

D.doxepin = {
  n:"Doxepin", b:["Aponal","Doxepin-ratiopharm"], k:"Trizyklisches Antidepressivum (stark antihistaminerg)", g:"Antidepressiva",
  kern:["Depression mit Unruhe; leichte Entzugssyndrome (DE-Zulassung) [?]","Opioidentzug in DE traditionell (off-label-nah) [?]","Stark anticholinerg, QT, Orthostase","Überdosis lebensgefährlich: Suizidalität beachten","KI: Delir, Engwinkelglaukom, Harnverhalt, Stillzeit"],
  ind:"Depressive Erkrankungen; Angstsyndrome; leichte Entzugssyndrome bei Alkohol-, Medikamenten- oder Drogenabhängigkeit; Unruhe, Angst, Schlafstörungen und funktionelle Organbeschwerden [?].",
  off:"Insomnie in sehr niedriger Dosis (3–6 mg, in den USA als Silenor zugelassen); Pruritus.",
  ki:"Delir, Engwinkelglaukom, akuter Harnverhalt, Prostatahyperplasie mit Restharn, paralytischer Ileus, frischer Myokardinfarkt, Stillzeit, Kinder < 12 J.",
  dos:{e:"Depression 75–150 mg, stationär bis 300 mg. Entzug: z. B. 25–50 mg bis 3×/d [?]. Niedrigdosis-Insomnie: 3–6 mg (Tropfen) [?].",a:"Meiden (PRISCUS); falls nötig ≤ 25 mg.",j:"Ab 12 J. laut FI möglich, wegen Toxizität zurückhaltend [?]."},
  nw:"Mundtrockenheit, Obstipation, Harnverhalt, Sedierung, Gewichtszunahme, Orthostase, Tachykardie, QT-Verlängerung, Krampfschwellensenkung, Delir.",
  ia:"CYP2D6/2C19-Substrat: Fluoxetin, Paroxetin, Bupropion, Melperon erhöhen Spiegel deutlich. Additiv anticholinerg, QT, sedierend.",
  ktr:"EKG vor Beginn und bei Dosissteigerung, weil TZA die kardiale Erregungsleitung verzögern; Spiegel bei Unwirksamkeit oder Intoxikationszeichen (Doxepin + Nordoxepin 50–150 ng/ml [?]).",
  ss:"Schwangerschaft: vertretbar, wenn etabliert. Stillzeit: kontraindiziert (Fallbericht Atemdepression beim Säugling).",
  mech:"Hemmung der Noradrenalin- und Serotonin-Wiederaufnahme; sehr potenter H1-Antagonist (in niedrigster Dosis fast rein antihistaminerg), dazu muskarin- und α1-antagonistisch.",
  auf:"Ein älteres Antidepressivum, das stark beruhigt und beim Schlafen hilft. Häufig trockener Mund und Verstopfung. Es darf nicht in größeren Mengen zu Hause liegen, weil eine Überdosis gefährlich ist.",
  cx:{schw:["y","Vertretbar, wenn etabliert"],still:["r","KI laut FI"],alt:["r","Anticholinerg, PRISCUS"],jug:["y","Ab 12 J., zurückhaltend [?]"],niere:["g","Kaum Anpassung"],leber:["y","Dosis ↓"],qtc:["r","QT-Verlängerung"],epi:["y","Krampfschwelle ↓"],delir:["r","KI"],pd:["y","Anticholinerg, Orthostase"],sucht:["g","Kein Abhängigkeitspotenzial; Intoxikationsgefahr"],atem:["y","Sedierung"],fahr:["r","Stark sedierend"]},
  tg:{s:["2D6","2C19"],ac:3,sd:3,qt:2,se:1,kr:1,hy:2},
  src:"FI · AGNP · PRISCUS 2.0"
};

D.doxylamin = {
  n:"Doxylamin", b:["Hoggar Night","Schlafsterne","Sedaplus"], k:"Antihistaminikum (H1), rezeptfrei", g:"Hypnotika",
  kern:["Rezeptfreies Schlafmittel, oft Selbstmedikation","25–50 mg 30 min vor dem Schlafen","Anticholinerg: bei Älteren meiden (PRISCUS)","In der Schwangerschaft gut untersucht","Toleranz nach wenigen Tagen"],
  ind:"Kurzzeitbehandlung von Schlafstörungen.",
  off:"Übelkeit in der Schwangerschaft (in Kombination mit Pyridoxin).",
  ki:"Engwinkelglaukom, Harnverhalt, Prostatahyperplasie mit Restharn, akuter Asthmaanfall, Epilepsie [?], < 18 J. (rezeptfreie Präparate).",
  dos:{e:"25–50 mg.",a:"Meiden.",j:"Nicht empfohlen."},
  nw:"Mundtrockenheit, Hang-over, Verwirrtheit, Harnverhalt, rasche Toleranz.",
  ia:"Additiv anticholinerg und sedierend; mit Alkohol stark verstärkt.",
  ktr:"Keine; Selbstmedikation aktiv erfragen.",
  ss:"Schwangerschaft: gut untersucht, Mittel der Wahl bei Schlafstörung laut Embryotox [?]. Stillzeit: einzelne Dosen vertretbar.",
  mech:"Blockade zentraler H1-Rezeptoren, zusätzlich muskarinerg anticholinerg.",
  auf:"Ein rezeptfreies Schlafmittel aus der Gruppe der Antiallergika. Wirkt nach wenigen Tagen oft schwächer. Bei älteren Menschen kann es Verwirrtheit auslösen.",
  cx:{schw:["g","Gut untersucht [?]"],still:["y","Einzeldosen"],alt:["r","Anticholinerg, PRISCUS"],jug:["r","Nicht empfohlen"],niere:["g","Unkritisch"],leber:["y","Vorsicht"],qtc:["g","Kaum relevant"],epi:["y","Krampfschwelle"],delir:["r","Delirogen"],pd:["y","Anticholinerg"],sucht:["g","Kein klassisches Abhängigkeitspotenzial"],atem:["y","Sedierung"],fahr:["r","Überhang"]},
  tg:{ac:2,sd:2},
  src:"FI · Embryotox · PRISCUS 2.0"
};

D.hydroxyzin = {
  n:"Hydroxyzin", b:["Atarax","AH 3 N"], k:"Antihistaminikum (H1) mit anxiolytischer Wirkung", g:"Sedierende Mittel",
  kern:["Angst und Anspannung ohne Abhängigkeitspotenzial","Max. 100 mg/d, Ältere max. 50 mg/d (EMA 2015)","QT-Verlängerung: KI bei bekanntem QT-Risiko","Mäßig anticholinerg","Bei BPS als Bedarf möglich (off-label)"],
  ind:"Symptomatische Behandlung von Angst- und Spannungszuständen bei Erwachsenen; Pruritus [?].",
  off:"Bedarfsmedikation bei Anspannung (BPS), Schlafstörung.",
  ki:"Bekannte QT-Verlängerung oder Risikofaktoren (Hypokaliämie, Bradykardie, QT-verlängernde Komedikation), Porphyrie, Schwangerschaft, Stillzeit.",
  dos:{e:"25–100 mg/d, max. 100 mg/d.",a:"Max. 50 mg/d, besser meiden.",j:"Nach Körpergewicht, max. 2 mg/kg/d bei ≤ 40 kg [?]."},
  nw:"Sedierung, Mundtrockenheit, Kopfschmerz, QT-Verlängerung, selten Krampfanfälle.",
  ia:"Additive QT-Verlängerung (Citalopram, Haloperidol, Methadon), anticholinerg, sedierend. CYP3A4-Substrat.",
  ktr:"EKG bei kardialen Risikofaktoren oder QT-Komedikation, weil die EMA das Risiko 2015 gesondert bewertet hat; Kalium.",
  ss:"Schwangerschaft und Stillzeit: kontraindiziert laut FI.",
  mech:"H1-Antagonist mit zusätzlicher 5-HT2A- und schwacher anticholinerger Wirkung.",
  auf:"Ein beruhigendes Mittel gegen Angst und Anspannung, das nicht abhängig macht. Es macht müde. Bei Herzrhythmusproblemen bitte nicht ohne EKG nehmen.",
  cx:{schw:["r","KI laut FI"],still:["r","KI laut FI"],alt:["r","Anticholinerg, max. 50 mg"],jug:["y","Gewichtsadaptiert [?]"],niere:["y","Dosis ↓"],leber:["y","Dosis ↓"],qtc:["r","KI"],epi:["y","Selten Anfälle"],delir:["r","Anticholinerg"],pd:["y","Anticholinerg"],sucht:["g","Kein Abhängigkeitspotenzial"],atem:["y","Sedierung"],fahr:["y","Sedierend"]},
  tg:{s:["3A4"],qt:2,ac:1,sd:2},
  src:"FI · EMA PRAC 2015"
};

D.promethazin = {
  n:"Promethazin", b:["Atosil","Proneurin"], k:"Phenothiazin, niederpotent; stark antihistaminerg", g:"Sedierende Mittel",
  kern:["Unruhe, Erregung, Schlafstörung – ohne Abhängigkeit","25–50 mg, bis 100 mg/d (stationär bis 200 mg [?])","Tropfen 20 mg/ml: 1 Tropfen ≈ 1 mg [?]","Anticholinerg, QT, Krampfschwelle ↓","Paravasat bzw. intraarteriell: Gewebsnekrose"],
  ind:"Unruhe- und Erregungszustände bei psychiatrischen Grunderkrankungen, wenn therapeutische Alternativen nicht erfolgreich waren; Schlafstörungen, wenn andere Maßnahmen versagt haben; Übelkeit und Erbrechen; allergische Reaktionen.",
  off:"Bedarfsmedikation bei Anspannung (BPS); Kombination mit Haloperidol bei akuter Agitation (international, TREC).",
  ki:"Kinder < 2 J. (Atemdepression), schwere Blutbildveränderungen, Engwinkelglaukom, Harnverhalt, Delir, Intoxikation mit ZNS-Dämpfern, Phäochromozytom [?].",
  dos:{e:"Unruhe: 25 mg, steigern bis 100 mg/d, stationär bis 200 mg/d [?]. Schlaf: 25–50 mg.",a:"Meiden (PRISCUS); falls nötig 10–25 mg.",j:"Ab 2 J. zugelassen, ab 12 J. 10–25 mg Einzeldosis [?]."},
  nw:"Sedierung, Mundtrockenheit, Obstipation, Harnverhalt, Orthostase, QT-Verlängerung, paradoxe Erregung (Kinder, Ältere), Krampfanfälle, Fotosensibilität.",
  ia:"CYP2D6-Substrat. Additiv anticholinerg (Biperiden, TZA), QT (Haloperidol, Citalopram, Methadon), sedierend (BZD, Opioide).",
  ktr:"EKG bei QT-Risiko; bei Daueranwendung Blutbild, weil Phenothiazine selten Agranulozytosen auslösen.",
  ss:"Schwangerschaft: vertretbar, gut untersucht als Antiemetikum [?]. Stillzeit: Einzeldosen vertretbar, Säugling auf Sedierung beobachten.",
  mech:"Starker H1-Antagonist, dazu anticholinerg, α1-blockierend und nur schwach D2-antagonistisch; deshalb kaum antipsychotisch und kaum EPMS.",
  auf:"Ein beruhigendes Mittel gegen starke Anspannung oder für den Schlaf, das nicht abhängig macht. Es macht müde und den Mund trocken. Langsam aufstehen.",
  cx:{schw:["y","Vertretbar [?]"],still:["y","Einzeldosen"],alt:["r","Anticholinerg, PRISCUS"],jug:["y","Ab 2 J. zugelassen, paradoxe Reaktionen [?]"],niere:["g","Kaum Anpassung"],leber:["y","Vorsicht"],qtc:["y","QT ↑"],epi:["y","Krampfschwelle ↓"],delir:["r","Anticholinerg, KI"],pd:["y","Anticholinerg; kaum D2"],sucht:["g","Kein Abhängigkeitspotenzial; Missbrauch mit Opioiden kommt vor"],atem:["y","Sedierung"],fahr:["r","Stark sedierend"]},
  tg:{s:["2D6"],ac:2,sd:3,qt:1,kr:1,hy:1},
  src:"FI · PRISCUS 2.0"
};

D.pipamperon = {
  n:"Pipamperon", b:["Dipiperon"], k:"Butyrophenon, niederpotent (5-HT2A > D2)", g:"Sedierende Mittel",
  kern:["Schlafstörung und Unruhe, besonders im Alter (zugelassen)","Schlaf: 20–40 mg abends; Unruhe bis 3×40 mg, max. 360 mg/d [?]","Kaum anticholinerg, keine Abhängigkeit","Saft für feine Dosierung [?]","Bei BPS als Bedarf beliebt (off-label)"],
  ind:"Schlafstörungen, insbesondere bei geriatrischen Patienten; psychomotorische Erregungszustände.",
  off:"Bedarfsmedikation bei Anspannung (BPS), Unruhe bei Sucht ohne BZD.",
  ki:"Morbus Parkinson [?], komatöse Zustände, Intoxikation mit ZNS-Dämpfern.",
  dos:{e:"Schlaf 40 mg abends; Unruhe initial 3×40 mg, bis 360 mg/d [?].",a:"20–40 mg abends.",j:"Auch für Kinder zugelassen, dosisadaptiert [?]."},
  nw:"Sedierung, Orthostase, selten EPMS, QT-Verlängerung möglich [?].",
  ia:"Additive Sedierung und Hypotonie. Datenlage zu CYP gering [?].",
  ktr:"Blutdruck bei Älteren; EKG bei QT-Komedikation, weil Butyrophenone QT verlängern können.",
  ss:"Schwangerschaft und Stillzeit: kaum Daten, besser untersuchte Alternativen bevorzugen.",
  mech:"Überwiegend 5-HT2A-Antagonismus mit schwachem D2-Antagonismus; schlafanstoßend, kaum antipsychotisch.",
  auf:"Ein mildes Beruhigungsmittel aus der Gruppe der Neuroleptika in niedriger Dosis. Es hilft beim Ein- und Durchschlafen und macht nicht abhängig.",
  cx:{schw:["y","Kaum Daten"],still:["y","Kaum Daten"],alt:["g","Für Ältere zugelassen"],jug:["y","Zugelassen, dosisadaptiert [?]"],niere:["g","Unkritisch"],leber:["y","Vorsicht"],qtc:["y","QT-Risiko möglich [?]"],epi:["y","Krampfschwelle"],delir:["g","Kaum anticholinerg; bei Delir off-label verwendet"],pd:["r","KI laut FI [?]"],sucht:["g","Kein Abhängigkeitspotenzial"],atem:["g","Unkritisch"],fahr:["y","Sedierend"]},
  tg:{sd:2,hy:1,qt:1,da:1},
  src:"FI"
};

D.melperon = {
  n:"Melperon", b:["Eunerpan","Melperon-ratiopharm"], k:"Butyrophenon, niederpotent", g:"Sedierende Mittel",
  kern:["Schlafstörung, Verwirrtheit, Unruhe im Alter (zugelassen)","Schlaf 25–75 mg abends; Unruhe bis 200 mg/d [?]","CYP2D6-Hemmer: Metoprolol, Venlafaxin, Risperidon, TZA ↑","Kaum anticholinerg","QT beachten"],
  ind:"Schlafstörungen, Verwirrtheitszustände; psychomotorische Unruhe und Erregung, besonders bei Psychosen, Demenz, Alkoholkrankheit und Oligophrenie.",
  off:"Bedarfsmedikation bei Anspannung.",
  ki:"Komatöse Zustände, Intoxikation mit ZNS-Dämpfern, schwere Leberinsuffizienz [?], malignes neuroleptisches Syndrom in der Vorgeschichte.",
  dos:{e:"Schlaf 25–100 mg abends; Unruhe 50–100 mg/d, bis 200 mg (max. 375 mg [?]).",a:"25–75 mg/d.",j:"Ab 12 J. [?]."},
  nw:"Sedierung, Orthostase, Tachykardie, QT-Verlängerung, selten EPMS.",
  ia:"Hemmt CYP2D6 mittel bis stark: erhöht Metoprolol, Venlafaxin, Aripiprazol, Risperidon, Haloperidol, TZA; vermindert Wirkung von Codein, Tramadol, Tamoxifen (Prodrugs).",
  ktr:"EKG bei QT-Komedikation; Komedikation auf 2D6-Substrate prüfen, weil die Hemmung oft übersehen wird.",
  ss:"Schwangerschaft und Stillzeit: kaum Daten.",
  mech:"Schwacher D2-Antagonist, 5-HT2A-Antagonist; sedierend, kaum antipsychotisch in üblicher Dosis.",
  auf:"Ein mildes Beruhigungsmittel, das häufig bei älteren Menschen gegen Unruhe und Schlafprobleme eingesetzt wird. Es macht nicht abhängig.",
  cx:{schw:["y","Kaum Daten"],still:["y","Kaum Daten"],alt:["g","Für Ältere geeignet; 2D6-Interaktionen beachten"],jug:["y","Ab 12 J. [?]"],niere:["g","Unkritisch"],leber:["y","Vorsicht [?]"],qtc:["y","QT ↑"],epi:["y","Krampfschwelle"],delir:["g","Kaum anticholinerg"],pd:["y","Schwacher D2-Antagonist; Quetiapin vorziehen"],sucht:["g","Kein Abhängigkeitspotenzial"],atem:["g","Unkritisch"],fahr:["y","Sedierend"]},
  tg:{i:{"2D6":"stark"},sd:2,qt:1,hy:1,da:1},
  src:"FI"
};

D.levomepromazin = {
  n:"Levomepromazin", b:["Neurocil"], k:"Phenothiazin, niederpotent", g:"Sedierende Mittel",
  kern:["Starke Sedierung bei Erregung, Schlafstörung bei Psychose","25–50 mg Einzeldosis; stationär bis 300 mg/d [?]","Stark anticholinerg, Orthostase, QT, Krampfschwelle","CYP2D6-Hemmer [?]","Bei Älteren meiden"],
  ind:"Psychomotorische Unruhe- und Erregungszustände im Rahmen psychotischer Störungen, akute Erregung bei manischen Episoden; Schmerzen (Kombination) [?].",
  off:"Schlafstörung bei Psychose.",
  ki:"Akute Intoxikation mit ZNS-Dämpfern, Kreislaufschock, Blutbildschäden, Engwinkelglaukom, Harnverhalt.",
  dos:{e:"Akut 25–50 mg, stationär bis 300 mg/d (max. 600 mg [?]).",a:"Meiden; falls nötig 5–10 mg.",j:"Zurückhaltend [?]."},
  nw:"Starke Sedierung, Orthostase bis Kollaps, anticholinerge Effekte, QT, Krampfanfälle, Leberwerte, Blutbildveränderungen.",
  ia:"Hemmt CYP2D6 [?]. Additiv anticholinerg, QT, hypotensiv.",
  ktr:"Blutdruck (Orthostase ist dosislimitierend), EKG, Blutbild und Leberwerte bei Dauertherapie.",
  ss:"Schwangerschaft und Stillzeit: meiden.",
  mech:"Breiter Rezeptorantagonist: H1, α1, M1 stark, D2 schwach bis mittel.",
  auf:"Ein stark beruhigendes Medikament. Langsam aufstehen, weil der Blutdruck fallen kann.",
  cx:{schw:["y","Meiden"],still:["y","Meiden"],alt:["r","Orthostase, anticholinerg"],jug:["y","Zurückhaltend [?]"],niere:["g","Unkritisch"],leber:["y","Vorsicht"],qtc:["r","QT ↑"],epi:["y","Krampfschwelle ↓"],delir:["r","Anticholinerg"],pd:["r","D2-Antagonismus"],sucht:["g","Kein Abhängigkeitspotenzial"],atem:["y","Sedierung"],fahr:["r","Stark sedierend"]},
  tg:{i:{"2D6":"stark"},ac:2,sd:3,qt:2,kr:1,hy:3,da:1},
  src:"FI · AGNP [?]"
};

D.chlorprothixen = {
  n:"Chlorprothixen", b:["Truxal"], k:"Thioxanthen, niederpotent", g:"Sedierende Mittel",
  kern:["Unruhe und Erregung bei Psychose, Manie","15–50 mg Einzeldosis; stationär bis 400 mg/d [?]","Anticholinerg, Orthostase, QT","CYP2D6-Hemmer [?]","Bei Älteren meiden"],
  ind:"Dämpfung psychomotorischer Unruhe- und Erregungszustände im Rahmen akuter psychotischer Syndrome; maniforme Syndrome [?].",
  off:"Schlafstörung, Anspannung.",
  ki:"Akute Intoxikation mit ZNS-Dämpfern, Kreislaufschock, Koma.",
  dos:{e:"15–50 mg Einzeldosis, stationär bis 400 mg/d [?].",a:"Meiden.",j:"Zurückhaltend [?]."},
  nw:"Sedierung, Orthostase, anticholinerge Effekte, QT, Krampfanfälle, Leberwerte.",
  ia:"Hemmt CYP2D6 [?]. Additiv anticholinerg, QT, hypotensiv.",
  ktr:"Blutdruck, EKG; Leberwerte bei Dauertherapie.",
  ss:"Schwangerschaft und Stillzeit: meiden.",
  mech:"Antagonist an H1, α1, M, D2 (schwach bis mittel).",
  auf:"Ein beruhigendes Medikament gegen starke Unruhe. Langsam aufstehen, Mund kann trocken werden.",
  cx:{schw:["y","Meiden"],still:["y","Meiden"],alt:["r","Anticholinerg, Orthostase"],jug:["y","Zurückhaltend [?]"],niere:["g","Unkritisch"],leber:["y","Vorsicht"],qtc:["r","QT ↑"],epi:["y","Krampfschwelle ↓"],delir:["r","Anticholinerg"],pd:["r","D2-Antagonismus"],sucht:["g","Kein Abhängigkeitspotenzial"],atem:["y","Sedierung"],fahr:["r","Sedierend"]},
  tg:{i:{"2D6":"mittel"},ac:2,sd:3,qt:2,kr:1,hy:2,da:1},
  src:"FI [?]"
};
