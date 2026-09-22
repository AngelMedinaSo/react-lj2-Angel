# Opdracht 11 – Old Town Barber App

**Setup:**
```bash
cd opdracht-11-old-town-barber-app
npm install
npm run dev
```

---

## Opdracht 11 – Old Town Barber App

Bouw een barbier boekingssysteem. Alles wordt opgeslagen in `localStorage` zodat de data bewaard blijft na het sluiten van de browser.

**Wat ga je maken:**
- User profiel instellen (bij eerste bezoek)
- Een afspraak boeken
- Overzicht van je eigen boekingen
- Shop info met services en prijzen
- Toast notificaties en afspraak reminders

---

### Must Haves

**User Profile Setup**
- Formulier bij eerste bezoek (naam, email, telefoon)
- Validatie op alle velden
- Opgeslagen in `localStorage` als `userProfile`

**Shop Info Sectie**
- Vaste shop informatie (naam, openingstijden)
- Lijst met services, prijzen en duur
- Netjes geformateerd overzicht

**Afspraak Boeken**
- Formulier vooraf ingevuld met user data
- Dropdown voor service selectie
- Datumkiezer (alleen toekomstige datums)
- Tijdsselectie dropdown
- Opgeslagen in `localStorage` als `appointments`-array

**Boekingen Overzicht**
- Lijst van alle afspraken gesorteerd op datum
- Per afspraak: service, datum, tijd en prijs

**Toast Notificaties**
- Succes bij nieuwe boeking
- Succes bij opslaan profiel
- Foutmelding bij validatieproblemen
- Reminder als een afspraak binnen 15 minuten begint
- Gebruik `react-toastify`

**Design**
- Het design van de applicatie moet passen bij de naam van de shop

---

> 💡 Meer info en hulp vind je in de `HELPME.md` in deze folder.

**Theorie:**
- [React - localStorage](https://meesterjson.nl/cheat-sheet/pages/react/localstorage.html)
- [React - Forms & Input](https://meesterjson.nl/cheat-sheet/pages/react/forms.html)
- [React - Tailwind](https://meesterjson.nl/cheat-sheet/pages/react/tailwind.html)
- [React Cheat Sheet (overzicht)](https://meesterjson.nl/cheat-sheet/pages/react/index.html)

**Oplevering:** Commit & Push + link inleveren via Canvas
