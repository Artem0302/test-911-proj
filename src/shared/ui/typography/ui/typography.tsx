import React from 'react';
import {StyleProp, TextStyle} from 'react-native';

import {
  TCOLORS,
  TEllipsizeMode,
  TFontWeightForText,
  TTextAlign,
} from '@shared/types';
import {Text} from '@shared/ui';
import {
  TYPOGRAPHY_LINE_HEIGHTS,
  TYPOGRAPHY_SIZES,
  TYPOGRAPHY_WEIGHTS,
} from '../model';
import {TTypographyVariants} from '../types';

interface ITypography {
  children: string | number;
  variant?: TTypographyVariants;
  fontSize?: number;
  color?: TCOLORS | string;
  uppercase?: boolean;
  style?: StyleProp<TextStyle>;
  lineHeight?: number;
  numberOfLines?: number;
  ellipsizeMode?: TEllipsizeMode;
  allowFontScaling?: boolean;
  textAlign?: TTextAlign;
}

export const Typography = ({
  children,
  variant = 'regular_16',
  fontSize,
  color,
  uppercase,
  style,
  numberOfLines,
  lineHeight,
  ellipsizeMode,
  allowFontScaling,
  textAlign,
}: ITypography) => {
  return (
    <Text
      fontSize={fontSize || TYPOGRAPHY_SIZES[variant]}
      color={color}
      lineHeight={lineHeight || TYPOGRAPHY_LINE_HEIGHTS[variant]}
      fontWeight={TYPOGRAPHY_WEIGHTS[variant] as TFontWeightForText}
      uppercase={uppercase}
      style={style}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      allowFontScaling={allowFontScaling}
      textAlign={textAlign}>
      {children}
    </Text>
  );
};
