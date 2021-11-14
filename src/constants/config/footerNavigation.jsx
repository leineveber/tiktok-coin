import React from 'react';
import { routesPaths } from 'routes/routesPaths';
import {
  TeamOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  GoldOutlined,
  MenuOutlined,
} from '@ant-design/icons';

export const footerNavigation = [
  {
    path: routesPaths.TOP_PAGE.path,
    name: routesPaths.TOP_PAGE.name,
    icon: <TeamOutlined />,
  },
  {
    path: routesPaths.SHOP_PAGE.path,
    name: routesPaths.SHOP_PAGE.name,
    icon: <ShoppingCartOutlined />,
  },
  {
    path: routesPaths.MAIN_PAGE.path,
    name: routesPaths.MAIN_PAGE.name,
    icon: <UserOutlined />,
  },
  {
    path: routesPaths.REFERALS_PAGE.path,
    name: routesPaths.REFERALS_PAGE.name,
    icon: <GoldOutlined />,
  },
  {
    path: routesPaths.MORE_PAGE.path,
    name: routesPaths.MORE_PAGE.name,
    icon: <MenuOutlined />,
  },
];
