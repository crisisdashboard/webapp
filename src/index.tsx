import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {AppContext, createAppContainer} from './context';

ReactDOM.render(
  <AppContext.Provider value={createAppContainer()}>
    <App />
  </AppContext.Provider>,
  document.getElementById('root'),
);
