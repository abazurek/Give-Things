import types from "./types";

const clear = {
    thing: '',
    bags: '',
    localization: '',
    who: [],
    organization: '',
    street: '',
    city: '',
    postCode: '',
    phone: '',
    date: '',
    hour: '',
    message: ''
};

const initialState=clear;

function giveFormsReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_THING:
            return {
                ...state, thing: action.thing
            };
        case types.SET_BAGS:
            return {
                ...state, bags: action.bags
            };
        case types.SET_LOCALIZATION:
            return {
                ...state, localization: action.localization
            };
        case types.ADD_WHO:
            return {
                ...state, who: [...state.who, action.who]
            };
        case types.REMOVE_WHO:
            return {
                who: state.who.filter((item)=>item!==action.who)
            };
        case types.SET_ORGANIZATION:
            return {
                ...state, organization: action.organization
            };
        case types.SET_STREET:
            return {
                ...state, street: action.street
            };
        case types.SET_CITY:
            return {
                ...state, city: action.city
            };
        case types.SET_POST:
            return {
                ...state, postCode: action.post
            };
        case types.SET_PHONE:
            return {
                ...state, phone: action.phone
            };
        case types.SET_DATE:
            return {
                ...state, date: action.date
            };
        case types.SET_HOUR:
            return {
                ...state, hour: action.hour
            };
        case types.SET_MESSAGE:
            return {
                ...state, message: action.message
            };
        case types.CLEAR_ALL:
            return {
                thing: '',
                bags: '',
                localization: '',
                who: [],
                organization: '',
                street: '',
                city: '',
                postCode: '',
                phone: '',
                date: '',
                hour: '',
                message: ''
            };
        default:
            return state
    }
}

export default giveFormsReducer