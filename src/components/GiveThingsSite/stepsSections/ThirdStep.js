import React from "react";

export default function ThirdStep({title}) {
    return (
        <div>
            <h2 className='step-title'>{title}</h2>
            <div className='box'>
                <div className='custom-select'>
                    <select>
                        <option value='' selected disabled hidden>-wybierz-</option>
                        <option>Poznań</option>
                        <option>Warszawa</option>
                        <option>Kraków</option>
                        <option>Wrocław</option>
                        <option>Katowice</option>
                    </select>
                </div>
                <div className='box-help'>
                    <h3>Komu chesz pomóc?</h3>
                    <input type='checkbox' value='dzieciom' />
                    <input type='checkbox' value='samotnym matkom'/>
                    <input type='checkbox' value='bezdomnym'/>
                    <input type='checkbox' value='niepełnosprawnym'/>
                    <input type='checkbox' value='osobom starszym'/>
                </div>
                <div className='organization-box'>
                    <h3> Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                    <input type='text'/>
                </div>

            </div>

        </div>
    )
}