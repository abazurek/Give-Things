import types from "./types";

const postData = data => ({type: types.POST_DATA, data});
const catchError = error =>({type:types.ERROR_DATA,error});

export default {
    postData,
    catchError
}