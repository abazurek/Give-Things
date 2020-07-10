import React, {useState} from "react";
import {connect} from 'react-redux'

import ImportantSection from "../ImportantSection";
import FirstStep from "./FisrtStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import FifthStep from "./FifthStep";
import ThanksStep from "./ThanksStep";

import actionsForm from "../../../app/giveForms/duck/actions";
import actionsPost from "../../../app/log/duck/actions";

import {NavLink} from "react-router-dom";

const titles = {
    first: 'Zaznacz co chcesz oddać:',
    second: 'Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:',
    third: 'Lokalizacja:',
    fourth: 'Podaj adres oraz termin odbioru rzecz przez kuriera',
    fifth: 'Podaj adres oraz termin odbioru rzecz przez kuriera'
}

const informs = {
    first: 'Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.',
    second: 'Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.',
    third: 'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.',
    fourth: ' Podaj adres oraz termin odbioru rzeczy.'
}

const style = {
    color: "red",
    marginBottom: '15px'
}

const postInfo = {
    "formsData": [
        {"thing": "",
            "bags": "",
            "localization": "",
            "who": [],
            "pickupAddress": [
                {"street": "",
                    "city": "",
                    "postCode": "",
                    "phone": ""
                }
            ],
            "pickupData": [
                {
                    "date": "",
                    "hour": "",
                    "message": ""
                }
            ]
        }

    ]
}

const StepsSection = ({thing, bags, localization, who, street, city, postCode, phone, date, hour, clear,postFormData}) => {
    const [count, setCount] = useState(1);
    const [message, setMessage] = useState('');
    const [isComponent, setIsComponent] = useState(true);
    const [infoToPost, setInfoToPost] = useState(postInfo);
    let component = '';
    let information = '';

    switch (count) {
        case 1:
            component = (<FirstStep title={titles.first}/>)
            information = informs.first
            break;
        case 2:
            component = (<SecondStep title={titles.second}/>)
            information = informs.second
            break;
        case 3:
            component = (<ThirdStep title={titles.third}/>)
            information = informs.third
            break;
        case 4:
            component = (<FourthStep title={titles.fourth}/>)
            information = informs.fourth
            break;
        case 5:
            component = (<FifthStep title={titles.fifth}/>)
            information = informs.fifth
            break;
        default:
            component = (<span>Przepraszamy, wystąpił błąd</span>)
            break;
    }


    function onClick(e) {
        e.preventDefault();
        if (count === 1 && thing === '') {
            setMessage('Musisz zaznaczyć jedno pole aby przejść dalej')
            return;
        } else if (count === 2 && bags === '') {
            setMessage('Musisz wybrać ilość worków aby przejść dalej')
            return;
        } else if (count === 3 && localization === '' || count === 3 && who.length === 0) {
            setMessage("Musisz wybrać lokalizację i co najmniej jedną z opcji komu chcesz pomóc aby przejść dalej")
            return;
        } else if (count === 4 && (street === '' || city === '' || postCode === '' || phone === '' || date === '' || hour === '')) {
            setMessage("Musisz wypełnić formularz aby przejśc dalej")
            return;
        } else setMessage('')
        setCount(prev => prev + 1)

    }

    function backClick() {
        setCount(prev => prev - 1)
    }

    const submitInformation = (e) => {
        e.preventDefault();

        setInfoToPost({
            "formsData": [
                {"thing": thing,
                    "bags": bags,
                    "localization": localization,
                    "who": who,
                    "pickupAddress": [
                        {"street": street,
                            "city": city,
                            "postCode": postCode,
                            "phone": phone
                        }
                    ],
                    "pickupData": [
                        {
                            "date": date,
                            "hour": hour,
                            "message": message
                        }
                    ]
                }

            ]
        });
        setIsComponent(false);
        localStorage.clear();
        postFormData(infoToPost);
        return clear;
    }

    return (
        <section className='giveThingFormsBox'>
            {count < 5 ? <ImportantSection info={information}/> : ''}
            <section className='stepsSection'>
                {isComponent ?
                    <div className='container'>
                        {count < 5 ? <span className='num-of-step'>Krok {count}/5</span> : ''}
                        {component}
                        <div className='buttons-box'>
                            <p style={style}>{message}</p>
                            {count !== 1 ? <button onClick={backClick}>Wstecz</button> : ""}
                            {count !== 5 ? <button onClick={onClick}>Dalej</button> :
                                <NavLink to='/thanksStep'>
                                    <button onClick={submitInformation}>Potwierdzam</button>
                                </NavLink>}
                        </div>
                    </div>
                : <ThanksStep/>
                }


            </section>
        </section>
    )
}


const mapDispatchToProps = dispatch => ({
    clear: () => dispatch(actionsForm.clearAll),
    postFormData: (data) => dispatch(actionsPost.postFormsData(data))
})
const mapStateToProps = state => ({
    thing: state.giveForms.thing,
    bags: state.giveForms.bags,
    localization: state.giveForms.localization,
    who: state.giveForms.who,
    street: state.giveForms.street,
    city: state.giveForms.city,
    postCode: state.giveForms.postCode,
    phone: state.giveForms.phone,
    date: state.giveForms.date,
    hour: state.giveForms.hour
})

export default connect(mapStateToProps, mapDispatchToProps)(StepsSection)