const TOGGLE_MENU = 'TOGGLE_MENU'

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

export const activeMenuAC = payload => ({
	type: TOGGLE_MENU,
	payload: payload,
})
