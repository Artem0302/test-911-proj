import React, {memo, ReactNode} from 'react';
import {Text as NativeText, StyleProp, TextStyle} from 'react-native';

import {COLORS} from '@shared/constants';
import {
  TCOLORS,
  TEllipsizeMode,
  TFontWeightForText,
  TTextAlign,
} from '@shared/types';
import styles from './text.styles';

interface ITextProps {
  children?: string | ReactNode;
  fontSize?: number;
  color?: TCOLORS | string;
  fontWeight?: TFontWeightForText;
  lineHeight?: number;
  uppercase?: boolean;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  ellipsizeMode?: TEllipsizeMode;
  allowFontScaling?: boolean;
  textAlign?: TTextAlign;
}

export const Text = memo(
  ({
    children,
    fontSize = 14,
    color = COLORS.black,
    fontWeight = '400',
    lineHeight,
    uppercase = false,
    style,
    numberOfLines,
    ellipsizeMode = 'tail',
    allowFontScaling = false,
    textAlign,
  }: ITextProps) => {
    return (
      <NativeText
        style={[
          {
            color: color,
            fontSize: fontSize,
            fontWeight: fontWeight,
            lineHeight: lineHeight || fontSize + 4,
            textAlign: textAlign,
          },
          uppercase && styles.uppercase,
          style,
        ]}
        numberOfLines={numberOfLines}
        ellipsizeMode={ellipsizeMode}
        allowFontScaling={allowFontScaling}>
        {children}
      </NativeText>
    );
  },
);
