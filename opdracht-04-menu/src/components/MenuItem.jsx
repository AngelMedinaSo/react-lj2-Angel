function MenuItem({ title, price, img, desc }) {
  return (
    <article>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>€{price.toFixed(2)}</h3>
      <p>{desc}</p>
    </article>
  );
}

export default MenuItem;
