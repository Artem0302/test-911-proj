import React, {memo, useMemo} from 'react';
import {Insets, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';

import {COLORS, HIT_SLOP_10} from '@shared/constants';
import {TCOLORS} from '@shared/types';
import {LoadingIndicator, Typography} from '@shared/ui';

interface ITextButtonProps {
  children: string;
  onPress?: () => void;
  disabled?: boolean;
  fontSize?: number;
  style?: StyleProp<ViewStyle>;
  hitSlop?: Insets | number;
  loading?: boolean;
  activeTextColor?: TCOLORS | string;
  disabledTextColor?: TCOLORS | string;
  activeBgColor?: TCOLORS | string;
  disabledBgColor?: TCOLORS | string;
}

export const TextButton = memo(
  ({
    children,
    onPress,
    disabled = false,
    fontSize,
    style,
    hitSlop = HIT_SLOP_10,
    loading = false,
    activeTextColor = COLORS.white,
    disabledTextColor = COLORS.gray,
    activeBgColor = COLORS.blue,
    disabledBgColor = COLORS.light_blue,
  }: ITextButtonProps) => {
    const textColor = useMemo(
      () => (disabled ? disabledTextColor : activeTextColor),
      [disabled, disabledTextColor, activeTextColor],
    );

    const bgColor = useMemo(
      () => (disabled ? disabledBgColor : activeBgColor),
      [disabled, disabledBgColor, activeBgColor],
    );

    if (loading) {
      return <LoadingIndicator color={textColor} size="small" />;
    }

    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[{backgroundColor: bgColor}, style]}
        hitSlop={hitSlop}>
        <Typography variant="medium_16" color={textColor} fontSize={fontSize}>
          {children}
        </Typography>
      </TouchableOpacity>
    );
  },
);
