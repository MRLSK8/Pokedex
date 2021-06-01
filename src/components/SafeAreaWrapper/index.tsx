import React, { ReactNode } from 'react';

import { SafeArea } from './styles';

interface SafeAreaWrapperProps {
  children: ReactNode;
}

function SafeAreaWrapper({ children }: SafeAreaWrapperProps) {
  return (
    <SafeArea>
      {children}
    </SafeArea>
  );
};

export default SafeAreaWrapper;
