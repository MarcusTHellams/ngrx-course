import { map } from 'rxjs/operators';
import { LogoutAction } from './auth/auth.actions';
import { AppState } from './reducers/index';
import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import { Observable } from "rxjs";
import { isLoggedIn, isLoggedOut } from './auth/auth.selectors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loggedIn$: Observable<boolean>;
  loggedOut$: Observable<boolean>;


    constructor(private readonly store:Store<AppState>) {

    }

    ngOnInit() {
      this.loggedIn$ = this.store.select(isLoggedIn)

      this.loggedOut$ = this.store.select(isLoggedOut);

    }

  logout() {
    this.store.dispatch(new LogoutAction())
    }


}
