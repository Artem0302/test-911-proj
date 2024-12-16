import {ReactNode} from 'react';

export type TToastIconVariants = 'error' | 'warning';

export type TToastVariant = 'info' | 'error' | 'success' | 'warning';

export interface IToast {
  id: string;
  type: TToastVariant;
  icon?: TToastIconVariants | ReactNode;
  title: string;
  subtitle?: string;
  action?: {
    buttonName: string;
    actionTarget: () => unknown;
  };
  time?: number;
}

export interface IAddToast {
  type: TToastVariant;
  icon?: TToastIconVariants | ReactNode;
  title: string;
  subtitle?: string;
  action?: {
    buttonName: string;
    actionTarget: () => unknown;
  };
  time?: number;
}

export interface ICallToastExtraOptions {
  icon?: ReactNode;
  subtitle?: string;
  action?: {
    buttonName: string;
    actionTarget: () => unknown;
  };
  disableLogging?: boolean;
  time?: number;
}

export interface ICallErrorToastExtraOptions {
  icon?: ReactNode;
  subtitle?: string;
  action?: {
    buttonName: string;
    actionTarget: () => unknown;
  };
  asWarning?: boolean;
  disableLogging?: boolean;
  time?: number;
}
