import React from "react";

export default function infoBox({number, info}) {

    return(
        <div className='infoBox'>
            <span className='boxNumber'>{number}</span>
            <span className='boxInfoTitle'>{info}</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
        </div>
    )

}