import React from 'react';
import { Col, Image, Row, Space } from 'antd';
import { Button } from 'components/common/Button/Button';
import customBanner from 'assets/images/custom-banner.png';
import * as S from './CustomCard.styles';

export const CustomCard = ({ title, text, description, btnText, background }) => (
  <S.CustomCard background={background}>
    <Row gutter={[0, 20]}>
      <Col span={24}>
        <Space direction="vertical" size={0}>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </Space>
      </Col>

      <Col span={24}>
        <Row hustify="space-between" align="middle">
          <Col flex={1}>
            <S.Text>{text}</S.Text>
          </Col>

          <Col>
            <Button type="default">{btnText}</Button>
          </Col>
        </Row>
      </Col>
    </Row>

    <S.ImgWrapper>
      <Image src={customBanner} alt="Кастомный баннер" preview={false} />
    </S.ImgWrapper>
  </S.CustomCard>
);
