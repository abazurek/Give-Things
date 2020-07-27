import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from './components/Home/Home'
import LoginSite from "./components/LogRegisterSites/LogSite";
import RegisterSite from "./components/LogRegisterSites/RegisterSite";
import Header from "./components/Home/header/Header";
import LogOut from "./components/LogOut";
import GiveThingsAll from "./components/GiveThingsSite/GiveThingsAll";
import {createBrowserHistory} from 'history'


export  const history = createBrowserHistory();


function App() {
  return (
      <Router history={history}>
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
