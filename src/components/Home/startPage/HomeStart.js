import React from "react";
import {NavLink} from "react-router-dom";

import decoration from './../../../assets/Decoration.svg'
function HomeStart() {
    return (
            <section className='startPage'>
                <div className='container'>
                    <div id='main-section' className='startMainSection'>
                        <div className='textBox'>
                            <span>Zacznij pomagać! </span>
                            <span>Oddaj niechciane rzeczy w zaufane ręce</span>
                            <img src={decoration} alt='decoration icon'/>
                        </div>

                        <div className='main-section-buttons'>
                            <button><NavLink className='navLink' to={'/login'}>oddaj rzeczy</NavLink></button>
                            <button><NavLink className='navLink' to={'/login'}>zorganizuj zbiórkę</NavLink></button>
                        </div>
                    </div>
                </div>
            </section>

    )
}

export default HomeStart