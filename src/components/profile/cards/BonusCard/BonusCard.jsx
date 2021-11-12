import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { Modal } from 'antd';
import bonus from 'assets/images/bonus.png';
import { useResponsive } from 'hooks/useResponsive';
import { Drawer } from 'components/common/Drawer/Drawer';
import { BaseCard } from '../../common/BaseCard/BaseCard';
import { BonusMenu } from './BonusMenu/BonusMenu';

export const BonusCard = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const { isDesktop } = useResponsive();

  const theme = useContext(ThemeContext);

  return (
    <>
      <BaseCard
        title="Доступные бонусы"
        icon={bonus}
        background={theme.standardColors.greenLight}
        onClick={() => setMenuVisible(true)}
      />

      {!isDesktop && (
        <Drawer visible={isMenuVisible} onClose={() => setMenuVisible(false)}>
          <BonusMenu />
        </Drawer>
      )}

      {isDesktop && (
        <Modal visible={isMenuVisible} onCancel={() => setMenuVisible(false)}>
          <BonusMenu />
        </Modal>
      )}
    </>
  );
};
