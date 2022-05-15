import React from 'react'
import { NavLink, useMatch } from 'react-router-dom'
import styles from './customLink.module.scss'

export const CustomLink = ({ children, to, ...props }) => {
	const match = useMatch(to)
	return (
		<NavLink
			to={to}
			{...props}
			className={
				match
					? `${styles.hvr_underline_from_center} ${styles.active}`
					: styles.hvr_underline_from_center
			}
		>
			{children}
		</NavLink>
	)
}
