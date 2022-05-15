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
import HomePageForm from './HomePageForm'

const HomePageFormBuisness = () => {
	//Валидация
	const loginDirty = useSelector(state => state.login.homepageLoginActive)
	const passDirty = useSelector(state => state.login.homepagePassActive)
	const loginError = useSelector(state => state.login.homepageLoginError)
	const passError = useSelector(state => state.login.homepagePassError)

	const loginTextValue = useSelector(state => state.login.homepageLoginInput)
	const passTextValue = useSelector(state => state.login.homepagePassInput)

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
