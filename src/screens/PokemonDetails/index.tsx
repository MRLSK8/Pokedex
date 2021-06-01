import React from 'react';

import { Text, SafeAreaView } from 'react-native';

import { Container } from './styles';

function PokemonDetails() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Container>
        <Text>PokemonDetails</Text>
      </Container>
    </SafeAreaView>
  );
};

export default PokemonDetails;
