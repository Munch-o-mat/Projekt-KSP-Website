# KSP Explorer – Statische HTML-Webseite

Diese Webseite wurde von einer Next.js-Anwendung in eine statische HTML/CSS/JavaScript-Seite konvertiert.

## Projektbeschreibung

Eine interaktive Webseite über das Kerbal Space Program (KSP) Sonnensystem. Die Seite präsentiert Informationen über die Planeten und Monde des Kerbol-Systems mit einem modernen, dunklen Space-Theme.

## Struktur

```
/
├── index.html          # Home-Seite
├── sonnensystem.html   # Sonnensystem-Seite mit interaktiver Planetenauswahl
├── galerie.html        # Galerie mit Modal-Ansicht
├── extras.html         # Extras & Informationen
├── css/
│   └── styles.css      # Alle Styles (ersetzt Tailwind CSS)
├── js/
│   ├── main.js         # Gemeinsame Funktionalität
│   ├── sonnensystem.js # Planetenauswahl-Logik
│   └── galerie.js      # Modal-Funktionalität
└── README.md
```

## Technologien

- **HTML5**: Semantisches Markup
- **CSS3**: Custom CSS mit CSS-Variablen für Theme-Farben
- **Vanilla JavaScript**: ES6+ ohne Frameworks
- **Font Awesome 6**: Icons via CDN

## Verwendung

### Entwicklungsserver (empfohlen)

Für die Entwicklung mit Live-Reload-Funktionalität:

1. Installieren Sie die Abhängigkeiten:
   ```bash
   npm install
   ```

2. Starten Sie den Entwicklungsserver:
   ```bash
   npm run dev
   ```
   oder
   ```bash
   npm start
   ```

Der Server startet automatisch auf `http://localhost:3000` und öffnet die Seite im Browser. Änderungen an HTML, CSS oder JavaScript-Dateien werden automatisch im Browser aktualisiert.

### Statische Nutzung

Alternativ können Sie die Seite auch direkt öffnen:
1. Öffnen Sie `index.html` in einem modernen Webbrowser
2. Keine Installation oder Build-Prozess erforderlich
3. Die Seite funktioniert vollständig statisch

## Features

- **Home-Seite**: Hero-Section mit Navigationskarten
- **Sonnensystem**: Interaktive Planetenauswahl mit Detailansicht
- **Galerie**: Grid-Layout mit Modal für größere Ansicht
- **Extras**: Informationen und Links zum Projekt

## Browser-Kompatibilität

Moderne Browser mit ES6+ Unterstützung:
- Chrome/Edge (neueste Versionen)
- Firefox (neueste Versionen)
- Safari (neueste Versionen)

## Design

Das Design verwendet ein dunkles Space-Theme mit:
- Dunkelblauer Hintergrund (#0b1021)
- Goldener Akzentfarbe (#f59e0b)
- Gradient-Text-Effekte
- Smooth Transitions und Hover-Effekte
- Responsive Design für mobile und Desktop-Geräte

## Hinweise

Diese Seite wurde von einer Next.js-Anwendung konvertiert. Die ursprünglichen Next.js-Dateien wurden entfernt, da sie für die statische Version nicht mehr benötigt werden.
