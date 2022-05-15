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

const initialState = {
	changeRegNameText: '',
	changeRegSecondNameText: '',
	changeRegMailText: '',
	changeRegPassText: '',
	changeRegPassAgainText: '',
	//Валидация:
	regNameDirty: false,
	regSecondNameDirty: false,
	regMailDirty: false,
	regPassDirty: false,
	regPassAgainDirty: false,
	//Ошибки валидации:
	regNameError: 'Имя слишком короткое',
	regSecondNameError: 'Фамилия слишком короткая',
	regMailError: 'Почта введена не верно',
	regPassError: 'Пароль слишком короткий',
	regPassAgainError: 'Пароли не совпадают',
}

export const regReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_REG_NAME_INPUT:
			return { ...state, changeRegNameText: action.payload }
		case CHANGE_REG_SECOND_NAME_INPUT:
			return { ...state, changeRegSecondNameText: action.payload }
		case CHANGE_REG_MAIL_INPUT:
			return { ...state, changeRegMailText: action.payload }
		case CHANGE_REG_PASS_INPUT:
			return { ...state, changeRegPassText: action.payload }
		case CHANGE_REG_PASS_AGAIN_INPUT:
			return { ...state, changeRegPassAgainText: action.payload }
		//ВАЛИДАЦИЯ
		case DIRTY_REG_NAME_INPUT:
			return { ...state, regNameDirty: action.payload }
		case DIRTY_REG_SECOND_NAME_INPUT:
			return { ...state, regSecondNameDirty: action.payload }
		case DIRTY_REG_MAIL_INPUT:
			return { ...state, regMailDirty: action.payload }
		case DIRTY_REG_PASS_INPUT:
			return { ...state, regPassDirty: action.payload }
		case DIRTY_REG_PASS_AGAIN_INPUT:
			return { ...state, regPassAgainDirty: action.payload }
		//ОШИБКИ ВАЛИДАЦИИ
		case ERROR_REG_NAME_INPUT:
			return { ...state, regNameError: action.payload }
		case ERROR_REG_SECOND_NAME_INPUT:
			return { ...state, regSecondNameError: action.payload }
		case ERROR_REG_MAIL_INPUT:
			return { ...state, regMailError: action.payload }
		case ERROR_REG_PASS_INPUT:
			return { ...state, regPassError: action.payload }
		case ERROR_REG_PASS_AGAIN_INPUT:
			return { ...state, regPassAgainError: action.payload }

		default:
			return state
	}
}
