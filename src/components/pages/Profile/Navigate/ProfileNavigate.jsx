import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	windowContactAC,
	windowGaleryAC,
	windowMessengeAC,
	windowPublicAC,
	windowSettingsAC,
} from '../../../../redux/ProfileReducer/NavigationReducer/NavigationReducer'
import styles from './ProfileNavigate.module.scss'

const ProfileNavigate = () => {
	const isOpenSettings = useSelector(state => state.navigate.settingWindow)
	const isOpenMessenge = useSelector(state => state.navigate.messangeWindow)
	const isOpenGalery = useSelector(state => state.navigate.galeryWindow)
	const isOpenPublic = useSelector(state => state.navigate.publicWindow)
	const isOpenContact = useSelector(state => state.navigate.contactWindow)
	const dispatch = useDispatch()

	const windowSettingButton = () => {
		dispatch(windowContactAC(false))
		dispatch(windowGaleryAC(false))
		dispatch(windowPublicAC(false))
		dispatch(windowMessengeAC(false))
		dispatch(windowSettingsAC(true))
	}
	const windowMessageButton = () => {
		dispatch(windowContactAC(false))
		dispatch(windowGaleryAC(false))
		dispatch(windowPublicAC(false))
		dispatch(windowSettingsAC(false))
		dispatch(windowMessengeAC(true))
	}
	const windowPublicButton = () => {
		dispatch(windowContactAC(false))
		dispatch(windowGaleryAC(false))
		dispatch(windowMessengeAC(false))
		dispatch(windowSettingsAC(false))
		dispatch(windowPublicAC(true))
	}
	const windowGaleryButton = () => {
		dispatch(windowContactAC(false))
		dispatch(windowPublicAC(false))
		dispatch(windowMessengeAC(false))
		dispatch(windowSettingsAC(false))
		dispatch(windowGaleryAC(true))
	}
	const windowContactButton = () => {
		dispatch(windowGaleryAC(false))
		dispatch(windowPublicAC(false))
		dispatch(windowMessengeAC(false))
		dispatch(windowSettingsAC(false))
		dispatch(windowContactAC(true))
	}

	return (
		<div className={styles.profileNavigate}>
			<div>
				<div
					onClick={windowMessageButton}
					className={
						isOpenMessenge
							? `${styles.navigateItem} ${styles.activeItem}`
							: styles.navigateItem
					}
				>
					Сообщения
				</div>
				<div
					onClick={windowPublicButton}
					className={
						isOpenPublic
							? `${styles.navigateItem} ${styles.activeItem}`
							: styles.navigateItem
					}
				>
					Мои публикации
				</div>
				<div
					onClick={windowGaleryButton}
					className={
						isOpenGalery
							? `${styles.navigateItem} ${styles.activeItem}`
							: styles.navigateItem
					}
				>
					Галерея
				</div>
				<div
					onClick={windowSettingButton}
					className={
						isOpenSettings
							? `${styles.navigateItem} ${styles.activeItem}`
							: styles.navigateItem
					}
				>
					Редактировать профиль
				</div>
				<div
					onClick={windowContactButton}
					className={
						isOpenContact
							? `${styles.navigateItem} ${styles.activeItem}`
							: styles.navigateItem
					}
				>
					Связь со мной
				</div>
			</div>
		</div>
	)
}

export default ProfileNavigate
