import { Router } from '@angular/router';
import { AppState } from './../reducers/index';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { isLoggedIn } from './auth.selectors';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private readonly store:Store<AppState>, private readonly router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(isLoggedIn)
      .pipe(tap(
        loggedIn => {
          if (!loggedIn) {
            this.router.navigateByUrl('/login');
          }
        }
      ));
   }
}
