import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

$(document).ready(() => {
  $('.parallax').parallax();
  $('.button-collapse').sideNav();
  $('.carousel').carousel({ dist: -70 });
  $(".button-collapse").sideNav();
});

ReactDOM.render(<App />, document.getElementById('root'));
