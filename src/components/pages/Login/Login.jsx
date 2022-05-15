import React from 'react'
import { useSelector } from 'react-redux'
import loginVideo from '../../../assets/loginBack.mp4'
import { IS_AUTH } from '../../../redux/loginReducer/selectors'
import HomePageFormBuisness from '../HomePage/HomePageFormBuisness'
import styles from './Login.module.scss'

export const Login = () => {
	const isAuth = useSelector(IS_AUTH)
	return (
		<div>
			<video autoPlay muted loop className={styles.backVideo}>
				<source src={loginVideo} type='video/mp4' />
			</video>
			<HomePageFormBuisness isAuth={isAuth} />
		</div>
	)
}
