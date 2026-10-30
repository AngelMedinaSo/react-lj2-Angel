import { useState } from "react";

function FlashCard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  function flipCard() {
    setFlipped(!flipped);
  }

  return (
    <button
      type="button"
      className={flipped ? "flashcard flipped" : "flashcard"}
      onClick={flipCard}
      aria-pressed={flipped}
    >
      <span className="card-label">{flipped ? "Antwoord" : "Vraag"}</span>
      <span>{flipped ? answer : question}</span>
    </button>
  );
}

export default FlashCard;
