import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {CategoryEffects} from './features/admin/categories/stores/category.effects';
import {categoryFeature} from './features/admin/categories/stores/category.reducer';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      categories: categoryFeature.reducer
    }),
    provideEffects(CategoryEffects),
    provideStoreDevtools({ maxAge: 25 }),
    provideHttpClient()
  ],
};
