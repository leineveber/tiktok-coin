import { Button } from 'components/common/Button/Button';
import styled, { css } from 'styled-components';

export const Btn = styled(Button)`
  height: unset;
  font-size: 0.65rem;
  width: 100%;
  padding: 4px 5px;

  & span[role='img'] {
    font-size: 1.25rem;
  }

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: 0.875rem;
  }

  ${(props) =>
    props.type === 'primary'
      ? css`
          transform: translateY(-5px);
          box-shadow: ${props.theme.shadow};
        `
      : css`
          border: 0;

          color: ${props.theme.colors.text.additional};
        `}
`;
