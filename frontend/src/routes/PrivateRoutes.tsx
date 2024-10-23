import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import { Dashboard } from '../pages';

export const PrivateRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};
