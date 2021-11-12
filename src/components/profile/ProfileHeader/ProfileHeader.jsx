import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { EXCHANGE_VALUE } from 'constants/config/exchangeValue';
import { Withdraw } from './buttons/Withdraw/Withdraw';
import { Friends } from './buttons/Friends/Friends';
import { Shop } from './buttons/Shop/Shop';
import * as S from './ProfileHeader.styles';

export const ProfileHeader = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser({
      balance: 5017,
    });
  }, []);

  return (
    <Row gutter={[0, 20]}>
      <Col>
        <Row>
          <Col span={24}>
            <S.BalanceText>Баланс</S.BalanceText>
          </Col>

          <Col span={24}>
            <S.ValueText>{user?.balance}</S.ValueText> <S.CurrencyText>TikCoin</S.CurrencyText>
          </Col>

          <Col span={24}>
            <S.ExchangeText>{EXCHANGE_VALUE}</S.ExchangeText>
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Row justify="space-between">
          <Col span={5}>
            <Withdraw />
          </Col>

          <Col span={5}>
            <Shop />
          </Col>

          <Col span={5}>
            <Friends />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
