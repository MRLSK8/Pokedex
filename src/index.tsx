import React from 'react';
import './config/StatusBarConfig';
import Routes from './routes';

import { NavigationContainer } from '@react-navigation/native';

import { PokemonContextProvider } from '~/hooks/pokemonContext';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <PokemonContextProvider>
        <Routes />
      </PokemonContextProvider>
    </NavigationContainer >
  );
};

export default App;
