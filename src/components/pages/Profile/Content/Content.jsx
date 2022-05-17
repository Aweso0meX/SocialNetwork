import React from 'react'
import styles from './Content.module.scss'
import './ContentTransition.scss'

import { useSelector } from 'react-redux'
import SettingsBuisness from './Settings/SettingsBuisness'
import Contacts from './Contacts/Contacts'

const Content = () => {
	const settingWindow = useSelector(state => state.navigate.settingWindow)
	const contactWindow = useSelector(state => state.navigate.contactWindow)
	return (
		<div className={styles.profileContent}>
			{settingWindow ? <SettingsBuisness /> : null}
			{contactWindow ? <Contacts /> : null}
		</div>
	)
}

export default Content
