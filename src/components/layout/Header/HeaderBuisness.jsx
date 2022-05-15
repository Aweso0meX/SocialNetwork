import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeMenuAC } from '../../../redux/headerReducer/actions'
import Header from './Header'
import { changeLoginAC } from '../../../redux/loginReducer/actions'

export const HeaderBuisness = () => {
	const toggleMenu = useSelector(state => state.header.menuActive)
	const dispatch = useDispatch()

	const activeMenu = () => {
		dispatch(activeMenuAC(!toggleMenu))
	}
	const desktopIcon = () => {
		dispatch(activeMenuAC(false))
	}
	const isAuth = useSelector(state => state.login.isAuth)
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
