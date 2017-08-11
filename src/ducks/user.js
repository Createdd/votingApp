import axios from 'axios';

// Actions
const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';
const FETCH_USER = 'user/FETCH_USER';

// reducer
export default function Users(state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      const temp = () => {
        if (action.users === undefined) {
          return false;
        }
        return true;
      };
      return {
        current: action.users,
        loggedIn: temp(),
      };
    case LOGIN:
      return {
        ...state,
        ...action.user,
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
export const login = user => ({
  type: LOGIN,
  user,
});
export const logout = user => ({
  type: LOGOUT,
  user,
});
export const receiveUser = users => ({
  type: FETCH_USER,
  users,
});

// Async actions with thunk
export function fetchUser() {
  return dispatch =>
		axios
			.get('/api/profile')
			.then((res) => {
  dispatch(receiveUser(res.data.user));
  // console.log(res);
})
			.catch((err) => {
  console.warn(err);
});
}

export function logoutUser() {
  return dispatch =>
		axios
			.get('/api/logout')
			.then((res) => {
  dispatch(logout(res.data.user));
  // console.log(res);
})
			.catch((err) => {
  console.warn(err);
});
}
