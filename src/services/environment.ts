/** For accessing environment variables. */
export class EnvironmentService {
  /** Whether the app is running is production mode. */
  isProduction() {
    // This value is set on window in the template, determined at build time.
    return (window as any).NODE_ENV === 'production';
  }
}