import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './Components/AppC.js';
import Header from './Components/HeaderC.js';
import Footer from './Components/FooterC.js';
import Welcome from './Components/WelcomeC.js';
import SignUp from './Components/SignUpC.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="/signup" component={SignUp} />
  </Route>
);
