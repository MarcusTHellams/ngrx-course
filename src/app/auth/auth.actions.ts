import { User } from './../model/user.model';
import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LoginAction = '[Login] Action',
  LogoutAction = '[Logout] Action',

}

export class LoginAction implements Action {
  readonly type = AuthActionTypes.LoginAction;
  constructor(public payload: User) { }
}

export class LogoutAction implements Action {
  readonly type = AuthActionTypes.LogoutAction;
  constructor(public payload?) { }
}


export type AuthActions = LoginAction | LogoutAction;
