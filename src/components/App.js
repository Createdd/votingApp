import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './Home';
import Footer from './Footer';
import Header from './Header';
import Lost from './Lost';
import Signin from './Signin';

const App = () =>
  (<Router>
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route path="/topics" component={Header} />
        <Route component={Lost} />
      </Switch>


      <Footer />
    </div>
  </Router>);
export default App;
