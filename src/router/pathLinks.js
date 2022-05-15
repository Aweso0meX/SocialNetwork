import {
	FaUserCircle,
	FaUserFriends,
	FaMusic,
	FaVideo,
	FaNewspaper,
} from 'react-icons/fa'
import {
	PATH_PROFILE,
	PATH_FRIENDS,
	PATH_MUSIC,
	PATH_VIDEO,
	PATH_NEWS,
} from './Routes'

export const pathLinks = [
	{ path: PATH_PROFILE, name: 'Профиль', Component: FaUserCircle },
	{ path: PATH_FRIENDS, name: 'Друзья', Component: FaUserFriends },
	{ path: PATH_MUSIC, name: 'Музыка', Component: FaMusic },
	{ path: PATH_VIDEO, name: 'Видео', Component: FaVideo },
	{ path: PATH_NEWS, name: 'Новости', Component: FaNewspaper },
]
