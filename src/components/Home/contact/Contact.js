import React from "react";

import FooterSection from "./FooterSection";
import decoration from './../../../assets/Decoration.svg'

export default function Contact() {


    function submitFrom(e) {

        e.preventDefault();
    }

    return (
        <section id='contact' className='contactSection'>
            <div className='container'>
                <div className='contactBox'>
                    <div className='text'>
                        <h2>Skontaktuj się z nami</h2>
                        <img src={decoration} alt='decoration icon'/>
                    </div>
                    <form onSubmit={submitFrom}>
                        <div className='inputsBox'>
                            <label> Wpisz swoje imię
                                <input type='text' placeholder='Krzysztof'/>
                            </label>
                            <label>Wpisz swój email
                                <input type='text' placeholder='abc@xyz.pl'/>
                            </label>
                        </div>
                        <label className='message'>Wpisz swoją wiadomość
                            <textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                        </label>
                        <div className='buttonBox'>
                            <button type='submit'>Wyślij</button>
                        </div>
                    </form>
                </div>
                <FooterSection/>
            </div>
        </section>
    )
}