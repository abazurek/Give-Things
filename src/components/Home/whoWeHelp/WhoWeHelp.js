import React,{useState} from "react";
import HelpBox from "./HelpBox";
import organizations from "./HelpInfo";

import decoration from './../../../assets/Decoration.svg'

export default function WhoWeHelp() {

    const [info,setInfo]=useState('');
    let choosen=organizations.Fundacje;

    let borderF = 'active';
    let borderS = null;
    let borderT = null;

    switch (info) {
        case "first": choosen=organizations.Fundacje;
        borderF="active";
            break;
        case "second":choosen=organizations.Ogranizacje;
            borderS="active";
            borderF=null;
            break;
        case "third":choosen=organizations.Zbiorki;
            borderT="active";
            borderF=null;
            break;
        default: break
    }




    return(
        <section id='help' className='whoWeHelpSection container'>
            <div className='helpTitle'>
                <h2>Komu pomagamy?</h2>
                <img src={decoration} alt='decoration icon'/>
            </div>
            <div className='buttonsBox'>
                <button className={borderF} value='first' onClick={({target})=>setInfo(target.value)} >Fundacjom</button>
                <button className={borderS} value='second' onClick={({target})=>setInfo(target.value)}>Ogranizacjom pozarządowym</button>
                <button className={borderT} value='third' onClick={({target})=>setInfo(target.value)}>Lokalnym zbiórkom</button>
            </div>
            <HelpBox choosen={choosen}/>
        </section>

    )
}