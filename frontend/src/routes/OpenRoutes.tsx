import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import { Login, SignUp } from '../pages';

export const OpenRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
