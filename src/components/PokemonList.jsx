import { useMemo } from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons, search }) => {
  const filteredPokemons = useMemo(
    () =>
      pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(search.toLowerCase());
      }),
    [pokemons, search]
  );

  return (
    <div className="PokemonList">
      {filteredPokemons.map((pokemon) => {
        return (
          <PokemonCard
            name={pokemon.name}
            key={pokemon.name}
            image={pokemon.sprites.front_default}
            types={pokemon.types}
            id={pokemon.id}
            favorite={pokemon.favorite}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
