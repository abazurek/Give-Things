import React from "react";

import facebook from '../../../assets/Facebook.svg'
import instagram from '../../../assets/Instagram.svg'

 export default function Footer() {

    return(
        <section className='container footerSection'>
            <div>
                <div className='footerText'>   <span>Copyright by Coders Lab</span></div>
                <div className='mediaIcons'>
                    <img src={facebook} alt='facebook icon'/>
                    <img src={instagram} alt='instagram icon'/>
                </div>
            </div>
        </section>
    )
}