# Opdracht 01 – Books

> ⚠️ Opdrachten 1.1, 1.2, 1.3, 1.4, 05, 08, 8.1 en 9.1 maak je ook in **deze folder**.

**Setup:**
```bash
cd opdracht-01-books
npm install
npm run dev
```

---

## Opdracht 01 – Books

Je gaat een pagina maken waar de top drie bestseller boeken worden weergeven. In de eerste opdracht voer je de boeken handmatig in.

Je hebt twee componenten nodig in je `components`-folder:
- **Book**: bevat de titel, auteur en afbeelding
- **BookList**: laadt voor elk boek een Book-component

Zorg dat de styling lijkt op het voorbeeld in Canvas.

> 💡 Tip: afbeeldingen komen in de `public`-folder. Maak daar een map `images` aan.

**Theorie:**
- [React - Components](https://meesterjson.nl/cheat-sheet/pages/react/components.html)
- [React - Props](https://meesterjson.nl/cheat-sheet/pages/react/props.html)

**Oplevering:** Commit & Push + link inleveren via Canvas

---

## Opdracht 1.1 – Uitbreiding Books

**Stap 1**
- Maak een component `Header` met een navbar: 'home', 'contact' en 'over ons' met normaal HTML (nog geen `<a>`-tag)
- Style je Header-component met CSS
- Laad het in App.jsx boven je BookList

**Stap 2**
- Maak een component `Layout` die alleen styling bevat om een container van je website te maken
- Geef het een breedte van `80vw` en `margin: 0 auto`
- Laad Layout in App.jsx en plaats je Header en BookList erin
- Je ziet niets meer op het scherm — dat klopt! Zoek op hoe je dit oplost met één extra property

**Theorie:**
- [React - Components](https://meesterjson.nl/cheat-sheet/pages/react/components.html)
- [React - Props](https://meesterjson.nl/cheat-sheet/pages/react/props.html)

**Oplevering:** Commit & Push + link inleveren via Canvas

---

## Opdracht 1.2 – Books object

In de vorige opdracht heb je de boeken handmatig ingevoerd. Nu maak je in BookList een `useState` met een array van objecten. Elk object is één boek. Toon alle boeken uit je array op het scherm.

**Theorie:**
- [React - Components](https://meesterjson.nl/cheat-sheet/pages/react/components.html)
- [React - Props](https://meesterjson.nl/cheat-sheet/pages/react/props.html)
- [React - useState (voorbeeld 3)](https://meesterjson.nl/cheat-sheet/pages/react/state.html)
- [React - Lists & Keys (Array met Objecten)](https://meesterjson.nl/cheat-sheet/pages/react/lists.html)

**Oplevering:** Commit & Push + link inleveren via Canvas

---

## Opdracht 1.3 – Lees-teller per boek

Doel: voeg een knop toe aan elk boek die bijhoudt hoe vaak je het boek "gelezen" hebt.

**Stap 1 – State aanmaken in Book.jsx**
- Importeer `useState` van React
- Maak een state `timesRead` met setter `setTimesRead` en beginwaarde `0`

**Stap 2 – Functie die de teller verhoogt**
- Maak een functie `incrementReadCount`
- Roep daarin de setter aan zodat de nieuwe waarde de oude waarde + 1 is

**Stap 3 – Button toevoegen**
- Voeg in je return een button toe
- Koppel een `onClick` die `incrementReadCount` aanroept
- Tekst op de button: `"Keer gelezen: "` + de waarde van je state

**Stap 4 – Testen**
- Klik op de buttons bij verschillende boeken
- Elke button moet zijn eigen teller hebben

**Theorie:**
- [React - useState](https://meesterjson.nl/cheat-sheet/pages/react/state.html)
- [React - Events](https://meesterjson.nl/cheat-sheet/pages/react/events.html)

**Oplevering:** Commit & Push + link inleveren via Canvas

---

## Opdracht 1.4 – Totaal aantal boeken

Doel: maak een apart component dat toont hoeveel boeken er in totaal zijn.

**Stap 1** – Maak `BookCounter.jsx` in je components folder (gebruik `sfc`)

**Stap 2** – Ontvang prop `count` via `{count}` tussen de haakjes van je functie

**Stap 3** – Return een `<h2>` met tekst: `"Totaal aantal boeken in de lijst: "` + `{count}`

**Stap 4** – Importeer BookCounter in BookList.jsx

**Stap 5** – Voeg BookCounter toe boven je `books.map` in de return van BookList en geef `count={books.length}` mee

**Stap 6 – Testen**
- Bovenaan de pagina moet staan: `"Totaal aantal boeken in de lijst: 3"`
- Voeg handmatig een boek toe aan je array → getal moet automatisch veranderen

**Theorie:**
- [React - Props](https://meesterjson.nl/cheat-sheet/pages/react/props.html)
- [React - Components](https://meesterjson.nl/cheat-sheet/pages/react/components.html)

**Oplevering:** Commit & Push + link inleveren via Canvas

---

## Opdracht 05 – Router

**Stap 1** – Maak in `src` een map `pages` met de volgende bestanden:
- `About.jsx`
- `Contact.jsx`
- `Home.jsx`
- `Navigation.jsx`
- `NoPage.jsx`

**Stap 2** – Zet in elke pagina een basis component klaar met `sfc` en een titel. `NoPage` krijgt "404, pagina niet gevonden".

**Stap 3** – Verplaats de inhoud van je App.jsx return naar `Home.jsx` (dit wordt je indexpagina)

**Stap 4** – Lees de Router-theorie en koppel alle pagina's aan je navigatie. Style je navbar en zorg dat alle boeken zichtbaar zijn op de homepagina.

**Theorie:**
- [React - Router](https://meesterjson.nl/cheat-sheet/pages/react/router.html)

**Oplevering:** Commit & Push + link inleveren via Canvas

---

## Opdracht 08 – Zoekfunctie Books

Voeg een zoekfunctie toe aan je Books-applicatie. Gebruikers kunnen een boek zoeken op titel via een zoekbalk. Gebruik de PDF-uitleg die in Canvas staat.

**Stap 1 – Zoekfunctie in BookList**

> 💡 Tip: je kunt de PDF-uitleg in Canvas gebruiken als je er niet uitkomt.

- Maak een `useState` voor `searchInput` met beginwaarde `''`
- Maak een functie `searchHandler` die:
  - De invoer uit `e.target.value` haalt
  - `searchInput` updatet
  - De boekenlijst filtert op titel met `.filter()` en `.toLowerCase()`
- Voeg een `<input>` toe met `type="text"`, een placeholder, `onChange={searchHandler}` en `value={searchInput}`
- Test of de lijst zich aanpast terwijl je typt

**Stap 2 – Zoekbalk omzetten naar een component**
- Maak een nieuw bestand `SearchBar.jsx` in je `components`-folder
- Verplaats de `<input>` (en de omliggende `<div>`) naar dit component
- Geef `value` en `onChange` mee als props vanuit `BookList`
- Vervang de `<input>` in `BookList` door je SearchBar component
- Test of de zoekfunctie nog steeds werkt

> 💡 Let op: de state en de `searchHandler` blijven in `BookList` staan. `SearchBar` is alleen verantwoordelijk voor de weergave.

**Theorie:**
- [React - Forms & Input](https://meesterjson.nl/cheat-sheet/pages/react/forms.html)
- [React - Props](https://meesterjson.nl/cheat-sheet/pages/react/props.html)

**Oplevering:** Commit & Push + link inleveren via Canvas

---

## Opdracht 8.1 – Filterfunctie Boekcategorieën

Voeg een filterfunctie toe waarmee gebruikers boeken kunnen filteren op categorie via een dropdown.

**Stap 1** – Voeg aan elk boek een `category`-property toe: Fantasy, Avontuur, Sciencefiction, Thriller of Romance

**Stap 2** – Toon de categorie in `Book.jsx` en geef de prop door vanuit `BookList.jsx`

**Stap 3** – Maak een `categories`-array in BookList:
```js
['Alle', 'Fantasy', 'Avontuur', 'Sciencefiction', 'Thriller', 'Romance']
```

**Stap 4** – Maak een `useState` voor `selectedCategory` met beginwaarde `'Alle'`

**Stap 5** – Maak een `filterHandler` die:
- De waarde uit `e.target.value` haalt
- `selectedCategory` updatet
- Bij 'Alle': alle boeken toont; anders: filtert op categorie met `.filter()`

**Stap 6** – Maak een `<select>` element met `onChange={filterHandler}` en map over `categories` voor de `<option>`-elementen

**Oplevering:** Commit & Push + link inleveren via Canvas

---

## Opdracht 9.1 – Favoriet systeem

Voeg een favoriet-hartje toe aan elk boek. Wit hartje = niet favoriet, rood hartje = favoriet. Klikken toggled de status. Toon de tekst "Toegevoegd aan favorieten" als het boek favoriet is.

**Stap 1** – Maak in `Book.jsx` een state `liked` met beginwaarde `false`

**Stap 2** – Maak een functie `toggleLike` die de waarde van `liked` omdraait. Gebruik hiervoor `setLiked(...)` — wat geef je mee om de waarde te wisselen?

**Stap 3** – Voeg een `<div className="favorite-section">` toe met een button:
- Koppel een `onClick` handler aan de button die `toggleLike` aanroept
- De inhoud van de button toont een hartje op basis van de `liked` state — gebruik een ternary operator om te kiezen tussen `❤️` en `🤍`

**Stap 4** – Voeg conditionele tekst toe onder de button. De tekst "Toegevoegd aan favorieten" mag alleen zichtbaar zijn als `liked` true is. Gebruik hiervoor de `&&` operator in JSX.

**Theorie:**
- [React - Conditionals](https://meesterjson.nl/cheat-sheet/pages/react/conditionals.html)

**Oplevering:** Commit & Push + link inleveren via Canvas