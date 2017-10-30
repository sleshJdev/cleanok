import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SingInComponent} from './sing-in/sing-in.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'sing-in', component: SingInComponent},
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
