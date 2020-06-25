import React from "react";

import { connect } from 'react-redux'
import actions from "../../../app/giveForms/duck/actions";

import shirt from './../../../assets/Icon-1.svg';
import localization from './../../../assets/Icon-2.svg';

const  FifthStep = ({info}) => {

    return(
        <div>
            <h2>Podsumowanie Twojej darowizny</h2>
            <div>
                <h3>Oddajesz:</h3>
                <div>
                    <img src={shirt} alt='shirt-icon' /> <span>{info.bags}; {info.thing}; {info.who}</span>
                </div>
                <div>
                    <img src={localization} alt='localization-icon' />
                </div>
                <div>
                    <div>
                        <h3>Adres odbioru:</h3>
                        <p>Ulica: <span>{info.street} </span> </p>
                        <p>Miasto: <span>{info.city} </span></p>
                        <p>Kod pocztowy: <span>{info.postCode} </span></p>
                        <p>Numer telefonu: <span> {info.phone}</span></p>
                    </div>
                    <div>
                        <h3>Termin odbioru:</h3>
                        <p>Data: <span>{info.date} </span> </p>
                        <p>Godzina: <span>{info.hour} </span></p>
                        <p>Uwagi dla kuriera: <span>{info.message}</span></p>
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