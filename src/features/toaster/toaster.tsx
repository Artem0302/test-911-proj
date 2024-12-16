import React, {useCallback} from 'react';
import {KeyboardAvoidingView, View} from 'react-native';

import {IS_IOS} from '@shared/constants';
import {useError} from '@shared/core';
import {ToastMessage} from '@shared/ui';
import styles from './toaster.styles';

export function Toaster() {
  const {toasts} = useError();
  const keyboardVerticalOffset = IS_IOS ? 10 : 0;

  const toastsContent = useCallback(() => {
    if (!toasts?.length) {
      return null;
    }

    return toasts.map(el => (
      <View key={el.id}>
        <ToastMessage toast={el} />
      </View>
    ));
  }, [toasts]);

  return (
    <View style={styles.screen} pointerEvents="box-none">
      <KeyboardAvoidingView
        keyboardVerticalOffset={keyboardVerticalOffset}
        behavior={IS_IOS ? 'position' : 'height'}>
        {toastsContent()}
      </KeyboardAvoidingView>
    </View>
  );
}
