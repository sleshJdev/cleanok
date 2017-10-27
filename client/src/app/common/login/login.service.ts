import {Injectable} from '@angular/core';
import {HttpService} from '../http/http.service';
import AppConfig from '../../config/app.config';

@Injectable()
export class LoginService {

  constructor(private httpService: HttpService, private appConfig: AppConfig) {
  }

  login(credentials) {
    return this.httpService
      .post('/api/login', credentials)
      .map(response => response.json())
      .do(token => localStorage.setItem(this.appConfig.authTokenHeaderName, token));
  }

}
