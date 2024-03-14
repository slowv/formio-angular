import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi
} from "@angular/common/http";

import {routes} from './app.routes';
import {en_US, provideNzI18n} from "ng-zorro-antd/i18n";
import {NZ_CONFIG, NzConfig, provideNzConfig} from "ng-zorro-antd/core/config";
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";
import {StoreModule} from "@ngrx/store";
import {rootReducer} from "./store/appState";
import {localStorageSyncReducer} from "./services/localStorage/localStorage";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule} from '@angular/forms';
import {tokenInvalid} from "./services/interceptor/token/invalid/token-invalid.interceptor";
import {tokenInterceptor} from "./services/interceptor/token/token.interceptor";
import {EffectsModule} from "@ngrx/effects";
import {appEffect} from "./store/appEffect";
import {spinnerInterceptor} from "./services/interceptor/spinner/spinner.service";

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
    provideHttpClient(
      withInterceptors(
        [
          spinnerInterceptor,
          tokenInvalid,
          tokenInterceptor
        ]
      )
    ),
    provideNzI18n(en_US),
    provideNzConfig(ngZorroConfig)
  ]
};
