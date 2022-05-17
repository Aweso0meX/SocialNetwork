import React from 'react'
import styles from './User.module.scss'
import {
	FaTwitterSquare,
	FaFacebookSquare,
	FaLinkedin,
	FaInstagramSquare,
	FaDribbbleSquare,
} from 'react-icons/fa'

import { Link } from 'react-router-dom'

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
					<Link className={styles.ContactLink} to={PROFILE.twitter}>
						<FaTwitterSquare />
					</Link>
				) : (
					<FaTwitterSquare className={styles.contactDisabled} />
				)}
				{PROFILE.facebook ? (
					<Link className={styles.ContactLink} to={PROFILE.facebook}>
						<FaFacebookSquare />
					</Link>
				) : (
					<FaFacebookSquare className={styles.contactDisabled} />
				)}
				{PROFILE.linkedin ? (
					<Link className={styles.ContactLink} to={PROFILE.linkedin}>
						<FaLinkedin />
					</Link>
				) : (
					<FaLinkedin className={styles.contactDisabled} />
				)}
				{PROFILE.instagram ? (
					<Link className={styles.ContactLink} to={PROFILE.instagram}>
						<FaInstagramSquare />
					</Link>
				) : (
					<FaInstagramSquare className={styles.contactDisabled} />
				)}
				{PROFILE.dribble ? (
					<Link className={styles.ContactLink} to={PROFILE.dribble}>
						<FaDribbbleSquare />
					</Link>
				) : (
					<FaDribbbleSquare className={styles.contactDisabled} />
				)}
			</div>
		</div>
	)
}

export default UserOnlineContacts
