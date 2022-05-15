import React from 'react'
import styles from './HomePage.module.scss'
import { MyInput } from '../../../custom/UI/MyInput/MyInput'
import { MyButton } from '../../../custom/UI/MyButton/MyButton'
import { CustomLink } from '../../../custom/UI/customLink/customLink'
import { PATH_REGISTRATION } from '../../../router/Routes'
import Logo from '../../../assets/Logo.svg'

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
		<div className={styles.welcomeLogin}>
			<div className={styles.formWrapper}>
				<img src={Logo} alt='logo' />

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
						<CustomLink to={PATH_REGISTRATION}>Создать профиль</CustomLink>
						<div>
							<MyButton onClick={enter}>Войти</MyButton>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default HomePageForm
