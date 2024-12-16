import {COLORS} from '@shared/constants';
import {TToastVariant} from '@shared/core';

export function getToastColor(type?: TToastVariant) {
  switch (type) {
    case 'error':
      return COLORS.red;
    case 'success':
      return COLORS.green;
    case 'warning':
      return COLORS.orange;
    default:
      return COLORS.blue;
  }
}
