import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {HttpService} from './common/http/http.service';
import {FormsModule} from '@angular/forms';
import {SingInComponent} from './sign-in/sing-in.component';
import {AppRoutesModule} from './app-routes.module';
import {HomeComponent} from './home/home.component';
import {SignUpComponent} from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    HomeComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutesModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
