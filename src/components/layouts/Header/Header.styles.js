import { Typography } from 'antd';
import styled from 'styled-components';
import { hexToRGB } from 'utils/utils';

export const UsernameText = styled(Typography.Text)`
  color: ${(props) => props.theme.colors.text.secondary};
`;

export const OnlineText = styled(Typography.Text)`
  color: ${(props) => hexToRGB(props.theme.colors.text.main, 0.75)};
`;
