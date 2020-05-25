import React, {useState} from "react";
import decoration from '../../assets/Decoration.svg'
import {NavLink} from "react-router-dom";
// import validateEmail from "../validateEmail";

const information={email:'',password:''};

function LoginSite() {

    const [info, setInfo]=useState(information);
    const[message,setMessage]=useState(false);

    function submitForm(e) {
        e.preventDefault();

    }


    return(
        <div className='logRegisterSite container'>
           <div className='logRegisterTitleBox'>
               <h2>Zaloguj się</h2>
               <img src={decoration} alt='decoration icon'/>
           </div>
            <form onSubmit={submitForm}>
                <div className='inputsBox'>
                    <label> Email
                        <input type='email' value={info.email}
                               onChange={({target})=>setInfo(prev=>({...prev, email:target.value}))}/>
                    </label>
                    <label>Hasło
                        <input type='password' value={info.email}
                               onChange={({target})=>setInfo(prev=>({...prev, password:target.value }))}/>
                    </label>
                    {message? <span>Nieprawidłowa nazwa użytkownika lub hasło</span> :''}
                </div>
                <div className='logRegisterButtons'>
                    <button><NavLink className='navLink' to={'/register'}>Załóż konto</NavLink></button>
                    <button className='submit' type='submit'>Zaloguj się</button>
                </div>
            </form>

        </div>
    )
}

export default LoginSite