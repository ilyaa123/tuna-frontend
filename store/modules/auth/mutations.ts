import { MutationTree } from "vuex"

import { State } from './state'

export enum MutationTypes {
	AUTH__SET_USER_AUTHENTICATED = 'SET_USER_AUTHENTICATED',
}

export type Mutations<S = State> = {
	[MutationTypes.AUTH__SET_USER_AUTHENTICATED](state: S): void
}

export const mutations: MutationTree<State> & Mutations = {
	[MutationTypes.AUTH__SET_USER_AUTHENTICATED](state: State) {
		state.isAuthenticated = true
	},
}