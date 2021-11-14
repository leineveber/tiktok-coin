import React, { useMemo } from 'react';
import { Col, Row } from 'antd';
import { WithdrawCard } from './WithdrawCard/WithdrawCard';
import { FriendsCard } from './FriendsCard/FriendsCard';
import { ShopCard } from './ShopCard/ShopCard';

const menu = [<WithdrawCard />, <ShopCard />, <FriendsCard />];

export const ProfileMenu = () => {
  const menuMemo = useMemo(
    () =>
      menu.map((Card, index) => (
        <Col key={index} span={5}>
          {Card}
        </Col>
      )),
    [],
  );

  return <Row justify="space-between">{menuMemo}</Row>;
};
