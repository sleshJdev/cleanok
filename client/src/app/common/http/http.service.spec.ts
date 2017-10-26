import {TestBed, inject} from '@angular/core/testing';

import {Http1Service} from './http.service';
import {HttpModule} from "@angular/http";

describe('HttpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [Http1Service]
    });
  });

  it('should be created', inject([Http1Service], (service: Http1Service) => {
    expect(service).toBeTruthy();
  }));
});
