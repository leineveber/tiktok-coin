import { MainCard } from 'components/common/cards/MainCard/MainCard';
import { EXCHANGE_CROWNS_VALUE } from 'constants/config/exchangeValue';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export const BalanceCard = ({ balance }) => {
  const theme = useContext(ThemeContext);

  return (
    <MainCard
      title={`Ваш баланс: ${balance}`}
      description="Нажмите ниже для пополнения"
      text={EXCHANGE_CROWNS_VALUE}
      background={theme.colors.main.additional}
      btnText="Пополнить"
    />
  );
};
