import React from 'react'
import styles from './User.module.scss'
import user from '../../../../assets/empty.png'
import { RiCakeFill } from 'react-icons/ri'
import { MdFileDownloadDone } from 'react-icons/md'
import {
	FaTwitterSquare,
	FaFacebookSquare,
	FaLinkedin,
	FaInstagramSquare,
	FaDribbbleSquare,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const User = () => {
	return (
		<div className={styles.profileUserInfo}>
			<img className={styles.userPhoto} src={user} alt='avatar' />
			<div className={styles.userDescr}>
				<div>
					<h5 className={styles.userName}>Дмитрий</h5>
					<span className={styles.userSecondName}> Боровик</span>
				</div>
				<div className={styles.userHB}>
					<p className=''>
						<RiCakeFill className={styles.iconHB} /> День рождения:
					</p>
					<span>28.07.1995</span>
				</div>

				<div className={styles.userStatusChange}>
					<p>Изменить статус</p>
				</div>
				<div>
					<span className={styles.userStatusTitle}>Ваш статус:</span>
					<span>Status</span>
				</div>
			</div>
			<div className={styles.userSecondDescr}>
				<div className={styles.userSecDescrItem}>
					<span>Место проживания: </span>
					<span>Казахстан ,</span>
					<span> Павлодар</span>
				</div>
				<div className={styles.userSecDescrItem}>
					<span>Образование: </span>
					<span>ОМГУПС ,</span>
					<span> 2013г</span>
				</div>

				<div className={styles.userSecDescrItemWork}>
					<span className={styles.userSecDescrWork}>
						<MdFileDownloadDone />В поиске работы
					</span>
				</div>
			</div>
			<div className={styles.onlineStatus}>
				<span>Online</span>
				<div className={styles.userContact}>
					<Link className={styles.ContactLink} to={'#s'}>
						<FaTwitterSquare />
					</Link>
					<Link className={styles.ContactLink} to={'#s'}>
						<FaFacebookSquare />
					</Link>
					<Link className={styles.ContactLink} to={'#s'}>
						<FaLinkedin />
					</Link>
					<Link className={styles.ContactLink} to={'#s'}>
						<FaInstagramSquare />
					</Link>
					<Link className={styles.ContactLink} to={'#s'}>
						<FaDribbbleSquare />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default User
