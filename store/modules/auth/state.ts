export type State = {
	isAuthenticated: boolean,
	AuthLoading: boolean,
	AuthErrors: string[],
	AuthSuccess: boolean
}

export const state: State = {
	isAuthenticated: false,
	AuthLoading: false,
	AuthErrors: [],
	AuthSuccess: false
}