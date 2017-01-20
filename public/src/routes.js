import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Header from './HeaderC.js';
import Footer from './FooterC.js';
import Welcome from './WelcomeC.js';
import SignUp from './SignUpC.js';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Welcome} />
    <Route path="/signup" component={SignUp} />
  </Route>
);
