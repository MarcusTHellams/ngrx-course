import { AuthState } from './auth-state';
import * as Auth from './auth.actions';


export const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
};

export function authReducer(state = initialAuthState, action: Auth.AuthActions): AuthState {
  const { type, payload } = action;
  switch (type) {

    case Auth.AuthActionTypes.LoginAction:
      return {
        ...state,
        loggedIn: true,
        user: payload
      }
    case Auth.AuthActionTypes.LogoutAction:
      return {
        ...state,
        loggedIn: false,
        user: undefined
      }

    default:
      return state;
  }
}
