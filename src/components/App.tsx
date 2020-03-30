import './App.css';

import React from 'react';
import {useAppContext} from '../context';

/** Root component of the web app. */
const App = () => {
  const {services: {environment}} = useAppContext();
  const mode = environment().isProduction() ? 'production' : 'development';
  return (
    <div>
      <div>Hello!</div>
      <p>You are currently viewing in {mode} mode.</p>
    </div>
  );
}

export default App;
