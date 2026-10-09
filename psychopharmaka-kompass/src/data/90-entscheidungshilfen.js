/* Entscheidungshilfen (v2.1, 08.10.2026). Jede Hilfe gewichtet die Optionen der zugehörigen Situationskarte neu.
   Effekte je Antwort: pp stark bevorzugen · p bevorzugen · m abwerten · x ausschließen (Wert = Begründung),
   w Warnung · n Hinweis zum Vorgehen · go Verweis {to, t}. Schlüssel: Wirkstoff-ID oder Anfang des Optionstexts.
   Begründungen stammen aus den Karten; nicht belegte Angaben tragen [?]. Patientenfaktoren wirken zusätzlich
   automatisch über die Kontextangaben der Wirkstoffkarten (rot = ausgeschlossen, gelb = abgewertet). */
var ALGS = window.ALGS = [];
function A(o){ ALGS.push(o); }
var YN = function(yes, no){ return [{t:"Ja", e:yes||{}}, {t:"Nein", e:no||{}}]; };

/* ================= SCHLAF ================= */
A({id:"ins-primaer", sit:"ins-primaer", ctx:["alt","schw","still","leber","atem","sucht","delir","fahr"], q:[
 {id:"grund", t:"Liegt eine psychiatrische Grunderkrankung vor?", a:[
  {t:"Nein", e:{}},
  {t:"Depression", e:{go:[{to:"ins-depression", t:"Schlafstörung bei Depression"}]}},
  {t:"Psychose oder Manie", e:{go:[{to:"ins-psychose", t:"Schlafstörung bei Psychose oder Manie"}]}},
  {t:"Sucht oder nach Entzug", e:{go:[{to:"ins-sucht", t:"Schlafstörung bei Sucht"}]}},
  {t:"PTBS, BPS, Albträume", e:{go:[{to:"ins-trauma", t:"Schlafstörung bei PTBS/BPS/Albträumen"}]}},
  {t:"Demenz oder Delir", e:{go:[{to:"ins-alt", t:"Schlafstörung im Alter, bei Demenz oder Delir"}]}}]},
 {id:"dauer", t:"Seit wann besteht die Schlafstörung?", a:[
  {t:"Unter 3 Monate", e:{p:{zolpidem:"Kurzzeitbehandlung (max. 4 Wochen)", zopiclon:"Kurzzeitbehandlung (max. 4 Wochen)"}, m:{daridorexant:"Zugelassen erst bei Symptomen seit ≥ 3 Monaten"}}},
  {t:"3 Monate oder länger", e:{pp:{"kvt-i":"KVT-I ist bei chronischer Insomnie Therapie der ersten Wahl"}, p:{daridorexant:"Zugelassen für chronische Insomnie ≥ 3 Monate"}, m:{zolpidem:"Langzeitbehandlung soll nicht (S3 2025)", zopiclon:"Langzeitbehandlung soll nicht (S3 2025)"}}}]},
 {id:"typ", t:"Was steht im Vordergrund?", a:[
  {t:"Einschlafen", e:{p:{zolpidem:"Kurz wirksam, kaum Überhang", melatonin:"Effekt am stärksten auf die Einschlaflatenz"}}},
  {t:"Durchschlafen", e:{p:{zopiclon:"Wirkt auch beim Durchschlafen", doxepin:"Niedrigstdosis gut für Durchschlafen", daridorexant:"Durchschlafen besser belegt als Einschlafen"}}},
  {t:"Beides", e:{p:{zopiclon:"Ein- und Durchschlafstörung (HWZ ca. 5 h)"}}}]},
 {id:"alter55", t:"Ist der Patient 55 Jahre oder älter?", a:YN({p:{melatonin:"Circadin ab 55 J. zugelassen, sehr gut verträglich"}}, {m:{melatonin:"Circadin erst ab 55 J. zugelassen"}})},
 {id:"abh", t:"Abhängigkeitsrisiko oder Suchtanamnese?", a:YN({x:{zolpidem:"Abhängigkeitspotenzial", zopiclon:"Abhängigkeitspotenzial"}, go:[{to:"ins-sucht", t:"Entscheidungshilfe Schlaf bei Sucht"}]})},
 {id:"gew", t:"Gewicht und Appetit?", a:[
  {t:"Appetit- oder Gewichtsmangel", e:{p:{mirtazapin:"Bei Appetit- oder Gewichtsmangel"}}},
  {t:"Gewicht soll nicht steigen", e:{m:{mirtazapin:"Gewichtszunahme"}, p:{trazodon:"Ohne Gewichtszunahme"}}},
  {t:"Unauffällig", e:{}}]}
]});

A({id:"ins-depression", sit:"ins-depression", ctx:["alt","schw","still","leber","qtc","sucht"], q:[
 {id:"bip", t:"Bipolare Depression?", a:YN({go:[{to:"bip-dep", t:"Entscheidungshilfe Bipolare Depression"}], w:"Bei bipolarer Depression sind AD-Wahl und Schlafentzug anders."})},
 {id:"ad", t:"Läuft bereits ein Antidepressivum?", a:[
  {t:"Nein, AD wird neu gewählt", e:{pp:{mirtazapin:"Antidepressiv und schlafanstoßend in einem"}, n:"Für die AD-Wahl selbst: Entscheidungshilfe Depression.", go:[{to:"dep-unipolar", t:"Entscheidungshilfe Depression"}]}},
  {t:"Ja, SSRI oder SNRI", e:{pp:{trazodon:"Zusatz zu SSRI/SNRI, keine Gewichtszunahme"}, n:"Aktivierende AD morgens geben."}},
  {t:"Ja, anderes AD", e:{n:"Sedierendes AD abends wählen oder zum bestehenden AD ergänzen; Interaktionen im Check prüfen."}}]},
 {id:"suiz", t:"Suizidalität?", a:YN({p:{lorazepam:"Kurzzeitig bei starker Unruhe oder Suizidalität (≤ 4 Wochen)"}, m:{doxepin:"Toxisch in Überdosis"}, w:"Suizidalität: Mengen begrenzen, Doxepin und TZA meiden."})},
 {id:"gew", t:"Gewicht?", a:[{t:"Gewicht soll nicht steigen", e:{m:{mirtazapin:"Gewichtszunahme"}, p:{trazodon:"Keine Gewichtszunahme"}}},{t:"Appetitmangel", e:{p:{mirtazapin:"Appetitsteigerung erwünscht"}}},{t:"Unauffällig", e:{}}]}
]});

A({id:"ins-psychose", sit:"ins-psychose", ctx:["alt","schw","still","qtc","pd","sucht"], q:[
 {id:"typ", t:"Manie oder Psychose?", a:[
  {t:"Manie", e:{p:{quetiapin:"Bipolar in allen Phasen zugelassen", lorazepam:"Kurzzeitig, besonders in der Manie"}, w:"In der Manie keine Antidepressiva.", n:"In der Manie ist Schlaf Therapieziel."}},
  {t:"Psychose", e:{p:{olanzapin:"Antipsychotisch und stark sedierend"}}}]},
 {id:"ap", t:"Läuft bereits ein Antipsychotikum?", a:YN({n:"Sedierendes AP abends bündeln; niedrigpotentes AP als Zusatz möglich.", p:{pipamperon:"Zusatz ohne Abhängigkeit", promethazin:"Zusatz ohne Abhängigkeit"}})},
 {id:"akat", t:"Könnte nächtliche Unruhe eine Akathisie sein?", a:YN({go:[{to:"ep-akathisie", t:"Entscheidungshilfe Akathisie"}], w:"Akathisie nicht mit mehr Antipsychotikum behandeln."})},
 {id:"bzd", t:"Benzodiazepine vermeiden (Sucht, Substanzkonsum)?", a:YN({x:{lorazepam:"Abhängigkeitspotenzial", zopiclon:"Abhängigkeitspotenzial"}})}
]});

A({id:"ins-sucht", sit:"ins-sucht", ctx:["alt","schw","leber","niere","qtc"], q:[
 {id:"rest", t:"Ist der Entzug noch aktiv?", a:YN({w:"Erst Entzug behandeln (Score erheben).", go:[{to:"ez-alk", t:"Alkoholentzug"},{to:"ez-bzd", t:"BZD-Entzug"},{to:"ez-opioid", t:"Opioidentzug"}]})},
 {id:"subst", t:"Welche Substanz steht im Vordergrund?", a:[
  {t:"Alkohol", e:{pp:{gabapentin:"Bei Alkohol: Schlaf und Rückfallprophylaxe"}, m:{doxepin:"S3 Alkohol rät im Alkoholentzug von TZA ab"}}},
  {t:"Opioide oder Substitution", e:{x:{gabapentin:"Nicht bei Opioidkonsum (Atemdepression, Missbrauch)"}}},
  {t:"Andere", e:{}}]},
 {id:"gew", t:"Gewicht und Appetit?", a:[{t:"Appetitmangel", e:{p:{mirtazapin:"Appetit ↑ erwünscht"}}},{t:"Gewicht soll nicht steigen", e:{m:{mirtazapin:"Gewichtszunahme"}, p:{trazodon:"Ohne Gewichtszunahme"}}},{t:"Unauffällig", e:{}}]}
]});

A({id:"ins-alt", sit:"ins-alt", ctx:["niere","leber","qtc","atem"], q:[
 {id:"delir", t:"Liegt ein Delir vor (CAM positiv)?", a:YN({w:"Delir zuerst: Ursache suchen und behandeln.", go:[{to:"sp-delir", t:"Entscheidungshilfe Delir"}]})},
 {id:"pd", t:"Parkinson oder Lewy-Körper-Demenz?", a:YN({pp:{quetiapin:"Bei Parkinson oder Lewy-Körper bevorzugt"}, m:{melperon:"Bei Lewy-Körper keine Sedierung mit D2-Antagonisten [?]", pipamperon:"Bei Lewy-Körper keine Sedierung mit D2-Antagonisten [?]"}}, {x:{quetiapin:"Nur bei Parkinson oder Lewy-Körper (Demenz-Warnhinweis)"}})},
 {id:"dep", t:"Depression oder Appetitmangel?", a:YN({p:{mirtazapin:"Bei Depression oder Appetitmangel", trazodon:"Bei begleitender Depression"}})},
 {id:"2d6", t:"Nimmt der Patient CYP2D6-Substrate (z. B. Metoprolol, Venlafaxin, Risperidon)?", a:YN({m:{melperon:"Hemmt CYP2D6: Spiegel der Komedikation ↑"}, p:{pipamperon:"Kein CYP2D6-Hemmer"}})},
 {id:"sturz", t:"Sturzneigung oder Orthostase?", a:YN({m:{trazodon:"Orthostase", zolpidem:"Sturzrisiko"}})}
]});

A({id:"ins-trauma", sit:"ins-trauma", ctx:["alt","schw","still","qtc","sucht"], q:[
 {id:"alb", t:"Stehen Albträume im Vordergrund?", a:YN({pp:{"imagery":"Wirksamste Einzelmaßnahme bei Albträumen"}, p:{prazosin:"Albträume bei PTBS (international)"}})},
 {id:"vers", t:"Haben Trazodon oder Mirtazapin schon versagt?", a:YN({p:{quetiapin:"Wenn andere versagen"}}, {m:{quetiapin:"Erst wenn andere versagen (Gewicht, Missbrauch)"}})},
 {id:"gew", t:"Gewicht soll nicht steigen?", a:YN({m:{mirtazapin:"Gewichtszunahme", quetiapin:"Gewicht, Metabolik"}})},
 {id:"ac", t:"Anticholinerge Last vermeiden?", a:YN({m:{promethazin:"Anticholinerg"}, p:{pipamperon:"Kaum anticholinerg"}})}
]});

