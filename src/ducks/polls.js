// Actions
const ADD_POLL = 'polls/ADD_POLL';
const LOGIN = 'polls/LOGIN';
const LOGOUT = 'polls/LOGOUT';

// reducer
export default function Polls(state, action) {
  switch (action.type) {
    case ADD_POLL:
      const addPollsList = [
        ...state.polls,
        {
          question: action.question,
          answers: action.answers,
        },
      ];
      return {
        ...state,
        polls: addPollsList,
      };
    case LOGIN:
      return {
        ...state,
        loggedIn: true,
      };
      case LOGOUT:
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
}

// actionCreators
export const addPoll = (question, answers) => ({
  type: ADD_POLL,
  question,
  answers,
});

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});
