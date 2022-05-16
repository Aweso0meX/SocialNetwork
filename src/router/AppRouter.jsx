import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { HomePage } from '../components/pages/HomePage/HomePage'
import { Login } from '../components/pages/Login/Login'
import { NotFound } from '../components/pages/NotFound/NotFound'
import { RegistrationBuisness } from '../components/pages/Registration/RegistrationBuisness'
import { AuthHoC } from './AuthHoC'
import {
	PATH_HOMEPAGE,
	PATH_NOTFOUND,
	PATH_LOGIN,
	PATH_REGISTRATION,
	privateRoutes,
} from './Routes'

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path={PATH_HOMEPAGE} element={<HomePage />} />
				<Route path={PATH_NOTFOUND} element={<NotFound />} />
				<Route path={PATH_LOGIN} element={<Login />} />
				<Route path={PATH_REGISTRATION} element={<RegistrationBuisness />} />
				{privateRoutes.map(route => {
					const Component = route.Component
					return (
						<Route
							key={route.path}
							path={route.path}
							element={
								<AuthHoC>
									<Component />
								</AuthHoC>
							}
						/>
					)
				})}
			</Route>
		</Routes>
	)
}
