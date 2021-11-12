import { Typography } from 'antd';
import styled from 'styled-components';
import { Card } from 'components/common/Card/Card';

export const HeaderCard = styled(Card)`
  background: ${(props) => props.theme.colors.main.primary};
`;

export const BalanceText = styled(Typography.Text)`
  opacity: 0.7;

  font-size: ${(props) => props.theme.typography.size.lg};

  color: ${(props) => props.theme.colors.text.main};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.typography.size.xxl};
  }
`;

export const ValueText = styled(Typography.Text)`
  font-size: ${(props) => props.theme.typography.size.xl};

  font-weight: ${(props) => props.theme.typography.weight.semiBold};

  color: ${(props) => props.theme.colors.text.main};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.typography.size.xxxl};
  }
`;

export const CurrencyText = styled(Typography.Text)`
  font-size: ${(props) => props.theme.typography.size.lg};

  font-weight: ${(props) => props.theme.typography.weight.medium};

  color: ${(props) => props.theme.colors.text.main};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.typography.size.xxl};
  }
`;

export const ExchangeText = styled(Typography.Text)`
  opacity: 0.5;

  color: ${(props) => props.theme.colors.text.main};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.typography.size.xl};
  }
`;
