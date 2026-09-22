# Opdracht 02 & 03 – useEffect

> ⚠️ Alle opdrachten in deze folder maak je in **dezelfde folder**. Geen nieuwe Vite-app aanmaken!

**Setup:**
```bash
cd opdracht-02-useEffect
npm install
npm run dev
```

---

## Opdracht 02 – Clock

Maak een component `Clock` die de huidige digitale tijd weergeeft en deze elke seconde bijwerkt.

**Stap 1** – Maak een nieuw component `Clock.jsx`

**Stap 2** – Maak een `useState` met `currentTime` en `setCurrentTime`, gebruik `new Date()` als beginwaarde

**Stap 3** – Importeer `useEffect`:
```js
import React, { useEffect, useState } from 'react';
```

**Stap 4** – Maak een `useEffect` met daarin `setInterval` om de tijd elke seconde te updaten. Return een `clearInterval` met je intervalId om dubbele updates te voorkomen:
```js
useEffect(() => {
  const intervalId = setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);
  return () => clearInterval(intervalId);
}, []);
```

**Stap 5** – Toon de tijd met `toLocaleTimeString()`:
```jsx
<p>{currentTime.toLocaleTimeString()}</p>
```

**Stap 6** – Laad `Clock` in App.jsx

**Theorie:**
- [React - useEffect](https://meesterjson.nl/cheat-sheet/pages/react/useeffect.html)

**Oplevering:** Commit & Push + link inleveren via Canvas

---

## Opdracht 2.1 – Tab Titel Updater

Maak een component `PageTimer` dat bijhoudt hoe lang de gebruiker al op de pagina is. De verstreken tijd wordt zowel op de pagina getoond als in de browsertab.

**Stap 1** – Maak een nieuw component `PageTimer.jsx`

**Stap 2** – Maak een `useState` met `seconds` en beginwaarde `0`

**Stap 3** – Maak een `useEffect` met `setInterval` die elke seconde `seconds` met 1 verhoogt. Vergeet de cleanup niet!

**Stap 4** – Maak een tweede `useEffect` die `document.title` updatet elke keer als `seconds` verandert:
```js
useEffect(() => {
  document.title = `Je bent er al ${seconds} seconden!`;
}, [seconds]);
```

**Stap 5** – Toon de verstreken tijd ook op de pagina, bijvoorbeeld:
```jsx
<p>Je bent al {seconds} seconden op deze pagina.</p>
```

**Stap 6** – Laad `PageTimer` in App.jsx en kijk in je browsertab hoe de titel meebeweegt

> 💡 Let op: je gebruikt hier **twee** useEffects in één component. Dat is prima — elke useEffect heeft zijn eigen verantwoordelijkheid.

**Theorie:**
- [React - useEffect](https://meesterjson.nl/cheat-sheet/pages/react/useeffect.html)

**Oplevering:** Commit & Push + link inleveren via Canvas

---

## Opdracht 03 – WelcomeMessage

Maak een component `WelcomeMessage` dat afhankelijk van het tijdstip "Goedemorgen", "Goedemiddag" of "Goedenavond" toont.

**Stap 1** – Maak een nieuw component `WelcomeMessage.jsx`

**Stap 2** – Maak een `useState` met `message` en `setMessage`

**Stap 3** – Maak een `useEffect` die het juiste bericht bepaalt:
- Maak een variabele `currentTime` met `new Date()`
- Maak een variabele `hours` met de huidige uren
- Maak een variabele `newMessage` met een lege string
- Gebruik een `if-statement` om te bepalen welk bericht in `newMessage` komt:
  - Kleiner dan 12 → `'Goedemorgen'`
  - Kleiner dan 18 → `'Goedemiddag'`
  - Anders → `'Goedenavond'`
- Roep `setMessage(newMessage)` aan

**Stap 4** – Toon het bericht in de component

**Stap 5** – Laad `WelcomeMessage` in App.jsx

**Theorie:**
- [React - useEffect](https://meesterjson.nl/cheat-sheet/pages/react/useeffect.html)

**Oplevering:** Commit & Push + link inleveren via Canvas

---

## Opdracht 3.1 – Dagquote

Maak een component `DayQuote` dat elke dag een andere motiverende quote toont op basis van de dag van de week.

**Stap 1** – Maak een nieuw component `DayQuote.jsx`

**Stap 2** – Maak een array met 7 quotes, één voor elke dag van de week:
```js
const quotes = [
  'Zondag: Rust is ook productiviteit.',
  'Maandag: Een nieuwe week, een nieuwe kans.',
  'Dinsdag: Kleine stappen leiden tot grote resultaten.',
  'Woensdag: Halverwege, blijf doorgaan!',
  'Donderdag: Je bent verder dan je denkt.',
  'Vrijdag: Het weekend is bijna in zicht!',
  'Zaterdag: Geniet van je vrije tijd.',
];
```

**Stap 3** – Maak een `useState` met `quote` en `setQuote`

**Stap 4** – Maak een `useEffect` die de juiste quote ophaalt:
- Gebruik `new Date().getDay()` om de dag van de week op te halen (0 = zondag, 6 = zaterdag)
- Gebruik die waarde als index in je `quotes`-array
- Sla de juiste quote op met `setQuote`

**Stap 5** – Toon de quote in de component

**Stap 6** – Laad `DayQuote` in App.jsx

> 💡 Tip: wil je testen of het werkt voor andere dagen? Verander de index tijdelijk handmatig naar een getal van 0 t/m 6.

**Theorie:**
- [React - useEffect](https://meesterjson.nl/cheat-sheet/pages/react/useeffect.html)

**Oplevering:** Commit & Push + link inleveren via Canvas
