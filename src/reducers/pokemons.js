import ActionTypes from "../actions/const";

export default (state = null, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.FETCH_POKEMON_FULFILLED:
    case ActionTypes.FETCH_POKEMONS_FULFILLED:
      return { ...state, ...action.payload.entities.pokemons };
    default:
      return state;
  }
};
