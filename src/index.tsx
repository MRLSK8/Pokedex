import React from 'react';
import './config/StatusBarConfig';
import Routes from './routes';

import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer >
  );
};

export default App;
