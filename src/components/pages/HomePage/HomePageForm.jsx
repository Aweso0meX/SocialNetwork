import React from 'react'
import styles from './HomePage.module.scss'
import { MyInput } from '../../../custom/UI/MyInput/MyInput'
import { MyButton } from '../../../custom/UI/MyButton/MyButton'

const HomePageForm = ({
	loginDirty,
	passDirty,
	loginError,
	passError,
	changeTextLogin,
	changeTextPass,
	blurHandler,
	enter,
	loginTextValue,
	passTextValue,
}) => {
	return (
		<form className={styles.form}>
			{loginDirty && loginError && (
				<div style={{ color: 'red' }}>{loginError}</div>
			)}
			<MyInput
				onBlur={e => blurHandler(e)}
				value={loginTextValue}
				onChange={changeTextLogin}
				labelID='welcomeLogin'
				label='Логин'
				type='text'
				name='login'
			/>
			{passDirty && passError && (
				<div style={{ color: 'red' }}>{passError}</div>
			)}
			<MyInput
				required
				onBlur={e => blurHandler(e)}
				value={passTextValue}
				onChange={changeTextPass}
				labelID='welcomePass'
				label='Пароль'
				type='password'
				name='pass'
			/>
			<div className={styles.btnWrapper}>
				<MyButton onClick={enter}>Войти</MyButton>
			</div>
		</form>
	)
}

export default HomePageForm
