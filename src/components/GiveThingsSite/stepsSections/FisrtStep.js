import React, {useState} from "react";

export default function FirstStep({title}) {


    return(
        <div>
            <h2 className='step-title'>{title}</h2>
            <form>
                <label>
                    <input name='radio' type='radio' />
                    <span>ubrania, które nadają się do ponownego użycia</span>
                </label>
                <label>
                    <input name='radio' type='radio'/><span>ubrania, do wyrzucenia</span>
                </label>
                <label>
                    <input name='radio' type='radio'/><span>zabawki</span>
                </label>
                <label>
                    <input name='radio' type='radio'/><span>książki</span>
                </label>
                <label>
                    <input name='radio' type='radio'/><span>inne</span>
                </label>

            </form>
        </div>
    )
}