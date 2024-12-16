import React, {useContext} from 'react';

import {getToastIcon} from '@shared/core';
import {generateRandomId} from '@shared/helpers';
import {
  IAddToast,
  ICallErrorToastExtraOptions,
  ICallToastExtraOptions,
  IToast,
  unknownToError,
} from '../../types';

export interface IErrorTransfer {
  name: string;
  message: string;
  stack?: string;
  payload?: {
    code?: number;
    data?: unknown;
  };
}

interface IErrorContext {
  bug: InstanceType<typeof ErrorProvider>['bug'];
  warning: InstanceType<typeof ErrorProvider>['success'];
  success: InstanceType<typeof ErrorProvider>['success'];
  info: InstanceType<typeof ErrorProvider>['info'];
  toasts: IToast[];
  remove: (data: IToast) => void;
  clearAllToasts: () => void;
}

export const errorContext = React.createContext<IErrorContext>(undefined!);

type Props = {
  children: React.ReactNode;
};

type State = {
  context: IErrorContext;
};

//It should be real error catcher, but i can`t have 5 screens ( error screen ) so it will only show toasts
export class ErrorProvider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      context: {
        bug: this.bug,
        warning: this.warning,
        success: this.success,
        info: this.info,
        remove: this.remove,
        clearAllToasts: this.clearAllToasts,
        toasts: [],
      },
    };
  }

  addToast = (data: IAddToast) => {
    const id = generateRandomId();
    const icon = getToastIcon(data.type);

    const newToast: IToast = {
      id,
      type: data.type,
      icon,
      title: data.title,
      subtitle: data.subtitle || undefined,
      action: data.action || undefined,
      time: data.time || undefined,
    };

    this.setState({
      context: {
        ...this.state.context,
        toasts: [...this.state.context.toasts, newToast],
      },
    });
  };

  remove = (data: IToast) => {
    this.setState({
      context: {
        ...this.state.context,
        toasts: this.state.context.toasts.filter(toast => toast.id !== data.id),
      },
    });
  };

  bug = (rawError: unknown, options?: ICallErrorToastExtraOptions): void => {
    const error = unknownToError(rawError);

    const toast: IAddToast = {
      type: options?.asWarning ? 'warning' : 'error',
      icon: options?.icon,
      title: error.message,
      subtitle: options?.subtitle,
      action: options?.action,
      time: options?.time,
    };

    this.addToast(toast);
  };

  warning = (msg: string, options?: ICallToastExtraOptions): void => {
    const toast: IAddToast = {
      type: 'warning',
      icon: options?.icon,
      title: msg,
      subtitle: options?.subtitle,
      action: options?.action,
      time: options?.time,
    };

    this.addToast(toast);
  };

  success = (msg: string, options?: ICallToastExtraOptions): void => {
    const toast: IAddToast = {
      type: 'success',
      icon: options?.icon,
      title: msg,
      subtitle: options?.subtitle,
      action: options?.action,
      time: options?.time,
    };

    this.addToast(toast);
  };

  info = (msg: string, options?: ICallToastExtraOptions): void => {
    const toast: IAddToast = {
      type: 'info',
      icon: options?.icon,
      title: msg,
      subtitle: options?.subtitle,
      action: options?.action,
      time: options?.time,
    };

    this.addToast(toast);
  };

  clearAllToasts = () => {
    this.setState({
      context: {
        ...this.state.context,
        toasts: [],
      },
    });
  };

  render(): JSX.Element {
    return (
      <errorContext.Provider value={this.state.context}>
        {this.props.children}
      </errorContext.Provider>
    );
  }
}

export const useError = () => useContext(errorContext);
