import { MainPage } from 'pages/MainPage';
import { MorePage } from 'pages/MorePage';
import { ReferalsPage } from 'pages/ReferalsPage';
import { ShopPage } from 'pages/ShopPage';
import { TopPage } from 'pages/TopPage';
import { routesPaths } from './routesPaths';

export const routes = [
  {
    path: routesPaths.MAIN_PAGE,
    component: MainPage,
  },
  {
    path: routesPaths.TOP_PAGE,
    component: TopPage,
  },
  {
    path: routesPaths.SHOP_PAGE,
    component: ShopPage,
  },
  {
    path: routesPaths.REFERALS_PAGE,
    component: ReferalsPage,
  },
  {
    path: routesPaths.MORE_PAGE,
    component: MorePage,
  },
];
