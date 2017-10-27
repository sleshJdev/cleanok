import {Injectable} from '@angular/core';

@Injectable()
class AppConfig {
  readonly authTokenHeaderName = 'X-Auth-Token'
}

export default AppConfig;
