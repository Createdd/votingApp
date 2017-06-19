import { applyMiddleware, createStore, combineReducers } from 'redux';

// import reducers
import ducks from './ducks/polls';

import { ExamplePolls, ExampleUsers } from './data/ExampleData';

const defaultState = {
  polls: ExamplePolls,
  users: ExampleUsers,
};

const store = createStore(
	ducks,
	defaultState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