A({id:"ins-schwanger", sit:"ins-schwanger", ctx:["qtc"], q:[
 {id:"ph", t:"Schwangerschaft oder Stillzeit?", a:[
  {t:"Schwangerschaft", e:{p:{doxylamin:"Laut Embryotox Mittel der Wahl [?]"}, w:"Quellen uneinig: Benkert bewertet Doxylamin und Zolpidem mit RS 5. Einzelfall bei Embryotox abfragen."}},
  {t:"Stillzeit", e:{p:{zolpidem:"Stillzeit: geringer Übergang"}, m:{doxylamin:"Stillzeit: nur Einzeldosen"}}}]},
 {id:"dep", t:"Begleitende Depression?", a:YN({pp:{mirtazapin:"Bei begleitender Depression"}})},
 {id:"rls", t:"Restless-Legs-Beschwerden?", a:YN({n:"RLS in der Schwangerschaft häufig: Eisenmangel prüfen."})}
]});

/* ================= ANSPANNUNG ================= */
A({id:"sp-bps", sit:"sp-bps", ctx:["alt","schw","still","qtc","sucht"], q:[
 {id:"skill", t:"Wurde ein Skill nach Hochanspannungsplan versucht?", a:YN({}, {pp:{"skills":"Bedarf erst nach Skill-Versuch stärkt Selbstwirksamkeit"}, n:"Erst Skills nach Plan, dann Bedarf."})},
 {id:"art", t:"Akuter Bedarf oder Dauermedikation?", a:[
  {t:"Akuter Bedarf", e:{p:{promethazin:"Schnell, ohne Abhängigkeit", pipamperon:"Ohne Abhängigkeit, kaum anticholinerg"}, m:{aripiprazol:"Nur als Dauermedikation untersucht"}}},
  {t:"Dauermedikation", e:{go:[{to:"bps", t:"Entscheidungshilfe Pharmakotherapie bei BPS"}], p:{aripiprazol:"Kleine RCT positiv für Impulsivität und Ärger", quetiapin:"Kleine RCT positiv für Dauergabe (150 mg)"}}}]},
 {id:"diss", t:"Dissoziation im Vordergrund?", a:YN({w:"Sedierung kann Dissoziation verstärken: Bedarf zurückhaltend."})},
 {id:"ac", t:"Anticholinerge Last vermeiden?", a:YN({m:{promethazin:"Anticholinerg"}, p:{pipamperon:"Kaum anticholinerg"}})}
]});

A({id:"sp-psychose", sit:"sp-psychose", ctx:["alt","qtc","pd","atem","delir"], q:[
 {id:"urs", t:"Kommen Intoxikation, Entzug oder Delir infrage?", a:[
  {t:"Nein", e:{}},
  {t:"Intoxikation", e:{go:[{to:"sp-intox", t:"Agitation bei Intoxikation"}]}},
  {t:"Alkohol- oder BZD-Entzug", e:{go:[{to:"ez-alk-schwer", t:"Schweres Alkoholentzugssyndrom"}]}},
  {t:"Delir", e:{go:[{to:"sp-delir", t:"Hyperaktives Delir"}]}}]},
 {id:"oral", t:"Ist der Patient kooperativ und nimmt oral?", a:YN({p:{risperidon:"Kooperativer Patient", loxapin:"Leicht bis mittel agitiert, kooperativ"}, n:"Oral anbieten; Deeskalation zuerst."}, {x:{risperidon:"Nur oral (Schmelztablette)", loxapin:"Nur bei kooperativem Patienten"}, n:"i. m.: Vitalparameter, Atmung und EPMS nach Gabe kontrollieren."})},
 {id:"eps", t:"EPMS-Anamnese oder hohes EPMS-Risiko (z. B. junge Männer)?", a:YN({m:{haloperidol:"EPMS; Prophylaxe erwägen"}, p:{olanzapin:"Wenig EPMS"}})},
 {id:"bzd", t:"Wird oder wurde parenteral ein Benzodiazepin gegeben?", a:YN({m:{olanzapin:"Olanzapin i. m. nicht gleichzeitig mit parenteralem BZD"}})},
 {id:"halo", t:"Fällt die Wahl auf Haloperidol?", a:YN({p:{promethazin:"Zusammen mit Haloperidol: schneller, weniger Dystonien (TREC)"}, n:"Haloperidol: EKG; i. v. nur mit Monitoring."}, {m:{promethazin:"Kombination nur mit Haloperidol untersucht"}})}
]});

A({id:"sp-manie", sit:"sp-manie", ctx:["schw","still","alt","niere","leber","qtc"], q:[
 {id:"frau", t:"Frau im gebärfähigen Alter?", a:YN({x:{valproat:"Teratogen: nur mit Schwangerschaftsverhütungsprogramm"}})},
 {id:"ad", t:"Läuft ein Antidepressivum?", a:YN({w:"Antidepressiva absetzen: Sie verstärken die Manie."})},
 {id:"psy", t:"Psychotische Symptome oder starke Erregung?", a:YN({p:{olanzapin:"Antimanisch und sedierend", haloperidol:"Rasch antimanisch", lorazepam:"Zusätzlich für Schlaf und Unruhe"}, n:"Bei schwerer Manie: Kombination Stimmungsstabilisierer + AP (Entscheidungshilfe Akute Manie)."})},
 {id:"proph", t:"Soll die Phasenprophylaxe gleich mitgedacht werden?", a:YN({p:{quetiapin:"Auch prophylaktisch wirksam"}, n:"Lithium für die Prophylaxe einplanen.", go:[{to:"bip-manie", t:"Entscheidungshilfe Akute Manie (mit Stabilisierer)"}]})}
]});

A({id:"sp-intox", sit:"sp-intox", ctx:["qtc","atem","epi"], q:[
 {id:"subst", t:"Welche Substanz?", a:[
  {t:"Stimulanzien oder Halluzinogene", e:{pp:{lorazepam:"Stimulanzien und Halluzinogene: BZD zuerst, antikonvulsiv", diazepam:"Alternative bei Stimulanzien"}, m:{haloperidol:"AP zurückhaltend (Hyperthermie, Krampfschwelle, QT)", olanzapin:"AP zurückhaltend (Hyperthermie, Krampfschwelle, QT)"}}},
  {t:"Cannabis mit Psychose", e:{p:{olanzapin:"Psychose bei Cannabis"}}},
  {t:"Alkohol", e:{x:{lorazepam:"BZD bei Alkoholintoxikation: additive Atemdepression", diazepam:"BZD bei Alkoholintoxikation: additive Atemdepression"}, pp:{haloperidol:"Bei Alkoholintoxikation; EKG"}}},
  {t:"MDMA", e:{p:{lorazepam:"BZD zuerst"}, w:"Serotoninsyndrom und Hyponatriämie bei MDMA bedenken."}},
  {t:"Unklar oder Mischkonsum (Opioide, GHB)", e:{w:"Mischintoxikation, Opioide oder GHB: Atemdepression – Überwachung, BZD zurückhaltend [?]."}}]},
 {id:"som", t:"Hyperthermie, CK-Anstieg oder Rhythmusstörung?", a:YN({w:"Somatisch: Temperatur, CK, EKG, Elektrolyte; Rhabdomyolyse."})}
]});

A({id:"sp-delir", sit:"sp-delir", ctx:["qtc","pd","atem"], q:[
 {id:"ent", t:"Alkohol- oder BZD-Entzug als Ursache?", a:YN({pp:{lorazepam:"Entzugsdelir: BZD indiziert"}, go:[{to:"ez-alk-schwer", t:"Schweres Alkoholentzugssyndrom und Delir"}]}, {x:{lorazepam:"BZD ohne Entzug delirogen"}})},
 {id:"pd", t:"Parkinson oder Lewy-Körper?", a:YN({pp:{quetiapin:"Bei Parkinson oder Lewy-Körper"}, x:{haloperidol:"Lewy-Körper: lebensgefährliche Neuroleptikasensitivität", risperidon:"Verschlechtert Motorik"}})},
 {id:"gef", t:"Gefährdung oder starker Leidensdruck?", a:YN({n:"Medikation nur so lange wie nötig; Ursache weiter behandeln."}, {m:{"*":"Ohne Gefährdung oder Leidensdruck keine Medikation"}, pp:{multikomponenten:"Nicht-medikamentöse Maßnahmen genügen"}})},
 {id:"anti", t:"Anticholinerge Medikation in der Liste?", a:YN({w:"Anticholinerge Medikation absetzen (verstärkt Delir)."})}
]});

A({id:"sp-demenz", sit:"sp-demenz", ctx:["qtc","niere"], q:[
 {id:"urs", t:"Auslöser geprüft (Schmerz, Obstipation, Harnverhalt, Infekt, Delir)?", a:YN({}, {w:"Erst Auslöser suchen: Schmerz (z. B. PAINAD), Obstipation, Harnverhalt, Infekt, Delir."})},
 {id:"typ", t:"Welche Demenz?", a:[
  {t:"Alzheimer", e:{p:{risperidon:"Einzige Zulassung (Aggression bei Alzheimer, ≤ 6 Wochen)"}}},
  {t:"Lewy-Körper oder Parkinson", e:{pp:{quetiapin:"Bei Lewy-Körper oder Parkinson"}, x:{risperidon:"Lewy-Körper: Neuroleptika-Sensitivität"}, m:{melperon:"D2-Antagonist bei Lewy-Körper [?]", pipamperon:"D2-Antagonist bei Lewy-Körper [?]"}}},
  {t:"Andere oder unklar", e:{}}]},
 {id:"dep", t:"Depressive Komponente?", a:YN({p:{citalopram:"CitAD positiv; QT ab 20 mg"}})}
]});

A({id:"sp-angst", sit:"sp-angst", ctx:["schw","still","alt","qtc","sucht","atem"], q:[
 {id:"art", t:"Akuter Anfall jetzt oder Dauerbehandlung?", a:[
  {t:"Akut jetzt", e:{p:{lorazepam:"Rasch wirksam, einmalig", hydroxyzin:"Ohne Abhängigkeit"}, m:{ssri:"Wirkt erst nach Wochen", pregabalin:"Dauerbehandlung"}}},
  {t:"Dauerbehandlung", e:{pp:{ssri:"Dauerbehandlung erster Wahl"}, m:{lorazepam:"Nicht als Dauer"}, go:[{to:"angst-panik", t:"Panik, Agoraphobie, soziale Angst"},{to:"angst-gas", t:"Generalisierte Angststörung"}]}}]},
 {id:"som", t:"Somatische Angstsymptome (Herzklopfen, Zittern), situativ?", a:YN({p:{propranolol:"Somatische Angstsymptome, situativ"}})},
 {id:"abh", t:"Suchtanamnese?", a:YN({x:{lorazepam:"Abhängigkeit"}, m:{pregabalin:"Missbrauchspotenzial"}})},
 {id:"dd", t:"Somatische Ursache ausgeschlossen (Hyperthyreose, Arrhythmie, Hypoglykämie, Entzug)?", a:YN({}, {w:"Erst somatische Ursachen und Entzug ausschließen."})}
]});

A({id:"sp-sucht", sit:"sp-sucht", ctx:["alt","qtc"], q:[
 {id:"ent", t:"Entzug noch aktiv?", a:YN({w:"Erst Entzug behandeln (Score).", go:[{to:"ez-alk", t:"Alkoholentzug"},{to:"ez-opioid", t:"Opioidentzug"}]})},
 {id:"op", t:"Opioidkonsum oder Substitution?", a:YN({m:{promethazin:"Bei Opioidkonsum zurückhaltend"}})},
 {id:"veg", t:"Vegetative Zeichen (Schwitzen, Tachykardie, RR ↑)?", a:YN({pp:{clonidin:"Vegetative Unruhe"}})},
 {id:"schlaf", t:"Schlafstörung?", a:YN({p:{mirtazapin:"Schlaf und Unruhe"}})}
]});

/* ================= EPMS & NOTFÄLLE ================= */
A({id:"ep-dystonie", sit:"ep-dystonie", ctx:["delir","alt"], q:[
 {id:"lar", t:"Schlundkrampf oder Atemnot (Laryngospasmus)?", a:YN({w:"Notfall: Atemweg sichern; Biperiden i. v."})},
 {id:"ki", t:"Anticholinergikum kontraindiziert (Engwinkelglaukom, Harnverhalt, Delir)?", a:YN({x:{biperiden:"Anticholinergikum kontraindiziert"}, pp:{lorazepam:"Wenn Anticholinergikum kontraindiziert"}})},
 {id:"mcp", t:"Auslöser in der Komedikation (z. B. MCP)?", a:YN({n:"MCP oder anderen D2-Antagonisten absetzen."}, {n:"AP-Dosis senken oder wechseln."})}
]});

