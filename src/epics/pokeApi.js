import { ofType } from "redux-observable";
import { mergeMap, map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import ActionTypes from "../actions/const";
import fetchPokemonsFulfilled from "../actions/fetchPokemonsFulfilled";
import { normalize } from "normalizr";
import { pokemon } from "../schemas/index";

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
      let normalizedResponse;
      if (requestResponse.response.results) {
        normalizedResponse = normalize(requestResponse.response, {
          results: [pokemon]
        });
      } else {
        normalizedResponse = normalize(requestResponse.response, pokemon);
      }

      return fetchPokemonsFulfilled(normalizedResponse);
    })
  );
