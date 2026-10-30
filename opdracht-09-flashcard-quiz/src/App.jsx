import FlashCardList from "./components/FlashCardList";
import "./App.css";

function App() {
  return (
    <main>
      <h1>Hoofdsteden Quiz</h1>
      <p className="instructions">Klik op een kaart om het antwoord te zien. Klik nog eens voor de vraag.</p>
      <FlashCardList />
    </main>
  );
}

export default App;