A({id:"ep-akathisie", sit:"ep-akathisie", ctx:["alt","atem","sucht","schw"], q:[
 {id:"ap", t:"Lässt sich das Antipsychotikum reduzieren oder wechseln?", a:YN({pp:{"ap-dosis":"Kausale Maßnahme"}, go:[{to:"umst-ap", t:"Antipsychotikum umstellen"}]})},
 {id:"kardio", t:"Asthma, Bradykardie oder Hypotonie?", a:YN({x:{propranolol:"KI: Asthma, Bradykardie < 50/min, Hypotonie"}, pp:{mirtazapin:"Gleichwertig zu Propranolol, ohne Betablockade"}})},
 {id:"gew", t:"Gewicht soll nicht steigen?", a:YN({m:{mirtazapin:"Gewichtszunahme"}, p:{propranolol:"Kein Gewichtseffekt"}})},
 {id:"schlaf", t:"Schlafstörung?", a:YN({p:{mirtazapin:"Abends, schlafanstoßend"}})},
 {id:"pk", t:"Begleitendes Parkinsonoid?", a:YN({p:{biperiden:"Nur bei begleitendem Parkinsonoid"}}, {x:{biperiden:"Hilft kaum bei Akathisie"}})},
 {id:"suiz", t:"Suizidgedanken erfragt?", a:YN({}, {w:"Akathisie erhöht das Suizidrisiko: aktiv erfragen."})}
]});

A({id:"ep-parkinsonoid", sit:"ep-parkinsonoid", ctx:["alt","delir","niere","qtc"], q:[
 {id:"ap", t:"Lässt sich das Antipsychotikum reduzieren oder wechseln?", a:YN({pp:{dosisreduktion:"Kausal"}, go:[{to:"umst-ap", t:"Antipsychotikum umstellen"}]})},
 {id:"tremor", t:"Tremor im Vordergrund?", a:YN({p:{propranolol:"Bei vorherrschendem Tremor"}})},
 {id:"kog", t:"Kognitive Störung oder Ältere?", a:YN({x:{biperiden:"Anticholinerg: Delir, Kognition"}, pp:{amantadin:"Bei Älteren, ohne Anticholinergik"}})},
 {id:"ip", t:"Könnte ein idiopathischer Parkinson unmaskiert sein?", a:YN({w:"Neurologische Abklärung; kein Levodopa bei Antipsychotika-Therapie."})}
]});

A({id:"ep-spaetdys", sit:"ep-spaetdys", ctx:["schw","still","leber","pd"], q:[
 {id:"ac", t:"Läuft ein Anticholinergikum (z. B. Biperiden)?", a:YN({pp:{anticholinergika:"Anticholinergika verschlechtern TD"}})},
 {id:"ap", t:"Wird weiterhin ein Antipsychotikum gebraucht?", a:YN({pp:{"wechsel-auf-clozapin":"Beste Evidenz unter den AP"}, p:{quetiapin:"Geringe D2-Affinität"}, n:"AP nicht abrupt absetzen (Absetzdyskinesie).", go:[{to:"umst-ap", t:"Antipsychotikum umstellen"}]})},
 {id:"dep", t:"Depression oder Suizidalität?", a:YN({x:{tetrabenazin:"KI bei unbehandelter Depression oder Suizidalität"}})},
 {id:"clo", t:"Ist Clozapin möglich (Blutbildkontrollen, keine KI)?", a:YN({}, {x:{"wechsel-auf-clozapin":"Clozapin nicht möglich"}, p:{tetrabenazin:"VMAT2-Hemmer, in DE zugelassen"}})}
]});

A({id:"ep-mns", sit:"ep-mns", ctx:["niere","leber"], q:[
 {id:"dd", t:"Rascher Beginn mit Klonus und Hyperreflexie?", a:YN({go:[{to:"ep-serotonin", t:"Serotoninsyndrom"}], w:"Klonus und Hyperreflexie sprechen eher für ein Serotoninsyndrom."})},
 {id:"kat", t:"Katatone Merkmale?", a:YN({pp:{lorazepam:"Besonders bei katatonen Merkmalen"}})},
 {id:"schwer", t:"Temperatur ≥ 40 °C oder ausgeprägter Rigor?", a:YN({pp:{dantrolen:"Ausgeprägter Rigor und Hyperthermie (MNS III)"}, p:{bromocriptin:"Hebt D2-Blockade auf"}})},
 {id:"psy", t:"Schwere aktive Psychose?", a:YN({m:{bromocriptin:"Kann Psychose verschlechtern", amantadin:"Kann Psychose verschlechtern"}})},
 {id:"res", t:"Keine Besserung nach Tagen?", a:YN({pp:{ekt:"Bei Therapieresistenz oder maligner Katatonie"}})}
], base:{w:["Notfall: AP sofort stoppen, Kühlung, Volumen, Intensivmedizin."]}});

A({id:"ep-serotonin", sit:"ep-serotonin", ctx:[], q:[
 {id:"dd", t:"Langsamer Beginn mit Rigor und Bradyreflexie?", a:YN({go:[{to:"ep-mns", t:"Malignes neuroleptisches Syndrom"}], w:"Langsamer Beginn mit Rigor spricht eher für ein MNS."})},
 {id:"mao", t:"MAO-Hemmer, Linezolid oder Tramadol beteiligt?", a:YN({w:"Hochrisiko-Kombination: alle serotonergen Mittel stoppen, Monitoring."})}
], base:{n:["Alle serotonergen Mittel absetzen, Kühlung; meist Besserung in 24 h."]}});

/* ================= ENTZUG ================= */
A({id:"ez-alk", sit:"ez-alk", ctx:["alt","leber","atem","epi"], q:[
 {id:"schw", t:"Delir, Entzugsanfall oder Halluzinationen?", a:YN({go:[{to:"ez-alk-schwer", t:"Schweres Alkoholentzugssyndrom"}], w:"Schweres AWS: Intensivüberwachung."})},
 {id:"set", t:"Setting?", a:[
  {t:"Stationär", e:{p:{clomethiazol:"DE-Standard stationär"}}},
  {t:"Ambulant", e:{x:{clomethiazol:"Clomethiazol ambulant: Abhängigkeit, Atemdepression mit Alkohol"}, p:{carbamazepin:"Leichtes AWS, kein Missbrauch", gabapentin:"Leichtes AWS ambulant"}}}]},
 {id:"anam", t:"Frühere Entzugsanfälle oder Delirien?", a:YN({w:"Stärkster Prädiktor für schweren Verlauf: stationär.", pp:{diazepam:"Lange HWZ, glatter Verlauf, antikonvulsiv"}, p:{carbamazepin:"Anfallsprophylaxe"}, m:{gabapentin:"Nur leichtes AWS"}})},
 {id:"misch", t:"Mischkonsum (BZD, GHB)?", a:YN({w:"Mischkonsum: Entzug kann schwerer und verzögert verlaufen.", go:[{to:"ez-bzd", t:"BZD-Entzug"},{to:"ez-ghb", t:"GHB-Entzug"}]})},
 {id:"veg", t:"Ausgeprägte vegetative Symptome (RR, Puls)?", a:YN({p:{clonidin:"Nur vegetative Symptome, nie allein"}})}
], base:{n:["Score erheben (CIWA-Ar oder AESB), symptomgetriggert behandeln.","Thiamin bei jedem Entzug, vor Glukose."]}});

A({id:"ez-alk-schwer", sit:"ez-alk-schwer", ctx:["alt","leber","atem"], q:[
 {id:"anf", t:"Entzugsanfall aktuell?", a:YN({pp:{lorazepam:"Entzugsanfall: Lorazepam i. v."}, w:"Kein Phenytoin."})},
 {id:"hal", t:"Halluzinationen oder psychotische Symptome?", a:YN({pp:{haloperidol:"Zusätzlich zu BZD, nie allein"}})},
 {id:"ref", t:"Trotz hoher BZD-Dosen keine Kontrolle?", a:YN({pp:{dexmedetomidin:"Intensivmedizin bei BZD-Refraktärität"}})},
 {id:"wern", t:"Hinweise auf Wernicke (Verwirrtheit, Ataxie, Okulomotorik)?", a:YN({w:"Thiamin hochdosiert i. v., vor Glukose."})}
], base:{n:["Thiamin immer, vor Glukose.","Natrium langsam korrigieren."]}});

A({id:"ez-bzd", sit:"ez-bzd", ctx:["alt","leber","schw","epi"], q:[
 {id:"set", t:"Setting?", a:[
  {t:"Ambulant", e:{n:"Ambulant langsam: Wochen bis Monate; letzte 25–50 % am langsamsten."}},
  {t:"Stationär", e:{n:"Stationär schneller möglich; letzte Schritte trotzdem langsamer."}}]},
 {id:"hoch", t:"Hochdosis oder Anfallsanamnese?", a:YN({p:{carbamazepin:"Anfallsschutz bei Hochdosis"}})},
 {id:"schlaf", t:"Schlafstörung während des Ausschleichens?", a:YN({p:{trazodon:"Schlaf ohne Abhängigkeit", mirtazapin:"Schlaf ohne Abhängigkeit"}})},
 {id:"op", t:"Opioide oder Missbrauch weiterer Substanzen?", a:YN({x:{pregabalin:"Missbrauch, Atemdepression mit Opioiden"}})}
], base:{n:["Auf Äquivalenzdosis umstellen, dann schrittweise reduzieren (Rechner: BZD-Äquivalenz).","Nie abrupt absetzen."]}});

A({id:"ez-opioid", sit:"ez-opioid", ctx:["schw","qtc","leber","atem"], q:[
 {id:"ziel", t:"Ziel?", a:[
  {t:"Substitution (Erhalt)", e:{n:"Substitution senkt die Mortalität."}},
  {t:"Entzug (Abdosierung)", e:{p:{clonidin:"Vegetative Symptome", loperamid:"Diarrhoe", ibuprofen:"Gliederschmerzen"}, n:"Nach Entzug: Toleranz weg → Überdosisrisiko; Take-home-Naloxon."}}]},
 {id:"aktuell", t:"Ist der Patient aktuell auf Methadon und soll auf Buprenorphin?", a:YN({go:[{to:"umst-mb", t:"Methadon → Buprenorphin umstellen"}]})},
 {id:"tol", t:"Hohe Toleranz oder Buprenorphin unverträglich?", a:YN({pp:{methadon:"Bei hoher Toleranz oder Bupe-Unverträglichkeit"}}, {p:{buprenorphin:"Sicher, kaum QT"}})},
 {id:"fent", t:"Fentanyl-Konsum?", a:YN({n:"Fentanyl: verzögerter Entzug; Low-dose-Induktion mit Buprenorphin erwägen."})},
 {id:"bei", t:"BZD- oder Alkohol-Beikonsum?", a:YN({w:"Atemdepression: Buprenorphin-Start mit 2 mg.", m:{methadon:"Atemdepression besonders in der Einstellung"}})}
], base:{n:["Buprenorphin erst bei objektivem Entzug (COWS ≥ 8–12).","Naloxon nasal mitgeben."]}});

A({id:"ez-ghb", sit:"ez-ghb", ctx:["atem"], q:[
 {id:"hoch", t:"Sehr hohe BZD-Dosen nötig?", a:YN({p:{baclofen:"GABA-B, adjuvant (Fallserien)"}})}
], base:{w:["Gefährlichster Entzug: stationär mit Überwachung, oft intensivnah."]}});

A({id:"ez-cannabis", sit:"ez-cannabis", ctx:["schw","sucht"], q:[
 {id:"hyp", t:"Cannabinoid-Hyperemesis?", a:YN({pp:{haloperidol:"Cannabinoid-Hyperemesis"}, n:"Heiße Dusche lindert; Capsaicin."})},
 {id:"schlaf", t:"Schlafstörung oder Appetitverlust?", a:YN({p:{mirtazapin:"Schlaf und Appetit", trazodon:"Schlaf"}})},
 {id:"op", t:"Opioidkonsum?", a:YN({x:{gabapentin:"Missbrauch, Atemdepression mit Opioiden"}})}
]});

