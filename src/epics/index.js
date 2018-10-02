import { combineEpics } from "redux-observable";
import {
  getRemoteRequestEpic,
  HttpAdapter,
  normalizeHook
} from "@cabify-dev/remote-requests";
import ping from "./ping";
import wrapEpicErrors from "./wrapEpicErrors";

const remoteRequests = getRemoteRequestEpic([new HttpAdapter()], {
  responseHooks: [normalizeHook]
});

export default combineEpics(...[ping, remoteRequests].map(wrapEpicErrors));
