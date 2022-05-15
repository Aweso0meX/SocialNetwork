import React from 'react'
import { useSelector } from 'react-redux'
import { CustomLink } from '../../../custom/UI/customLink/customLink'
import styles from './Menu.module.scss'
import { pathLinks } from '../../../router/pathLinks'

export const Menu = () => {
	const toggleMenu = useSelector(state => state.header.menuActive)
	return (
		<div
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
						key={link.path}
						className={
							toggleMenu
								? `${styles.animationWrapper} ${styles.activeLinks}`
								: styles.animationWrapper
						}
					>
						<CustomLink to={link.path}>
							<Component /> {link.name}
						</CustomLink>
					</div>
				)
			})}
		</div>
	)
}
