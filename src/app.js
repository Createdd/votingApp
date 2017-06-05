import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


$(document).ready(function(){
      $('.parallax').parallax();
      $('.button-collapse').sideNav();
      $('.carousel').carousel({dist: -70});      
});


ReactDOM.render(<App />, document.getElementById('root'));