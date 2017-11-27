import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class HttpService {
  private authHeaderName: string;

  constructor(private httpClient: HttpClient) {
  }

  singIn(credentials) {
    return this.post('/api/sign-in', credentials)
      .map((authDetails: any) => {
        const token = authDetails.token;
        this.authHeaderName = token.name;
        localStorage.setItem(token.name, token.value);
        return authDetails.userDetails;
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
    return this.httpClient.get(url, this.getOptions(params));
  }

  post(url, data) {
    return this.httpClient.post(url, data, this.getOptions());
  }

  private getOptions(params: { [param: string]: string | string[]; } = null) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const token: any = localStorage.getItem(this.authHeaderName);
    if (token) {
      headers = headers.append(this.authHeaderName, token);
    }
    return {
      headers: headers
    };
  }

}
