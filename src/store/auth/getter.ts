import { GetterTree } from 'vuex'
import { State as RootState } from '@/store'
import { State } from './state'


// getters types
export type Getters = {
    isAuthenticated(state: State): boolean
}
  
  // getters
export const getters: GetterTree<State, RootState> & Getters = {
    isAuthenticated: (state) => {
        return state.isAuthenticated
    },
}