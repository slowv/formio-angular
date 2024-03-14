import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
  HttpClientModule
} from "@angular/common/http";

import {routes} from './app.routes';
import {en_US, NZ_I18N, provideNzI18n} from "ng-zorro-antd/i18n";
import {NZ_CONFIG, NzConfig} from "ng-zorro-antd/core/config";
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";
import {StoreModule} from "@ngrx/store";
import {rootReducer} from "./store/appState";
import {localStorageSyncReducer} from "./services/localStorage/localStorage";
import {Spinner} from "./services/interceptor/spinner/spinner.service";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {FormioAppConfig} from "@formio/angular";
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule} from '@angular/forms';

registerLocaleData(en);


const ngZorroConfig: NzConfig = {
  message: {
    nzMaxStack: 1
  }
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(
      [
        StoreModule.forRoot(
          rootReducer, {metaReducers: [localStorageSyncReducer]}
        ),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: false}),
      ]),
    {provide: HTTP_INTERCEPTORS, useClass: Spinner, multi: true},
    {provide: NZ_CONFIG, useValue: ngZorroConfig},
    provideNzI18n(en_US),
    importProvidersFrom(FormsModule),
    importProvidersFrom(HttpClientModule),
    provideAnimations()
  ]
};
