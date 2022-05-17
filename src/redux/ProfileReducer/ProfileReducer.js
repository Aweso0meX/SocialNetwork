import {
	CHANGE_PROFILE_TEXT_NAME,
	CHANGE_STATUS,
	CHANGE_STATUS_TEXT,
	CHANGE_PROFILE_TEXT_SECOND_NAME,
	CHANGE_PROFILE_TEXT_DATE_HB,
	CHANGE_PROFILE_TEXT_COUNTY,
	CHANGE_PROFILE_TEXT_CITY,
	CHANGE_PROFILE_TEXT_UNIVER,
	CHANGE_PROFILE_TEXT_UNIVER_DATE,
	CHANGE_PROFILE_CHECKBOX_WORK,
	CHANGE_PROFILE_TWITTER,
	CHANGE_PROFILE_FACEBOOK,
	CHANGE_PROFILE_LINKEDIN,
	CHANGE_PROFILE_INSTAGRAM,
	CHANGE_PROFILE_DRIBBLE,
} from './consts'

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
		case CHANGE_PROFILE_TEXT_NAME:
			return {
				...state,
				name: action.payload,
			}
		case CHANGE_PROFILE_TEXT_SECOND_NAME:
			return {
				...state,
				secondName: action.payload,
			}
		case CHANGE_PROFILE_TEXT_DATE_HB:
			return {
				...state,
				dateOfBirth: action.payload,
			}
		case CHANGE_PROFILE_TEXT_COUNTY:
			return {
				...state,
				country: action.payload,
			}
		case CHANGE_PROFILE_TEXT_CITY:
			return {
				...state,
				city: action.payload,
			}
		case CHANGE_PROFILE_TEXT_UNIVER:
			return {
				...state,
				univer: action.payload,
			}
		case CHANGE_PROFILE_TEXT_UNIVER_DATE:
			return {
				...state,
				yearUniver: action.payload,
			}
		case CHANGE_PROFILE_CHECKBOX_WORK:
			return {
				...state,
				work: action.payload,
			}
		case CHANGE_PROFILE_TWITTER:
			return {
				...state,
				twitter: action.payload,
			}
		case CHANGE_PROFILE_FACEBOOK:
			return {
				...state,
				facebook: action.payload,
			}
		case CHANGE_PROFILE_LINKEDIN:
			return {
				...state,
				linkedin: action.payload,
			}
		case CHANGE_PROFILE_INSTAGRAM:
			return {
				...state,
				instagram: action.payload,
			}
		case CHANGE_PROFILE_DRIBBLE:
			return {
				...state,
				dribble: action.payload,
			}

		default:
			return state
	}
}
