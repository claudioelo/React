import "./PokemonCard.css";

// agora o componente recebe um único prop chamado "pokemon" (um objeto)
// e desestrutura os campos que precisa logo na primeira linha
export function PokemonCard({ pokemon }) {
  const { id, name, type, image } = pokemon;

  return (
    <article className="pokemon-card">
      <header className="card-header">
        <span className="pokemon-id">{id}</span>
        <h2 className="pokemon-name">{name}</h2>
      </header>

      <figure className="pokemon-image-container">
        <img src={image} alt={`Foto do ${name}`} />
      </figure>

      <ul className="pokemon-types">
        {/* classe dinâmica: muda de acordo com o tipo do pokémon */}
        <li className={`type-badge type-${type.toLowerCase()}`}>{type}</li>
      </ul>
    </article>
  );
}