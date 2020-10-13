import React, { useState } from "react";
import { connect } from "react-redux";
import post from "../../../app/post/duck/operations";

import FooterSection from "./FooterSection";
import validateEmail from "../../validateEmail";
import decoration from "./../../../assets/Decoration.svg";

const information = {
  name: "",
  email: "",
  message: "",
};

const Contact = ({ data, error, post }) => {
  const [info, setInfo] = useState(information);
  const [trueOrFalse, setTrueOrFalse] = useState({
    name: false,
    email: false,
    message: false,
  });

  function submitFrom(e) {
    e.preventDefault();

    if (
      info.name.includes(" ") ||
      info.name === information.name ||
      info.name.length < 2
    ) {
      setTrueOrFalse((prev) => ({ ...prev, name: true }));
      return;
    } else setTrueOrFalse((prev) => ({ ...prev, name: false }));

    if (!validateEmail(info.email) || info.email === information.email) {
      setTrueOrFalse((prev) => ({ ...prev, email: true }));
      return;
    } else setTrueOrFalse((prev) => ({ ...prev, email: false }));
    if (info.message.length < 120 || info.message === information.message) {
      setTrueOrFalse((prev) => ({ ...prev, message: true }));
      return;
    }
    post(info);
    setTrueOrFalse({ name: false, email: false, message: false });
    setInfo(information);
  }

  return (
    <section id="contact" className="contactSection ">
      <div className="container">
        <div className="contactBox">
          <div>
            <div className="text">
              <h2>Skontaktuj się z nami</h2>
              <img
                className="decoration"
                src={decoration}
                alt="decoration icon"
              />
              {data ? (
                <p className="successMessage">
                  Wiadomość została wysłana! Wkrótce się skontaktujemy
                </p>
              ) : (
                ""
              )}
              {error ? (
                <p className="errorMessage">
                  Wystąpił błąd w wysyłaniu formularza. Spróbuj ponownie później
                </p>
              ) : (
                ""
              )}
            </div>
            <form onSubmit={submitFrom}>
              <div className="inputsBox">
                <label>
                  {" "}
                  Wpisz swoje imię
                  <input
                    type="text"
                    placeholder="Krzysztof"
                    value={info.name}
                    onChange={({ target }) =>
                      setInfo((prev) => ({ ...prev, name: target.value }))
                    }
                  />
                  {trueOrFalse.name ? (
                    <span className="errorMessage">
                      Podane imię jest nieprawidłowe!
                    </span>
                  ) : (
                    ""
                  )}
                </label>
                <label>
                  Wpisz swój email
                  <input
                    value={info.email}
                    type="text"
                    placeholder="abc@xyz.pl"
                    onChange={({ target }) =>
                      setInfo((prev) => ({ ...prev, email: target.value }))
                    }
                  />
                  {trueOrFalse.email ? (
                    <span className="errorMessage">
                      Podany email jest nieprawidłowy!
                    </span>
                  ) : (
                    ""
                  )}
                  <span id="email" />
                </label>
              </div>
              <label className="message">
                Wpisz swoją wiadomość
                <textarea
                  value={info.message}
                  onChange={({ target }) =>
                    setInfo((prev) => ({ ...prev, message: target.value }))
                  }
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                {trueOrFalse.message ? (
                  <span className="errorMessage">
                    Wiadomość musi mieć co najmniej 120 znaków!
                  </span>
                ) : (
                  ""
                )}
              </label>
              <div className="buttonBox">
                <button type="submit">Wyślij</button>
              </div>
            </form>
          </div>
        </div>
        <FooterSection />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  data: state.post.data,
  error: state.post.error,
});

const mapDispatchToProps = (dispatch) => ({
  post: (data) => dispatch(post(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
