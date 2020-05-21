import React from "react";

export default function SingleIconBox({icon,firstSpan,secondSpan}) {

    return(
        <div className='singleIconBox'>
            <img src={icon} alt='icon'/>
            <span className='firstSpan'>{firstSpan}</span>
            <hr/>
            <span className='secondSpan'>{secondSpan}</span>
        </div>
    )
}