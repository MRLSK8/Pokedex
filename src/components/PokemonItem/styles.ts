import { RectButton } from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export const Container = styled(RectButton)`
  background-color: #fff;
  border-radius: 6px;
  padding: 16px;
  margin: 10px;
  width: 45%;
`;

export const PokemonImage = styled(FastImage).attrs({
  resizeMode: 'cover'
})`
  width: 60px;
  height: 60px;
`;
