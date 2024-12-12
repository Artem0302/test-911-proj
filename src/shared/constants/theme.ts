import {StackNavigationOptions} from '@react-navigation/stack';
import {DEVICE_WIDTH, MAX_WIDTH_DEVICE} from './device';

export function adaptiveSize(size: number): number {
  return Math.round((size * DEVICE_WIDTH) / MAX_WIDTH_DEVICE);
}

export const COLORS = {
  blue: '#3B55DE',
  light_blue: '#E5E8F4',
  light_bg: '#F6F6F6',
  light_gray: '#D8D5D1',
  gray_light: '#A5A7A8',
  gray: '#B0ABA2',
  dark_gray: '#756C5D',
  black: '#000000',
  white: '#ffff',
};

export const DISABLED_HEADER_STYLE_CONFIG = {
  headerShown: false,
};

export const HEADER_STYLE_CONFIG: StackNavigationOptions = {
  headerShown: true,
  headerStyle: {
    backgroundColor: COLORS.light_bg,
  },
  headerBackTitleStyle: {
    color: COLORS.light_gray,
    fontSize: 14,
  },
  headerTintColor: COLORS.dark_gray,
  headerShadowVisible: false,
  headerTitleStyle: {
    color: COLORS.black,
    fontWeight: '500',
    fontSize: 24,
  },
};
