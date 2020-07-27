import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import actions from "../../../app/log/duck/actions";

function LogSection({user,setUser}) {

    function logOut() {
        setUser(false);
        localStorage.removeItem('user')
    }

    return(
        <ul className='logList'>
            {user?<li>Cześć {user}!</li> : '' }
            <li>{user?<NavLink className='navLink borderLink' to={'/giveThings'}>Oddaj rzeczy</NavLink> : <NavLink to={'/login'} className='navLink'>Zaloguj</NavLink>}</li>
            <li>{ user?<NavLink className='navLink' to={'logOut'} onClick={logOut} >Wyloguj</NavLink> :<NavLink to={'/register'} className='navLink borderLink'>Załóż konto</NavLink>}</li>
        </ul>
    )
}

const mapStateToProps = (state) =>({
    user: state.log.user
});

const mapDispatchToProps=dispatch =>({
    setUser: value => dispatch(actions.setUser(value))
});

export default connect(mapStateToProps, mapDispatchToProps) (LogSection)