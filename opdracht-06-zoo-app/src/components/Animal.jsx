import { useNavigate } from "react-router-dom";

function Animal({ id, name, imageUrl, description }) {
  const navigate = useNavigate();

  function showDetails() {
    navigate(`/animal/${id}`);
  }

  return (
    <article className="animal-card">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <button onClick={showDetails}>Bekijk dier</button>
    </article>
  );
}

export default Animal;