A({id:"ez-stim", sit:"ez-stim", ctx:["sucht","epi"], q:[
 {id:"psy", t:"Psychotische Symptome?", a:YN({p:{olanzapin:"Psychose", quetiapin:"Psychose, Unruhe"}})},
 {id:"schlaf", t:"Schlafstörung oder Appetitverlust?", a:YN({p:{mirtazapin:"Schlaf und Appetit", trazodon:"Schlaf"}})},
 {id:"suiz", t:"Suizidalität?", a:YN({w:"Crash-Phase: Suizidalität engmaschig erfragen."})},
 {id:"miss", t:"Missbrauchsrisiko für Quetiapin?", a:YN({m:{quetiapin:"Missbrauch möglich"}})}
]});

/* ================= DEPRESSION ================= */
A({id:"dep-unipolar", sit:"dep-unipolar", ctx:["schw","still","alt","leber","niere","qtc","epi"], q:[
 {id:"ausschl", t:"Gibt es Hinweise auf Bipolarität oder psychotische Merkmale?", a:[
  {t:"Nein", e:{}},
  {t:"Bipolar (frühere Hypomanie/Manie)", e:{go:[{to:"bip-dep", t:"Bipolare Depression"}], w:"AD können Manien auslösen."}},
  {t:"Psychotische Merkmale", e:{go:[{to:"dep-psychot", t:"Psychotische Depression"}]}},
  {t:"Schon ≥ 1 AD ohne Erfolg", e:{go:[{to:"dep-tr", t:"Therapieresistente Depression"},{to:"umst-ad", t:"Antidepressivum umstellen"}]}}]},
 {id:"sg", t:"Schweregrad?", a:[
  {t:"Leicht", e:{pp:{niedrigintensive:"Ersttherapie bei leichter Episode (NVL ⇑⇑)"}, m:{"*":"AD nicht als Ersttherapie bei leichter Episode (NVL 5-4)"}}},
  {t:"Mittelgradig", e:{pp:{psychotherapie:"Gleichwertig zu AD (NVL 5-8 ⇑⇑)"}, n:"Psychotherapie oder AD gleichwertig; Präferenz entscheidet."}},
  {t:"Schwer", e:{p:{psychotherapie:"Kombination Psychotherapie + AD [?]"}, n:"Schwer: Kombination Psychotherapie + AD."}}]},
 {id:"fokus", t:"Was steht neben der Stimmung im Vordergrund?", a:[
  {t:"Schlafstörung oder Appetitmangel", e:{pp:{mirtazapin:"Bei Schlafstörung und Appetitmangel"}}},
  {t:"Antriebsmangel, Müdigkeit", e:{p:{bupropion:"Aktivierend, nicht sedierend"}, m:{mirtazapin:"Sedierung"}}},
  {t:"Schmerzen", e:{pp:{duloxetin:"Bei komorbiden Schmerzen"}}},
  {t:"Angst", e:{p:{escitalopram:"Auch Angststörungen zugelassen", sertralin:"Auch Panik und soziale Angst zugelassen", venlafaxin:"Auch Angststörungen zugelassen"}}},
  {t:"Nichts Besonderes", e:{}}]},
 {id:"gew", t:"Soll das Gewicht nicht steigen?", a:YN({m:{mirtazapin:"Gewichtszunahme"}, p:{bupropion:"Kein Gewicht", agomelatin:"Kein Gewicht"}})},
 {id:"sex", t:"Sind sexuelle Nebenwirkungen besonders wichtig?", a:YN({p:{bupropion:"Wenig Sexual-NW", agomelatin:"Kaum Sexual-NW"}})},
 {id:"herz", t:"Kardiale Erkrankung?", a:YN({pp:{sertralin:"Kardial gut untersucht (nach Infarkt/ACS)"}, m:{citalopram:"QTc dosisabhängig", escitalopram:"QTc dosisabhängig", venlafaxin:"RR und Herzfrequenz ↑"}})},
 {id:"anf", t:"Krampfanfälle oder Essstörung (auch früher)?", a:YN({x:{bupropion:"KI: Anfälle, Bulimie, Anorexie"}})},
 {id:"komed", t:"Viele Begleitmedikamente?", a:YN({p:{escitalopram:"Interaktionsarm", sertralin:"Schwacher CYP-Einfluss"}, m:{johanniskraut:"Starke CYP3A4-Induktion", bupropion:"Starker CYP2D6-Hemmer"}})},
 {id:"rez", t:"Zwei bis drei oder mehr Episoden in den letzten 5 Jahren?", a:YN({p:{lithium:"Rezidivprophylaxe zugelassen, suizidpräventiv", sertralin:"Rezidivprophylaxe zugelassen"}, n:"Erhaltung ≥ 2 Jahre in Akutdosis (NVL 6-3)."}, {n:"Erhaltung 6–12 Monate nach Remission in Akutdosis (NVL 6-1)."})}
]});

A({id:"dep-tr", sit:"dep-tr", adjMain:true, ctx:["schw","alt","niere","qtc","leber"], q:[
 {id:"pseudo", t:"Spiegel (TDM) und Adhärenz geprüft?", a:YN({}, {pp:{tdm:"Deckt Unterdosierung und Nichteinnahme auf"}, w:"Erst Pseudoresistenz ausschließen: Spiegel, Einnahme, Diagnose, Komorbidität."})},
 {id:"psych", t:"Psychotische Merkmale?", a:YN({go:[{to:"dep-psychot", t:"Psychotische Depression"}]})},
 {id:"n", t:"Wie viele adäquate AD-Versuche in dieser Episode?", a:[
  {t:"Einer", e:{p:{lithium:"Augmentation (NVL 7-7)", quetiapin:"Augmentation, zugelassen", aripiprazol:"Augmentation (NVL 7-6)", mirtazapin:"Kombination (NVL 7-11)", venlafaxin:"Wechsel auf anderen Mechanismus"}, x:{esketamin:"Zulassung erst nach ≥ 2 erfolglosen AD"}, m:{tranylcypromin:"Reserve nach 2 erfolglosen Standard-AD", "ekt-":"Erst bei höherem Resistenzgrad [?]"}}},
  {t:"Zwei oder mehr", e:{p:{esketamin:"Zugelassen nach ≥ 2 erfolglosen AD", tranylcypromin:"Reserve-AD nach 2 erfolglosen", "ekt-":"Wirksamste Option bei therapierefraktärer Depression"}}}]},
 {id:"aktuell", t:"Welches AD läuft?", a:[
  {t:"SSRI", e:{p:{venlafaxin:"Nach SSRI-Versagen bei schwerer Episode günstiger als zweiter SSRI"}, n:"SSRI im therapeutischen Spiegel nicht weiter erhöhen (NVL 7-14).", go:[{to:"umst-ad", t:"Antidepressivum umstellen"}]}},
  {t:"SNRI oder anderes", e:{go:[{to:"umst-ad", t:"Antidepressivum umstellen"}]}}]},
 {id:"suiz", t:"Akute Suizidalität?", a:YN({pp:{lithium:"Senkt Suizidrisiko"}, p:{"ekt-":"Rascher Wirkeintritt"}})},
 {id:"metab", t:"Gewicht oder Metabolik problematisch?", a:YN({m:{quetiapin:"Gewicht, Sedierung", "olanzapin-oder":"Metabolik"}, p:{aripiprazol:"Metabolisch günstig"}})},
 {id:"kv", t:"Aneurysma, intrazerebrale Blutung, kardiovaskuläres Ereignis < 6 Wochen oder unkontrollierte Hypertonie?", a:YN({x:{esketamin:"KI: Blutdruck-/Hirndruckanstieg"}, m:{tranylcypromin:"Hypertensive Krisen"}})}
]});

A({id:"dep-psychot", sit:"dep-psychot", ctx:["schw","alt","qtc","pd"], q:[
 {id:"dring", t:"Suizidalität, Nahrungsverweigerung oder Stupor?", a:YN({pp:{ekt:"Schneller und effizienter als Pharmakotherapie"}})},
 {id:"ekt", t:"EKT abgelehnt oder nicht verfügbar?", a:YN({x:{ekt:"Abgelehnt oder nicht verfügbar"}, pp:{"kombination-ad":"Kombination AD + AAP jeder Monotherapie überlegen"}})},
 {id:"metab", t:"Gewicht oder Metabolik problematisch?", a:YN({m:{olanzapin:"Gewicht, Metabolik"}, p:{risperidon:"Alternative zu Olanzapin"}})},
 {id:"prl", t:"Prolaktin oder EPS problematisch?", a:YN({m:{risperidon:"Prolaktin, EPS"}, p:{olanzapin:"Wenig EPS"}})},
 {id:"schlaf", t:"Schlaflosigkeit oder Suizidalität?", a:YN({p:{mirtazapin:"Sedierendes AD in Kombination"}})}
], base:{n:["Kombination 3–6 Monate nach Abklingen der Psychose fortführen."]}});

/* ================= ANGST & ZWANG ================= */
A({id:"angst-panik", sit:"angst-panik", ctx:["schw","still","alt","qtc","leber","niere"], q:[
 {id:"dx", t:"Welche Störung?", a:[
  {t:"Panikstörung / Agoraphobie", e:{m:{moclobemid:"Nur soziale Angst zugelassen"}}},
  {t:"Soziale Angststörung", e:{m:{citalopram:"Nur Panik zugelassen", clomipramin:"Panik, nicht soziale Angst"}, p:{moclobemid:"Soziale Angst zugelassen (Reserve)"}}}]},
 {id:"kvt", t:"KVT mit Exposition verfügbar und gewünscht?", a:YN({pp:{"kvt-mit":"S3 A; nachhaltiger nach Therapieende"}})},
 {id:"abs", t:"Absetzprobleme in der Vorgeschichte?", a:YN({m:{paroxetin:"Starkes Absetzsyndrom", venlafaxin:"Absetzeffekte"}})},
 {id:"rr", t:"Hypertonie?", a:YN({m:{venlafaxin:"RR ↑ dosisabhängig"}})},
 {id:"vers", t:"Haben zwei SSRI/SNRI versagt?", a:YN({p:{clomipramin:"Panik: nach SSRI/SNRI-Versagen (S3 B)", moclobemid:"Soziale Angst: nach Versagen (KKP)"}}, {m:{clomipramin:"Erst nach SSRI/SNRI-Versagen", moclobemid:"Erst nach Versagen der A-Mittel"}})}
], base:{n:["Panik: mit halber Dosis starten; Bewertung nach 4–6 Wochen."]}});

A({id:"angst-gas", sit:"angst-gas", ctx:["schw","still","alt","qtc","leber","niere","sucht"], q:[
 {id:"kvt", t:"KVT verfügbar und gewünscht?", a:YN({pp:{kvt:"S3 A"}})},
 {id:"sg", t:"Schwere Symptomatik?", a:YN({p:{duloxetin:"Dreher: bei schwereren Fällen bevorzugt"}}, {p:{escitalopram:"Milde Fälle (Dreher)"}})},
 {id:"schnell", t:"Schneller Wirkeintritt wichtig?", a:YN({p:{pregabalin:"Rascher Wirkeintritt"}})},
 {id:"schmerz", t:"Komorbide Schmerzen?", a:YN({p:{duloxetin:"Auch Schmerz zugelassen", pregabalin:"Auch neuropathischer Schmerz"}})},
 {id:"komed", t:"Viele Begleitmedikamente?", a:YN({p:{pregabalin:"Keine pharmakokinetischen Interaktionen", escitalopram:"Interaktionsarm"}})},
 {id:"drog", t:"Drogen- oder Polytoxikomanie-Anamnese?", a:YN({x:{pregabalin:"Missbrauchspotenzial"}})},
 {id:"vers", t:"Haben die A/B-Mittel versagt?", a:YN({p:{opipramol:"Nach Versagen der A/B-Mittel", quetiapin:"Off-label nach A/B-Versagen", agomelatin:"Off-label bei Therapieresistenz"}}, {m:{opipramol:"Nicht als Ersttherapie", quetiapin:"Erst nach A/B-Versagen", agomelatin:"Erst bei Therapieresistenz"}})}
]});

