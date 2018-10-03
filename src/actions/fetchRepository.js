import ActionTypes from "./const";
import { HttpMethod } from "@cabify-dev/remote-requests";
import { repository } from "../schemas/index";

export default (name) => ({
  type: ActionTypes.FETCH_REPOSITORY,
  payload: {
    url: `https://api.github.com/repos/facebook/${name}`,
    method: HttpMethod.GET,
    body: {}
  },
  normalizeResponseWith: repository
});
