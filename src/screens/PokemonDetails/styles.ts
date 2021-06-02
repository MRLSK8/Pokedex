
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
  top: 0;
  align-self: center;
`;
