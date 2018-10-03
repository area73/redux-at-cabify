import { createSelector } from "reselect";
import getRepositories from "./getRepositories";

const getIdFromProps = (_, props) => props.id;

export default createSelector(
  getRepositories,
  getIdFromProps,
  (repositories, id) => repositories[id]
);
