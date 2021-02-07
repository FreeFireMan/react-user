import {combineReducers} from "redux";
import usersReducer from "./users-reducer";

export const reducer = combineReducers({
    users: usersReducer
})