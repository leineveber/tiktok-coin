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
    path: routesPaths.TOP_PAGE,
    name: 'Топ',
    icon: <TeamOutlined />,
  },
  {
    path: routesPaths.SHOP_PAGE,
    name: 'Магазин',
    icon: <ShoppingCartOutlined />,
  },
  {
    path: routesPaths.MAIN_PAGE,
    name: 'Профиль',
    icon: <UserOutlined />,
  },
  {
    path: routesPaths.REFERALS_PAGE,
    name: 'Рефералы',
    icon: <GoldOutlined />,
  },
  {
    path: routesPaths.MORE_PAGE,
    name: 'Еще',
    icon: <MenuOutlined />,
  },
];
