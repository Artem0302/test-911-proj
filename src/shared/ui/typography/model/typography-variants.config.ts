import {IS_IOS} from '@shared/constants';

export const TYPOGRAPHY_SIZES = {
  h1: 24,
  h2: 18,
  regular_16: 16,
  semibold_14: 14,
  medium_14: 14,
  regular_14: 14,
  regular_12: 12,
  regular_11: 11,
  medium_16: 16,
};

export const TYPOGRAPHY_WEIGHTS = {
  h1: IS_IOS ? '500' : '700',
  h2: IS_IOS ? '600' : '800',
  regular_16: IS_IOS ? '400' : '400',
  semibold_14: IS_IOS ? '600' : '800',
  medium_14: IS_IOS ? '500' : '600',
  regular_14: IS_IOS ? '400' : '400',
  regular_12: IS_IOS ? '400' : '500',
  regular_11: IS_IOS ? '400' : '500',
  medium_16: IS_IOS ? '500' : '600',
};

export const TYPOGRAPHY_LINE_HEIGHTS = {
  h1: 32,
  h2: undefined,
  regular_16: undefined,
  semibold_14: undefined,
  medium_14: undefined,
  regular_14: undefined,
  regular_12: undefined,
  regular_11: undefined,
  medium_16: undefined,
};
