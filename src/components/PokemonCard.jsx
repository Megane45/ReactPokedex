import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  return (
    <figure>
      {pokemon.hasOwnProperty("imgSrc") ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemonList: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
