import { ofType } from "redux-observable";
import { mergeMap, map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import ActionTypes from "../actions/const";
import fetchPokemonsFulfilled from "../actions/fetchPokemonsFulfilled";

export default (action$) =>
  action$.pipe(
    ofType(ActionTypes.FETCH_POKEMONS),
    mergeMap(() =>
      ajax({
        url: "http://pokeapi.salestock.net/api/v2/pokemon"
      })
    ),
    map((requestResponse) =>
      fetchPokemonsFulfilled(requestResponse.response.results)
    )
  );
