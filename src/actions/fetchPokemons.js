import ActionTypes from "./const";
import { HttpMethod } from "@cabify-dev/remote-requests";
import { pokemon } from "../schemas/index";

export default () => ({
  type: ActionTypes.FETCH_POKEMONS,
  payload: {
    url: "http://pokeapi.salestock.net/api/v2/pokemon",
    method: HttpMethod.GET,
    body: {}
  },
  normalizeResponseWith: {
    results: [pokemon]
  }
});
