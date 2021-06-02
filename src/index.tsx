import React from 'react';

import './config/statusBarConfig';

import { NavigationContainer } from '@react-navigation/native';
import { SWRConfig } from 'swr';

import { PokemonContextProvider } from './hooks/pokemonContext';
import { fetcher } from './services/api';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SWRConfig value={{
        revalidateOnMount: true,
        refreshInterval: 0,
        fetcher,
      }}>
        <PokemonContextProvider>
          <Routes />
        </PokemonContextProvider>
      </SWRConfig>
    </NavigationContainer >
  );
};

export default App;
