import { FETCH_ALL_POLLS, FETCH_SINGLE_POLL } from '../actions/index';

const INITIAL_STATE = { all: [], singlePoll: {} };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_ALL_POLLS:
      return { ...state, all: action.payload.data };
    case FETCH_SINGLE_POLL:
      return { ...state, singlePoll: action.payload.data };
    default:
      return state;
  }
}
