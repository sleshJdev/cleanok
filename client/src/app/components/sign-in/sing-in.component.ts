import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../common/http/http.service';
import {Role} from '../../enum/role.enum';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const TEL_REGEX = /^\+\d{9,15}$/;

@Component({
  selector: 'app-login',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  protected options: FormGroup;
  protected contactType = 'email';

  constructor(private httpService: HttpService,
              private router: Router,
              private formBuilder: FormBuilder) {
    this.options = formBuilder.group({
      contact: new FormControl('', [
        Validators.required,
        (control: AbstractControl): { [key: string]: any } => {
          const pattern = this.contactType === 'email' ? EMAIL_REGEX : TEL_REGEX;
          if (pattern.test(control.value)) {
            return null;
          }
          return {contact: {value: control.value}};
        }
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit() {
  }

  login() {
    this.httpService
      .singIn({
        [this.contactType]: this.options.value.contact,
        password: this.options.value.password
      })
      .subscribe((userDetails) => {
        const role: string = userDetails.role;
        switch (Role[role]) {
          case Role.admin:
            this.router.navigateByUrl('/companies');
            break;
          default:
            this.router.navigateByUrl('/');
            break;
        }
      });
  }

}
