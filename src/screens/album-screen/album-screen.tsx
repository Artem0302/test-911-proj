import React from 'react';
import {Text, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './album-screen.styles.ts';

export function AlbumScreen() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.screen}>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
}
