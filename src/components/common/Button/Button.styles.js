import styled, { css } from 'styled-components';
import { Button } from 'antd';

export const Btn = styled(Button)`
  ${(props) =>
    props.type === 'text' &&
    css`
      color: ${props.theme.colors.text.additional};

      &:hover {
        color: ${props.theme.colors.main.primary};
      }
    `};
`;
