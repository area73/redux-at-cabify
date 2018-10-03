import { createSelector } from "reselect";
import getRepositories from "./getRepositories";

const getRepositoriesOrder = (state) => state.repositories.entitiesOrder;

export default createSelector(
  getRepositories,
  getRepositoriesOrder,
  (repositories, order) => order.map((id) => repositories[id])
);
