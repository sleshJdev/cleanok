import {Component, OnInit} from '@angular/core';
import {HttpService} from '../common/http/http.service';
import {Role} from '../enum/role.enum';
import {Router} from '@angular/router';

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

  constructor(private httpService: HttpService,
              private router: Router) {
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
      })
      .subscribe((userDetails) => {
        const role: string = userDetails.role;
        switch (Role[role]) {
          case Role.admin:
            this.router.navigateByUrl('/admin');
            break;
        }
      });
  }

}
