import actions from "./actions";

const post = (data)=> dispatch =>{
    fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => {
            dispatch(actions.postData(true))
        })
        .catch(error => {
           dispatch(actions.catchError(true));
        });
};

export default post