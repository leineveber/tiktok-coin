import { Col, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './Header.styles';

export const Header = () => {
  const onlineUsers = useSelector((state) => state.onlineUsers?.value);
  const username = useSelector((state) => state.auth?.user);

  return (
    <Row justify="space-between">
      <Col>
        <S.UsernameText>{username || 'Юзернейм ТГ'}</S.UsernameText>
      </Col>

      <Col>
        <S.OnlineText>Онлайн: {onlineUsers || 'Загрузка...'}</S.OnlineText>
      </Col>
    </Row>
  );
};
