import React from 'react'
import { connect } from 'react-redux'
import * as action from 'actions'
import requireAuth from 'components/requireAuth'

class CommentBox extends React.Component {
	state = { comment: '' }

	handleChange = e => {
		this.setState({ comment: e.target.value })
	}

	handleSubmit = e => {
		e.preventDefault()
		this.setState({ comment: '' })
		this.props.saveComment(this.state.comment)
	}

	render = () => {
		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<h4>Add a comment</h4>
					<textarea onChange={this.handleChange} value={this.state.comment} />
					<div>
						<button>Submit Comment</button>
					</div>
				</form>
				<button className='fetch-comments' onClick={this.props.fetchComments}>
					Fetch Comments
				</button>
			</>
		)
	}
}

export default connect(
	null,
	action
)(requireAuth(CommentBox))
