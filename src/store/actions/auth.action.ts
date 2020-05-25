
import { createAction, props } from '@ngrx/store';
import {AuthActionTypes} from '../models/auth.model'

export const GetAuthDetailsAction = createAction(AuthActionTypes.getAuthDetailsStart, props<{id: string}>())
export const GetAuthDetailsSuccessAction = createAction(AuthActionTypes.getAuthDetailsSuccess,props<{response: any}>())

export const ErrorAction = createAction(AuthActionTypes.errorAction, props<Error>())