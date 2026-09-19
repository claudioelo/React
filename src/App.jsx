import { PokemonCard } from "./pokemon/PokemonCard.jsx";

function App() {
  return (
    <div className="pokemon-list">
      <PokemonCard
        id="004"
        name="Charmander"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
        type="fire"
        typeLabel="Fogo"
      />
      <PokemonCard
        id="001"
        name="Bulbasaur"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        type="grass"
        typeLabel="Planta"
      />
      <PokemonCard
        id="007"
        name="Squirtle"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
        type="water"
        typeLabel="Água"
      />
    </div>
  );
}

export default App;