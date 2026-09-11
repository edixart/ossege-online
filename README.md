# Ossege Online – statischer Neuaufbau

Diese Version ist als schlanke, GitHub-Pages-taugliche Website ohne Framework aufgebaut.

## Struktur

- `index.html` – Startseite
- `kontakt-piet.html` – Piet
- `kontakt-emil.html` – Emil
- `impressum.html` – Impressum
- `datenschutz.html` – Datenschutz
- `css/style.css` – kompletter Look, responsive Layout, Animationen
- `js/main.js` – Navigation, Scroll-Reveal und kleine UI-Interaktionen
- `assets/images/` – bereitgestellte Bilder

## Wichtiger Hinweis zu Rechtstexten

Impressum und Datenschutz enthalten absichtlich keine erfundenen personenbezogenen Daten. Vor dem Livegang die vollständigen Texte der bisherigen Website übernehmen und auf das tatsächliche Hosting/Setup prüfen.

## Lokal testen

Einfach `index.html` im Browser öffnen. Für ein Verhalten näher am späteren Hosting kann auch ein lokaler Server verwendet werden:

```bash
python -m http.server 8000
```

Danach `http://localhost:8000` öffnen.

## GitHub Pages

1. Auf GitHub ein neues Repository erstellen.
2. Den Inhalt dieses Ordners hochladen oder mit Git pushen.
3. In GitHub `Settings` → `Pages` öffnen.
4. Bei `Build and deployment` `Deploy from a branch` auswählen.
5. Branch `main` und Ordner `/ (root)` wählen.
6. Speichern und die angezeigte Pages-URL öffnen.

Da die Seite rein statisch ist, wird kein Build-Schritt benötigt.

## Apple-Design-Richtung

Die Oberfläche orientiert sich an den im angegebenen Apple Design Skill beschriebenen Prinzipien: klare visuelle Hierarchie, Accessibility- und Reduced-Motion-Rücksicht, großzügige Abstände, Typografie mit klaren Rollen, dezente Materialien/Blur, klare Interaktionszustände und bewusste Motion statt generischer UI-Muster.
