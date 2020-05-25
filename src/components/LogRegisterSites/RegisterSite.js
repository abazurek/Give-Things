import React, {useState} from "react";
import decoration from "../../assets/Decoration.svg";
import {NavLink} from "react-router-dom";
import validateEmail from "../validateEmail";

const information={email:'',password:'',password2:''};
const style = {
    color: 'red',
    fontSize: '12px'
};

function RegisterSite() {

    const [info, setInfo]=useState(information);
    const[message,setMessage]=useState({email:false, password:false, password2:false});

    function submitForm(e) {
        e.preventDefault();

        if(!validateEmail(info.email) || info.email===information.email){
            setMessage(prev=>({...prev, email: true}));
            return;
        } else setMessage(prev=>({...prev, email: false}));

        if(info.password.length<6){
            setMessage(prev=>({...prev, password: true}));
            return;
        }else setMessage(prev=>({...prev, password: false}));
        if(info.password!==info.password2){
            setMessage(prev=>({...prev,password2: true}));
            return;
        }

        setInfo(information);
        setMessage({email:false, password:false, password2:false})
    }


    return(
        <div className='logRegisterSite container'>
            <div className='logRegisterTitleBox'>
                <h2>Załóż konto</h2>
                <img src={decoration} alt='decoration icon'/>
            </div>
            <form onSubmit={submitForm}>
                <div className='inputsBox'>
                    <label> Email
                        <input value={info.email} type='email' onChange={({target})=>setInfo(prev=>({...prev,email: target.value}))}/>
                        {message.email? <span style={style}>Podany adres email jest nieprawidłowy</span>: ''}
                    </label>
                    <label>Hasło
                        <input type='password' value={info.password}
                               onChange={({target})=>setInfo(prev=>({...prev,password: target.value}))}/>
                        {message.password? <span style={style}>Hasło jest za krótkie!</span> :''}
                    </label>
                    <label>Powtórz hasło
                        <input type='password' value={info.password2}
                               onChange={({target})=>setInfo(prev=>({...prev, password2: target.value}))}/>
                        {message.password2? <span style={style}>Hasła muszą być identyczne!</span> : ''}
                    </label>
                </div>
                <div className='logRegisterButtons'>
                    <button><NavLink className='navLink' to={'/login'}>Zaloguj się</NavLink></button>
                    <button className='submit' type='submit'>Załóż konto</button>
                </div>
            </form>

        </div>
    )
}

export default RegisterSite