import ActionTypes from "../../actions/const";

export default (state = [], action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.FETCH_REPOSITORIES_FULFILLED:
      return action.payload.result;
    default:
      return state;
  }
};
