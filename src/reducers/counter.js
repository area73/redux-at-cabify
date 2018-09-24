import ActionTypes from "../actions/const";

export default (state = 0, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.INCREASE:
      return state + 1;
    default:
      return state;
  }
};
