import React from 'react';
import * as S from './Card.styles';

export const Card = ({ children, ...props }) => <S.CommonCard {...props}>{children}</S.CommonCard>;
