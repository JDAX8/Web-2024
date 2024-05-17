import React from 'react';
import { AppRouter } from './router/AppRouter';
import { useLocation } from 'react-router-dom';

export default function App() {
  const location = useLocation();

  return (
    <>
      <AppRouter />
    </>
  );
}