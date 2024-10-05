import React, { useEffect, useState } from "react";

const FavoritePokemonCard = ({ name, id }: { name: string; id: string }) => {
  const [image, setimage] = useState<string>("");
  useEffect(() => {}, []);

  return (
    <div>
      <a href={`/pokemons/${name}?`}>
        <div className="rounded flex flex-col justify-center items-center p-3">
          <div className="flex flex-row">
            <div>
              <img className="border-none w-16 h-16" src={image} alt={name} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FavoritePokemonCard;
