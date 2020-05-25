import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers/auth.reducer';


export const AuthFeatureState = createFeatureSelector<State>("auth");


export const authSelector = createSelector(
    AuthFeatureState,
    (state) => state.auth
)
