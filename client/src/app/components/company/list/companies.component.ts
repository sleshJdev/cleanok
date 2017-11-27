import { Component, OnInit } from '@angular/core';
import {UserStatus} from '../../../enum/user-status.enum';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  protected displayedColumns = ['position', 'email', 'status'];
  protected companies;

  constructor() { }

  ngOnInit() {
    this.companies = new MatTableDataSource([{
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
    }]);
  }

  isBlock(company) {
    return company.status === UserStatus[UserStatus.block];
  }
}
