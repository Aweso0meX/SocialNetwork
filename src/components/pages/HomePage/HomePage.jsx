import React from 'react'
import HomePageVideo from '../../../assets/homePageVideo.mp4'
import styles from './HomePage.module.scss'
import { useSelector } from 'react-redux'
import HomePageFormBuisness from './HomePageFormBuisness'
import mobileBack from '../../../assets/homepageBackMobile.jpg'

export const HomePage = () => {
	const isAuth = useSelector(state => state.login.isAuth)
	return (
		<div>
			<video
				onClick={e => e.stopPropagation()}
				autoPlay
				muted
				loop
				className={styles.WelcomeVideo}
			>
				<source src={HomePageVideo} type='video/mp4' />
			</video>
			<img src={mobileBack} className={styles.WelcomeMobile} alt='' />
			{isAuth ? null : <HomePageFormBuisness isAuth={isAuth} />}
		</div>
	)
}
