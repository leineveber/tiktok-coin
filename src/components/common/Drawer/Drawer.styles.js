import { Drawer as AntDrawer } from 'antd';
import styled from 'styled-components';

export const Drawer = styled(AntDrawer)`
  z-index: 999;

  & .ant-drawer-content-wrapper {
    overflow-x: hidden;
    z-index: 3;

    border-radius: ${(props) => `${props.theme.border.large} ${props.theme.border.large} 0  0 `};
  }
`;

export const SwipeWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 24px;
`;
