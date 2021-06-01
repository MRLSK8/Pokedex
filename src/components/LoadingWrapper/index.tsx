import React, { ReactNode } from 'react';
import LottieView from 'lottie-react-native';

import { Container } from './styles';

interface LoadingWrapper {
  children: ReactNode;
  isLoading: boolean;
}

function LoadingWrapper({ isLoading, children }: LoadingWrapper) {
  if (!isLoading) return <>{children}</>;

  return (
    <Container>
      <LottieView source={require('~/assets/LottieJsonFiles/pikachu.json')} autoPlay loop />
    </Container>
  );
};

export default LoadingWrapper;
