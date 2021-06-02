
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled, { css } from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import LottieView from 'lottie-react-native';

import {
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';

export const styles = StyleSheet.create({
  textShadow: {
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowRadius: 10
  },
});

const { width, height } = Dimensions.get('window');

interface ModalProps {
  isFullyOpened: boolean;
}

const text = css`
  font-family: 'Ubuntu-Bold';
  letter-spacing: 1px;
  color: #fefefe;
`;

export const Container = styled.View`
  background-color: #b9fdab;
  align-items: center;
  padding: 8px 18px;
  flex: 1;
`;

export const PokemonImage = styled(FastImage).attrs({
  resizeMode: 'cover'
})`
  height: 300px;
  width: 300px;
`;

export const PokemonName = styled(Animated.Text)`
  text-transform: capitalize;
  align-self: flex-start;
  font-size: 28px;

  ${text};
`;

export const Header = styled.View`
  min-height: 100px;
  width: 100%;
`;

export const HeaderItemsWrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const PokemonNumberId = styled.Text`
  align-self: flex-end;
  font-size: 22px;

  ${text};
`;

export const Abilities = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  max-width: 80%;
  margin: 8px 0;
`;

export const AbilityWrapper = styled.View`
  background-color: #48cfaf;
  border-radius:  50px;
  margin: 8px 4px 0 0;
  padding: 6px 16px;
`;

export const AbilityText = styled.Text`
  text-transform: capitalize;
  letter-spacing: 0.5px;
  font-size: 12px;
  color: #fefefe;
`;

export const Lottie = styled(LottieView).attrs({
  autoPlay: true,
  loop: true,
})`
  margin-right: 22px;
  height: 22px;
  width: 22px;
`;

export const Modal = styled(Animated.View) <ModalProps>`
  height: ${props => (props.isFullyOpened ? `${height - 25}px` : '60%')};
  border-top-right-radius: 42px;
  border-top-left-radius: 42px;
  background-color: #f6f6f8;
  padding: 48px 26px 32px;
  position: absolute;
  width: ${width}px;
  bottom: -80px;
`;

export const DragIcon = styled(MaterialCommunityIcons).attrs({
  name: 'drag-horizontal',
  color: '#666',
  size: 32,
})`
  position: absolute;
  align-self: center;
  top: 0;
`;

export const StatWrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
  width: 100%;
`;

export const StatGrafic = styled.View`
  background-color: #d3d3d340;
  border-radius: 8px;
  width: 100%;
  height: 6px;
`;

export const StatGraficValue = styled.View<{ value: number }>`
  width: ${props => `${props.value}%`};
  border-radius: 8px;
  max-width: 100%;
  height: 6px;

  ${props => (props.value >= 0 && props.value < 40) && css`
    background-color: #CC0000;
  `}

  ${props => (props.value >= 40 && props.value < 70) && css`
    background-color: #B3A125;
  `}

  ${props => (props.value >= 70) && css`
    background-color: #49857a;
  `}
`;

export const StatValue = styled.Text`
  font-family: 'Ubuntu-BoldItalic';
  text-transform: capitalize;
  text-align: center;
  font-size: 16px;
`;

export const StatName = styled.Text`
  font-family: 'Ubuntu-Regular';
  text-transform: capitalize;
  font-size: 14px;
`;

export const StatFieldWrapper = styled.View<{ flex: number }>`
  flex: ${props => props.flex};
`;
