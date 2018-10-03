import { RemoteEntity, getEpics } from "@cabify-dev/remote-entities";
import { HttpMethod } from "@cabify-dev/remote-requests";
import { repository } from "./schemas/index";

export const repositories = new RemoteEntity("REPOSITORIES", {
  adapter: {
    host: "https://api.github.com",
    url: "orgs/facebook/repos",
    method: HttpMethod.GET,
    normalizrSchema: [repository]
  },
  strategy: {
    entitiesName: "repositories",
    entitiesOrderName: "result",
    slice: "repositories"
  }
});

export const epics = getEpics([repositories]);
