import stateSchema from 'middlewares/stateSchema'
import tv4 from 'tv4'

export default ({ dispatch, getState }) => next => action => {
	next(action)
	return !tv4.validate(getState(), stateSchema)
		? console.warn('Invalid state')
		: null
}
