import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './Home';
import Footer from './Footer';
import Header from './Header';
import Lost from './Lost';
import Sidebar from './Sidebar';
import Polls from './Polls';

const App = () =>
  (<Router>
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Sidebar} />
        <Route exact path="/polls" component={Polls} />
        <Route path="/topics" component={Header} />
        <Route component={Lost} />
      </Switch>


      <Footer />
    </div>
  </Router>);
export default App;
