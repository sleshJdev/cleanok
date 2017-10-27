import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";

import {AppComponent} from './app.component';
import {HttpService} from "./common/http/http.service";
import {LoginService} from "./common/login/login.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [HttpService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
