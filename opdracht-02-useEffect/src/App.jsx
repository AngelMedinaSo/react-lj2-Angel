import "./App.css";
import Clock from "./Clock";
import PageTimer from "./PageTimer";
import WelcomeMessage from "./WelcomeMessage";
import DayQuote from "./DayQuote";

function App() {
  return (
    <>
      <h1 className="mb-6">Opdracht 2 & 3 - UseEffect</h1>
      <WelcomeMessage />
      <Clock />
      <PageTimer />
      <DayQuote />
    </>
  );
}

export default App;
