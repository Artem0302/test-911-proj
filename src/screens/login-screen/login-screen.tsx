import React from 'react';
import {useTranslation} from 'react-i18next';
import {StatusBar, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import {Typography} from '@shared/ui';
import styles from './login-screen.styles.ts';

export function LoginScreen() {
  const {t} = useTranslation('screens');

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Typography style={styles.title} variant={'h1'} textAlign={'center'}>
        {t('home-screen.welcome')}
      </Typography>
      <View style={styles.body}>
        <Typography variant={'medium_16'}>
          {t('home-screen.welcome')}
        </Typography>
      </View>
    </SafeAreaView>
  );
}
