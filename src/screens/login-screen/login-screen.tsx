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
import {useError} from '@shared/core';
import {TLoginScreenNavProp} from '@shared/types';
import {Input, TextButton, Typography} from '@shared/ui';
import styles from './login-screen.styles.ts';

export function LoginScreen() {
  const {t} = useTranslation('screens');
  const {success} = useError();
  const navigation = useNavigation<TLoginScreenNavProp>();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const disabled = !login || !password;

  const onPress = useCallback(() => {
    success(t('login-screen.success-login'));
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
              {t('login-screen.welcome')}
            </Typography>
            <View style={styles.body}>
              <Typography variant={'medium_14'}>
                {t('login-screen.log-in-to-account')}
              </Typography>
              <Input
                inputStyle={styles.input}
                isBorder
                style={styles.input_wrapper}
                value={login}
                onChange={setLogin}
                placeholder={t('login-screen.email')}
              />
              <Input
                inputStyle={styles.input}
                isBorder
                style={styles.input_wrapper}
                value={password}
                onChange={setPassword}
                placeholder={t('login-screen.password')}
              />
              <TextButton
                onPress={onPress}
                style={styles.button}
                fontSize={16}
                disabled={disabled}>
                {t('login-screen.login')}
              </TextButton>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
