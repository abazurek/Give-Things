import React from "react";
import {NavLink} from "react-router-dom";

import decoration from './../../../assets/Decoration.svg'
import {connect} from "react-redux";

function HomeStart({user}) {
    return (
            <section className='startPage'>
                <div className='container'>
                    <div id='main-section' className='startMainSection'>
                        <div className='textBox'>
                            <h1>Zacznij pomagać! </h1>
                            <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                            <img src={decoration} alt='decoration icon'/>
                        </div>

                        <div className='main-section-buttons'>
                            <button>{user?<NavLink className='navLink' to={'/giveThings'}>oddaj rzeczy</NavLink> :<NavLink className='navLink' to={'/login'}>oddaj rzeczy</NavLink>}</button>
                            <button>{user? 'zorganizuj zbiórkę':<NavLink className='navLink' to={'/login'}>zorganizuj zbiórkę</NavLink>}</button>
                        </div>
                    </div>
                </div>
            </section>

    )
}
const mapStateToProps = (state) =>({
    user: state.log.user
});

export default connect(mapStateToProps) (HomeStart)
