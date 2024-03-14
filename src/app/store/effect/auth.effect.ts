import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {AuthService} from "../../services/api/auth/auth.service";
import {SIGN_IN_REQUEST, SIGN_OUT_REQUEST, signInSuccess, signOutSuccess} from "../action/auth.action";
import {catchError, EMPTY, map, mergeMap} from "rxjs";
import {IAuthResponse, IUser} from "../../model/IAuthState";
import {HttpResponse} from "../../model/HttpResponse";

@Injectable()
export class AuthEffect {
  signInEffect = createEffect(() => {
    return this.actions$.pipe(
      ofType(SIGN_IN_REQUEST),
      mergeMap((user: IUser) => {
        return this.authService.login(user)
          .pipe(
            map((res: HttpResponse<IAuthResponse>) => {
              this.router.navigate(['/']);
              return signInSuccess({
                token: res.data.token,
                roles: res.data.roles,
                name: res.data.name
              });
            }),
            catchError(() => EMPTY)
          )
      })
    )
  })

  signOutEffect = createEffect(() => {
    return this.actions$.pipe(
      ofType(SIGN_OUT_REQUEST),
      map(() => {
        this.router.navigate(['/login']);
        return signOutSuccess();
      }),
      catchError(() => EMPTY));
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) { }
}
