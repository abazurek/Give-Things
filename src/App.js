import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";

import Home from './components/Home/Home'
import LoginSite from "./components/LogRegisterSites/LogSite";
import RegisterSite from "./components/LogRegisterSites/RegisterSite";
import Header from "./components/Home/header/Header";


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
          </Switch>
      </Router>

  );
}

export default App;
