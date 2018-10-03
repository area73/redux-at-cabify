import ActionTypes from "./const";
import { HttpMethod } from "@cabify-dev/remote-requests";
import { repository } from "../schemas/index";

export default (page = 1) => ({
  type: ActionTypes.FETCH_REPOSITORIES,
  payload: {
    url: "https://api.github.com/orgs/facebook/repos",
    method: HttpMethod.GET,
    body: { page }
  },
  normalizeResponseWith: [repository]
});
