import { AuthActionTypes, LoginAction, LogoutAction, AuthActions } from "./auth.actions";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { defer, of } from "rxjs";

@Injectable()
export class AuthEffects {
  @Effect({ dispatch: false })
  loggedIn$ = this.actions$.pipe(
    ofType<LoginAction>(AuthActionTypes.LoginAction),
    tap((action: LoginAction) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
    })
  );

  @Effect({ dispatch: false })
  loggedOut$ = this.actions$.pipe(
    ofType<LogoutAction>(AuthActionTypes.LogoutAction),
    tap(() => {
      localStorage.removeItem("user");
      this.router.navigateByUrl("/login");
    })
  );

  @Effect({dispatch:true})
  init$ = defer(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      return of(new LoginAction(JSON.parse(userData)))
    }
    else {
      return of(new LogoutAction());
    }
  });

  constructor(private actions$: Actions, private readonly router: Router) {}
}
