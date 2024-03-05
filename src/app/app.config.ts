import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from "@angular/common/http";

import { routes } from './app.routes';
import {en_US, NZ_I18N} from "ng-zorro-antd/i18n";
import {NZ_CONFIG, NzConfig} from "ng-zorro-antd/core/config";


const ngZorroConfig: NzConfig = {
  message: {
    nzMaxStack: 1
  }
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_CONFIG, useValue: ngZorroConfig }
  ]
};
