import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import {IS_IOS} from '@shared/constants';
import {TLoginScreenNavProp} from '@shared/types';
import {Input, TextButton, Typography} from '@shared/ui';
import styles from './login-screen.styles.ts';

export function LoginScreen() {
  const {t} = useTranslation('screens');
  const navigation = useNavigation<TLoginScreenNavProp>();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const disabled = !login || !password;

  const onPress = useCallback(() => {
    navigation.navigate('MAIN.HOME_SCREEN');
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <KeyboardAvoidingView
        behavior={IS_IOS ? 'padding' : 'height'}
        style={styles.wrapper}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Typography
              style={styles.title}
              variant={'h1'}
              textAlign={'center'}>
              {t('home-screen.welcome')}
            </Typography>
            <View style={styles.body}>
              <Typography variant={'medium_14'}>
                {t('home-screen.log-in-to-account')}
              </Typography>
              <Input
                inputStyle={styles.input}
                isBorder
                style={styles.input_wrapper}
                value={login}
                onChange={setLogin}
                placeholder={t('home-screen.email')}
              />
              <Input
                inputStyle={styles.input}
                isBorder
                style={styles.input_wrapper}
                value={password}
                onChange={setPassword}
                placeholder={t('home-screen.password')}
              />
              <TextButton
                onPress={onPress}
                style={styles.button}
                fontSize={16}
                disabled={disabled}>
                {t('home-screen.login')}
              </TextButton>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
