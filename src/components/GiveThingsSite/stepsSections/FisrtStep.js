import React, {useState} from "react";
import {connect} from 'react-redux';
import actions from "../../../app/giveForms/duck/actions";


const texts = {
    first:'ubrania, które nadają się do ponownego użycia',
    second:'ubrania do wyrzucenia',
    third:'zabawki',
    fourth:'książki',
    fifth:'inne'
}

const FirstStep = ({title, thing}) => {


    return(
        <div>
            <h2 className='step-title'>{title}</h2>
            <form>
                <label>
                    <input name='radio' type='radio' value={texts.first} onChange={({target})=>thing(target.value)}/>
                    <span>{texts.first}</span>
                </label>
                <label>
                    <input name='radio' type='radio' value={texts.second} onChange={({target})=>thing(target.value)}/>
                    <span>{texts.second}</span>
                </label>
                <label>
                    <input name='radio' type='radio' value={texts.third} onChange={({target})=>thing(target.value)}/>
                    <span>{texts.third}</span>
                </label>
                <label>
                    <input name='radio' type='radio' value={texts.fourth} onChange={({target})=>thing(target.value)}/>
                    <span>{texts.fourth}</span>
                </label>
                <label>
                    <input name='radio' type='radio'  value={texts.fifth} onChange={({target})=>thing(target.value)}/>
                    <span>{texts.fifth}</span>
                </label>

            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    thing: value => dispatch(actions.setThing(value))
})

export default connect(null, mapDispatchToProps)(FirstStep);
