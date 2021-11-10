import styled, { css } from 'styled-components';
import { Button } from 'antd';
import { hexToRGB } from 'utils/utils';

export const Btn = styled(Button)`
  ${(props) =>
    props.type === 'text' &&
    css`
      color: ${props.theme.colors.text.additional};

      &:hover {
        color: ${props.theme.colors.main.primary};
      }
    `};

  ${(props) =>
    props.type === 'primary' &&
    css`
      background: linear-gradient(
        to right top,
        ${props.theme.colors.main.primary},
        ${hexToRGB(props.theme.colors.main.primary, 0.9)}
      );
    `};
`;
