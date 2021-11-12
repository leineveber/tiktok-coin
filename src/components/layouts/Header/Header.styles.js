import { Typography } from 'antd';
import styled from 'styled-components';
import { hexToRGB } from 'utils/utils';

export const UsernameText = styled(Typography.Text)`
  color: ${(props) => props.theme.colors.text.secondary};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.typography.size.xl};
  }
`;

export const OnlineText = styled(Typography.Text)`
  color: ${(props) => hexToRGB(props.theme.colors.text.main, 0.9)};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.typography.size.xl};
  }
`;
