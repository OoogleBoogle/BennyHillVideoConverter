import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyDWXgwiTXtvYxB3jaDAU6-0GM9Y9nW2Zm0",
    authDomain: "benny-hill-video-converter.firebaseapp.com",
    databaseURL: "https://benny-hill-video-converter.firebaseio.com",
    storageBucket: "benny-hill-video-converter.appspot.com",
  })
]);

