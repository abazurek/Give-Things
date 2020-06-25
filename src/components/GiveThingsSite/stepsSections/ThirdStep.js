import React from "react";
import {connect} from 'react-redux';
import actions from "../../../app/giveForms/duck/actions";


const ThirdStep = ({title, localization,who, organization})=> {
    return (
        <div>
            <h2 className='step-title'>{title}</h2>
            <div className='box'>
                <div className='custom-select'>
                    <select onChange={({target})=>localization(target.value)}>
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
                    <input type='radio'  name='one' value='dzieciom' onChange={({target})=>who(target.value)}/>
                    <input type='radio'  name='one' value='samotnym matkom' onChange={({target})=>who(target.value)}/>
                    <input type='radio'  name='one' value='bezdomnym' onChange={({target})=>who(target.value)}/>
                    <input type='radio'  name='one' value='niepełnosprawnym' onChange={({target})=>who(target.value)}/>
                    <input type='radio'  name='one' value='osobom starszym' onChange={({target})=>who(target.value)}/>
                </div>
                <div className='organization-box'>
                    <h3> Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                    <input type='text' onChange={({target})=>organization(target.value)}/>
                </div>

            </div>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    localization: value=> dispatch(actions.setLocalization(value)),
    who: value => dispatch(actions.setWho(value)),
    organization: value=> dispatch(actions.setOrganization(value))
})


export default connect(null, mapDispatchToProps)(ThirdStep);