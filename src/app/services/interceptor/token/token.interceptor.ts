import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {AuthService} from "../../api/auth/auth.service";

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let authService = inject(AuthService);

  req.clone({
    setHeaders: {
      Authorization: `Bearer ${authService.getToken()}`,
    },
  })
  return next(req);
};
