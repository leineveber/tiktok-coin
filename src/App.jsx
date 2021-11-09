import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MainLayout } from 'components/layouts/MainLayout';
import { store } from 'store/store';
import { routes } from 'routes/routes';
import { GlobalStyles } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';

export const App = () => (
  <>
    <Provider store={store}>
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
    </Provider>
  </>
);
