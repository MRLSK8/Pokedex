import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #b9fdab;
`;

export const AnimationWrapper = styled(Animatable.View).attrs({
  animation: "bounce",
  duration: 2000,
  useNativeDriver: true,
})`
  width: 100%;
  height: 100%;
`;
