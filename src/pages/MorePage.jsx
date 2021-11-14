import React, { useState } from 'react';
import { Drawer } from 'components/common/Drawer/Drawer';
import { Row, Col, Button } from 'antd';

export const MorePage = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <Row>
      <Col span={24}>
        <Button type="primary" onClick={() => setVisible(true)}>
          Open drawer 11
        </Button>
        <Drawer visible={isVisible} setDrawerVisible={() => setVisible(false)}>
          <p>some content</p>
          <p>some content</p>
          <p>some content</p>
        </Drawer>
      </Col>
    </Row>
  );
};
