import types from "./types";

const setUser = user => ({type: types.SET_USER, user});
const catchError = error=>({type:types.CATCH_ERROR, error});

export default {
    setUser,
    catchError
}