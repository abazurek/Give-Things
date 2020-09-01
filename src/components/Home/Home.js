import React from "react";

import HomeStart from "./startPage/HomeStart";
import ThreeColumns from "./threeColumns/ThreeColumns";
import FourStepsSection from "./fourSteps/FourStepsSection";
import AboutUs from "./aboutUs/AboutUsSection";
import WhoWeHelp from "./whoWeHelp/WhoWeHelp";
import Contact from "./contact/Contact";

function Home({mediaTablet, mediaDesktop, mediaBigScreen}) {

    return(
        <>
            <HomeStart/>
            <section className='threeColumnsSection'>
                <ThreeColumns/>
            </section>
            <FourStepsSection />
            <AboutUs mediaTablet={mediaTablet} mediaDesktop={mediaDesktop} mediaBigScreen={mediaBigScreen}/>
            <WhoWeHelp/>
            <Contact/>
        </>


    )
}
export default Home