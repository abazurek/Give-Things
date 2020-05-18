import actions from "./actions";

const login = ({user, password})=> dispatch =>{
    fetch(`http://localhost:3005/log?user=${user}&password=${password}`)
        .then(data => data.json())
        .then(user=> dispatch(actions.setUser(user)))
};

export default login