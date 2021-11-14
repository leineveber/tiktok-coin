import { Typography } from 'antd';
import styled from 'styled-components';

export const Title = styled(Typography.Text)`
  opacity: 0.6;

  font-weight: ${(props) => props.theme.typography.weight.semiBold};
`;
