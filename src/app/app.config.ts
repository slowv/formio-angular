import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi} from "@angular/common/http";

import {routes} from './app.routes';
import {en_US, NZ_I18N} from "ng-zorro-antd/i18n";
import {NZ_CONFIG, NzConfig} from "ng-zorro-antd/core/config";
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";
import {StoreModule} from "@ngrx/store";
import {rootReducer} from "./store/appState";
import {localStorageSyncReducer} from "./services/localStorage/localStorage";
import {Spinner} from "./services/interceptor/spinner/spinner.service";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {FormioAppConfig} from "@formio/angular";


const ngZorroConfig: NzConfig = {
  message: {
    nzMaxStack: 1
  }
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(BrowserAnimationsModule),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(
      [
        StoreModule.forRoot(
          rootReducer, {metaReducers: [localStorageSyncReducer]}
        ),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }),
      ]
    ),
    {provide: NZ_I18N, useValue: en_US},
    {provide: HTTP_INTERCEPTORS, useClass: Spinner, multi: true},
    {provide: NZ_CONFIG, useValue: ngZorroConfig}
  ]
};
