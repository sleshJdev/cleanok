import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {HttpService} from './common/http/http.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SingInComponent} from './components/sign-in/sing-in.component';
import {AppRoutesModule} from './app-routes.module';
import {HomeComponent} from './components/home/home.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {CompanyComponent} from './components/company/company.component';
import {CompaniesComponent} from './components/company/list/companies.component';
import {MaterialModule} from './modules/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    HomeComponent,
    SignUpComponent,
    CompanyComponent,
    CompaniesComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutesModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
