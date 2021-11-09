import { Typography } from 'antd';
import styled from 'styled-components';

export const UsernameText = styled(Typography.Text)`
  font-size: 0.875rem;

  color: ${(props) => props.theme.colors.text.secondary};
`;

export const OnlineText = styled(Typography.Text)`
  font-size: 0.875rem;
`;
