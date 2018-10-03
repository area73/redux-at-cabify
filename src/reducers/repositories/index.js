import { combineReducers } from "redux";
import entities from "./entities";
import entitiesOrder from "./entitiesOrder";

const reducers = { entities, entitiesOrder };

export default combineReducers(reducers);
