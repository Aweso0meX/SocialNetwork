import React from 'react'
import { useSelector } from 'react-redux'
import loginVideo from '../../../assets/loginBack.mp4'
import { IS_AUTH } from '../../../redux/loginReducer/selectors'
import HomePageFormBuisness from '../HomePage/HomePageFormBuisness'
import loginBackMobile from '../../../assets/loginBack.jpg'
import styles from './Login.module.scss'
import { useMediaQuery } from 'react-responsive'

export const Login = () => {
	const isDesktop = useMediaQuery({ minWidth: 1200 })
	const isMobile = useMediaQuery({ maxWidth: 1199 })
	const isAuth = useSelector(IS_AUTH)
	return (
		<div>
			{isDesktop && (
				<video autoPlay muted loop className={styles.backVideo}>
					<source src={loginVideo} type='video/mp4' />
				</video>
			)}
			{isMobile && (
				<img src={loginBackMobile} alt='' className={styles.backImageMobile} />
			)}
			<HomePageFormBuisness isAuth={isAuth} />
		</div>
	)
}
