import { MutationTree } from "vuex"

import { State } from './state'

export enum MutationTypes {
	AUTH__SET_USER_AUTHENTICATED = 'SET_USER_AUTHENTICATED',
	AUTH__SET_LOADING = 'AUTH__SET_LOADING',
	AUTH__SET_ERRORS = 'AUTH__SET_ERRORS',
	AUTH__SET_SUCCESS = 'AUTH__SET_SUCCESS',
	AUTH__SET_REG_SUCCESS = 'AUTH__SET_REG_SUCCESS'
}

export type Mutations<S = State> = {
	[MutationTypes.AUTH__SET_USER_AUTHENTICATED](state: S): void,
	[MutationTypes.AUTH__SET_LOADING](state: S, paylaod: boolean): void,
	[MutationTypes.AUTH__SET_ERRORS](state: S, paylaod: string): void,
	[MutationTypes.AUTH__SET_SUCCESS](state: S, paylaod: undefined): void,
	[MutationTypes.AUTH__SET_REG_SUCCESS](state: S, payload: undefined): void
}

export const mutations: MutationTree<State> & Mutations = {
	[MutationTypes.AUTH__SET_USER_AUTHENTICATED](state: State) {
		state.isAuthenticated = true
	},
	[MutationTypes.AUTH__SET_LOADING](state: State, paylaod){
		state.AuthLoading = paylaod
	},
	[MutationTypes.AUTH__SET_ERRORS](state: State, paylaod){
		state.AuthErrors.push(paylaod);
		setTimeout(() => {
			state.AuthErrors = []
		}, 5000)
	},
	[MutationTypes.AUTH__SET_SUCCESS](state: State){
		state.AuthSuccess = true;
		setTimeout(() => {
			state.AuthSuccess = false
		}, 3000)
	},
	[MutationTypes.AUTH__SET_REG_SUCCESS](state: State){
		state.RegSuccess = true;
		setTimeout(() => {
			state.RegSuccess = false
		}, 3000)
	}
}