import types from "./types";

const setThing = thing =>({type:types.SET_THING, thing});
const setBags = bags =>({type:types.SET_BAGS, bags});
const setLocalization = localization =>({type:types.SET_LOCALIZATION, localization});
const addWho = who =>({type:types.ADD_WHO, who});
const removeWho = who =>({type:types.REMOVE_WHO, who});
const setOrganization = organization =>({type:types.SET_ORGANIZATION, organization});
const setStreet = street => ({type: types.SET_STREET, street});
const setCity = city => ({type: types.SET_CITY, city});
const setPost = post => ({type: types.SET_POST, post});
const setPhone = phone => ({type: types.SET_PHONE, phone});
const setDate= date => ({type: types.SET_DATE, date});
const setHour = hour => ({type: types.SET_HOUR, hour});
const setMessage = message => ({type: types.SET_MESSAGE, message});
const clearAll = () => ({type: types.CLEAR_ALL});

export default {
    setThing,
    setBags,
    setLocalization,
    addWho,
    removeWho,
    setOrganization,
    setStreet,
    setCity,
    setPost,
    setPhone,
    setDate,
    setHour,
    setMessage,
    clearAll
}