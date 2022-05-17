const SETTING_WINDOW = 'SETTING_WINDOW'
const MESSENGE_WINDOW = 'MESSENGE_WINDOW'
const GALERY_WINDOW = 'GALERY_WINDOW'
const PUBLIC_WINDOW = 'PUBLIC_WINDOW'
const CONTACT_WINDOW = 'CONTACT_WINDOW'

const initialState = {
	settingWindow: true,
	messangeWindow: false,
	galeryWindow: false,
	publicWindow: false,
	contactWindow: false,
}

export const navigateReducer = (state = initialState, action) => {
	switch (action.type) {
		case SETTING_WINDOW:
			return { ...state, settingWindow: action.payload }
		case MESSENGE_WINDOW:
			return { ...state, messangeWindow: action.payload }
		case GALERY_WINDOW:
			return { ...state, galeryWindow: action.payload }
		case PUBLIC_WINDOW:
			return { ...state, publicWindow: action.payload }
		case CONTACT_WINDOW:
			return { ...state, contactWindow: action.payload }

		default:
			return state
	}
}

export const windowSettingsAC = payload => ({
	type: SETTING_WINDOW,
	payload,
})
export const windowMessengeAC = payload => ({
	type: MESSENGE_WINDOW,
	payload,
})
export const windowGaleryAC = payload => ({
	type: GALERY_WINDOW,
	payload,
})
export const windowPublicAC = payload => ({
	type: PUBLIC_WINDOW,
	payload,
})
export const windowContactAC = payload => ({
	type: CONTACT_WINDOW,
	payload,
})
