import ActionTypes from "../actions/const";

export default (state = false, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.PING:
      return true;
    case ActionTypes.PONG:
      return false;
    default:
      return state;
  }
};
