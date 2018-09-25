import { ofType } from "redux-observable";
import ActionTypes from "../actions/const";
import { delay, map } from "rxjs/operators";
import pong from "../actions/pong";

export default (action$) =>
  action$.pipe(
    ofType(ActionTypes.PING),
    delay(2000),
    map(pong)
  );
