import { createContext } from 'react';
import { ClientContext } from './types';

export const context = createContext<ClientContext>({
  flags: [],
  client: undefined,
});

export const { Provider, Consumer } = context;
