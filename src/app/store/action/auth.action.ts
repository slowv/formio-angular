import { createAction, props } from '@ngrx/store';
import {IToken, IUser} from "../../model/IAuthState";

//Sign in request
export const SIGN_IN_REQUEST = '[Auth] SignIn';
export const signInRequest = createAction(SIGN_IN_REQUEST, props<IUser>());

// Sign in success
export const SIGN_IN_SUCCESS = '[Auth] SignIn Success';
export const signInSuccess  = createAction(SIGN_IN_SUCCESS, props<IToken>());

// Sign in failure
export const SIGN_IN_FAILURE = '[Auth] SignIn Failure';
export const signInFailure = createAction(SIGN_IN_FAILURE);

// Sign out request
export const SIGN_OUT_REQUEST = '[Auth] SignOut';
export const signOutRequest = createAction(SIGN_OUT_REQUEST);

// Sign out success
export const SIGN_OUT_SUCCESS = '[Auth] SignOut Success';
export const signOutSuccess = createAction(SIGN_OUT_SUCCESS);

// Sign out failure
export const SIGN_OUT_FAILURE = '[Auth] SignOut Failure';
export const signOutFailure = createAction(SIGN_OUT_FAILURE);

// Sign up request
export const SIGNUP_REQUEST = '[Auth] SignUp';
export const signUpRequest = createAction(SIGNUP_REQUEST, props<IUser>());

// Signup success
export const SIGNUP_SUCCESS = '[Auth] SignUp Success';
export const signUpSuccess = createAction(SIGNUP_SUCCESS, props<IUser>());

// Signup Failure
export const SIGNUP_FAILURE = '[Auth] SignUp Failure';
export const signUpFailure = createAction(SIGNUP_FAILURE);

export const authAction = {
  SIGN_IN_REQUEST,
  signInRequest,
  SIGN_IN_SUCCESS,
  signInSuccess,
  SIGN_IN_FAILURE,
  signInFailure,
  SIGN_OUT_REQUEST,
  signOutRequest,
  SIGN_OUT_SUCCESS,
  signOutSuccess,
  SIGN_OUT_FAILURE,
  signOutFailure,
  SIGNUP_REQUEST,
  signUpRequest,
  SIGNUP_SUCCESS,
  signUpSuccess,
  SIGNUP_FAILURE,
  signUpFailure
}
