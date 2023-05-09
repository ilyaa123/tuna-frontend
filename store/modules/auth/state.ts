export type State = {
	isAuthenticated: boolean,
	AuthLoading: boolean,
	AuthErrors: string[],
	AuthSuccess: boolean,
	RegSuccess: boolean
}

export const state: State = {
	isAuthenticated: false,
	AuthLoading: false,
	AuthErrors: [],
	AuthSuccess: false,
	RegSuccess: false
}