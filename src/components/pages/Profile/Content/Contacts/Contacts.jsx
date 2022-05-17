import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { MyButton } from '../../../../../custom/UI/MyButton/MyButton'
import { MyInput } from '../../../../../custom/UI/MyInput/MyInput'
import {
	changeFacebookAC,
	changeLinkedinAC,
	changeTwitterAC,
} from '../../../../../redux/ProfileReducer/actions'
import styles from './Contacts.module.scss'

const Contacts = () => {
	const dispatch = useDispatch()

	//Twitter
	const [twitterValue, setTwitterValue] = useState('')
	const changeTwiiterValue = e => {
		setTwitterValue(e.target.value)
	}
	//Facebook
	const [facebookValue, setFacebookValue] = useState('')
	const changeFacebookValue = e => {
		setFacebookValue(e.target.value)
	}
	//Linkedin
	const [linkedinvalue, setLinkedinValue] = useState('')
	const changeLinkedinValue = e => {
		setLinkedinValue(e.target.value)
	}
	//Instagram
	const [instaValue, setInstaValue] = useState('')
	const changeInstaValue = e => {
		setInstaValue(e.target.value)
	}
	//Dribble
	const [dribbleValue, setDribbleValue] = useState('')
	const changeDribbleValue = e => {
		setDribbleValue(e.target.value)
	}

	const saveContacts = () => {
		dispatch(changeTwitterAC(twitterValue))
		dispatch(changeFacebookAC(facebookValue))
		dispatch(changeLinkedinAC(linkedinvalue))
	}
	return (
		<div className={styles.settingsMain}>
			<div>
				<div className={styles.settingsItem}>
					<MyInput
						value={twitterValue}
						onChange={changeTwiiterValue}
						labelID={'twitterID'}
						label={'Профиль Twitter'}
						placeHolder='Введите адресс...'
						type='text'
					/>
				</div>
				<div className={styles.settingsItem}>
					<MyInput
						value={facebookValue}
						onChange={changeFacebookValue}
						labelID={'facebookID'}
						label={'Профиль Facebbok'}
						placeHolder='Введите профиль...'
						type='text'
					/>
				</div>
				<div className={styles.settingsItem}>
					<MyInput
						value={linkedinvalue}
						onChange={changeLinkedinValue}
						labelID={'linkedinID'}
						label={'Профиль Linkedin'}
						placeHolder='Введите профиль...'
						type='text'
					/>
				</div>
				<div className={styles.settingsItem}>
					<MyInput
						value={instaValue}
						onChange={changeInstaValue}
						labelID={'instaID'}
						label={'Профиль Instagram'}
						placeHolder='Введите профиль...'
						type='text'
					/>
				</div>
				<div className={styles.settingsItem}>
					<MyInput
						value={dribbleValue}
						onChange={changeDribbleValue}
						labelID={'dribbleID'}
						label={'Профиль Dribble'}
						placeHolder='Введите профиль...'
						type='text'
					/>
				</div>
			</div>
			<div className={styles.btnWrapper}>
				<MyButton onClick={saveContacts}>Сохранить</MyButton>
			</div>
		</div>
	)
}

export default Contacts
