import actions from "./actions";

const API = 'http://localhost:3000/log';

const login = ({email, password})=> dispatch =>{
    fetch(`${API}?email=${email}&password=${password}`)
        .then(data => data.json())
        .then(arr => arr[0])
        .then(user=> {
            dispatch(actions.setUser(email))

        })
        .catch(dispatch(actions.catchError(true)));
};

const register = (user) => dispatch =>{
    fetch(API, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
        "Content-Type": "application/json"
    }
})
    .then(response => response.json())
    .then(data =>dispatch(actions.setUser(user.email)))
    .catch(dispatch(actions.catchError(true)));
};

export default {login,register}