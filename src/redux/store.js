import { combineReducers, createStore } from 'redux'
import { headerReducer } from './headerReducer'

const rootReducer = combineReducers({
	header: headerReducer,
})
export const store = createStore(rootReducer)
