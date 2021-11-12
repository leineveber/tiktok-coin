import { Col, Row, Space } from 'antd';
import { Button } from 'components/common/Button/Button';
import React from 'react';
import * as S from './CustomCard.styles';

export const CustomCard = ({ title, text, description, btnText, background }) => (
  <S.CustomCard background={background}>
    <Space direction="vertical" size={0}>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </Space>

    <Row justify="space-between">
      <Col>
        <S.Text>{text}</S.Text>
      </Col>

      <Col>
        <Button type="default">{btnText}</Button>
      </Col>
    </Row>
  </S.CustomCard>
);
