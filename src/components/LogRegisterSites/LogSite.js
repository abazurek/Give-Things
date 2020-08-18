import React, { useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux'
import operations from "../../app/log/duck/operations";

import decoration from '../../assets/Decoration.svg'
import validateEmail from "../validateEmail";

import { useHistory } from 'react-router-dom'


const information={email:'',password:''};



function LoginSite({user,error,login}) {

    let history = useHistory();
    const [info, setInfo]=useState(information);
    const [trueOrFalse, setTrueOrFalse] = useState({email: false, password: false});

    const style = {
        color: 'red',
        fontSize: '12px'
    };

    useEffect(function () {
        if(user){
            history.push('/');
        }
    },[user]);


    function submitForm(e) {
        e.preventDefault();
        if (!validateEmail(info.email) || info.email === information.email) {
            setTrueOrFalse(prev => ({...prev, email: true}));
            return;
        } else setTrueOrFalse(prev => ({...prev, email: false}));
        if(info.password.length<6 || info.password===information.password){
            setTrueOrFalse(prev => ({...prev, password: true}));
            return;
        }else setTrueOrFalse(prev => ({...prev, password: false}));
        login(info);
        setInfo(information);


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
                        {trueOrFalse.email? <span style={style}>Podany email jest nieprawidłowy!</span> :''}
                    </label>
                    <label>Hasło
                        <input type='password' value={info.password}
                               onChange={({target})=>setInfo(prev=>({...prev, password:target.value }))}/>
                        {trueOrFalse.password? <span style={style}>Podane hasło jest za krótkie!</span> :''}
                    </label>
                    {error? <p style={style}>Niepoprawna nazwa użytkownika lub hasło. Spróbuj ponownie lub załóż konto</p>:''}
                </div>
                <div className='logRegisterButtons'>
                    <button><NavLink className='navLink' to={'/register'}>Załóż konto</NavLink></button>
                    <button className='submit' type='submit'>Zaloguj się</button>
                </div>
            </form>

        </div>
    )
}

const mapStateToProps = state =>({
    user: state.log.user,
    error:state.log.error,
});

const mapDispatchToProps = dispatch =>({
    login: (info)=>dispatch(operations.login(info)),
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginSite)