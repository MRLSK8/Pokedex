import React, { memo } from 'react';

import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import {
  PokemonImageBackground,
  PokemonNumber,
  PokeballIcon,
  PokemonImage,
  PokemonName,
  Container,
  styles,
} from './styles';

import { addPadLeftToNumber } from '~/utils';
interface PokemonItemProps {
  image: string;
  name: string;
  id: number;
}

const PokemonItem = ({ id, name, image }: PokemonItemProps) => {
  const { navigate } = useNavigation();

  const handleGoToDetails = (id: number) => {
    navigate('PokemonDetails', { id });
  };

  return (
    <Container
      style={styles.shadow}
      onPress={() => handleGoToDetails(id)}
    >
      <PokemonImageBackground style={[styles.shadow]}>
        <PokemonImage style={styles.shadow} source={{ uri: image }} />
      </PokemonImageBackground>
      <PokemonName>{name}</PokemonName>
      <PokemonNumber>{addPadLeftToNumber(id, 4)}</PokemonNumber>
      <PokeballIcon />
    </Container>
  );
};

export default memo(PokemonItem);
