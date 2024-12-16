import {ReactNode} from 'react';
import {TToastIconVariants, TToastVariant} from '../types';

export function getToastIcon(
  icon: TToastIconVariants | ReactNode,
): TToastVariant | ReactNode {
  if (typeof icon !== 'string') {
    return icon;
  }

  switch (icon) {
    case 'info':
      return 'ticket';
    case 'error':
      return 'error';
    case 'success':
      return 'check';
    default:
      return 'warning';
  }
}
