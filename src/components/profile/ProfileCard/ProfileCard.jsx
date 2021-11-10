import { Space } from 'antd';
import React from 'react';
import * as S from './ProfileCard.styles';

export const ProfileCard = ({ background, title, description, icon, isPrimary, isCustom, btnText, customText }) => (
  <S.ProfileCard>
    {background}

    {btnText}

    {customText}
    <Space>
      {isPrimary && !isCustom ? <S.Title>{title}</S.Title> : icon}

      {isPrimary || isCustom ? <S.Text>{description}</S.Text> : <S.Title>{title}</S.Title>}
    </Space>
  </S.ProfileCard>
);
