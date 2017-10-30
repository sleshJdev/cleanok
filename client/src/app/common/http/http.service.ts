import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, ResponseContentType} from '@angular/http';

@Injectable()
export class HttpService {
  private authHeaderName: string;

  constructor(private http: Http) {
  }

  singIn(credentials) {
    return this.post('/api/sing-in', credentials)
      .map(response => response.json())
      .do(authDetails => {
        const token = authDetails.token;
        this.authHeaderName = token.name;
        localStorage.setItem(token.name, token.value);
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
