import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

// import reducers
import polls from './ducks/polls';
import user from './ducks/user';

const defaultState = {
  polls: [],
  user: {
    current: {},
    loggedIn: false,
  },
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

export default store;
