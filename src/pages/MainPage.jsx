import React, { useMemo } from 'react';
import { Col, Row } from 'antd';
import { BonusCard } from 'components/profile/BonusCard/BonusCard';
import { VoucherCard } from 'components/profile/VoucherCard/VoucherCard';
import { InstallCard } from 'components/profile/InstallCard/InstallCard';
import { HelpCard } from 'components/profile/HelpCard/HelpCard';
import { WatchCard } from 'components/profile/WatchCard/WatchCard';
import { CustomCard } from 'components/common/cards/CustomCard/CustomCard';
import { useCustomBanner } from 'hooks/useCustomBanner';

const baseCards = [
  <BonusCard key={0} />,
  <VoucherCard key={1} />,
  <InstallCard key={2} />,
  <HelpCard key={3} />,
];

export const MainPage = () => {
  const customCard = useCustomBanner();

  const baseCardsMemo = useMemo(
    () =>
      baseCards.map((Card, index) => (
        <Col key={index} span={12}>
          {Card}
        </Col>
      )),
    [],
  );

  return (
    <Row gutter={[0, 20]}>
      <Col span={24}>
        <WatchCard />
      </Col>

      {customCard.visible && (
        <Col span={24}>
          <CustomCard
            title={customCard.title}
            description={customCard.description}
            text={customCard.text}
            btnText={customCard.btnText}
          />
        </Col>
      )}

      <Col span={24}>
        <Row gutter={[10, 10]}>{baseCardsMemo}</Row>
      </Col>
    </Row>
  );
};
