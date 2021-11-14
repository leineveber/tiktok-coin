import styled from 'styled-components';
import { Typography } from 'antd';

export const MoreTitle = styled(Typography.Text)`
  opacity: 0.6;

  font-size: ${(props) => props.theme.typography.size.lg};

  font-weight: ${(props) => props.theme.typography.weight.medium};
`;
