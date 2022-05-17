import { CHANGE_STATUS, CHANGE_STATUS_TEXT } from './consts'

const initialState = {
	avatar: '',
	name: '',
	secondName: '',
	dateOfBirth: '',
	//Status:
	changeStatus: false,
	statusText: '',
	//Country:
	country: '',
	city: '',
	//Teach:
	univer: '',
	yearUniver: '',
	//work:
	work: false,
	//online:
	online: true,
	//contacts:
	twitter: '',
	facebook: '',
	linkedin: '',
	instagram: '',
	dribble: '',
}

export const ProfileReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_STATUS:
			return {
				...state,
				changeStatus: action.payload,
			}
		case CHANGE_STATUS_TEXT:
			return {
				...state,
				statusText: action.payload,
			}

		default:
			return state
	}
}