A({id:"zwang", sit:"zwang", ctx:["schw","still","jug","alt","qtc","epi"], q:[
 {id:"kvt", t:"KVT mit Exposition und Reaktionsmanagement verfügbar?", a:YN({pp:{"kvt-mit":"Wirksamste Therapie, 1. Wahl"}})},
 {id:"n", t:"Wie viele SSRI-Versuche (≥ 12 Wochen, hohe Dosis)?", a:[
  {t:"Noch keiner", e:{n:"SSRI langsam bis zur Höchstdosis; Bewertung frühestens nach 12 Wochen.", m:{clomipramin:"Erst nach 2 erfolglosen SSRI", risperidon:"Augmentation erst bei Therapieresistenz", aripiprazol:"Augmentation erst bei Therapieresistenz"}}},
  {t:"Einer", e:{n:"Dosis ausreizen, dann anderes SSRI.", m:{clomipramin:"Erst nach 2 erfolglosen SSRI"}}},
  {t:"Zwei oder mehr", e:{pp:{clomipramin:"Nach 2 erfolglosen SSRI", risperidon:"Augmentation mit bester Evidenz"}, p:{aripiprazol:"Augmentation"}, n:"AP-Augmentation nach 6 Wochen ohne Ansprechen absetzen."}}]},
 {id:"tics", t:"Komorbide Tic-Störung?", a:YN({pp:{risperidon:"Besonders bei Tics"}})},
 {id:"komed", t:"Komedikation mit Clozapin oder anderen CYP1A2/2D6-Substraten?", a:YN({m:{fluvoxamin:"Starke CYP1A2/2C19-Hemmung", fluoxetin:"Starke CYP2D6-Hemmung, lange HWZ", paroxetin:"Starke CYP2D6-Hemmung"}})}
], base:{n:["Erhaltung mindestens 12–24 Monate; Absetzen über Monate unter KVT."]}});

A({id:"ptbs", sit:"ptbs", ctx:["schw","still","alt","qtc","sucht"], q:[
 {id:"pt", t:"Ist traumafokussierte Psychotherapie möglich?", a:YN({pp:{traumafokussierte:"Behandlung erster Wahl (S3 A)"}, n:"Medikation nur zweite Wahl und nie allein."}, {n:"Medikation als Brücke; PT-Zugang weiter anstreben."})},
 {id:"kom", t:"Komplexe PTBS (Affektregulation, Selbstbild, Beziehungen)?", a:YN({pp:{kombination:"Komplexe PTBS (S3 2026 B)"}})},
 {id:"psy", t:"Psychoseähnliche Symptome?", a:YN({pp:{risperidon:"Bei psychoseähnlichen Zuständen"}})},
 {id:"alb", t:"Albträume im Vordergrund?", a:YN({p:{imagery:"Albtraumspezifische PT", quetiapin:"Hinweise auf Schlaf/Albträume", risperidon:"Positive Wirkung auf Albträume", prazosin:"Albträume (international; in DE nicht im Handel)"}, go:[{to:"ins-trauma", t:"Schlaf bei PTBS und Albträumen"}]})},
 {id:"abs", t:"Absetzprobleme in der Vorgeschichte?", a:YN({m:{paroxetin:"Starkes Absetzsyndrom"}})}
], base:{n:["SSRI niedrig starten, dann ≥ 8 Wochen eher hoch dosiert; bei Ansprechen 1–2 Jahre."]}});

/* ================= DEMENZ ================= */
A({id:"dem-alz", sit:"dem-alz", ctx:["niere","leber","qtc","atem"], q:[
 {id:"sg", t:"Schweregrad der Alzheimer-Demenz?", a:[
  {t:"Leicht", e:{p:{donepezil:"AChE-Hemmer (S3 ⇑⇑)", rivastigmin:"AChE-Hemmer (S3 ⇑⇑)", galantamin:"AChE-Hemmer (S3 ⇑⇑)"}, x:{memantin:"Nicht bei leichter AD"}}},
  {t:"Mittelschwer", e:{p:{donepezil:"AChE-Hemmer (S3 ⇑⇑)", rivastigmin:"AChE-Hemmer (S3 ⇑⇑)", galantamin:"AChE-Hemmer (S3 ⇑⇑)", memantin:"Mittelschwer–schwer (S3 ⇑⇑)"}}},
  {t:"Schwer", e:{pp:{memantin:"Mittelschwer–schwer (S3 ⇑⇑)"}, n:"Bestehenden AChE-Hemmer weiterführen (S3 ⇑); Donepezil bei schwerer AD wirksam, off-label."}}]},
 {id:"brady", t:"Bradykardie, AV-Block oder Sick-Sinus-Syndrom?", a:YN({m:{donepezil:"Bradykardie, AV-Block", rivastigmin:"Bradykardie, Synkopen", galantamin:"Bradykardie, AV-Block, QTc"}, p:{memantin:"Kein Routine-EKG nötig"}})},
 {id:"schluck", t:"Schluckprobleme oder Übelkeit unter Tabletten?", a:YN({pp:{rivastigmin:"Pflaster bei Schluckproblemen oder GI-NW"}})},
 {id:"schlaf", t:"Schlafstörung?", a:YN({m:{donepezil:"Schlafstörungen häufiger als bei anderen AChE-I"}})},
 {id:"kombi", t:"Wird schon AChE-Hemmer plus Memantin gegeben?", a:YN({w:"S3 2023: Kombination AChE-I + Memantin nicht einsetzen (⇓⇓)."})},
 {id:"amyl", t:"Frühe Alzheimer-Krankheit mit Amyloid-Nachweis?", a:YN({p:{"anti-amyloid":"S3 2026 ⇑ (spezialisierte Zentren)"}})}
], base:{n:["EKG vor Beginn, nach 4, 8, 12 Wochen, dann vierteljährlich (AChE-I).","Nutzen nach 3 Monaten, dann halbjährlich prüfen."]}});

A({id:"dem-lewy", sit:"dem-lewy", ctx:["qtc","niere"], q:[
 {id:"med", t:"Wurden psychotogene Parkinson-Mittel bereits reduziert?", a:YN({}, {pp:{reduktion:"Psychose bei PDD meist medikamentös bedingt"}, n:"Reihenfolge: Anticholinergika/Amantadin → COMT/MAO-B → Dopaminagonisten → L-Dopa."})},
 {id:"ziel", t:"Was steht im Vordergrund?", a:[
  {t:"Kognition", e:{pp:{rivastigmin:"PDD zugelassen, DLB Mittel der Wahl"}, p:{donepezil:"Off-label, gute Ergebnisse"}}},
  {t:"Psychose / Halluzinationen", e:{p:{rivastigmin:"Wirkt auch auf Halluzinationen (vor jedem AP)", quetiapin:"Erstes AP, meist vertragen"}}}]},
 {id:"que", t:"Quetiapin unzureichend oder Akinese?", a:YN({pp:{clozapin:"Für Parkinson-Psychose zugelassen, am besten belegt"}})},
 {id:"bb", t:"Sind wöchentliche Blutbildkontrollen möglich?", a:YN({}, {x:{clozapin:"ANC-Kontrollen nötig"}})}
]});

/* ================= BIPOLAR ================= */
A({id:"bip-manie", sit:"bip-manie", ctx:["schw","still","alt","niere","leber","qtc"], q:[
 {id:"frau", t:"Frau im gebärfähigen Alter?", a:YN({x:{valproat:"Nur mit Schwangerschaftsverhütungsprogramm"}, m:{carbamazepin:"Teratogen; senkt Wirkung hormoneller Kontrazeptiva"}})},
 {id:"ad", t:"Läuft ein Antidepressivum oder Stimulans?", a:YN({w:"Antidepressiva und Stimulanzien beenden."})},
 {id:"typ", t:"Welches Bild?", a:[
  {t:"Euphorisch, ohne Psychose", e:{pp:{lithium:"Euphorische Manie; zugleich Prophylaxe"}}},
  {t:"Gereizt oder gemischt", e:{p:{valproat:"Auch gereizt/gemischt", olanzapin:"AAP bei gereizter Manie", quetiapin:"AAP", risperidon:"AAP", aripiprazol:"AAP"}, m:{lithium:"Schwächer bei gemischten Phasen"}}},
  {t:"Psychotisch oder schwer", e:{pp:{"kombination-lithium":"Wirksamer als Monotherapie"}, p:{olanzapin:"Rasch, sedierend", risperidon:"Günstig in Metaanalyse", haloperidol:"Rasch antimanisch"}}}]},
 {id:"metab", t:"Gewicht oder Metabolik problematisch?", a:YN({m:{olanzapin:"Gewicht, Metabolik", quetiapin:"Gewicht"}, p:{aripiprazol:"Metabolisch günstig", ziprasidon:"Metabolisch günstig"}})},
 {id:"sed", t:"Sedierung erwünscht (Schlaflosigkeit, Erregung)?", a:YN({p:{olanzapin:"Sedierend", quetiapin:"Sedierend"}, m:{aripiprazol:"Kaum sedierend"}})},
 {id:"proph", t:"Soll das Akutmittel später die Prophylaxe übernehmen?", a:YN({p:{lithium:"Akut und prophylaktisch", quetiapin:"Deckt Prophylaxe ab", aripiprazol:"Prophylaxe nach Ansprechen", olanzapin:"Prophylaxe nach Ansprechen"}, m:{haloperidol:"Nach Abklingen ausschleichen"}})}
]});

A({id:"bip-dep", sit:"bip-dep", ctx:["schw","still","alt","niere","qtc"], q:[
 {id:"stab", t:"Läuft ein Stimmungsstabilisierer?", a:YN({p:{lithium:"Basis optimieren"}}, {x:{sertralin:"AD nur zusätzlich zu Stabilisierer", bupropion:"AD nur zusätzlich zu Stabilisierer"}, n:"Ohne Stabilisierer kein Antidepressivum."})},
 {id:"misch", t:"Zwei oder mehr manische Begleitsymptome (Mischzustand)?", a:YN({x:{sertralin:"Keine AD bei Mischsymptomen", bupropion:"Keine AD bei Mischsymptomen"}})},
 {id:"sg", t:"Schwere Depression?", a:YN({p:{lamotrigin:"Akut nur bei schwerer Depression belegt"}, n:"Mittelschwer bis schwer: AD zusätzlich zum Stabilisierer möglich, kurz halten."}, {pp:{psychoedukation:"Leichte Episoden zunächst mit PT plus Stabilisierer"}})},
 {id:"suiz", t:"Suizidalität?", a:YN({pp:{lithium:"Suizidpräventiv"}, p:{ekt:"Akute Suizidalität"}})},
 {id:"metab", t:"Gewicht oder Metabolik problematisch?", a:YN({m:{quetiapin:"Gewicht, Sedierung", olanzapin:"Metabolik"}})},
 {id:"res", t:"Therapieresistent?", a:YN({p:{ekt:"Therapieresistenz", tranylcypromin:"Bei Nichtansprechen auf andere AD (Switch-Risiko ↑)"}})}
]});

