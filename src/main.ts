import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_ROUTE_PROVIDER } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent);

