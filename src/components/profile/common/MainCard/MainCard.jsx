import React from 'react';
import { Col, Row, Image } from 'antd';
import { Button } from 'components/common/Button/Button';
import * as S from './MainCard.styles';

export const MainCard = ({
  title,
  description,
  btnText,
  background,
  icon,
  isPrimary,
  onClick,
  children,
}) => (
  <S.MainCard background={background} isPrimary={isPrimary} onClick={onClick}>
    <Row justify="space-between" align="middle" gutter={[0, 10]}>
      <Col span={24}>
        <S.Title>{title}</S.Title>
      </Col>

      <Col span={24}>
        <S.Description>{description}</S.Description>
      </Col>

      <Col span={24}>
        <Row gutter={[20, 0]}>
          <Col>
            <Button type="default">{btnText}</Button>
          </Col>

          {children && <Col>{children()}</Col>}
        </Row>
      </Col>

      <S.ImgWrapper>
        <Image src={icon} alt="Icon" preview={false} />
      </S.ImgWrapper>
    </Row>
  </S.MainCard>
);
