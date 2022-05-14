import React from 'react'
import HomePageVideo from '../../../assets/homePageVideo.mp4'
import style from './HomePage.module.scss'

export const HomePage = () => {
	return (
		<div>
			<video autoPlay muted loop className={style.WelcomeVideo}>
				<source src={HomePageVideo} type='video/mp4' />
			</video>
		</div>
	)
}
