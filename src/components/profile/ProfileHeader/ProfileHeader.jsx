import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { EXCHANGE_VALUE } from 'constants/config/exchangeValue';
import { ProfileMenu } from './ProfileMenu/ProfileMenu';
import { ProfileText } from './ProfileText/ProfileText';

export const ProfileHeader = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser({
      balance: 5017,
    });
  }, []);

  return (
    <Row gutter={[0, 20]}>
      <Col span={24}>
        <ProfileText balanceValue={user?.balance} exchangeValue={EXCHANGE_VALUE} />
      </Col>

      <Col span={24}>
        <ProfileMenu />
      </Col>
    </Row>
  );
};