A({id:"bip-proph", sit:"bip-proph", ctx:["schw","still","alt","niere","leber"], q:[
 {id:"pol", t:"Welche Episoden überwiegen?", a:[
  {t:"Überwiegend manisch", e:{p:{lithium:"Schützt besser vor Manie", aripiprazol:"Prävention manischer Episoden", olanzapin:"Prävention manischer Episoden", valproat:"Nach Manie"}, m:{lamotrigin:"Nicht antimanisch"}}},
  {t:"Überwiegend depressiv", e:{pp:{lamotrigin:"Prävention depressiver Episoden (Bipolar I)"}, p:{quetiapin:"Wenn darunter Remission"}}},
  {t:"Ausgeglichen", e:{}}]},
 {id:"akut", t:"Welches Mittel hat in der Akutphase gewirkt und wurde vertragen?", a:[
  {t:"Lithium", e:{pp:{lithium:"Akut wirksam und vertragen"}}},
  {t:"Quetiapin", e:{pp:{quetiapin:"Monotherapie, wenn Remission unter Quetiapin"}}},
  {t:"Aripiprazol", e:{pp:{aripiprazol:"Zulassung an früheres Ansprechen gebunden"}}},
  {t:"Olanzapin", e:{pp:{olanzapin:"Zulassung an früheres Ansprechen gebunden"}}},
  {t:"Valproat", e:{pp:{valproat:"Weiterbehandlung nach Manie"}}},
  {t:"Anderes / unklar", e:{}}]},
 {id:"suiz", t:"Suizidversuch oder hohe Suizidalität in der Vorgeschichte?", a:YN({pp:{lithium:"Einziger Stabilisierer mit robustem antisuizidalem Effekt"}})},
 {id:"frau", t:"Frau im gebärfähigen Alter oder Kinderwunsch?", a:YN({x:{valproat:"Nur mit Verhütungsprogramm"}, m:{lithium:"1. Trimenon dringend abraten; Kinderwunsch planen", carbamazepin:"Teratogen"}})},
 {id:"rc", t:"Rapid Cycling unter Lithium?", a:YN({p:{carbamazepin:"Zugelassen bei Rapid Cycling unter Lithium", lamotrigin:"Alternative"}})},
 {id:"durch", t:"Durchbruchsepisoden trotz Monotherapie?", a:YN({pp:{kombination:"Stabilisierer + AAP"}})}
], base:{n:["Lithium nie abrupt absetzen: über Monate ausschleichen."]}});

/* ================= SCHIZOPHRENIE ================= */
A({id:"schiz-akut", sit:"schiz-akut", ctx:["schw","still","alt","jug","niere","leber","qtc","pd"], q:[
 {id:"kat", t:"Katatonie?", a:YN({pp:{lorazepam:"Bei Katatonie Mittel der Wahl"}, w:"Katatonie: Lorazepam statt AP-Eskalation; bei perniziöser Katatonie EKT."})},
 {id:"ers", t:"Ersterkrankung?", a:YN({p:{aripiprazol:"Gut bei Ersterkrankung mit Gewichtssorge"}, m:{olanzapin:"Bei jungen Ersterkrankten zurückhaltend (Gewicht)", haloperidol:"EPS bei Ersterkrankten"}, n:"Niedrige Start- und Zieldosis."})},
 {id:"vers", t:"Haben schon zwei Antipsychotika versagt?", a:YN({go:[{to:"schiz-tr", t:"Therapieresistente Schizophrenie"}]})},
 {id:"gew", t:"Gewicht oder Metabolik vermeiden?", a:YN({m:{olanzapin:"Stärkste Gewichtszunahme", quetiapin:"Metabolik"}, p:{aripiprazol:"Metabolisch neutral", ziprasidon:"Metabolisch günstig", cariprazin:"Metabolisch günstig"}})},
 {id:"prl", t:"Prolaktin oder sexuelle Nebenwirkungen vermeiden?", a:YN({m:{amisulprid:"Prolaktin ↑↑", risperidon:"Prolaktin", paliperidon:"Prolaktin"}, p:{aripiprazol:"Prolaktinneutral", quetiapin:"Kaum Prolaktin"}})},
 {id:"eps", t:"EPS-Neigung oder Akathisie-Anamnese?", a:YN({m:{haloperidol:"Hohes EPS-Risiko", risperidon:"EPS dosisabhängig", aripiprazol:"Akathisie"}, p:{quetiapin:"Kaum EPS"}})},
 {id:"sed", t:"Sedierung erwünscht (Erregung, Schlaflosigkeit)?", a:YN({p:{olanzapin:"Sedierend", quetiapin:"Sedierend"}, m:{aripiprazol:"Kaum sedierend"}}, {m:{olanzapin:"Sedierend", quetiapin:"Sedierend"}})},
 {id:"neg", t:"Prädominante Negativsymptomatik?", a:YN({pp:{cariprazin:"S3 E39a", amisulprid:"Primäre Negativsymptomatik (niedrige Dosis)"}})},
 {id:"komed", t:"Viele Begleitmedikamente oder Rauchstatus wechselnd?", a:YN({p:{amisulprid:"Keine CYP-Interaktionen", paliperidon:"Kaum Interaktionen"}, m:{olanzapin:"CYP1A2: Rauchen senkt Spiegel", cariprazin:"KI mit 3A4-Hemmern/-Induktoren"}})},
 {id:"dep", t:"Ist die Adhärenz unsicher (Depot später denkbar)?", a:YN({p:{paliperidon:"Brücke zum Depot", risperidon:"Depot verfügbar", aripiprazol:"Depot verfügbar"}, go:[{to:"umst-depot", t:"Oral → Depot umstellen"}]})}
], base:{n:["Ansprechen nach 2–4 Wochen mit Skala prüfen (S3 E28a)."]}});

A({id:"schiz-tr", sit:"schiz-tr", ctx:["schw","alt","leber","niere","epi"], q:[
 {id:"pseudo", t:"Pseudoresistenz ausgeschlossen (Spiegel, Adhärenz, Drogen, Diagnose)?", a:YN({}, {w:"Erst TDM, Adhärenz (ggf. Depot-Versuch), Drogenscreening und Diagnose prüfen."})},
 {id:"clo", t:"Ist Clozapin möglich (Blutbildkontrollen, keine KI)?", a:YN({pp:{clozapin:"Einzige belegte Substanz bei Resistenz (S3 stark)"}}, {x:{clozapin:"Nicht möglich"}, p:{olanzapin:"Nächste Wahl ohne Clozapin", risperidon:"Alternative bei Clozapin-KI", "ekt-":"Option ohne Clozapin"}})},
 {id:"ultra", t:"Clozapin ≥ 3 Monate im Zielspiegel (≥ 350 ng/ml) ohne Erfolg?", a:YN({p:{aripiprazol:"Augmentation, bessert Metabolik", amisulprid:"Gängige Kombination ohne CYP", "ekt-":"Clozapin + EKT positiv (S3 E46)"}, n:"Höchstens 2 Antipsychotika."})},
 {id:"gew", t:"Gewichtszunahme unter Clozapin?", a:YN({pp:{metformin:"S3 E54 stark nach Lebensstilintervention"}, p:{aripiprazol:"Bessert Metabolik unter Clozapin"}})},
 {id:"rauch", t:"Ändert sich der Rauchstatus (Station, E-Zigarette)?", a:YN({w:"Rauchstopp hebt den Clozapinspiegel stark (CYP1A2): Spiegel kontrollieren."})}
]});

A({id:"schiz-erhalt", sit:"schiz-erhalt", ctx:["schw","alt","niere","qtc"], q:[
 {id:"ziel", t:"Worum geht es?", a:[
  {t:"Depot einsetzen", e:{x:{amisulprid:"Kein Depot", cariprazin:"Kein Depot"}, go:[{to:"umst-depot", t:"Oral → Depot umstellen (Schritte)"}]}},
  {t:"Negativsymptomatik", e:{pp:{amisulprid:"Niedrig dosiert (S3 E39a)", cariprazin:"S3 E39a"}, m:{haloperidol:"Starke D2-Blockade: sekundäre Negativsymptome"}}},
  {t:"Orale Erhaltung", e:{n:"Kontinuierlich, niedrigste wirksame Dosis; Reduktion in 6–12-Wochen-Schritten."}}]},
 {id:"oral", t:"Auf welches orale AP ist der Patient stabil?", a:[
  {t:"Aripiprazol", e:{pp:{aripiprazol:"Depot desselben Wirkstoffs"}}},
  {t:"Risperidon oder Paliperidon", e:{pp:{paliperidon:"Depot nach oraler Risperidon/Paliperidon-Erfahrung", risperidon:"Consta"}}},
  {t:"Haloperidol", e:{pp:{haloperidol:"Decanoat"}}},
  {t:"Olanzapin", e:{p:{olanzapin:"Pamoat (Nachbeobachtung)"}}},
  {t:"Anderes / Clozapin", e:{w:"Depot nur nach oraler Vortestung desselben Wirkstoffs; nie Depot zu Clozapin."}}]},
 {id:"prl", t:"Prolaktin oder sexuelle Nebenwirkungen problematisch?", a:YN({m:{paliperidon:"Prolaktin", risperidon:"Prolaktin", amisulprid:"Prolaktin ↑↑"}, p:{aripiprazol:"Prolaktinneutral"}})},
 {id:"absetz", t:"Möchte der Patient absetzen?", a:YN({w:"Absetzen verdoppelt das Rückfallrisiko im 1. Jahr; nur schrittweise und mit Monitoring ≥ 2 Jahre (S3 E24/E25)."})}
]});

/* ================= BPS & ADHS ================= */
A({id:"bps", sit:"bps", ctx:["schw","still","qtc","sucht"], q:[
 {id:"krise", t:"Akute Krise mit Hochanspannung?", a:YN({go:[{to:"sp-bps", t:"Anspannung bei BPS (Bedarf)"}], n:"Krisenmedikation nach der Krise wieder absetzen (S3 E25)."})},
 {id:"kom", t:"Eigenständige Komorbidität (Depression, Angst, Zwang, PTBS, ADHS)?", a:YN({pp:{sertralin:"Nur bei eigenständiger Indikation"}, n:"Komorbidität nach eigener Leitlinie behandeln (S3 E21).", go:[{to:"adhs-komorb", t:"ADHS mit Komorbidität"}]})},
 {id:"ziel", t:"Welches Zielsymptom?", a:[
  {t:"Impulsivität, Ärger", e:{p:{aripiprazol:"Beste Datenlage", topiramat:"Impulsivität, Ärger", "omega-3":"Impulsivität, Ärger; NW-arm"}}},
  {t:"Kognitiv-perzeptuell (quasi-psychotisch)", e:{p:{aripiprazol:"Kognitiv-perzeptuell", quetiapin:"Eine RCT positiv"}}},
  {t:"Affektive Instabilität", e:{p:{valproat:"Kleine Studien", topiramat:"Affektive Instabilität"}}}]},
 {id:"frau", t:"Frau im gebärfähigen Alter?", a:YN({x:{valproat:"Praktisch nicht vertretbar (Verhütungsprogramm)"}, m:{topiramat:"Teratogenität prüfen [?]"}})},
 {id:"gew", t:"Gewicht soll nicht steigen?", a:YN({m:{quetiapin:"Gewicht", olanzapin:"Metabolisches Syndrom"}, p:{topiramat:"Gewichtsabnahme"}})},
 {id:"poly", t:"Bestehen bereits mehrere Psychopharmaka?", a:YN({w:"Polypharmazie abbauen (S3 E20); BZD langsam ausschleichen."})}
], base:{n:["Ein Zielsymptom, eine Substanz, Dauer festlegen und Effekt messen."]}});

A({id:"adhs-erw", sit:"adhs-erw", ctx:["schw","still","sucht","epi","qtc"], q:[
 {id:"kom", t:"Sucht, Bipolarität, BPS oder Tics?", a:YN({go:[{to:"adhs-komorb", t:"ADHS mit Komorbidität"}]})},
 {id:"kv", t:"Herz-Kreislauf-Erkrankung oder mittelschwere bis schwere Hypertonie?", a:YN({x:{methylphenidat:"KI: Herz-Kreislauf-Erkrankung", lisdexamfetamin:"KI: symptomatische HKE, mittel-/schwere Hypertonie"}, m:{atomoxetin:"Schwere HKE KI; RR und Puls ↑"}, w:"Kardiologische Abklärung."})},
 {id:"mao", t:"MAO-Hemmer in den letzten 14 Tagen oder Glaukom?", a:YN({x:{methylphenidat:"KI", lisdexamfetamin:"KI", atomoxetin:"KI"}})},
 {id:"vor", t:"Bisherige Behandlung?", a:[
  {t:"Keine", e:{}},
  {t:"MPH ohne ausreichenden Effekt", e:{pp:{lisdexamfetamin:"Auf das andere Stimulans wechseln"}, m:{methylphenidat:"Bereits ohne Effekt"}}},
  {t:"LDX ohne ausreichenden Effekt", e:{pp:{methylphenidat:"Auf das andere Stimulans wechseln"}, m:{lisdexamfetamin:"Bereits ohne Effekt"}}},
  {t:"Beide Stimulanzien ohne Effekt", e:{pp:{atomoxetin:"Bei Stimulanzien-Versagen"}, x:{methylphenidat:"Ohne Effekt", lisdexamfetamin:"Ohne Effekt"}}}]},
 {id:"dauer", t:"Lange Wirkdauer über den Tag wichtig?", a:YN({p:{lisdexamfetamin:"Wirkdauer bis 14 h", atomoxetin:"24-h-Wirkung"}})},
 {id:"dep", t:"Komorbide Depression oder Rauchen?", a:YN({p:{bupropion:"Bei Depression oder Rauchen sinnvoll"}})}
], base:{n:["Vorher RR, Puls, kardiale Eigen- und Familienanamnese, Gewicht, EKG; dann alle 3 Monate.","Mindestens jährlich Auslassversuch."]}});

