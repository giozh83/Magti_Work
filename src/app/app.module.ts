import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { app_home_class } from './app_home/app_home.components';
import { app_server_class } from './app_server/app_server';
import { FirstComponent } from './first/first.component';



@NgModule({
  declarations: [
    AppComponent,
    app_home_class,
    app_server_class,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
