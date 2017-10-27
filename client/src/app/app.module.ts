import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HttpService} from './common/http/http.service';
import {LoginService} from './common/login/login.service';
import {FormsModule} from '@angular/forms';
import AppConfig from './config/app.config';
import {LoginComponent} from './login/login.component';
import AppRoutesModule from './app-routes.module';
import {HomeComponent} from './home/home.component';

//todo: resolve compilation error: Cannot use 'in' operator to search for 'providers' in null

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutesModule
  ],
  providers: [HttpService, LoginService, AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule {
}
