import React from 'react';
import { MainLayout } from 'components/layouts/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from 'routes/routes';

export const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </MainLayout>
  </BrowserRouter>
);
