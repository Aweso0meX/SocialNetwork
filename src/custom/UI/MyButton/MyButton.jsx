import React from 'react'
import styles from './MyButton.module.scss'

export const MyButton = ({ children, ...props }) => {
	return (
		<button
			className={`${styles.hvr_bounce_to_right} ${styles.btn}`}
			{...props}
		>
			{children}
		</button>
	)
}
