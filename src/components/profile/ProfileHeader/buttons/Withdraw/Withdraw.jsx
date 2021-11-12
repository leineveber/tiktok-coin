import React, { useState } from 'react';
import { CreditCardOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { useResponsive } from 'hooks/useResponsive';
import { Drawer } from 'components/common/Drawer/Drawer';
import { ProfileHeaderBtn } from '../../ProfileHeaderBtn/ProfileHeaderBtn';
import { WithdrawMenu } from './WithdrawMenu/WithdrawMenu';

export const Withdraw = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const { isTablet } = useResponsive();

  return (
    <>
      <ProfileHeaderBtn
        icon={<CreditCardOutlined />}
        text="Вывести"
        onClick={() => setMenuVisible(true)}
      />

      {!isTablet && (
        <Drawer visible={isMenuVisible} onClose={() => setMenuVisible(false)}>
          <WithdrawMenu />
        </Drawer>
      )}

      {isTablet && (
        <Modal visible={isMenuVisible} footer={null} onCancel={() => setMenuVisible(false)}>
          <WithdrawMenu />
        </Modal>
      )}
    </>
  );
};
