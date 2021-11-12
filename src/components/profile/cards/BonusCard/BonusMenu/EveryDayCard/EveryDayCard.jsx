import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { MainCard } from 'components/profile/common/MainCard/MainCard';
import bonus from 'assets/images/bonus.png';

export const EveryDayCard = () => {
  const theme = useContext(ThemeContext);

  return (
    <MainCard
      title="50 ₽ на баланс"
      description="Каждый день бесплатный бонус"
      btnText="Получить"
      background={`linear-gradient(to right top, ${theme.standardColors.orangeLight}, ${theme.standardColors.redLight})`}
      icon={bonus}
    />
  );
};
