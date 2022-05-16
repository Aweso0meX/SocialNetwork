import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CustomLink } from '../../../custom/UI/customLink/customLink'
import styles from './Menu.module.scss'
import { pathLinks } from '../../../router/pathLinks'
import { activeMenuAC } from '../../../redux/headerReducer/actions'

export const Menu = () => {
	const toggleMenu = useSelector(state => state.header.menuActive)
	const dispatch = useDispatch()

	const closeMenu = () => {
		dispatch(activeMenuAC(false))
	}
	return (
		<div
			onClick={e => e.stopPropagation()}
			className={
				toggleMenu
					? `${styles.menuWrapper} ${styles.active}`
					: styles.menuWrapper
			}
		>
			{pathLinks.map(link => {
				const Component = link.Component
				return (
					<div
						onClick={closeMenu}
						key={link.path}
						className={
							toggleMenu
								? `${styles.animationWrapper} ${styles.activeLinks}`
								: styles.animationWrapper
						}
					>
						<div className={styles.linkWrapper}>
							<CustomLink className={styles.link} to={link.path}>
								<Component /> {link.name}
							</CustomLink>
						</div>
					</div>
				)
			})}
		</div>
	)
}
