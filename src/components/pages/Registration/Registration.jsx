import React from 'react'
import regVideo from '../../../assets/registrationPage.mp4'
import Logo from '../../../assets/Logo.svg'
import styles from './Registration.module.scss'
import { MyInput } from '../../../custom/UI/MyInput/MyInput'
import { MyButton } from '../../../custom/UI/MyButton/MyButton'
import { CustomLink } from '../../../custom/UI/customLink/customLink'
import { PATH_LOGIN, PATH_PROFILE } from '../../../router/Routes'
import { useDispatch, useSelector } from 'react-redux'
import {
	CHANGE_REG_NAME_TEXT,
	CHANGE_REG_SECOND_NAME_TEXT,
	CHANGE_REG_MAIL_TEXT,
	CHANGE_REG_PASS_TEXT,
	CHANGE_REG_PASS_AGAIN_TEXT,
	DIRTY_REG_NAME,
	DIRTY_REG_SECOND_NAME,
	DIRTY_REG_MAIL,
	DIRTY_REG_PASS,
	DIRTY_REG_PASS_AGAIN,
	ERROR_REG_NAME,
	ERROR_REG_SECOND_NAME,
	ERROR_REG_MAIL,
	ERROR_REG_PASS,
	ERROR_REG_PASS_AGAIN,
} from '../../../redux/registrationReducer/selectors'
import {
	changeRegNameAC,
	changeRegMailAC,
	changeRegSecondNameAC,
	changeRegPassAC,
	dirtyRegMailAC,
	dirtyRegNameAC,
	dirtyRegPassAC,
	dirtyRegPassAgainAC,
	dirtyRegSecondNameAC,
	changeRegPassAgainAC,
	errorRegNameAC,
	errorRegSecondNameAC,
	errorRegMailAC,
	errorRegPassAC,
	errorRegPassAgainAC,
} from '../../../redux/registrationReducer/actions'
import { useNavigate } from 'react-router-dom'
import { changeLoginAC } from '../../../redux/loginReducer/actions'

