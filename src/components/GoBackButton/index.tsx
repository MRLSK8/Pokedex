import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Button, ArrowLeft } from './styles';

const GoBackButton: React.FC = () => {
  const { canGoBack, goBack } = useNavigation();

  const handleGoBack = () => {
    if (canGoBack()) goBack();
  }

  return (
    <Button onPress={handleGoBack}>
      <ArrowLeft />
    </Button>
  );
};

export default GoBackButton;
