import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { headerReducer } from './headerReducer/headerReducer'
import { loginReducer } from './loginReducer/loginReducer'
import { ProfileReducer } from './ProfileReducer/ProfileReducer'
import { regReducer } from './registrationReducer/regReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
	header: headerReducer,
	login: loginReducer,
	reg: regReducer,
	profile: ProfileReducer,
})
export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
)
