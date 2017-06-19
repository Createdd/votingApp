import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store';

$(document).ready(() => {
  $('.parallax').parallax();
  $('.button-collapse').sideNav();
  $('.carousel').carousel({ dist: -70 });
  $('.button-collapse').sideNav();
  $('.modal').modal();
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
	document.getElementById('root'),
);
