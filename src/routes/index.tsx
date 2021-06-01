import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { PokemonDetails, PokemonsList } from '~/screens';
import { GoBackButton } from '~/components';

const { Screen, Navigator } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#FFFFFF' },
      }}
      initialRouteName={'PokemonsList'}
    >
      <Screen
        name="PokemonsList"
        options={{
          title: '',
          headerShown: true,
          headerTransparent: true,
          headerStyle: {
            elevation: 0,
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
