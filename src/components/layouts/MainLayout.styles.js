import styled from 'styled-components';
import { Layout } from 'antd';

export const MainLayout = styled(Layout)`
  background-color: ${(props) => props.theme.colors.main.primary};

  @media only screen and (min-height: 600px) {
    height: 100vh;
  }
`;

export const MainHeader = styled(Layout.Header)`
  height: unset;
  line-height: 1.5715;

  @media only screen and ${(props) => props.theme.media.md} {
    padding: 1.5rem;
  }
`;

export const MainContent = styled(Layout.Content)`
  padding: 1.5rem 1rem 5rem 1rem;
  margin-bottom: 71px;

  border-top-left-radius: ${(props) => props.theme.border.large};

  border-top-right-radius: ${(props) => props.theme.border.large};

  background-color: ${(props) => props.theme.colors.background.main};

  @media only screen and ${(props) => props.theme.media.md} {
    padding: 1.5rem 1.5rem 5rem 1.5rem;
  }

  @media only screen and (min-height: 600px) {
    overflow-y: auto; // TODO add padding and style scroll
    margin-bottom: 4.4375rem;

    @media only screen and ${(props) => props.theme.media.md} {
      margin-bottom: 5.15625rem;
    }
  }
`;

export const MainFooter = styled(Layout.Footer)`
  position: fixed;
  z-index: 5;
  bottom: 0;
  width: 100%;
  height: 4.4375rem;

  border-top: 1px solid ${(props) => props.theme.colors.border};

  @media only screen and ${(props) => props.theme.media.md} {
    height: 5.15625rem;
  }
`;
