import actions from "./actions";
import {history} from '../../../App'
const API = 'http://localhost:3004/log';

const login = ({email, password})=> dispatch =>{
    fetch(`${API}?email=${email}&password=${password}`)
        .then(data => data.json())
        .then(arr => arr[0])
        .then(user=> {
            dispatch(actions.setUser(email))
            history.push('/')
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

const postFormData = data => dispatch =>{
    fetch(API,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(dispatch(actions.postFormsData(data)))
        .catch(dispatch(actions.catchError(true)))
}

export default {login,register, postFormData}