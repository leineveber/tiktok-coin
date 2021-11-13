import React from 'react';
import { Col, Row } from 'antd';
import { BonusCard } from 'components/profile/cards/BonusCard/BonusCard';
import { VoucherCard } from 'components/profile/cards/VoucherCard/VoucherCard';
import { InstallCard } from 'components/profile/cards/InstallCard/InstallCard';
import { HelpCard } from 'components/profile/cards/HelpCard/HelpCard';
import { WatchCard } from 'components/profile/cards/WatchCard/WatchCard';

export const MainPage = () => (
  <Row gutter={[0, 20]}>
    <Col span={24}>
      <WatchCard />
    </Col>

    <Col span={24}>
      <Row gutter={[10, 10]}>
        <Col span={12}>
          <BonusCard />
        </Col>

        <Col span={12}>
          <VoucherCard />
        </Col>

        <Col span={12}>
          <InstallCard />
        </Col>

        <Col span={12}>
          <HelpCard />
        </Col>
      </Row>
    </Col>
  </Row>
);
