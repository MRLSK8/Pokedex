import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Button = styled(BorderlessButton).attrs({
  hitSlop: 20
})`
  padding: 18px;
 `;

export const ArrowLeft = styled(SimpleLineIcons).attrs({
  name: 'arrow-left',
  color: '#666',
  size: 18,
})``;
