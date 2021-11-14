import { Typography } from 'antd';
import styled from 'styled-components';

export const ShopTitle = styled(Typography.Text)`
  color: ${(props) => props.theme.colors.text.contrast};

  font-weight: ${(props) => props.theme.typography.weight.medium};

  font-size: ${(props) => props.theme.typography.size.xl};
`;
