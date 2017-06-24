import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import reducers
import Polls from './ducks/polls';
import Users from './ducks/users';

import { ExamplePolls, ExampleUsers } from './data/ExampleData';

const defaultState = {
  polls: ExamplePolls,
  users: ExampleUsers,
  loggedIn: false,
};

const rootReducer = combineReducers({
  Polls,
  Users,
});

const store = createStore(
	Polls,
	defaultState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
