import React, {useEffect} from "react";
import {connect} from "react-redux";
import actions from "../../../app/giveForms/duck/actions";

const FourthStep =({title,street, city,postCode,phone, date, time, message, setStreet, setCity, setPostCode, setPhone, setDate, setTime, setMessage}) =>{

    useEffect(function () {

    },[])

    return(
        <div>
            <h2 className='step-title'>{title}</h2>
            <div className='fourth-forms box'>
                <form>
                    <h3>Adres obioru</h3>
                    <label> <span>Ulica</span>
                        <input  type='text' value={street} onChange={({target})=>setStreet(target.value)}/>
                    </label>
                    <label> <span>Miasto</span>
                        <input type='text' value={city} onChange={({target})=>setCity(target.value)}/>
                    </label>
                    <label> <span>Kod pocztowy</span>
                        <input type='postal' value={postCode} onChange={({target})=>setPostCode(target.value)}/>
                    </label>
                    <label> <span>Numer telefonu</span>
                        <input  type='number' value={phone} onChange={({target})=>setPhone(target.value)}/>
                    </label>
                </form>
                <form>
                    <h3>Termin odbioru</h3>
                    <label> <span>Data</span>
                        <input type='date' value={date} onChange={({target})=>setDate(target.value)}/>
                    </label>
                    <label> <span>Godzina</span>
                        <input type='time' value={time} onChange={({target})=>setTime(target.value)}/>
                    </label>
                    <label> <span>Uwagi dla kuriera</span>
                        <textarea value={message} onChange={({target})=>setMessage(target.value)}/>
                    </label>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    street: state.giveForms.street,
    city: state.giveForms.city,
    postCode: state.giveForms.postCode,
    phone: state.giveForms.phone,
    date: state.giveForms.date,
    time: state.giveForms.hour,
    message: state.giveForms.message
})

const mapDispatchToProps = dispatch =>({
    setStreet: setStreet => dispatch(actions.setStreet(setStreet)),
    setCity: setCity => dispatch(actions.setCity(setCity)),
    setPostCode: postCode => dispatch(actions.setPost(postCode)),
    setPhone: setPhone => dispatch(actions.setPhone(setPhone)),
    setDate: setDate => dispatch(actions.setDate(setDate)),
    setTime: hour => dispatch(actions.setHour(hour)),
    setMessage: note => dispatch(actions.setMessage(note))

})

export default connect(mapStateToProps, mapDispatchToProps)(FourthStep);