import React from "react";
import GiveThingsStart from "./GiveThingsStart";
import StepsSection from "./stepsSections/StepsSection";
import Contact from "../Home/contact/Contact";

export default function GiveThingsAll() {
    return(
        <>
            <GiveThingsStart/>
            <StepsSection/>
            <Contact/>
        </>
    )
}