import flashcards from "../flashcards";
import FlashCard from "./FlashCard";

function FlashCardList() {
  return (
    <section className="flashcard-list">
      {flashcards.map((flashcard) => (
        <FlashCard
          key={flashcard.question}
          question={flashcard.question}
          answer={flashcard.answer}
        />
      ))}
    </section>
  );
}

export default FlashCardList;
