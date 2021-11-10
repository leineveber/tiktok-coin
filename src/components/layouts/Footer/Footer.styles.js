import { Button } from 'components/common/Button/Button';
import styled, { css } from 'styled-components';

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 0.15rem;
`;

export const Btn = styled(Button)`
  height: unset;
  line-height: 1.3;
  padding: 0;
  flex-shrink: 0;
  width: 18%;
  font-size: 0.65rem;

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
          box-shadow: ${props.theme.shadow.button};
        `
      : css`
          border: 0;
          background: transparent;
          box-shadow: none;

          color: ${props.theme.colors.text.additional};
        `}
`;
