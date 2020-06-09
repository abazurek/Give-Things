import React from "react";

export default function ThirdStep({title}) {
    return (
        <div>
            <h2 className='step-title'>{title}</h2>
            <select>
                <option value='' selected disabled hidden>-wybierz-</option>
                <option>Poznań</option>
                <option>Warszawa</option>
                <option>Kraków</option>
                <option>Wrocław</option>
                <option>Katowice</option>
            </select>
            <h3>Komu chesz pomóc?</h3>
            <input type='checkbox' value='dzieciom'/>
            <input type='checkbox' value='dzieciom'/>
            <input type='checkbox' value='dzieciom'/>
            <input type='checkbox' value='dzieciom'/>
            <input type='checkbox' value='dzieciom'/>
            <h3> Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
            <input type='text'/>

        </div>
    )
}