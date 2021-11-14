import React from 'react';
import { Col, Row } from 'antd';
import * as S from './ProfileText.styles';

export const ProfileText = ({ balanceValue, exchangeValue }) => (
  <Row>
    <Col span={24}>
      <S.BalanceText>Баланс</S.BalanceText>
    </Col>

    <Col span={24}>
      <S.ValueText>{balanceValue}</S.ValueText> <S.CurrencyText>TikCoin</S.CurrencyText>
    </Col>

    <Col span={24}>
      <S.ExchangeText>{exchangeValue}</S.ExchangeText>
    </Col>
  </Row>
);
