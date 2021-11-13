import React from 'react';
import { Space, Image } from 'antd';
import * as S from './BaseCard.styles';

export const BaseCard = ({ title, icon, background, onClick }) => (
  <S.BaseCard background={background} onClick={onClick}>
    <Space direction="vertical" size={4}>
      <S.ImgWrapper>
        <Image src={icon} alt="icon" preview={false} />
      </S.ImgWrapper>

      <S.Title>{title}</S.Title>
    </Space>
  </S.BaseCard>
);
