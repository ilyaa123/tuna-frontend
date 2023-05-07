import {
	Module,
	Store as VuexStore,
	CommitOptions,
	DispatchOptions,
} from 'vuex';

import { State as RootState } from '@/store';

import { State, state } from './state';

import { Getters, getters } from './getters';

import { Mutations, mutations } from './mutations';

import { Actions, actions } from './actions';

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