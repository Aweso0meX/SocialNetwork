const TOGGLE_MENU = 'TOGGLE_MENU'
const CHANGE_LOGIN = 'EXIT_LOGIN'
const initialState = {
	menuActive: false,
	isAuth: true,
}

export const headerReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_MENU:
			return { ...state, menuActive: action.payload }
		case CHANGE_LOGIN:
			return { ...state, isAuth: action.payload }

		default:
			return state
	}
}

export const activeMenuAC = payload => ({
	type: TOGGLE_MENU,
	payload: payload,
})
export const changeLoginAC = payload => ({
	type: CHANGE_LOGIN,
	payload: payload,
})
