import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../store/appState";
import {selectIsSignIn} from "../../store/selector/auth.selector";
import {map} from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {
  let store = inject(Store<AppState>);
  let router = inject(Router);
  return store.pipe(
    select(selectIsSignIn),
    map(isSignin => {
      if (isSignin) return true;
      router.navigate(['/login']);
      return false;
    })
  )
};
