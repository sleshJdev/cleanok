import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../common/http/http.service';
import {Role} from '../../enum/role.enum';
import {Router} from '@angular/router';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const TEL_REGEX = /^\+\d{9,15}$/;

@Component({
  selector: 'app-login',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  protected selectedContactType;
  protected formGroup: FormGroup;
  protected contactFormControl = new FormControl('', [
    Validators.required,
    (control: AbstractControl): { [key: string]: any } => {
      const pattern = this.selectedContactType === 'Email' ? EMAIL_REGEX : TEL_REGEX;
      if (pattern.test(control.value)) {
        return null;
      }
      return {'contact': {value: control.value}};
    }
  ]);
  protected credentials = {
    contact: null,
    password: null
  };

  constructor(private httpService: HttpService,
              private router: Router) {
    this.selectedContactType = 'Email';
  }

  ngOnInit() {
    this.formGroup = new FormGroup({});
  }

  protected onContactTypeChange() {
    this.contactFormControl.updateValueAndValidity();
  }

  protected resolveContactType() {
    return this.selectedContactType === 'Email' ? 'email' : 'tel';
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
            this.router.navigateByUrl('/companies');
            break;
          default:
            this.router.navigateByUrl('/');
            break;
        }
      });
  }

}
