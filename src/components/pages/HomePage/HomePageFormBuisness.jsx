import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeMenuAC } from '../../../redux/headerReducer/actions'
import {
	changeLoginAC,
	changeTextLoginAC,
	changeTextPassAC,
	changeValidLoginActiveAC,
	changeValidLoginErrorAC,
	changeValidPassActiveAC,
	changeValidPassErrorAC,
} from '../../../redux/loginReducer/actions'
import {
	HOMEPAGE_LOGIN_DIRTY,
	HOMEPAGE_PASS_DIRTY,
	HOMEPAGE_LOGIN_ERROR,
	HOMEPAGE_PASS_ERROR,
	HOMEPAGE_LOGIN_TEXT_VALUE,
	HOMEPAGE_PASS_TEXT_VALUE,
} from '../../../redux/loginReducer/selectors'
import HomePageForm from './HomePageForm'

const HomePageFormBuisness = () => {
	const loginDirty = useSelector(HOMEPAGE_LOGIN_DIRTY)
	const passDirty = useSelector(HOMEPAGE_PASS_DIRTY)
	const loginError = useSelector(HOMEPAGE_LOGIN_ERROR)
	const passError = useSelector(HOMEPAGE_PASS_ERROR)
	const loginTextValue = useSelector(HOMEPAGE_LOGIN_TEXT_VALUE)
	const passTextValue = useSelector(HOMEPAGE_PASS_TEXT_VALUE)

	const disptach = useDispatch()

	const loginLenght = e => {
		disptach(changeValidLoginErrorAC(e))
	}
	const passLenght = e => {
		disptach(changeValidPassErrorAC(e))
	}
	const changeLoginDirty = e => {
		disptach(changeValidLoginActiveAC(e))
	}
	const changePassDirty = e => {
		disptach(changeValidPassActiveAC(e))
	}

	const changeTextLogin = e => {
		disptach(changeTextLoginAC(e.target.value))
		if (loginTextValue.length < 5 && loginTextValue.length >= 0) {
			loginLenght('Логин должен быть длинней')
		} else {
			loginLenght('')
		}
	}
	const changeTextPass = e => {
		disptach(changeTextPassAC(e.target.value))
		if (passTextValue.length > 0) {
			passLenght('Пароль не обязателен')
		} else {
			passLenght('')
		}
	}

	//HOMEPAGE BUTTON:
	const enter = e => {
		e.preventDefault()
		if (loginTextValue.length <= 5) {
			changeLoginDirty(true)
		} else if (loginTextValue.length > 5) {
			disptach(changeLoginAC(true))
			disptach(activeMenuAC(false))
			disptach(changeTextPassAC(''))
			disptach(changeTextLoginAC(''))
		}
	}
	//Вывод ошибки при сбросе фокуса
	const blurHandler = e => {
		// eslint-disable-next-line default-case
		switch (e.target.name) {
			case 'login':
				if (loginTextValue.length < 5 && loginTextValue.length >= 0) {
					loginLenght('Логин должен быть длинней')
				} else {
					loginLenght('')
				}
				changeLoginDirty(true)
				break
			case 'pass':
				if (passTextValue.length >= 0) {
					passLenght('Пароль не обязателен')
				} else {
					passLenght('')
				}
				changePassDirty(true)
				break
		}
	}
	return (
		<HomePageForm
			loginDirty={loginDirty}
			passDirty={passDirty}
			loginError={loginError}
			passError={passError}
			changeTextLogin={changeTextLogin}
			changeTextPass={changeTextPass}
			blurHandler={blurHandler}
			enter={enter}
			loginTextValue={loginTextValue}
			passTextValue={passTextValue}
		/>
	)
}

export default HomePageFormBuisness
