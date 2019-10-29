import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Question from './pages/Question';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/question" component={Question} />
    </Switch>
  );
}

export default Routes;
