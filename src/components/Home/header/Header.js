import React from "react";
import LogSection from "./LogSection";
import NavSection from "./NavSection";

export default function Header() {
    return(
        <header className=' header'>
            <div className='container'>
                <LogSection/>
                <NavSection/>
            </div>
        </header>
    )
}