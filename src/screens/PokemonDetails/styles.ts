
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import styled, { css } from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import LottieView from 'lottie-react-native';

import {
  StyleSheet,
  Dimensions,
  Animated,
  Platform,
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

export const Types = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  max-width: 80%;
  margin: 8px 0;
`;

export const TypeWrapper = styled.View`
  background-color: #48cfaf;
  border-radius:  50px;
  margin: 8px 4px 0 0;
  padding: 6px 16px;
`;

export const TypeText = styled.Text`
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
  height: ${props => (props.isFullyOpened ? `${height - 205}px` : '62%')};
  border-top-right-radius: 48px;
  border-top-left-radius: 48px;
  background-color: #f8f8f8;
  padding: 38px 26px 32px;
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
  background-color: #d3d3d360;
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
  letter-spacing: 1px;
  font-size: 14px;
`;

export const StatFieldWrapper = styled.View<{ flex: number }>`
  flex: ${props => props.flex};
`;

export const AbilitiesWrapper = styled.View`
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 12px;
  flex-wrap: wrap;
  width: 100%;
`;

export const AbilityWrapper = styled.View`
  border-bottom-right-radius: 90px;
  border-top-left-radius: 90px;
  justify-content:  center;
  align-items: center;
  margin-right: 8px;
  height: 70px;
  width: 110px;
`;

export const AbilityName = styled.Text`
  font-family: 'Ubuntu-Medium';
  text-transform: capitalize;
  letter-spacing: 1px;
  font-size: 10px;
  color: #fefefe;
`;

export const InfoTitle = styled.Text`
  font-family: 'Ubuntu-Bold';
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 28px 0 8px;
  font-size: 14px;
  color: #0a3e25;
`;

export const InfoWrapper = styled.View`
  flex-direction: row;
`;

export const InfoValue = styled.Text`
  font-family: 'Ubuntu-Regular';
  text-transform: capitalize;
  margin-bottom: 2px;
  font-size: 16px;
  color: #13532d;
`;

export const InfoLabel = styled.Text`
  font-family: 'Ubuntu-Light';
  letter-spacing: 1px;
  font-size: 10px;
  margin-top: 4px;
  color: #13532d;
`;

export const Divider = styled.View`
  background-color: #dee7e290;
  height: 100%;
  width: 1px;
`;

export const Info = styled.View`
  justify-content: center;
  align-items: center;
  height: 60px;
  flex: 1;
`;

export const GradientBackGround = styled(LinearGradient).attrs({
  colors: Platform.OS === 'ios' ? ['#358856', '#28b862'] : ['#358856', '#28b862']
})`
  border-bottom-right-radius: 90px;
  border-top-left-radius: 90px;

`;
