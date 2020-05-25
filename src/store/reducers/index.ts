import  * as AuthState from'../reducers/auth.reducer'
import { MetaReducer, ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';


export interface AppState {
    auth: AuthState.State;
  }
  
  export const reducers = {
    auth: AuthState.AuthReducer,
  };


  export const metaReducers: MetaReducer<any>[] = [localStorageSyncReducer];

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['auth'],
    rehydrate: true
  })(reducer);
}

  