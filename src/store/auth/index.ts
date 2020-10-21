import { CommitOptions, DispatchOptions, Module, Store as VuexStore } from 'vuex'
import { Actions, actions } from './action'
import { mutations, Mutations } from './mutation'
import { state, State } from './state'
import { getters, Getters } from './getter'

import { State as RootState } from '@/store'


//setup store type
export type Store<S = State> = Omit<
    VuexStore<S>,
    'commit' | 'getters' | 'dispatch'
> & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions,
    ): ReturnType<Mutations[K]>
} & {
    getters: {
        [K in keyof Getters]: ReturnType<Getters[K]>
    }
} & {
    dispatch<K extends keyof Actions>(
        key: K,
        payload: Parameters<Actions[K]>[1],
        options?: DispatchOptions,
    ): ReturnType<Actions[K]>
}

export const AuthModule: Module<State, RootState> = {
    state,
    mutations,
    actions,
    getters,
}

export type AuthState = State;