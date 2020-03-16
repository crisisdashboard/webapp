import {createContext, useContext} from 'react';
import {EnvironmentService} from './services/environment';

/**
 * Container for all of the injected dependency of the components.
 */
export interface AppContainer {
  services: {
    environment(): EnvironmentService;
  }
}

// Initialize singleton dependencies.
const environmentService = new EnvironmentService();

/** Creates a new container to be provided in context. */
export const createAppContainer = (): AppContainer => {
  return {
    services: {
      environment: () => environmentService,
    },
  };
}

/** Global context to be provided by the root of the app. */
export const AppContext = createContext<AppContainer>(createAppContainer());

/** React hook get the container from the provided AppContext. */
export const useAppContext = () => {
  return useContext(AppContext);
};