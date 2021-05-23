import { combineReducers } from "redux";
import { popapReducer } from "./popapReducer";


export const rootReducer = combineReducers({
    popap: popapReducer
})