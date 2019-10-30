import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SolveQuestion from './pages/SolveQuestion';
import QuestionsList from './pages/QuestionsList';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/solve" component={SolveQuestion} />
      <Route path="/questions" component={QuestionsList} />
    </Switch>
  );
}

export default Routes;
