import {combineReducers} from "redux";
import logReducer from "./app/log/duck";

const rootRecucer = combineReducers(
    {
        log: logReducer
    }
);

export default rootRecucer