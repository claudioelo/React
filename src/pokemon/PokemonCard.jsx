import "./PokemonCard.css";

export function PokemonCard({ id, name, image, type, typeLabel }) {
  return (
    <article className="pokemon-card">
      <header className="card-header">
        <span className="pokemon-id">#{id}</span>
        <h2 className="pokemon-name">{name}</h2>
      </header>

      <figure className="pokemon-image-container">
        <img src={image} alt={`Ilustração do ${name}`} />
      </figure>

      <ul className="pokemon-types">
        <li className={`type-badge type-${type}`}>{typeLabel}</li>
      </ul>
    </article>
  );
}