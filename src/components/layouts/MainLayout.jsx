import React from 'react';
import { Layout } from 'antd';
import { Header } from './Header/Header';
import * as S from './MainLayout.styles';
import { Footer } from './Footer/Footer';

export const MainLayout = ({ children }) => (
  <Layout>
    <Layout.Header>
      <Header />
    </Layout.Header>
    <Layout.Content>{children}test</Layout.Content>
    <S.MainFooter>
      <Footer />
    </S.MainFooter>
  </Layout>
);
