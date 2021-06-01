import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const LoadingIconField = styled.View`
  margin: 8px 0 16px;
`;

export const PokemonList = styled.FlatList.attrs({
  numColumns: 2,
  contentContainerStyle: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  }
})`
  flex: 1;
`;

export const GradientBackGround = styled(LinearGradient).attrs({
  colors: Platform.OS === 'ios' ? ['#ffffff00', '#d3d3d3'] : ['transparent', '#d3d3d3']
})`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
`;


export const GradientShadow = styled(LinearGradient).attrs({
  colors: Platform.OS === 'ios' ? ['#d3d3d3', 'transparent'] : ['#d3d3d3', 'transparent']
})`
  position: absolute;
  width: 100%;
  height: 30px;
  z-index: 3;
`;
