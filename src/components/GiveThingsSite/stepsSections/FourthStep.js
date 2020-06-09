import React from "react";

export default function FourthStep({title}) {

    return(
        <div>
            <h2 className='step-title'>{title}</h2>
            <form>
                <h3>Adres obioru</h3>
                <label> Ulica
                    <input type='text'/>
                </label>
                <label> Miasto
                    <input type='text'/>
                </label>
                <label> Kod pocztowy
                    <input type='number'/>
                </label>
                <label> Numer telefonu
                    <input type='number'/>
                </label>
            </form>
            <form>
                <h3>Termin odbioru</h3>
                <label> Data
                    <input type='date'/>
                </label>
                <label> Godzina
                    <input type='time'/>
                </label>
                <label> Uwagi dla kuriera
                    <textarea/>
                </label>
            </form>
        </div>
    )
}