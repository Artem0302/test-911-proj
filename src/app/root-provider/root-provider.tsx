import {MainNavigator} from '@navigation/main-navigator';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Toaster} from '@features/toaster';
import {ApiProvider, ErrorProvider} from '@shared/core';

export function RootProvider() {
  return (
    <ErrorProvider>
      <ApiProvider>
        <NavigationContainer>
          <MainNavigator />
          <Toaster />
        </NavigationContainer>
      </ApiProvider>
    </ErrorProvider>
  );
}
