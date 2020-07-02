import React from "react";

import { connect } from 'react-redux'
import actions from "../../../app/giveForms/duck/actions";

import shirt from './../../../assets/Icon-1.svg';
import localization from './../../../assets/Icon-4.svg';

const  FifthStep = ({info}) => {

    return(
        <div className='fifthStep'>
            <h1>Podsumowanie Twojej darowizny</h1>
            <div className='box '>
                <h3>Oddajesz:</h3>
                <div className='summaryLine'>
                    <img src={shirt} alt='shirt-icon' /> <span>{info.bags} worki, {info.thing}{info.who.map(el=>(<span>, {el} </span>))}</span>
                </div>
                <div className='summaryLine'>
                    <img src={localization} alt='localization-icon' /> <span><span className='important'>dla lokalizacji:</span>{info.localization}</span>
                </div>
                <div className='summaryForms'>
                    <div>
                        <h3>Adres odbioru:</h3>
                        <p><span>Ulica:</span> <span>{info.street} </span> </p>
                        <p><span>Miasto:</span> <span>{info.city} </span></p>
                        <p><span>Kod pocztowy:</span> <span>{info.postCode} </span></p>
                        <p><span>Numer telefonu:</span> <span> {info.phone}</span></p>
                    </div>
                    <div>
                        <h3>Termin odbioru:</h3>
                        <p><span>Data:</span> <span>{info.date} </span> </p>
                        <p><span>Godzina:</span> <span>{info.hour} </span></p>
                        <p><span>Uwagi dla kuriera:</span> <span>{info.message}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps= state =>({
    info: state.giveForms
});


export default connect(mapStateToProps)(FifthStep);