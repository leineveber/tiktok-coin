import React from 'react';
import { MainLayout } from 'components/layouts/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from 'routes/routes';
import { GlobalStyles } from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

export const App = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  </>
);
