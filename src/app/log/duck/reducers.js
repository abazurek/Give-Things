import types from "./types";

const initialState={
    user:false,
    error:false,
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
        default:
            return state
    }

}

export default logReducer
