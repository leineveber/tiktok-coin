import { Typography } from 'antd';
import { Card } from 'components/common/Card/Card';
import styled from 'styled-components';
import { hexToRGB } from 'utils/utils';

export const BaseCard = styled(Card)`
  overflow: hidden;
  height: 100%;
  cursor: pointer;

  & .ant-card-body {
    height: 100%;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 3.125rem;
      height: 3.125rem;
      top: 0;
      right: 0;
      border-radius: 50%;
      transform: translate(60%, 40%);

      background-color: ${(props) => hexToRGB(props.theme.colors.main.background, 0.2)};
    }

    &::after {
      content: '';
      position: absolute;
      width: 3.125rem;
      height: 3.125rem;
      top: 0;
      right: 0;
      border-radius: 50%;
      transform: translate(20%, -30%);

      background-color: ${(props) => hexToRGB(props.theme.colors.main.background, 0.2)};
    }

    background: ${(props) => props.background};
  }
`;

export const ImgWrapper = styled.div`
  width: 2rem;
  height: 2rem;
`;

export const Title = styled(Typography.Text)``;
