import React from 'react';
import ReactDOM from 'react-dom';
import Header from './HeaderC.js';
import Footer from './FooterC.js';
import Welcome from './WelcomeC.js';
import SignUp from './SignUpC.js';

$(document).ready(function() {
  $('.parallax').parallax();
  $('.button-collapse').sideNav();
});

class Main extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
        <SignUp />
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
ReactDOM.render(<Main />, document.getElementById('main'));
