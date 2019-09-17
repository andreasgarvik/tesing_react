import { combineReducers } from 'redux'
import commentsReducer from 'reducers/commentReducer'
import auth from 'reducers/auth'

export default combineReducers({
	comments: commentsReducer,
	auth
})
