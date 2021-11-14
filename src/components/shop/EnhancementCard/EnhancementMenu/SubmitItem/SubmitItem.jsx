import React from 'react';
import { Form } from 'antd';
import * as S from './SubmitItem.styles';

export const SubmitItem = ({ price }) => {
  return (
    <Form.Item>
      <S.Btn type="primary" isPayment htmlType="submit">
        Купить за {price}
      </S.Btn>
    </Form.Item>
  );
};
