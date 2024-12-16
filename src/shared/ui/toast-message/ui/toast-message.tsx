import React, {memo, useCallback, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Animated, Pressable, TouchableOpacity, View} from 'react-native';

import {COLORS, HIT_SLOP_15} from '@shared/constants';
import {IToast, useError} from '@shared/core';
import {Typography} from '@shared/ui';
import {getToastColor} from '../helpers';
import {ToastsIcon} from './components';
import styles from './toast-message.styles';

type ToastMessageProps = {
  toast: IToast;
};

export const ToastMessage = memo(({toast}: ToastMessageProps) => {
  const {t} = useTranslation('errors');
  const {remove} = useError();
  const [fadeAnim] = useState(new Animated.Value(0));
  const {type, icon, title, subtitle, action} = toast;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const fadeOut = useCallback(async () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const hideToast = useCallback(() => {
    fadeOut();
    const deleteItemInArr = setTimeout(() => {
      remove(toast);
    }, 500);

    return () => clearTimeout(deleteItemInArr);
  }, [fadeOut, toast, remove]);

  const containerOnPressHandler = useCallback(() => {
    hideToast();
  }, [type, hideToast]);

  useEffect(() => {
    const timer = setTimeout(() => {
      hideToast();
    }, toast.time ?? 4000);

    return () => clearTimeout(timer);
  }, [type, hideToast, toast]);

  return (
    <Pressable onPress={containerOnPressHandler} android_disableSound>
      <Animated.View
        style={{
          ...styles.container,
          backgroundColor: getToastColor(type),
          opacity: fadeAnim,
        }}
        pointerEvents="box-none">
        <View style={styles.main}>
          <View style={styles.row_one}>
            <ToastsIcon icon={icon} />
            <Typography
              variant="medium_16"
              numberOfLines={2}
              color={COLORS.white}
              style={styles.title}>
              {title}
            </Typography>
          </View>
          {subtitle && (
            <View style={styles.row_two}>
              <Typography
                variant="regular_12"
                numberOfLines={2}
                color={COLORS.white}
                style={styles.subtitle}>
                {subtitle}
              </Typography>
            </View>
          )}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={action?.actionTarget || hideToast}
          hitSlop={HIT_SLOP_15}>
          <View style={styles.line} />
          <Typography
            variant="medium_16"
            numberOfLines={2}
            color={COLORS.white}
            style={styles.button_title}>
            {action?.buttonName || t('hide')}
          </Typography>
        </TouchableOpacity>
      </Animated.View>
    </Pressable>
  );
});
