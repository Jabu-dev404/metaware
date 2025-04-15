import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
<<<<<<< HEAD
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes,
     withComponentInputBinding(), withRouterConfig({
      paramsInheritanceStrategy:'always'
     }))]
=======
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes,withComponentInputBinding(),withRouterConfig({paramsInheritanceStrategy : "always"}))]
>>>>>>> 577e12fbef2163432f2fd92011ac666da3535022
};
