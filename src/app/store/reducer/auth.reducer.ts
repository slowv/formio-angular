import {Action, createReducer, on} from "@ngrx/store";
import {IAuthState, InitAuthData} from "../../model/IAuthState";
import {signInFailure, signInSuccess, signOutFailure, signOutSuccess} from "../action/auth.action";

export const registerAuthReducer = createReducer(
  InitAuthData,
  on(signInSuccess, (state: IAuthState, user) => {
    return {
      ...state,
      isSignIn: true,
      token: user.token,
      roles: user.roles,
      user: {
        displayName: user.name
      }
    }
  }),
  on(signInFailure, state => ({
      ...state,
      isSignIn: false,
      token: '',
    })
  ),
  on(signOutSuccess, state => ({
    ...state,
    isSignIn: false,
    token: '',
    user: {},
    roles: []
  })),
  on(signOutFailure, state => ({...state, isSignIn: true})),
);

export function authReducer(state: IAuthState | undefined, action: Action): any {
  return registerAuthReducer(state, action);
}
