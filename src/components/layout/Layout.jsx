import React from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderBuisness } from './Header/HeaderBuisness'
import styles from './Layout.module.scss'
import { Menu } from './Menu/Menu'

const Layout = () => {
	return (
		<div className={styles.layout}>
			<HeaderBuisness />
			<Menu />
			<div className={styles.AppWindow}>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
