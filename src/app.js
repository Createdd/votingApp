import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store';

export default function () {
  $(document).ready(() => {
    $('.parallax').parallax();
    $('.carousel').carousel({ dist: -70 });
    $('.button-collapse').sideNav({ draggable: false });
    $('.modal').modal();
  });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
	document.getElementById('root'),
);
