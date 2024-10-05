import React, { useEffect, useState } from "react";

const FavoritePokemonCard = ({ name, id }: { name: string; id: string }) => {
  const removeFromLocalStorage = (id: string) => {
    const pokemons = localStorage.getItem("favoritePokemons");
    if (pokemons) {
      const newPokemons = JSON.parse(pokemons).filter(
        (pokemon: { id: string }) => pokemon.id !== id
      );
      localStorage.setItem("favoritePokemons", JSON.stringify(newPokemons));
      window.location.reload();
    }
  };
  return (
    <div>
      <div className="rounded flex flex-col justify-center items-center p-3">
        <div className="flex flex-col">
          <a href={`/pokemons/${name}?`}>
            <div className="self-center">
              <img
                style={{ viewTransitionName: `${name}-image` }}
                className="border-none w-16 h-16"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                alt={name}
              />
            </div>
            <div className="ml-2">
              <p className="text-sm text-center text-gray-600">{name}</p>
            </div>
          </a>
          <button
            onClick={() => removeFromLocalStorage(id)}
            className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoritePokemonCard;
