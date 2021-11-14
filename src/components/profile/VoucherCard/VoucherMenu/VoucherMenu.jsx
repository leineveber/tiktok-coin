/* eslint-disable no-console */
import React from 'react';
import { notification, Form, Input } from 'antd';
import { ModalTitle } from 'components/common/ModalTitle/ModalTitle';
import * as S from './VoucherMenu.styles';

export const VoucherMenu = () => {
  const onFinish = (values) => {
    console.log(values);

    notification.open({ message: 'Успешно применено!' }); // TODO handle in some other way
  };

  const onFinishFailed = (error) => {
    console.error(error);

    notification.open({ message: 'Промокод недействителен!' });
  };

  return (
    <Form name="voucher" requiredMark={false} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item>
        <ModalTitle>Активировать ваучер</ModalTitle>
      </Form.Item>

      <Form.Item>
        <Input placeholder="Промо-код" />
      </Form.Item>

      <Form.Item>
        <S.VoucherBtn type="primary" isPayment htmlType="submit">
          Применить
        </S.VoucherBtn>
      </Form.Item>

      <S.VoucherText>Используйте ваучер для получения дополнительных бонусов🎁</S.VoucherText>

      <S.VoucherText>
        Мы раздаём ваучеры на нашем <a href="https://t.me/tiktok_coins">канале</a> и в{' '}
        <a href="https://t.me/TikTokCoins_Bot">боте</a>, подпишитесь, чтобы не пропускать новые
        раздачи👆
      </S.VoucherText>
    </Form>
  );
};
