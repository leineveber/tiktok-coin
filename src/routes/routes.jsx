import React from 'react';

import { MainPage } from 'pages/MainPage';
import { MorePage } from 'pages/MorePage';
import { ReferalsPage } from 'pages/ReferalsPage';
import { ShopPage } from 'pages/ShopPage';
import { TopPage } from 'pages/TopPage';
import { routesPaths } from './routesPaths';

export const routes = [
  {
    path: routesPaths.MAIN_PAGE,
    element: <MainPage />,
  },
  {
    path: routesPaths.TOP_PAGE,
    element: <TopPage />,
  },
  {
    path: routesPaths.SHOP_PAGE,
    element: <ShopPage />,
  },
  {
    path: routesPaths.REFERALS_PAGE,
    element: <ReferalsPage />,
  },
  {
    path: routesPaths.MORE_PAGE,
    element: <MorePage />,
  },
];
