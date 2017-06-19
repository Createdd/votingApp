// Actions
const ADD_POLL = 'src/components/NewPoll';

// reducer
export default function reducer(
  state = {
    polls: [],
  },
  action,
) {
  console.log(state, action);
  return state;
}
// {
//   switch (action.type) {
//     case ADD_POLL:
//       return { ...state, added: true };
//     default:
//       return state;
//   }
// }

// actionCreators
export function addPoll() {
  return {
    type: ADD_POLL,
    text,
  };
}