export const Registration = () => {
	const navigate = useNavigate()
	const goProfile = () => {
		navigate(PATH_PROFILE)
	}
	const nameValue = useSelector(CHANGE_REG_NAME_TEXT)
	const secondNameValue = useSelector(CHANGE_REG_SECOND_NAME_TEXT)
	const mailValue = useSelector(CHANGE_REG_MAIL_TEXT)
	const passValue = useSelector(CHANGE_REG_PASS_TEXT)
	const passAgainValue = useSelector(CHANGE_REG_PASS_AGAIN_TEXT)
	//Валидация
	const dirtyName = useSelector(DIRTY_REG_NAME)
	const dirtySecondName = useSelector(DIRTY_REG_SECOND_NAME)
	const dirtyMail = useSelector(DIRTY_REG_MAIL)
	const dirtyPass = useSelector(DIRTY_REG_PASS)
	const dirtyPassAgain = useSelector(DIRTY_REG_PASS_AGAIN)
	//Ошибки валидации
	const errorName = useSelector(ERROR_REG_NAME)
	const errorSecondName = useSelector(ERROR_REG_SECOND_NAME)
	const errorMail = useSelector(ERROR_REG_MAIL)
	const errorPass = useSelector(ERROR_REG_PASS)
	const errorPassAgain = useSelector(ERROR_REG_PASS_AGAIN)

	const setStateErrorName = e => {
		dispatch(errorRegNameAC(e))
	}
	const setStateErrorSecondName = e => {
		dispatch(errorRegSecondNameAC(e))
	}
	const setStateErrorMail = e => {
		dispatch(errorRegMailAC(e))
	}
	const setStateErrorPass = e => {
		dispatch(errorRegPassAC(e))
	}
	const setStateErrorPassAgain = e => {
		dispatch(errorRegPassAgainAC(e))
	}
	const setStateName = e => {
		dispatch(changeRegNameAC(e.target.value))
		if (e.target.value.length < 5) {
			setStateErrorName('Имя слишком короткое')
		} else {
			setStateErrorName('')
		}
	}
	const setStateSecondName = e => {
		dispatch(changeRegSecondNameAC(e.target.value))
		if (e.target.value.length < 5) {
			setStateErrorSecondName('Фамилия слишком короткая')
		} else {
			setStateErrorSecondName('')
		}
	}
	const setStateMail = e => {
		dispatch(changeRegMailAC(e.target.value))
		const re =
			// eslint-disable-next-line no-useless-escape
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
		if (!re.test(String(e.target.value).toLowerCase())) {
			setStateErrorMail('Почта введена неверно')
		} else {
			setStateErrorMail('')
		}
	}
	const setStatePass = e => {
		dispatch(changeRegPassAC(e.target.value))
		if (e.target.value.length < 5) {
			setStateErrorPass('Пароль слишком короткий')
		} else {
			setStateErrorPass('')
		}
	}
	const setStatePassAgain = e => {
		dispatch(changeRegPassAgainAC(e.target.value))
		if (e.target.value !== passValue) {
			setStateErrorPassAgain('Пароли не совпадают')
		} else {
			setStateErrorPassAgain('')
		}
	}

	const dispatch = useDispatch()
	const changeNameDirty = e => {
		dispatch(dirtyRegNameAC(e))
	}
	const changeSecondNameDirty = e => {
		dispatch(dirtyRegSecondNameAC(e))
	}
	const changeMailDirty = e => {
		dispatch(dirtyRegMailAC(e))
	}
	const changePassDirty = e => {
		dispatch(dirtyRegPassAC(e))
	}
	const changePassAgainDirty = e => {
		dispatch(dirtyRegPassAgainAC(e))
	}

	const blurHandler = e => {
		switch (e.target.name) {
			case 'name':
				changeNameDirty(true)
				break
			case 'secName':
				changeSecondNameDirty(true)
				break
			case 'mail':
				changeMailDirty(true)
				break
			case 'pass':
				changePassDirty(true)
				break
			case 'passAgain':
				changePassAgainDirty(true)
				break

			default:
				break
		}
	}
	const blur = e => {
		blurHandler(e)
	}

	const enter = e => {
		const re =
			// eslint-disable-next-line no-useless-escape
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
		e.preventDefault()
		if (nameValue.length < 5) {
			changeNameDirty(true)
		}
		if (secondNameValue.length < 5) {
			changeSecondNameDirty(true)
		}
		if (!re.test(String(mailValue).toLowerCase())) {
			changeMailDirty(true)
		}
		if (passValue.length < 5) {
			changePassDirty(true)
		}
		if (passAgainValue !== passValue) {
			changePassAgainDirty(true)
		} else if (
			nameValue.length >= 5 &&
			secondNameValue.length >= 5 &&
			re.test(String(mailValue).toLowerCase()) &&
			passValue.length >= 5 &&
			passAgainValue === passValue
		) {
			dispatch(changeRegNameAC(''))
			dispatch(changeRegSecondNameAC(''))
			dispatch(changeRegMailAC(''))
			dispatch(changeRegPassAC(''))
			dispatch(changeRegPassAgainAC(''))
			dispatch(changeLoginAC(true))
			goProfile()
		}
	}

	return (
		<div>
			<video autoPlay muted loop className={styles.backVideo}>
				<source src={regVideo} type='video/mp4' />
			</video>
			<div className={styles.registrPage}>
				<div className={styles.formWrapper}>
					<img src={Logo} alt='logo' />
					<form className={styles.form}>
						{dirtyName && errorName && (
							<div style={{ color: 'red' }}>{errorName}</div>
						)}
						<MyInput
							onChange={setStateName}
							onBlur={blur}
							value={nameValue}
							name='name'
							label='Имя'
							type='text'
						/>
						{dirtySecondName && errorSecondName && (
							<div style={{ color: 'red' }}>{errorSecondName}</div>
						)}
						<MyInput
							onChange={setStateSecondName}
							onBlur={blur}
							value={secondNameValue}
							name='secName'
							label='Фамилия'
							type='text'
						/>
						{dirtyMail && errorMail && (
							<div style={{ color: 'red' }}>{errorMail}</div>
						)}
						<MyInput
							onChange={setStateMail}
							onBlur={blur}
							value={mailValue}
							name='mail'
							label='Почта'
							type='mail'
						/>
						{dirtyPass && errorPass && (
							<div style={{ color: 'red' }}>{errorPass}</div>
						)}
						<MyInput
							onChange={setStatePass}
							onBlur={blur}
							value={passValue}
							name='pass'
							label='Пароль'
							type='password'
						/>
						{dirtyPassAgain && errorPassAgain && (
							<div style={{ color: 'red' }}>{errorPassAgain}</div>
						)}
						<MyInput
							onChange={setStatePassAgain}
							onBlur={blur}
							value={passAgainValue}
							name='passAgain'
							label='Повторите пароль'
							type='password'
						/>
						<div className={styles.btnWrapper}>
							<CustomLink to={PATH_LOGIN}>Есть профиль? Войдите!</CustomLink>
							<MyButton onClick={enter}>Зарегистрироваться</MyButton>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
