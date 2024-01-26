import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { interceptors } from './app.interceptors';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { reducers,metaReducers,  effects } from './store';
import { provideEffects } from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptors(interceptors)),
    provideStore(reducers, {metaReducers}),
    provideEffects(effects),
    importProvidersFrom(StoreDevtoolsModule.instrument())
  ]
};