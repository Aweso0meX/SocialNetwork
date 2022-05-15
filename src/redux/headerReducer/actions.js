import { TOGGLE_MENU } from './consts'

export const activeMenuAC = payload => ({
	type: TOGGLE_MENU,
	payload: payload,
})
