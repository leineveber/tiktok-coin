import React from 'react';
import { Col, Row, Space } from 'antd';
import { Button } from 'components/common/Button/Button';
import * as S from './MainCard.styles';

export const MainCard = ({ title, description, isCustom, customText, btnText, background }) => (
  <S.MainCard background={background}>
    <Space direction="vertical">
      <Space direction="vertical">
        <S.Title>{title}</S.Title>

        <S.Description>{description}</S.Description>
      </Space>

      <Row justify="space-between">
        {isCustom && <Col>{customText}</Col>}

        <Col>
          <Button type="default">{btnText}</Button>
        </Col>
      </Row>
    </Space>
  </S.MainCard>
);
