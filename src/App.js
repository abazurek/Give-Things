import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Switch} from 'react-router'


import Home from './components/Home/Home'
import LoginSite from "./components/LogRegisterSites/LogSite";
import RegisterSite from "./components/LogRegisterSites/RegisterSite";
import Header from "./components/Home/header/Header";
import LogOut from "./components/LogOut";
import GiveThingsAll from "./components/GiveThingsSite/GiveThingsAll";
import {useMediaQuery} from "react-responsive";


function App() {

    const isTablet = useMediaQuery({
        query: '(min-device-width: 768px) and (max-device-width: 1223px)'
    });
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });
    const isBigScreen = useMediaQuery({
        query:'(min-device-width:1371px)'
    });

  return (
      <Router>
          <Header mediaTablet={isTablet} mediaDesktop={isDesktopOrLaptop} mediaBigScreen={isBigScreen}/>
          <Switch>
              <Route exact path='/'>
                  <Home/>
              </Route>
              <Route path='/login'>
                  <LoginSite/>
              </Route>
              <Route path='/register'>
                  <RegisterSite/>
              </Route>
              <Route path='/logOut'>
                  <LogOut/>
              </Route>
              <Route path='/giveThings'>
                  <GiveThingsAll/>
              </Route>
          </Switch>
      </Router>

  );
}

export default App;
