import ActionTypes from "./const";

export default (name) => ({
  type: ActionTypes.FETCH_POKEMON,
  payload: { name }
});
