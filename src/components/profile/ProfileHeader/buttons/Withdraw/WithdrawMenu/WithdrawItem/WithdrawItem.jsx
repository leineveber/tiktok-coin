import React, { useMemo } from 'react';
import { Select, Form } from 'antd';
import { withdrawWays } from 'constants/config/withdraw';
import { requiredRule } from 'constants/config/requiredRule';

export const WithdrawItem = () => {
  const withdrawItems = useMemo(
    () =>
      withdrawWays.map((way) => (
        <Select.Option key={way.value} value={way.value}>
          {way.name}
        </Select.Option>
      )),
    [],
  );

  return (
    <Form.Item name="withdrawWay" label="Выберите кошелек" rules={[requiredRule]}>
      <Select placeholder="Не выбрано">{withdrawItems}</Select>
    </Form.Item>
  );
};
