import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { MainCard } from 'components/profile/common/MainCard/MainCard';
import pwa from 'assets/images/pwa.png';

export const InstallCard = () => {
  const theme = useContext(ThemeContext);

  return (
    <MainCard
      title="50 ₽ на баланс"
      description="Бонус за установку приложения"
      btnText="Получить"
      background={`linear-gradient(to right top, ${theme.colors.main.primary}, ${theme.standardColors.greenLight})`}
      icon={pwa}
    />
  );
};
