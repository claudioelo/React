import "./Header.css";

export function Header(){
    return (
        <header className="pokedex-header">
            <figure>
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
                    alt="Logotipo Oficial pokéAPI"
                />
            </figure>
            <p className="pokedex-subtitulo">Sua Enciclopédia Pokémon Interativa</p>
        </header>
    );
}