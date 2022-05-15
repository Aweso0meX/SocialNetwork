import {
	CHANGE_LOGIN,
	CHANGE_TEXT_LOGIN_HOMEPAGE,
	CHANGE_TEXT_PASS_HOMEPAGE,
	VALIDATION_LOGIN_ACTIVE,
	VALIDATION_PASS_ACTIVE,
	VALIDATION_LOGIN_ERROR,
	VALIDATION_PASS_ERROR,
} from './consts'

export const changeLoginAC = payload => ({
	type: CHANGE_LOGIN,
	payload: payload,
})

export const changeTextLoginAC = payload => ({
	type: CHANGE_TEXT_LOGIN_HOMEPAGE,
	payload,
})
export const changeTextPassAC = payload => ({
	type: CHANGE_TEXT_PASS_HOMEPAGE,
	payload,
})

export const changeValidLoginActiveAC = payload => ({
	type: VALIDATION_LOGIN_ACTIVE,
	payload,
})
export const changeValidPassActiveAC = payload => ({
	type: VALIDATION_PASS_ACTIVE,
	payload,
})

export const changeValidLoginErrorAC = payload => ({
	type: VALIDATION_LOGIN_ERROR,
	payload,
})
export const changeValidPassErrorAC = payload => ({
	type: VALIDATION_PASS_ERROR,
	payload,
})
