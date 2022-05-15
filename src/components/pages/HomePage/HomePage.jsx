import React from 'react'
import HomePageVideo from '../../../assets/homePageVideo.mp4'
import styles from './HomePage.module.scss'
import Logo from '../../../assets/Logo.svg'
import { useSelector } from 'react-redux'
import HomePageFormBuisness from './HomePageFormBuisness'

export const HomePage = () => {
	const isAuth = useSelector(state => state.login.isAuth)
	return (
		<div>
			<video autoPlay muted loop className={styles.WelcomeVideo}>
				<source src={HomePageVideo} type='video/mp4' />
			</video>
			{isAuth ? null : (
				<div className={styles.welcomeLogin}>
					<div className={styles.formWrapper}>
						<img src={Logo} alt='logo' />
						<HomePageFormBuisness isAuth={isAuth} />
					</div>
				</div>
			)}
		</div>
	)
}
