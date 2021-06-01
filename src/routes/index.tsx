import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RFPercentage } from "react-native-responsive-fontsize";
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
          title: 'Pokedex',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Ubuntu-Bold',
            fontSize: RFPercentage(3),
            textShadowColor: 'rgba(160, 11, 11, 0.5)',
            textShadowOffset: { width: -0.5, height: 0.5 },
            textShadowRadius: 10,
            letterSpacing: 0.3,
            color: '#08083c',
          },
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
