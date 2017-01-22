import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './Components/AppC.js';
import Header from './Components/HeaderC.js';
import Footer from './Components/FooterC.js';
import Welcome from './Components/WelcomeC.js';
import SignUp from './Components/SignUpC.js';
import Login from './Components/LoginC.js';
import Lost from './Components/LostC.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="*" component={Lost} />
  </Route>
);
