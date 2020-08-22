import React,{useState} from "react";
import LogSection from "./LogSection";
import NavSection from "./NavSection";

export default function Header({mediaTablet, mediaDesktop, mediaBigScreen, mediaSmall}) {

    const [burgerActive, setBurgerActive] = useState(false);

    return (
        <header className=' header'>
            <div className='container'>
                {(mediaTablet || mediaDesktop || mediaBigScreen) ?
                    <>
                        <LogSection mediaSmall={mediaSmall} burgerActive={burgerActive}/>
                        <NavSection mediaTablet={mediaTablet} mediaDesktop={mediaDesktop}
                                    mediaBigScreen={mediaBigScreen} active={burgerActive} setActive={setBurgerActive}/>
                    </>

                    :
                    <>
                        <NavSection mediaTablet={mediaTablet} mediaDesktop={mediaDesktop}
                                    mediaBigScreen={mediaBigScreen} active={burgerActive} setActive={setBurgerActive}/>
                        <LogSection mediaSmall={mediaSmall} burgerActive={burgerActive}/>
                    </>
                }


            </div>
        </header>
    )
}