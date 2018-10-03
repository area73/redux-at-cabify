import { union } from "lodash";
import ActionTypes from "../../actions/const";

export default (state = [], action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.FETCH_REPOSITORIES_FULFILLED:
      return union(state, action.payload.result);
    default:
      return state;
  }
};
