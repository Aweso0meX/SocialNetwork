import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { headerReducer } from './headerReducer/headerReducer'
import { loginReducer } from './loginReducer/loginReducer'
import { ProfileReducer } from './ProfileReducer/ProfileReducer'
import { regReducer } from './registrationReducer/regReducer'
import thunk from 'redux-thunk'
import { navigateReducer } from './ProfileReducer/NavigationReducer/NavigationReducer'

const rootReducer = combineReducers({
	header: headerReducer,
	login: loginReducer,
	reg: regReducer,
	profile: ProfileReducer,
	navigate: navigateReducer,
})
export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
)
