import { combineReducers } from "redux";

// reducers
import { tracked_times } from "./tracked_times";

export const rootReducer = combineReducers({
    tracked_times
});