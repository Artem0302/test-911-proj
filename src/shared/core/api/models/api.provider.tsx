import React, {useContext} from 'react';

import {IRequestOptions} from '@shared/core';
import api from './api';

interface IApiContext {
  readonly api: InstanceType<typeof ApiProvider>['api'];
}

interface IApiProps {
  readonly children: React.ReactNode;
}

interface IApiState {
  readonly context: IApiContext;
}

const apiContext = React.createContext<IApiContext>(undefined!);

class ApiProvider extends React.Component<IApiProps, IApiState> {
  constructor(props: IApiProps) {
    super(props);

    this.state = {
      context: {
        api: this.api,
      },
    };
  }

  async api<T>(url: string, options?: IRequestOptions) {
    try {
      const request = api<T>(url, options);

      const [response] = await request;

      return response;
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      }

      throw new Error(typeof e === 'string' ? e : '');
    }
  }

  render() {
    return (
      <apiContext.Provider value={this.state.context}>
        {this.props.children}
      </apiContext.Provider>
    );
  }
}

const useApi = () => useContext(apiContext);
export {apiContext, ApiProvider, useApi};
