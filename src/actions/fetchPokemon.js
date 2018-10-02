import ActionTypes from "./const";
import { HttpMethod } from "@cabify-dev/remote-requests";
import { pokemon } from "../schemas/index";

export default (name) => ({
  type: ActionTypes.FETCH_POKEMON,
  payload: {
    url: `http://pokeapi.salestock.net/api/v2/pokemon/${name}`,
    method: HttpMethod.GET,
    body: {}
  },
  normalizeResponseWith: pokemon
});
