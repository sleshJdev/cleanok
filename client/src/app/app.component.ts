import {Component} from '@angular/core';
import {LoginService} from "./common/login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  protected contactType = {
    email: 'Email',
    phone: 'Phone',
  };
  protected selectedContactType;
  protected credentials = {
    contact: null,
    password: null,
  };

  constructor(private loginService: LoginService) {
    this.selectedContactType = this.contactType.email;
  }

  protected resolveContactType() {
    return this.selectedContactType === this.contactType.email ? 'email' : 'tel';
  }

  login() {
    this.loginService
      .login({
        [this.resolveContactType()]: this.credentials.contact,
        password: this.credentials.password
      })
      .subscribe();
  }

}
