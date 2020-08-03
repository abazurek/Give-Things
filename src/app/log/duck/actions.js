import types from "./types";

const setUser = user => ({type: types.SET_USER, user});
const catchError = error=>({type:types.CATCH_ERROR, error});
const postFormsData = data =>({type:types.POST_FORMS_DATA, data});

export default {
    setUser,
    catchError,
    postFormsData,

}