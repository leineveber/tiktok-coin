import { Col, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ProfileHeader } from 'components/profile/ProfileHeader/ProfileHeader';
import { routesPaths } from 'routes/routesPaths';
import * as S from './Header.styles';

export const Header = () => {
  const onlineUsers = useSelector((state) => state.onlineUsers?.value);
  const username = useSelector((state) => state.auth?.user);

  const location = useLocation();

  return (
    <Row justify="space-between" gutter={[20, 20]} align="middle">
      <Col>
        {location.pathname === routesPaths.MAIN_PAGE.path ? (
          <S.UsernameText>{username || 'Юзернейм ТГ'}</S.UsernameText>
        ) : (
          <S.PageTitle>
            {Object.values(routesPaths).find((route) => route.path === location.pathname).name}
          </S.PageTitle>
        )}
      </Col>

      <Col>
        <S.OnlineText>Онлайн: {onlineUsers || 'Загрузка...'}</S.OnlineText>
      </Col>

      {location.pathname === routesPaths.MAIN_PAGE.path && (
        <Col span={24}>
          <ProfileHeader />
        </Col>
      )}
    </Row>
  );
};

// {title ? (
//
// ) : (
//
// )}
