import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PollsReducer from './reducerPolls';

const rootReducer = combineReducers({ polls: PollsReducer, form: formReducer });

export default rootReducer;
