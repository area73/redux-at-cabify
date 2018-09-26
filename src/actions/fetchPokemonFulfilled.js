import ActionTypes from "./const";

export default (pokemon) => ({
  type: ActionTypes.FETCH_POKEMON_FULFILLED,
  payload: { pokemon }
});
