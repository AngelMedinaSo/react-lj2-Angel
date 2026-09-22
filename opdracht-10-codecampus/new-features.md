# User Stories voor CodeCampus Dashboard

Na het oplossen van alle bugs kies je uit onderstaande user stories om nieuwe features toe te voegen. Kies features die bij jouw vaardigheidsniveau passen.

---

## Must-have Features (Prioriteit 1)

### User Story 1: Zoekfunctionaliteit

**Als gebruiker** wil ik **cursussen kunnen zoeken op titel of trefwoord** zodat ik **snel specifieke cursussen kan vinden zonder door de hele lijst te scrollen**.

**Acceptatiecriteria:**

- Er is een zoekbalk zichtbaar bovenaan het dashboard
- Bij het typen worden resultaten direct gefilterd (zonder pagina te verversen)
- Zoeken werkt op cursustitel
- Als er geen resultaten zijn, wordt een melding getoond
- De zoekfunctie werkt in combinatie met eventuele actieve filters

### User Story 2: Sorteeropties

**Als gebruiker** wil ik **cursussen kunnen sorteren op verschillende criteria** zodat ik **ze kan ordenen op een manier die voor mij relevant is**.

**Acceptatiecriteria:**

- Er is een dropdown menu met sorteeropties
- Cursussen kunnen gesorteerd worden op: populariteit, rating, duur
- De huidige sortering wordt visueel aangegeven
- Sortering werkt in combinatie met eventuele filters of zoekopdrachten

### User Story 3: Cursus details bekijken

**Als gebruiker** wil ik **op een cursus kunnen klikken voor meer informatie** zodat ik **een beter beeld krijg van de inhoud voordat ik de video bekijk**.

**Acceptatiecriteria:**

- Bij klikken op een cursuskaart verschijnt een modal of detailpagina
- De detailweergave toont: titel, beschrijving, instructor, duur, rating, aantal views, prijs
- Er is een knop om direct naar de video te gaan
- Er is een knop om terug te gaan naar het overzicht

### User Story 4: Filtering op categorieën

**Als gebruiker** wil ik **cursussen kunnen filteren op categorieën** zodat ik **alleen cursussen zie die relevant zijn voor een specifiek onderwerp**.

**Acceptatiecriteria:**

- Er is een sectie waar categorieën worden getoond (gebruik de 'category' veld uit coursesData)
- Meerdere categorieën kunnen tegelijk geselecteerd worden
- Geselecteerde categorieën worden visueel gemarkeerd
- Bij selectie worden alleen relevante cursussen getoond
- Er is een optie om alle filters te wissen

### User Story 5: Dark Mode Toggle

**Als gebruiker** wil ik **kunnen schakelen tussen light en dark mode** zodat ik **de app kan gebruiken op een manier die prettig is voor mijn ogen**.

**Acceptatiecriteria:**

- Toggle knop/switch in de header (zon/maan icoontje)
- Bij klikken wisselt de app tussen light en dark theme
- Dark mode gebruikt donkere achtergrondkleuren en lichte tekst
- Voorkeur wordt opgeslagen in localStorage
- Bij herladen van de pagina blijft de gekozen mode actief
- Smooth transition tussen de modes (CSS transition)

### User Story 6: View Counter & "Trending Now"

**Als gebruiker** wil ik **zien welke cursussen populair zijn** zodat ik **weet wat andere gebruikers interessant vinden**.

**Acceptatiecriteria:**

- Bij openen van cursus details wordt view counter verhoogd
- View count wordt getoond op cursuskaart (bijv. "👁️ 234 views")
- "Trending Now" sectie toont top 3-5 meest bekeken cursussen van afgelopen week
- Views worden opgeslagen in localStorage met timestamp
- Badge "🔥 Trending" voor cursussen met >X views deze week

### User Story 7: Favorieten & Wishlist systeem

**Als gebruiker** wil ik **cursussen kunnen markeren als favoriet en toevoegen aan een wishlist** zodat ik **een persoonlijke collectie kan maken van cursussen die me interesseren**.

**Acceptatiecriteria:**

- Elke cursuskaart heeft een "favoriet" (hartje) én "wishlist" knop
- Deze knoppen zijn alleen zichtbaar wanneer ingelogd
- Aparte pagina's of tabs voor "Mijn Favorieten" en "Mijn Wishlist"
- Mogelijkheid om item van wishlist naar favorieten te verplaatsen (of andersom)
- Badge in navigatie toont aantal items
- Data wordt per gebruiker opgeslagen in localStorage
- Bij logout blijven favorieten/wishlist bewaard voor die gebruiker
- Bij nieuwe login worden eigen favorieten/wishlist weer geladen

