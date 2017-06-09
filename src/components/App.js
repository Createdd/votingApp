import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';
import Footer from './Footer';
import Header from './Header';

const BasicExample = () =>
  (<Router>
    <div>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={Footer} />
      <Route path="/topics" component={Header} />
      
      <Footer />
    </div>
  </Router>);
export default BasicExample;
