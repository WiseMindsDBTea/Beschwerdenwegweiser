#!/usr/bin/env python3
"""Baut die Einzeldatei dist/psychopharmaka-kompass.html aus src/.
Reihenfolge: head.html, style.css, src/data/*.js (alphabetisch), src/app.js.
Die Einzeldatei wird als Claude-Artefakt veröffentlicht; das Grundgerüst (<html>, <head>) ergänzt die Plattform."""
import glob, os, sys
R = os.path.dirname(os.path.abspath(__file__))
def rd(p): return open(os.path.join(R, p), encoding="utf-8").read()
def build():
    parts = [rd("src/head.html"), '<style id="pk-style">', rd("src/style.css"), '</style>\n<div id="app"></div>\n']
    js = sorted(glob.glob(os.path.join(R, "src/data/*.js"))) + [os.path.join(R, "src/app.js")]
    parts.append("\n".join('<script data-app="1">' + open(f, encoding="utf-8").read() + "</script>" for f in js))
    parts.append("\n\n</body></html>")
    return "".join(parts)
if __name__ == "__main__":
    out = os.path.join(R, "dist/psychopharmaka-kompass.html")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    html = build()
    open(out, "w", encoding="utf-8").write(html)
    print(out, len(html.encode("utf-8")), "Bytes")
