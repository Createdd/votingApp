import axios from 'axios';

// Actions
const FETCHED_POLLS = 'polls/FETCHED_POLLS';
const ADD_POLL = 'polls/ADD_POLL';
const ADD_EDIT_POLL = 'polls/ADD_EDIT_POLL';
const DELETE_POLL = 'polls/DELETE_POLL';
const UPDATE_VOTES = 'polls/UPDATE_VOTES';

// reducer
export default function Polls(state = [], action) {
  switch (action.type) {
    case FETCHED_POLLS:
      return action.polls;
    case ADD_POLL: {
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
    }
    case ADD_EDIT_POLL: {
      const addEditPoll = state.polls.map((poll, ind) => {
        if (ind === action.questionInd) {
          return {
            ...poll,
            answers: poll.answers.concat(action.answers),
          };
        }

        return poll;
      });
      return {
        ...state,
        polls: addEditPoll,
      };
    }
    case DELETE_POLL: {
      const removeQuestionList = [
        ...state.polls.slice(0, action.index),
        ...state.polls.slice(action.index + 1),
      ];
      return {
        ...state,
        polls: removeQuestionList,
      };
    }
    case UPDATE_VOTES: {
      const updateVotesList = state.polls.map((poll, ind) => {
        if (ind === action.question) {
          return {
            ...poll,
            answers: poll.answers.map((ans, index) => {
              if (index === action.index) {
                return { ...ans, votes: ans.votes + action.votes };
              }
              return ans;
            }),
          };
        }
        return poll;
      });
      return {
        ...state,
        polls: updateVotesList,
      };
    }
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

export const addEditPoll = (questionInd, answers) => ({
  type: ADD_EDIT_POLL,
  questionInd,
  answers,
});

export const deletePoll = index => ({
  type: DELETE_POLL,
  index,
});

export const updateVotes = (question, index, votes) => ({
  type: UPDATE_VOTES,
  question,
  index,
  votes,
});

function receivePolls(polls) {
  return {
    type: FETCHED_POLLS,
    polls,
  };
}

export function fetchPolls() {
  return dispatch => axios
			.get('/api/polls')
			.then((response) => {
  dispatch(receivePolls(response.data));
  console.log(response);
})
			.catch((error) => {
  console.log(error);
});
}
