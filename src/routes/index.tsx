import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RFPercentage } from "react-native-responsive-fontsize";

import { usePokemonContext } from '~/hooks/pokemonContext';
import { PokemonDetails, PokemonsList } from '~/screens';
import { GoBackButton } from '~/components';

const { Screen, Navigator } = createStackNavigator();

const Routes: React.FC = () => {
  const { pokemons } = usePokemonContext();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#b9fdab' },
      }}
      initialRouteName={'PokemonsList'}
    >
      <Screen
        name="PokemonsList"
        options={{
          title: pokemons.length > 0 ? 'Pokedex' : '',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Pokemon-Font-Regular',
            fontSize: RFPercentage(3),
            letterSpacing: 2,
            color: '#444',
          },
          headerStyle: {
            elevation: 0,
            height: 80,
            backgroundColor: '#b9fdab',
          },
        }}
        component={PokemonsList}
      />
      <Screen
        name="PokemonDetails"
        options={{
          title: '',
          headerShown: true,
          headerTransparent: true,
          headerStyle: {
            elevation: 0,
          },
          headerLeft: () => <GoBackButton />,
        }}
        component={PokemonDetails}
      />
    </Navigator>
  );
};

export default Routes;
