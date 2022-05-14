import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './customLink.module.css'

const customLink = ({ children, to, ...props }) => {
	return (
		<NavLink to={to} {...props} className={styles.hvr_underline_from_center}>
			{children}
		</NavLink>
	)
}

export default customLink
