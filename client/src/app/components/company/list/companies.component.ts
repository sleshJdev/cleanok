import { Component, OnInit } from '@angular/core';
import {UserStatus} from '../../../enum/user-status.enum';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  protected companies: any[];

  constructor() { }

  ngOnInit() {
    this.companies = [{
      title: 'Big Brothers',
      email: 'bigbrothers@mail.com',
      status: UserStatus[UserStatus.active],
      comment: null
    }, {
      title: 'Electronic Airlines',
      email: 'eairlines@mail.com',
      status: UserStatus[UserStatus.active],
      comment: null
    }, {
      title: 'Martin Cookies',
      email: 'martincookies@mail.com',
      status: UserStatus[UserStatus.block],
      comment: 'Terms of User violation'
    }]
  }

  isBlock(company) {
    return company.status === UserStatus[UserStatus.block];
  }
}
