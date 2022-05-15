export const CHANGE_REG_NAME_TEXT = state => state.reg.changeRegNameText
export const CHANGE_REG_SECOND_NAME_TEXT = state =>
	state.reg.changeRegSecondNameText
export const CHANGE_REG_MAIL_TEXT = state => state.reg.changeRegMailText
export const CHANGE_REG_PASS_TEXT = state => state.reg.changeRegPassText
export const CHANGE_REG_PASS_AGAIN_TEXT = state =>
	state.reg.changeRegPassAgainText
//Валидация:
export const DIRTY_REG_NAME = state => state.reg.regNameDirty
export const DIRTY_REG_SECOND_NAME = state => state.reg.regSecondNameDirty
export const DIRTY_REG_MAIL = state => state.reg.regMailDirty
export const DIRTY_REG_PASS = state => state.reg.regPassDirty
export const DIRTY_REG_PASS_AGAIN = state => state.reg.regPassAgainDirty
//Ошибки валидации:
export const ERROR_REG_NAME = state => state.reg.regNameError
export const ERROR_REG_SECOND_NAME = state => state.reg.regSecondNameError
export const ERROR_REG_MAIL = state => state.reg.regMailError
export const ERROR_REG_PASS = state => state.reg.regPassError
export const ERROR_REG_PASS_AGAIN = state => state.reg.regPassAgainError
