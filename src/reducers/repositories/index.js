import { combineReducers } from "redux";
import entities from "./entities";
import entitiesOrder from "./entitiesOrder";
import page from "./page";

const reducers = { entities, entitiesOrder, page };

export default combineReducers(reducers);
