import styled from 'styled-components';
import { Typography, Row } from 'antd';
import { Button } from 'components/common/Button/Button';

export const ProfileHeaderRow = styled(Row)`
  text-align: center;
`;

export const Text = styled(Typography.Text)`
  font-weight: ${(props) => props.theme.typography.weight.thin};

  color: ${(props) => props.theme.colors.text.main};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.typography.size.lg};
  }
`;

export const Btn = styled(Button)`
  border-radius: ${(props) => props.theme.border.medium} !important;
`;
