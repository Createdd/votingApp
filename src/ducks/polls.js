// Actions
const ADD_POLL = 'polls/ADD_POLL';

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
