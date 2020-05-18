import types from "./types";

const addUser = user => ({type: types.ADD_USER, user});
const setUser = user => ({type: types.SET_USER, user});

export default {
    addUser,
    setUser
}