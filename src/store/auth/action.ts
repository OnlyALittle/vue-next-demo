import { ActionContext, ActionTree } from 'vuex'
import { State as RootState } from '@/store'
import { Mutations } from './mutation'
import { State } from './state'

// Action enums
export enum ActionTypes {
    SIGNIN = 'SIGNIN',
}

// Actions context
type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1],
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>

// Actions contracts
export interface Actions {
    [ActionTypes.SIGNIN](
        { commit }: AugmentedActionContext,
        payload: { username: string; password: string },
    ): void
}

// Define actions
export const actions: ActionTree<State, RootState> & Actions = {
    async [ActionTypes.SIGNIN](
        { commit },
        payload: { username: string; password: string },
    ) {
        try {
            // some logic that logs a user in
        } catch (err) {
            // some error handling logic
        }
    },
}
