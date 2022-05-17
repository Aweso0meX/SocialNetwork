import React from 'react'
import styles from './User.module.scss'
import { RiCakeFill } from 'react-icons/ri'

const UserDescription = ({
	PROFILE,
	changeStatusHandler,
	handleKeyDown,
	changeTextStatus,
}) => {
	return (
		<div className={styles.userDescr}>
			<div>
				{PROFILE.name ? (
					<h5 className={styles.userName}>{PROFILE.name}</h5>
				) : (
					<h5 className={styles.userName}>Имя не указано</h5>
				)}
				{PROFILE.secondName ? (
					<span className={styles.userSecondName}> {PROFILE.secondName}</span>
				) : (
					<span className={styles.userSecondName}> Фамилия не указана</span>
				)}
			</div>
			<div className={styles.userHB}>
				<p>
					<RiCakeFill className={styles.iconHB} /> День рождения:
				</p>
				{PROFILE.dateOfBirth ? (
					<span>{PROFILE.dateOfBirth}</span>
				) : (
					<span>Дата не указана</span>
				)}
			</div>

			<div onClick={changeStatusHandler} className={styles.userStatusChange}>
				<p>Изменить статус</p>
			</div>
			<div className={styles.statusWrapper}>
				<span className={styles.userStatusTitle}>Ваш статус:</span>
				{PROFILE.changeStatus ? (
					<textarea
						onKeyDown={handleKeyDown}
						value={PROFILE.statusText}
						onChange={changeTextStatus}
						className={styles.statusArea}
						autofocus
						maxlength='20'
						cols='30'
						rows='1'
						placeholder='Введите статус...'
					></textarea>
				) : (
					<span>{PROFILE.statusText}</span>
				)}
			</div>
		</div>
	)
}

export default UserDescription
