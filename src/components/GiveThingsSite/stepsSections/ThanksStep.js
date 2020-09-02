import React from "react";
import decoration from "../../../assets/Decoration.svg";
import {NavLink} from "react-router-dom";

export default function ThanksStep() {

    return (

            <div className='thanksBox'>
                <div>
                    <p>Dziękujemy za przesłanie formularza</p>
                    <p>Na maila prześlemy wszelkie informacje o odbiorze.</p>
                    <img src={decoration} alt='decoration icon'/>
                    <NavLink to='/'><button className='back-mainSite'>Powrót do strony głównej</button></NavLink>
                </div>

                <div/>

            </div>


    )
}