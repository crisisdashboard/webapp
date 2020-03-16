/** Global constant assigned set on the template at build time. */
declare const NODE_ENV: string;

/** For accessing environment variables. */
export class EnvironmentService {
  /** Whether the app is running is production mode. */
  isProduction() {
    return NODE_ENV === 'production';
  }
}