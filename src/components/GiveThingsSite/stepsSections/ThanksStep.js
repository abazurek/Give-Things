import React from "react";
import decoration from "../../../assets/Decoration.svg";

export default function ThanksStep() {

    return (

            <div className='thanksBox'>
                <p>Dziękujemy za przesłanie formularza</p>
                <p>Na maila prześlemy wszelkie informacje o odbiorze.</p>
                <img src={decoration} alt='decoration icon'/>
            </div>


    )
}