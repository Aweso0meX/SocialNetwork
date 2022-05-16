import React, { useState, useEffect } from 'react'
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

	const time = new Date()
	const [clock, setClock] = useState(time)
	const tick = () => {
		setClock(new Date())
	}
	const thisTimer = () => {
		setInterval(() => {
			tick()
		}, 40000)
	}
	useEffect(() => {
		thisTimer()
		return () => {
			clearInterval(thisTimer)
		}
	}, [])

	return (
		<div>
			<div className={styles.pageWrapper}></div>
			{isAuth && (
				<div className={styles.clockWrapper}>
					<span>
						{clock.getHours() >= 10 ? clock.getHours() : `0${clock.getHours()}`}
						:
					</span>
					<span>
						{clock.getMinutes() >= 10
							? clock.getMinutes()
							: `0${clock.getMinutes()}`}
					</span>
				</div>
			)}
			{isDesktop && (
				<video autoPlay muted loop className={styles.WelcomeVideo}>
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
