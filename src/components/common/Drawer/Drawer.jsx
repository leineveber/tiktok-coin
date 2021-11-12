import React from 'react';
import * as S from './Drawer.styles';

export const Drawer = ({ children, ...props }) => (
  <S.Drawer height={450} placement="bottom" {...props}>
    {children}
  </S.Drawer>
);
