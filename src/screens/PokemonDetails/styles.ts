import FastImage from 'react-native-fast-image';
import styled, { css } from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  textShadow: {
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 10
  },
});

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

export const PokemonName = styled.Text`
  text-transform: capitalize;
  align-self: flex-start;
  font-size: 28px;

  ${text};
`;

export const Header = styled.View`
  width: 100%;
`;

export const NameAndNumberIdWrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const PokemonNumberId = styled.Text`
  align-self: flex-end;
  font-size: 22px;

  ${text};
`;
