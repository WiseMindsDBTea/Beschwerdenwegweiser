# Psychopharmaka-Kompass

Taschenreferenz für die klinische Psychopharmakologie: Situationskarten, Wirkstoffkarten, Entscheidungshilfen, Interaktions-Check, Rechner, Profilvergleich. Veröffentlicht als Claude-Artefakt (eine HTML-Datei).

**Ersetzt nicht Fachinformation und ärztliche Prüfung.** Angaben mit „[?]“ (in der App „prüfen“) sind in den Quellen nicht belegt. Profilpunkte, Rezeptorstufen und Merkbilder sind eigene Einstufungen.

## Aufbau
```
src/head.html            Titel, Schriften
src/style.css            gesamtes Design (hell/dunkel, Handy/Computer)
src/data/10–60-*.js      Wirkstoff- und Situationskarten, Korrekturebene v1.1
src/data/70-profilmatrix.js       Eigenschaften 0–3 (eigene Einstufung)
src/data/80-identitaet-mechanik.js Klassen, Kürzel, Merkbilder, Rezeptorprofile, Herkunft
src/data/90-entscheidungshilfen.js 50 Entscheidungshilfen
src/app.js               Anwendung
build.py                 baut dist/psychopharmaka-kompass.html
tests/                   Prüfungen (Daten + Browser)
```

## Arbeiten
```
python3 build.py                 # Einzeldatei bauen
npm install && npx playwright install chromium
npm test                         # alle Prüfungen; eigenes Chromium: CHROMIUM_PATH=…
```
Nach jeder Änderung in `src/` neu bauen; `dist/` wird mit eingecheckt und ist die veröffentlichte Datei.
