import {Component, OnInit} from '@angular/core';
import {HttpService} from '../common/http/http.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  protected user: any = {};
  protected userPassword: string = null;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
  }

  singUp() {
    this.httpService.signUp(this.user)
      .subscribe();
  }

}
