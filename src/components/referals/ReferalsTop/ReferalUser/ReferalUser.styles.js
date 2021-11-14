import { Typography, Avatar as AntAvatar } from 'antd';
import styled from 'styled-components';
import { hexToRGB } from 'utils/utils';

export const Avatar = styled(AntAvatar)`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => hexToRGB(props.theme.colors.background.contrast, 0.07)};

  & > .Icon {
    color: ${(props) => props.theme.colors.text.additional};
  }
`;

export const Title = styled(Typography.Text)``;
