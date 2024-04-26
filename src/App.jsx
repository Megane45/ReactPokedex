import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(2);

  const handlePreviousClick = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const handleNextClick = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <>
      <NavBar
        pokemonIndex={pokemonIndex}
        handleNextClick={handleNextClick}
        handlePreviousClick={handlePreviousClick}
        long={pokemonList.length - 1}
      />

      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </>
  );
}

export default App;
