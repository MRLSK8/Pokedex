import React, { ReactNode } from 'react';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import { Container, AnimationWrapper } from './styles';

interface LoadingWrapper {
  children: ReactNode;
  isLoading: boolean;
}

function LoadingWrapper({ isLoading, children }: LoadingWrapper) {
  if (!isLoading) return <>{children}</>;

  return (
    <Container>
      <AnimationWrapper>
        <LottieView source={require('~/assets/LottieJsonFiles/pikachu.json')} autoPlay loop />
      </AnimationWrapper>
    </Container>
  );
};

export default LoadingWrapper;
