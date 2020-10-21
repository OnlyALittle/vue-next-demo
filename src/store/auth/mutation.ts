import { MutationTree } from 'vuex'
import { State } from './state'

// mutations enums
export enum MutationTypes {
    SET_USER_AUTHENTICATED = 'SET_USER_AUTHENTICATED',
}

// Mutation contracts
export type Mutations<S = State> = {
    [MutationTypes.SET_USER_AUTHENTICATED](state: S): void
}

// Define mutations
  // getters
export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.SET_USER_AUTHENTICATED](state: State) {
        state.isAuthenticated = true
    },
}
