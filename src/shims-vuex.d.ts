// vuex-shim.d.ts

import { ComponentCustomProperties } from 'vue'
// import { Store } from 'vuex'
import { State, Store } from '@/store/index'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store
    // $store: Store<State>
  }
}