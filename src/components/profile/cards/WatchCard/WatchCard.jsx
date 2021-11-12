import React, { useContext } from 'react';
import { MainCard } from 'components/profile/common/MainCard/MainCard';
import { TIKTOK_LINK } from 'constants/config/tiktokLink';
import tiktokIcon from 'assets/images/tiktok.png';
import { ThemeContext } from 'styled-components';

export const WatchCard = () => {
  const theme = useContext(ThemeContext);

  return (
    <a href={TIKTOK_LINK}>
      <MainCard
        title="Смотреть TikTok"
        description="10-50 TikCoin за просмотр"
        btnText="Смотреть"
        background={theme.colors.main.info}
        icon={tiktokIcon}
        isPrimary
      />
    </a>
  );
};
