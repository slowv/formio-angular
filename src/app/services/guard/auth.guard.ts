import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../store/appState";
import {selectIsSignIn} from "../../store/selector/auth.selector";
import {tap} from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {
  let store = inject(Store<AppState>);
  let router = inject(Router);
  return store.pipe(
    select(selectIsSignIn),
    tap(isSignIn => isSignIn ? true : router.navigate(['/login']))
  )
};
