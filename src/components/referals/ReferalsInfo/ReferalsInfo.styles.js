import { Typography } from 'antd';
import styled from 'styled-components';

export const Text = styled(Typography.Text)`
  color: ${(props) => props.theme.colors.text.contrast};
`;
