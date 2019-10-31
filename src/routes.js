import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SolveQuestion from './pages/SolveQuestion';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/solve/:id" exact component={SolveQuestion} />
    </Switch>
  );
}

export default Routes;
