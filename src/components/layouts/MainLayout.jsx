import React from 'react';
import { Layout } from 'antd';

export const MainLayout = ({ children }) => (
  <Layout>
    <Layout.Header>header</Layout.Header>
    <Layout.Content>{children}</Layout.Content>
    <Layout.Footer>footer</Layout.Footer>
  </Layout>
);
