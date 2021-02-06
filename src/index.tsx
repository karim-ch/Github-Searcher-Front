import React from 'react';
import Routes from './routes';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
