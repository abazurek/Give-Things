import React from "react";
import {Link} from "react-scroll"
import {NavLink} from "react-router-dom";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function NavSection({mediaTablet, mediaDesktop, mediaBigScreen, active, setActive}) {


    function clickBurger(e) {
        e.preventDefault();
        active ? setActive(false) : setActive(true);
    }

    function looseActive() {
        setActive(false)
    }
    return (
        <>
            {(mediaTablet || mediaDesktop || mediaBigScreen) ?
                <ul className='navList'>
                    <li><NavLink className='navLink' to={"/"}>Start</NavLink></li>
                    <li><Link to='four-steps' smooth={true} duration={1100}>O co chodzi?</Link></li>
                    <li><Link to='about-us' smooth={true} duration={1200}>O nas</Link></li>
                    <li><Link to='help' smooth={true} duration={1300}>Fundacja i organizacje</Link></li>
                    <li><Link to='contact' smooth={true} duration={1400}>Kontakt</Link></li>
                </ul>
                :
                <div className='burger-box'>
                    <FontAwesomeIcon onClick={clickBurger} icon={faBars}/>
                    {active?
                        <ul className='burger-list navList'>
                            <li><NavLink onClick={looseActive} className='navLink' to={"/"}>Start</NavLink></li>
                            <li><Link onClick={looseActive} to='four-steps' smooth={true} duration={1100}>O co chodzi?</Link></li>
                            <li><Link onClick={looseActive} to='about-us' smooth={true} duration={1200}>O nas</Link></li>
                            <li><Link onClick={looseActive} to='help' smooth={true} duration={1300}>Fundacja i organizacje</Link></li>
                            <li><Link onClick={looseActive} to='contact' smooth={true} duration={1400}>Kontakt</Link></li>
                        </ul>

                        : ""
                    }
                </div>
            }

        </>
    )
}

export default NavSection