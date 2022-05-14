import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeMenuAC, changeLoginAC } from '../../../redux/headerReducer'
import Header from './Header'

export const HeaderBuisness = () => {
	const toggleMenu = useSelector(state => state.header.menuActive)
	const dispatch = useDispatch()

	const activeMenu = () => {
		dispatch(activeMenuAC(!toggleMenu))
	}
	const desktopIcon = () => {
		dispatch(activeMenuAC(false))
	}
	const isAuth = useSelector(state => state.header.isAuth)
	const exitLogin = () => {
		dispatch(changeLoginAC(false))
		dispatch(activeMenuAC(false))
	}
	return (
		<Header
			activeMenu={activeMenu}
			desktopIcon={desktopIcon}
			isAuth={isAuth}
			exitLogin={exitLogin}
			toggleMenu={toggleMenu}
		/>
	)
}
