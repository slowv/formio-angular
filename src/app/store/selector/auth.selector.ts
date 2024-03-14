import {createSelector} from "@ngrx/store";
import {AppState} from "../appState";
import {IAuthState} from "../../model/IAuthState";

export const selectIsSignIn = createSelector(
  (state: AppState) => state.auth,
  (state: IAuthState) => state.isSignIn
)
