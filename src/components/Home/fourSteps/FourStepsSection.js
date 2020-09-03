import React from "react";
import SingleIconBox from "./SingleIconBox";

import decoration from './../../../assets/Decoration.svg'
import tShirt from './../../../assets/Icon-1.svg'
import bag from './../../../assets/Icon-2.svg'
import magnifier from './../../../assets/Icon-3.svg'
import courier from './../../../assets/Icon-4.svg'
import {NavLink} from "react-router-dom";


export default function FourStepsSection() {



    return (
        <section id='four-steps' className='fourStepsSection'>
            <div className='titleBox'>
                <h2>Wystarczą 4 proste kroki</h2>
                <img className='decoration' src={decoration} alt='decoration icon'/>
            </div>
            <div className='iconsBox'>
                <div className='container'>
                    <SingleIconBox icon={tShirt} firstSpan='Wybierz rzeczy'
                                   secondSpan='ubrania, zabawki, sprzęt i inne'/>
                    <SingleIconBox icon={bag} firstSpan='Spakuj je' secondSpan='skorzystaj z worków na śmieci'/>
                    <SingleIconBox icon={magnifier} firstSpan='Zdecyduj komu chcesz pomóc'
                                   secondSpan='wybierz zaufane miejsce'/>
                    <SingleIconBox icon={courier} firstSpan='Zamów kuriera'
                                   secondSpan='kurier przyjedzie w dogodnym terminie'/>
                </div>
            </div>
            <div className='buttonBox'>
                <button><NavLink className='navLink' to={'/login'}>Oddaj rzeczy</NavLink></button>
            </div>
        </section>
    )
}