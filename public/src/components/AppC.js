import React from 'react';
import Header from './HeaderC.js';
import Footer from './FooterC.js';
import Welcome from './WelcomeC.js';
import SignUp from './SignUpC.js';
import Login from './LoginC.js';

$(document).ready(function() {
  $('.parallax').parallax();
  $('.button-collapse').sideNav();
  $('.carousel').carousel({dist: -70});
});

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
