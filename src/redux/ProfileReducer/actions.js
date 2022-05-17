import { CHANGE_STATUS, CHANGE_STATUS_TEXT } from './consts'

export const changeStatusAC = payload => ({
	type: CHANGE_STATUS,
	payload,
})
export const changeStatusTextAC = payload => ({
	type: CHANGE_STATUS_TEXT,
	payload,
})
