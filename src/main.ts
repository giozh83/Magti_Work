import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import { app_home_class } from './app/app_home/app_home.components';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
