import { createStore } from 'vuex'

import { AuthModule, Store as AuthStore} from './modules/auth/'

import { State as AuthState } from './modules/auth/state';

export type State = {
  auth: AuthState
}

export type Store = AuthStore<Pick<State, 'auth'>> 

export const store = createStore({
  modules: { AuthModule },
})

export const useStore = (): Store => {
  return store as Store
}

export default store