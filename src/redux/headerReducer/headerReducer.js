import { TOGGLE_MENU } from './consts'

const initialState = {
	menuActive: false,
}

export const headerReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_MENU:
			return { ...state, menuActive: action.payload }

		default:
			return state
	}
}
