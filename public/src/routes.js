import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/AppC.js';
import Header from './components/HeaderC.js';
import Footer from './components/FooterC.js';
import Welcome from './components/WelcomeC.js';
import SignUp from './components/SignUpC.js';
import Login from './components/LoginC.js';
import Lost from './components/LostC.js';
import AllPolls from './containers/allPolls.js';
import PollResult from './containers/pollResult.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="/polls" component={AllPolls} />
    <Route path="/chart" component={PollResult} />
    <Route path="*" component={Lost} />
  </Route>
);
