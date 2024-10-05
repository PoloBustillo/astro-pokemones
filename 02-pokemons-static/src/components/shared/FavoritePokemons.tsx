import React from "react";
import FavoritePokemonCard from "./FavoritePokemonCard";
import type { PokemonLocalStorage } from "@interfaces/pokemon-localStorage";

const getPokemonsFromLocalStorage = () => {
  const pokemons = localStorage.getItem("favoritePokemons");
  if (pokemons) {
    return JSON.parse(pokemons);
  }
  return [];
};

const FavoritePokemons = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4">
      {getPokemonsFromLocalStorage().map((pokemon: PokemonLocalStorage) => (
        <FavoritePokemonCard name={pokemon.name} id={pokemon.id} />
      ))}
    </div>
  );
};

export default FavoritePokemons;
