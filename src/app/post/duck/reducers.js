import types from "./types";

const initialState = {
    data: false,
    error: false
};

function postReducer(state = initialState, action) {
    switch (action.type) {
        case types.POST_DATA:
            return {
                ...state, data: action.type
            };
        case types.ERROR_DATA:
            return {
                ...state, error: action.type
            };
        default:
            return state
    }

}

export default postReducer
