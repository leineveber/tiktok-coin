import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import usePWA from 'react-pwa-install-prompt';
import pwa from 'assets/images/pwa.png';
import { BaseCard } from 'components/common/cards/BaseCard/BaseCard';

export const InstallCard = () => {
  const theme = useContext(ThemeContext);

  const { promptInstall } = usePWA();

  const onClickInstall = async () => {
    const didInstall = await promptInstall();
    if (didInstall) {
      // User accepted PWA install
    }
  };

  return (
    <BaseCard
      title="Установить приложение"
      icon={pwa}
      background={theme.standardColors.redLight}
      onClick={onClickInstall}
    />
  );
};
