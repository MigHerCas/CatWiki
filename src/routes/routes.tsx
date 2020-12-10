import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BreedDetailLayout from '../layouts/BreedDetailLayout';
import HomeLayout from '../layouts/HomeLayout';

export default function Routes(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/breed" component={BreedDetailLayout} />
        <Route exact path="/" component={HomeLayout} />
      </Switch>
    </Router>
  );
}
