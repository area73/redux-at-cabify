import ActionTypes from "./const";

export default (pokemons) => ({
  type: ActionTypes.FETCH_POKEMONS_FULFILLED,
  payload: { pokemons }
});
