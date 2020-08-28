import React, {useState} from "react";
import {connect} from 'react-redux'
import {NavLink} from "react-router-dom";

import ImportantSection from "../ImportantSection";
import FirstStep from "./FisrtStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import FifthStep from "./FifthStep";
import ThanksStep from "./ThanksStep";

import actionsForm from "../../../app/giveForms/duck/actions";
import actionsPost from "../../../app/log/duck/actions";
import operations from "../../../app/log/duck/operations";


const titles = {
    first: 'Zaznacz co chcesz oddać:',
    second: 'Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:',
    third: 'Lokalizacja:',
    fourth: 'Podaj adres oraz termin odbioru rzecz przez kuriera',
    fifth: 'Podaj adres oraz termin odbioru rzecz przez kuriera'
};

const informs = {
    first: 'Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.',
    second: 'Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.',
    third: 'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.',
    fourth: ' Podaj adres oraz termin odbioru rzeczy.'
};

const style = {
    color: "red",
    marginBottom: '15px'
};

// const postInfo = {
//     "formsData": [
//         {"thing": "",
//             "bags": "",
//             "localization": "",
//             "who": [],
//             "pickupAddress": [
//                 {"street": "",
//                     "city": "",
//                     "postCode": "",
//                     "phone": ""
//                 }
//             ],
//             "pickupData": [
//                 {
//                     "date": "",
//                     "hour": "",
//                     "message": ""
//                 }
//             ]
//         }
//
//     ]
// };

const now = new Date();
const currentDay = now.getDate();
const currentMonth = now.getMonth() + 1;
const currentYear = now.getFullYear();
const currentHour = now.getHours();
const currentMinutes = now.getMinutes();

const StepsSection = ({thing, bags, localization, who, street, city, postCode, phone, date, hour, clear, postFormData}) => {
    const [count, setCount] = useState(1);
    const [message, setMessage] = useState('');
    const [isComponent, setIsComponent] = useState(true);
    let component = '';
    let information = '';

    let data = {};

    switch (count) {
        case 1:
            component = (<FirstStep title={titles.first}/>);
            information = informs.first;
            break;
        case 2:
            component = (<SecondStep title={titles.second}/>);
            information = informs.second;
            break;
        case 3:
            component = (<ThirdStep title={titles.third}/>);
            information = informs.third;
            break;
        case 4:
            component = (<FourthStep title={titles.fourth}/>);
            information = informs.fourth;
            break;
        case 5:
            component = (<FifthStep title={titles.fifth}/>);
            information = informs.fifth;
            break;
        default:
            component = (<span>Przepraszamy, wystąpił błąd</span>);
            break;
    }

    const dateNumbers = date.split('-').map(item => parseInt(item));
    const formYear=dateNumbers[0];
    const formMouth = dateNumbers[1];
    const formDay = dateNumbers[2];
    const hourNumbers = hour.split(':').map(item => parseInt(item));
    const formHour = hourNumbers[0];
    const formMinutes = hourNumbers[1];



    function onClick(e) {
        e.preventDefault();

        if (count === 1 && (thing === '')) {
            setMessage('Musisz zaznaczyć jedno pole aby przejść dalej');
            return;
        } else if (count === 2 && bags === '') {
            // console.log(localStorage.bags);
            setMessage('Musisz wybrać ilość worków aby przejść dalej');
            return;
        } else if (count === 3 && localization === '' || count === 3 && who.length === 0) {
            setMessage("Musisz wybrać lokalizację i co najmniej jedną z opcji komu chcesz pomóc aby przejść dalej");
            return;
        } else if (count === 4 && (street === '' || city === '' || postCode === '' || phone === '' || date === '' || hour === '')) {
            setMessage("Musisz wypełnić formularz aby przejśc dalej");
            return;
        } else if (count === 4 && street.length < 2) {
            setMessage("Nazwa ulicy musi zawierać co najmiej dwa znaki");
            return;
        } else if (count === 4 && city.length < 3) {
            setMessage("Nazwa miasta musi zawierać co najmniej 3 znaki");
            return;
        } else if (count === 4 && !postCode.match(/^[0-9]{2}-[0-9]{3}$/)) {
            setMessage("Kod pocztowy musi być zapisany w fomie NN-NNN");
            return;
        } else if (count === 4 && (phone.length !== 9 || !phone.match(/^([0-9]{9})$/))) {
            setMessage("Numer telefonu musi skladać się z 9 cyfr");
            return;
        } else if (count === 4 && (formYear < currentYear || (formYear === currentYear && formMouth < currentMonth) || (formYear === currentYear && formMouth === currentMonth && formDay < currentDay))) {

            setMessage(`Data i godzina musi być co najmniej o 3 godziny większa od teraźniejszej i być pomiędzy 7 rano a 22 wieczorem, data i godzina w tym monencie to: ${currentDay}-0${currentMonth}-${currentYear}, godzina: ${currentHour}:${currentMinutes}`);
            return;
        } else if (count === 4 && ((formYear === currentYear && formMouth === currentMonth && formDay === currentDay && ((formHour === currentHour + 3 && formMinutes < currentMinutes - 1) || formHour < currentHour + 3))
        || (formHour>22 || (formHour===22 && formMinutes!==0) || formHour<7))) {
            setMessage(`Data i godzina musi być co najmniej o 3 godziny większa od teraźniejszej i być pomiędzy 7 rano a 22 wieczorem, data i godzina w tym monencie to: ${currentDay}-0${currentMonth}-${currentYear}, godzina: ${currentHour}:${currentMinutes}`);
            return;

        } else setMessage('');
        setCount(prev => prev + 1)

    }

    function backClick() {
        setCount(prev => prev - 1)
    }


    const submitInformation = (e) => {
        e.preventDefault();
        data = {
            "formsData": [
                {
                    "thing": thing,
                    "bags": bags,
                    "localization": localization,
                    "who": who,
                    "pickupAddress": [
                        {
                            "street": street,
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
        };
        postFormData(data.formsData);
        setIsComponent(false);
        clear();
        const itemsToRemove = ["thing", "bags", "localization", "who", "street", "city", "postCode", "phone", "date", "hour", "message"];
        itemsToRemove.forEach(item => localStorage.removeItem(item));
    };

    return (
        <section className='giveThingFormsBox'>
            {count < 5 ? <ImportantSection info={information}/> : ''}
            <section className='stepsSection'>
                {isComponent ?
                    <div className='container'>
                        <div>
                            {count < 5 ? <span className='num-of-step'>Krok {count}/5</span> : '' }
                            {component}
                        </div>
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
};


const mapDispatchToProps = dispatch => ({
    clear: () => dispatch(actionsForm.clearAll()),
    postFormData: (data) => dispatch(actionsPost.postFormsData(data))
});

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
});

export default connect(mapStateToProps, mapDispatchToProps)(StepsSection)