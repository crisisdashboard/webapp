import {env} from 'process';

/** For accessing environment variables. */
export class EnvironmentService {
  /** Whether the app is running is production mode. */
  isProduction() {
    return env.NODE_ENV === 'production';
  }
}