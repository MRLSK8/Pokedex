import React, { memo } from 'react';

import { Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Container, PokemonImage, styles } from './styles';
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
      <PokemonImage source={{ uri: image }} />
      <Text>{name}</Text>
      <Text>{addPadLeftToNumber(id, 4)}</Text>
    </Container>
  );
};

export default memo(PokemonItem);
