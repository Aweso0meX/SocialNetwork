import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { PATH_LOGIN } from './Routes'

export const AuthHoC = ({ children }) => {
	const isAuth = useSelector(state => state.login.isAuth)

	if (!isAuth) {
		return <Navigate to={PATH_LOGIN} />
	}
	return children
}
