import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { MainCard } from 'components/profile/common/MainCard/MainCard';
import telegramIcon from 'assets/images/telegram.png';
import { Button } from 'components/common/Button/Button';

export const SubscriptionCard = () => {
  const theme = useContext(ThemeContext);

  return (
    <MainCard
      title="20 ₽ на баланс"
      description="Бонус за подписку на канал"
      btnText="Получить"
      background={`linear-gradient(to right top, ${theme.colors.main.primary}, ${theme.colors.main.primaryDark})`}
      icon={telegramIcon}
    >
      {() => (
        <a href="https://t.me/tiktok_coins">
          <Button type="default">Подписаться</Button>
        </a>
      )}
    </MainCard>
  );
};
