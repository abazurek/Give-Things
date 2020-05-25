import React, {useState} from "react";
import validateEmail from "../../validateEmail";

import FooterSection from "./FooterSection";
import decoration from './../../../assets/Decoration.svg'

const information = {
    "name":'',
    "email": '',
    "message": ''
};


export default function Contact() {

    const [info, setInfo] = useState(information);
    const [trueOrFalse, setTrueOrFalse]=useState({name:false, email:false, message:false});

    const style = {
        color: 'red',
        fontSize: '12px'
    };

    function submitFrom(e) {
        e.preventDefault();


        if (info.name.includes(" ") || info.name===information.name || info.name.length<2 ) {
            setTrueOrFalse(prev=>({...prev, name:true}));
            return;
        } else  setTrueOrFalse(prev=>({...prev, name:false}));

        if (!validateEmail(info.email) || info.email===information.email){
            setTrueOrFalse(prev=>({...prev,email: true}));
            return;
        }else  setTrueOrFalse(prev=>({...prev, email:false}));
        if(info.message.length<120 || info.message===information.message){
            setTrueOrFalse(prev=>({...prev,message: true}));
            return;
        }
        setTrueOrFalse(({name:false,email:false,message:false}));
        setInfo(information);
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
                                <input type='text' placeholder='Krzysztof' value={info.name}
                                       onChange={({target}) => setInfo(prev => ({...prev, name: target.value}))}/>
                                {trueOrFalse.name? <span style={style}>Podane imię jest nieprawidłowe!</span> : ''}
                            </label>
                            <label>Wpisz swój email
                                <input value={info.email} type='text' placeholder='abc@xyz.pl'
                                       onChange={({target}) => setInfo(prev => ({...prev, email: target.value}))}/>
                                {trueOrFalse.email? <span style={style}>Podany email jest nieprawidłowy!</span> : ''}
                               <span id='email'/>
                            </label>

                        </div>
                        <label className='message'>Wpisz swoją wiadomość
                            <textarea value={info.message}
                                      onChange={({target}) => setInfo(prev => ({...prev, message: target.value}))}
                                      placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                            {trueOrFalse.message? <span style={style}>Wiadomość musi mieć co najmniej 120 znaków!</span> : ''}
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