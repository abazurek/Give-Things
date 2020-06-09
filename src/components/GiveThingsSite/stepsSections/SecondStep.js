import React from "react";

export default function SecondStep({title}) {

    return(
        <div>
           <h2 className='step-title'>{title}</h2>
            <span>Liczba 60l worków</span>
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>

        </div>
    )
}