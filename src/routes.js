import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SolveQuestion from './pages/SolveQuestion';
import QuestionsList from './pages/QuestionsList';
import Attempts from './pages/Attempts';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/questions" component={QuestionsList} />
      <Route path="/solve/:id" exact component={SolveQuestion} />
      <Route path="/attempts" exact component={Attempts} />
    </Switch>
  );
}

export default Routes;
