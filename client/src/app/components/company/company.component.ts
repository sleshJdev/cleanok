import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../common/http/http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {

  form: FormGroup;

  constructor(private http: HttpService,
              private router: Router,
              formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      title: formBuilder.control('', [Validators.required]),
      email: formBuilder.control('', [Validators.required]),
      status: formBuilder.control('active')
    });
  }

  save() {
    this.http
      .post('/api/companies', this.form.value)
      .subscribe(() => {
        this.router.navigateByUrl('/companies')
      });
  }

}
