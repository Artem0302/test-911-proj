import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  memo,
  useCallback,
} from 'react';
import {
  DimensionValue,
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import {COLORS, IS_IOS} from '@shared/constants';
import {LoadingIndicator} from '@shared/ui';
import {
  TAutoCapitalize,
  TInputAutoComplete,
  TInputContentType,
  TKeyboardType,
  TReturnKeyType,
} from '../types';
import {InputClearButton} from './components';
import styles from './input.styles';

type TOnChangeValue = (value: string) => void;

interface TInputCustomProps {
  value?: string;
  onChange?: Dispatch<SetStateAction<string>> | TOnChangeValue;
  width?: DimensionValue;
  clearButton?: boolean;
  keyboardType?: TKeyboardType;
  textContentType?: TInputContentType;
  autoComplete?: TInputAutoComplete;
  multiline?: boolean;
  disabled?: boolean;
  returnKeyType?: TReturnKeyType;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  autoCapitalize?: TAutoCapitalize;
  isPassword?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  isDark?: boolean;
  isBorder?: boolean;
  allowFontScaling?: boolean;
}

type TInputProps = TInputCustomProps &
  Omit<TextInputProps, keyof TInputCustomProps>;

export const Input = memo(
  ({
    value,
    onChange,
    width = '100%',
    clearButton = true,
    keyboardType,
    textContentType = 'none',
    autoComplete = 'off',
    multiline,
    disabled = false,
    startAdornment,
    endAdornment,
    isPassword = false,
    loading,
    style,
    inputStyle,
    isDark = false,
    isBorder = false,
    returnKeyType,
    autoCapitalize,
    allowFontScaling = false,
    ...otherProps
  }: TInputProps) => {
    const clearHandler = useCallback(() => {
      onChange?.('');
    }, [onChange]);

    const suffixContent = useCallback(() => {
      if (endAdornment || loading) {
        return loading ? (
          <LoadingIndicator size="small" color={COLORS.gray} />
        ) : (
          endAdornment
        );
      } else if (clearButton && value?.length) {
        return <InputClearButton isDark={isDark} onPress={clearHandler} />;
      }

      return null;
    }, [endAdornment, loading, value]);

    return (
      <View
        style={[
          {
            width: width,
            opacity: disabled ? 0.6 : 1,
          },
          style,
        ]}>
        <TextInput
          style={[
            styles.input,
            disabled && styles.isDisabled,
            {
              borderColor: isBorder ? COLORS.gray_light : undefined,
              borderWidth: isBorder ? 1 : undefined,
              borderRadius: isBorder ? 16 : 0,
              paddingLeft: startAdornment ? 44 : 16,
              paddingRight:
                endAdornment || loading || isPassword || clearButton ? 44 : 20,
              color: COLORS.black,
            },
            IS_IOS && {paddingTop: multiline ? 16 : 0},
            inputStyle,
          ]}
          secureTextEntry={isPassword}
          value={value}
          onChangeText={onChange}
          placeholderTextColor={COLORS.gray}
          keyboardType={keyboardType || 'default'}
          multiline={multiline}
          editable={!disabled}
          autoComplete={isPassword ? 'password' : autoComplete}
          textContentType={isPassword ? 'password' : textContentType}
          selectTextOnFocus={disabled}
          returnKeyType={returnKeyType}
          autoCapitalize={autoCapitalize}
          allowFontScaling={allowFontScaling}
          {...otherProps}
        />
        {startAdornment && (
          <View style={styles.prefix_element}>{startAdornment}</View>
        )}
        <View style={styles.suffix_element}>{suffixContent()}</View>
      </View>
    );
  },
);
