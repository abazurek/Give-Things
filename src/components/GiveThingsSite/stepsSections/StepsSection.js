import React,{useState} from "react";
import {connect} from 'react-redux'

import FirstStep from "./FisrtStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import FifthStep from "./FifthStep";
import actions from "../../../app/giveForms/duck/actions";

 const StepsSection = ({clear}) =>{
    const[count, setCount]=useState(1);
    return(
        <section className='stepsSection'>
            <div className='container'>
                <span className='num-of-step'>Krok {count}/4</span>
                {count===1? <FirstStep title='Zaznacz co chcesz oddać:'/>:''}
                {count===2? <SecondStep title='Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:'/>:''}
                {count===3? <ThirdStep title='Lokalizacja:'/>:''}
                {count===4? <FourthStep title='Podaj adres oraz termin odbioru rzecz przez kuriera'/>:''}
                {count===5? <FifthStep title='Podaj adres oraz termin odbioru rzecz przez kuriera'/>:''}
                <div className='buttons-box'>
                    {count!==1? <button onClick={()=>setCount(prev=>prev-1)}>Wstecz</button>:""}
                    {count!==5?<button onClick={()=>setCount(prev=>prev+1)}>Dalej</button>:<button onClick={()=>clear}>Potwierdzam</button>}
                </div>
            </div>

        </section>
    )
}


const mapDispatchToProps = dispatch => ({
    clear: ()=> dispatch(actions.clearAll)
})

export default connect(null, mapDispatchToProps)(StepsSection)