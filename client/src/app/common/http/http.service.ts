import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, ResponseContentType} from '@angular/http';

@Injectable()
export class HttpService {
  private authHeaderName: string;

  constructor(private http: Http) {
  }

  login(credentials) {
    return this.post('/api/login', credentials)
      .map(response => response.json())
      .do(tokenDetails => {
        this.authHeaderName = tokenDetails.tokenName;
        localStorage.setItem(tokenDetails.tokenName, tokenDetails.token);
      });
  }

  get(url) {
    return this.http.get(url, this.getOptions());
  }

  post(url, data) {
    return this.http.post(url, data, this.getOptions());
  }

  private getOptions() {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    const token: any = localStorage.getItem(this.authHeaderName);
    if (token) {
      headers.append(this.authHeaderName, token);
    }
    return new RequestOptions({
      responseType: ResponseContentType.Json,
      headers: headers
    });
  }

}
