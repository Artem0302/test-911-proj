import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './home-screen.styles.ts';

export function HomeScreen() {
  const {t} = useTranslation('screens');

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.screen}>
        <Text>{t('home-screen.hello')}</Text>
      </View>
    </SafeAreaView>
  );
}
