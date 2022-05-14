import React from 'react'
import styles from './Header.module.scss'
import Logo from '../../../assets/Logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { activeMenuAC } from '../../../redux/headerReducer'

export const Header = () => {
	const toggleMenu = useSelector(state => state.header.menuActive)
	const dispatch = useDispatch()
	const activeMenu = () => {
		dispatch(activeMenuAC(!toggleMenu))
	}
	return (
		<div className={styles.header}>
			<div className={styles.header_container}>
				<div>
					<img src={Logo} alt='logo' />
				</div>
				<div
					onClick={activeMenu}
					className={
						toggleMenu
							? `${styles.hamburgerWrapper} ${styles.active}`
							: styles.hamburgerWrapper
					}
				>
					<span className={styles.hamburger}></span>
				</div>
				<div></div>
			</div>
		</div>
	)
}
