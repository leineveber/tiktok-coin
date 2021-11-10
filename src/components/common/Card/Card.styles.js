import { Card } from 'antd';
import styled from 'styled-components';

export const CommonCard = styled(Card)`
  box-shadow: ${(props) => props.theme.shadow.card};
`;
