# Opdracht 09 – Flashcard Quiz

**Setup:**
```bash
cd opdracht-09-flashcard-quiz
npm install
npm run dev
```

---

## Opdracht 09 – Flashcard Quiz

Maak een flashcard quiz over hoofdsteden. Op de voorkant van een kaartje staat een vraag, op de achterkant het antwoord. In totaal maak je 20 flashcards.

---

**Stap 1** – Maak een bestand `flashcards.js` met een array van 20 objecten. Elk object heeft een `question` en een `answer` property.

Voorbeeld van één object:
```js
{ question: "Wat is de hoofdstad van Frankrijk?", answer: "Parijs" }
```

Exporteer de array zodat je hem in andere bestanden kunt gebruiken.

---

**Stap 2** – Maak het component `FlashCard.jsx`

Dit component krijgt één flashcard-object binnen via props (`question` en `answer`).

- Maak een state `flipped` met beginwaarde `false`
- Als `flipped` false is, toon je de vraag — als `flipped` true is, toon je het antwoord
- Gebruik een ternary operator om te wisselen tussen de twee
- Voeg een `onClick` toe aan de kaart die de `flipped` state omdraait — wat geef je mee aan `setFlipped(...)` om de waarde te wisselen?

---

**Stap 3** – Maak het component `FlashCardList.jsx`

- Importeer de flashcard-data uit `flashcards.js`
- Gebruik `.map()` om voor elke flashcard een `<FlashCard />` component te renderen
- Vergeet niet een `key` prop mee te geven

---

**Stap 4** – Laad alles in `App.jsx`

- Importeer `FlashCardList` en render dit component
- Controleer of alles werkt in de browser

---

**Stap 5** – Styling

Zorg voor een passende opmaak. De kaart moet er als een echte flashcard uitzien. Gebruik Tailwind of CSS naar keuze.

---

**Theorie:**
- [React - Conditionals](https://meesterjson.nl/cheat-sheet/pages/react/conditionals.html)
- [React - Tailwind](https://meesterjson.nl/cheat-sheet/pages/react/tailwind.html)

**Oplevering:** Commit & Push + link inleveren via Canvas