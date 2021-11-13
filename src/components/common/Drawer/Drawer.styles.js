import { Drawer as AntDrawer } from 'antd';
import styled from 'styled-components';

export const Drawer = styled(AntDrawer)`
  & .ant-drawer-content-wrapper {
    overflow-x: hidden;
    z-index: 3;

    border-radius: ${(props) => `${props.theme.border.large} ${props.theme.border.large} 0  0 `};
  }
`;