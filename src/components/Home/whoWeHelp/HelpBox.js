import React, {useEffect, useState} from "react";

export default function HelpBox({choosen}) {
    const number =0;
    const [numberSide, setNumberSide]=useState(number);

    const sidesCountTable=[];
    let sidesCount=choosen.ogranizations.length/3;

    for(let i=0; i<sidesCount; i++){
        sidesCountTable.push(i)
    }


    useEffect(function () {
        setNumberSide(number);
    },[choosen]);


    return(
        <div className='organizationsListBox'>
            <p>{choosen.paragraph}</p>
            {choosen?.ogranizations && choosen.ogranizations.slice(numberSide*3,(numberSide*3)+3).map(item=>(
                <div key={item.name} className='organizationsList'>
                    <div className='singleTextBox'>
                        <div className='textBoxLeft'>
                            <span>{item.name}</span>
                            <span>Cel i misja:{item.mission}</span>
                        </div>
                        <span>{item.what}</span>
                    </div>
                    <hr/>
                </div>
            ))}
            <div className='buttons'>
                {sidesCountTable.length>1? sidesCountTable.map(item=>
                    <button value={item} onClick={({target})=>setNumberSide(target.value)} key={sidesCountTable.indexOf(item+1)}>{item+1}</button>)
                    : ''}
            </div>
        </div>
    )
}