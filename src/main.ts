import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SplashScreen } from "@capacitor/splash-screen";

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

// PARA EL SPLASH SCREEN

document.addEventListener('DOMContentLoaded', async () => {
  await SplashScreen.show({
    showDuration: 4000,
    autoHide: true, // default false
  })
})
