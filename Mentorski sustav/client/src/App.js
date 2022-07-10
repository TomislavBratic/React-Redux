import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import HomePredmet from './components/HomePredmet/HomePredmet';
import HomeUpisi from './components/HomeUpisi/homeUpisi';
import HomeTest from './components/Test/HomeTest';

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/predmet" exact component={HomePredmet} />
        <Route path="/upisi" exact component={HomeUpisi} />
        <Route path="/Test" exact component={HomeTest} />
        
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
