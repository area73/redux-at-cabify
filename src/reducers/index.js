import counter from "./counter";
import { combineReducers } from "redux";
import userName from "./userName";
import ping from "./ping";

export default combineReducers({
  myCounter: counter,
  userName,
  ping
});
