import types from "./types";

let name =false;
if(localStorage.getItem('user')){
    name=localStorage.getItem('user')
}

const initialState={
    user:name,
    error:false,
    data: false,
};

function logReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_USER:
            return{
                ...state,
                user: action.user,
                error: false
            };
        case types.CATCH_ERROR:
            return {
                user:false,
                error: true,
                data:false
            };
        case types.POST_FORMS_DATA:
            return {
                ...state,
                data: action.data,
                error: false
            };
        default:
            return state
    }

}

export default logReducer
