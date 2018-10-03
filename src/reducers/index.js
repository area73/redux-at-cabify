import counter from "./counter";
import { combineReducers } from "redux";
import userName from "./userName";
import ping from "./ping";
import pokemons from "./pokemons";
import repositories from "./repositories/index";

export default combineReducers({
  myCounter: counter,
  userName,
  ping,
  pokemons,
  repositories
});

// What combineReducers does under the hood
// (reducers) =>
//   Object.keys(reducers).reduce(
//     (acc, reducerName) => ({
//       ...acc,
//       [reducerName]: reducers[reducerName](INIT_ACTION)
//     }),
//     {}
//   );
