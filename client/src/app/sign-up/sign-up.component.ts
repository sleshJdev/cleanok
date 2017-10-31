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

  signUp() {
    this.httpService
      .signUp(this.user)
      .map(response => response.json())
      .subscribe(response => {
        alert(response.message);
        switch (response.verificationType) {
          case 'tel':
            this.httpService.verifyCode(
              this.user.tel,
              prompt('Enter verification code')
            ).subscribe(() => {
              alert('Ok');
            });
            break;
        }
      });
  }

}
