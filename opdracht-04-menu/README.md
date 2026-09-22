# Opdracht 04 – Menu

**Setup:**
```bash
cd opdracht-04-menu
npm install
npm run dev
```

---

## Opdracht 04 – Menu

Maak een menu-overzicht met gerechten. De data staat klaar in `data.js`.

> 💡 Deze opdracht werkt exact hetzelfde als de Books-opdracht! `MenuItem` = Book, `MenuList` = BookList. Alleen gebruik je nu data uit een apart bestand.

**Stap 1 – Bestudeer de data**
- Open `data.js` in je project
- Elk object in de array heeft: `id`, `title`, `category`, `price`, `img` en `desc`
- Onderaan staat `export default menu` — dit betekent dat je het kunt importeren in een ander bestand.

**Stap 2 – Maak MenuItem.jsx**
- Maak in je `src`-folder een `components`-folder
- Maak een nieuw bestand `MenuItem.jsx` (gebruik `sfc`)
- Ontvang props: `{title, price, img, desc}`
- Return een HTML-structuur met:
  - Een `article` als container
  - Een `img` voor de afbeelding
  - Een `h2` voor de titel
  - Een `h3` voor de prijs (voeg een €-teken toe!)
  - Een `p` voor de beschrijving

**Stap 3 – Maak MenuList.jsx**
- Maak een nieuw bestand `MenuList.jsx` (gebruik `sfc`)
- Importeer `menu` uit `data.js`:
  ```js
  import menu from '../data.js'
  ```
- Maak een `useState(menu)` voor `dishes` met setter `setDishes`
- Importeer `MenuItem` bovenaan
- Map over `dishes` en geef alle props door aan `<MenuItem />` (inclusief `key={dish.id}`)
- Wrap je map in een `<section>` met een className

**Stap 4** – Laad `MenuList` in App.jsx

**Stap 5** – Style met CSS (grid of flexbox)

## Voorbeeld van het eindresultaat

![Voorbeeld van de overzichtspagina](./public/images/eindresultaat.png)


---

**Theorie:**
- [React - Components](https://meesterjson.nl/cheat-sheet/pages/react/components.html)
- [React - Props](https://meesterjson.nl/cheat-sheet/pages/react/props.html)
- [React - useState](https://meesterjson.nl/cheat-sheet/pages/react/state.html)
- [React - Lists & Keys](https://meesterjson.nl/cheat-sheet/pages/react/lists.html)

**Oplevering:** Commit & Push + link inleveren via Canvas
