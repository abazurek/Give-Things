import React from "react";
import {connect} from "react-redux";
import actions from "../../../app/giveForms/duck/actions";

const FourthStep =({title, street, city, postCode, phone, date, time, message}) =>{

    return(
        <div>
            <h2 className='step-title'>{title}</h2>
            <div className='fourth-forms box'>
                <form>
                    <h3>Adres obioru</h3>
                    <label> <span>Ulica</span>
                        <input type='text' onChange={({target})=>street(target.value)}/>
                    </label>
                    <label> <span>Miasto</span>
                        <input type='text' onChange={({target})=>city(target.value)}/>
                    </label>
                    <label> <span>Kod pocztowy</span>
                        <input type='number' onChange={({target})=>postCode(target.value)}/>
                    </label>
                    <label> <span>Numer telefonu</span>
                        <input type='number' onChange={({target})=>phone(target.value)}/>
                    </label>
                </form>
                <form>
                    <h3>Termin odbioru</h3>
                    <label> <span>Data</span>
                        <input type='date' onChange={({target})=>date(target.value)}/>
                    </label>
                    <label> <span>Godzina</span>
                        <input type='time' onChange={({target})=>time(target.value)}/>
                    </label>
                    <label> <span>Uwagi dla kuriera</span>
                        <textarea onChange={({target})=>message(target.value)}/>
                    </label>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    street: street => dispatch(actions.setStreet(street)),
    city: city => dispatch(actions.setCity(city)),
    postCode: code => dispatch(actions.setPost(code)),
    phone: phone => dispatch(actions.setPhone(phone)),
    date: date => dispatch(actions.setDate(date)),
    time: hour => dispatch(actions.setHour(hour)),
    message: note => dispatch(actions.setMessage(note))

})

export default connect(null, mapDispatchToProps)(FourthStep);