import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {hideSpinner, showSpinner} from "../../../store/action/config.action";
import {AppState} from "../../../store/appState";

@Injectable({
  providedIn: 'root'
})
export class Spinner implements HttpInterceptor {

  totalRequests = 0;

  constructor(private store: Store<AppState>) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.totalRequests++;
    this.store.dispatch(showSpinner());

    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests === 0) {
          setTimeout(() => {
            this.store.dispatch(hideSpinner());
          }, 500);
        }
      })
    );

  }
}
