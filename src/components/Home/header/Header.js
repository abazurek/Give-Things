import React from "react";
import LogSection from "./LogSection";
import NavSection from "./NavSection";

export default function Header() {
    return(
        <header className='container'>
            <LogSection/>
            <NavSection/>
        </header>
    )
}