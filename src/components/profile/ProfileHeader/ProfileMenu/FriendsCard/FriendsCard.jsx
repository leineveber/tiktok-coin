import React from 'react';
import { TeamOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { routesPaths } from 'routes/routesPaths';
import { ProfileHeaderBtn } from '../../ProfileHeaderBtn/ProfileHeaderBtn';

export const FriendsCard = () => (
  <Link to={routesPaths.REFERALS_PAGE}>
    <ProfileHeaderBtn icon={<TeamOutlined />} text="Друзья" />
  </Link>
);
