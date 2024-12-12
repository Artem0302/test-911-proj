import {MainNavigator} from '@navigation/main-navigator';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

export function RootProvider() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
