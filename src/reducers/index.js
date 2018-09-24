import counter from "./counter";
import { combineReducers } from "redux";
import userName from "./userName";

export default combineReducers({
  counter,
  userName
});
