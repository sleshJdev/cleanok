import {Component, OnInit} from '@angular/core';
import {UserStatus} from '../../enum/user-status.enum';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  protected company: any = {
    logo: null,
    title: null,
    description: null,
    services: [],
  };

  constructor() {
  }

  ngOnInit() {

  }


}
