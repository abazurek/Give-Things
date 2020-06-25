import {combineReducers} from "redux";
import logReducer from "./app/log/duck";
import postReducer from "./app/post/duck";
import giveFormsReducer from "./app/giveForms/duck";

const rootReducer = combineReducers(
    {
        log: logReducer,
        post: postReducer,
        giveForms: giveFormsReducer
    }
);

export default rootReducer