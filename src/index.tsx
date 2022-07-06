import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import GlobalStyles from './styles/GlobalStyles';
import './styles/antd.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <GlobalStyles />
    <Router />
  </>,
);
