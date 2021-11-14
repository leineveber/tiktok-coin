import React from 'react';
import { Col, Row } from 'antd';
import { Icon24UserOutline } from '@vkontakte/icons';
import * as S from './ReferalUser.styles';

export const ReferalUser = ({ src, name }) => (
  <Row gutter={[10, 0]} align="middle">
    <Col>
      <S.Avatar src={src} icon={!src && <Icon24UserOutline />} alt="Аватар" />
    </Col>

    <Col>
      <S.Title>{name}</S.Title>
    </Col>
  </Row>
);
