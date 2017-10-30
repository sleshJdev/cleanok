import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SingInComponent} from './sign-in/sing-in.component';
import {HomeComponent} from './home/home.component';
import {SignUpComponent} from './sign-up/sign-up.component';

const routes: Routes = [
  {path: 'sing-in', component: SingInComponent},
  {path: 'sing-up', component: SignUpComponent},
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
