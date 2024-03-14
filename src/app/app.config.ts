import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";

import {routes} from './app.routes';
import {en_US, provideNzI18n} from "ng-zorro-antd/i18n";
import {NZ_CONFIG, NzConfig} from "ng-zorro-antd/core/config";
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";
import {StoreModule} from "@ngrx/store";
import {rootReducer} from "./store/appState";
import {localStorageSyncReducer} from "./services/localStorage/localStorage";
import {Spinner} from "./services/interceptor/spinner/spinner.service";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule} from '@angular/forms';
import {tokenInvalid} from "./services/interceptor/token/invalid/token-invalid.interceptor";
import {tokenInterceptor} from "./services/interceptor/token/token.interceptor";
import {authGuard} from "./services/guard/auth.guard";
import {EffectsModule} from "@ngrx/effects";
import {appEffect} from "./store/appEffect";

registerLocaleData(en);


const ngZorroConfig: NzConfig = {
  message: {
    nzMaxStack: 1
  }
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      FormsModule,
      BrowserAnimationsModule,
      HttpClientModule,
      StoreModule.forRoot(
        rootReducer, {metaReducers: [localStorageSyncReducer]}
      ),
      StoreDevtoolsModule.instrument({maxAge: 25, logOnly: false}),
      EffectsModule.forRoot(appEffect)
    ]),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    {provide: HTTP_INTERCEPTORS, useClass: Spinner, multi: true},
    {provide: HTTP_INTERCEPTORS, useFactory: tokenInvalid, multi: true},
    {provide: HTTP_INTERCEPTORS, useFactory: tokenInterceptor, multi: true},
    {provide: NZ_CONFIG, useValue: ngZorroConfig},
    provideNzI18n(en_US)
  ]
};
