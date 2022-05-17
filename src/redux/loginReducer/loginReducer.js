import {
	CHANGE_LOGIN,
	CHANGE_TEXT_PASS_HOMEPAGE,
	CHANGE_TEXT_LOGIN_HOMEPAGE,
	VALIDATION_LOGIN_ACTIVE,
	VALIDATION_PASS_ACTIVE,
	VALIDATION_LOGIN_ERROR,
	VALIDATION_PASS_ERROR,
} from './consts'

const initialState = {
	isAuth: true,

	//HOMEPAGE
	homepageLoginInput: '',
	homepagePassInput: '',

	homepageLoginActive: false,
	homepagePassActive: false,

	homepageLoginError: 'Для входа введите любой логин',
	homepagePassError: 'Для входа пароль не обязателен',
}

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_LOGIN:
			return { ...state, isAuth: action.payload }
		case CHANGE_TEXT_LOGIN_HOMEPAGE:
			//Инпуты
			return { ...state, homepageLoginInput: action.payload }
		case CHANGE_TEXT_PASS_HOMEPAGE:
			return { ...state, homepagePassInput: action.payload }
		case VALIDATION_LOGIN_ACTIVE:
			//Валидация
			return { ...state, homepageLoginActive: action.payload }
		case VALIDATION_PASS_ACTIVE:
			return { ...state, homepagePassActive: action.payload }
		case VALIDATION_LOGIN_ERROR:
			//Ошибки
			return { ...state, homepageLoginError: action.payload }
		case VALIDATION_PASS_ERROR:
			return { ...state, homepagePassError: action.payload }

		default:
			return state
	}
}
