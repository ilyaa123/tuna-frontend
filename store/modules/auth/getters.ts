import { GetterTree } from "vuex"

import { State as RootState } from '@/store'

import { State } from './state'

export type Getters = {
	isAuthenticated(state: State): boolean,
	getAuthLoading(state: State): boolean,
	getAuthErrors(state: State): string[],
	getAuthSuccess(state: State): boolean,
}

export const getters: GetterTree<State, RootState> & Getters = {
	isAuthenticated: (state) => state.isAuthenticated,
	getAuthLoading: (state) => state.AuthLoading,
	getAuthErrors: (state) => state.AuthErrors, 
	getAuthSuccess: (state) => state.AuthSuccess 
}