import React from 'react';
import { Redirect } from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import { Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/'exact>
          <Users/>
        </Route>
        <Route path="/places/new1" exact>
          <NewPlace/>
        </Route>
        <Redirect to="/"/>
      </Switch>
  </Router>
  );
};

export default App;
