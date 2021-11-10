import styled from 'styled-components';
import { Layout } from 'antd';

export const MainFooter = styled(Layout.Footer)`
  border-top: 1px solid ${(props) => props.theme.colors.border};
`;
