import ActionTypes from "../actions/const";

export default (state = null, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.FETCH_REPOSITORY_FULFILLED:
    case ActionTypes.FETCH_REPOSITORIES_FULFILLED:
      return { ...state, ...action.payload.entities.repositories };
    default:
      return state;
  }
};
