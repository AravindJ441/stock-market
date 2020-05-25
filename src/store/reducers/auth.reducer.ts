import { createReducer, on, Action } from "@ngrx/store";
import { GetAuthDetailsSuccessAction } from '../actions/auth.action';

export  class State  {
    auth: any

}
export const AuthenticationState : State  ={
    auth: {}

}





const reducer = createReducer(AuthenticationState,
    on(GetAuthDetailsSuccessAction, (state: State) => {
        return {...state, auth: state.auth}
    })
)

export function AuthReducer(state: State, action: Action) {
    return reducer(state,action)
}