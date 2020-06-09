import React,{useState} from "react";
import FirstStep from "./FisrtStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";

export default function StepsSection(){
    const[count, setCount]=useState(1);
    return(
        <section className='stepsSection'>
            <div className='container'>
                <span className='num-of-step'>Krok {count}/4</span>
                {count===1? <FirstStep title='Zaznacz co chcesz oddać:'/>:''}
                {count===2? <SecondStep title='Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:'/>:''}
                {count===3? <ThirdStep title='Lokalizacja:'/>:''}
                {count===4? <FourthStep title='Podaj adres oraz termin odbioru rzecz przez kuriera'/>:''}
                {count!==1? <button onClick={()=>setCount(prev=>prev-1)}>Wstecz</button>:""}
                {count!==4?<button onClick={()=>setCount(prev=>prev+1)}>Dalej</button>:""}
            </div>

        </section>
    )
}