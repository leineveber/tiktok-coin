import React from 'react';
import { Layout } from 'antd';
import { Header } from './Header/Header';

export const MainLayout = ({ children }) => (
  <Layout>
    <Layout.Header>
      <Header />
    </Layout.Header>
    <Layout.Content>{children}</Layout.Content>
    <Layout.Footer>footer</Layout.Footer>
  </Layout>
);
