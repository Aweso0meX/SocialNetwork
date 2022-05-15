import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { headerReducer } from './headerReducer/headerReducer'
import { loginReducer } from './loginReducer/loginReducer'

const rootReducer = combineReducers({
	header: headerReducer,
	login: loginReducer,
})
export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
)
