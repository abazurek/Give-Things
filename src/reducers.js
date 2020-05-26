import {combineReducers} from "redux";
import logReducer from "./app/log/duck";
import postReducer from "./app/post/duck";

const rootReducer = combineReducers(
    {
        log: logReducer,
        post: postReducer
    }
);

export default rootReducer