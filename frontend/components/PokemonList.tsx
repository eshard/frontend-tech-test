import Image from "next/image";
import { MetaPokemon } from "../types";

export const PokemonList = ({
  pokemons,
}: {pokemons: MetaPokemon[]}) => {
  return (
    <>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="cell">
          <h2>{`#${pokemon.id} - ${pokemon.name}`}</h2> <Image width="80" height="80" src={pokemon.image} />
        </div>
      ))}
    </>
  );
};
