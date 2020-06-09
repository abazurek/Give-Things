import React from "react";

function StepBox({number,text}) {
    return(
        <div className='single-stepBox'>
            <div>
                <span>{number}</span>
                <span>{text}</span>
            </div>
        </div>
    )
}

export default StepBox;