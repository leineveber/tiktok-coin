import styled from 'styled-components';
import { Layout } from 'antd';

export const MainLayout = styled(Layout)`
  background-color: ${(props) => props.theme.colors.main.primary};
`;

export const MainHeader = styled(Layout.Header)``;

export const MainContent = styled(Layout.Content)`
  padding: 1.5rem 1rem;

  border-top-left-radius: ${(props) => props.theme.border.large};

  border-top-right-radius: ${(props) => props.theme.border.large};

  background-color: ${(props) => props.theme.colors.main.background};
`;

export const MainFooter = styled(Layout.Footer)`
  border-top: 1px solid ${(props) => props.theme.colors.border};
`;
