import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
	changeCheckboxWorkProfileAC,
	changeTextCityProfileAC,
	changeTextCountryProfileAC,
	changeTextDateProfileAC,
	changeTextNameProfileAC,
	changeTextSecNameProfileAC,
	changeTextUniverProfileAC,
	changeTextUniverYearProfileAC,
} from '../../../../../redux/ProfileReducer/actions'
import Settings from './Settings'

const SettingsBuisness = () => {
	const dispatch = useDispatch()

	//Name input:
	const [nameValue, setNameValue] = useState('')
	const changeNameText = e => setNameValue(e.target.value)
	//SecoundName input:
	const [secondNameValue, setSecondNameValue] = useState('')
	const changeSecondNameText = e => setSecondNameValue(e.target.value)
	//Date input:
	const [dateValue, setDateValue] = useState('')
	const changeDateText = e => setDateValue(e.target.value)
	//Country input:
	const [countryValue, setCountryValue] = useState('')
	const changeCountryText = e => setCountryValue(e.target.value)
	//City input:
	const [cityValue, setCityValue] = useState('')
	const changeCityText = e => setCityValue(e.target.value)
	//Univer input:
	const [univerValue, setUniverValue] = useState('')
	const changeUniverText = e => setUniverValue(e.target.value)
	//DateUniver input:
	const [univerDateValue, setUniverDateValue] = useState('')
	const changeUniverDateText = e => setUniverDateValue(e.target.value)
	//Checkbox Work:
	const [checked, setChecked] = useState(false)
	const changeCheckBoxWork = e => setChecked(!checked)

	const changeSettingsButton = () => {
		dispatch(changeTextNameProfileAC(nameValue))
		dispatch(changeTextSecNameProfileAC(secondNameValue))
		dispatch(changeTextDateProfileAC(dateValue))
		dispatch(changeTextCountryProfileAC(countryValue))
		dispatch(changeTextCityProfileAC(cityValue))
		dispatch(changeTextUniverProfileAC(univerValue))
		dispatch(changeTextUniverYearProfileAC(univerDateValue))
		dispatch(changeCheckboxWorkProfileAC(checked))
	}
	return (
		<Settings
			nameValue={nameValue}
			changeNameText={changeNameText}
			secondNameValue={secondNameValue}
			changeSecondNameText={changeSecondNameText}
			changeDateText={changeDateText}
			changeCountryText={changeCountryText}
			dateValue={dateValue}
			changeCityText={changeCityText}
			countryValue={countryValue}
			changeUniverText={changeUniverText}
			changeUniverDateText={changeUniverDateText}
			cityValue={cityValue}
			univerValue={univerValue}
			changeCheckBoxWork={changeCheckBoxWork}
			univerDateValue={univerDateValue}
			changeSettingsButton={changeSettingsButton}
			checked={checked}
		/>
	)
}

export default SettingsBuisness
