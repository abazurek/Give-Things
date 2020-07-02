import React, {useState} from "react";
import {connect} from 'react-redux'

import ImportantSection from "../ImportantSection";
import FirstStep from "./FisrtStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import FifthStep from "./FifthStep";
import actions from "../../../app/giveForms/duck/actions";

const titles = {
    first: 'Zaznacz co chcesz oddać:',
    second: 'Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:',
    third: 'Lokalizacja:',
    fourth: 'Podaj adres oraz termin odbioru rzecz przez kuriera',
    fifth: 'Podaj adres oraz termin odbioru rzecz przez kuriera'
}

const informs = {
    first:'Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.',
    second: 'Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.',
    third: 'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.',
    fourth: ' Podaj adres oraz termin odbioru rzeczy.'
}

const StepsSection = ({clear}) => {
    const [count, setCount] = useState(1);
    let component='';
    let information = '';

    switch (count) {
        case 1:
            component=(<FirstStep title={titles.first}/>)
            information = informs.first
            break;
        case 2:
            component=(<SecondStep title={titles.second}/>)
            information = informs.second
            break;
        case 3:
            component=(<ThirdStep title={titles.third}/>)
            information = informs.third
            break;
        case 4:
            component=(<FourthStep title={titles.fourth}/>)
            information = informs.fourth
            break;
        case 5:
            component=(<FifthStep title={titles.fifth}/>)
            information = informs.fifth
            break;
        default:
            component=(<span>Przepraszamy, wystąpił błąd</span>)
            break;

    }


    return (
        <section className='giveThingFormsBox'>
            {count < 5? <ImportantSection info={information}/> : ''}
            <section className='stepsSection'>
                <div className='container'>
                    {count<5? <span className='num-of-step'>Krok {count}/5</span> : ''}
                    {component}
                    <div className='buttons-box'>
                        {count !== 1 ? <button onClick={() => setCount(prev => prev - 1)}>Wstecz</button> : ""}
                        {count !== 5 ? <button onClick={() => setCount(prev => prev + 1)}>Dalej</button> :
                            <button onClick={() => clear}>Potwierdzam</button>}
                    </div>
                </div>

            </section>
        </section>
    )
}


const mapDispatchToProps = dispatch => ({
    clear: () => dispatch(actions.clearAll)
})

export default connect(null, mapDispatchToProps)(StepsSection)