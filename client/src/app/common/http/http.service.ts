import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, ResponseContentType} from '@angular/http';

@Injectable()
export class HttpService {
  private options = new RequestOptions({
    responseType: ResponseContentType.Json,
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });

  constructor(private http: Http) {
  }

  get(url) {
    return this.http.get(url, this.options);
  }

  post(url, data) {
    return this.http.post(url, data, this.options);
  }

}
