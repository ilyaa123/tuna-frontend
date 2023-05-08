import { State as RootState } from '@/store';

import { State } from './state';

import { Mutations, MutationTypes } from './mutations';
import { ActionContext, ActionTree } from 'vuex';
import { registerApi, loginApi } from '~/api/user';

export enum ActionTypes {
	AUTH__SIGNIN = 'SIGNIN',
	AUTH__SIGNUP = 'SIGNUP',
}

type AugmentedActionContext = {
	commit<K extends keyof Mutations>(
		key: K,
		payload: Parameters<Mutations[K]>[1],
	): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
	[ActionTypes.AUTH__SIGNIN](
		{ commit }: AugmentedActionContext, 
		payload: {email:string, password:string}
	): void,
	[ActionTypes.AUTH__SIGNUP](
		{ commit }: AugmentedActionContext, 
		payload: {email:string, password:string, type:string}
	): void,

}

export const actions: ActionTree<State, RootState> & Actions = {
	async [ActionTypes.AUTH__SIGNIN]({ commit }, payload) {
		commit(MutationTypes.AUTH__SET_LOADING, true)
		try {
			const res = await loginApi(payload);
			console.log('AUTH__SIGNIN', res)
			if (res.status === 200){
				commit(MutationTypes.AUTH__SET_SUCCESS, undefined);
				const router = useRouter()
				router.push('/app')

			}
		} catch (err) {
			
		} finally {
			commit(MutationTypes.AUTH__SET_LOADING, false)
		}
	},
	async [ActionTypes.AUTH__SIGNUP]({commit}, payload){
		commit(MutationTypes.AUTH__SET_LOADING, true)
		try {
			const res = await registerApi(payload);
			if (res.status === 200){
				commit(MutationTypes.AUTH__SET_SUCCESS, undefined)
				const router = useRouter()
				setTimeout(() => {
					router.push('/auth')
				}, 2000)
			}
		} catch (err) {
			
		} finally {
			commit(MutationTypes.AUTH__SET_LOADING, false)
		}
	}
}