import {StackNavigationOptions} from '@react-navigation/stack';
import {DEVICE_WIDTH, MAX_WIDTH_DEVICE} from './device';

export const HIT_SLOP_10 = {top: 10, bottom: 10, left: 10, right: 10};
export const HIT_SLOP_15 = {top: 15, bottom: 15, left: 15, right: 15};
export const HIT_SLOP_20 = {top: 20, bottom: 20, left: 20, right: 20};

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
  red: '#E30E2C',
  green: '#1ABB77',
  orange: '#FF9F21',
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
