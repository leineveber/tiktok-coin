import React from 'react';
import * as S from './Button.styles';

export const Button = ({ children, ...props }) => <S.Btn {...props}>{children}</S.Btn>;
