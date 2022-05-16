import React from 'react'
import styles from './Profile.module.scss'
import User from './User/User'

export const Profile = () => {
	return (
		<div className={styles.pageWrapper}>
			<div className={styles.pageToggle}></div>
			<div className={styles.profileBack}></div>
			<User />
		</div>
	)
}
