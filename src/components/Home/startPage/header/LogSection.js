import React from "react";
import {NavLink} from "react-router-dom";

function LogSection() {

    return(
        <ul className='logList'>
            <li><NavLink to={'/login'} className='navLink'>Zaloguj</NavLink></li>
            <li className='registerLink'><NavLink to={'/register'} className='navLink'>Załóż konto</NavLink></li>
        </ul>
    )
}

export default LogSection