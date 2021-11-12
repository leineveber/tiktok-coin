import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { routesPaths } from 'routes/routesPaths';
import { ProfileHeaderBtn } from '../../ProfileHeaderBtn/ProfileHeaderBtn';

export const Shop = () => (
  <Link to={routesPaths.SHOP_PAGE}>
    <ProfileHeaderBtn icon={<ShoppingCartOutlined />} text="Магазин" />
  </Link>
);
