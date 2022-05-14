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
} from '../../../router/Routes'

export const pathLinks = [
	{ path: PATH_PROFILE, name: 'Профиль', icon: FaUserCircle },
	{ path: PATH_FRIENDS, name: 'Друзья', icon: FaUserFriends },
	{ path: PATH_MUSIC, name: 'Музыка', icon: FaMusic },
	{ path: PATH_VIDEO, name: 'Видео', icon: FaVideo },
	{ path: PATH_NEWS, name: 'Новости', icon: FaNewspaper },
]
