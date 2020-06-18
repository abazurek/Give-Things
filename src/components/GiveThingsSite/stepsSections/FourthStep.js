import React from "react";

export default function FourthStep({title}) {

    return(
        <div>
            <h2 className='step-title'>{title}</h2>
            <div className='fourth-forms box'>
                <form>
                    <h3>Adres obioru</h3>
                    <label> <span>Ulica</span>
                        <input type='text'/>
                    </label>
                    <label> <span>Miasto</span>
                        <input type='text'/>
                    </label>
                    <label> <span>Kod pocztowy</span>
                        <input type='number'/>
                    </label>
                    <label> <span>Numer telefonu</span>
                        <input type='number'/>
                    </label>
                </form>
                <form>
                    <h3>Termin odbioru</h3>
                    <label> <span>Data</span>
                        <input type='date'/>
                    </label>
                    <label> <span>Godzina</span>
                        <input type='time'/>
                    </label>
                    <label> <span>Uwagi dla kuriera</span>
                        <textarea/>
                    </label>
                </form>
            </div>
        </div>
    )
}