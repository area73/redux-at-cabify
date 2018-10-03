import ActionTypes from "../../actions/const";

export default (state = 1, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.FETCH_REPOSITORIES_NEXT_PAGE:
      return state + 1;
    default:
      return state;
  }
};
