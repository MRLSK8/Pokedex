import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
  border-radius: 14px;
  align-items: center;
  padding: 18px;
  margin: 10px;
  width: 45%;
`;

export const PokemonImage = styled(FastImage).attrs({
  resizeMode: 'cover'
})`
  width: 80px;
  height: 80px;
`;

export const PokemonName = styled.Text`
  font-family: 'Ubuntu-Bold';
  text-transform: capitalize;
  letter-spacing:  0.4px;
  font-size: 18px;
`;

export const PokemonNumber = styled.Text`
  font-family: 'Ubuntu-LigthItalic';
  letter-spacing:  1px;
  font-size: 16px;
  margin-top: 2px;
`;

export const PokeballIcon = styled(MaterialCommunityIcons).attrs({
  name: 'pokeball',
  size: 20,
  color: '#6666'
})`
  position: absolute;
  bottom: 14px;
  right: 14px;
`;

export const PokemonImageBackground = styled.View`
  background-color: #49857a;
  border-radius: 100px;
  margin-bottom: 8px;
  padding: 14px;
 `;
