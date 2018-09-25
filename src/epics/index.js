import ping from "./ping";
import { combineEpics } from "redux-observable";

export default combineEpics(ping);
