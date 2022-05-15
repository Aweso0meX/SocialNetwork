import React from 'react'
import styles from './MyInput.module.scss'

export const MyInput = ({ labelID, label, ...props }) => {
	return (
		<>
			<div className={styles.labelWrapper}>
				<label className={styles.label} htmlFor={labelID}>
					{label}
				</label>
			</div>
			<input id={labelID} {...props} className={styles.input} />
		</>
	)
}
