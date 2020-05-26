import React from "react";
import {NavLink} from "react-router-dom";
import decoration from '../assets/Decoration.svg'
function LogOut() {

    return(
        <section className='container logOutSection'>
            <h2>Wylogowanie nastąpiło pomyślnie!</h2>
            <img src={decoration} alt='decoration icon'/>
            <button><NavLink className='navLink' to={"/"}>Strona główna</NavLink></button>
        </section>
    )
}

export default LogOut