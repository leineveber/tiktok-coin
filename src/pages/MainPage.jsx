import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Col, Row } from 'antd';
import { Card } from 'components/common/Card/Card';
import { BaseCard } from 'components/profile/BaseCard/BaseCard';
import { baseCards } from 'constants/data/profile';

export const MainPage = () => {
  const theme = useContext(ThemeContext);

  const baseCardsCols = baseCards.map((card) => (
    <Col span={12}>
      <BaseCard title={card.title} icon={card.icon} background={theme.standardColors[card.background]} />
    </Col>
  ));

  return (
    <>
      <Row gutter={[20, 10]}>
        <Col span={24}>
          <Card>test</Card>
        </Col>
        {baseCardsCols}
      </Row>
    </>
  );
};
