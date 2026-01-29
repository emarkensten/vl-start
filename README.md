# Viking Line - Scroll Position Demo

En mockup av Viking Lines startsida för att testa scroll-position-hantering vid navigering mellan tabbar.

## Problemet

I Viking Lines CMS (Optimizely) är de tre tabbarna (Kryssningar, Reguljärresor, Hotellpaket) implementerade som separata HTML-sidor. När användaren klickar på en tabb laddas en helt ny sida, vilket innebär att man hoppar upp till toppen av sidan. Detta ger en dålig användarupplevelse när tabbarna ligger under hero-sektionen.

## Lösningen

Detta projekt implementerar en lösning som sparar scroll-positionen i `sessionStorage` när användaren klickar på en tabb och återställer den när nästa sida laddas.

### Hur det fungerar

1. **Vid klick på tabb:** Nuvarande scroll-position sparas i `sessionStorage`
2. **Vid sidladdning:** Om en sparad position finns, scrollas sidan till den positionen med `requestAnimationFrame` för att säkerställa att rendering är klar
3. **Rensning:** Positionen rensas från storage efter att den återställts

## Teknisk Implementation

### Filer

```
vl-start/
├── css/
│   └── style.css          # Viking Line design system
├── js/
│   └── scroll-position.js # Scroll-position manager
├── kryssningar.html       # Sida 1: Kryssningar
├── reguljarresa.html      # Sida 2: Reguljärresor
├── hotellpaket.html       # Sida 3: Hotellpaket
└── index.html             # Redirect till kryssningar.html
```

### Scroll Position Script

Skriptet använder följande strategi:

- **Storage:** `sessionStorage` används för att behålla värdet mellan sidladdningar men rensa det när fliken stängs
- **Timing:** `requestAnimationFrame` säkerställer att scroll sker efter att sidan rendererats
- **Tab-markering:** Aktiv tabb markeras automatiskt baserat på URL

### Design

Mockupen implementerar Viking Lines visuella identitet:

- **Färg:** Viking Lines röda (#E30613) som primärfärg
- **Typografi:** Modern sans-serif för god läsbarhet
- **Layout:** Responsiv grid-layout med produktkort
- **Animationer:** Subtila fade-in och slide-up animationer för bättre upplevelse

## Testa Lokalt

1. Öppna `index.html` i en webbläsare
2. Scrolla ner på sidan
3. Klicka på en annan tabb (t.ex. "Reguljärresor")
4. Observera hur scroll-positionen bevaras (med ett litet blink vid laddning)

## Live Demo

Projektet är deployat på Vercel för att visa den verkliga användarupplevelsen över nätverk:

**🚀 [https://vl-start.vercel.app](https://vl-start.vercel.app)**

GitHub Repository: [https://github.com/emarkensten/vl-start](https://github.com/emarkensten/vl-start)

## Utveckling

Detta är en mockup för att testa scroll-position-funktionaliteten. I produktionsmiljön skulle skriptet integreras i Optimizely CMS genom att:

1. Lägga till `scroll-position.js` som en global JavaScript-fil
2. Se till att tabb-länkarna har rätt klasser (`.tab-link`)
3. Testa ordentligt över olika webbläsare

## Webbläsarstöd

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ℹ️ IE11 kräver polyfill för `requestAnimationFrame`

## Tekniska Överväganden

### Fördelar
- ✅ Bevarar scroll-position mellan sidladdningar
- ✅ Använder native browser APIs (ingen dependencies)
- ✅ Fungerar med server-side rendering
- ✅ Minimal kod-overhead

### Nackdelar
- ⚠️ Lite blink/hoppad vid sidladdning (normal sidnavigation)
- ⚠️ Kräver att JavaScript är aktiverat
- ⚠️ Kan kännas konstigt om innehållet på nästa sida är mycket kortare

### Alternativa Lösningar

1. **Single Page Application (SPA):** Skulle eliminera sidladdningar helt, men kräver större ombyggnad
2. **Client-side routing:** Med bibliotek som History API, men mer komplext
3. **Anchor links:** Enklare men mindre flexibelt

## Credits

Byggt med vanilla HTML, CSS och JavaScript. Inga externa dependencies.

---

**Utvecklat för Viking Line** | Scroll Position Testing | 2024

---

### 🔄 Auto-Deployment
Detta projekt är kopplat till Vercel via Git-integration. Varje push till master triggar automatiskt en ny deployment.
