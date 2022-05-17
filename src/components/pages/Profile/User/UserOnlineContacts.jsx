import React from 'react'
import styles from './User.module.scss'
import {
	FaTwitterSquare,
	FaFacebookSquare,
	FaLinkedin,
	FaInstagramSquare,
	FaDribbbleSquare,
} from 'react-icons/fa'

const UserOnlineContacts = ({ PROFILE }) => {
	return (
		<div className={styles.onlineStatus}>
			{PROFILE.online ? (
				<span style={{ color: 'green' }}>Online</span>
			) : (
				<span style={{ color: 'red' }}>Offline</span>
			)}
			<div className={styles.userContact}>
				{PROFILE.twitter ? (
					<a
						className={styles.ContactLink}
						href={'https://twitter.com/' + PROFILE.twitter}
					>
						<FaTwitterSquare />
					</a>
				) : (
					<FaTwitterSquare className={styles.contactDisabled} />
				)}
				{PROFILE.facebook ? (
					<a
						className={styles.ContactLink}
						href={'https://www.facebook.com/' + PROFILE.facebook}
					>
						<FaFacebookSquare />
					</a>
				) : (
					<FaFacebookSquare className={styles.contactDisabled} />
				)}
				{PROFILE.linkedin ? (
					<a
						className={styles.ContactLink}
						href={'https://www.linkedin.com/in/' + PROFILE.linkedin}
					>
						<FaLinkedin />
					</a>
				) : (
					<FaLinkedin className={styles.contactDisabled} />
				)}
				{PROFILE.instagram ? (
					<a
						className={styles.ContactLink}
						href={'http://www.instagram.com/' + PROFILE.instagram}
					>
						<FaInstagramSquare />
					</a>
				) : (
					<FaInstagramSquare className={styles.contactDisabled} />
				)}
				{PROFILE.dribble ? (
					<a className={styles.ContactLink} href={PROFILE.dribble}>
						<FaDribbbleSquare />
					</a>
				) : (
					<FaDribbbleSquare className={styles.contactDisabled} />
				)}
			</div>
		</div>
	)
}

export default UserOnlineContacts
