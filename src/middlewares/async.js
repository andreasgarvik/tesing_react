export default ({ dispatch }) => next => action => {
	return action.payload && action.payload.then
		? action.payload.then(response => {
				dispatch({ ...action, payload: response })
		  })
		: next(action)
}
