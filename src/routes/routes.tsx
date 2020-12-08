import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BreedScreen from '../screens/BreedScreen';
import HomeScreen from '../screens/HomeScreen';

export default function Routes(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/breed" component={BreedScreen} />
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    </Router>
  );
}
