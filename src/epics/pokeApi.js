import { ofType } from "redux-observable";
import { mergeMap, map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import ActionTypes from "../actions/const";
import fetchPokemonsFulfilled from "../actions/fetchPokemonsFulfilled";
import fetchPokemonFulfilled from "../actions/fetchPokemonFulfilled";

export default (action$) =>
  action$.pipe(
    ofType(ActionTypes.FETCH_POKEMONS, ActionTypes.FETCH_POKEMON),
    mergeMap((action) => {
      let url = "http://pokeapi.salestock.net/api/v2/pokemon";
      const { name } = action.payload;
      if (name) url = `${url}/${name}`;

      return ajax({
        url
      });
    }),
    map((requestResponse) => {
      if (requestResponse.response.results) {
        return fetchPokemonsFulfilled(requestResponse.response.results);
      }
      return fetchPokemonFulfilled(requestResponse.response);
    })
  );
