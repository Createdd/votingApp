// Actions
const ADD_POLL = 'polls/ADD_POLL';
const DELETE_POLL = 'polls/DELETE_POLL';
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
    case DELETE_POLL:
      const removeQuestionList = [
        ...state.polls.slice(0, action.index),
        ...state.polls.slice(action.index + 1),
      ];
      return {
        ...state,
        polls: removeQuestionList,
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

export const deletePoll = index => ({
  type: DELETE_POLL,
  index,
});

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});
