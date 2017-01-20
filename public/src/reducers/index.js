import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({ state: (state = {}) => state });

export default rootReducer;
