import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes/index';

import '../global.css';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
