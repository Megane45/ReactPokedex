function NavBar(props) {
  return (
    <>
      {props.pokemonIndex > 0 ? (
        <button onClick={props.handlePreviousClick}>Précédent</button>
      ) : null}
      {props.pokemonIndex < props.long ? (
        <button onClick={props.handleNextClick}>Suivant</button>
      ) : null}
    </>
  );
}

export default NavBar;
