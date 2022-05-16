import React from 'react'
import regVideo from '../../../assets/registrationPage.mp4'
import Logo from '../../../assets/Logo.svg'
import styles from './Registration.module.scss'
import { MyInput } from '../../../custom/UI/MyInput/MyInput'
import { MyButton } from '../../../custom/UI/MyButton/MyButton'
import { CustomLink } from '../../../custom/UI/customLink/customLink'
import { PATH_LOGIN } from '../../../router/Routes'
import backMobile from '../../../assets/RegistrMobileBack.jpg'

const Registration = ({
	dirtyName,
	errorName,
	setStateName,
	blur,
	nameValue,
	dirtySecondName,
	errorSecondName,
	setStateSecondName,
	secondNameValue,
	dirtyMail,
	errorMail,
	setStateMail,
	mailValue,
	dirtyPass,
	setStatePassAgain,
	errorPass,
	setStatePass,
	errorPassAgain,
	dirtyPassAgain,
	passValue,
	passAgainValue,
	enter,
}) => {
	return (
		<div>
			<video autoPlay muted loop className={styles.backVideo}>
				<source src={regVideo} type='video/mp4' />
			</video>
			<img src={backMobile} alt='' className={styles.backImage} />
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

export default Registration
