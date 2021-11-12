import { Typography } from 'antd';
import { Card } from 'components/common/Card/Card';
import styled, { css } from 'styled-components';
import { hexToRGB } from 'utils/utils';

export const MainCard = styled(Card).withConfig({
  shouldForwardProp: (prop) => !['isPrimary'].includes(prop),
})`
  overflow: hidden;

  & .ant-card-body {
    position: relative;

    background: ${(props) => props.background};

    ${(props) =>
      props.isPrimary &&
      css`
        &::before {
          content: '';
          position: absolute;
          left: -30px;
          bottom: 0;
          width: 5rem;
          height: 6rem;

          border-radius: 20px 20px 20px 50px;

          transform: rotate(15deg);

          background: ${hexToRGB(props.theme.colors.main.background, 0.15)};
        }

        &::after {
          content: '';
          position: absolute;
          left: 30%;
          top: -20px;
          width: 5rem;
          height: 6rem;

          border-radius: 20px 20px 20px 50px;

          transform: rotate(15deg);

          background: ${hexToRGB(props.theme.colors.main.background, 0.15)};
        }
      `}
  }
`;

export const Title = styled(Typography.Text)`
  font-weight: 600;

  color: ${(props) => props.theme.colors.text.main};

  font-size: ${(props) => props.theme.typography.size.lg};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.typography.size.xxl};
  }
`;

export const Description = styled(Typography.Text)`
  opacity: 0.5;

  color: ${(props) => props.theme.colors.text.main};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.typography.size.xl};
  }
`;

export const ImgWrapper = styled.div`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  width: 3.5rem;
  height: 3.5rem;

  @media only screen and ${(props) => props.theme.media.md} {
    width: 6rem;
    height: 6rem;
  }
`;
