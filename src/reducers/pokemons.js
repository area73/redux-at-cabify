import ActionTypes from "../actions/const";

export default (state = null, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.FETCH_POKEMONS_FULFILLED:
      return action.payload.pokemons;
    default:
      return state;
  }
};
