import { authReducer } from './../auth/auth.reducer';
import { AuthState } from './../auth/auth-state';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface AppState {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
    auth: authReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
