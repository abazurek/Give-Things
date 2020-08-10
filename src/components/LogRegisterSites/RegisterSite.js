import React, {useEffect, useState} from "react";
import decoration from "../../assets/Decoration.svg";
import {NavLink} from "react-router-dom";
import validateEmail from "../validateEmail";
import operations from "../../app/log/duck/operations";
import {connect} from "react-redux";
import { useHistory } from 'react-router-dom'

const information={email:'',password:'',password2:''};
const style = {
    color: 'red',
    fontSize: '12px'
};

function RegisterSite({user,error, register}) {

    let history = useHistory();
    const [info, setInfo]=useState(information);
    const[message,setMessage]=useState({email:false, password:false, password2:false});
    let data={};


    function submitForm(e) {
        e.preventDefault();

        if(!validateEmail(info.email) || info.email === information.email){
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
        }else setMessage(prev=>({...prev, password2: false}));
        data={"email":info.email, "password":info.password};
        register(data);
        setMessage({email:false, password:false, password2:false});
        if(user){
            setInfo(information);
            history.push('/');

        }

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
                {error? <p style={style}> Użytkownik o podanej nazwie już istnieje. Podaj inny email</p> : ''}
                <div className='logRegisterButtons'>
                    <button><NavLink className='navLink' to={'/login'}>Zaloguj się</NavLink></button>
                    <button className='submit' type='submit'>Załóż konto</button>
                </div>
            </form>

        </div>
    )
}
const mapStateToProps = state =>({
    user: state.log.name,
    error:state.log.error
});

const mapDispatchToProps = dispatch =>({
    register: (user)=>dispatch(operations.register(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(RegisterSite)