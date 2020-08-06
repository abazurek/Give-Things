import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Switch} from 'react-router'


import Home from './components/Home/Home'
import LoginSite from "./components/LogRegisterSites/LogSite";
import RegisterSite from "./components/LogRegisterSites/RegisterSite";
import Header from "./components/Home/header/Header";
import LogOut from "./components/LogOut";
import GiveThingsAll from "./components/GiveThingsSite/GiveThingsAll";


function App() {
  return (
      <Router>
          <Header/>
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
