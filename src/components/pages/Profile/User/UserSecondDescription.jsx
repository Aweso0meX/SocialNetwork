import React from 'react'
import styles from './User.module.scss'
import { MdFileDownloadDone } from 'react-icons/md'
import { ImBlocked } from 'react-icons/im'

const UserSecondDescription = ({ PROFILE }) => {
	return (
		<div className={styles.userSecondDescr}>
			<div className={styles.userSecDescrItem}>
				<span>Место проживания: </span>
				{PROFILE.country ? (
					<span>{PROFILE.country} ,</span>
				) : (
					<span>Страна не указана ,</span>
				)}
				{PROFILE.city ? (
					<span> Город: {PROFILE.city}</span>
				) : (
					<span> Город не указан</span>
				)}
			</div>
			<div className={styles.userSecDescrItem}>
				<span>Образование: </span>
				{PROFILE.univer ? (
					<span>{PROFILE.univer} ,</span>
				) : (
					<span>Университет не указан</span>
				)}
				{PROFILE.univer ? <span>{PROFILE.yearUniver}</span> : null}
			</div>
			{PROFILE.work ? (
				<div style={{ color: 'green' }}>
					<span className={styles.userSecDescrWork}>
						<MdFileDownloadDone />В поиске работы
					</span>
				</div>
			) : (
				<div style={{ color: 'red' }}>
					<span className={styles.userSecDescrWork}>
						<ImBlocked />
						Не ищу работу
					</span>
				</div>
			)}
		</div>
	)
}

export default UserSecondDescription
