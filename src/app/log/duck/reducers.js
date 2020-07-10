import types from "./types";

const initialState={
    user:false,
    error:false,
    data: false
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
                ...state, error: true
            };
        case types.POST_FORMS_DATA:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }

}

export default logReducer
