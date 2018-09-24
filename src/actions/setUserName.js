import ActionTypes from "./const";

export default (userName) => ({
  type: ActionTypes.SET_USER_NAME,
  payload: { userName }
});
