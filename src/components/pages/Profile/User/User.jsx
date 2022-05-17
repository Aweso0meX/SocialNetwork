import React from 'react'
import styles from './User.module.scss'
import UserDescription from './UserDescription'
import UserSecondDescription from './UserSecondDescription'
import UserOnlineContacts from './UserOnlineContacts'
import user from '../../../../assets/empty.png'

const User = ({
	PROFILE,
	changeStatusHandler,
	handleKeyDown,
	changeTextStatus,
}) => {
	return (
		<div className={styles.profileUserInfo}>
			{PROFILE.avatar ? (
				<img className={styles.userPhoto} src={PROFILE.avatar} alt='avatar' />
			) : (
				<img className={styles.userPhoto} src={user} alt='avatar' />
			)}
			<UserDescription
				PROFILE={PROFILE}
				changeStatusHandler={changeStatusHandler}
				handleKeyDown={handleKeyDown}
				changeTextStatus={changeTextStatus}
			/>
			<UserSecondDescription PROFILE={PROFILE} />
			<UserOnlineContacts PROFILE={PROFILE} />
		</div>
	)
}

export default User
