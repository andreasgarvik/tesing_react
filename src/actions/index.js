import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types'
import axios from 'axios'

export const saveComment = comment => {
	return {
		type: SAVE_COMMENT,
		payload: comment
	}
}

export const fetchComments = () => {
	const res = axios.get('https://jsonplaceholder.typicode.com/comments')
	return {
		type: FETCH_COMMENTS,
		payload: res
	}
}

export const changeAuth = isLoggedIn => {
	return {
		type: CHANGE_AUTH,
		payload: isLoggedIn
	}
}
