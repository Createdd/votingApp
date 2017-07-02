import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

// import reducers
import polls from './ducks/polls';
import user from './ducks/user';

// defaultState
import { ExamplePolls, ExampleUser } from './data/ExampleData';

const defaultState = {
  polls: [],
  user: {},
};

const rootReducer = combineReducers({
  polls,
  user,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	defaultState,
	composeEnhancers(applyMiddleware(thunkMiddleware)),
);

// const store = createStore(
// 	rootReducer,
// 	defaultState,
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// 	applyMiddleware(thunkMiddleware),

// );

export default store;
