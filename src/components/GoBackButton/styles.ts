import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styled from 'styled-components/native';
import { Pressable } from 'react-native';

export const Button = styled(Pressable).attrs({
  hitSlop: 20
})`
  margin-left: 16px;
  padding: 16px;
 `;

export const ArrowLeft = styled(SimpleLineIcons).attrs({
  name: 'arrow-left',
  size: 18,
  color: '#003366'
})``;