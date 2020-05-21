import React from "react";
import {Link} from "react-scroll"


function NavSection() {

    return(
        <ul className='navList' >
            <li><Link to='main-section' smooth={true} duration={1000}>Start</Link></li>
            <li><Link to='four-steps' smooth={true} duration={1100}>O co chodzi?</Link></li>
            <li><Link to='about-us' smooth={true} duration={1200}>O nas</Link></li>
            <li><Link to='help' smooth={true} duration={1300}>Fundacja i organizacje</Link></li>
            <li><Link to='contact' smooth={true} duration={1400}>Kontakt</Link></li>
        </ul>
    )
}

export default NavSection