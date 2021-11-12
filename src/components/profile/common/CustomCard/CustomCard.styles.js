import styled from 'styled-components';
import { Card } from 'components/common/Card/Card';
import { Typography } from 'antd';

export const CustomCard = styled(Card)`
  background: ${(props) => props.background};
`;

export const Title = styled(Typography.Text)`
  font-size: 1rem;
  font-weight: 600;
`;

export const Description = styled(Typography.Text)`
  opacity: 0.5;
`;

export const Text = styled(Typography.Text)`
  font-size: 0.875rem;
`;
