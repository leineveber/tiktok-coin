import React from 'react';
import { Form } from 'antd';
// import { withdrawWays } from 'constants/config/withdraw';
import { requiredRule } from 'constants/config/requiredRule';

export const WithdrawItem = () => {
  // const withdrawItems = useMemo(
  //   () =>
  //     withdrawWays.map((way) => (
  //       <Select.Option key={way.value} value={way.value}>
  //         {way.name}
  //       </Select.Option>
  //     )),
  //   [],
  // );

  const test = 'test';

  console.log(test);

  return (
    <Form.Item name="withdrawWay" label="Выберите кошелек" rules={[requiredRule]}>
      {/* <Select placeholder="Не выбрано">{withdrawItems}</Select> */}

      <select>
        <option value="test">test</option>
        <option value="test1">test1</option>
        <option value="test2">test2</option>
      </select>
    </Form.Item>
  );
};
