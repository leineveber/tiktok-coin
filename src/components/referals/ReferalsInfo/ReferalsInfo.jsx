import React from 'react';
import { Col, Input, Row } from 'antd';
import { useUser } from 'hooks/useUser';
import { baseDomain, schema } from 'constants/config/domains';
import * as S from './ReferalsInfo.styles';

export const ReferalsInfo = () => {
  const { id, ref_users } = useUser();

  return (
    <Row gutter={[0, 10]}>
      <Col span={24}>
        <Input value={`${schema}://${baseDomain}?ref=${id}`} />
      </Col>

      <Col span={24}>
        <S.Text>Приглашай друзей и получай по 300 TikCoin за каждого + 20 👑</S.Text>
      </Col>

      <Col span={24}>
        <S.Text>Рефералов у вас: {ref_users.length}</S.Text>
      </Col>
    </Row>
  );
};
