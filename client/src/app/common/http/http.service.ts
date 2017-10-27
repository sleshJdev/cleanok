import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, ResponseContentType} from '@angular/http';
import AppConfig from '../../config/app.config';

@Injectable()
export class HttpService {
  constructor(private http: Http, private appConfig: AppConfig) {
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
    const userDetails: any = localStorage.getItem(this.appConfig.authTokenHeaderName);
    if (userDetails) {
      headers.append(this.appConfig.authTokenHeaderName, userDetails.token);
    }
    return new RequestOptions({
      responseType: ResponseContentType.Json,
      headers: headers
    });
  }

}
