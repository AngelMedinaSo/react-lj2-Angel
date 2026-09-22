# Opdracht 10 – CodeCampus Dashboard (Eindopdracht)

**Setup:**
```bash
cd opdracht-10-codecampus
npm install
npm run dev
```

---

## Opdracht 10 – CodeCampus Dashboard

In deze opdracht ga je een bestaande React-applicatie debuggen: een dashboard met programmeercursussen. De applicatie bevat een aantal **bugs** die jij moet vinden en oplossen. Je bouwt dus niet vanaf nul — je werkt in een bestaande codebase, net zoals in de praktijk.

Gebruik de **acceptatiecriteria** hieronder om te controleren of alles werkt zoals het hoort. Als alle vinkjes groen zijn, heb je alle bugs gevonden.

---

### Hoe pak je het aan?

1. Start de app en open de browser-console (F12 → tab *Console*)
2. Klik alle knoppen, tabs en links door en kijk wat er gebeurt
3. Vergelijk het gedrag met de acceptatiecriteria hieronder
4. Werkt iets niet of klopt de data niet? Dan heb je een bug gevonden
5. Los hem op en vink het criterium af

**Handige tools bij debuggen:**
- Browser DevTools → *Console* (errors & warnings) en *Network*
- React DevTools extensie → props en state live bekijken
- `console.log()` in je code om waarden te checken
- Lees foutmeldingen rustig door — de regel en het bestand staan er meestal bij

---

### Acceptatiecriteria

Loop deze lijst volledig door. Pas als elk punt klopt, ben je klaar.

**Algemeen**
- [ ] De app start zonder errors in de terminal
- [ ] De app laadt in de browser en blijft werken (geen witte pagina, geen crash)
- [ ] Er staan **geen errors** in de browser-console
- [ ] Er staan **geen warnings** in de browser-console (ook niet over keys, props of hooks)

**Cursusoverzicht**
- [ ] Alle cursussen worden getoond bij het openen van de dashboard-pagina
- [ ] Elke cursuskaart toont de juiste titel, beschrijving, instructor en rating
- [ ] Als je op de tab **Beginner** klikt, zie je alleen beginner-cursussen
- [ ] Als je op de tab **Gevorderd** klikt, zie je alleen gevorderde cursussen
- [ ] Als je op de tab **Alles** klikt, zie je weer de volledige lijst

**Populaire cursussen**
- [ ] De sectie *Populaire cursussen* toont de cursussen met de **meeste** views bovenaan (niet de minste)
- [ ] De volgorde klopt: de cursus met het hoogste aantal views staat op plek 1

**Statistieken**
- [ ] De *Gemiddelde rating* toont een getal (bijv. `4.2`), geen `NaN`, `undefined` of lege tekst
- [ ] De statistieken crashen niet wanneer de cursuslijst leeg zou zijn

**Cursuskaart — interactie**
- [ ] Wanneer je op de knop **Bekijk video** klikt, opent de bijbehorende video (nieuwe tab of navigatie)
- [ ] De knop doet écht iets zichtbaars — niet alleen een `console.log`

---

### Na het debuggen

Zijn alle vinkjes groen? Dan kun je door naar de uitbreidingsopdracht: nieuwe user stories implementeren. De volledige lijst met features staat in **`new-features.md`** in deze folder.

---

**Projectstructuur:**
- `src/components/` – losse React-componenten (cursuskaart, lijst, statistieken, etc.)
- `src/pages/` – pagina's van het dashboard
- `src/data/` – cursusdata
- `src/styles/` – CSS-bestanden

**Theorie:**
- [React - Props & State](https://meesterjson.nl/cheat-sheet/pages/react/props.html)
- [React - Lists & Keys](https://meesterjson.nl/cheat-sheet/pages/react/lists.html)
- [React Cheat Sheet (overzicht)](https://meesterjson.nl/cheat-sheet/pages/react/index.html)

**Oplevering:** Alle bugs opgelost (geen fouten of warnings in de console) + de acceptatiecriteria-lijst volledig afgevinkt. Commit & Push + link inleveren via Canvas.
