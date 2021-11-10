import React, { useMemo } from 'react';
import { Col, Row, Space } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { footerNavigation } from 'constants/config/footerNavigation';
import * as S from './Footer.styles';

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const footerNavItems = useMemo(
    () =>
      footerNavigation.map((item) => (
        <Col span={4} key={item.path}>
          <S.Btn type={location.pathname === item.path ? 'primary' : 'default'} onClick={() => navigate(item.path)}>
            <Space direction="vertical" size={0}>
              {item.icon}
              {item.name}
            </Space>
          </S.Btn>
        </Col>
      )),
    [location, navigate],
  );

  return (
    <Row justify="space-between" wrap={false}>
      {footerNavItems}
    </Row>
  );
};
