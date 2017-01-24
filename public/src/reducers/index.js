import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({ polls: PollsReducer });

export default rootReducer;
