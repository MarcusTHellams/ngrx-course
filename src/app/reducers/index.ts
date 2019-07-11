import { authReducer } from "./../auth/auth.reducer";
import { AuthState } from "./../auth/auth-state";
import { storeFreeze } from "ngrx-store-freeze";
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import { routerReducer } from "@ngrx/router-store";

export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {
  router:routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [storeFreeze]
  : [];
