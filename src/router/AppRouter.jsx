import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { HomePage } from '../components/pages/HomePage/HomePage'
import NotFound from '../components/pages/NotFound/NotFound'
import { PATH_HOMEPAGE, PATH_NOTFOUND, privateRoutes } from './Routes'

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path={PATH_HOMEPAGE} element={<HomePage />} />
				<Route path={PATH_NOTFOUND} element={<NotFound />} />
				{privateRoutes.map(route => {
					const Component = route.Component
					return (
						<Route key={route.path} path={route.path} element={<Component />} />
					)
				})}
			</Route>
		</Routes>
	)
}
