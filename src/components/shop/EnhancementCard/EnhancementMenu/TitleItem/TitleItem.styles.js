import { Typography } from 'antd';
import styled from 'styled-components';

export const Title = styled(Typography.Text)`
  text-align: center;
  display: block;

  color: ${(props) => props.theme.colors.text.contrast};

  font-weight: ${(props) => props.theme.typography.weight.bold};

  font-size: ${(props) => props.theme.typography.size.xl};
`;
