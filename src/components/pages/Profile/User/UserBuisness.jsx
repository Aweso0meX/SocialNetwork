import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { STATE_PROFILE } from '../../../../redux/ProfileReducer/selectors'
import {
	changeStatusAC,
	changeStatusTextAC,
} from '../../../../redux/ProfileReducer/actions'

import User from './User'

const UserBuisness = () => {
	const PROFILE = useSelector(STATE_PROFILE)
	const dispatch = useDispatch()

	const changeStatus = e => {
		dispatch(changeStatusAC(e))
	}
	const changeStatusHandler = () => changeStatus(!PROFILE.changeStatus)

	const handleKeyDown = event => {
		if (event.key === 'Enter') {
			dispatch(changeStatusAC(false))
		}
	}
	const changeTextStatus = e => dispatch(changeStatusTextAC(e.target.value))
	return (
		<User
			PROFILE={PROFILE}
			changeStatusHandler={changeStatusHandler}
			handleKeyDown={handleKeyDown}
			changeTextStatus={changeTextStatus}
		/>
	)
}

export default UserBuisness
