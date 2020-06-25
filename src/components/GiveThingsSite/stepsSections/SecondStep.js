import React from "react";
import {connect} from 'react-redux'
import actions from "../../../app/giveForms/duck/actions";

const SecondStep = ({title, bags}) =>{


    return (
        <div>
            <h2 className='step-title'>{title}</h2>
            <div className='box'>
                <span>Liczba 60l worków</span>
                <div className='custom-select'>
                    <select onChange={({target})=>(bags(target.value))}>
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

const mapDispatchToProps = dispatch => ({
    bags: value => dispatch(actions.setBags(value))
})

export default connect(null, mapDispatchToProps)(SecondStep)