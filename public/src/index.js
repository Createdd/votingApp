import React from 'react';
import ReactDOM from 'react-dom';
import style from '../styles/style';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise-middleware';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router hoistory={browserHistory} routes={routes} />
  </Provider>,
  document.querySelectors('#container')
);
