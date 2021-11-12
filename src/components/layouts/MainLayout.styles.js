import styled from 'styled-components';
import { Layout } from 'antd';

export const MainLayout = styled(Layout)`
  height: 100vh;

  background-color: ${(props) => props.theme.colors.main.primary};
`;

export const MainHeader = styled(Layout.Header)`
  height: unset;
  line-height: 1.5715;

  @media only screen and ${(props) => props.theme.media.md} {
    padding: 1.5rem;
  }
`;

export const MainContent = styled(Layout.Content)`
  padding: 1.5rem 1rem;
  overflow-y: auto; // TODO add padding and style scroll

  border-top-left-radius: ${(props) => props.theme.border.large};

  border-top-right-radius: ${(props) => props.theme.border.large};

  background-color: ${(props) => props.theme.colors.main.background};

  @media only screen and ${(props) => props.theme.media.md} {
    padding: 1.5rem;
  }
`;

export const MainFooter = styled(Layout.Footer)`
  position: fixed;
  bottom: 0;
  width: 100%;

  border-top: 1px solid ${(props) => props.theme.colors.border};
`;
