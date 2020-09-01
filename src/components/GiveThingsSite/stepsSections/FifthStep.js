import React from "react";

import { connect } from "react-redux";

import shirt from "./../../../assets/Icon-1.svg";
import localization from "./../../../assets/Icon-4.svg";

const FifthStep = ({ info }) => {
  return (
    <div className="fifthStep">
      <h1>Podsumowanie Twojej darowizny</h1>
      <div className="box ">
        <h3>Oddajesz:</h3>
        <div className="summaryLine">
          <img src={shirt} alt="shirt-icon" />{" "}
          <span>
            {info.bags} worki, {info.thing}
            {info.who.map((el) => (
              <span key={el}>, {el} </span>
            ))}
          </span>
        </div>
        <div className="summaryLine">
          <img src={localization} alt="localization-icon" />{" "}
          <span>
            <span className="important">dla lokalizacji:</span>
            {info.localization}
          </span>
        </div>
        <div className="summaryForms">
          <div className="summarySingleBox">
            <h3>Adres odbioru:</h3>
            <div>
              <p>Ulica:</p> <p>{info.street} </p>{" "}
            </div>
            <div>
              <p>Miasto:</p> <p>{info.city} </p>
            </div>
            <div>
              <p>Kod pocztowy:</p> <p>{info.postCode} </p>
            </div>
            <div>
              <p>Numer telefonu:</p> <p> {info.phone}</p>
            </div>
          </div>
          <div className="summarySingleBox">
            <h3>Termin odbioru:</h3>
            <div>
              <p>Data:</p> <p>{info.date} </p>{" "}
            </div>
            <div>
              <p>Godzina:</p> <p>{info.hour} </p>
            </div>
            <div>
              <p>Uwagi dla kuriera:</p> <p>{info.message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  info: state.giveForms,
});

export default connect(mapStateToProps)(FifthStep);
