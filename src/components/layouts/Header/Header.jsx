import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { getUser } from 'api/getUser.api';
import { getOnline } from 'api/getOnline.api';
import * as S from './Header.styles';

export const Header = () => {
  const [user, setUser] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState(0);

  useEffect(() => {
    getUser().then((res) => setUser(res));
  }, []);

  useEffect(() => {
    getOnline().then((res) => setOnlineUsers(res));
  }, []);

  return (
    <Row justify="space-between">
      <Col>
        <S.UsernameText>{user?.username ? user.username : 'Юзернейм ТГ'}</S.UsernameText>
      </Col>

      <Col>
        <S.OnlineText>Онлайн: {onlineUsers}</S.OnlineText>
      </Col>
    </Row>
  );
};
