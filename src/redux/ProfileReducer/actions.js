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

export const changeTwitterAC = payload => ({
	type: CHANGE_PROFILE_TWITTER,
	payload,
})
export const changeFacebookAC = payload => ({
	type: CHANGE_PROFILE_FACEBOOK,
	payload,
})
export const changeLinkedinAC = payload => ({
	type: CHANGE_PROFILE_LINKEDIN,
	payload,
})
export const changeInstagramAC = payload => ({
	type: CHANGE_PROFILE_INSTAGRAM,
	payload,
})
export const changeDribbleAC = payload => ({
	type: CHANGE_PROFILE_DRIBBLE,
	payload,
})

//Статус
export const changeStatusAC = payload => ({
	type: CHANGE_STATUS,
	payload,
})
export const changeStatusTextAC = payload => ({
	type: CHANGE_STATUS_TEXT,
	payload,
})
//Имя
export const changeTextNameProfileAC = payload => ({
	type: CHANGE_PROFILE_TEXT_NAME,
	payload,
})
//Фамилия
export const changeTextSecNameProfileAC = payload => ({
	type: CHANGE_PROFILE_TEXT_SECOND_NAME,
	payload,
})
//Дата рождения
export const changeTextDateProfileAC = payload => ({
	type: CHANGE_PROFILE_TEXT_DATE_HB,
	payload,
})
//Страна
export const changeTextCountryProfileAC = payload => ({
	type: CHANGE_PROFILE_TEXT_COUNTY,
	payload,
})
//Город
export const changeTextCityProfileAC = payload => ({
	type: CHANGE_PROFILE_TEXT_CITY,
	payload,
})
//Универ
export const changeTextUniverProfileAC = payload => ({
	type: CHANGE_PROFILE_TEXT_UNIVER,
	payload,
})
//Дата универа
export const changeTextUniverYearProfileAC = payload => ({
	type: CHANGE_PROFILE_TEXT_UNIVER_DATE,
	payload,
})
export const changeCheckboxWorkProfileAC = payload => ({
	type: CHANGE_PROFILE_CHECKBOX_WORK,
	payload,
})
