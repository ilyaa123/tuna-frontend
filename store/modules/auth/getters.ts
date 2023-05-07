import { GetterTree } from "vuex"

import { State as RootState } from '@/store'

import { State } from './state'

export type Getters = {
	isAuthenticated(state: State): boolean
}

export const getters: GetterTree<State, RootState> & Getters = {
	isAuthenticated: (state) => {
		return state.isAuthenticated
	},
}