import React from 'react'
import Content from './Content/Content'
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

				<Content />

				<FriendsBar />
			</div>
		</div>
	)
}
