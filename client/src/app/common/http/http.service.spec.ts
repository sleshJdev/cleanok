import {TestBed, inject} from '@angular/core/testing';

import {HttpService} from './http.service';
import {HttpModule} from "@angular/http";

describe('HttpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [HttpService]
    });
  });

  it('should be created', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
});
