import React, { useState } from 'react';
import { Modal } from 'antd';
import { MainCard } from 'components/common/cards/MainCard/MainCard';
import { Drawer } from 'components/common/Drawer/Drawer';
import { useResponsive } from 'hooks/useResponsive';
import { EnhancementMenu } from './EnhancementMenu/EnhancementMenu';

export const EnhancementCard = ({ index, name: title, description, icon, details, prices }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const { isDesktop } = useResponsive();

  return (
    <>
      <MainCard
        title={title}
        description={description}
        icon={icon}
        btnText={index === 0 ? 'Купить' : 'Подробнее'}
        text={index !== 0 && 'Нажмите "Подробнее" чтобы узнать больше'}
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
