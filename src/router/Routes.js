import { Friends } from '../components/pages/Friends/Friends'
import { Login } from '../components/pages/Login/Login'
import { Music } from '../components/pages/Music/Music'
import { News } from '../components/pages/News/News'
import { Profile } from '../components/pages/Profile/Profile'
import { Video } from '../components/pages/Video/Video'

//Паблик роуты
export const PATH_HOMEPAGE = 'SocialNetwork/'
export const PATH_NOTFOUND = '*'
export const PATH_LOGIN = '/SocialNetwork/Login'
export const PATH_REGISTRATION = '/SocialNetwork/Registration'

//Приват роуты
export const PATH_PROFILE = '/SocialNetwork/Profile'
export const PATH_FRIENDS = '/SocialNetwork/Friends'
export const PATH_MUSIC = '/SocialNetwork/Music'
export const PATH_NEWS = '/SocialNetwork/News'
export const PATH_VIDEO = '/SocialNetwork/Video'

export const privateRoutes = [
	{ path: PATH_PROFILE, Component: Profile },
	{ path: PATH_FRIENDS, Component: Friends },
	{ path: PATH_MUSIC, Component: Music },
	{ path: PATH_NEWS, Component: News },
	{ path: PATH_VIDEO, Component: Video },
]
