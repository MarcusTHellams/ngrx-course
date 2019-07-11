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
}

export const reducers: ActionReducerMap<AppState> = {
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
