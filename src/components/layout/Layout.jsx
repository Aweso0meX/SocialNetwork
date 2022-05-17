import React from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { activeMenuAC } from '../../redux/headerReducer/actions'
import { HeaderBuisness } from './Header/HeaderBuisness'
import styles from './Layout.module.scss'
import { Menu } from './Menu/Menu'

export const Layout = () => {
	const dispatch = useDispatch()

	return (
		<div
			onClick={() => dispatch(activeMenuAC(false))}
			className={styles.layout}
		>
			<HeaderBuisness />
			<Menu />
			<div className={styles.AppWindow}>
				<Outlet />
			</div>
		</div>
	)
}
