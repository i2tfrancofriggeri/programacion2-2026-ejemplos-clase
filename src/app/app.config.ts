import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // 2.2 y 2.3: opcional. Sin esta línea HttpClient funciona igual (viene provisto
    // por defecto); solo hace falta para configurarlo, en este caso para usar fetch.
    provideHttpClient(withFetch()),
  ],
};
