import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BreedLayout from '../layouts/BreedLayout';
import HomeLayout from '../layouts/HomeLayout';

export default function Routes(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/breed" component={BreedLayout} />
        <Route exact path="/" component={HomeLayout} />
      </Switch>
    </Router>
  );
}
