import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {inject} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../store/appState";
import {Router} from "@angular/router";
import {catchError} from "rxjs";
import {signOutRequest} from "../../../../store/action/auth.action";

export const tokenInvalid: HttpInterceptorFn = (req, next) => {
  let store = inject(Store<AppState>);
  let router = inject(Router);

  return next(req)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401 || err.status === 403) {
          store.dispatch(signOutRequest());
          store.dispatch(signOutRequest());
          router.navigate(['/login']);
        }
        return next(req);
      })
    );
};
