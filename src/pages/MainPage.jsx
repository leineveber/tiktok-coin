import React, { useEffect, useMemo, useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Col, Row } from 'antd';
import { BonusCard } from 'components/profile/BonusCard/BonusCard';
import { VoucherCard } from 'components/profile/VoucherCard/VoucherCard';
import { InstallCard } from 'components/profile/InstallCard/InstallCard';
import { HelpCard } from 'components/profile/HelpCard/HelpCard';
import { WatchCard } from 'components/profile/WatchCard/WatchCard';
import { CustomCard } from 'components/common/cards/CustomCard/CustomCard';

const baseCards = [<BonusCard />, <VoucherCard />, <InstallCard />, <HelpCard />];

export const MainPage = () => {
  const theme = useContext(ThemeContext);

  const [customCard, setCustomCard] = useState({
    visible: false,
    title: '',
    description: '',
    text: '',
    btnText: '',
  });

  useEffect(() => {
    setCustomCard({
      visible: true,
      title: 'Кастомный баннер',
      description: 'Описание',
      text: 'До конца 1:23:45',
      btnText: 'Текст 123',
    });
  }, []);

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

      <Col span={24}>
        <Row gutter={[10, 10]}>{baseCardsMemo}</Row>
      </Col>

      {customCard.visible && (
        <Col span={24}>
          <CustomCard
            title={customCard.title}
            description={customCard.description}
            text={customCard.text}
            btnText={customCard.btnText}
            background={theme.colors.background.secondary}
          />
        </Col>
      )}
    </Row>
  );
};
