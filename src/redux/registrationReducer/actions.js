import {
	CHANGE_REG_NAME_INPUT,
	CHANGE_REG_SECOND_NAME_INPUT,
	CHANGE_REG_MAIL_INPUT,
	CHANGE_REG_PASS_INPUT,
	CHANGE_REG_PASS_AGAIN_INPUT,
	DIRTY_REG_NAME_INPUT,
	DIRTY_REG_SECOND_NAME_INPUT,
	DIRTY_REG_MAIL_INPUT,
	DIRTY_REG_PASS_INPUT,
	DIRTY_REG_PASS_AGAIN_INPUT,
	ERROR_REG_NAME_INPUT,
	ERROR_REG_SECOND_NAME_INPUT,
	ERROR_REG_MAIL_INPUT,
	ERROR_REG_PASS_INPUT,
	ERROR_REG_PASS_AGAIN_INPUT,
} from './consts'

export const changeRegNameAC = payload => ({
	type: CHANGE_REG_NAME_INPUT,
	payload,
})
export const changeRegSecondNameAC = payload => ({
	type: CHANGE_REG_SECOND_NAME_INPUT,
	payload,
})
export const changeRegMailAC = payload => ({
	type: CHANGE_REG_MAIL_INPUT,
	payload,
})
export const changeRegPassAC = payload => ({
	type: CHANGE_REG_PASS_INPUT,
	payload,
})
export const changeRegPassAgainAC = payload => ({
	type: CHANGE_REG_PASS_AGAIN_INPUT,
	payload,
})
//Валидация:
export const dirtyRegNameAC = payload => ({
	type: DIRTY_REG_NAME_INPUT,
	payload,
})
export const dirtyRegSecondNameAC = payload => ({
	type: DIRTY_REG_SECOND_NAME_INPUT,
	payload,
})
export const dirtyRegMailAC = payload => ({
	type: DIRTY_REG_MAIL_INPUT,
	payload,
})
export const dirtyRegPassAC = payload => ({
	type: DIRTY_REG_PASS_INPUT,
	payload,
})
export const dirtyRegPassAgainAC = payload => ({
	type: DIRTY_REG_PASS_AGAIN_INPUT,
	payload,
})
//Ошибки валидации:
export const errorRegNameAC = payload => ({
	type: ERROR_REG_NAME_INPUT,
	payload,
})
export const errorRegSecondNameAC = payload => ({
	type: ERROR_REG_SECOND_NAME_INPUT,
	payload,
})
export const errorRegMailAC = payload => ({
	type: ERROR_REG_MAIL_INPUT,
	payload,
})
export const errorRegPassAC = payload => ({
	type: ERROR_REG_PASS_INPUT,
	payload,
})
export const errorRegPassAgainAC = payload => ({
	type: ERROR_REG_PASS_AGAIN_INPUT,
	payload,
})
