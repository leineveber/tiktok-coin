import React from 'react';
import { Col, Row } from 'antd';
import { ModalTitle } from 'components/common/ModalTitle/ModalTitle';
import { SubscriptionCard } from './SubscriptionCard/SubscriptionCard';
import { InstallCard } from './InstallCard/InstallCard';
import { EveryDayCard } from './EveryDayCard/EveryDayCard';

export const BonusMenu = () => (
  <Row gutter={[0, 30]}>
    <Col span={24}>
      <ModalTitle>Бонусы</ModalTitle>
    </Col>

    <Col span={24}>
      <Row gutter={[0, 15]}>
        <Col span={24}>
          <SubscriptionCard />
        </Col>

        <Col span={24}>
          <InstallCard />
        </Col>

        <Col span={24}>
          <EveryDayCard />
        </Col>
      </Row>
    </Col>
  </Row>
);
