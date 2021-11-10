import React from 'react';
import { Header } from './Header/Header';
import * as S from './MainLayout.styles';
import { Footer } from './Footer/Footer';

export const MainLayout = ({ children }) => (
  <S.MainLayout>
    <S.MainHeader>
      <Header />
    </S.MainHeader>
    <S.MainContent>{children}test</S.MainContent>
    <S.MainFooter>
      <Footer />
    </S.MainFooter>
  </S.MainLayout>
);
