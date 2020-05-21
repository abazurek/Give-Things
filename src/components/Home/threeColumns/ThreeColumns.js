import React from "react";
import InfoBox from "./InfoBox";

function ThreeColumns() {

    return(
        <div className='container'>
            <InfoBox number='10' info='Oddanych Worków'/>
            <InfoBox number='5' info='Wspartych organizacji'/>
            <InfoBox number='7' info='Zorganizowanych zbiórek'/>
        </div>
    )
}

export default ThreeColumns