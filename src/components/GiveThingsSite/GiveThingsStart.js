import React from "react";
import decoration from "../../assets/Decoration.svg";
import StepBox from "./StepBox";

function GiveThingsStart() {
    return(
        <section className='giveThingsSite'>
            <div className='container'>
                <div className='text-box'>
                    <div className='title-box'>
                        <h2>Oddaj rzeczy, których już nie chcesz <span>potrzebującym</span></h2>
                        <img className='decoration' src={decoration} alt='decoration icon'/>
                    </div>
                    <div className='four-steps'>
                       <h3>Wystarczą 4 proste kroki:</h3>
                        <div className='steps-box'>
                            <StepBox number='1' text='Wybierz rzeczy'/>
                            <StepBox number='2' text='Spakuj je w worki'/>
                            <StepBox number='3' text='Wybierz fundację'/>
                            <StepBox number='4' text='Zamów kuriera'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GiveThingsStart