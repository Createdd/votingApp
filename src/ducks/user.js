// Actions
const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

// reducer
export default function Users(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.user,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
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
