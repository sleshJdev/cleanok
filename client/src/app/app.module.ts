import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";

import {AppComponent} from './app.component';
import {Http1Service} from "./common/http/http.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [Http1Service],
  bootstrap: [AppComponent]
})
export class AppModule {
}
