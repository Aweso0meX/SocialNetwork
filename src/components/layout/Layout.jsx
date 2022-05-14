import React from 'react'
import { Outlet } from 'react-router-dom'
import { HomePage } from '../pages/HomePage/HomePage'
import { Header } from './Header/Header'
import styles from './Layout.module.scss'
import { Menu } from './Menu/Menu'

const Layout = () => {
	return (
		<div className={styles.layout}>
			<Header />
			<Menu />
			<div className={styles.AppWindow}>
				<HomePage />
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
