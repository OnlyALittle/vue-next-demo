import { createStore, createLogger } from 'vuex';

import {
  AuthModule,
  AuthState,
  Store as AuthStore,
} from './auth'

export type State = {
  auth: AuthState
}

export type Store = AuthStore<Pick<State, 'auth'>>;

export const store = createStore({
  plugins:
    process.env.NODE_ENV === 'production'
      ? []
      : [createLogger()],
  modules: { AuthModule },
});

export function useStore(): Store {
  return store as Store
}

export default store