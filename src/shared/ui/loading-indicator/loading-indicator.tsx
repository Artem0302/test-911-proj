import React, {memo} from 'react';
import {ActivityIndicator, StyleProp, ViewStyle} from 'react-native';

import {COLORS} from '@shared/constants';
import {TCOLORS} from '@shared/types';

type ILoadingIndicatorProps = {
  size?: 'large' | 'small';
  color?: TCOLORS | string;
  style?: StyleProp<ViewStyle>;
};

export const LoadingIndicator = memo(
  ({size, color, style}: ILoadingIndicatorProps) => (
    <ActivityIndicator
      size={size ?? 'large'}
      color={color ?? COLORS.blue}
      style={style}
    />
  ),
);
