import React from "react";

import LogSection from "./header/LogSection";
import NavSection from "./header/NavSection";
import MainSection from "./mainSection";


function HomeStart() {
    return (
        <>
            <section className='startPage'>
                <header className='container'>
                    <LogSection/>
                    <NavSection/>
                </header>
                <div className='container'>
                    <MainSection/>
                </div>
            </section>

        </>
    )
}

export default HomeStart