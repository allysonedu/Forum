import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes/index';

import '../global.css';

import { AuthProvider } from '../src/shared/hooks/auth';

export const App: React.FC = () => {
  debugger;
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
};
