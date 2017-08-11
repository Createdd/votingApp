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
      return [
        ...state,
        {
          question: action.question,
          answers: action.answers,
        },
      ];
    }
    case ADD_EDIT_POLL: {
      const addEditPoll = state.map((poll, ind) => {
        if (ind === action.questionInd) {
          return {
            ...poll,
            answers: poll.answers.concat(action.answers),
          };
        }

        return poll;
      });
      return addEditPoll;
    }
    case DELETE_POLL: {
      const removeQuestionList = [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
      return removeQuestionList;
    }
    case UPDATE_VOTES: {
      const updateVotesList = state.map((poll, ind) => {
        if (ind === action.questionId) {
          return {
            ...poll,
            answers: poll.answers.map((ans, index) => {
              if (index === action.answerIndex) {
                return { ...ans, votes: ans.votes + action.votes };
              }
              return ans;
            }),
          };
        }
        return poll;
      });
      return updateVotesList;
    }
    default:
      return state;
  }
}

// actionCreators
function receivePolls(polls) {
  return {
    type: FETCHED_POLLS,
    polls,
  };
}

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

export const removePoll = index => ({
  type: DELETE_POLL,
  index,
});

export const updateVotes = (questionId, answerIndex, votes) => ({
  type: UPDATE_VOTES,
  questionId,
  answerIndex,
  votes,
});

// Async actions with thunk
export function fetchPolls() {
  return dispatch =>
		axios
			.get('/api/polls')
			.then((res) => {
  dispatch(receivePolls(res.data));
				// console.log(res);
})
			.catch((err) => {
  console.warn(err);
});
}

export function postPoll(question, answers) {
  return dispatch =>
		axios
			.post('/api/polls/new', addPoll(question, answers))
			.then(dispatch(addPoll(question, answers)))
			.catch((error) => {
  console.warn(err);
});
}

export function postAnswer(url, questionId, answers) {
  return dispatch =>
		axios
			.post(`/api/polls/${url}/new`, { answer: answers[0].answer, votes: 1 })
			.then(dispatch(addEditPoll(questionId, answers)))
			.catch((error) => {
  console.warn(err);
});
}

export function postVote(url, aID, questionId, votes) {
  return dispatch =>
		axios
			.post(`/api/polls/${url}/${aID}/vote`)
			.then(dispatch(updateVotes(questionId, aID, votes)))
			.catch((error) => {
  console.warn(err);
});
}

export function deletePoll(index, url) {
  return dispatch =>
		axios.delete(`/api/polls/${url}`).then(dispatch(removePoll(index))).catch((error) => {
  console.warn(error);
});
}
