import React, { useContext, useState } from 'react';
import { Modal } from 'antd';
import { MainCard } from 'components/common/cards/MainCard/MainCard';
import { Drawer } from 'components/common/Drawer/Drawer';
import { useResponsive } from 'hooks/useResponsive';
import { EnhancementMenu } from './EnhancementMenu/EnhancementMenu';
import { ThemeContext } from 'styled-components';

export const EnhancementCard = ({ name: title, description, icon, details, prices }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const theme = useContext(ThemeContext);

  // const backgrounds = [
  //   theme.colors.background.autoClicker,
  //   theme.colors.background.secondary,
  //   theme.colors.background.vipSilver,
  //   theme.colors.background.booster,
  // ];

  const { isDesktop } = useResponsive();

  return (
    <>
      <MainCard
        title={title}
        description={description}
        icon={icon}
        background={
          title === 'Автокликер'
            ? theme.colors.background.autoClicker
            : title === 'VIP GOLD'
            ? theme.colors.background.secondary
            : title === 'VIP SILVER'
            ? theme.colors.background.vipSilver
            : title === 'Ускоритель X2'
            ? theme.colors.background.booster
            : theme.colors.background.secondary
        }
        btnText={title === 'Автокликер' || title === 'Ускоритель X2' ? 'Купить' : 'Подробнее'}
        text={
          title !== 'Автокликер' &&
          title !== 'Ускоритель X2' &&
          'Нажмите "Подробнее" чтобы узнать больше'
        }
        onClick={() => setMenuVisible(true)}
      />

      {!isDesktop && (
        <Drawer visible={isMenuVisible} setDrawerVisible={() => setMenuVisible(false)}>
          <EnhancementMenu title={title} details={details} prices={prices} />
        </Drawer>
      )}

      {isDesktop && (
        <Modal visible={isMenuVisible} onCancel={() => setMenuVisible(false)} footer={null}>
          <EnhancementMenu title={title} details={details} prices={prices} />
        </Modal>
      )}
    </>
  );
};
