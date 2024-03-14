import {inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {hideSpinner, showSpinner} from "../../../store/action/config.action";
import {AppState} from "../../../store/appState";

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  let totalRequests = 0;
  let store = inject(Store<AppState>);
  totalRequests++;
  store.dispatch(showSpinner());
  return next(req)
    .pipe(
      finalize(() => {
        totalRequests--;
        if (totalRequests === 0) {
          setTimeout(() => {
            store.dispatch(hideSpinner());
          }, 500);
        }
      })
    )
}
