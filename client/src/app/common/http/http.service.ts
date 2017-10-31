import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, ResponseContentType} from '@angular/http';

@Injectable()
export class HttpService {
  private authHeaderName: string;

  constructor(private http: Http) {
  }

  singIn(credentials) {
    return this.post('/api/sign-in', credentials)
      .map(response => response.json())
      .do(authDetails => {
        const token = authDetails.token;
        this.authHeaderName = token.name;
        localStorage.setItem(token.name, token.value);
      });
  }

  signUp(user) {
    return this.post('/api/sign-up', user);
  }

  verifyCode(tel, code) {
    return this.get('/api/sign-up/verification/tel', {
      tel: tel,
      code: code
    });
  }

  get(url, params) {
    return this.http.get(url, this.getOptions(params));
  }

  post(url, data) {
    return this.http.post(url, data, this.getOptions());
  }

  private getOptions(params: any = null) {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    const token: any = localStorage.getItem(this.authHeaderName);
    if (token) {
      headers.append(this.authHeaderName, token);
    }
    return new RequestOptions({
      responseType: ResponseContentType.Json,
      headers: headers,
      params: params
    });
  }

}
