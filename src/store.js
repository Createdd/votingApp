import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import reducers
import polls from './ducks/polls';
import user from './ducks/user';

// defaultState
import { ExamplePolls, ExampleUser } from './data/ExampleData';

const defaultState = {
  polls: ExamplePolls,
  user: {},
};

const rootReducer = combineReducers({
  polls,
  user,
});

const store = createStore(
	rootReducer,
	defaultState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
