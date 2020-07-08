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
                    <div className='summarySingleBox'>
                        <h3>Adres odbioru:</h3>
                        <div><div><span>Ulica:</span></div> <span>{info.street} </span> </div>
                        <div><div><span>Miasto:</span></div> <span>{info.city} </span></div>
                        <div><div><span>Kod pocztowy:</span></div> <span>{info.postCode} </span></div>
                        <div><div><span>Numer telefonu:</span></div> <span> {info.phone}</span></div>
                    </div>
                    <div className='summarySingleBox'>
                        <h3>Termin odbioru:</h3>
                        <div><div><span>Data:</span></div> <span>{info.date} </span> </div>
                        <div><div><span>Godzina:</span></div> <span>{info.hour} </span></div>
                        <div><div><span>Uwagi dla kuriera:</span></div> <span>{info.message}</span></div>
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