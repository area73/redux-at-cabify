import { ofType } from "redux-observable";
import ActionTypes from "../actions/const";
import { map } from "rxjs/operators";
import getRepositoriesPage from "../selectors/getRepositoriesPage";
import fetchRepositories from "../actions/fetchRepositories";

export default (action$, store) =>
  action$.pipe(
    ofType(ActionTypes.FETCH_REPOSITORIES_NEXT_PAGE),
    map(() => {
      const state = store.getState();
      const page = getRepositoriesPage(state);
      return fetchRepositories(page);
    })
  );
