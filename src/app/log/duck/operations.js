import actions from "./actions";


const API = 'http://localhost:3004/log';

const table = [];
let users = [];

const login = (info) => dispatch => {
    fetch(API)
        .then(data => data.json())
        .then(arr => {
            arr.forEach(function (item) {
                if (item.email === info.email && item.password === info.password) {
                    dispatch(actions.setUser(info.email));
                    table.push(item.email);
                    localStorage.setItem('user', info.email);
                }

            });
            return table.length === 0 ? dispatch(actions.catchError(true)) : ''
        })
        .catch(err => console.log(err));
};



const register = (user) => dispatch => {
    const isUser = [];
    fetch(API)
        .then(data => data.json())
        .then(arr => {
            arr.forEach((item) => {
                if (item.email === user.email) {
                    isUser.push(item.email);
                }
            });

            if(isUser.length === 0){
                dispatch(actions.setUser(user.email));
                localStorage.setItem('user', user.email);

                fetch(API, {
                    method: "POST",
                    body: JSON.stringify(user),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(response => response.json())
                    .catch(err => console.log(err));


            }else return  dispatch(actions.catchError(true))
        })
        .catch(err => console.log(err));
};


const postFormData = (data) => dispatch => {
    fetch(API, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => dispatch(actions.postFormsData(data)))
        .catch(dispatch(actions.catchError(true)))

};

export default {login, register, postFormData}