A({id:"adhs-komorb", sit:"adhs-komorb", ctx:["schw","sucht","epi"], q:[
 {id:"akut", t:"Akute Manie, Psychose oder schwere Depression mit Suizidalität?", a:YN({x:{methylphenidat:"KI", lisdexamfetamin:"KI"}, w:"Akutes zuerst nach eigener Leitlinie behandeln."})},
 {id:"kom", t:"Welche Komorbidität?", a:[
  {t:"Sucht", e:{pp:{atomoxetin:"Kein Missbrauchspotenzial, kein BtM"}, p:{guanfacin:"Kein Suchtpotenzial", lisdexamfetamin:"Prodrug, geringeres Missbrauchspotenzial"}, m:{methylphenidat:"Nur retard und wenn ADHS die Sucht unterhält"}, n:"Drogenscreening, kleine Verordnungsmengen."}},
  {t:"Bipolare Störung", e:{pp:{lithium:"Erst stabilisieren"}, m:{methylphenidat:"Erst nach Stabilisierung", lisdexamfetamin:"Erst nach Stabilisierung"}}},
  {t:"Borderline (BPS)", e:{p:{atomoxetin:"Ohne BPS-KI in der FI"}, m:{methylphenidat:"Medikinet adult nennt BPS als KI"}, n:"Stimulans nur bei gesicherter ADHS mit dokumentierter Abwägung."}},
  {t:"Depression oder Angst", e:{p:{atomoxetin:"Bei Angst bevorzugt", bupropion:"Bei Depression (+ Rauchen)"}}},
  {t:"Tics", e:{pp:{atomoxetin:"Stimulanzien können Tics verstärken"}}}]},
 {id:"2d6", t:"Nimmt der Patient Paroxetin, Fluoxetin oder Bupropion?", a:YN({m:{atomoxetin:"Starke CYP2D6-Hemmer: Atomoxetin-Spiegel mehrfach ↑"}})}
]});

/* ================= UMSTELLUNGEN ================= */
A({id:"umst-ap", kind:"wahl", t:"Antipsychotikum umstellen", area:"Umstellung", src:"S3 Schizophrenie 2026 · Kompendium 2021 · Fachinformationen",
 opts:[
  {d:"aripiprazol", r:"1", dos:"10–15 mg, max. 30 mg", why:"Metabolisch und prolaktinneutral, kaum sedierend; Akathisie.", ev:2},
  {d:"amisulprid", r:"a", dos:"400–800 mg/d", why:"Keine CYP-Interaktionen; Prolaktin ↑↑, QTc, renal dosieren.", ev:3},
  {d:"risperidon", r:"a", dos:"4–6 mg", why:"Hohe Evidenz; Prolaktin, EPS dosisabhängig.", ev:3},
  {d:"olanzapin", r:"a", dos:"5–20 mg", why:"Hohe Evidenz, sedierend; stärkste Gewichtszunahme.", ev:3},
  {d:"quetiapin", r:"a", dos:"300–750 mg", why:"Kaum EPS und Prolaktin; sedierend, Metabolik.", ev:2},
  {d:"ziprasidon", r:"a", dos:"2 × 40 bis 2 × 80 mg mit Mahlzeit", why:"Metabolisch günstig; deutlichste QTc-Verlängerung.", ev:2},
  {d:"cariprazin", r:"a", dos:"1,5–6 mg", why:"Metabolisch günstig, Negativsymptomatik; verzögerte Wirkung.", ev:2},
  {d:"paliperidon", r:"a", dos:"3–6 mg", why:"Kaum Interaktionen; Prolaktin; Brücke zum Depot.", ev:2},
  {d:"clozapin", r:"r", dos:"12,5 mg Start; 100–450 mg", why:"Nach 2 erfolglosen AP (Therapieresistenz); bei TD und Parkinson.", ev:3}],
 ctx:["alt","niere","leber","qtc","pd","schw"],
 q:[
 {id:"grund", t:"Warum wird umgestellt?", a:[
  {t:"Gewicht oder Metabolik", e:{pp:{aripiprazol:"Metabolisch neutral", cariprazin:"Metabolisch günstig", ziprasidon:"Metabolisch günstig"}, x:{olanzapin:"Stärkste Gewichtszunahme", clozapin:"Gewicht, Metabolik"}, m:{quetiapin:"Metabolik"}}},
  {t:"Prolaktin oder sexuelle NW", e:{pp:{aripiprazol:"Senkt Prolaktin", quetiapin:"Kaum Prolaktin"}, x:{amisulprid:"Prolaktin ↑↑", paliperidon:"Prolaktin ↑↑", risperidon:"Prolaktin ↑"}}},
  {t:"EPS, Parkinsonoid oder Spätdyskinesie", e:{pp:{quetiapin:"Kaum EPS", clozapin:"Beste Evidenz bei Spätdyskinesie"}, p:{olanzapin:"Wenig EPS"}, m:{risperidon:"EPS dosisabhängig", aripiprazol:"Akathisie"}}},
  {t:"Akathisie", e:{pp:{quetiapin:"Wechsel bei Akathisie (Kompendium)", olanzapin:"Wechsel bei Akathisie", clozapin:"Wechsel bei Akathisie"}, x:{aripiprazol:"Akathisie häufig", cariprazin:"Akathisie sehr häufig"}}},
  {t:"QTc-Verlängerung", e:{pp:{aripiprazol:"Keine relevante QTc-Verlängerung"}, x:{ziprasidon:"Ausgeprägteste QTc-Verlängerung"}, m:{amisulprid:"Dosisabhängig QT ↑", quetiapin:"Geringes bis mittleres QT"}}},
  {t:"Zu starke Sedierung", e:{pp:{aripiprazol:"Kaum sedierend", amisulprid:"Kaum sedierend", cariprazin:"Wenig sedierend [?]"}, x:{olanzapin:"Stark sedierend", quetiapin:"Stark sedierend", clozapin:"Stark sedierend"}}},
  {t:"Negativsymptomatik", e:{pp:{cariprazin:"S3 E39a", amisulprid:"Niedrig dosiert (S3 E39a)"}}},
  {t:"Wirkt nicht ausreichend", e:{n:"Vorher Spiegel, Adhärenz und Dosis prüfen; Wechsel nach 2–4 Wochen ohne Ansprechen trotz ausreichender Dosis.", p:{amisulprid:"Hohe Wirksamkeitsevidenz", olanzapin:"Hohe Wirksamkeitsevidenz", risperidon:"Hohe Wirksamkeitsevidenz"}}}]},
 {id:"zwei", t:"Haben schon zwei Antipsychotika ausreichend lange versagt?", a:YN({pp:{clozapin:"Therapieresistenz: Clozapin (S3 stark)"}, go:[{to:"schiz-tr", t:"Therapieresistente Schizophrenie"}]}, {x:{clozapin:"Erst nach 2 erfolglosen AP"}})},
 {id:"von", t:"Von welchem Antipsychotikum wird umgestellt?", a:[
  {t:"Clozapin", e:{w:"Clozapin sehr langsam umsetzen (2–6 Monate).", n:"Bei Clozapin-Pause > 2 Tage: neu mit 12,5 mg titrieren."}},
  {t:"Olanzapin oder Quetiapin", e:{n:"Sedierendes AP langsam ausschleichen, nachdem das neue die Zieldosis erreicht hat."}},
  {t:"Depot", e:{n:"Orales Ziel-AP ab dem nächsten Injektionstermin aufdosieren [?]."}},
  {t:"Anderes", e:{}}]},
 {id:"komed", t:"Starke CYP3A4-Hemmer oder -Induktoren in der Komedikation?", a:YN({x:{cariprazin:"KI mit 3A4-Hemmern und -Induktoren"}, m:{quetiapin:"Empfindliches 3A4-Substrat"}})},
 {id:"rauch", t:"Raucher mit möglichem Rauchstopp?", a:YN({m:{olanzapin:"CYP1A2: Rauchstopp → Spiegel ↑", clozapin:"CYP1A2: Rauchstopp → Spiegel ↑"}})}
 ],
 base:{n:["Kreuztitration: neues AP auf Zieldosis bringen, altes langsam ausschleichen (S3, Kompendium).","Auf Aripiprazol: Vormedikation 2 Wochen nach Erreichen der Zieldosis überlappend beibehalten, dann ausschleichen.","Auf Cariprazin: Wirkung und NW verzögert (Steady State ~4 Wochen)."]}});

A({id:"umst-depot", kind:"wahl", t:"Oral → Depot umstellen", area:"Umstellung", src:"Wirkstoffkarten Aripiprazol, Paliperidon, Risperidon, Haloperidol, Olanzapin · S3 Schizophrenie 2026",
 opts:[
  {d:"aripiprazol", r:"1", dos:"Maintena 400 mg/Monat (+14 d oral 10–20 mg) oder 960 mg alle 2 Monate", why:"Metabolisch günstig, prolaktinneutral.", ev:2},
  {d:"paliperidon", r:"1", dos:"Xeplion 150 mg Tag 1 + 100 mg Tag 8 deltoidal, dann 75 mg/4 Wo (25–150)", why:"Später 3-monatlich (Trevicta) oder 6-monatlich (Byannli); renal.", ev:2},
  {d:"risperidon", r:"a", dos:"Consta 25–50 mg alle 2 Wochen, ≥ 3 Wo oral überlappen", why:"Depot mit oraler Überlappung; Prolaktin.", ev:2},
  {d:"haloperidol", r:"a", dos:"Decanoat 50–200 mg alle 4 Wochen", why:"Wenn oral auf Haloperidol stabil; EPS, Spätdyskinesien.", ev:2},
  {d:"olanzapin", r:"r", dos:"Pamoat 150–405 mg nach oraler Dosis", why:"Nur tief gluteal durch geschultes Personal; Post-Injektions-Syndrom (3 h Nachbeobachtung).", ev:2}],
 ctx:["niere","alt","qtc","schw"],
 q:[
 {id:"clo", t:"Nimmt der Patient Clozapin?", a:YN({x:{"*":"Nie Depot zu Clozapin (bei Agranulozytose nicht absetzbar)"}})},
 {id:"oral", t:"Auf welches orale AP ist der Patient wirksam und verträglich eingestellt?", a:[
  {t:"Aripiprazol", e:{pp:{aripiprazol:"Depot desselben Wirkstoffs (S3 E38)"}, n:"Maintena: 400 mg i. m., erste Injektion mit 14 Tagen oraler Überlappung (10–20 mg); 960 mg alle 2 Monate nur für auf oral oder 400 mg monatlich Stabilisierte."}},
  {t:"Paliperidon oder Risperidon", e:{pp:{paliperidon:"Depot nach Paliperidon/Risperidon-Erfahrung", risperidon:"Consta"}, n:"Xeplion: Start am Tag nach letzter oraler Dosis; oral 3 mg ≈ 50–75 mg, 6 mg ≈ 100–150 mg; Risperdal Consta 25/37,5/50 mg/2 Wo ≈ Xeplion 50/75/100 mg."}},
  {t:"Haloperidol", e:{pp:{haloperidol:"Decanoat"}}},
  {t:"Olanzapin", e:{pp:{olanzapin:"Pamoat"}, w:"Olanzapin-Pamoat: 3 Stunden Nachbeobachtung nach jeder Injektion."}},
  {t:"Anderes", e:{w:"Depot nur nach oraler Vortestung desselben Wirkstoffs (S3 E38): erst oral umstellen.", go:[{to:"umst-ap", t:"Antipsychotikum umstellen"}]}}]},
 {id:"niere", t:"Kreatinin-Clearance unter 50 ml/min?", a:YN({x:{paliperidon:"Depot bei CrCl < 50 ml/min nicht empfohlen"}})},
 {id:"int", t:"Wie lang soll das Injektionsintervall sein?", a:[
  {t:"2 Wochen akzeptabel", e:{}},
  {t:"Monatlich", e:{m:{risperidon:"Consta alle 2 Wochen"}}},
  {t:"So lang wie möglich", e:{pp:{paliperidon:"Nach Stabilisierung 3- oder 6-monatlich"}, p:{aripiprazol:"960 mg alle 2 Monate"}, m:{risperidon:"Alle 2 Wochen"}}}]}
 ],
 base:{n:["Depot nur nach oraler Verträglichkeit desselben Wirkstoffs (S3 E38).","Trevicta erst nach Stabilisierung auf Xeplion (meist ≥ 4 Injektionen [?]); Dosis = 3,5 × Xeplion-Dosis, alle 12 Wochen."]}});

