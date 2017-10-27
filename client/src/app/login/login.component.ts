import {Component, OnInit} from '@angular/core';
import {LoginService} from '../common/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  ngOnInit() {
  }

  protected resolveContactType() {
    return this.selectedContactType === this.contactType.email ? 'email' : 'tel';
  }

  login() {
    this.loginService
      .login({
        [this.resolveContactType()]: this.credentials.contact,
        password: this.credentials.password
      }).subscribe();
  }

}
