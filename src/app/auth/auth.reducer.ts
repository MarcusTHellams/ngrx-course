import { AuthActionTypes } from './auth.actions';
import { AuthState } from './auth-state';

const initialState:AuthState = {
  loggedIn: false,
  user: undefined
}

export const authReducer = (state: AuthState = initialState, action): AuthState => {
  const { type, payload } = action;
  switch (type) {
    case AuthActionTypes.LoginAction:
      return {
        ...state,
        loggedIn: true,
        user: payload.user
      }
    default:
      return state;
  }
 };


