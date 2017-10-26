import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class Http1Service {
  private options = new RequestOptions({
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
