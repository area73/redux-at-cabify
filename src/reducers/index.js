import counter from "./counter";
import { combineReducers } from "redux";
import userName from "./userName";
import ping from "./ping";
import pokemons from "./pokemons";
import repositories from "./repositories";

export default combineReducers({
  myCounter: counter,
  userName,
  ping,
  pokemons,
  repositories
});
