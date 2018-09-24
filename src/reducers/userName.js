import ActionTypes from "../actions/const";

export default (state = null, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.SET_USER_NAME:
      return action.payload.userName;
    default:
      return state;
  }
};
