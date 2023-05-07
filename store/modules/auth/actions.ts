import { State as RootState } from '@/store';

import { State } from './state';

import { Mutations, MutationTypes } from './mutations';
import { ActionContext, ActionTree } from 'vuex';

export enum ActionTypes {
	AUTH__SIGNIN = 'SIGNIN',
}

type AugmentedActionContext = {
	commit<K extends keyof Mutations>(
		key: K,
		payload: Parameters<Mutations[K]>[1],
	): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
	[ActionTypes.AUTH__SIGNIN]({ commit }: AugmentedActionContext, payload: {code: string, redirect_uri: string}): void
}

export const actions: ActionTree<State, RootState> & Actions = {
	async [ActionTypes.AUTH__SIGNIN]({ commit }, payload) {
		try {
			
		} catch (err) {
			
		}
	},
}