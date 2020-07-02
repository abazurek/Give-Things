import React from "react";

export default function ImportantSection({info}){
    return(
        <section className='important-section'>
            <div className='container'>
                <span>Ważne!</span>
                <span>{info}</span>
            </div>
        </section>
    )
}