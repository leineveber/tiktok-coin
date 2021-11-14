import styled from 'styled-components';
import { Avatar as AntAvatar, Typography, Row } from 'antd';
import { hexToRGB } from 'utils/utils';

export const AddRow = styled(Row)`
  padding: 0.5rem 0;

  border-top: 1px solid ${(props) => props.theme.colors.border};

  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const Avatar = styled(AntAvatar)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => hexToRGB(props.theme.colors.background.contrast, 0.07)};

  color: ${(props) => props.theme.colors.background.icon};
`;

export const Title = styled(Typography.Text)`
  display: block;
  line-height: 1;

  color: ${(props) => props.theme.colors.text.contrast};

  font-weight: ${(props) => props.theme.typography.weight.semiBold};
`;

export const Description = styled(Typography.Text)`
  opacity: 0.6;
  line-height: 1;

  font-weight: ${(props) => props.theme.typography.weight.medium};
`;
