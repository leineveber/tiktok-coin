import { Typography } from 'antd';
import styled from 'styled-components';

export const Subtitle = styled(Typography.Text)`
  color: ${(props) => props.theme.colors.text.contrast};

  font-weight: ${(props) => props.theme.typography.weight.bold};

  font-size: ${(props) => props.theme.typography.size.lg};
`;

export const Text = styled(Typography.Text)`
  display: block;

  color: ${(props) => props.theme.colors.text.contrast};
`;
