import types from "./types";


const initialState={
    name:""
};

function logReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_USER:
            return{
                ...state, name: action.type
            };
        default:
            return state
    }

}

export default logReducer
