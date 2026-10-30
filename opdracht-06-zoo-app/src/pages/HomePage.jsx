import animals from "../animals";
import Animal from "../components/Animal";

function HomePage() {
  return (
    <main>
      <h1>Zoo App</h1>
      <section className="animal-list">
        {animals.map((animal) => (
          <Animal
            key={animal.id}
            id={animal.id}
            name={animal.name}
            imageUrl={animal.imageUrl}
            description={animal.description}
          />
        ))}
      </section>
    </main>
  );
}

export default HomePage;
