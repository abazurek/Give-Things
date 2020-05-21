import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";

import Home from './components/Home/Home'
import LoginSite from "./components/LogSite";
import RegisterSite from "./components/RegisterSite";

function App() {
  return (
      <Router>
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
