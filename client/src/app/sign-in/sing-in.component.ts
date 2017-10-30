import {Component, OnInit} from '@angular/core';
import {HttpService} from '../common/http/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  protected contactType = {
    email: 'Email',
    phone: 'Phone',
  };
  protected selectedContactType;
  protected credentials = {
    contact: null,
    password: null,
  };

  constructor(private httpService: HttpService) {
    this.selectedContactType = this.contactType.email;
  }

  ngOnInit() {
  }

  protected resolveContactType() {
    return this.selectedContactType === this.contactType.email ? 'email' : 'tel';
  }

  login() {
    this.httpService
      .singIn({
        [this.resolveContactType()]: this.credentials.contact,
        password: this.credentials.password
      }).subscribe();
  }

}
