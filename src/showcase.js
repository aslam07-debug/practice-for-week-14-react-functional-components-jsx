import bulbasaurImage from "./images/bulbasaur.jpg";
import "./ShowCase.css";
function Showcase() {
  {
    favPokemon = "Bulbasaur";
    pokeCharacteristics = {
      type: "Grass",
      move: "Vine Whip",
    };
  }
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img
        src="bulbasaurImage"
        alt={favPokemon}
        style={{ height: "50%", width: "50%" }}
      />
      <h2>
        {favPokemon}'s type is {""}
        <span className="type">{pokeCharacteristics.type}</span>
        and one of their moves is {""}
        <span className="move">{pokeCharacteristics.move}</span>
      </h2>
    </div>
  );
}

export default Showcase;
