import ping from "./ping";
import { combineEpics } from "redux-observable";
import pokeApi from "./pokeApi";

export default combineEpics(ping, pokeApi);
