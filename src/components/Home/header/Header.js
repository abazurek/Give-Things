import React from "react";
import LogSection from "./LogSection";
import NavSection from "./NavSection";

export default function Header({mediaTablet, mediaDesktop, mediaBigScreen}) {
    return (
        <header className=' header'>
            <div className='container'>
                {(mediaTablet || mediaDesktop || mediaBigScreen) ?
                    <>
                        <LogSection/>
                        <NavSection mediaTablet={mediaTablet} mediaDesktop={mediaDesktop}
                                    mediaBigScreen={mediaBigScreen}/>
                    </>

                    :
                    <>
                        <NavSection mediaTablet={mediaTablet} mediaDesktop={mediaDesktop}
                                    mediaBigScreen={mediaBigScreen}/>
                        <LogSection/>
                    </>
                }


            </div>
        </header>
    )
}