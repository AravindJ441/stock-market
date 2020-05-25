import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { AuthActionTypes } from '../models/auth.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { GetAuthDetailsAction, GetAuthDetailsSuccessAction, ErrorAction } from '../actions/auth.action'
import { of } from 'rxjs';


@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthenticationService) {}

    @Effect()
    AuthEffects$ = this.actions$.pipe(
        ofType(AuthActionTypes.getAuthDetailsStart),
        switchMap((action: any) => {
            console.log(action, 'actionss')
            this.authService.setIdOfUser(action.id)
            return this.authService.getIdOfUser().pipe(
                map((res: any) => {
                    console.log(res, "effects response")
                    return GetAuthDetailsSuccessAction({ response: res })
                }),
                catchError((error: Error) => {
                    return of(ErrorAction(error));
                })
            )
        })
    );

}



