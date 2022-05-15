import React from 'react'
import styles from './Header.module.scss'
import Logo from '../../../assets/Logo.svg'
import { ImExit } from 'react-icons/im'
import { FaUserAlt, FaDesktop } from 'react-icons/fa'
import { PATH_HOMEPAGE, PATH_LOGIN } from '../../../router/Routes'
import { CustomLink } from '../../../custom/UI/customLink/customLink'
import { MdOutlineDoneOutline } from 'react-icons/md'

const Header = ({ activeMenu, desktopIcon, isAuth, exitLogin, toggleMenu }) => {
	return (
		<div className={styles.header}>
			<div className={styles.header_container}>
				{isAuth ? (
					<div className={styles.authMessage}>
						<MdOutlineDoneOutline />
						<h1 className={styles.welcomeText}>Добро пожаловать!</h1>
					</div>
				) : null}
				<div className={styles.logoWrapper}>
					<img src={Logo} alt='logo' />
				</div>
				<div
					onClick={activeMenu}
					className={
						toggleMenu
							? `${styles.hamburgerWrapper} ${styles.active}`
							: styles.hamburgerWrapper
					}
				>
					<span className={styles.hamburger}></span>
				</div>
				<div className={styles.headerIcons}>
					<CustomLink onClick={desktopIcon} to={PATH_HOMEPAGE}>
						<FaDesktop />
					</CustomLink>
					{isAuth ? (
						<CustomLink
							onClick={exitLogin}
							style={{ marginLeft: 50 }}
							to={PATH_LOGIN}
						>
							<ImExit />
						</CustomLink>
					) : (
						<CustomLink
							onClick={desktopIcon}
							style={{ marginLeft: 50 }}
							to={PATH_LOGIN}
						>
							<FaUserAlt />
						</CustomLink>
					)}
				</div>
			</div>
		</div>
	)
}

export default Header
