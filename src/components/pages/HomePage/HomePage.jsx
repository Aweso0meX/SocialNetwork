import React from 'react'
import HomePageVideo from '../../../assets/homePageVideo.mp4'
import styles from './HomePage.module.scss'
import { useSelector } from 'react-redux'
import HomePageFormBuisness from './HomePageFormBuisness'
import mobileBack from '../../../assets/homepageBackMobile.jpg'
import { useMediaQuery } from 'react-responsive'

export const HomePage = () => {
	const isAuth = useSelector(state => state.login.isAuth)
	const isDesktop = useMediaQuery({ minWidth: 1200 })
	const isMobile = useMediaQuery({ maxWidth: 1199 })
	return (
		<div>
			{isDesktop && (
				<video
					onClick={e => e.stopPropagation()}
					autoPlay
					muted
					loop
					className={styles.WelcomeVideo}
				>
					<source src={HomePageVideo} type='video/mp4' />
				</video>
			)}
			{isMobile && (
				<img src={mobileBack} className={styles.WelcomeMobile} alt='' />
			)}
			{isAuth ? null : <HomePageFormBuisness isAuth={isAuth} />}
		</div>
	)
}
