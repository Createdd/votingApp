// Actions
const LOGIN_USER = 'user/LOGIN_USER';
const LOGOUT_USER = 'user/LOGOUT_USER';

// reducer
export default function Users(state, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}

// actionCreators
export const loginUser = (user, isLoggedIn) => ({
  type: LOGIN_USER,
  user,
  isLoggedIn,
});
export const logoutUser = (user, isLoggedIn) => ({
  type: LOGOUT_USER,
  user,
  isLoggedIn,
});
