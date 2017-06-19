// Actions
const ADD_POLL = 'src/components/NewPoll';

// reducer
export default function Polls(state, action) {
  switch (action.type) {
    default:
      return state;

		// {
		//
		//     case ADD_POLL:
		//       return { ...state, added: true };
		//     default:
		//       return state;
		//   }
  }
}

// actionCreators
export const addPoll = () => ({
  type: ADD_POLL,
  text,
});
