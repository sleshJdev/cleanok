import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SingInComponent} from './components/sign-in/sing-in.component';
import {HomeComponent} from './components/home/home.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {CompanyComponent} from './components/company/company.component';
import {CompaniesComponent} from './components/company/list/companies.component';

const routes: Routes = [
  {path: 'sing-in', component: SingInComponent},
  {path: 'sing-up', component: SignUpComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: '', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule {

}
