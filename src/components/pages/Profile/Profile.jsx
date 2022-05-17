import React from 'react'
import ProfileContent from './Content/ProfileContent'
import FriendsBar from './FriendsBar/FriendsBar'
import ProfileNavigate from './Navigate/ProfileNavigate'
import styles from './Profile.module.scss'
import UserBuisness from './User/UserBuisness'

export const Profile = () => {
	return (
		<div className={styles.pageWrapper}>
			<div className={styles.pageToggle}></div>
			<div className={styles.profileBack}></div>
			<UserBuisness />
			<div className={styles.profileContentWrapper}>
				<ProfileNavigate />
				<ProfileContent />
				<FriendsBar />
			</div>
		</div>
	)
}
