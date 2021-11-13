import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { Modal } from 'antd';
import promo from 'assets/images/promo.png';
import { Drawer } from 'components/common/Drawer/Drawer';
import { useResponsive } from 'hooks/useResponsive';
import { BaseCard } from '../../common/BaseCard/BaseCard';
import { VoucherMenu } from './VoucherMenu/VoucherMenu';

export const VoucherCard = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const { isDesktop } = useResponsive();

  const theme = useContext(ThemeContext);

  return (
    <>
      <BaseCard
        title="Активировать ваучер"
        icon={promo}
        background={theme.standardColors.blueNavy}
        onClick={() => setMenuVisible(true)}
      />

      {!isDesktop && (
        <Drawer height={400} visible={isMenuVisible} setDrawerVisible={() => setMenuVisible(false)}>
          <VoucherMenu />
        </Drawer>
      )}

      {isDesktop && (
        <Modal visible={isMenuVisible} onCancel={() => setMenuVisible(false)} footer={null}>
          <VoucherMenu />
        </Modal>
      )}
    </>
  );
};
