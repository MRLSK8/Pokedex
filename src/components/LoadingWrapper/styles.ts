import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #b9fdab;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const AnimationWrapper = styled(Animatable.View).attrs({
  useNativeDriver: true,
  animation: "bounce",
  duration: 2000,
})`
  width: 100%;
  height: 100%;
`;
