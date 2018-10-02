import ActionTypes from "./const";
import { HttpMethod } from "@cabify-dev/remote-requests";
import { repository } from "../schemas/index";

export default () => ({
  type: ActionTypes.FETCH_REPOSITORIES,
  payload: {
    url: "",
    method: HttpMethod.GET,
    body: {}
  },
  normalizeResponseWith: {
    results: [repository]
  }
});
