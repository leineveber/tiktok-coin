import React, { useMemo } from 'react';
import { Form, Select as AntSelect } from 'antd';
import { Select } from 'components/common/Select/Select';
import { withdrawWays } from 'constants/config/withdraw';
import { requiredRule } from 'constants/config/requiredRule';

export const WithdrawItem = () => {
  const withdrawItems = useMemo(
    () =>
      withdrawWays.map((way) => (
        <AntSelect.Option key={way.value} value={way.value}>
          {way.name}
        </AntSelect.Option>
      )),
    [],
  );

  return (
    <Form.Item name="withdrawWay" label="Выберите кошелек" rules={[requiredRule]}>
      <Select placeholder="Не выбрано">{withdrawItems}</Select>
    </Form.Item>
  );
};