A({id:"umst-ad", kind:"umst", t:"Antidepressivum umstellen", area:"Umstellung", src:"Wirkstoffkarten (FI, Kompendium 2021, Pocket Guide 2021) · NVL Depression 7-13",
 ctx:[],
 q:[
 {id:"von", t:"Von welchem Antidepressivum?", a:[
  {t:"Sertralin, Citalopram oder Escitalopram"},{t:"Paroxetin"},{t:"Fluoxetin"},{t:"Fluvoxamin"},{t:"Venlafaxin oder Duloxetin"},
  {t:"Mirtazapin, Trazodon, Agomelatin oder Bupropion"},{t:"Vortioxetin"},{t:"Amitriptylin"},{t:"Clomipramin"},{t:"Tranylcypromin"},{t:"Moclobemid"}]},
 {id:"auf", t:"Auf welches Antidepressivum?", a:[
  {t:"SSRI oder SNRI"},{t:"Mirtazapin, Trazodon, Agomelatin oder Bupropion"},{t:"Amitriptylin"},{t:"Clomipramin"},{t:"Tranylcypromin"},{t:"Moclobemid"}]},
 {id:"suiz", t:"Suizidalität?", a:YN({w:"In der Umstellungsphase engmaschig; Mengen begrenzen."})}
 ],
 plan:function(ans){
  var V = ans.von, Z = ans.auf, out = {w:[], n:[], drugs:[]};
  if(V==null || Z==null) return out;
  var VN = ["SSRI","Paroxetin","Fluoxetin","Fluvoxamin","Venlafaxin/Duloxetin","Mirtazapin/Trazodon/Agomelatin/Bupropion","Vortioxetin","Amitriptylin","Clomipramin","Tranylcypromin","Moclobemid"];
  out.drugs = [[ "sertralin","paroxetin","fluoxetin","fluvoxamin","venlafaxin","mirtazapin","vortioxetin","amitriptylin","clomipramin","tranylcypromin","moclobemid"][V], ["sertralin","mirtazapin","amitriptylin","clomipramin","tranylcypromin","moclobemid"][Z]];
  var toTCP = Z===4, toMoclo = Z===5, toAmi = Z===2, toClomi = Z===3;
  var fromTCP = V===9, fromMoclo = V===10;
  if((fromTCP && toTCP) || (fromMoclo && toMoclo) || (V===7 && toAmi) || (V===8 && toClomi)){ out.n.push("Gleiches Präparat – keine Umstellung."); return out; }
  if(fromTCP){
    out.w.push("Nach Tranylcypromin mindestens 2 Wochen Pause bis zum nächsten Antidepressivum (irreversible MAO-Hemmung).");
    out.n.push("Tyraminarme Diät bis 14 Tage nach der letzten Tranylcypromin-Gabe fortführen.");
    if(toAmi) out.n.push("Ausnahme (Kompendium): niedrig dosiertes Amitriptylin (auch Doxepin, Mianserin, Trazodon) wurde zusammen mit Tranylcypromin vertragen – gleichzeitiger Beginn oder Tranylcypromin dazugeben, nie umgekehrt, kein i. v.");
    if(toClomi) out.n.push("Clomipramin frühestens 14 Tage nach Tranylcypromin.");
    if(toMoclo) out.n.push("Tranylcypromin → Moclobemid: Abstand in den Quellen nicht angegeben; 2 Wochen wie für andere AD [?].");
    return out;
  }
  if(fromMoclo){
    if(toTCP) out.w.push("Moclobemid → Tranylcypromin: Abstand in den Quellen nicht angegeben [?]; Fachinformation prüfen.");
    else if(toClomi) out.n.push("Clomipramin ab dem übernächsten Tag nach der letzten Moclobemid-Gabe.");
    else out.n.push("Anderes AD 24 h nach der letzten Moclobemid-Gabe möglich (reversible MAO-A-Hemmung).");
    out.n.push("Nicht überlappend kombinieren (Serotoninsyndrom).");
    return out;
  }
  if(toTCP){
    var gap = ["7 Tage (Sertralin, Citalopram, Escitalopram)","7 Tage","5 Wochen (Norfluoxetin)","7 Tage","1 Woche nach Venlafaxin; nach Duloxetin ≥ 5 Halbwertszeiten","≥ 5 Halbwertszeiten des Vorpräparats [?]","≥ 2 Wochen","≥ 5 Halbwertszeiten (Amitriptylin + Nortriptylin) [?]","2 Wochen"][V];
    out.w.push("Vor Tranylcypromin: Vorpräparat vollständig absetzen, dann Abstand " + gap + ". Nie überlappend.");
    if(V===1 || V===4) out.n.push(VN[V]+" zuerst über Wochen ausschleichen (ausgeprägtes Absetzsyndrom), dann den Abstand einhalten.");
    out.n.push("Tranylcypromin: 10 mg morgens, +10 mg/Woche auf 20–40 mg; tyraminarme Diät ab 1 Tag vor Beginn.");
    return out;
  }
  if(toMoclo){
    var g2 = ["Sertralin 1–2 Wochen; Citalopram/Escitalopram nicht angegeben [?]","1–2 Wochen","5 Wochen","1–2 Wochen","Venlafaxin 1 Woche; Duloxetin nicht angegeben [?]","nicht angegeben [?]","nicht angegeben [?]","nicht angegeben [?]","1–2 Wochen"][V];
    out.w.push("Vor Moclobemid: Vorpräparat absetzen, dann Abstand " + g2 + ". Nicht überlappend.");
    out.n.push("Moclobemid: 300 mg in 2 Gaben nach den Mahlzeiten, ab Woche 2 ggf. 600 mg.");
    return out;
  }
  /* Wechsel zwischen Nicht-MAO-Hemmern */
  var serotFrom = V<=4 || V===6, serotTo = Z===0;
  if((V===8 && serotTo) || (toClomi && serotFrom)){
    out.w.push("Clomipramin nicht mit SSRI/SNRI kombinieren (Serotoninsyndrom): nicht überlappend umstellen – erst ausschleichen, dann beginnen. Abstand in den Quellen nicht angegeben [?].");
  } else {
    out.n.push("Überlappend umstellen: neues AD aufdosieren, altes ausschleichen (NVL 7-13 ⇑).");
  }
  if((toAmi || toClomi) && (V===1 || V===2 || V===3)) out.w.push(VN[V] + " erhöht TZA-Spiegel (CYP-Hemmung; mit Fluoxetin schwere Intoxikationen berichtet): TZA niedrig beginnen, Spiegel kontrollieren – bei Fluoxetin auch Wochen nach Absetzen.");
  if(toAmi || toClomi) out.n.push("TZA: EKG vor Beginn (QTc, Erregungsleitung); bei Clomipramin Anfallsrisiko dosisabhängig.");
  if(V===2) out.n.push("Fluoxetin wirkt über Norfluoxetin Wochen nach: Interaktionen (CYP2D6/2C19) auch nach Absetzen beachten; kaum Absetzsymptome.");
  if(V===3) out.n.push("Fluvoxamin hemmt CYP1A2/2C19 stark: nach Absetzen sinken Spiegel von Clozapin, Duloxetin, Agomelatin und TZA.");
  if(V===1 || V===4) out.n.push(VN[V]+" langsam über Wochen ausschleichen (ausgeprägtes Absetzsyndrom).");
  if(V===8 || V===7) out.n.push("TZA langsam ausschleichen.");
  if(Z===1) out.n.push("Agomelatin: Transaminasen vor Beginn und nach 3, 6, 12, 24 Wochen. Bupropion: KI bei Anfällen, Essstörung, abruptem Alkohol-/BZD-Entzug; starker CYP2D6-Hemmer.");
  out.n.push("Neues AD 3–4 Wochen in Standarddosis bewerten (NVL 4-10).");
  return out;
 }});

A({id:"umst-mb", kind:"umst", t:"Methadon → Buprenorphin umstellen", area:"Umstellung", src:"Wirkstoffkarte Buprenorphin (Pocket Guide 2021, FI) · Opioidentzug",
 ctx:[],
 q:[
 {id:"dosis", t:"Aktuelle Methadon-Dosis (Racemat)?", a:[{t:"≤ 30 mg"},{t:"31–60 mg"},{t:"Über 60 mg"}]},
 {id:"ziel", t:"Zielpräparat?", a:[{t:"Subutex (Buprenorphin)"},{t:"Suboxone (Buprenorphin + Naloxon)"},{t:"Buvidal (Depot)"}]},
 {id:"bei", t:"BZD- oder Alkohol-Beikonsum?", a:YN()},
 {id:"stark", t:"Sehr starke Abhängigkeit oder hoher Bedarf?", a:YN()}
 ],
 plan:function(ans){
  var out = {w:[], n:[], drugs:["buprenorphin","methadon","naloxon"]};
  if(ans.dosis==null || ans.ziel==null) return out;
  var lim = ans.ziel===0 ? 60 : 30;
  if(ans.dosis===2 || (ans.dosis===1 && lim===30)) out.w.push("Zuerst Methadon auf ≤ " + lim + " mg reduzieren (" + (lim===60?"Subutex: ≤ 60 mg":"Suboxone/Buvidal: ≤ 30 mg") + "), dann umstellen.");
  else out.n.push("Methadon-Dosis liegt im Bereich für die Umstellung (≤ " + lim + " mg).");
  out.n.push("Letzte Methadon-Dosis, dann 24–36 h Pause.");
  out.n.push("Erste Buprenorphin-Dosis erst bei objektivem Entzug (COWS ≥ 8–12) – sonst ausgelöster Entzug.");
  out.n.push("Start " + (ans.bei===0 ? "2 mg s. l. (BZD-/Alkohol-Beikonsum)" : ans.stark===0 ? "8 mg s. l. (stärkste Abhängigkeit)" : "4 mg s. l.") + "; Entzug sollte binnen 60 min zurückgehen, sonst Erstdosis wiederholen.");
  out.n.push("Kontrollen alle 2–4 h, weitere 4–8 mg bis max. 24 mg am Tag 1; kumulative Tagesdosis an Tag 2 morgens als Einmalgabe.");
  if(ans.ziel===2) out.n.push("Buvidal-Depot erst nach Stabilisierung auf sublingualem Buprenorphin [?].");
  if(ans.ziel===1) out.n.push("Suboxone in der Schwangerschaft auf Monopräparat umstellen.");
  out.n.push("Alternative bei hoher Toleranz oder Fentanyl: Low-dose-Induktion (Mikrodosierung) ohne Pause [?].");
  if(ans.bei===0) out.w.push("BZD/Alkohol: Atemdepression trotz Ceiling-Effekt.");
  out.n.push("Naloxon-Nasenspray mitgeben.");
  return out;
 }});
