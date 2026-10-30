import { Link, useParams } from "react-router-dom";
import animals from "../animals";

function DetailPage() {
  const { id } = useParams();
  const animal = animals.find((animal) => animal.id === Number(id));

  if (!animal) {
    return (
      <main>
        <h1>Dier niet gevonden</h1>
        <Link to="/">Terug naar overzicht</Link>
      </main>
    );
  }

  return (
    <main className="animal-detail">
      <article className="animal-card">
        <img src={animal.imageUrl} alt={animal.name} />
        <h1>{animal.name}</h1>
        <p><strong>Soort:</strong> {animal.name}</p>
        <p><strong>Leefgebied:</strong> {animal.habitat}</p>
        <p><strong>Dieet:</strong> {animal.diet}</p>
        <p>{animal.description}</p>
        <Link to="/">Terug naar overzicht</Link>
      </article>
    </main>
  );
}

export default DetailPage;
