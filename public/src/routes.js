import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Header from './components/HeaderC';
import Footer from './components/FooterC';

export default (
  <Route path="/" component={Header}>
    <IndexRoute component={Footer} />
  </Route>
);
