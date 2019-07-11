import { User } from "./../model/user.model";

export type AuthState = {
  loggedIn: Boolean;
  user: User;
};
