import React from "react";
import GiveThingsStart from "./GiveThingsStart";
import ImportantSection from "./ImportantSection";
import StepsSection from "./stepsSections/StepsSection";

export default function GiveThingsAll() {
    return(
        <>
            <GiveThingsStart/>
            <ImportantSection/>
            <StepsSection/>
        </>
    )
}