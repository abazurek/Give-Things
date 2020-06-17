import React from "react";

export default function SecondStep({title}) {


    return (
        <div>
            <h2 className='step-title'>{title}</h2>
            <div className='box'>
                <span>Liczba 60l worków</span>
                <div className='custom-select'>
                    <select >
                        <option selected hidden value>- wybierz -</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>

                </div>
            </div>
        </div>
    )
}