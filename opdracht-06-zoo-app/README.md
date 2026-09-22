# Opdracht 06 – Zoo Application

**Setup:**

```bash
cd opdracht-06-zoo-app
npm install
npm install react-router-dom
npm run dev
```

Het data-bestand `animals.js` staat in de `src`-folder en de afbeeldingen in de `public`-folder.

## Voorbeeld van het eindresultaat

### Overzichtspagina

![Voorbeeld van de overzichtspagina](./public/images/overzichtspagina.png)

### Detailpagina

![Voorbeeld van de detailpagina](./public/images/detailpagina.png)

---

## Opdracht 06 – Zoo Application

Bouw een React-applicatie met informatie over dieren uit de dierentuin. Je hebt een homepage met een lijst van dieren en een detailpagina per dier.

**Componenten:**

- `HomePage.jsx` – toont een lijst van dieren als cards
- `Animal.jsx` – individuele card met afbeelding, naam en beschrijving
- `DetailPage.jsx` – toont details van één dier: naam, soort, leefgebied en beschrijving

**Stap 1 – Mapstructuur opzetten**

- Maak in `src` een map `pages` en een map `components`
- Maak de bestanden `HomePage.jsx`, `Animal.jsx` en `DetailPage.jsx` aan op de juiste plek

**Stap 2 – Stel de router in (App.jsx)**

- Importeer `BrowserRouter`, `Routes` en `Route` uit `react-router-dom`
- Maak routes aan voor de homepage (`/`) en de detailpagina (`/animal/:id`)

**Stap 3 – Animal.jsx**

- Toon de naam, afbeelding en beschrijving van een dier
- Voeg een `onClick` toe met `useNavigate` om naar de detailpagina te navigeren

**Stap 4 – HomePage.jsx**

- Importeer de dierendata uit `animals.js`
- Map over de array en render voor elk dier een `<Animal />` component

**Stap 5 – DetailPage.jsx**

- Gebruik `useParams` om het id van het dier uit de URL op te halen
- Zoek het bijbehorende dier op uit `animals.js`
- Toon de naam, soort, leefgebied en beschrijving

**Theorie:**

- [React - Router](https://meesterjson.nl/cheat-sheet/pages/react/router.html)
- [React - useNavigate & useParams](https://meesterjson.nl/cheat-sheet/pages/react/navigate-params.html)

**Oplevering:** Commit & Push + link inleveren via Canvas
